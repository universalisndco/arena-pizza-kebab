const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports.config = { api: { bodyParser: false } };

function getRawBody(req) {
  return new Promise(function(resolve, reject) {
    var chunks = [];
    req.on('data', function(c) { chunks.push(c); });
    req.on('end',  function()  { resolve(Buffer.concat(chunks)); });
    req.on('error', reject);
  });
}

function toFirestoreValue(val) {
  if (val === null || val === undefined) return { nullValue: null };
  if (typeof val === 'boolean') return { booleanValue: val };
  if (typeof val === 'number')  return { doubleValue: val };
  if (typeof val === 'string')  return { stringValue: val };
  if (Array.isArray(val))       return { arrayValue: { values: val.map(toFirestoreValue) } };
  if (typeof val === 'object') {
    var fields = {};
    Object.entries(val).forEach(function(e) { fields[e[0]] = toFirestoreValue(e[1]); });
    return { mapValue: { fields: fields } };
  }
  return { stringValue: String(val) };
}

async function createOrderInFirebase(orderData) {
  var projectId = process.env.FIREBASE_PROJECT_ID || 'arena-pizza-kebab-3f078';
  var url = 'https://firestore.googleapis.com/v1/projects/' + projectId + '/databases/(default)/documents/orders';
  var fields = {};
  Object.entries(orderData).forEach(function(e) { fields[e[0]] = toFirestoreValue(e[1]); });

  // createdAt doit etre une VRAIE date Firestore, comme les commandes especes.
  // Avant, les commandes carte l'enregistraient en texte : deux formats
  // incompatibles dans la meme base, donc tri et dates casses cote admin.
  var created = orderData.createdAt ? new Date(orderData.createdAt) : new Date();
  if (isNaN(created.getTime())) created = new Date();
  fields.createdAt = { timestampValue: created.toISOString() };
  if (orderData.paidAt) {
    var paid = new Date(orderData.paidAt);
    if (!isNaN(paid.getTime())) fields.paidAt = { timestampValue: paid.toISOString() };
  }
  var resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields: fields })
  });
  if (!resp.ok) throw new Error('Firebase error: ' + await resp.text());
  return await resp.json();
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  var rawBody = await getRawBody(req);
  var sig     = req.headers['stripe-signature'];

  var event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch(err) {
    console.error('Webhook signature invalide:', err.message);
    return res.status(400).json({ error: 'Signature invalide' });
  }

  if (event.type === 'checkout.session.completed') {
    var session = event.data.object;
    var meta    = session.metadata || {};
    console.log('Paiement Stripe confirme:', meta.orderNumber);

    try {
      // Reconstituer orderData depuis les metadata (jusqu'a 20 morceaux)
      var orderDataStr = '';
      for (var i = 1; i <= 20; i++) {
        orderDataStr += (meta['orderData' + i] || '');
      }
      var orderData   = {};
      var parseFailed = false;
      try {
        orderData = JSON.parse(orderDataStr);
      } catch(e) {
        parseFailed = true;
        console.error('orderData illisible (' + orderDataStr.length + ' chars):', e.message);
      }

      // Filet de securite : si le JSON est illisible, on repart des cles dediees
      // pour que le ticket ait au moins le client, le tel et l'adresse.
      if (parseFailed || !orderData.firstName) {
        var nameParts = String(meta.cName || '').split(' ');
        orderData.firstName = orderData.firstName || nameParts[0] || '';
        orderData.lastName  = orderData.lastName  || nameParts.slice(1).join(' ') || '';
        orderData.phone     = orderData.phone     || meta.cPhone || '';
        orderData.mode      = orderData.mode      || meta.cMode  || '';
        if (!orderData.address && meta.cAddr) {
          var p = String(meta.cAddr).split(' | ');
          orderData.address = { street: p[0]||'', zip: p[1]||'', city: p[2]||'', notes: p[3]||'' };
        }
        if (!orderData.orderNumber) orderData.orderNumber = meta.orderNumber || '';
        if (!orderData.total) orderData.total = (session.amount_total || 0) / 100;
        orderData.dataIncomplete = true;
      }

      // Creer la commande dans Firebase UNIQUEMENT apres paiement confirme
      var finalOrder = Object.assign({}, orderData, {
        status:          'PAYED_CARD',
        payment:         'CARD',
        stripeSessionId: session.id,
        paidAt:          new Date().toISOString(),
        printed:         false
      });

      await createOrderInFirebase(finalOrder);
      console.log('Commande creee dans Firebase: PAYED_CARD', meta.orderNumber);

    } catch(err) {
      console.error('Erreur Firebase:', err.message);
    }
  }

  return res.status(200).json({ received: true });
};

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports.config = { api: { bodyParser: false } };

function getRawBody(req) {
  return new Promise(function(resolve, reject) {
    var chunks = [];
    req.on('data', function(chunk) { chunks.push(chunk); });
    req.on('end', function() { resolve(Buffer.concat(chunks)); });
    req.on('error', reject);
  });
}

// Convertir valeur JS en format Firestore REST
function toFirestoreValue(val) {
  if (val === null || val === undefined) return { nullValue: null };
  if (typeof val === 'boolean')  return { booleanValue: val };
  if (typeof val === 'number')   return { doubleValue: val };
  if (typeof val === 'string')   return { stringValue: val };
  if (Array.isArray(val)) {
    return { arrayValue: { values: val.map(toFirestoreValue) } };
  }
  if (typeof val === 'object') {
    var fields = {};
    Object.entries(val).forEach(function(entry) {
      fields[entry[0]] = toFirestoreValue(entry[1]);
    });
    return { mapValue: { fields: fields } };
  }
  return { stringValue: String(val) };
}

// Creer la commande dans Firebase via REST API (pas de SDK necessaire)
async function createOrderInFirebase(orderData) {
  var projectId = 'arena-pizza-kebab-3f078';
  var url = 'https://firestore.googleapis.com/v1/projects/' + projectId + '/databases/(default)/documents/orders';

  var fields = {};
  Object.entries(orderData).forEach(function(entry) {
    fields[entry[0]] = toFirestoreValue(entry[1]);
  });

  var resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields: fields })
  });

  if (!resp.ok) {
    var errText = await resp.text();
    throw new Error('Firebase create failed: ' + errText);
  }
  return await resp.json();
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  var rawBody = await getRawBody(req);
  var sig = req.headers['stripe-signature'];

  var event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature invalide:', err.message);
    return res.status(400).json({ error: 'Signature invalide' });
  }

  if (event.type === 'checkout.session.completed') {
    var session = event.data.object;
    var meta    = session.metadata || {};

    console.log('Paiement Stripe confirme - commande:', meta.orderNumber);

    try {
      // Reconstituer les donnees de commande depuis les metadata Stripe
      var orderDataStr = (meta.orderData1 || '') +
                         (meta.orderData2 || '') +
                         (meta.orderData3 || '') +
                         (meta.orderData4 || '');

      var orderData = {};
      if (orderDataStr) {
        try {
          orderData = JSON.parse(orderDataStr);
        } catch(e) {
          console.warn('Erreur parsing orderData:', e.message);
        }
      }

      // Creer la commande dans Firebase avec status PAYED_CARD
      // C'est LA SEULE FOIS ou la commande est creee en base
      var finalOrder = Object.assign({}, orderData, {
        status:          'PAYED_CARD',
        payment:         'CARD',
        stripeSessionId: session.id,
        paidAt:          new Date().toISOString(),
        printed:         false
      });

      await createOrderInFirebase(finalOrder);
      console.log('Commande creee dans Firebase PAYED_CARD:', meta.orderNumber);

    } catch (err) {
      console.error('Erreur creation commande Firebase:', err.message);
    }
  }

  if (event.type === 'checkout.session.expired') {
    console.log('Session Stripe expiree - aucune commande creee');
  }

  return res.status(200).json({ received: true });
};

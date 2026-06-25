const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports.config = { api: { bodyParser: false } };

function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

// Créer la commande dans Firebase via REST API
async function createOrderInFirebase(orderData) {
  const projectId = 'arena-pizza-kebab-3f078';
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/orders`;

  // Convertir l'objet en format Firestore
  function toFirestoreValue(val) {
    if (val === null || val === undefined) return { nullValue: null };
    if (typeof val === 'boolean')  return { booleanValue: val };
    if (typeof val === 'number')   return { doubleValue: val };
    if (typeof val === 'string')   return { stringValue: val };
    if (Array.isArray(val))        return { arrayValue: { values: val.map(toFirestoreValue) } };
    if (typeof val === 'object') {
      const fields = {};
      Object.entries(val).forEach(([k, v]) => { fields[k] = toFirestoreValue(v); });
      return { mapValue: { fields } };
    }
    return { stringValue: String(val) };
  }

  const fields = {};
  Object.entries(orderData).forEach(([k, v]) => {
    fields[k] = toFirestoreValue(v);
  });

  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields })
  });

  if (!resp.ok) {
    const err = await resp.text();
    throw new Error('Firebase create failed: ' + err);
  }
  return await resp.json();
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const rawBody = await getRawBody(req);
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature invalide:', err.message);
    return res.status(400).json({ error: 'Signature invalide' });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const meta    = session.metadata || {};

    console.log('Paiement Stripe confirmé — commande:', meta.orderNumber);

    try {
      // Reconstituer les données de commande depuis les metadata Stripe
      const orderDataStr = (meta.orderData1 || '') +
                           (meta.orderData2 || '') +
                           (meta.orderData3 || '') +
                           (meta.orderData4 || '');

      let orderData = {};
      if (orderDataStr) {
        try { orderData = JSON.parse(orderDataStr); } catch(e) {
          console.warn('Erreur parsing orderData:', e.message);
        }
      }

      // Créer la commande dans Firebase avec status PAYED_CARD
      // C'est LA SEULE FOIS où la commande est créée
      const finalOrder = Object.assign({}, orderData, {
        status:          'PAYED_CARD',
        payment:         'CARD',
        stripeSessionId: session.id,
        paidAt:          new Date().toISOString(),
        printed:         false
      });

      await createOrderInFirebase(finalOrder);
      console.log('Commande créée dans Firebase avec status PAYED_CARD:', meta.orderNumber);

    } catch (err) {
      console.error('Erreur création commande Firebase:', err.message);
    }
  }

  if (event.type === 'checkout.session.expired') {
    // Session expirée → aucune commande créée, aucun ticket
    console.log('Session Stripe expirée — aucune commande créée');
  }

  return res.status(200).json({ received: true });
};

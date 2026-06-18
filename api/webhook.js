// ============================================================
// Vercel Serverless Function — Stripe Webhook
// POST /api/webhook
// Écoute les événements Stripe et met à jour Firebase
// ============================================================

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Désactiver le body parser pour lire le raw body (obligatoire pour Stripe)
module.exports.config = { api: { bodyParser: false } };

// Lire le raw body
function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

// Mettre à jour Firebase via REST API (pas besoin d'Admin SDK)
async function updateFirebaseOrder(orderNumber, updateData) {
  const projectId = process.env.FIREBASE_PROJECT_ID || 'arena-pizza-kebab-3f078';
  const baseUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents`;

  // 1. Chercher la commande par orderNumber
  const queryUrl = `${baseUrl}:runQuery`;
  const queryBody = {
    structuredQuery: {
      from: [{ collectionId: 'orders' }],
      where: {
        fieldFilter: {
          field: { fieldPath: 'orderNumber' },
          op: 'EQUAL',
          value: { stringValue: orderNumber }
        }
      },
      limit: 1
    }
  };

  const queryResp = await fetch(queryUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(queryBody)
  });
  const queryData = await queryResp.json();

  if (!queryData[0] || !queryData[0].document) {
    console.warn('Commande non trouvée dans Firebase:', orderNumber);
    return false;
  }

  const docName = queryData[0].document.name;
  const docId = docName.split('/').pop();

  // 2. Mettre à jour le document
  const fields = {};
  Object.entries(updateData).forEach(([key, value]) => {
    if (typeof value === 'string')  fields[key] = { stringValue: value };
    if (typeof value === 'boolean') fields[key] = { booleanValue: value };
  });

  const updateUrl = `${baseUrl}/orders/${docId}?updateMask.fieldPaths=${Object.keys(fields).join('&updateMask.fieldPaths=')}`;
  await fetch(updateUrl, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields })
  });

  return true;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const rawBody = await getRawBody(req);
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature invalide:', err.message);
    return res.status(400).json({ error: 'Signature invalide' });
  }

  // ── Traiter les événements Stripe ─────────────────────────
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const orderNumber = session.metadata?.orderNumber;

    console.log('Paiement confirmé pour commande:', orderNumber);

    if (orderNumber) {
      await updateFirebaseOrder(orderNumber, {
        status:          'pending',
        payment:         'card',
        paid:            true,
        stripeSessionId: session.id,
        paidAt:          new Date().toISOString()
      });
    }
  }

  if (event.type === 'checkout.session.expired') {
    const session = event.data.object;
    const orderNumber = session.metadata?.orderNumber;
    if (orderNumber) {
      await updateFirebaseOrder(orderNumber, {
        status: 'cancelled',
        paid:   false
      });
    }
  }

  return res.status(200).json({ received: true });
};

// Verifier le statut d un paiement SumUp et creer la commande si PAID
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { checkoutReference, orderData } = req.body;
    const API_KEY = process.env.SUMUP_API_KEY;

    // Verifier le statut du checkout sur SumUp
    const resp = await fetch('https://api.sumup.com/v0.1/checkouts/' + checkoutReference, {
      headers: { 'Authorization': 'Bearer ' + API_KEY }
    });

    const checkout = await resp.json();
    console.log('SumUp checkout status:', checkout.status, 'for', checkoutReference);

    if (checkout.status !== 'PAID') {
      return res.status(200).json({ paid: false, status: checkout.status });
    }

    // Paiement confirme → creer la commande dans Firebase
    var finalOrder = Object.assign({}, orderData || {}, {
      orderNumber: checkoutReference,
      status:      'PAYED_CARD',
      payment:     'CARD',
      paidAt:      new Date().toISOString(),
      printed:     false,
      sumupCheckoutId: checkout.id
    });

    await createOrderInFirebase(finalOrder);
    console.log('Commande creee dans Firebase:', checkoutReference);

    return res.status(200).json({ paid: true, orderNumber: checkoutReference });

  } catch (err) {
    console.error('Erreur verify-sumup:', err.message);
    return res.status(500).json({ error: err.message });
  }
};

function toFirestoreValue(val) {
  if (val === null || val === undefined) return { nullValue: null };
  if (typeof val === 'boolean')  return { booleanValue: val };
  if (typeof val === 'number')   return { doubleValue: val };
  if (typeof val === 'string')   return { stringValue: val };
  if (Array.isArray(val))        return { arrayValue: { values: val.map(toFirestoreValue) } };
  if (typeof val === 'object') {
    var fields = {};
    Object.entries(val).forEach(function(e) { fields[e[0]] = toFirestoreValue(e[1]); });
    return { mapValue: { fields: fields } };
  }
  return { stringValue: String(val) };
}

async function createOrderInFirebase(orderData) {
  var projectId = 'arena-pizza-kebab-3f078';
  var url = 'https://firestore.googleapis.com/v1/projects/' + projectId + '/databases/(default)/documents/orders';
  var fields = {};
  Object.entries(orderData).forEach(function(e) { fields[e[0]] = toFirestoreValue(e[1]); });
  var resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields: fields })
  });
  if (!resp.ok) throw new Error('Firebase error: ' + await resp.text());
  return await resp.json();
}

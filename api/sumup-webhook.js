// Webhook SumUp - recu quand paiement confirme
// SumUp envoie un POST avec le statut du paiement

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const event = req.body;
    console.log('SumUp webhook recu:', JSON.stringify(event).substring(0, 200));

    // SumUp envoie status PAID quand paiement confirme
    if (event.status === 'PAID' || event.event_type === 'CHECKOUT_STATUS_CHANGED') {
      const checkoutRef = event.checkout_reference || (event.payload && event.payload.checkout_reference);
      const status      = event.status || (event.payload && event.payload.status);

      if (status === 'PAID' && checkoutRef) {
        console.log('Paiement confirme pour commande:', checkoutRef);

        // Recuperer les donnees de commande depuis le return_url encode
        // ou reconstruire depuis la reference
        const orderData = {
          orderNumber: checkoutRef,
          status:      'PAYED_CARD',
          payment:     'CARD',
          paidAt:      new Date().toISOString(),
          printed:     false
        };

        await createOrderInFirebase(orderData);
        console.log('Commande creee dans Firebase:', checkoutRef);
      }
    }

    return res.status(200).json({ received: true });

  } catch (err) {
    console.error('Erreur webhook SumUp:', err.message);
    return res.status(200).json({ received: true }); // toujours 200 pour SumUp
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

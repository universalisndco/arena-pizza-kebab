module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { orderData, orderNumber } = req.body;
    const total = orderData ? parseFloat(orderData.total) : 0;
    const items = (orderData && orderData.items) || [];

    if (!items.length || total <= 0) {
      return res.status(400).json({ error: 'Panier vide' });
    }

    const API_KEY  = process.env.SUMUP_API_KEY;
    const MERCHANT = process.env.SUMUP_MERCHANT;

    // Creer le checkout SumUp
    const resp = await fetch('https://api.sumup.com/v0.1/checkouts', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        checkout_reference: orderNumber,
        amount:             parseFloat(total.toFixed(2)),
        currency:           'EUR',
        merchant_code:      MERCHANT,
        description:        'Commande ' + orderNumber + ' - Arena Pizza Kebab',
        return_url:         'https://www.arenapizza-reims.fr/confirmation.html?order=' + orderNumber + '&source=sumup'
      })
    });

    const data = await resp.json();
    console.log('SumUp full response:', JSON.stringify(data));

    if (!resp.ok) {
      return res.status(500).json({ error: 'Erreur SumUp', details: data });
    }

    // SumUp retourne hosted_checkout_url dans la reponse
    // Sinon on essaie les formats connus
    var payUrl = data.hosted_checkout_url
      || ('https://checkout.sumup.com/pay/' + data.id);

    console.log('URL paiement:', payUrl);
    return res.status(200).json({
      checkoutId: data.id,
      url: payUrl,
      fullData: data
    });

  } catch (err) {
    console.error('Erreur:', err.message);
    return res.status(500).json({ error: err.message });
  }
};

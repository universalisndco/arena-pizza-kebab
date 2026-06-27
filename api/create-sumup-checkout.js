module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { orderData, orderNumber, customerName } = req.body;
    const items = (orderData && orderData.items) || [];
    const total = orderData ? parseFloat(orderData.total) : 0;

    if (!items.length || total <= 0) {
      return res.status(400).json({ error: 'Panier vide ou montant invalide' });
    }

    const API_KEY  = process.env.SUMUP_API_KEY;
    const MERCHANT = process.env.SUMUP_MERCHANT;

    if (!API_KEY || !MERCHANT) {
      return res.status(500).json({ error: 'Configuration SumUp manquante' });
    }

    // Creer le checkout SumUp
    const resp = await fetch('https://api.sumup.com/v0.1/checkouts', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        checkout_reference: orderNumber,
        amount:             Math.round(total * 100) / 100,
        currency:           'EUR',
        merchant_code:      MERCHANT,
        description:        'Commande ' + orderNumber + ' - Arena Pizza Kebab',
        return_url:         'https://www.arenapizza-reims.fr/confirmation.html?order=' + orderNumber,
        redirect_url:       'https://www.arenapizza-reims.fr/confirmation.html?order=' + orderNumber
      })
    });

    const data = await resp.json();
    console.log('SumUp response:', JSON.stringify(data).substring(0, 300));

    if (!resp.ok) {
      return res.status(500).json({ error: 'Erreur SumUp: ' + JSON.stringify(data) });
    }

    // L URL correcte SumUp : pay.sumup.com/b2c/CHECKOUT_ID
    // OU utiliser hosted_checkout_url si presente dans la reponse
    var payUrl;
    if (data.hosted_checkout_url) {
      payUrl = data.hosted_checkout_url;
    } else if (data.id) {
      payUrl = 'https://pay.sumup.com/b2c/' + data.id;
    } else {
      return res.status(500).json({ error: 'SumUp: pas d URL de paiement dans la reponse', data: data });
    }

    console.log('SumUp checkout cree:', data.id, '→', payUrl);
    return res.status(200).json({ checkoutId: data.id, url: payUrl });

  } catch (err) {
    console.error('Erreur create-sumup-checkout:', err.message);
    return res.status(500).json({ error: err.message });
  }
};

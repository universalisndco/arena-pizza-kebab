module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { orderData, orderNumber, customerName } = req.body;
    const items  = (orderData && orderData.items) || [];
    const total  = orderData ? parseFloat(orderData.total) : 0;

    if (!items.length || total <= 0) {
      return res.status(400).json({ error: 'Panier vide ou montant invalide' });
    }

    const API_KEY  = process.env.SUMUP_API_KEY;
    const MERCHANT = process.env.SUMUP_MERCHANT;

    if (!API_KEY || !MERCHANT) {
      return res.status(500).json({ error: 'Configuration SumUp manquante' });
    }

    // Stocker orderData en base64 dans la description (max 100 chars)
    // On encode l'essentiel pour le webhook
    const orderStr = JSON.stringify(orderData);
    const orderB64 = Buffer.from(orderStr).toString('base64');

    // Créer le checkout SumUp
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
        return_url:         'https://www.arenapizza-reims.fr/confirmation.html?order=' + orderNumber + '&data=' + encodeURIComponent(orderB64),
        redirect_url:       'https://www.arenapizza-reims.fr/confirmation.html?order=' + orderNumber,
      })
    });

    if (!resp.ok) {
      const err = await resp.text();
      console.error('SumUp error:', err);
      return res.status(500).json({ error: 'Erreur SumUp: ' + err });
    }

    const data = await resp.json();
    console.log('SumUp checkout cree:', data.id, 'pour commande:', orderNumber);

    // Construire l URL de paiement SumUp
    const payUrl = 'https://pay.sumup.com/b2c/XXXXXXXX?id=' + data.id;

    return res.status(200).json({
      checkoutId: data.id,
      url: 'https://pay.sumup.com/b2c/' + MERCHANT + '?id=' + data.id
    });

  } catch (err) {
    console.error('Erreur create-sumup-checkout:', err.message);
    return res.status(500).json({ error: err.message });
  }
};

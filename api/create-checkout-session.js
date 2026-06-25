const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const body = req.body;
    const orderData = body.orderData || {};
    const items = orderData.items || body.items || [];
    const orderNumber = body.orderNumber || orderData.orderNumber || 'APK-000';

    if (!items.length) {
      return res.status(400).json({ error: 'Panier vide' });
    }

    // Construire les line_items Stripe
    const lineItems = items.map(function(item) {
      var name = item.name || 'Article';
      var price = Math.max(1, Math.round((parseFloat(item.totalPrice) || 0) * 100));
      var qty   = Math.max(1, parseInt(item.qty) || 1);
      return {
        price_data: {
          currency: 'eur',
          product_data: { name: name },
          unit_amount: price
        },
        quantity: qty
      };
    });

    // Stocker les donnees commande dans metadata (max 500 chars par valeur)
    var orderStr = '';
    try { orderStr = JSON.stringify(orderData); } catch(e) { orderStr = '{}'; }

    var meta = {
      orderNumber:  orderNumber,
      orderData1:   orderStr.substring(0, 499),
      orderData2:   orderStr.length > 499  ? orderStr.substring(499,  998)  : '',
      orderData3:   orderStr.length > 998  ? orderStr.substring(998,  1497) : '',
      orderData4:   orderStr.length > 1497 ? orderStr.substring(1497, 1996) : '',
      orderData5:   orderStr.length > 1996 ? orderStr.substring(1996, 2495) : '',
      orderData6:   orderStr.length > 2495 ? orderStr.substring(2495, 2994) : ''
    };

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'https://www.arenapizza-reims.fr/confirmation.html?session_id={CHECKOUT_SESSION_ID}',
      cancel_url:  'https://www.arenapizza-reims.fr/checkout.html',
      metadata: meta
    });

    return res.status(200).json({ url: session.url, sessionId: session.id });

  } catch (err) {
    console.error('Stripe error:', err.message);
    return res.status(500).json({ error: err.message });
  }
};

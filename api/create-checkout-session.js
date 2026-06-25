const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { orderData, orderNumber, customerName, mode } = req.body;

    if (!orderData || !orderData.items || !orderData.items.length) {
      return res.status(400).json({ error: 'Panier vide' });
    }

    // Construire les line_items Stripe
    const lineItems = orderData.items.map(function(item) {
      var name = item.name;
      if (item.selectedOptions) {
        var opts = Object.entries(item.selectedOptions)
          .filter(function(e) { return e[1]; })
          .map(function(e) { return e[1]; });
        if (opts.length) name += ' (' + opts.join(', ') + ')';
      }
      return {
        price_data: {
          currency: 'eur',
          product_data: { name: name },
          unit_amount: Math.round((parseFloat(item.totalPrice) || 0) * 100)
        },
        quantity: parseInt(item.qty) || 1
      };
    });

    // Stocker les données de commande dans les metadata Stripe
    // Le webhook les utilisera pour créer la commande dans Firebase
    const orderDataStr = JSON.stringify(orderData);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'https://www.arenapizza-reims.fr/confirmation.html?session_id={CHECKOUT_SESSION_ID}',
      cancel_url:  'https://www.arenapizza-reims.fr/checkout.html',
      metadata: {
        orderNumber:   orderNumber || '',
        customerName:  customerName || '',
        deliveryMode:  mode || 'pickup',
        // Stocker les données complètes (max 500 chars par champ)
        orderData1:    orderDataStr.substring(0, 499),
        orderData2:    orderDataStr.length > 499 ? orderDataStr.substring(499, 998) : '',
        orderData3:    orderDataStr.length > 998 ? orderDataStr.substring(998, 1497) : '',
        orderData4:    orderDataStr.length > 1497 ? orderDataStr.substring(1497, 1996) : '',
        orderDataLen:  String(orderDataStr.length)
      }
    });

    return res.status(200).json({ url: session.url, sessionId: session.id });

  } catch (err) {
    console.error('Stripe error:', err);
    return res.status(500).json({ error: err.message });
  }
};

// ============================================================
// Vercel Serverless Function — Stripe Checkout Session
// POST /api/create-checkout-session
// Body: { items: [...], orderNumber, customerName, mode }
// ============================================================

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { items, orderNumber, customerName, mode, successUrl, cancelUrl } = req.body;

    if (!items || !items.length) {
      return res.status(400).json({ error: 'Panier vide' });
    }

    // Construire les line_items Stripe
    const lineItems = items.map(function(item) {
      var name = item.name;
      // Ajouter les options choisies dans le nom
      if (item.selectedOptions) {
        var opts = Object.entries(item.selectedOptions)
          .filter(function(e) { return e[1]; })
          .map(function(e) { return e[1]; });
        if (opts.length) name += ' (' + opts.join(', ') + ')';
      }
      return {
        price_data: {
          currency: 'eur',
          product_data: {
            name: name,
            images: item.image ? [item.image] : []
          },
          unit_amount: Math.round((parseFloat(item.totalPrice) || 0) * 100)
        },
        quantity: parseInt(item.qty) || 1
      };
    });

    // Créer la session Stripe Checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: (successUrl || 'https://arenapizza-reims.fr/confirmation.html') +
                   '?session_id={CHECKOUT_SESSION_ID}&order=' + (orderNumber || ''),
      cancel_url: cancelUrl || 'https://arenapizza-reims.fr/checkout.html',
      metadata: {
        orderNumber: orderNumber || '',
        customerName: customerName || '',
        deliveryMode: mode || 'pickup'
      },
      payment_intent_data: {
        metadata: {
          orderNumber: orderNumber || '',
          restaurantName: 'Arena Pizza Kebab'
        }
      }
    });

    return res.status(200).json({ url: session.url, sessionId: session.id });

  } catch (err) {
    console.error('Stripe error:', err);
    return res.status(500).json({ error: err.message });
  }
};

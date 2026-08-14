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

    // Stripe autorise 50 cles de 500 caracteres max.
    // On decoupe sur 20 morceaux (~9980 caracteres) au lieu de 6 (~2994),
    // sinon les grosses commandes etaient tronquees et le JSON devenait
    // illisible cote webhook => commande creee sans client ni articles.
    var CHUNK      = 499;
    var MAX_CHUNKS = 20;

    var meta = { orderNumber: orderNumber };
    for (var i = 0; i < MAX_CHUNKS; i++) {
      var part = orderStr.substring(i * CHUNK, (i + 1) * CHUNK);
      if (!part) break;
      meta['orderData' + (i + 1)] = part;
    }

    if (orderStr.length > CHUNK * MAX_CHUNKS) {
      console.warn('orderData trop long (' + orderStr.length + ' chars) — tronque.');
    }

    // Filet de securite : infos client dans des cles dediees.
    // Meme si le JSON est tronque, le ticket aura le nom, le tel et l'adresse.
    var addr = orderData.address || {};
    meta.cName  = ((orderData.firstName || '') + ' ' + (orderData.lastName || '')).trim().substring(0, 499);
    meta.cPhone = String(orderData.phone || '').substring(0, 499);
    meta.cMode  = String(orderData.mode  || '').substring(0, 499);
    meta.cAddr  = [addr.street, addr.zip, addr.city, addr.notes]
                    .filter(Boolean).join(' | ').substring(0, 499);

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

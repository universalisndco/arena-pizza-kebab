// ============================================================
// js/custom-menu.js — Articles personnalisés créés depuis l'admin
// Stockage : Firebase Firestore, collection "customMenuItems"
// Utilisé par : index.html (popup offres), menu.html (affichage),
//               admin/menu-manager.html (création/édition)
// ============================================================

var SPECIAL_OFFER_TYPES = {
  'pizza-du-jour':   { label: 'Pizza du Jour',     icon: '🍕' },
  'pizza-etudiante': { label: 'Pizza Étudiante',   icon: '🎓' },
  'menu-du-midi':    { label: 'Menu du Midi',       icon: '🕐' },
  'offre-du-jour':   { label: "L'Offre du Jour",    icon: '⭐' }
};

var _customItemsCache = null;

// ── Charger tous les articles personnalisés depuis Firebase ───
async function loadCustomMenuItems(forceRefresh) {
  if (_customItemsCache && !forceRefresh) return _customItemsCache;
  if (typeof db === 'undefined') { _customItemsCache = []; return []; }
  try {
    var snap = await db.collection('customMenuItems').get();
    var items = [];
    snap.forEach(function(doc) {
      items.push(Object.assign({ id: doc.id, isCustom: true }, doc.data()));
    });
    _customItemsCache = items;
    return items;
  } catch (e) {
    console.warn('loadCustomMenuItems error:', e);
    _customItemsCache = [];
    return [];
  }
}

function invalidateCustomItemsCache() { _customItemsCache = null; }

function getActiveCustomItems(items) {
  return (items || []).filter(function (i) { return i.active !== false; });
}

function getActiveSpecialOffers(items) {
  return getActiveCustomItems(items).filter(function (i) { return !!i.specialType; });
}

// ── Catégories ajoutées dynamiquement par l'admin ─────────────
function getCustomCategories(items) {
  var seen = {};
  var cats = [];
  (items || []).forEach(function (i) {
    if (i.isNewCategory && i.category && !seen[i.category]) {
      seen[i.category] = true;
      cats.push({ id: i.category, label: i.categoryLabel || i.category });
    }
  });
  return cats;
}

// ── Articles personnalisés actifs d'une catégorie donnée ──────
function getCustomItemsByCategory(items, categoryId) {
  return getActiveCustomItems(items).filter(function (i) { return i.category === categoryId; });
}

// ── Sauvegarder un nouvel article personnalisé ────────────────
async function saveCustomMenuItem(data) {
  if (typeof db === 'undefined') throw new Error('Firebase non disponible');
  var payload = Object.assign({
    active: true,
    createdAt: new Date().toISOString()
  }, data);
  var ref = await db.collection('customMenuItems').add(payload);
  invalidateCustomItemsCache();
  return ref.id;
}

async function updateCustomMenuItem(id, data) {
  if (typeof db === 'undefined') throw new Error('Firebase non disponible');
  await db.collection('customMenuItems').doc(id).update(data);
  invalidateCustomItemsCache();
}

async function deleteCustomMenuItem(id) {
  if (typeof db === 'undefined') throw new Error('Firebase non disponible');
  await db.collection('customMenuItems').doc(id).delete();
  invalidateCustomItemsCache();
}

// ============================================================
// POPUP OFFRES SPÉCIALES — affiché sur la page d'accueil
// ============================================================
async function initSpecialOffersPopup() {
  try {
    var items  = await loadCustomMenuItems();
    var offers = getActiveSpecialOffers(items);
    if (!offers.length) return;

    // Ne pas re-afficher si déjà fermé dans cette session
    if (sessionStorage.getItem('apk_offers_dismissed')) return;

    setTimeout(function () { showOffersPopup(offers); }, 900);
  } catch (e) {
    console.warn('initSpecialOffersPopup error:', e);
  }
}

function showOffersPopup(offers) {
  var existing = document.getElementById('offers-popup-overlay');
  if (existing) existing.remove();

  var cardsHtml = offers.map(function (o) {
    var typeInfo = SPECIAL_OFFER_TYPES[o.specialType] || { label: 'Offre', icon: '⭐' };
    return '' +
      '<div class="offer-popup-card">' +
        '<div class="offer-popup-img-wrap">' +
          '<img src="' + (o.image || '') + '" alt="' + o.name + '" loading="lazy" ' +
            'onerror="this.src=\'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400\'">' +
          '<div class="offer-popup-tag">' + typeInfo.icon + ' ' + typeInfo.label + '</div>' +
        '</div>' +
        '<div class="offer-popup-body">' +
          '<div class="offer-popup-name">' + o.name + '</div>' +
          '<div class="offer-popup-desc">' + (o.description || '') + '</div>' +
          '<div class="offer-popup-footer">' +
            '<div class="offer-popup-price">' + formatPrice(o.price) + '</div>' +
            '<button type="button" class="offer-popup-btn" onclick="goToOffer(\'' + o.category + '\')">En profiter</button>' +
          '</div>' +
        '</div>' +
      '</div>';
  }).join('');

  var overlay = document.createElement('div');
  overlay.id = 'offers-popup-overlay';
  overlay.innerHTML =
    '<style>' +
    '#offers-popup-overlay{position:fixed;inset:0;background:rgba(0,0,0,.82);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;animation:offerFadeIn .25s ease-out}' +
    '@keyframes offerFadeIn{from{opacity:0}to{opacity:1}}' +
    '.offer-popup-modal{background:var(--dark2,#15151a);border:1px solid rgba(255,255,255,.08);border-radius:20px;max-width:560px;width:100%;max-height:85vh;overflow-y:auto;padding:28px;position:relative}' +
    '.offer-popup-close{position:absolute;top:16px;right:16px;width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.08);border:none;color:#fff;font-size:1.1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:2}' +
    '.offer-popup-close:hover{background:rgba(255,255,255,.18)}' +
    '.offer-popup-eyebrow{font-size:.72rem;font-weight:900;letter-spacing:2px;text-transform:uppercase;color:var(--red,#D42B2B);margin-bottom:6px;text-align:center}' +
    '.offer-popup-title{font-family:var(--font-h,inherit);font-size:1.6rem;letter-spacing:1px;text-align:center;margin-bottom:20px;color:#fff}' +
    '.offer-popup-card{display:flex;gap:14px;background:var(--dark3,#1c1c22);border-radius:14px;padding:12px;margin-bottom:14px;border:1px solid rgba(255,255,255,.06)}' +
    '.offer-popup-img-wrap{position:relative;width:96px;height:96px;flex-shrink:0;border-radius:10px;overflow:hidden}' +
    '.offer-popup-img-wrap img{width:100%;height:100%;object-fit:cover}' +
    '.offer-popup-tag{position:absolute;bottom:4px;left:4px;right:4px;background:rgba(0,0,0,.75);color:#F5A623;font-size:.6rem;font-weight:900;padding:2px 6px;border-radius:6px;text-align:center;white-space:nowrap;overflow:hidden}' +
    '.offer-popup-body{flex:1;display:flex;flex-direction:column;justify-content:center;gap:4px}' +
    '.offer-popup-name{font-weight:900;color:#fff;font-size:.98rem}' +
    '.offer-popup-desc{font-size:.78rem;color:#9a9aa5;line-height:1.4}' +
    '.offer-popup-footer{display:flex;align-items:center;justify-content:space-between;margin-top:6px}' +
    '.offer-popup-price{font-weight:900;color:#F5A623;font-size:1.05rem}' +
    '.offer-popup-btn{background:var(--red,#D42B2B);color:#fff;border:none;padding:8px 16px;border-radius:8px;font-weight:800;font-size:.8rem;cursor:pointer}' +
    '.offer-popup-btn:hover{opacity:.85}' +
    '</style>' +
    '<div class="offer-popup-modal">' +
      '<button class="offer-popup-close" onclick="closeOffersPopup()">&#x2715;</button>' +
      '<div class="offer-popup-eyebrow">Aujourd\'hui chez APK</div>' +
      '<div class="offer-popup-title">Nos offres du moment</div>' +
      cardsHtml +
    '</div>';

  document.body.appendChild(overlay);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) closeOffersPopup(); });
}

function closeOffersPopup() {
  var el = document.getElementById('offers-popup-overlay');
  if (el) el.remove();
  sessionStorage.setItem('apk_offers_dismissed', '1');
}

function goToOffer(category) {
  closeOffersPopup();
  window.location.href = 'menu.html#' + category;
}

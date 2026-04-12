// ============================================================
// ARENA PIZZA KEBAB — Admin Shared JS
// ============================================================

function checkAuth() {
  if (localStorage.getItem('apk_admin_auth') !== '1') {
    window.location.replace('login.html');
  }
}

function logout() {
  localStorage.removeItem('apk_admin_auth');
  window.location.replace('login.html');
}

// ─── Data Helpers ────────────────────────────────────────────
function getOrders() {
  return JSON.parse(localStorage.getItem('apk_orders') || '[]');
}
function saveOrders(orders) {
  localStorage.setItem('apk_orders', JSON.stringify(orders));
}
function getReservations() {
  return JSON.parse(localStorage.getItem('apk_reservations') || '[]');
}
function saveReservations(res) {
  localStorage.setItem('apk_reservations', JSON.stringify(res));
}
function getMenuItems() {
  var base      = (window.APK_MENU && APK_MENU.items) ? APK_MENU.items.slice() : [];
  var overrides  = JSON.parse(localStorage.getItem('apk_menu_overrides') || '[]');
  var additions  = JSON.parse(localStorage.getItem('apk_menu_additions') || '[]');
  var all = base.concat(additions).map(function(item) {
    var ov = overrides.find(function(o) { return o.id === item.id; });
    return ov ? Object.assign({}, item, ov) : item;
  });
  return all.filter(function(item) { return !item._deleted; });
}
function saveMenuOverride(item) {
  var overrides = JSON.parse(localStorage.getItem('apk_menu_overrides') || '[]');
  var idx = overrides.findIndex(function(o) { return o.id === item.id; });
  if (idx >= 0) overrides[idx] = item;
  else overrides.push(item);
  localStorage.setItem('apk_menu_overrides', JSON.stringify(overrides));
}
function addMenuItem(item) {
  var additions = JSON.parse(localStorage.getItem('apk_menu_additions') || '[]');
  item.id = 'custom-' + Date.now();
  additions.push(item);
  localStorage.setItem('apk_menu_additions', JSON.stringify(additions));
  return item;
}
function deleteMenuItem(id) {
  var ov = { id: id, _deleted: true };
  saveMenuOverride(ov);
  var additions = JSON.parse(localStorage.getItem('apk_menu_additions') || '[]');
  localStorage.setItem('apk_menu_additions', JSON.stringify(
    additions.filter(function(a) { return a.id !== id; })
  ));
}

// ─── Format ──────────────────────────────────────────────────
function formatPrice(p) {
  return (parseFloat(p) || 0).toFixed(2).replace('.', ',') + '€';
}
function formatDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleString('fr-FR', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
}
function timeAgo(iso) {
  if (!iso) return '';
  var diff = Date.now() - new Date(iso).getTime();
  var mins = Math.floor(diff / 60000);
  if (mins < 1)  return 'à l\'instant';
  if (mins < 60) return 'il y a ' + mins + ' min';
  var hrs = Math.floor(mins / 60);
  if (hrs < 24)  return 'il y a ' + hrs + 'h';
  return 'il y a ' + Math.floor(hrs / 24) + 'j';
}

// ─── Status ──────────────────────────────────────────────────
var STATUS_LABELS = {
  pending:    'En attente',
  accepted:   'Acceptée',
  preparing:  'En préparation',
  ready:      'Prête',
  delivering: 'En livraison',
  done:       'Terminée',
  cancelled:  'Annulée'
};
var STATUS_CLASSES = {
  pending:    's-pending',
  accepted:   's-accepted',
  preparing:  's-preparing',
  ready:      's-ready',
  delivering: 's-delivering',
  done:       's-done',
  cancelled:  's-cancelled'
};
function statusBadge(status) {
  return '<span class="status-badge ' + (STATUS_CLASSES[status] || 's-pending') + '">' + (STATUS_LABELS[status] || status) + '</span>';
}

// ─── Toast ───────────────────────────────────────────────────
function showToast(msg, type) {
  var el = document.getElementById('adminToast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'adminToast';
    el.className = 'admin-toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.className = 'admin-toast ' + (type || 'success');
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(function() { el.classList.remove('show'); }, 3000);
}

// ─── Alert Sound ─────────────────────────────────────────────
var soundEnabled = true;
function playAlertSound() {
  if (!soundEnabled) return;
  try {
    var ctx  = new (window.AudioContext || window.webkitAudioContext)();
    var osc  = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.setValueAtTime(1100, ctx.currentTime + 0.1);
    osc.frequency.setValueAtTime(880, ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.5);
  } catch(e) {}
}

// ─── Order Polling ────────────────────────────────────────────
var lastOrderCount = 0;
function startOrderPolling(onNewOrder) {
  lastOrderCount = getOrders().length;
  setInterval(function() {
    var orders = getOrders();
    if (orders.length > lastOrderCount) {
      var newCount = orders.length - lastOrderCount;
      lastOrderCount = orders.length;
      playAlertSound();
      showToast(newCount + ' nouvelle(s) commande(s) !');
      if (onNewOrder) onNewOrder(orders);
    }
  }, 5000);
}

// ─── Demo Data ────────────────────────────────────────────────
function initDemoData() {
  if (localStorage.getItem('apk_demo_loaded')) return;
  var demoOrders = [
    {
      orderNumber: 'APK-001234',
      firstName: 'Thomas', lastName: 'Martin', phone: '06 12 34 56 78', email: '',
      mode: 'delivery',
      address: { street: '14 Rue Victor Hugo', city: 'Reims', zip: '51100', notes: 'Digicode 1234' },
      time: 'ASAP', payment: 'card',
      items: [
        { name: 'Pizza Kebab Senior', qty: 1, totalPrice: 14.00, selectedOptions: {} },
        { name: 'Tacos 2 Viandes',   qty: 2, totalPrice: 10.00, selectedOptions: { 'Viande 1': 'Poulet', 'Viande 2': 'Kebab' } },
        { name: 'Cannette',          qty: 2, totalPrice: 2.00,  selectedOptions: { 'Choix': 'Coca-Cola' } }
      ],
      total: 38.00, notes: '', status: 'pending',
      timestamp: new Date(Date.now() - 3 * 60000).toISOString()
    },
    {
      orderNumber: 'APK-001233',
      firstName: 'Amira', lastName: 'Benali', phone: '07 89 01 23 45', email: '',
      mode: 'takeaway', address: null, time: 'ASAP', payment: 'cash',
      items: [
        { name: 'Pizza 4 Fromages Mega', qty: 1, totalPrice: 17.00, selectedOptions: {} },
        { name: 'Tiramisu',              qty: 2, totalPrice: 4.00,  selectedOptions: {} }
      ],
      total: 25.00, notes: 'Sans oignons SVP', status: 'preparing',
      timestamp: new Date(Date.now() - 18 * 60000).toISOString()
    },
    {
      orderNumber: 'APK-001232',
      firstName: 'Julien', lastName: 'Petit', phone: '06 55 66 77 88', email: '',
      mode: 'delivery',
      address: { street: '3 Avenue de Laon', city: 'Reims', zip: '51100', notes: '' },
      time: 'ASAP', payment: 'paypal',
      items: [
        { name: 'Roll Bourssin', qty: 1, totalPrice: 13.00, selectedOptions: {} },
        { name: 'Salade César', qty: 1, totalPrice: 9.00,  selectedOptions: { 'Viande': 'Poulet' } }
      ],
      total: 22.00, notes: '', status: 'done',
      timestamp: new Date(Date.now() - 90 * 60000).toISOString()
    }
  ];
  var demoRes = [
    { id: 'RES-001', firstName: 'Nadia', lastName: 'Laurent', phone: '06 22 33 44 55', email: '', guests: '4', date: new Date(Date.now() + 86400000).toISOString().split('T')[0], time: '19:30', message: 'Anniversaire', status: 'pending', timestamp: new Date().toISOString() },
    { id: 'RES-002', firstName: 'Romain', lastName: 'Duval', phone: '07 11 22 33 44', email: '', guests: '2', date: new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0], time: '12:00', message: '', status: 'accepted', timestamp: new Date(Date.now() - 3600000).toISOString() }
  ];
  localStorage.setItem('apk_orders', JSON.stringify(demoOrders));
  localStorage.setItem('apk_reservations', JSON.stringify(demoRes));
  localStorage.setItem('apk_demo_loaded', '1');
}

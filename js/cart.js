// ============================================================
// ARENA PIZZA KEBAB — Cart Manager (version finale)
// ============================================================

const Cart = {
  items: [],

  load() {
    try {
      const saved = localStorage.getItem('apk_cart');
      this.items = saved ? JSON.parse(saved) : [];
    } catch(e) { this.items = []; }
    this.updateUI();
  },

  save() {
    localStorage.setItem('apk_cart', JSON.stringify(this.items));
    this.updateUI();
  },

  add(item) {
    // Les pizzas ne se cumulent jamais (taille/base/demande peuvent différer)
    const isPizza = item.id && item.id.startsWith('pizza-');
    const existing = !isPizza && this.items.find(i =>
      i.id === item.id &&
      JSON.stringify(i.selectedOptions) === JSON.stringify(item.selectedOptions) &&
      (i.specialRequest||'') === (item.specialRequest||'')
    );
    if (existing) {
      existing.qty++;
    } else {
      this.items.push({ ...item, qty: 1, cartKey: Date.now() + Math.random() });
    }
    this.save();
    this.showToast(item.name + ' ajouté au panier ✓');
  },

  remove(cartKey) {
    this.items = this.items.filter(i => i.cartKey !== cartKey);
    this.save();
  },

  updateQty(cartKey, delta) {
    const item = this.items.find(i => i.cartKey === cartKey);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) this.items = this.items.filter(i => i.cartKey !== cartKey);
    this.save();
  },

  clear() { this.items = []; this.save(); },

  getTotal() {
    return this.items.reduce((sum, i) => sum + i.totalPrice * i.qty, 0);
  },

  getCount() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  },

  updateUI() {
    const count = this.getCount();
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
    document.querySelectorAll('.cart-total-display').forEach(el => {
      el.textContent = formatPrice(this.getTotal());
    });
    const sticky = document.getElementById('sticky-cart');
    if (sticky) sticky.style.display = count > 0 ? 'flex' : 'none';
  },

  showToast(msg) {
    let t = document.getElementById('cart-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'cart-toast';
      t.className = 'cart-toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._t);
    t._t = setTimeout(() => t.classList.remove('show'), 2500);
  }
};

// ── Modal article ─────────────────────────────────────────────

let _modalItem = null;

function openItemModal(itemId) {
  const item = getItemById(itemId);
  if (!item) return;
  _modalItem = item;

  // Vérifier les horaires
  const status = getOrderingStatus();
  if (status === 'closed') {
    showHoursMessage('closed');
    return;
  }
  if (status === 'call') {
    showHoursMessage('call');
    return;
  }

  // Si aucune option — ajout direct
  if (!item.options || item.options.length === 0) {
    Cart.add({
      id: item.id,
      name: item.name,
      totalPrice: item.price,
      selectedOptions: {},
      specialRequest: '',
      image: item.image
    });
    return;
  }

  const modal    = document.getElementById('item-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  let html = `
    <div class="modal-item-header">
      <img src="${item.image}" alt="${item.name}" class="modal-item-img"
           onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400'">
      <div class="modal-item-info">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="modal-base-price">À partir de ${formatPrice(item.price)}</div>
      </div>
    </div>
    <form id="option-form">
  `;

  item.options.forEach((opt, idx) => {
    html += `<div class="option-group" data-type="${opt.type}">
      <label class="option-label">${opt.label}${opt.required ? ' <span class="req">*</span>' : ''}</label>`;

    if (opt.type === 'select') {
      // ── Dropdown
      html += `<select name="opt_${idx}" ${opt.required ? 'required' : ''} class="option-select">`;
      if (!opt.required) html += `<option value="">Aucun</option>`;
      opt.choices.forEach(c => { html += `<option value="${c}">${c}</option>`; });
      html += `</select>`;

    } else if (opt.type === 'radio') {
      // ── Radio buttons (base, garniture, boisson...)
      html += `<div class="radio-group">`;
      opt.choices.forEach((c, ci) => {
        html += `<label class="radio-label">
          <input type="radio" name="opt_${idx}" value="${c}" ${ci === 0 && opt.required ? 'checked' : ''} ${opt.required ? 'required' : ''}>
          <span>${c}</span>
        </label>`;
      });
      html += `</div>`;

    } else if (opt.type === 'size_radio') {
      // ── Radio taille avec ajustement de prix
      html += `<div class="radio-group size-group">`;
      opt.choices.forEach((c, ci) => {
        const priceLabel = c.priceAdd === 0
          ? `${formatPrice(item.price)}`
          : `+${formatPrice(c.priceAdd)}`;
        html += `<label class="radio-label size-label ${ci === 0 ? 'selected' : ''}">
          <input type="radio" name="opt_${idx}" value="${c.name}" data-price-add="${c.priceAdd}" ${ci === 0 ? 'checked' : ''} required>
          <span class="size-name">${c.name}</span>
          <span class="size-price">${priceLabel}</span>
        </label>`;
      });
      html += `</div>`;

    } else if (opt.type === 'multi') {
      // ── Checkboxes
      opt.choices.forEach((c, ci) => {
        const name  = typeof c === 'string' ? c : c.name;
        const price = typeof c === 'object' ? c.price : 0;
        html += `<label class="checkbox-label">
          <input type="checkbox" name="opt_${idx}_${ci}" value="${name}" data-price="${price}">
          <span>${name}${price > 0 ? ` <em>+${formatPrice(price)}</em>` : ''}</span>
        </label>`;
      });
    }

    html += `</div>`;
  });

  // ── Demandes spéciales (pour TOUS les articles)
  html += `
    <div class="option-group">
      <label class="option-label">Demandes spéciales</label>
      <textarea id="special-request" class="form-textarea"
        placeholder="Allergies, sans oignon, bien cuit, sans sauce…"
        style="min-height:65px;font-size:.85rem"></textarea>
    </div>
  `;

  html += `
    </form>
    <div class="modal-footer">
      <div class="modal-price-line">Total : <strong id="modal-total">${formatPrice(item.price)}</strong></div>
      <button class="btn-add-confirm" onclick="confirmAddToCart('${item.id}')">Ajouter au panier</button>
    </div>
  `;

  modalBody.innerHTML = html;
  modal.classList.add('active');

  // Live update prix
  modalBody.querySelectorAll('input[type=radio][data-price-add]').forEach(r => {
    r.addEventListener('change', () => updateModalTotal());
    // style actif sur label
    r.addEventListener('change', () => {
      const group = r.closest('.size-group');
      if (group) group.querySelectorAll('.size-label').forEach(l => l.classList.remove('selected'));
      r.closest('.size-label')?.classList.add('selected');
    });
  });
  modalBody.querySelectorAll('input[type=checkbox]').forEach(cb => {
    cb.addEventListener('change', () => updateModalTotal());
  });

  updateModalTotal();
}

function updateModalTotal() {
  if (!_modalItem) return;
  let total = _modalItem.price;

  // Ajouter priceAdd du size_radio sélectionné
  const sizeInput = document.querySelector('#option-form input[data-price-add]:checked');
  if (sizeInput) total += parseFloat(sizeInput.dataset.priceAdd || 0);

  // Ajouter les checkboxes multi
  document.querySelectorAll('#option-form input[type=checkbox]:checked').forEach(cb => {
    total += parseFloat(cb.dataset.price || 0);
  });

  const el = document.getElementById('modal-total');
  if (el) el.textContent = formatPrice(total);
}

function confirmAddToCart(itemId) {
  const item = getItemById(itemId);
  if (!item) return;
  const form = document.getElementById('option-form');
  if (form && !form.checkValidity()) { form.reportValidity(); return; }

  const selectedOptions = {};
  let extraPrice = 0;
  let sizeName   = '';

  if (item.options) {
    item.options.forEach((opt, idx) => {
      if (opt.type === 'select') {
        const sel = form.querySelector(`[name="opt_${idx}"]`);
        if (sel && sel.value) selectedOptions[opt.label] = sel.value;

      } else if (opt.type === 'radio') {
        const r = form.querySelector(`[name="opt_${idx}"]:checked`);
        if (r) selectedOptions[opt.label] = r.value;

      } else if (opt.type === 'size_radio') {
        const r = form.querySelector(`[name="opt_${idx}"]:checked`);
        if (r) {
          sizeName = r.value;
          selectedOptions[opt.label] = r.value;
          extraPrice += parseFloat(r.dataset.priceAdd || 0);
        }

      } else if (opt.type === 'multi') {
        const checked = form.querySelectorAll(`[name^="opt_${idx}_"]:checked`);
        const chosen = [];
        checked.forEach(cb => {
          chosen.push(cb.value);
          extraPrice += parseFloat(cb.dataset.price || 0);
        });
        if (chosen.length) selectedOptions[opt.label] = chosen.join(', ');
      }
    });
  }

  const specialRequest = (document.getElementById('special-request')?.value || '').trim();
  const displayName    = sizeName ? `${item.name} — ${sizeName.split('·')[0].trim()}` : item.name;

  Cart.add({
    id:              item.id,
    name:            displayName,
    totalPrice:      item.price + extraPrice,
    selectedOptions,
    specialRequest,
    image:           item.image
  });

  closeItemModal();
}

function closeItemModal() {
  const modal = document.getElementById('item-modal');
  if (modal) modal.classList.remove('active');
  _modalItem = null;
}

// ── Message horaires ─────────────────────────────────────────
function showHoursMessage(type) {
  let msg = '';
  const phone = APK_MENU.info.phone1;
  if (type === 'closed') {
    msg = `⏰ Nous sommes actuellement fermés.<br>Revenez entre <strong>11h00–13h15</strong> ou <strong>18h00–22h15</strong>.`;
  } else if (type === 'call') {
    msg = `📞 Les commandes en ligne se terminent.<br>Appelez-nous directement au <strong><a href="tel:${phone}" style="color:var(--gold)">${phone}</a></strong> pour commander.`;
  }

  let overlay = document.getElementById('hours-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'hours-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px';
    overlay.innerHTML = `<div style="background:var(--dark2);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:32px;max-width:420px;text-align:center">
      <div style="font-size:2rem;margin-bottom:16px">${type === 'closed' ? '🔴' : '📞'}</div>
      <div style="font-size:1rem;line-height:1.7;color:#fff">${msg}</div>
      <button onclick="document.getElementById('hours-overlay').remove()" style="margin-top:20px;padding:10px 24px;background:var(--red);border:none;border-radius:8px;color:#fff;font-weight:800;cursor:pointer;font-size:.9rem">Fermer</button>
    </div>`;
    document.body.appendChild(overlay);
  }
}

// Fermer modal backdrop
document.addEventListener('click', e => { if (e.target.id === 'item-modal') closeItemModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeItemModal(); });

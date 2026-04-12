// ============================================================
// ARENA PIZZA KEBAB — Cart Manager
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
    const existing = this.items.find(i =>
      i.id === item.id &&
      JSON.stringify(i.selectedOptions) === JSON.stringify(item.selectedOptions)
    );
    if (existing) {
      existing.qty++;
    } else {
      this.items.push({ ...item, qty: 1, cartKey: Date.now() + Math.random() });
    }
    this.save();
    this.showToast(item.name + ' ajouté au panier');
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

  clear() {
    this.items = [];
    this.save();
  },

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
    // sticky cart button
    const stickyBtn = document.getElementById('sticky-cart');
    if (stickyBtn) {
      stickyBtn.style.display = count > 0 ? 'flex' : 'none';
    }
  },

  showToast(msg) {
    let toast = document.getElementById('cart-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'cart-toast';
      toast.className = 'cart-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), 2500);
  }
};

// ─── Item Options Modal ──────────────────────────────────────

function openItemModal(itemId) {
  const item = getItemById(itemId);
  if (!item) return;

  if (!item.options || item.options.length === 0) {
    Cart.add({
      id: item.id,
      name: item.name + (item.size ? ' ' + item.size : ''),
      totalPrice: item.price,
      selectedOptions: {},
      image: item.image
    });
    return;
  }

  const modal = document.getElementById('item-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  let html = `
    <div class="modal-item-header">
      <img src="${item.image}" alt="${item.name}" class="modal-item-img" onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400'">
      <div class="modal-item-info">
        <h3>${item.name}${item.size ? ' <span class="size-tag">' + item.size + '</span>' : ''}</h3>
        <p>${item.description}</p>
        <div class="modal-base-price">${formatPrice(item.price)}</div>
      </div>
    </div>
    <form id="option-form">
  `;

  item.options.forEach((opt, idx) => {
    html += `<div class="option-group"><label class="option-label">${opt.label}${opt.required ? ' <span class="req">*</span>' : ''}</label>`;
    if (opt.type === 'select') {
      html += `<select name="opt_${idx}" ${opt.required ? 'required' : ''} class="option-select">`;
      if (!opt.required) html += `<option value="">Aucun</option>`;
      opt.choices.forEach(c => { html += `<option value="${c}">${c}</option>`; });
      html += `</select>`;
    } else if (opt.type === 'multi') {
      opt.choices.forEach((c, ci) => {
        const name = typeof c === 'string' ? c : c.name;
        const price = typeof c === 'object' ? c.price : 0;
        html += `<label class="checkbox-label">
          <input type="checkbox" name="opt_${idx}_${ci}" value="${name}" data-price="${price}">
          <span>${name}${price > 0 ? ' <em>+' + formatPrice(price) + '</em>' : ''}</span>
        </label>`;
      });
    }
    html += `</div>`;
  });

  html += `
    </form>
    <div class="modal-footer">
      <div class="modal-price-line">Total : <strong id="modal-total">${formatPrice(item.price)}</strong></div>
      <button class="btn-add-confirm" onclick="confirmAddToCart('${item.id}')">Ajouter au panier</button>
    </div>
  `;

  modalBody.innerHTML = html;
  modal.classList.add('active');

  // Live price update
  modalBody.querySelectorAll('input[type=checkbox]').forEach(cb => {
    cb.addEventListener('change', () => updateModalTotal(item.price));
  });
}

function updateModalTotal(basePrice) {
  let extra = 0;
  document.querySelectorAll('#option-form input[type=checkbox]:checked').forEach(cb => {
    extra += parseFloat(cb.dataset.price || 0);
  });
  const el = document.getElementById('modal-total');
  if (el) el.textContent = formatPrice(basePrice + extra);
}

function confirmAddToCart(itemId) {
  const item = getItemById(itemId);
  const form = document.getElementById('option-form');
  if (form && !form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const selectedOptions = {};
  let extraPrice = 0;

  if (item.options) {
    item.options.forEach((opt, idx) => {
      if (opt.type === 'select') {
        const sel = form.querySelector(`[name="opt_${idx}"]`);
        if (sel && sel.value) selectedOptions[opt.label] = sel.value;
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

  Cart.add({
    id: item.id,
    name: item.name + (item.size ? ' ' + item.size : ''),
    totalPrice: item.price + extraPrice,
    selectedOptions,
    image: item.image
  });

  closeItemModal();
}

function closeItemModal() {
  const modal = document.getElementById('item-modal');
  if (modal) modal.classList.remove('active');
}

// Close modal on backdrop click
document.addEventListener('click', e => {
  if (e.target.id === 'item-modal') closeItemModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeItemModal();
});

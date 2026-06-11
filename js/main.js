function getPagesPrefix() {
  // Check if current page is inside /pages/
  return window.location.pathname.includes('/pages/')
    ? '../pages/'
    : 'pages/';
}

/* ===========================
   HELLOKITTY — SHARED JS
   =========================== */

// ── DATA ──────────────────────────────────────────────────────────────
const CATS = [
  { id:1, name:"Duchess", breed:"Persian", age:"3 months", price:1200, gender:"Female", color:"White",
    tag:"Popular", desc:"An elegant, silky-coated Persian with a sweet temperament. Duchess loves gentle cuddles and indoor luxury.",
    vaccinated:true, microchipped:true,
    img:"https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=600&q=80" },
  { id:2, name:"Onyx", breed:"Maine Coon", age:"4 months", price:1500, gender:"Male", color:"Black",
    tag:"New", desc:"A majestic Maine Coon with tufted ears and a lionlike mane. Onyx is playful, bold, and endlessly curious.",
    vaccinated:true, microchipped:true,
    img:"https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=600&q=80" },
  { id:3, name:"Biscuit", breed:"Scottish Fold", age:"2 months", price:1350, gender:"Male", color:"Orange",
    tag:"Popular", desc:"Adorably round-faced with folded ears. Biscuit is calm, affectionate, and the ideal lap companion.",
    vaccinated:true, microchipped:false,
    img:"https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&q=80" },
  { id:4, name:"Luna", breed:"Siamese", age:"5 months", price:950, gender:"Female", color:"Cream",
    tag:"Sale", desc:"A vocal, intelligent Siamese with piercing blue eyes. Luna forms deep bonds and thrives on attention.",
    vaccinated:true, microchipped:true,
    img:"https://images.unsplash.com/photo-1513245543132-31f507417b26?w=600&q=80" },
  { id:5, name:"Shadow", breed:"British Shorthair", age:"3 months", price:1100, gender:"Male", color:"Grey",
    tag:"", desc:"Dense-coated and dignified, Shadow is independent yet loyal. Perfect for professionals and calm households.",
    vaccinated:false, microchipped:true,
    img:"https://images.unsplash.com/photo-1516431883659-655d41c09bf9?w=600&q=80" },
  { id:6, name:"Mochi", breed:"Ragdoll", age:"6 months", price:1600, gender:"Female", color:"White/Blue",
    tag:"New", desc:"True to its breed, Mochi goes limp with love when held. A docile, fluffy companion with sapphire eyes.",
    vaccinated:true, microchipped:true,
    img:"https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=600&q=80" },
  { id:7, name:"Ember", breed:"Abyssinian", age:"4 months", price:1050, gender:"Female", color:"Ruddy",
    tag:"", desc:"Athletic, curious and wild at heart. Ember is a tiny explorer who loves heights and interactive play.",
    vaccinated:true, microchipped:false,
    img:"https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=600&q=80" },
  { id:8, name:"Atlas", breed:"Norwegian Forest", age:"3 months", price:1400, gender:"Male", color:"Tabby",
    tag:"New", desc:"Built for adventure with a lush double coat. Atlas is robust, intelligent, and surprisingly gentle.",
    vaccinated:true, microchipped:true,
    img:"https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80" },
{ id:9, name:"Zephyr", breed:"Bengal", age:"5 months", price:1700, gender:"Male", color:"Spotted",
  tag:"Exotic", desc:"A high-energy Bengal with a striking leopard pattern. Zephyr loves climbing and active play.",
  vaccinated:true, microchipped:true,
  img:"https://images.unsplash.com/photo-1601758123927-1966b6f3c8d3?w=600&q=80" },

{ id:10, name:"Willow", breed:"Birman", age:"4 months", price:1300, gender:"Female", color:"Cream/Seal",
  tag:"Popular", desc:"Gentle and affectionate, Willow has soft fur and signature white gloves. A calm family companion.",
  vaccinated:true, microchipped:true,
  img:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&q=80" },

{ id:11, name:"Cairo", breed:"Sphynx", age:"6 months", price:1800, gender:"Male", color:"Pink/Grey",
  tag:"Rare", desc:"Hairless and warm to the touch, Cairo is social, mischievous, and loves attention.",
  vaccinated:true, microchipped:true,
  img:"https://images.unsplash.com/photo-1606225457116-90c9f9c0c8a3?w=600&q=80" },

{ id:12, name:"Nala", breed:"Savannah", age:"3 months", price:2200, gender:"Female", color:"Golden Spotted",
  tag:"Exotic", desc:"A wild-looking hybrid with long legs and alert ears. Nala is energetic and intelligent.",
  vaccinated:true, microchipped:false,
  img:"https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=600&q=80" },

{ id:13, name:"Oliver", breed:"American Shorthair", age:"5 months", price:900, gender:"Male", color:"Silver Tabby",
  tag:"", desc:"Easygoing and adaptable, Oliver is perfect for families and first-time pet owners.",
  vaccinated:true, microchipped:true,
  img:"https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=600&q=80" },

{ id:14, name:"Freya", breed:"Turkish Angora", age:"4 months", price:1250, gender:"Female", color:"White",
  tag:"Elegant", desc:"Graceful and intelligent, Freya has silky fur and loves interactive play and affection.",
  vaccinated:true, microchipped:false,
  img:"https://images.unsplash.com/photo-1568158879083-c42860933ed7?w=600&q=80" },

{ id:15, name:"Simba", breed:"Chartreux", age:"6 months", price:1400, gender:"Male", color:"Blue Grey",
  tag:"", desc:"Quiet and observant, Simba has a plush coat and a gentle personality.",
  vaccinated:true, microchipped:true,
  img:"https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&q=80" },

{ id:16, name:"Hazel", breed:"Devon Rex", age:"3 months", price:1500, gender:"Female", color:"Brown",
  tag:"New", desc:"Big ears and curly coat make Hazel unique. She’s playful, loving, and slightly mischievous.",
  vaccinated:true, microchipped:true,
  img:"https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=600&q=80" },

{ id:17, name:"Thor", breed:"Russian Blue", age:"5 months", price:1350, gender:"Male", color:"Blue",
  tag:"Popular", desc:"Shy but loyal, Thor bonds deeply with his owner and has a luxurious double coat.",
  vaccinated:true, microchipped:true,
  img:"https://images.unsplash.com/photo-1595433562696-6c53d7d9dbb0?w=600&q=80" },

{ id:18, name:"Poppy", breed:"Cornish Rex", age:"4 months", price:1450, gender:"Female", color:"White/Black",
  tag:"", desc:"With a wavy coat and slim build, Poppy is energetic and loves human interaction.",
  vaccinated:true, microchipped:false,
  img:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&q=80" },

{ id:19, name:"Leo", breed:"Ocicat", age:"6 months", price:1550, gender:"Male", color:"Spotted",
  tag:"Exotic", desc:"Looks wild but acts domestic. Leo is social, confident, and loves attention.",
  vaccinated:true, microchipped:true,
  img:"https://images.unsplash.com/photo-1574231164645-d6f0e8553590?w=600&q=80" },

{ id:20, name:"Misty", breed:"Himalayan", age:"3 months", price:1250, gender:"Female", color:"Cream/Chocolate",
  tag:"Sale", desc:"A Persian-Siamese mix with striking eyes. Misty is calm, affectionate, and loves lounging.",
  vaccinated:true, microchipped:true,
  img:"https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=600&q=80" },

{ id:21, name:"Rex", breed:"Selkirk Rex", age:"5 months", price:1500, gender:"Male", color:"Grey/White",
  tag:"Rare", desc:"Known for its curly coat, Rex is easygoing, cuddly, and very patient.",
  vaccinated:true, microchipped:false,
  img:"https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80" },

{ id:22, name:"Cleo", breed:"Egyptian Mau", age:"4 months", price:1650, gender:"Female", color:"Silver Spotted",
  tag:"Exotic", desc:"One of the fastest domestic cats. Cleo is agile, alert, and fiercely loyal.",
  vaccinated:true, microchipped:true,
  img:"https://images.unsplash.com/photo-1513245543132-31f507417b26?w=600&q=80" },

{ id:23, name:"Finn", breed:"Manx", age:"3 months", price:1100, gender:"Male", color:"Brown Tabby",
  tag:"", desc:"Tailless and charming, Finn is playful and loves hopping around like a rabbit.",
  vaccinated:true, microchipped:true,
  img:"https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&q=80" },

{ id:24, name:"Ivy", breed:"Balinese", age:"5 months", price:1350, gender:"Female", color:"Cream",
  tag:"Elegant", desc:"A long-haired Siamese variant. Ivy is vocal, affectionate, and very intelligent.",
  vaccinated:true, microchipped:true,
  img:"https://images.unsplash.com/photo-1516431883659-655d41c09bf9?w=600&q=80" },

{ id:25, name:"Max", breed:"Bombay", age:"4 months", price:1200, gender:"Male", color:"Jet Black",
  tag:"", desc:"Panther-like appearance with a loving nature. Max enjoys companionship and playtime.",
  vaccinated:true, microchipped:false,
  img:"https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=600&q=80" },

{ id:26, name:"Snow", breed:"Khao Manee", age:"3 months", price:2000, gender:"Female", color:"White",
  tag:"Rare", desc:"Famous for its dazzling eyes, Snow is rare, intelligent, and affectionate.",
  vaccinated:true, microchipped:true,
  img:"https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=600&q=80" },

{ id:27, name:"Rocky", breed:"Pixie-bob", age:"6 months", price:1450, gender:"Male", color:"Brown Spotted",
  tag:"", desc:"Wild-looking but dog-like in personality. Rocky is loyal and loves interactive games.",
  vaccinated:true, microchipped:true,
  img:"https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&q=80" },

{ id:28, name:"Lily", breed:"Tonkinese", age:"4 months", price:1300, gender:"Female", color:"Champagne",
  tag:"New", desc:"A blend of Burmese and Siamese traits. Lily is social, vocal, and thrives on attention.",
  vaccinated:true, microchipped:true,
  img:"https://images.unsplash.com/photo-1601758123927-1966b6f3c8d3?w=600&q=80" },    
];

const ACCESSORIES = [
  { id:101, name:"Luxury Memory Foam Bed", price:89, category:"Bedding",
    desc:"Ultra-soft memory foam with washable velvet cover",
    img:"https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?w=600&q=80" },
  { id:102, name:"Premium Grain-Free Kibble", price:45, category:"Food",
    desc:"Vet-approved, high-protein formula for all breeds",
    img:"https://images.unsplash.com/photo-1589924749533-e7c0be3b3be7?w=600&q=80" },
  { id:103, name:"Interactive 5-Piece Toy Set", price:35, category:"Toys",
    desc:"Feather wands, laser pointer & crinkle balls",
    img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { id:104, name:"Airline-Approved Travel Carrier", price:120, category:"Travel",
    desc:"Breathable mesh panels, fleece-lined interior",
    img:"https://images.unsplash.com/photo-1516222338250-863216ce01ea?w=600&q=80" },
];

// ── CART ──────────────────────────────────────────────────────────────
const Cart = {
  items: JSON.parse(localStorage.getItem('hk_cart') || '[]'),
  save() { localStorage.setItem('hk_cart', JSON.stringify(this.items)); },
  add(item) {
    const ex = this.items.find(i => i.id === item.id);
    if (ex) ex.qty++; else this.items.push({ ...item, qty: 1 });
    this.save(); this.render(); Cart.badge();
    showToast(`${item.name} added to cart`, 'success');
  },
  remove(id) {
    this.items = this.items.filter(i => i.id !== id);
    this.save(); this.render(); Cart.badge();
  },
  total() { return this.items.reduce((s,i) => s + i.price * i.qty, 0); },
  count() { return this.items.reduce((s,i) => s + i.qty, 0); },
  badge() {
    document.querySelectorAll('.cart-count').forEach(el => {
      const n = this.count();
      el.textContent = n; el.style.display = n ? 'flex' : 'none';
    });
  },
  render() {
    const el = document.getElementById('cart-items');
    const tot = document.getElementById('cart-total');
    if (!el) return;
    if (!this.items.length) {
      el.innerHTML = `<div class="cart-empty"><i class="fa-solid fa-bag-shopping"></i><p>Your cart is empty</p></div>`;
      if (tot) tot.textContent = '$0';
      return;
    }
    el.innerHTML = this.items.map(i => `
      <div class="cart-item">
        <img class="cart-item-img" src="${i.img}" alt="${i.name}" loading="lazy">
        <div class="cart-item-info">
          <div class="cart-item-name">${i.name}</div>
          <div class="cart-item-breed">${i.breed || i.category || ''} · Qty: ${i.qty}</div>
        </div>
        <div class="cart-item-price">$${(i.price * i.qty).toLocaleString()}</div>
        <button class="cart-remove" onclick="Cart.remove(${i.id})" aria-label="Remove"><i class="fa-solid fa-xmark"></i></button>
      </div>`).join('');
    if (tot) tot.textContent = '$' + this.total().toLocaleString();
  }
};

// ── WISHLIST ──────────────────────────────────────────────────────────
const Wishlist = {
  items: JSON.parse(localStorage.getItem('hk_wish') || '[]'),
  save() { localStorage.setItem('hk_wish', JSON.stringify(this.items)); },
  toggle(id) {
    if (this.items.includes(id)) {
      this.items = this.items.filter(x => x !== id);
      showToast('Removed from wishlist', 'info');
    } else {
      this.items.push(id);
      showToast('Added to wishlist ♥', 'success');
    }
    this.save();
    document.querySelectorAll(`[data-wish="${id}"]`).forEach(b => {
      b.classList.toggle('active', this.items.includes(id));
    });
  }
};

// ── TOAST ──────────────────────────────────────────────────────────────
function showToast(msg, type='success') {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div'); el.id = 'toast'; el.className = 'toast';
    document.body.appendChild(el);
  }
  const icon = type === 'success' ? 'fa-circle-check' : type === 'error' ? 'fa-circle-xmark' : 'fa-circle-info';
  el.innerHTML = `<i class="fa-solid ${icon}"></i> ${msg}`;
  el.className = `toast ${type} show`;
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2800);
}

// ── NAV ──────────────────────────────────────────────────────────────
let _navInitDone = false;
function initNav() {
  if (_navInitDone) return;
  _navInitDone = true;
  const nav = document.querySelector('.nav');
  if (!nav) return;

  // ── Scroll shadow ──
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // ── Active link highlight ──
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === current || (current === 'index.html' && a.getAttribute('href') === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── Cart drawer ──
  const cartOverlay = document.getElementById('cart-overlay');
  const cartDrawer  = document.getElementById('cart-drawer');
  document.querySelectorAll('[data-cart-open]').forEach(btn => {
    btn.addEventListener('click', () => {
      Cart.render();
      cartOverlay?.classList.add('open');
      cartDrawer?.classList.add('open');
    });
  });
  cartOverlay?.addEventListener('click', closeCart);
  document.getElementById('cart-close')?.addEventListener('click', closeCart);
  function closeCart() { cartOverlay?.classList.remove('open'); cartDrawer?.classList.remove('open'); }

  // ── Mobile drawer ──
  // Look up at click-time so write-order of mobileDrawerHTML() doesn't matter
  function getMobEls() {
    return {
      overlay:  document.getElementById('mob-drawer-overlay'),
      drawer:   document.getElementById('mob-drawer'),
      burger:   document.getElementById('hamburger'),
    };
  }

  function openMobDrawer() {
    const { overlay, drawer, burger } = getMobEls();
    overlay?.classList.add('open');
    drawer?.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (burger) {
      const bars = burger.querySelectorAll('span');
      bars[0].style.transform = 'translateY(7px) rotate(45deg)';
      bars[1].style.opacity   = '0';
      bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    }
  }
  function closeMobDrawer() {
    const { overlay, drawer, burger } = getMobEls();
    overlay?.classList.remove('open');
    drawer?.classList.remove('open');
    document.body.style.overflow = '';
    if (burger) {
      burger.querySelectorAll('span').forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
    }
  }

  // Delegate hamburger click on document so it works regardless of injection order
  document.addEventListener('click', function _hamClick(e) {
    const burger = e.target.closest('#hamburger');
    if (!burger) return;
    const drawer = document.getElementById('mob-drawer');
    if (drawer?.classList.contains('open')) closeMobDrawer();
    else openMobDrawer();
  });

  document.getElementById('mob-drawer-overlay')?.addEventListener('click', closeMobDrawer);
  document.getElementById('mob-drawer-close')?.addEventListener('click', closeMobDrawer);

  // Close drawer when any nav link is tapped
  document.getElementById('mob-drawer')?.querySelectorAll('.mob-drawer-link, .mob-drawer-sub-link, .mob-drawer-logo, .mob-drawer-cta a').forEach(a => {
    a.addEventListener('click', closeMobDrawer);
  });

  // ── Accordion groups ──
  document.querySelectorAll('.mob-drawer-group-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const body     = document.getElementById(targetId);
      const chevron  = btn.querySelector('.mob-drawer-chevron');
      const isOpen   = body?.classList.contains('open');
      // close all others
      document.querySelectorAll('.mob-drawer-group-body').forEach(b => b.classList.remove('open'));
      document.querySelectorAll('.mob-drawer-chevron').forEach(c => c.style.transform = '');
      if (!isOpen) {
        body?.classList.add('open');
        if (chevron) chevron.style.transform = 'rotate(180deg)';
      }
    });
  });

  // Highlight active link in drawer
  mobDrawer?.querySelectorAll('.mob-drawer-link, .mob-drawer-sub-link').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.endsWith(current) || (current === 'index.html' && href.endsWith('index.html'))) {
      a.classList.add('active');
    }
  });

  Cart.badge();
}

// ── SCROLL REVEAL ──────────────────────────────────────────────────────
function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

// ── HELPERS ──────────────────────────────────────────────────────────
function formatPrice(p) { return '$' + p.toLocaleString(); }

function tagClass(tag) {
  if (!tag) return '';
  if (tag === 'Sale') return 'sale';
  if (tag === 'New') return 'new';
  return '';
}

function catCardHTML(cat, pages) {
  const PAGES = getPagesPrefix();
  const wished = Wishlist.items.includes(cat.id);
  return `
  <article class="cat-card" onclick="location.href='${PAGES}cat-detail.html?id=${cat.id}'">
    <div class="cat-card-img-wrap">
      <img src="${cat.img}" alt="${cat.name}" loading="lazy">
      ${cat.tag ? `<span class="cat-tag ${tagClass(cat.tag)}">${cat.tag}</span>` : ''}
      <button class="cat-wish ${wished ? 'active' : ''}" data-wish="${cat.id}"
        onclick="event.stopPropagation(); Wishlist.toggle(${cat.id}); this.classList.toggle('active')"
        aria-label="Wishlist">
        <i class="${wished ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
      </button>
    </div>
    <div class="cat-card-body">
      <div class="cat-card-top">
        <div class="cat-card-name">${cat.name}</div>
        <div class="cat-card-price">${formatPrice(cat.price)}</div>
      </div>
      <div class="cat-card-meta">${cat.breed} &middot; ${cat.gender} &middot; ${cat.age}</div>
      <p class="cat-card-desc">${cat.desc}</p>
      <div class="cat-badges">
        ${cat.vaccinated ? '<span class="badge badge-green"><i class="fa-solid fa-shield-virus"></i> Vaccinated</span>' : ''}
        ${cat.microchipped ? '<span class="badge badge-amber"><i class="fa-solid fa-microchip"></i> Microchipped</span>' : ''}
      </div>
      <button class="btn btn-primary" style="width:100%; justify-content:center"
        onclick="event.stopPropagation(); Cart.add(${JSON.stringify(cat).replace(/"/g,'&quot;')})">
        <i class="fa-solid fa-bag-shopping"></i> Add to Cart
      </button>
    </div>
  </article>`;
}

// ── NAV HTML (shared) ──────────────────────────────────────────────────
function navHTML(prefix='') {
  return `
  <nav class="nav" id="main-nav">
    <div class="nav-inner">
      <a href="${prefix}index.html" class="nav-logo">
        <i class="fa-solid fa-paw paw"></i> <p>HelloKitty</p> 
      </a>
      <div class="nav-links">
        <a href="${prefix}index.html">Home</a>
        <a href="${prefix}pages/shop.html">Our Cats</a>
        <a href="${prefix}pages/accessories.html">Accessories</a>
        <a href="${prefix}pages/about.html">About</a>
        <a href="${prefix}pages/contact.html">Contact</a>
      </div>
      <div class="nav-actions">
        <a href="${prefix}pages/wishlist.html" class="nav-icon-btn" aria-label="Wishlist">
          <i class="fa-regular fa-heart"></i>
        </a>
        <button class="nav-icon-btn" data-cart-open aria-label="Cart">
          <i class="fa-solid fa-bag-shopping"></i>
          <span class="nav-badge cart-count" style="display:none">0</span>
        </button>
        <a href="${prefix}pages/login.html" class="btn btn-primary" style="padding:10px 22px; font-size:13px">
          <i class="fa-regular fa-user"></i> Sign In
        </a>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Open menu" data-drawer-open>
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;
}
  
function cartDrawerHTML(pages) {
  const PAGES = getPagesPrefix();
  return `
  <div class="cart-overlay" id="cart-overlay"></div>
  <aside class="cart-drawer" id="cart-drawer" aria-label="Shopping cart">
    <div class="cart-header">
      <h3><i class="fa-solid fa-bag-shopping"></i> Your Cart</h3>
      <button class="cart-close" id="cart-close" aria-label="Close cart"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="cart-items" id="cart-items"></div>
    <div class="cart-footer">
      <div class="cart-total">
        <span>Total</span>
        <span id="cart-total">$0</span>
      </div>
      <a href="${PAGES}checkout.html" class="btn btn-primary btn-lg" style="width:100%; justify-content:center">
        Checkout <i class="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  </aside>`;
}

function mobileDrawerHTML(prefix='') {
  const p = prefix || (window.location.pathname.includes('/pages/') ? '../' : '');
  const PAGES = p + 'pages/';
  return `
  <style id="mob-drawer-styles">
    .mob-drawer-overlay{position:fixed;inset:0;z-index:1100;background:rgba(26,14,7,.55);backdrop-filter:blur(4px);opacity:0;pointer-events:none;transition:opacity .35s cubic-bezier(.4,0,.2,1)}
    .mob-drawer-overlay.open{opacity:1;pointer-events:all}
    .mob-drawer{position:fixed;top:0;left:0;bottom:0;width:min(88vw,380px);z-index:1101;background:#FFFDF9;display:flex;flex-direction:column;transform:translateX(-100%);transition:transform .38s cubic-bezier(.4,0,.2,1);overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain}
    .mob-drawer.open{transform:translateX(0);box-shadow:6px 0 60px rgba(44,24,16,.22)}
    .mob-drawer-header{display:flex;align-items:center;justify-content:space-between;padding:0 20px;height:68px;border-bottom:1px solid rgba(196,122,53,.18);background:#2C1810;flex-shrink:0}
    .mob-drawer-logo{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:700;color:#fff;display:flex;align-items:center;gap:8px;letter-spacing:.2px;text-decoration:none}
    .mob-drawer-logo i{color:#E8A45C;font-size:18px}
    .mob-drawer-close{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.1);border:none;cursor:pointer;color:rgba(255,255,255,.7);font-size:16px;display:flex;align-items:center;justify-content:center;transition:all .3s}
    .mob-drawer-close:hover{background:rgba(255,255,255,.2);color:#fff}
    .mob-drawer-user{display:flex;align-items:center;gap:14px;padding:18px 20px;background:#FDF0E0;border-bottom:1px solid rgba(196,122,53,.18);flex-shrink:0}
    .mob-drawer-user-avatar{width:42px;height:42px;border-radius:50%;background:#2C1810;color:rgba(255,255,255,.6);font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
    .mob-drawer-user-name{font-size:13px;font-weight:700;color:#2C1810;letter-spacing:.2px;margin-bottom:2px}
    .mob-drawer-user-action{font-size:12px;color:#C47A35;font-weight:600;text-decoration:none;display:block}
    .mob-drawer-nav{display:flex;flex-direction:column;padding:12px 0 4px;flex-shrink:0}
    .mob-drawer-link{display:flex;align-items:center;gap:14px;padding:13px 20px;font-size:14px;font-weight:600;color:#2C1810;letter-spacing:.2px;text-decoration:none;position:relative;transition:background .18s,color .18s}
    .mob-drawer-link:hover,.mob-drawer-link.active{background:#FDF0E0;color:#C47A35}
    .mob-drawer-link-icon{width:34px;height:34px;border-radius:8px;background:#FAF5EE;border:1px solid rgba(196,122,53,.18);display:flex;align-items:center;justify-content:center;font-size:13px;color:#C47A35;flex-shrink:0;transition:all .3s}
    .mob-drawer-link:hover .mob-drawer-link-icon,.mob-drawer-link.active .mob-drawer-link-icon{background:#C47A35;color:#fff;border-color:#C47A35}
    .mob-drawer-divider{height:1px;background:rgba(196,122,53,.18);margin:8px 20px;flex-shrink:0}
    .mob-drawer-group{flex-shrink:0}
    .mob-drawer-group-toggle{width:100%;display:flex;align-items:center;justify-content:space-between;padding:13px 20px;background:none;border:none;cursor:pointer;font-size:12px;font-weight:700;color:#9C7559;letter-spacing:.8px;text-transform:uppercase;transition:all .3s;font-family:inherit}
    .mob-drawer-group-toggle:hover{color:#C47A35;background:#FDF0E0}
    .mob-drawer-chevron{font-size:11px;color:#9C7559;transition:transform .28s cubic-bezier(.4,0,.2,1)}
    .mob-drawer-group-body{max-height:0;overflow:hidden;transition:max-height .32s cubic-bezier(.4,0,.2,1),opacity .25s;opacity:0;background:#FAF5EE;border-top:1px solid transparent}
    .mob-drawer-group-body.open{max-height:400px;opacity:1;border-top-color:rgba(196,122,53,.18)}
    .mob-drawer-sub-link{display:flex;align-items:center;gap:10px;padding:11px 20px 11px 28px;font-size:13px;font-weight:500;color:#5C3D2E;text-decoration:none;transition:background .15s,color .15s}
    .mob-drawer-sub-link i{width:16px;text-align:center;color:#C47A35;font-size:12px;flex-shrink:0}
    .mob-drawer-sub-link:hover{background:#FDF0E0;color:#2C1810}
    .mob-drawer-sub-link.active{color:#C47A35;font-weight:700}
    .mob-drawer-cta{padding:20px 20px 8px;flex-shrink:0}
    .mob-drawer-footer{margin-top:auto;padding:20px 20px 28px;border-top:1px solid rgba(196,122,53,.18);flex-shrink:0}
    .mob-drawer-socials{display:flex;gap:12px;margin-bottom:14px}
    .mob-drawer-socials a{width:36px;height:36px;border-radius:50%;background:#F0E6D6;border:1px solid rgba(196,122,53,.18);display:flex;align-items:center;justify-content:center;font-size:13px;color:#9C7559;transition:all .3s;text-decoration:none}
    .mob-drawer-socials a:hover{background:#C47A35;border-color:#C47A35;color:#fff}
    .mob-drawer-footer-copy{font-size:11px;color:#9C7559;line-height:1.5}
    @media(min-width:769px){.mob-drawer,.mob-drawer-overlay{display:none!important}}
  </style>

  <div class="mob-drawer-overlay" id="mob-drawer-overlay"></div>
  <aside class="mob-drawer" id="mob-drawer" aria-label="Navigation menu" role="dialog" aria-modal="true">

    <div class="mob-drawer-header">
      <a href="${p}index.html" class="mob-drawer-logo">
        <i class="fa-solid fa-paw"></i> HelloKitty
      </a>
      <button class="mob-drawer-close" id="mob-drawer-close" aria-label="Close menu">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <div class="mob-drawer-user">
      <div class="mob-drawer-user-avatar"><i class="fa-regular fa-user"></i></div>
      <div>
        <div class="mob-drawer-user-name">Welcome back</div>
        <a href="${PAGES}login.html" class="mob-drawer-user-action">Sign in or create account →</a>
      </div>
    </div>

    <nav class="mob-drawer-nav">
      <a href="${p}index.html" class="mob-drawer-link">
        <span class="mob-drawer-link-icon"><i class="fa-solid fa-house"></i></span>Home
      </a>
      <a href="${PAGES}shop.html" class="mob-drawer-link">
        <span class="mob-drawer-link-icon"><i class="fa-solid fa-paw"></i></span>Our Cats
      </a>
      <a href="${PAGES}accessories.html" class="mob-drawer-link">
        <span class="mob-drawer-link-icon"><i class="fa-solid fa-tag"></i></span>Accessories
      </a>
      <a href="${PAGES}wishlist.html" class="mob-drawer-link">
        <span class="mob-drawer-link-icon"><i class="fa-regular fa-heart"></i></span>My Wishlist
      </a>
      <a href="${PAGES}checkout.html" class="mob-drawer-link">
        <span class="mob-drawer-link-icon"><i class="fa-solid fa-bag-shopping"></i></span>Cart &amp; Checkout
      </a>
    </nav>

    <div class="mob-drawer-divider"></div>

    <div class="mob-drawer-group">
      <button class="mob-drawer-group-toggle" data-target="group-company">
        <span><i class="fa-solid fa-building" style="margin-right:10px;color:#C47A35"></i>Company</span>
        <i class="fa-solid fa-chevron-down mob-drawer-chevron"></i>
      </button>
      <div class="mob-drawer-group-body" id="group-company">
        <a href="${PAGES}about.html" class="mob-drawer-sub-link"><i class="fa-solid fa-circle-info"></i> About Us</a>
        <a href="${PAGES}breeder-partners.html" class="mob-drawer-sub-link"><i class="fa-solid fa-handshake"></i> Breeder Partners</a>
        <a href="${PAGES}careers.html" class="mob-drawer-sub-link"><i class="fa-solid fa-briefcase"></i> Careers</a>
        <a href="${PAGES}press.html" class="mob-drawer-sub-link"><i class="fa-solid fa-newspaper"></i> Press</a>
      </div>
    </div>

    <div class="mob-drawer-group">
      <button class="mob-drawer-group-toggle" data-target="group-support">
        <span><i class="fa-solid fa-headset" style="margin-right:10px;color:#C47A35"></i>Support</span>
        <i class="fa-solid fa-chevron-down mob-drawer-chevron"></i>
      </button>
      <div class="mob-drawer-group-body" id="group-support">
        <a href="${PAGES}faq.html" class="mob-drawer-sub-link"><i class="fa-solid fa-circle-question"></i> FAQ</a>
        <a href="${PAGES}contact.html" class="mob-drawer-sub-link"><i class="fa-solid fa-envelope"></i> Contact Us</a>
        <a href="${PAGES}shipping.html" class="mob-drawer-sub-link"><i class="fa-solid fa-truck"></i> Shipping Info</a>
        <a href="${PAGES}health-guarantee.html" class="mob-drawer-sub-link"><i class="fa-solid fa-shield-heart"></i> Health Guarantee</a>
        <a href="${PAGES}returns.html" class="mob-drawer-sub-link"><i class="fa-solid fa-rotate-left"></i> Returns</a>
        <a href="${PAGES}privacy-policy.html" class="mob-drawer-sub-link"><i class="fa-solid fa-lock"></i> Privacy Policy</a>
      </div>
    </div>

    <div class="mob-drawer-divider"></div>

    <div class="mob-drawer-cta">
      <a href="${PAGES}login.html" class="btn btn-primary btn-lg" style="width:100%;justify-content:center;display:flex;align-items:center;gap:8px">
        <i class="fa-regular fa-user"></i> Sign In / Register
      </a>
    </div>

    <div class="mob-drawer-footer">
      <div class="mob-drawer-socials">
        <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
        <a href="#" aria-label="Twitter/X"><i class="fa-brands fa-x-twitter"></i></a>
      </div>
      <p class="mob-drawer-footer-copy">© 2026 HelloKitty Worldwide</p>
    </div>
  </aside>`;
}

function footerHTML(prefix='') {
  return `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo"><i class="fa-solid fa-paw"></i> HelloKitty</div>
        <p class="footer-tagline">The World's most trusted premium cat store. Connecting loving homes with pedigree companions since 2022.</p>
        <div class="footer-social">
          <a href="#" class="social-btn" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" class="social-btn" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="social-btn" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="#" class="social-btn" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
        </div>
        <p style="font-size:12px;color:rgba(255,255,255,0.25);margin-top:24px"><i class="fa-solid fa-phone"></i> +1 (503) 555-0192</p>
        <p style="font-size:12px;color:rgba(255,255,255,0.25);margin-top:6px"><i class="fa-solid fa-envelope"></i> hello@hellokitty.com</p>
      </div>
      <div>
        <div class="footer-heading">Shop</div>
        <ul class="footer-links">
            <li><a href="${prefix}pages/shop.html">All Cats</a></li>
            <li><a href="${prefix}pages/shop.html?breed=Persian">Persian</a></li>
            <li><a href="${prefix}pages/shop.html?breed=Maine+Coon">Maine Coon</a></li>
            <li><a href="${prefix}pages/shop.html?breed=Siamese">Siamese</a></li>
            <li><a href="${prefix}pages/accessories.html">Accessories</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-heading">Company</div>
        <ul class="footer-links">
            <li><a href="${prefix}pages/about.html">About Us</a></li>
            <li><a href="${prefix}pages/contact.html">Contact</a></li>
          <li><a href="${prefix}pages/breeder-partners.html">Breeder Partners</a></li>
          <li><a href="${prefix}pages/careers.html">Careers</a></li>
          <li><a href="${prefix}pages/press.html">Press</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-heading">Newsletter</div>
        <p style="font-size:13px;color:rgba(255,255,255,0.4);margin-bottom:4px">New kittens & exclusive offers in your inbox.</p>
        <div class="newsletter-form">
          <input type="email" class="newsletter-input" placeholder="your@email.com">
          <button class="newsletter-btn" aria-label="Subscribe"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div class="footer-heading" style="margin-top:32px">Support</div>
        <ul class="footer-links">
          <li><a href="${prefix}pages/faq.html">FAQ</a></li>
          <li><a href="${prefix}pages/shipping.html">Shipping Info</a></li>
          <li><a href="${prefix}pages/health-guarantee.html">Health Guarantee</a></li>
          <li><a href="${prefix}pages/returns.html">Returns</a></li>
          <li><a href="${prefix}pages/privacy-policy.html">Privacy Policy</a></li>          
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Hellowkitty Worldwide. All rights reserved.</p>
      <div class="footer-legal">
        <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a>
      </div>
    </div>
  </div>
</footer>  
  
  
  
  
  
  `;
}

// ── INIT ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  // newsletter
  document.querySelectorAll('.newsletter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const inp = btn.previousElementSibling;
      if (inp && inp.value.includes('@')) {
        showToast('Subscribed! Welcome to HelloKitty 🐾', 'success');
        inp.value = '';
      } else {
        showToast('Please enter a valid email.', 'error');
      }
    });
  });
});
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
function initNav() {
  const nav = document.querySelector('.nav');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const bars = hamburger.querySelectorAll('span');
      if (mobileMenu.classList.contains('open')) {
        bars[0].style.transform = 'translateY(7px) rotate(45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        bars.forEach(b => { b.style.transform=''; b.style.opacity=''; });
      }
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.querySelectorAll('span').forEach(b => { b.style.transform=''; b.style.opacity=''; });
    }));
  }

  // active link
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === current || (current === 'index.html' && a.getAttribute('href') === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Cart drawer
  const overlay = document.getElementById('cart-overlay');
  const drawer = document.getElementById('cart-drawer');
  document.querySelectorAll('[data-cart-open]').forEach(btn => {
    btn.addEventListener('click', () => {
      Cart.render();
      overlay?.classList.add('open');
      drawer?.classList.add('open');
    });
  });
  overlay?.addEventListener('click', closeCart);
  document.getElementById('cart-close')?.addEventListener('click', closeCart);
  function closeCart() { overlay?.classList.remove('open'); drawer?.classList.remove('open'); }

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
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-menu" id="mobile-menu">
    <a href="${prefix}index.html">Home</a>
    <a href="${prefix}pages/shop.html">Our Cats</a>
    <a href="${prefix}pages/accessories.html">Accessories</a>
    <a href="${prefix}pages/about.html">About</a>
    <a href="${prefix}pages/contact.html">Contact</a>
    <a href="${prefix}pages/login.html" style="color:var(--amber)">Sign In</a>
  </div>`;
}

function cartDrawerHTML() {
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
      <a href="${location.pathname.includes('/pages/') ? '' : 'pages/'}checkout.html" class="btn btn-primary btn-lg" style="width:100%; justify-content:center">
        Checkout <i class="fa-solid fa-arrow-right"></i>
      </a>
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
        <p style="font-size:12px;color:rgba(255,255,255,0.25);margin-top:24px"><i class="fa-solid fa-phone"></i> +234 800 435 5689</p>
        <p style="font-size:12px;color:rgba(255,255,255,0.25);margin-top:6px"><i class="fa-solid fa-envelope"></i> hello@hellokitty.ng</p>
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
            <li><a href="#">Breeder Partners</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
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
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Shipping Info</a></li>
          <li><a href="#">Health Guarantee</a></li>
          <li><a href="#">Returns</a></li>
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
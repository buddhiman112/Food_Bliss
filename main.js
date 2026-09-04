/* =============================================
   FOOD BLISS — MAIN JS
   ============================================= */

// ── LOADER ──
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }, 1800);
});

// ── CUSTOM CURSOR ──
const cursorDot  = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');
let mouseX = -100, mouseY = -100;
let ringX = -100, ringY = -100;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  if (cursorDot) {
    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  }
});

function animateCursor() {
  if (cursorRing) {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Grow cursor over interactive elements (delegated so dynamically
// rendered cards also trigger it without duplicate listeners).
// Boundary-guarded so moving between an element and its children
// doesn't rapidly toggle the class (which would flicker the cursor).
const cursorTargets = 'a, button, .menu-card, .special-card, .gallery-item, .lang-btn, input, textarea';
document.addEventListener('mouseover', e => {
  if (!e.target.closest(cursorTargets)) return;
  if (e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest(cursorTargets)) return;
  document.body.classList.add('cursor-grow');
});
document.addEventListener('mouseout', e => {
  if (!e.target.closest(cursorTargets)) return;
  if (e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest(cursorTargets)) return;
  document.body.classList.remove('cursor-grow');
});

// ── NAVBAR ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Back to top
  const backTop = document.querySelector('.back-top');
  if (backTop) backTop.classList.toggle('visible', window.scrollY > 400);
});

// ── HAMBURGER / MOBILE MENU ──
const hamburger   = document.querySelector('.hamburger');
const mobileMenu  = document.querySelector('.mobile-menu');
const mobileOverlay = document.querySelector('.mobile-overlay');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
}
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      // Stagger children if applicable
      entry.target.querySelectorAll('[data-stagger]').forEach((child, i) => {
        child.style.transitionDelay = (i * 80) + 'ms';
      });
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
  revealObserver.observe(el);
});

// ── ACTIVE NAV LINK ──
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

// ── MENU FILTER ──
let activeFilter = 'all';

function categoryIconSvg(key) {
  if (key === 'all') {
    return `
      <svg class="menu-filter-logo" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="47" fill="currentColor"/>
        <circle cx="50" cy="50" r="38" fill="var(--cream)" stroke="var(--gold)" stroke-width="3"/>
        <path d="M25 61c8 9 42 9 50 0" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
        <path d="M31 55c7-9 31-9 38 0" stroke="var(--sage)" stroke-width="4" stroke-linecap="round"/>
        <text x="50" y="48" text-anchor="middle" font-family="Georgia, serif" font-size="26" font-weight="700" fill="currentColor">FB</text>
      </svg>
    `;
  }

  const icons = {
    tea: '<path d="M6 9h10v5a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4Z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8 5c0 1-.8 1.2-.8 2.2"/><path d="M12 4.5c0 1.1-.8 1.4-.8 2.5"/>',
    breakfast: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M4 12h3"/><path d="M17 12h3"/>',
    sandwich: '<path d="M4 10 12 5l8 5v6H4Z"/><path d="M4 13h16"/><path d="M8 16v-3"/><path d="M16 16v-3"/>',
    vegsnack: '<path d="M12 19c4-2.5 6-5.7 6-9.5-3.8 0-6.5 2.1-6 9.5Z"/><path d="M12 19C8 16.5 6 13.3 6 9.5c3.8 0 6.5 2.1 6 9.5Z"/><path d="M12 19V7"/>',
    sekuwa: '<path d="M6 18 18 6"/><path d="m8 13 3 3"/><path d="m11 10 3 3"/><path d="m14 7 3 3"/>',
    momo: '<path d="M5 15c0-4 3-7 7-7s7 3 7 7c0 2.2-3.1 4-7 4s-7-1.8-7-4Z"/><path d="M8 14c1.2-1.2 2.5-1.8 4-1.8s2.8.6 4 1.8"/>',
    nonveg: '<path d="M8 15a5 5 0 1 1 6.5-6.5L18 5l1 1-3.5 3.5A5 5 0 0 1 8 15Z"/><path d="M7 14 4 17a2 2 0 1 0 3 3l3-3"/>',
    rice: '<path d="M5 12h14l-1.6 6H6.6Z"/><path d="M8 9c1-2 7-2 8 0"/><path d="M8 15h8"/>',
    noodles: '<path d="M5 13h14l-1.5 5h-11Z"/><path d="M7 7c1 2-1 2.5 0 4"/><path d="M11 6c1 2-1 3 0 5"/><path d="M15 7c1 2-1 2.5 0 4"/>',
    thukpa: '<path d="M5 11h14l-1.5 7h-11Z"/><path d="M8 6h8"/><path d="M9 8h6"/>',
    drinks: '<path d="M7 5h10l-1 14H8Z"/><path d="M9 9h6"/><path d="M15 5l2-3"/>',
    khana: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 8v8"/><path d="M8 12h8"/>',
    curry: '<path d="M5 11h14l-1.5 7h-11Z"/><path d="M8 8c0-1.5 1-2 1-3"/><path d="M12 8c0-1.5 1-2 1-3"/><path d="M16 8c0-1.5 1-2 1-3"/>'
  };
  return `<svg class="menu-filter-svg" viewBox="0 0 24 24" aria-hidden="true">${icons[key] || icons.tea}</svg>`;
}

function formatBadge(badge) {
  if (!badge) return '';
  if (badge.includes('Spicy')) return 'Spicy';
  if (badge.includes('Hot')) return 'Hot';
  return badge.replace(/^[^A-Za-z0-9]+/, '').trim();
}

function renderMenuFilters() {
  const wrap = document.getElementById('menuFilters');
  if (!wrap) return;
  wrap.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'menu-filter-btn' + (cat.key === activeFilter ? ' active' : '');
    btn.innerHTML = `<span class="menu-filter-icon">${categoryIconSvg(cat.key)}</span><span>${currentLang === 'ne' ? cat.nepali : cat.label}</span>`;
    btn.addEventListener('click', () => {
      activeFilter = cat.key;
      renderMenuFilters();
      renderMenuItems(cat.key);
    });
    wrap.appendChild(btn);
  });
}

function renderMenuItems(filter) {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;
  const items = filter === 'all' ? MENU_ITEMS : MENU_ITEMS.filter(i => i.cat === filter);
  grid.innerHTML = '';

  items.forEach((item, i) => {
    const card = document.createElement('div');
    const badge = formatBadge(item.badge);
    card.className = 'menu-card reveal';
    card.style.transitionDelay = Math.min(i * 50, 300) + 'ms';
    card.innerHTML = `
      <div class="menu-card-img-wrap">
        <img class="menu-card-img" src="${item.img}" alt="${item.name}" loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80'">
        <div class="menu-card-img-overlay"></div>
        ${badge ? `<div class="menu-card-badge ${badge === 'Veg' ? 'veg' : ''}">${badge}</div>` : ''}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-cat">${item.catLabel}</div>
        <div class="menu-card-name">${currentLang === 'ne' ? item.nepali : item.name}</div>
        <div class="menu-card-desc">${currentLang === 'ne' ? item.descNe : item.desc}</div>
        <div class="menu-card-footer">
          <div class="menu-card-price">${item.price}</div>
          <div class="menu-card-btn">+</div>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openModal(item));
    grid.appendChild(card);

    // Trigger reveal
    requestAnimationFrame(() => setTimeout(() => card.classList.add('in-view'), 10 + i * 40));
  });
}

// ── MODAL ──
const modalBackdrop = document.getElementById('modalBackdrop');
const modalImg      = document.getElementById('modalImg');
const modalCat      = document.getElementById('modalCat');
const modalName     = document.getElementById('modalName');
const modalDesc     = document.getElementById('modalDesc');
const modalPrice    = document.getElementById('modalPrice');
const modalWaBtn    = document.getElementById('modalWaBtn');

function openModal(item) {
  if (!item) {
    showToast('Sorry, this menu item is not available right now.');
    return;
  }
  modalImg.src    = item.img;
  modalImg.alt    = item.name;
  modalCat.textContent  = item.catLabel;
  modalName.textContent = currentLang === 'ne' ? item.nepali : item.name;
  modalDesc.textContent = currentLang === 'ne' ? item.descNe  : item.desc;
  modalPrice.textContent = item.price;
  const waMsg = encodeURIComponent(`Hello Food Bliss! I'd like to order: ${item.name} (${item.price})`);
  modalWaBtn.href = `https://wa.me/9779745612606?text=${waMsg}`;
  modalWaBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> ${t('modal_order')}`;
  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

if (modalBackdrop) {
  modalBackdrop.addEventListener('click', e => {
    if (e.target === modalBackdrop) closeModal();
  });
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── LANGUAGE TOGGLE ──
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// ── GALLERY LIGHTBOX ──
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const img  = item.querySelector('img');
    const cap  = item.querySelector('.gallery-caption');
    if (img) showToast('📸 ' + (cap ? cap.textContent : 'Beautiful!'));
  });
});

// ── BACK TO TOP ──
const backTop = document.querySelector('.back-top');
if (backTop) {
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── TOAST ──
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// Public cafe chatbot. It reads current website content at answer time and
// shares only public information already present on this page or in data.js.
function getCleanText(selector, fallback = '') {
  const el = document.querySelector(selector);
  return el ? el.textContent.replace(/\s+/g, ' ').trim() : fallback;
}

function getLiveCafeInfo() {
  const phoneLinks = [...document.querySelectorAll('a[href^="tel:"]')]
    .map(link => link.textContent.replace(/\D/g, ''))
    .filter(Boolean);
  const whatsappLink = document.querySelector('a[href*="wa.me"]');
  const hourRows = [...document.querySelectorAll('.hours-table tr')]
    .map(row => [...row.querySelectorAll('td')].map(cell => cell.textContent.replace(/\s+/g, ' ').trim()).join(': '))
    .filter(Boolean);
  const menuItems = Array.isArray(MENU_ITEMS) ? MENU_ITEMS : [];

  return {
    name: `${getCleanText('.nav-logo-title', 'Food Bliss')} ${getCleanText('.nav-logo-sub', 'Cafe & Restaurant')}`.trim(),
    tagline: getCleanText('.hero-tagline', 'Where every bite is pure bliss'),
    address: getCleanText('[data-i18n="contact_addr_val"]', getCleanText('.hero-location', 'Imadole, Lalitpur')),
    phones: [...new Set(phoneLinks)],
    whatsapp: whatsappLink ? whatsappLink.href : '',
    hours: hourRows.length ? hourRows.join('. ') : 'Opening hours are shown in the Contact section.',
    story: [getCleanText('[data-i18n="about_p1"]'), getCleanText('[data-i18n="about_p2"]')].filter(Boolean).join(' '),
    bestSellers: [...document.querySelectorAll('.special-card-name')]
      .map(el => el.textContent.replace(/\s+/g, ' ').trim())
      .filter(Boolean),
    menuItems
  };
}

function normalizeChatText(text) {
  return (text || '').toLowerCase().replace(/[^a-z0-9\s:]/g, ' ').replace(/\s+/g, ' ').trim();
}

function findMenuMatches(query) {
  const menuItems = getLiveCafeInfo().menuItems;
  if (!menuItems.length) return [];
  const normalized = normalizeChatText(query);
  const words = normalized.split(' ').filter(word => word.length > 2);

  return menuItems
    .map(item => {
      const haystack = normalizeChatText(`${item.name} ${item.catLabel} ${item.desc} ${item.badge || ''}`);
      const exactName = haystack.includes(normalized) ? 6 : 0;
      const score = words.reduce((sum, word) => sum + (haystack.includes(word) ? 1 : 0), exactName);
      return { item, score };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(result => result.item);
}

function formatMenuAnswer(items, intro) {
  if (!items.length) {
    return currentLang === 'ne'
      ? 'हालको वेबसाइट डाटामा मिल्ने सार्वजनिक मेनु आइटम भेटिएन। मेनु, मूल्य, समय, ठेगाना, सम्पर्क वा अर्डरबारे सोध्नुहोस्।'
      : 'I could not find a matching public menu item in the current website data. Try asking about menu, prices, hours, location, contact, or ordering.';
  }
  return `${intro}\n${items.map(item => `- ${item.name}: ${item.price}. ${item.desc}`).join('\n')}`;
}

function chatbotAnswer(question) {
  const q = normalizeChatText(question);
  const liveInfo = getLiveCafeInfo();
  const privateWords = ['owner', 'profit', 'revenue', 'password', 'admin', 'login', 'database', 'private', 'salary', 'staff number', 'supplier', 'secret'];
  const isNepali = currentLang === 'ne';

  if (!q) return isNepali ? 'Food Bliss को मेनु, मूल्य, खुल्ने समय, स्थान वा अर्डरबारे सोध्नुहोस्।' : 'Please ask me about Food Bliss menu, prices, opening hours, location, or ordering.';
  if (privateWords.some(word => q.includes(word))) {
    return isNepali ? 'म Food Bliss वेबसाइटमा देखिएको सार्वजनिक जानकारी मात्र दिन सक्छु।' : 'I can only share public information from this Food Bliss website, such as menu items, prices, location, opening hours, phone numbers, and WhatsApp ordering.';
  }
  if (q.includes('hour') || q.includes('open') || q.includes('close') || q.includes('time')) {
    return isNepali ? `Food Bliss खुल्ने समय:\n${liveInfo.hours}` : `Food Bliss opening hours are:\n${liveInfo.hours}`;
  }
  if (q.includes('where') || q.includes('location') || q.includes('address') || q.includes('map')) {
    return isNepali ? `${liveInfo.name} को ठेगाना ${liveInfo.address} हो। दिशा हेर्न Contact section को Google Maps बटन प्रयोग गर्नुहोस्।` : `${liveInfo.name} is located at ${liveInfo.address}. You can use the Google Maps button in the Contact section for directions.`;
  }
  if (q.includes('phone') || q.includes('call') || q.includes('contact') || q.includes('number')) {
    if (isNepali) {
      return liveInfo.phones.length
        ? `Food Bliss मा ${liveInfo.phones.join(' वा ')} मा कल गर्न सक्नुहुन्छ।`
        : 'सार्वजनिक सम्पर्क नम्बर Contact section मा देखाइएको छ।';
    }
    return liveInfo.phones.length
      ? `You can call Food Bliss at ${liveInfo.phones.join(' or ')}.`
      : 'The public contact numbers are shown in the Contact section.';
  }
  if (q.includes('whatsapp') || q.includes('order') || q.includes('delivery')) {
    const waNumber = (liveInfo.phones && liveInfo.phones[0]) ? liveInfo.phones[0] : '9745612606';
    return isNepali
      ? `WhatsApp मार्फत अर्डर गर्न सक्नुहुन्छ — ${waNumber}। Delivery बारे cafe सँग सिधै confirm गर्नुहोस्।`
      : `You can order through WhatsApp at ${waNumber}, or tap any Order button on the website. For delivery details, please confirm directly with the cafe.`;
  }
  if (q.includes('about') || q.includes('story') || q.includes('cafe') || q.includes('restaurant')) {
    return `${liveInfo.name}: ${liveInfo.tagline}. ${liveInfo.story}`;
  }
  if (q.includes('best') || q.includes('special') || q.includes('popular') || q.includes('recommend')) {
    const bestSellerNames = liveInfo.bestSellers.map(name => normalizeChatText(name));
    const matches = liveInfo.menuItems.filter(item => bestSellerNames.some(name => normalizeChatText(item.name).includes(name) || name.includes(normalizeChatText(item.name))));
    return formatMenuAnswer(matches, isNepali ? 'यस वेबसाइटमा लोकप्रिय परिकारहरू:' : 'Popular picks on this website include:');
  }
  if (q.includes('veg') || q.includes('vegetarian')) {
    const vegItems = liveInfo.menuItems.filter(item => normalizeChatText(`${item.name} ${item.catLabel} ${item.badge || ''}`).includes('veg')).slice(0, 6);
    return formatMenuAnswer(vegItems, isNepali ? 'मेनुमा देखिएका vegetarian options:' : 'Vegetarian options shown on the menu include:');
  }
  if (q.includes('menu') || q.includes('price') || q.includes('rs') || q.includes('food') || q.includes('drink')) {
    const matches = findMenuMatches(q);
    if (matches.length) return formatMenuAnswer(matches, isNepali ? 'सार्वजनिक मेनुमा मैले भेटेको:' : 'Here is what I found on the public menu:');
    return isNepali ? `वेबसाइटमा हाल ${liveInfo.menuItems.length} वटा सार्वजनिक मेनु आइटम छन्।` : `The website currently lists ${liveInfo.menuItems.length} public menu items. Try asking for an item name like "Buff MO:MO" or "Mango Lassi".`;
  }

  const matches = findMenuMatches(q);
  if (matches.length) return formatMenuAnswer(matches, isNepali ? 'सम्बन्धित मेनु आइटमहरू:' : 'I found these related menu items:');

  return isNepali ? 'म Food Bliss वेबसाइटको सार्वजनिक जानकारी मात्र प्रयोग गरेर जवाफ दिन सक्छु।' : 'I can answer using public Food Bliss website information only. Ask me about menu items, prices, best sellers, hours, location, contact numbers, or WhatsApp ordering.';
}

function addChatMessage(message, sender) {
  const messages = document.getElementById('chatbotMessages');
  if (!messages) return;
  const bubble = document.createElement('div');
  bubble.className = `chatbot-message ${sender}`;
  bubble.textContent = message;
  messages.appendChild(bubble);
  messages.scrollTop = messages.scrollHeight;
}

function submitChatQuestion(question) {
  addChatMessage(question, 'user');
  setTimeout(() => addChatMessage(chatbotAnswer(question), 'bot'), 250);
}

function initChatbot() {
  const widget = document.getElementById('chatbotWidget');
  const toggle = document.getElementById('chatbotToggle');
  const close = document.getElementById('chatbotClose');
  const panel = document.getElementById('chatbotPanel');
  const form = document.getElementById('chatbotForm');
  const input = document.getElementById('chatbotInput');
  if (!widget || !toggle || !panel || !form || !input) return;

  const setOpen = isOpen => {
    widget.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    panel.setAttribute('aria-hidden', String(!isOpen));
    if (isOpen) input.focus();
  };

  toggle.addEventListener('click', () => setOpen(!widget.classList.contains('open')));
  if (close) close.addEventListener('click', () => setOpen(false));
  form.addEventListener('submit', e => {
    e.preventDefault();
    const question = input.value.trim();
    if (!question) return;
    input.value = '';
    submitChatQuestion(question);
  });
  document.querySelectorAll('[data-chat-question]').forEach(btn => {
    btn.addEventListener('click', () => submitChatQuestion(btn.dataset.chatQuestion));
  });

  addChatMessage(currentLang === 'ne'
    ? 'नमस्ते! म Food Bliss वेबसाइटको हालको सार्वजनिक डाटा पढेर जवाफ दिन्छु। मेनु, मूल्य, समय, स्थान, सम्पर्क र WhatsApp अर्डरबारे सोध्नुहोस्।'
    : 'Hi! I read the current public Food Bliss website data in realtime. Ask me about menu, prices, hours, location, contacts, and WhatsApp ordering.', 'bot');
}

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── PARALLAX HERO ──
window.addEventListener('scroll', () => {
  const heroBg = document.querySelector('.hero-bg-image');
  if (heroBg && window.scrollY < window.innerHeight) {
    heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  }
});

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  renderMenuFilters();
  renderMenuItems('all');
  setLanguage('en');
  initChatbot();
  initWaTextLinks();
});

function initWaTextLinks() {
  document.querySelectorAll('a[href*="wa.me/9779745612606"]').forEach(a => {
    const txt = a.getAttribute('data-wa-text');
    if (!txt) return;
    a.addEventListener('click', e => {
      e.preventDefault();
      window.open(`https://wa.me/9779745612606?text=${txt}`, '_blank');
    });
  });
}

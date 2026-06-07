// --- Hash-Based View Router ---
const navLinks = {
  'home': document.getElementById('link-home'),
  'updates': document.getElementById('link-updates'),
  'giftcodes': document.getElementById('link-giftcodes'),
  'privacy': document.getElementById('link-privacy')
};

const views = {
  'home': document.getElementById('view-home'),
  'updates': document.getElementById('view-updates'),
  'giftcodes': document.getElementById('view-giftcodes'),
  'privacy': document.getElementById('view-privacy')
};

function routePage() {
  // Get current hash, default to 'home'
  let hash = window.location.hash.substring(1);

  // Handle privacy subsections mapping to main privacy view
  if (!hash) hash = 'home';

  let targetView = hash;
  const subPrivacyHashes = ['commitment', 'collection', 'appstore', 'children', 'purchases', 'control', 'changes', 'contact'];
  if (subPrivacyHashes.includes(hash)) {
    targetView = 'privacy';
  }

  // Hide all views and remove active class from all links
  Object.keys(views).forEach(key => {
    views[key].classList.remove('active');
  });
  Object.keys(navLinks).forEach(key => {
    navLinks[key].classList.remove('active');
  });

  // Activate current view and link
  if (views[targetView]) {
    views[targetView].classList.add('active');
    if (navLinks[targetView]) {
      navLinks[targetView].classList.add('active');
    }
  } else {
    // Fallback to home
    views['home'].classList.add('active');
    navLinks['home'].classList.add('active');
  }

  // Smooth scroll to element if hash points to a specific privacy subsection
  if (subPrivacyHashes.includes(hash)) {
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  } else {
    window.scrollTo(0, 0);
  }
}

window.addEventListener('hashchange', routePage);
window.addEventListener('load', routePage);


// --- Hamburger Menu Trigger ---
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const menuLinks = document.querySelectorAll('.nav-link');

hamburgerBtn.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  hamburgerBtn.classList.toggle('open');
  hamburgerBtn.setAttribute('aria-expanded', isOpen);
});

// Close menu when clicking a nav link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  });
});

// Close menu when clicking outside of it
document.addEventListener('click', (e) => {
  if (!hamburgerBtn.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }
});


// --- Theme Switcher ---
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = themeToggle.querySelector('.theme-label');
const themeIcon = themeToggle.querySelector('.theme-icon');

let currentTheme = localStorage.getItem('cookie-king-theme') || 'dark';
document.body.setAttribute('data-theme', currentTheme === 'warm' ? 'warm' : 'dark');
updateThemeUI();

themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'warm' : 'dark';
  document.body.setAttribute('data-theme', currentTheme);
  localStorage.setItem('cookie-king-theme', currentTheme);
  updateThemeUI();

  // Close mobile menu
  navMenu.classList.remove('open');
  hamburgerBtn.classList.remove('open');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
});

function updateThemeUI() {
  if (currentTheme === 'warm') {
    themeLabel.textContent = 'Cocoa Theme';
    themeIcon.textContent = '🌙';
  } else {
    themeLabel.textContent = 'Warm Theme';
    themeIcon.textContent = '☀';
  }
}


// --- Active Sidebar Section Highlighting (Privacy Policy View) ---
const sections = document.querySelectorAll('.content-card');
const sideLinks = document.querySelectorAll('.toc-link');

const observerOptions = {
  root: null,
  rootMargin: '-20% 0px -60% 0px',
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  // Only run calculations if privacy policy view is active to optimize performance
  if (!views['privacy'].classList.contains('active')) return;

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      sideLinks.forEach(link => {
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));


// --- Interactive Cookie Clicker State ---
const cookieBtn = document.getElementById('cookie-btn');
const cookieCountSpan = document.getElementById('cookie-count');
const storageSizeSpan = document.getElementById('storage-size');
const icloudStatusSpan = document.getElementById('icloud-status');
const syncToggleBtn = document.getElementById('sync-toggle');
const resetBtn = document.getElementById('reset-btn');
const wipeOverlay = document.getElementById('wipe-overlay');
const heroSpinningCookie = document.getElementById('hero-spinning-cookie');

// Load initial cookies count from localStorage
let cookiesCount = parseInt(localStorage.getItem('cookie-king-cookies-sim')) || 0;
let icloudSync = localStorage.getItem('cookie-king-icloud-sim') !== 'disabled';
let prestigeBonusMultiplier = parseInt(localStorage.getItem('cookie-king-prestige-sim')) || 1;

updateSimulatorUI();

// Setup clicks for both the privacy cookie and the large landing hero cookie!
function handleCookieClick(e, element) {
  cookiesCount += 1 * prestigeBonusMultiplier;
  localStorage.setItem('cookie-king-cookies-sim', cookiesCount);
  updateSimulatorUI();

  const rotateDeg = (Math.random() - 0.5) * 20;
  element.style.transform = `scale(0.92) rotate(${rotateDeg}deg)`;
  setTimeout(() => {
    element.style.transform = '';
  }, 100);
}

cookieBtn.addEventListener('click', (e) => handleCookieClick(e, cookieBtn));
heroSpinningCookie.addEventListener('click', (e) => handleCookieClick(e, heroSpinningCookie));

syncToggleBtn.addEventListener('click', () => {
  icloudSync = !icloudSync;
  localStorage.setItem('cookie-king-icloud-sim', icloudSync ? 'enabled' : 'disabled');
  updateSimulatorUI();
});

resetBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to perform a FACTORY RESET? This will erase all simulator progress.')) {
    wipeOverlay.classList.add('active');

    setTimeout(() => {
      cookiesCount = 0;
      prestigeBonusMultiplier = 1;
      localStorage.removeItem('cookie-king-cookies-sim');
      localStorage.removeItem('cookie-king-icloud-sim');
      localStorage.removeItem('cookie-king-prestige-sim');
      icloudSync = true;
      updateSimulatorUI();
    }, 1200);

    setTimeout(() => {
      wipeOverlay.classList.remove('active');
    }, 2000);
  }
});

function updateSimulatorUI() {
  cookieCountSpan.textContent = cookiesCount.toLocaleString();

  const baseStateString = JSON.stringify({
    cookies: cookiesCount,
    icloud: icloudSync,
    prestigeLevel: prestigeBonusMultiplier - 1,
    bakeryName: "Cookie Kingdom",
    cursors: Math.floor(cookiesCount / 15),
    grandmas: Math.floor(cookiesCount / 100),
    factories: Math.floor(cookiesCount / 1100)
  });
  const byteSize = new Blob([baseStateString]).size;
  storageSizeSpan.textContent = `${byteSize} bytes`;

  if (icloudSync) {
    icloudStatusSpan.textContent = 'Enabled (Active)';
    icloudStatusSpan.style.color = '#10b981';
    syncToggleBtn.textContent = 'Disable iCloud Sync';
  } else {
    icloudStatusSpan.textContent = 'Disabled (Local Only)';
    icloudStatusSpan.style.color = 'var(--text-muted)';
    syncToggleBtn.textContent = 'Enable iCloud Sync';
  }
}


// --- Interactive Promo Gift Code Validator ---
const giftInput = document.getElementById('gift-code-input');
const claimBtn = document.getElementById('claim-btn');
const claimMsg = document.getElementById('claim-msg');

claimBtn.addEventListener('click', () => {
  const enteredCode = giftInput.value.trim().toUpperCase();

  if (!enteredCode) {
    showRedeemMessage('Please enter a promo code!', 'error');
    return;
  }

  // Check against active code database
  if (enteredCode === 'FREECOOKIES') {
    cookiesCount += 10000;
    saveStateAndReward('Success! Code accepted. +10,000 cookies will be added to your account!');
  } else if (enteredCode === 'GOLDENFRENZY') {
    cookiesCount += 100000;
    saveStateAndReward('Success! Code accepted. +100,000 cookies will be added to your account!');
  } else if (enteredCode === 'KINGPRESTIGE') {
    prestigeBonusMultiplier += 5;
    localStorage.setItem('cookie-king-prestige-sim', prestigeBonusMultiplier);
    saveStateAndReward('Success! Code accepted. Prestige multiplier boost will be added to your account!');
  } else if (enteredCode === 'CHOCOCHIP') {
    showRedeemMessage('Error: Code CHOCOCHIP expired on May 1st, 2026.', 'error');
  } else {
    showRedeemMessage('Invalid promo code. Check spelling and try again.', 'error');
  }
});

function saveStateAndReward(successText) {
  localStorage.setItem('cookie-king-cookies-sim', cookiesCount);
  updateSimulatorUI();
  showRedeemMessage(successText, 'success');
  giftInput.value = '';
}

function showRedeemMessage(text, type) {
  claimMsg.className = 'redeem-result-msg'; // Clear old classes
  claimMsg.textContent = text;

  if (type === 'success') {
    claimMsg.classList.add('msg-success');
  } else {
    claimMsg.classList.add('msg-error');
  }
}

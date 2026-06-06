// Header scroll shadow
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
});

// Close mobile nav on link click
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Portfolio iframes scale to fit their containers
function scalePortfolioIframes() {
  document.querySelectorAll('.pf-iframe-wrap').forEach(function(wrap) {
    const iframe = wrap.querySelector('.pf-iframe');
    if (!iframe) return;
    const scale = wrap.offsetWidth / 1280;
    iframe.style.transform = 'scale(' + scale + ')';
    iframe.style.height = Math.ceil(260 / scale) + 'px';
  });
}
scalePortfolioIframes();
window.addEventListener('resize', scalePortfolioIframes);

// Smooth scroll with fixed header offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const id = this.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - header.offsetHeight - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

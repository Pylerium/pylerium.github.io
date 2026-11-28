// Website builder motion: reveals sections as they scroll into view (with a gentle stagger), the 3D tilt on hover, and
// the spotlight that follows the cursor across cards. Loaded only when the design uses them; the page stays fully
// usable without it (the page head un-hides everything if this script doesn't start).
window.__moReady = true;
const body = document.body, html = document.documentElement;
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
const TARGETS = '.sec-head, .grid > *, .b-wide > *, .b-feats > *, .b-pricing > *, .rv-grid > *, .b-team > *, .b-steps > li, .b-timeline > li, .b-faq > details, .b-stats > *, .principles > *, .vgrid > *, .feed > *, .b-gallery > *, .embeds > *, .comm > *, .perk-grid > *, .bn, .b-media > *, .b-cta, .b-count, .b-signup, .b-contact, .b-quote, .b-logos, .b-text, .b-video, .spot, .support, .page-hero > *, .filters';
const CARDS = '.pcard, .pr, .bf, .pp, .rv, .tm, .b-steps li, .embed-block, .comm-stat, .wall';

// ---------- entrance ----------
const reveal = el => {
  if (el.classList.contains('rv-in')) return;
  // siblings that arrive together are staggered
  const sibs = el.parentElement ? [...el.parentElement.children].filter(c => c.matches(TARGETS) && !c.classList.contains('rv-in')) : [];
  const i = Math.max(0, sibs.indexOf(el));
  el.style.setProperty('--rd', `${Math.min(i, 6) * 70}ms`);
  el.classList.add('rv-go');
  void el.offsetWidth; // apply the transition first, so the change below animates (no rAF: it pauses in background tabs)
  el.classList.add('rv-in');
  setTimeout(() => { el.classList.remove('rv-go'); el.style.removeProperty('--rd'); }, 1400 + i * 70); // hand transitions back to hover effects
};
let io = null;
if (/\bmo-/.test(body.className) && !calm && 'IntersectionObserver' in window) {
  io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { io.unobserve(e.target); reveal(e.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  const watch = root => { for (const el of (root.matches?.(TARGETS) ? [root] : [])) io.observe(el); root.querySelectorAll?.(TARGETS).forEach(el => io.observe(el)); };
  watch(document);
  // sections added later (the app dialog, live preview updates) are watched too
  new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(n => n.nodeType === 1 && watch(n)))).observe(body, { childList: true, subtree: true });
} else html.classList.remove('mo-js');

// ---------- 3D tilt and spotlight ----------
const tilt = body.classList.contains('hv-tilt') && !calm, spot = body.classList.contains('cur-spot') && matchMedia('(hover: hover)').matches;
if (tilt || spot) {
  let raf = 0;
  document.addEventListener('pointermove', e => {
    const card = e.target.closest?.(CARDS); if (!card) return;
    if (spot && !card.querySelector(':scope > .spot-l')) { const l = document.createElement('i'); l.className = 'spot-l'; l.setAttribute('aria-hidden', 'true'); card.append(l); }
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      if (spot) { card.style.setProperty('--mx', `${x * 100}%`); card.style.setProperty('--my', `${y * 100}%`); }
      if (tilt) { card.style.setProperty('--rx', `${(0.5 - y) * 7}deg`); card.style.setProperty('--ry', `${(x - 0.5) * 9}deg`); }
    });
  }, { passive: true });
  if (tilt) document.addEventListener('pointerout', e => { const card = e.target.closest?.(CARDS); if (card && !card.contains(e.relatedTarget)) { card.style.removeProperty('--rx'); card.style.removeProperty('--ry'); } }, { passive: true });
}

// Website builder blocks: countdowns, numbers that count up, the gallery lightbox and email sign-up forms.
// Loaded only by pages that contain one of these blocks. The blocks themselves are pre-rendered by the builder.
import { icon } from './render.js?v=09517f8f31';

const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches || document.body.classList.contains('anim-none');

// ---------- countdown ----------
for (const el of $$('.b-count[data-until]')) {
  const end = new Date(el.dataset.until).getTime();
  const cd = el.querySelector('.cd'), done = el.querySelector('.cd-done');
  if (!end || isNaN(end)) { cd.hidden = true; continue; }
  const set = (u, v) => { const b = el.querySelector(`[data-u="${u}"]`); if (b) b.textContent = String(v).padStart(2, '0'); };
  const tick = () => {
    const left = Math.max(0, end - Date.now());
    if (!left) { cd.hidden = true; if (done.textContent) done.hidden = false; clearInterval(h); return; }
    const s = Math.floor(left / 1000);
    set('d', Math.floor(s / 86400)); set('h', Math.floor(s / 3600) % 24); set('m', Math.floor(s / 60) % 60); set('s', s % 60);
  };
  const h = setInterval(tick, 1000); tick();
}

// ---------- numbers count up the first time they're seen ----------
const nums = $$('[data-count]').map(el => {
  const m = String(el.dataset.count).match(/^(\D*)([\d.,]+)(.*)$/);
  return m ? { el, pre: m[1], n: parseFloat(m[2].replace(/,/g, '')), dec: (m[2].split('.')[1] || '').length, comma: m[2].includes(','), post: m[3] } : null;
}).filter(Boolean);
if (nums.length && !calm && 'IntersectionObserver' in window) {
  const fmt = (x, o) => { const v = x.toFixed(o.dec); return o.comma ? Number(v).toLocaleString('en', { minimumFractionDigits: o.dec, maximumFractionDigits: o.dec }) : v; };
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; io.unobserve(e.target);
    const o = nums.find(x => x.el === e.target), t0 = performance.now(), dur = 1300;
    const step = now => { const p = Math.min(1, (now - t0) / dur), k = 1 - (1 - p) ** 3; o.el.textContent = o.pre + fmt(o.n * k, o) + o.post; if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }), { threshold: 0.4 });
  nums.forEach(o => { o.el.textContent = o.pre + fmt(0, o) + o.post; io.observe(o.el); });
}

// ---------- gallery lightbox ----------
let box;
document.addEventListener('click', e => {
  const b = e.target.closest('.gl-open'); if (!b) return;
  if (!box) {
    box = document.createElement('dialog'); box.className = 'lightbox';
    box.innerHTML = `<button class="dlg-close" type="button" aria-label="Close">${icon('x')}</button><img alt="">`;
    box.addEventListener('click', ev => { if (ev.target === box || ev.target.closest('.dlg-close')) box.close(); });
    document.body.append(box);
  }
  box.querySelector('img').src = b.dataset.full; box.querySelector('img').alt = b.querySelector('img')?.alt || '';
  box.showModal();
});

// ---------- sign-up forms with no address yet ----------
for (const f of $$('.su-form[data-noaction]')) f.addEventListener('submit', e => { e.preventDefault(); const t = document.getElementById('toast'); if (t) { t.textContent = 'Sign-ups open soon.'; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2400); } });

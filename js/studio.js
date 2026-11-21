// Pylerium Studio showcase: filters, search, deep-linked detail dialog. Cards are pre-rendered by the hub's builder.
import { detailHTML, icon } from './render.js';

const apps = JSON.parse(document.getElementById('apps-data').textContent);
const byId = new Map(apps.map(a => [a.id, a]));
const MEDIA = 'assets/apps/';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

// Nav
const nav = $('.nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 8), { passive: true });
$('.menu-btn')?.addEventListener('click', () => nav.classList.toggle('open'));
$$('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Filters + search
let cat = 'all', q = '';
const cards = $$('#all-apps .pcard');
function apply() {
  let shown = 0;
  for (const c of cards) {
    const a = byId.get(c.dataset.id);
    const hay = [a.name, a.tagline, a.description, a.platform, ...(a.techStack || []), ...(a.features || [])].join(' ').toLowerCase();
    const ok = (cat === 'all' || a.category === cat) && (!q || hay.includes(q));
    c.classList.toggle('hide', !ok);
    if (ok) shown++;
  }
  $('#empty').classList.toggle('show', !shown);
}
$$('.tab').forEach(t => t.addEventListener('click', () => {
  $$('.tab').forEach(x => x.classList.toggle('on', x === t));
  cat = t.dataset.cat; apply();
}));
$('#q').addEventListener('input', e => { q = e.target.value.trim().toLowerCase(); apply(); });
$('#clear')?.addEventListener('click', () => { q = ''; $('#q').value = ''; $$('.tab')[0].click(); });

// Detail dialog (deep link: #app/<id>)
const dlg = $('#dlg'), body = $('#dlg-body');
let lastFocus = null;
function openApp(id, push) {
  const a = byId.get(id);
  if (!a) return;
  lastFocus = document.activeElement;
  body.innerHTML = detailHTML(a, { mediaBase: MEDIA });
  body.scrollTop = 0;
  document.title = `${a.name} · Pylerium Studio`;
  if (!dlg.open) dlg.showModal();
  if (push && location.hash !== '#app/' + id) history.pushState(null, '', '#app/' + encodeURIComponent(id));
}
function closeApp(fromHash) {
  if (dlg.open) dlg.close();
  document.title = BASE_TITLE;
  if (!fromHash && location.hash.startsWith('#app/')) history.pushState(null, '', location.pathname + location.search);
  lastFocus?.focus?.({ preventScroll: true });
}
const BASE_TITLE = document.title;
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#app/"]');
  if (a) { e.preventDefault(); openApp(decodeURIComponent(a.getAttribute('href').slice(5)), true); }
});
$('.dlg-close').addEventListener('click', () => closeApp());
dlg.addEventListener('click', e => { if (e.target === dlg) closeApp(); });
dlg.addEventListener('cancel', e => { e.preventDefault(); closeApp(); });
body.addEventListener('click', async e => {
  const t = e.target.closest('.d-thumbs button');
  if (t) {
    $$('.d-thumbs button', body).forEach(b => b.classList.toggle('on', b === t));
    $('.d-stage img', body).src = t.dataset.src;
  }
  const c = e.target.closest('.copy');
  if (c) {
    try { await navigator.clipboard.writeText(c.dataset.copy); c.innerHTML = icon('check') + '<span>Copied</span>'; setTimeout(() => (c.innerHTML = icon('copy') + '<span>Copy</span>'), 1600); } catch {}
  }
});
function route() {
  const m = location.hash.match(/^#app\/(.+)$/);
  if (m) openApp(decodeURIComponent(m[1]), false); else if (dlg.open) closeApp(true);
}
addEventListener('popstate', route);
route();

// Reveal on scroll
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -40px 0px' });
$$('.reveal').forEach(el => io.observe(el));

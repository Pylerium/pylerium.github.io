// Ratings and reviews: stars on app cards, a ratings panel on app pages and in the app dialog, the "rate this app" form,
// and visitor reviews inside Reviews blocks. Totals come from the studio's own rating service (if it has one) plus the
// reviews the studio added by hand in Pylerium Manager. Nothing here needs an account.
import { icon, esc } from './render.js?v=09517f8f31';

const D = JSON.parse(document.getElementById('site-data').textContent);
const RT = D.ratings || {};
const API = RT.api || '';
const NAMES = new Map((D.apps || []).map(a => [a.id, a.name]));
const OFF = new Set(RT.off || []);
const MANUAL = RT.manual || {};
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const ratable = id => NAMES.has(id) && !OFF.has(id);

const starRow = (n, cls = 'stars') => `<span class="${cls}" role="img" aria-label="${(+n).toFixed(1)} out of 5 stars">${[1, 2, 3, 4, 5].map(i => `<i class="${i <= Math.round(n) ? 'on' : ''}">${icon('starfill')}</i>`).join('')}</span>`;
const fmt = n => (Math.round(n * 10) / 10).toFixed(1);
const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;
const when = iso => { const d = new Date(iso); return isNaN(d) ? '' : d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }); };

// ---------- totals: the service's, plus the studio's own picks ----------
const CACHE = 'rt.sums.v1', TTL = 5 * 60 * 1000;
let sums = {};
try { const c = JSON.parse(localStorage.getItem(CACHE) || 'null'); if (c && Date.now() - c.at < TTL * 6) sums = c.apps || {}; } catch {}
async function loadSums(force) {
  if (!API) return sums;
  try {
    const c = JSON.parse(localStorage.getItem(CACHE) || 'null');
    if (!force && c && Date.now() - c.at < TTL) return (sums = c.apps || {});
    const r = await fetch(API + '/ratings', { cache: 'no-store' }); const j = await r.json();
    if (j.ok) { sums = j.apps || {}; localStorage.setItem(CACHE, JSON.stringify({ at: Date.now(), apps: sums })); }
  } catch {}
  return sums;
}
function combined(id) {
  const s = sums[id], dist = s?.dist ? [...s.dist] : [0, 0, 0, 0, 0];
  for (const m of MANUAL[id] || []) { const k = Math.round(+m.stars); if (k >= 1 && k <= 5) dist[k - 1]++; }
  const count = dist.reduce((a, b) => a + b, 0);
  return { count, dist, avg: count ? dist.reduce((a, n, i) => a + n * (i + 1), 0) / count : 0 };
}
function overall(ids) {
  const dist = [0, 0, 0, 0, 0];
  for (const id of ids) combined(id).dist.forEach((n, i) => { dist[i] += n; });
  const count = dist.reduce((a, b) => a + b, 0);
  return { count, dist, avg: count ? dist.reduce((a, n, i) => a + n * (i + 1), 0) / count : 0 };
}
function summaryHTML(t, label = '') {
  return `<div class="rs-big">${fmt(t.avg)}</div><div class="rs-meta">${starRow(t.avg, 'stars lg')}<span>${esc(label ? `${label} · ` : '')}${plural(t.count, 'rating')}</span></div>
    <div class="rs-bars">${[5, 4, 3, 2, 1].map(k => `<div class="rs-bar"><span>${k}★</span><i><b style="width:${t.count ? Math.round(t.dist[k - 1] / t.count * 100) : 0}%"></b></i><span>${t.dist[k - 1]}</span></div>`).join('')}</div>`;
}
const reviewHTML = (r, showApp) => `<figure class="rv">${starRow(r.stars)}${showApp && NAMES.get(r.app) ? `<span class="rv-app">${esc(NAMES.get(r.app))}</span>` : ''}<blockquote>${r.title ? `<b>${esc(r.title)}</b>` : ''}${esc(r.text)}</blockquote><figcaption><span class="rv-av">${esc((r.name || '?').trim().slice(0, 1).toUpperCase() || '?')}</span><span><b>${esc(r.name || 'Anonymous')}</b><small>${esc(r.role || when(r.at || r.date))}</small></span></figcaption></figure>`;
async function visitorReviews(app) {
  if (!API) return [];
  try { const r = await fetch(`${API}/reviews?app=${encodeURIComponent(app || '')}`, { cache: 'no-store' }); const j = await r.json(); return j.ok ? j.reviews || [] : []; } catch { return []; }
}

// ---------- stars on cards ----------
function paintCards() {
  if (RT.cards === false) return;
  for (const card of $$('.pcard[data-id]')) {
    const id = card.dataset.id; if (!ratable(id)) continue;
    const t = combined(id), foot = card.querySelector('.pcard-foot'); if (!foot) continue;
    let el = foot.querySelector('.pcard-rating');
    if (!t.count) { el?.remove(); continue; }
    if (!el) { el = document.createElement('span'); el.className = 'pcard-rating'; const sp = foot.querySelector('.sp'); if (sp) sp.after(el); else foot.append(el); }
    el.title = `${fmt(t.avg)} out of 5 from ${plural(t.count, 'rating')}`;
    el.innerHTML = `${icon('starfill')}${fmt(t.avg)}<small>(${t.count})</small>`;
  }
}

// ---------- the panel on app pages and in the dialog ----------
const mine = id => { try { return +localStorage.getItem('rt.mine.' + id) || 0; } catch { return 0; } };
function mountPanels(root = document) {
  if (RT.pages === false) return;
  for (const det of $$('.detail[data-detail]', root)) {
    const id = det.dataset.detail; if (!ratable(id) || det.querySelector('.rt-panel')) continue;
    const main = det.querySelector('.d-main') || det; const sec = document.createElement('section');
    sec.className = 'rt-panel'; sec.dataset.app = id; main.append(sec);
    sec._v = [];
    drawPanel(sec, id, []);
    visitorReviews(id).then(list => { sec._v = list; drawPanel(sec, id, list); });
  }
}
function drawPanel(sec, id, visitors) {
  const t = combined(id), list = [...(MANUAL[id] || []).map(m => ({ ...m, app: id })), ...visitors];
  const my = mine(id);
  sec.innerHTML = `<h4>${esc(RT.title || 'Ratings & reviews')}</h4>
    <div class="rt-top">${t.count ? `<div class="rt-score"><b>${fmt(t.avg)}</b><div>${starRow(t.avg, 'stars lg')}<span>${plural(t.count, 'rating')}</span></div></div>` : `<span class="rt-none">No ratings yet.${API ? ' Be the first.' : ''}</span>`}
      ${API ? `<div class="rt-ask"><span>${esc(my ? 'Your rating' : RT.ask || 'Rate this app')}</span><span class="rt-pick" role="radiogroup" aria-label="${esc(RT.ask || 'Rate this app')}">${[1, 2, 3, 4, 5].map(i => `<button type="button" role="radio" aria-checked="${i === my}" aria-label="${plural(i, 'star')}" data-star="${i}" class="${i <= my ? 'on' : ''}">${icon('starfill')}</button>`).join('')}</span></div>` : ''}</div>
    ${API && RT.text !== false ? `<form class="rt-form" hidden><input name="title" maxlength="100" placeholder="Headline (optional)"><textarea name="text" rows="3" maxlength="1500" placeholder="What did you think? (optional)"></textarea>
      <div class="rt-row"><input name="name" maxlength="60" placeholder="Your name (optional)" style="flex:1;min-width:160px"><input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true"><button type="submit">${icon('send')}Send rating</button></div>
      <div class="rt-row"><small>${RT.approval === false ? 'Your review shows straight away.' : 'Star ratings count straight away. Written reviews appear once they’ve been checked.'}</small></div></form>` : ''}
    <p class="rt-msg" hidden></p>
    ${list.length ? `<div class="rt-list">${list.slice(0, 6).map(r => reviewHTML(r)).join('')}</div>${list.length > 6 ? `<button type="button" class="btn-soft rt-more">Show all ${list.length} reviews</button>` : ''}` : ''}`;
  let pick = my;
  const btns = $$('[data-star]', sec), form = sec.querySelector('.rt-form'), msg = sec.querySelector('.rt-msg');
  const paint = n => btns.forEach(b => { b.classList.toggle('on', +b.dataset.star <= n); b.setAttribute('aria-checked', String(+b.dataset.star === pick)); });
  btns.forEach(b => {
    b.addEventListener('mouseenter', () => paint(+b.dataset.star));
    b.addEventListener('mouseleave', () => paint(pick));
    b.addEventListener('click', () => { pick = +b.dataset.star; paint(pick); if (form) { form.hidden = false; form.querySelector('textarea').focus({ preventScroll: true }); } else send({}); });
  });
  sec.querySelector('.rt-more')?.addEventListener('click', e => { sec.querySelector('.rt-list').innerHTML = list.map(r => reviewHTML(r)).join(''); e.target.remove(); });
  form?.addEventListener('submit', e => { e.preventDefault(); send(Object.fromEntries(new FormData(form))); });
  async function send(extra) {
    if (!pick) return;
    msg.hidden = false; msg.className = 'rt-msg'; msg.textContent = 'Sending…';
    try {
      const r = await fetch(API + '/rate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ app: id, stars: pick, ...extra }) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.ok) throw new Error(j.error || 'That didn’t go through. Please try again.');
      try { localStorage.setItem('rt.mine.' + id, String(pick)); } catch {}
      if (j.summary) sums[id] = j.summary;
      localStorage.removeItem(CACHE);
      await loadSums(true); paintCards(); paintSummaries();
      if (!j.pending) visitors = await visitorReviews(id); // a review that shows straight away appears in the list now
      sec._v = visitors;
      drawPanel(sec, id, visitors);
      const m = sec.querySelector('.rt-msg'); m.hidden = false;
      m.textContent = j.pending ? 'Thanks! Your stars count now, and your review will appear once it’s been checked.' : j.updated ? 'Thanks, your rating was updated.' : 'Thanks for rating!';
    } catch (err) { msg.className = 'rt-msg err'; msg.textContent = err.message; }
  }
}

// ---------- Reviews blocks ----------
function paintSummaries() {
  for (const b of $$('.b-reviews[data-summary="1"]')) {
    const app = b.dataset.app || '', ids = app ? [app] : [...NAMES.keys()].filter(ratable), t = app ? combined(app) : overall(ids), box = b.querySelector('.rv-sum');
    if (box && t.count) { box.innerHTML = summaryHTML(t, app ? NAMES.get(app) : ''); box.hidden = false; }
  }
}
async function fillBlocks() {
  for (const b of $$('.b-reviews[data-reviews]')) {
    const app = b.dataset.app || '', src = b.dataset.reviews;
    if (src === 'manual') continue;
    const grid = b.querySelector('.rv-grid'), list = (await visitorReviews(app)).filter(r => ratable(r.app)).slice(0, 12);
    if (src === 'visitors' && !list.length && !grid.children.length) { b.closest('section')?.setAttribute('hidden', ''); continue; }
    grid.insertAdjacentHTML('beforeend', list.map(r => reviewHTML(r, !app)).join(''));
  }
}

paintCards(); paintSummaries(); mountPanels(); fillBlocks();
loadSums().then(() => { paintCards(); paintSummaries(); $$('.rt-panel').forEach(sec => drawPanel(sec, sec.dataset.app, sec._v || [])); });
// the app dialog is filled when it opens
const dlgBody = document.getElementById('dlg-body');
if (dlgBody) new MutationObserver(() => mountPanels(dlgBody)).observe(dlgBody, { childList: true });

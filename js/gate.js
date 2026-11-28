// Email-to-download on the public site: a gated app's button opens this dialog; the download address only arrives after
// the email service accepts the email. Works on cards, in the app dialog and on app pages (…/#get opens it directly).
import { icon, esc, accentStyle } from './render.js?v=09517f8f31';

const D = JSON.parse(document.getElementById('site-data').textContent);
const G = D.gate;
const KEY = 'download.email';
let dlg = null, from = null;

const saved = () => { try { return localStorage.getItem(KEY) || ''; } catch { return ''; } };
function build() {
  dlg = document.createElement('dialog'); dlg.className = 'gate-dlg'; dlg.setAttribute('aria-labelledby', 'gate-title');
  document.body.append(dlg);
  dlg.addEventListener('click', e => { if (e.target === dlg || e.target.closest('[data-gate-close]')) dlg.close(); });
  dlg.addEventListener('close', () => { from?.focus?.({ preventScroll: true }); if (location.hash === '#get') history.replaceState(null, '', location.pathname + location.search); });
}
function open(id, trigger) {
  const app = D.apps.find(a => a.id === id); if (!app || !G?.api) return;
  if (!dlg) build();
  from = trigger; dlg.style.cssText = accentStyle(app);
  dlg.innerHTML = `<form class="gate" novalidate>
    <button type="button" class="gate-x" data-gate-close aria-label="Close">${icon('x')}</button>
    <span class="gate-ico" aria-hidden="true">${icon('download')}</span>
    <h2 id="gate-title">Get ${esc(app.name)}</h2>
    <p class="gate-sub">Enter your email and your download starts.</p>
    <label class="gate-fld"><span>Email</span><input type="email" name="email" autocomplete="email" inputmode="email" required maxlength="254" placeholder="you@example.com" value="${esc(saved())}" aria-describedby="gate-msg"></label>
    <input type="text" name="website" class="gate-trap" tabindex="-1" autocomplete="off" aria-hidden="true">
    ${G.updatesText ? `<label class="gate-check"><input type="checkbox" name="updates"><span>${esc(G.updatesText)}</span></label>` : ''}
    <button type="submit" class="btn-acc lg gate-go"><span>${esc(app.gateLabel || 'Download')}</span>${icon('arrow')}</button>
    <p class="gate-msg" id="gate-msg" role="status" aria-live="polite"></p>
    <p class="gate-note">${icon('lock')}<span>${esc(G.note || '')}</span></p></form>`;
  const form = dlg.querySelector('form'), msg = dlg.querySelector('.gate-msg'), button = dlg.querySelector('.gate-go'), input = form.elements.email;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const email = input.value.trim();
    const say = (t, bad) => { msg.textContent = t; msg.classList.toggle('bad', !!bad); input.setAttribute('aria-invalid', String(!!bad)); };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { say('Enter a valid email address.', true); return input.focus(); }
    button.disabled = true; say('Preparing your download…');
    const ac = new AbortController(), timer = setTimeout(() => ac.abort(), 15000);
    try {
      const r = await fetch(`${G.api}/unlock`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ app: id, email, updates: !!form.elements.updates?.checked, website: form.elements.website.value }), signal: ac.signal });
      const data = await r.json().catch(() => ({}));
      if (!r.ok || !data.url) throw new Error(data.error || 'The download service didn’t answer. Please try again.');
      try { localStorage.setItem(KEY, email); } catch { /* private browsing: nothing to remember */ }
      form.innerHTML = `<button type="button" class="gate-x" data-gate-close aria-label="Close">${icon('x')}</button><span class="gate-ico done" aria-hidden="true">${icon('check')}</span>
        <h2 id="gate-title">Your download is ready</h2><p class="gate-sub">It should start by itself. If it doesn’t, use the button. The link works for ${Number(data.minutes) || 30} minutes.</p>
        <a class="btn-acc lg gate-go" href="${esc(data.url)}" rel="noopener"><span>Download ${esc(app.name)}</span>${icon('download')}</a>`;
      form.querySelector('a').focus();
      location.assign(data.url);
    } catch (error) {
      button.disabled = false;
      say(error.name === 'AbortError' || error instanceof TypeError ? 'Couldn’t reach the download service. Check your connection and try again.' : error.message, true);
    } finally { clearTimeout(timer); }
  });
  if (!dlg.open) dlg.showModal();
  requestAnimationFrame(() => input.focus());
}
// capture phase: handled before the card's own links, including inside the app dialog
document.addEventListener('click', e => {
  const b = e.target.closest?.('[data-gate]'); if (!b) return;
  if (e.ctrlKey || e.metaKey || e.shiftKey || e.button) return;
  e.preventDefault(); e.stopPropagation(); open(b.dataset.gate, b);
}, true);
const fromHash = () => { if (location.hash !== '#get') return; const id = document.querySelector('.app-sheet [data-gate]')?.dataset.gate; if (id) open(id, null); };
addEventListener('hashchange', fromHash);
fromHash();

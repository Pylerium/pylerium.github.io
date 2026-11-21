// Pylerium Studio: shared catalog vocabulary and renderers.
// Used by the local hub (live preview), the site builder (static HTML) and the public site (detail dialog),
// so a card looks identical everywhere. Plain ES module, no dependencies.

export const ACCENTS = {
  studio:  { label: 'Studio Teal',   a1: '#2DD4BF', a2: '#38BDF8' },
  violet:  { label: 'Royal Violet',  a1: '#8B5CF6', a2: '#6366F1' },
  sky:     { label: 'Nebula Sky',    a1: '#38BDF8', a2: '#818CF8' },
  emerald: { label: 'Emerald',       a1: '#10B981', a2: '#2DD4BF' },
  amber:   { label: 'Solar Amber',   a1: '#F59E0B', a2: '#FB7185' },
  ember:   { label: 'Ember & Cyan',  a1: '#F97316', a2: '#22D3EE' },
  rose:    { label: 'Rose Quartz',   a1: '#FB7185', a2: '#A78BFA' }
};

export const CATEGORIES = [
  { id: 'desktop',   label: 'Desktop',            icon: 'monitor' },
  { id: 'extension', label: 'Browser extensions', icon: 'chrome' },
  { id: 'tv',        label: 'Android TV',         icon: 'tv' },
  { id: 'web',       label: 'Web',                icon: 'globe' },
  { id: 'devtools',  label: 'Developer tools',    icon: 'terminal' }
];

export const STATUS = {
  live: { label: 'Available',      short: 'Live' },
  beta: { label: 'Public beta',    short: 'Beta' },
  soon: { label: 'Coming soon',    short: 'Soon' },
  dev:  { label: 'In development', short: 'In dev' }
};

const P = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  terminal: '<path d="m4 17 6-6-6-6"/><path d="M12 19h8"/>',
  sparkles: '<path d="M12 3l1.9 5.8L20 10.7l-6.1 1.9L12 18.5l-1.9-5.9L4 10.7l6.1-1.9z"/><path d="M19 3v4M17 5h4M5 17v4M3 19h4"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  trash: '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  star: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
  package: '<path d="M16.5 9.4 7.5 4.2"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7 12 12l8.7-5"/><path d="M12 22V12"/>',
  code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  eyeoff: '<path d="M9.9 4.24A9 9 0 0 1 12 4c6.5 0 10 8 10 8a18 18 0 0 1-2.16 3.19M6.6 6.6A18 18 0 0 0 2 12s3.5 7 10 7a9.7 9.7 0 0 0 5.4-1.6"/><path d="m2 2 20 20"/><path d="M14.1 14.1a3 3 0 1 1-4.2-4.2"/>',
  tv: '<rect x="2" y="7" width="20" height="15" rx="2"/><path d="m17 2-5 5-5-5"/>',
  chrome: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M21.17 8H12M3.95 6.06 8.54 14M10.88 21.94 15.46 14"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  up: '<path d="m18 15-6-6-6 6"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  folder: '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
  play: '<circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4z"/>',
  home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  video: '<path d="m22 8-6 4 6 4V8z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
  send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z"/>',
  sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>'
};

// Glyphs an app can use as its icon (subset of the icon set, in picker order).
export const GLYPHS = ['package', 'sparkles', 'monitor', 'tv', 'play', 'home', 'cpu', 'chrome', 'terminal', 'code',
  'layers', 'shield', 'globe', 'mic', 'moon', 'zap', 'rocket', 'compass', 'image', 'video', 'book', 'heart'];

export function icon(name, cls = 'i') {
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || P.code}</svg>`;
}

let markN = 0;
export function brandMark(cls = 'mark') {
  const n = ++markN;
  return `<svg class="${cls}" viewBox="0 0 44 44" fill="none" aria-hidden="true"><defs>` +
    `<linearGradient id="pm${n}a" x1="4" y1="4" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#8B5CF6"/><stop offset=".52" stop-color="#38BDF8"/><stop offset="1" stop-color="#2DD4BF"/></linearGradient>` +
    `<linearGradient id="pm${n}b" x1="12" y1="10" x2="34" y2="34" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#C4B5FD"/><stop offset="1" stop-color="#5EEAD4"/></linearGradient></defs>` +
    `<rect x="2" y="2" width="40" height="40" rx="12" fill="#0F1322" stroke="url(#pm${n}a)" stroke-width="1.75"/>` +
    `<path d="M13 30V14.5C13 13.12 14.12 12 15.5 12H24.5C28.64 12 32 15.36 32 19.5C32 23.64 28.64 27 24.5 27H18.5V30" stroke="url(#pm${n}b)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>` +
    `<path d="M18.5 17.5H24C25.38 17.5 26.5 18.62 26.5 20C26.5 21.38 25.38 22.5 24 22.5H18.5V17.5Z" fill="url(#pm${n}a)" fill-opacity=".35"/>` +
    `<circle cx="29.5" cy="30" r="2.2" fill="#2DD4BF"/></svg>`;
}

export const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const safeUrl = u => (/^(https?:|mailto:|\/|\.{0,2}\/|#|[\w-]+(\/|\.html|$))/i.test(String(u || '').trim()) ? String(u).trim() : '');
export const categoryOf = id => CATEGORIES.find(c => c.id === id) || { id, label: 'Software', icon: 'code' };
export const accentOf = id => ACCENTS[id] || ACCENTS.studio;
export const statusOf = id => STATUS[id] || STATUS.live;

// Image paths in the catalog are relative to the hub's media folder ("pagepackage/cover.png") or absolute URLs.
export function media(path, base) {
  if (!path) return '';
  return /^(https?:|data:|blob:)/i.test(path) ? path : base + path;
}

export function accentStyle(app) {
  const a = accentOf(app.accent);
  return `--a1:${a.a1};--a2:${a.a2}`;
}

export function appIcon(app, opts = {}, size = '') {
  const inner = app.iconImage
    ? `<img src="${esc(media(app.iconImage, opts.mediaBase || ''))}" alt="" loading="lazy">`
    : icon(app.glyph || 'code');
  return `<span class="app-ico${size ? ' ' + size : ''}">${inner}</span>`;
}

function statusPill(app) {
  const s = statusOf(app.status);
  return `<span class="spill s-${esc(app.status || 'live')}"><i></i>${esc(s.short)}</span>`;
}

function primaryLink(app) {
  const url = safeUrl(app.primaryUrl) || safeUrl(app.pageUrl) || safeUrl(app.repoUrl);
  if (!url) return '';
  const label = app.primaryLabel || (url === app.repoUrl ? 'View on GitHub' : 'Learn more');
  return { url, label };
}

export function coverHTML(app, opts = {}) {
  if (app.cover) {
    return `<div class="cover"><img src="${esc(media(app.cover, opts.mediaBase || ''))}" alt="${esc(app.name)} screenshot" loading="lazy"></div>`;
  }
  // Generated cover: accent light field, faint grid and an oversized glyph, so image-less apps still look intentional.
  return `<div class="cover gen"><span class="gen-grid"></span><span class="gen-glyph">${icon(app.glyph || 'code')}</span><span class="gen-name">${esc(app.name)}</span></div>`;
}

// A showcase card. opts.mediaBase: image prefix. opts.wide: featured layout. opts.preview: inert (hub editor).
export function cardHTML(app, opts = {}) {
  const cat = categoryOf(app.category);
  const pl = primaryLink(app);
  const tags = (app.techStack || []).slice(0, 4);
  const more = (app.techStack || []).length - tags.length;
  const href = opts.preview ? '#' : `#app/${encodeURIComponent(app.id)}`;
  return `<article class="pcard${opts.wide ? ' wide' : ''}${app.featured ? ' is-featured' : ''}" data-id="${esc(app.id)}" data-cat="${esc(app.category)}" data-status="${esc(app.status)}" style="${accentStyle(app)}">
  <a class="pcard-hit" href="${href}" aria-label="${esc(app.name)} details"></a>
  <div class="pcard-media">${coverHTML(app, opts)}${statusPill(app)}${app.featured ? `<span class="fpill">${icon('star')}Featured</span>` : ''}</div>
  ${opts.wide ? '<div class="pcard-side">' : ''}<div class="pcard-body">
    <div class="pcard-head">${appIcon(app, opts)}<div class="pcard-title"><h3>${esc(app.name || 'Untitled app')}</h3><div class="meta">${icon(cat.icon)}<span>${esc(cat.label)}</span>${app.version ? `<span class="dot">·</span><span class="ver">${esc(app.version)}</span>` : ''}</div></div></div>
    <p class="tagline">${esc(app.tagline)}</p>
    ${opts.wide && app.description ? `<p class="desc">${esc(app.description)}</p>` : ''}
    ${app.metricLabel || app.metricValue ? `<div class="metric"><span>${esc(app.metricLabel)}</span><b>${esc(app.metricValue)}</b></div>` : ''}
    ${tags.length ? `<div class="tags">${tags.map(t => `<span>${esc(t)}</span>`).join('')}${more > 0 ? `<span class="more">+${more}</span>` : ''}</div>` : ''}
  </div>
  <div class="pcard-foot">
    ${pl ? `<a class="btn-acc" href="${esc(pl.url)}"${/^https?:/.test(pl.url) ? ' target="_blank" rel="noopener"' : ''}>${esc(pl.label)}${icon('arrow')}</a>` : `<span class="btn-ghost-static">${esc(statusOf(app.status).label)}</span>`}
    <span class="sp"></span>
    ${safeUrl(app.repoUrl) && pl.url !== app.repoUrl ? `<a class="ibtn" href="${esc(app.repoUrl)}" target="_blank" rel="noopener" title="Source on GitHub" aria-label="Source on GitHub">${icon('github')}</a>` : ''}
    <a class="details" href="${href}">Details${icon('chevron')}</a>
  </div>${opts.wide ? '</div>' : ''}
</article>`;
}

// The full detail view shown in the dialog on the site (and in the hub's preview).
export function detailHTML(app, opts = {}) {
  const cat = categoryOf(app.category);
  const st = statusOf(app.status);
  const base = opts.mediaBase || '';
  const shots = [app.cover, ...(app.screenshots || [])].filter(Boolean).filter((v, i, a) => a.indexOf(v) === i);
  const pl = primaryLink(app);
  const links = [];
  if (pl) links.push(`<a class="btn-acc lg" href="${esc(pl.url)}"${/^https?:/.test(pl.url) ? ' target="_blank" rel="noopener"' : ''}>${esc(pl.label)}${icon('arrow')}</a>`);
  if (safeUrl(app.pageUrl) && app.pageUrl !== pl.url) links.push(`<a class="btn-soft" href="${esc(app.pageUrl)}">${icon('globe')}Product page</a>`);
  if (safeUrl(app.repoUrl) && app.repoUrl !== pl.url) links.push(`<a class="btn-soft" href="${esc(app.repoUrl)}" target="_blank" rel="noopener">${icon('github')}Source</a>`);
  if (safeUrl(app.docsUrl)) links.push(`<a class="btn-soft" href="${esc(app.docsUrl)}" target="_blank" rel="noopener">${icon('book')}Docs</a>`);
  if (safeUrl(app.videoUrl)) links.push(`<a class="btn-soft" href="${esc(app.videoUrl)}" target="_blank" rel="noopener">${icon('video')}Watch video</a>`);
  return `<div class="detail" style="${accentStyle(app)}">
  <header class="d-head">${appIcon(app, opts, 'lg')}<div class="d-title"><div class="d-row"><h2 id="dlg-title">${esc(app.name)}</h2>${app.version ? `<span class="ver-chip">${esc(app.version)}</span>` : ''}<span class="spill s-${esc(app.status || 'live')}"><i></i>${esc(st.label)}</span></div><p>${esc(app.tagline)}</p></div></header>
  ${shots.length ? `<div class="d-gallery"><div class="d-stage"><img src="${esc(media(shots[0], base))}" alt="${esc(app.name)} screenshot"></div>${shots.length > 1 ? `<div class="d-thumbs">${shots.map((s, i) => `<button type="button" class="${i ? '' : 'on'}" data-src="${esc(media(s, base))}" aria-label="Screenshot ${i + 1}"><img src="${esc(media(s, base))}" alt="" loading="lazy"></button>`).join('')}</div>` : ''}</div>` : `<div class="d-gallery">${coverHTML(app, opts)}</div>`}
  <div class="d-grid">
    <div class="d-main">
      ${app.description ? `<section><h4>Overview</h4><p class="d-desc">${esc(app.description)}</p></section>` : ''}
      ${(app.features || []).length ? `<section><h4>Highlights</h4><ul class="d-feats">${app.features.map(f => `<li>${icon('check')}<span>${esc(f)}</span></li>`).join('')}</ul></section>` : ''}
      ${app.installCommand ? `<section><h4>Get started</h4><div class="cmd"><code>${esc(app.installCommand)}</code><button type="button" class="copy" data-copy="${esc(app.installCommand)}">${icon('copy')}<span>Copy</span></button></div></section>` : ''}
    </div>
    <aside class="d-side">
      <dl class="facts">
        <div><dt>Platform</dt><dd>${esc(app.platform || cat.label)}</dd></div>
        <div><dt>Status</dt><dd>${esc(st.label)}</dd></div>
        ${app.version ? `<div><dt>Version</dt><dd>${esc(app.version)}</dd></div>` : ''}
        ${app.metricLabel ? `<div><dt>${esc(app.metricLabel)}</dt><dd>${esc(app.metricValue)}</dd></div>` : ''}
        ${app.updatedAt ? `<div><dt>Updated</dt><dd>${esc(fmtDate(app.updatedAt))}</dd></div>` : ''}
      </dl>
      ${(app.techStack || []).length ? `<h4>Built with</h4><div class="tags">${app.techStack.map(t => `<span>${esc(t)}</span>`).join('')}</div>` : ''}
      ${(app.changelog || []).length ? `<h4>Release notes</h4><ol class="log">${app.changelog.map(c => `<li><div><b>${esc(c.ver)}</b><span>${esc(c.date)}</span></div><p>${esc(c.note)}</p></li>`).join('')}</ol>` : ''}
    </aside>
  </div>
  ${links.length ? `<footer class="d-foot">${links.join('')}</footer>` : ''}
</div>`;
}

export function fmtDate(iso) {
  const d = new Date(iso + (iso.length === 10 ? 'T00:00:00' : ''));
  return isNaN(d) ? iso : d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
}

// Fields that never leave the hub.
export const PRIVATE_FIELDS = ['notes', 'localPath', 'published', 'order'];
export function publicApp(app) {
  const o = { ...app };
  for (const k of PRIVATE_FIELDS) delete o[k];
  return o;
}

// Pylerium Studio: shared catalog vocabulary and renderers.
// Used by the local hub (live preview), the site builder (static HTML) and the public site,
// so every card, video and detail view looks identical everywhere. Plain ES module, no dependencies.

export const ACCENTS = {
  studio:  { label: 'Studio Teal',   a1: '#2DD4BF', a2: '#38BDF8' },
  violet:  { label: 'Royal Violet',  a1: '#8B5CF6', a2: '#6366F1' },
  sky:     { label: 'Nebula Sky',    a1: '#38BDF8', a2: '#818CF8' },
  emerald: { label: 'Emerald',       a1: '#10B981', a2: '#2DD4BF' },
  amber:   { label: 'Solar Amber',   a1: '#F59E0B', a2: '#FB7185' },
  ember:   { label: 'Ember & Cyan',  a1: '#F97316', a2: '#22D3EE' },
  rose:    { label: 'Rose Quartz',   a1: '#FB7185', a2: '#A78BFA' },
  crimson: { label: 'Crimson',       a1: '#EF4444', a2: '#F59E0B' },
  lime:    { label: 'Acid Lime',     a1: '#A3E635', a2: '#22D3EE' }
};

// Categories are edited in the hub (Site → Categories). These are only the defaults.
export const DEFAULT_CATEGORIES = [
  { id: 'desktop',   label: 'Desktop',            icon: 'monitor' },
  { id: 'extension', label: 'Browser extensions', icon: 'chrome' },
  { id: 'tv',        label: 'Android TV',         icon: 'tv' },
  { id: 'mods',      label: 'Game mods',          icon: 'gamepad' },
  { id: 'web',       label: 'Web',                icon: 'globe' },
  { id: 'devtools',  label: 'Developer tools',    icon: 'terminal' }
];
let CATS = DEFAULT_CATEGORIES;
export function setCategories(list) { if (Array.isArray(list) && list.length) CATS = list; }
export const categories = () => CATS;
export const categoryOf = id => CATS.find(c => c.id === id) || { id, label: 'Software', icon: 'code' };

export const STATUS = {
  live: { label: 'Available',      short: 'Live' },
  beta: { label: 'Public beta',    short: 'Beta' },
  soon: { label: 'Coming soon',    short: 'Soon' },
  dev:  { label: 'In development', short: 'In dev' }
};

export const SOCIALS = {
  youtube:   { label: 'YouTube',   icon: 'youtube',   match: /youtube\.com|youtu\.be/i },
  github:    { label: 'GitHub',    icon: 'github',    match: /github\.com/i },
  discord:   { label: 'Discord',   icon: 'discord',   match: /discord\.(gg|com)/i },
  x:         { label: 'X',         icon: 'xlogo',     match: /(^|\/\/|\.)(x|twitter)\.com/i },
  tiktok:    { label: 'TikTok',    icon: 'tiktok',    match: /tiktok\.com/i },
  instagram: { label: 'Instagram', icon: 'instagram', match: /instagram\.com/i },
  twitch:    { label: 'Twitch',    icon: 'twitch',    match: /twitch\.tv/i },
  reddit:    { label: 'Reddit',    icon: 'reddit',    match: /reddit\.com/i },
  bluesky:   { label: 'Bluesky',   icon: 'bluesky',   match: /bsky\.(app|social)/i },
  linkedin:  { label: 'LinkedIn',  icon: 'linkedin',  match: /linkedin\.com/i },
  patreon:   { label: 'Patreon',   icon: 'patreon',   match: /patreon\.com/i },
  kofi:      { label: 'Ko-fi',     icon: 'coffee',    match: /ko-fi\.com/i },
  mastodon:  { label: 'Mastodon',  icon: 'mastodon',  match: /mastodon\.|mstdn\.|fosstodon\./i },
  telegram:  { label: 'Telegram',  icon: 'telegram',  match: /(^|\/\/)(t\.me|telegram\.me)\//i },
  devto:     { label: 'DEV',       icon: 'devto',     match: /(^|\/\/)dev\.to\//i },
  itch:      { label: 'itch.io',   icon: 'itch',      match: /itch\.io/i },
  producthunt: { label: 'Product Hunt', icon: 'producthunt', match: /producthunt\.com/i },
  email:     { label: 'Email',     icon: 'mail',      match: /^mailto:/i },
  website:   { label: 'Website',   icon: 'globe',     match: /./ }
};
export function detectSocial(url) {
  for (const [k, v] of Object.entries(SOCIALS)) if (k !== 'website' && v.match.test(url || '')) return k;
  return 'website';
}

const P = {
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.4 15.4 4.6 4.6"/><path d="M7.6 9.4a3.2 3.2 0 0 1 2-2"/>',
  plus: '<path d="M12 4.5v15M4.5 12h15"/>',
  external: '<path d="M13 4h7v7"/><path d="m20 4-8.5 8.5"/><path d="M17 14.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3.5"/>',
  github: '<path d="M9.5 20.5v-2.6c-3.4.7-4.1-1.5-4.4-2.3M14.5 20.5v-3a2.6 2.6 0 0 0-.8-2c2.7-.3 5.3-1.3 5.3-5.7a4.4 4.4 0 0 0-1.2-3.1 4 4 0 0 0-.1-3s-1-.3-3.2 1.2a11 11 0 0 0-5.8 0C6.5 2.4 5.5 2.7 5.5 2.7a4 4 0 0 0-.1 3 4.4 4.4 0 0 0-1.2 3.1c0 4.4 2.6 5.4 5.3 5.7a2.6 2.6 0 0 0-.8 2"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M5 7.5h14M5 16.5h14"/><path d="M12 3.5c-2.4 2.4-3.6 5.2-3.6 8.5s1.2 6.1 3.6 8.5c2.4-2.4 3.6-5.2 3.6-8.5S14.4 5.9 12 3.5Z"/>',
  monitor: '<rect x="3" y="4" width="18" height="12.5" rx="2.5"/><path d="M9 20h6M12 16.5V20M6.5 13h3"/>',
  terminal: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="m7.5 9.5 3 2.5-3 2.5M12.5 15h4"/>',
  sparkles: '<path d="M10 3.5c.6 3.6 2.4 5.4 6 6-3.6.6-5.4 2.4-6 6-.6-3.6-2.4-5.4-6-6 3.6-.6 5.4-2.4 6-6Z"/><path d="M17.5 14.5c.3 1.6 1.1 2.4 2.7 2.7-1.6.3-2.4 1.1-2.7 2.7-.3-1.6-1.1-2.4-2.7-2.7 1.6-.3 2.4-1.1 2.7-2.7Z"/>',
  layers: '<path d="M12 3.8 20 8l-8 4.2L4 8Z"/><path d="m4.6 12.4 7.4 3.9 7.4-3.9"/><path d="m4.6 16.3 7.4 3.9 7.4-3.9"/>',
  check: '<path d="m4.5 12.5 4.5 4.5 10.5-10.5"/>',
  copy: '<rect x="8.5" y="8.5" width="12" height="12" rx="2.5"/><path d="M15.5 8.5V6A2.5 2.5 0 0 0 13 3.5H6A2.5 2.5 0 0 0 3.5 6v7A2.5 2.5 0 0 0 6 15.5h2.5"/>',
  edit: '<path d="m14.5 5.5 4 4"/><path d="M4 20l1-4.5L16 4.5a1.4 1.4 0 0 1 2 0l1.5 1.5a1.4 1.4 0 0 1 0 2L8.5 19Z"/>',
  trash: '<path d="M4 6.5h16M9.5 6.5v-2h5v2"/><path d="m6 6.5.9 12.2a2 2 0 0 0 2 1.8h6.2a2 2 0 0 0 2-1.8L18 6.5"/><path d="M10 10.5v6M14 10.5v6"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
  download: '<path d="M12 3.5v11"/><path d="m7.5 10.5 4.5 4.5 4.5-4.5"/><path d="M4 15.5V18a2.5 2.5 0 0 0 2.5 2.5h11A2.5 2.5 0 0 0 20 18v-2.5"/>',
  upload: '<path d="M12 15V4"/><path d="M7.5 8.5 12 4l4.5 4.5"/><path d="M4 15.5V18a2.5 2.5 0 0 0 2.5 2.5h11A2.5 2.5 0 0 0 20 18v-2.5"/>',
  star: '<path d="m12 4 2.12 5.59 5.96.28-4.66 3.74L17 19.38l-5-3.28-5 3.28 1.58-5.77-4.66-3.74 5.96-.28Z"/>',
  grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><rect x="13.5" y="13.5" width="7" height="7" rx="3.5"/>',
  list: '<path d="M9 6.5h11M9 12h11M9 17.5h7"/><circle cx="4.75" cy="6.5" r=".9"/><circle cx="4.75" cy="12" r=".9"/><circle cx="4.75" cy="17.5" r=".9"/>',
  arrow: '<path d="M7 17 17 7M9 7h8v8"/>',
  package: '<path d="M12 3.5 19.5 7.5v9L12 20.5l-7.5-4v-9Z"/><path d="M4.5 7.5 12 11.5l7.5-4M12 11.5v9M8.2 5.5l7.5 4"/>',
  code: '<path d="M8.5 7.5 4 12l4.5 4.5M15.5 7.5 20 12l-4.5 4.5"/><path d="m13.5 5-3 14"/>',
  eye: '<path d="M2.5 12C4.6 7.8 8 5.5 12 5.5s7.4 2.3 9.5 6.5c-2.1 4.2-5.5 6.5-9.5 6.5S4.6 16.2 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',
  eyeoff: '<path d="M6.3 7.2C4.7 8.4 3.4 10 2.5 12c2.1 4.2 5.5 6.5 9.5 6.5 1.8 0 3.4-.5 4.9-1.3M10 5.7c.6-.1 1.3-.2 2-.2 4 0 7.4 2.3 9.5 6.5-.6 1.2-1.3 2.2-2.1 3.1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2M4 4l16 16"/>',
  tv: '<rect x="3" y="6.5" width="18" height="13" rx="3"/><path d="m8.5 3 3.5 3.5L15.5 3"/>',
  chrome: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.2"/><path d="M12 8.8h8M9.2 13.6l-4-6.9M14.8 13.6l-4 6.9"/>',
  shield: '<path d="M12 3.5 19 6v5.5c0 4.3-2.9 7.6-7 9-4.1-1.4-7-4.7-7-9V6Z"/><path d="m9 12 2 2 4-4"/>',
  chevron: '<path d="m9.5 6 6 6-6 6"/>',
  chevleft: '<path d="m14.5 6-6 6 6 6"/>',
  up: '<path d="m6 14.5 6-6 6 6"/>',
  down: '<path d="m6 9.5 6 6 6-6"/>',
  refresh: '<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.5 4v4.5H15"/>',
  rocket: '<path d="M12.5 15.5 8.5 11.5C10.4 6.6 14 4 19.5 4.5 20 10 17.4 13.6 12.5 15.5Z"/><path d="M8.5 11.5H5L7.5 8h4M12.5 15.5V19l3.5-2.5v-4M6.5 17.5c-1 .4-1.8 1.3-2 3 1.7-.2 2.6-1 3-2"/><circle cx="15" cy="9" r="1.4"/>',
  folder: '<path d="M3.5 7A2.5 2.5 0 0 1 6 4.5h3.2l2 2.5H18a2.5 2.5 0 0 1 2.5 2.5V17a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 17Z"/><path d="M3.5 10h17"/>',
  image: '<rect x="3.5" y="4.5" width="17" height="15" rx="3"/><path d="m3.5 16 4.5-4.5 3.5 3.5 2.5-2.5 6.5 6"/><circle cx="15.5" cy="9" r="1.6"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="2.5"/><path d="M9.5 10.5h5v3h-5ZM9.5 3v3M14.5 3v3M9.5 18v3M14.5 18v3M3 9.5h3M3 14.5h3M18 9.5h3M18 14.5h3"/>',
  play: '<circle cx="12" cy="12" r="8.5"/><path d="M10.2 8.6v6.8l5.4-3.4Z"/>',
  playfill: '<path d="M8 5.2v13.6a1 1 0 0 0 1.5.86l11-6.8a1 1 0 0 0 0-1.72l-11-6.8A1 1 0 0 0 8 5.2Z" fill="currentColor"/>',
  home: '<path d="M4 10.2 12 4l8 6.2V18a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18Z"/><path d="M9.5 20.5v-5a2.5 2.5 0 0 1 5 0v5"/>',
  mic: '<rect x="9" y="3.5" width="6" height="10.5" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5v3M9 20.5h6"/>',
  moon: '<path d="M19.5 14.5A8 8 0 1 1 9.5 4.5a6.5 6.5 0 0 0 10 10Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3.8 7 7 5.4a2 2 0 0 0 2.4 0l7-5.4"/>',
  video: '<rect x="3" y="6" width="12.5" height="12" rx="3"/><path d="M15.5 10.5 21 7.5v9l-5.5-3"/>',
  lock: '<rect x="4.5" y="10.5" width="15" height="10" rx="3"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5M12 14.5v2"/>',
  unlock: '<rect x="4.5" y="10.5" width="15" height="10" rx="3"/><path d="M8 10.5V8a4 4 0 0 1 7.7-1.5M12 14.5v2"/>',
  zap: '<path d="M13.5 3 5.5 13.5h6L10.5 21l8-10.5h-6Z"/>',
  book: '<path d="M12 6.5C10.3 5.2 8 4.5 4 4.5v13c4 0 6.3.7 8 2 1.7-1.3 4-2 8-2v-13c-4 0-6.3.7-8 2Z"/><path d="M12 6.5v13"/>',
  send: '<path d="M20.5 3.5 3.5 10.2l6.8 2.9 2.9 6.9Z"/><path d="m10.3 13.1 4.2-4.2"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  compass: '<circle cx="12" cy="12" r="8.5"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8Z"/>',
  sliders: '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
  heart: '<path d="M12 19.5S4 14.8 4 9.2A4.2 4.2 0 0 1 12 7a4.2 4.2 0 0 1 8 2.2c0 5.6-8 10.3-8 10.3Z"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3A4 4 0 0 0 13 5.3l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4M7.5 14h2M11 14h2M14.5 14h2M7.5 17h2"/>',
  save: '<path d="M5.5 3.5h10l5 5v10a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z"/><path d="M8 3.5V8h6.5V3.5"/><rect x="7.5" y="13" width="9" height="7.5" rx="1.5"/>',
  gamepad: '<path d="M7.5 6.5h9a4.5 4.5 0 0 1 4.4 3.6l1 5a2.6 2.6 0 0 1-4.5 2.2L15.5 15h-7l-1.9 2.3a2.6 2.6 0 0 1-4.5-2.2l1-5a4.5 4.5 0 0 1 4.4-3.6Z"/><path d="M8 9.5v3M6.5 11h3"/><circle cx="15.5" cy="10.2" r=".6"/><circle cx="17" cy="12.2" r=".6"/>',
  wrench: '<path d="M14.5 4.2a4.5 4.5 0 0 0-4.6 5.9l-5.7 5.7a1.9 1.9 0 0 0 2.7 2.7l5.7-5.7a4.5 4.5 0 0 0 5.9-4.6l-2.6 2.6-2.6-.6-.6-2.6Z"/>',
  car: '<path d="M5 16.5H3.5V13l2-5a2 2 0 0 1 1.9-1.3h9.2a2 2 0 0 1 1.9 1.3l2 5v3.5H19M9.5 16.5h5M3.5 12.5h17"/><circle cx="7.25" cy="16.75" r="2"/><circle cx="16.75" cy="16.75" r="2"/>',
  music: '<path d="M9 17.5V6l10.5-2.5v11.5M9 9.5 19.5 7"/><circle cx="6.5" cy="17.5" r="2.5"/><circle cx="17" cy="15" r="2.5"/>',
  users: '<circle cx="9" cy="8.5" r="3.5"/><path d="M3 19.5a6 6 0 0 1 12 0M15.5 5.3a3.5 3.5 0 0 1 0 6.4M17.5 14a5.5 5.5 0 0 1 3.5 5.5"/>',
  gift: '<rect x="4" y="9" width="16" height="11.5" rx="2.5"/><path d="M12 9v11.5M4 13.5h16M12 9c-1-3-2.5-4.5-4-4.5a2.25 2.25 0 0 0 0 4.5M12 9c1-3 2.5-4.5 4-4.5a2.25 2.25 0 0 1 0 4.5"/>',
  inbox: '<path d="M3.5 13.5 6 6a2 2 0 0 1 1.9-1.5h8.2A2 2 0 0 1 18 6l2.5 7.5V18a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18Z"/><path d="M3.5 13.5H8L9.5 16h5l1.5-2.5h4.5"/>',
  megaphone: '<path d="M4 10v4a1.5 1.5 0 0 0 1.5 1.5H7l9 4.5V4L7 8.5H5.5A1.5 1.5 0 0 0 4 10Z"/><path d="M8 15.5 9.5 20H12M19.5 10v4"/>',
  key: '<circle cx="8" cy="15.5" r="4.5"/><path d="m11.2 12.3 8.3-8.3M16.5 7 19 9.5M14 9.5l2 2"/>',
  film: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M8 3.5v17M16 3.5v17M3.5 8.5H8M3.5 15.5H8M16 8.5h4.5M16 15.5h4.5"/>',
  phone: '<rect x="6.5" y="3" width="11" height="18" rx="3"/><path d="M10.5 18h3"/>',
  puzzle: '<path d="M4.5 9.5a1 1 0 0 1 1-1h3a2.5 2.5 0 1 1 5 0h3a1 1 0 0 1 1 1v3a2.5 2.5 0 1 1 0 5v2a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1Z"/>',
  crown: '<path d="M4 8.5 7.5 12 12 5.5l4.5 6.5L20 8.5 18.5 17h-13Z"/><path d="M6 20h12"/>',
  can: '<path d="M9 2h6"/><path d="M8.5 2 7 4.5V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4.5L15.5 2"/><path d="M7 7h10M7 18.5h10"/><path d="m12.8 9.2-2.3 3.4h3.1l-2.3 3.4"/>',
  tag: '<path d="M3.5 4.7v6.2a2 2 0 0 0 .6 1.4l7.6 7.6a2 2 0 0 0 2.8 0l5.4-5.4a2 2 0 0 0 0-2.8l-7.6-7.6a2 2 0 0 0-1.4-.6H4.7a1.2 1.2 0 0 0-1.2 1.2Z"/><circle cx="8" cy="8" r="1.5"/>',
  activity: '<path d="M3 12h3.5L9 6l4 13 3-8.5 1.5 1.5H21"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3.2 2"/>',
  chart: '<path d="M4 4v14.5A1.5 1.5 0 0 0 5.5 20H20M8.5 15.5v-3M12.5 15.5V8M16.5 15.5v-5"/>',
  alert: '<path d="M10.3 4.6 3.2 17a2 2 0 0 0 1.7 3h14.2a2 2 0 0 0 1.7-3L13.7 4.6a2 2 0 0 0-3.4 0Z"/><path d="M12 9.5v4"/><circle cx="12" cy="16.8" r=".4"/>',
  store: '<path d="M4 9.5 5.5 4.5h13L20 9.5"/><path d="M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0M5.5 12.5v6a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-6M10 20.5v-4h4v4"/>',
  card: '<rect x="3" y="5.5" width="18" height="13" rx="3"/><path d="M3 10h18M7 14.5h3.5"/>',
  power: '<path d="M12 3.5v7"/><path d="M7.2 6.3a7.5 7.5 0 1 0 9.6 0"/>',
  coffee: '<path d="M4.5 9h11v5.5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5Z"/><path d="M15.5 10.5H17a2.5 2.5 0 0 1 0 5h-1.8M8 3.5c-.7.9-.7 1.6 0 2.5M11.5 3.5c-.7.9-.7 1.6 0 2.5"/>',
  share: '<circle cx="17.5" cy="6" r="2.5"/><circle cx="6.5" cy="12" r="2.5"/><circle cx="17.5" cy="18" r="2.5"/><path d="m8.7 10.8 6.6-3.6M8.7 13.2l6.6 3.6"/>',
  hash: '<path d="m9.5 4-2 16M16.5 4l-2 16M4.5 9h15M3.5 15h15"/>',
  bell: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 1.5h-15Z"/><path d="M10 20.5h4"/>',
  palette: '<path d="M12 3.5a8.5 8.5 0 0 0 0 17c1.2 0 1.8-.8 1.8-1.7 0-1.1-.9-1.6-.9-2.6 0-1.1.8-1.7 1.9-1.7H17a3.5 3.5 0 0 0 3.5-3.5c0-4.2-3.8-7.5-8.5-7.5Z"/><circle cx="8" cy="11" r="1"/><circle cx="10.5" cy="7.5" r="1"/><circle cx="14.5" cy="7.5" r="1"/>',
  bot: '<rect x="4" y="8" width="16" height="11.5" rx="3.5"/><path d="M12 8V4.6M9 13v1.5M15 13v1.5M2.5 12.5v3M21.5 12.5v3"/><circle cx="12" cy="3.8" r=".8"/>',
  info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5"/><circle cx="12" cy="8" r=".4"/>',
  starfill: '<path d="m12 3.6 2.5 5.4 5.9.6-4.4 4 1.2 5.8L12 16.4l-5.2 3 1.2-5.8-4.4-4 5.9-.6Z" fill="currentColor" stroke-width="1.2"/>',
  quote: '<path d="M10 7.5H6.5A2.5 2.5 0 0 0 4 10v2.5A1.5 1.5 0 0 0 5.5 14H8a2 2 0 0 1-2 2.5M20 7.5h-3.5A2.5 2.5 0 0 0 14 10v2.5a1.5 1.5 0 0 0 1.5 1.5H18a2 2 0 0 1-2 2.5"/>',
  help: '<circle cx="12" cy="12" r="8.5"/><path d="M9.6 9.4a2.5 2.5 0 0 1 4.8 1c0 1.7-2.4 2.1-2.4 3.6"/><circle cx="12" cy="17" r=".4"/>',
  award: '<circle cx="12" cy="9" r="5.5"/><path d="m9 13.8-1.5 6.7L12 18l4.5 2.5L15 13.8"/>',
  minus: '<path d="M5 12h14"/>',
  // brand marks (simplified line versions)
  youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10.2 9.3v5.4l4.6-2.7Z"/>',
  plug: '<path d="M9 3.5v4M15 3.5v4"/><path d="M6.5 7.5h11V11a5.5 5.5 0 0 1-11 0Z"/><path d="M12 16.5v4"/>',
  stripe: '<rect x="2" y="4" width="20" height="16" rx="4"/><path d="M14.5 9.2c-.6-.5-1.5-.8-2.5-.8-1.4 0-2.4.7-2.4 1.7 0 2.4 5 1.4 5 3.9 0 1.1-1.1 1.8-2.6 1.8-1.1 0-2.2-.4-2.9-1"/>',
  cloudflare: '<path d="M17.5 18H6a4 4 0 0 1-.6-7.96A6 6 0 0 1 17 9a4.5 4.5 0 0 1 .5 9z"/><path d="M9 14h7"/>',
  itch: '<path d="M3 9 5 4h14l2 5"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/><path d="M10 15h.01M14 15h.01M11 17.5h2"/>',
  mastodon: '<path d="M21 13.5c-.3 1.6-2.6 3.3-5.3 3.6-1.4.2-2.8.3-4.3.2-2.4-.1-4.3-.6-4.3-.6v.7c.3 2.4 2.3 2.5 4.2 2.6 1.9 0 3.6-.5 3.6-.5l.1 1.7s-1.3.7-3.7.8c-1.3.1-2.9 0-4.8-.5C2.5 20.5 2.3 16.5 2.2 12.5V8.9c0-4.2 2.7-5.4 2.7-5.4C6.3 2.8 8.7 2.5 11.2 2.5h.1c2.5 0 4.9.3 6.3 1 0 0 2.7 1.2 2.7 5.4 0 0 0 3.1-.4 4.6z"/><path d="M8.5 12V8.6c0-1 .7-1.8 1.7-1.8s1.8.8 1.8 1.8V11M12 11V8.6c0-1 .8-1.8 1.8-1.8s1.7.8 1.7 1.8V12"/>',
  telegram: '<path d="M21.5 3.5 2.8 10.7c-.9.4-.9 1.6.1 1.9l4.6 1.4 1.8 5.6c.3.8 1.2 1 1.8.4l2.6-2.5 4.7 3.5c.7.5 1.6.1 1.8-.7L22.9 4.9c.2-.9-.6-1.7-1.4-1.4z"/><path d="m7.5 14 9.5-6.5-6.8 8"/>',
  ollama: '<path d="M8 5.5V3.6c0-.9.8-1.4 1.4-.8l1 1.2M16 5.5V3.6c0-.9-.8-1.4-1.4-.8l-1 1.2"/><path d="M6.5 11.5C6.5 8 9 5.5 12 5.5s5.5 2.5 5.5 6v3.5c1 .8 1.5 2 1.5 3.3 0 1.5-.7 2.7-1.7 3.2H6.7C5.7 21 5 19.8 5 18.3c0-1.3.5-2.5 1.5-3.3z"/><path d="M10 12.5h.01M14 12.5h.01"/><path d="M10.7 15.5c.7.6 1.9.6 2.6 0"/>',
  sparkle: '<path d="M12 3.5c.8 4.6 3 6.8 7.5 7.5-4.5.7-6.7 2.9-7.5 7.5-.8-4.6-3-6.8-7.5-7.5 4.5-.7 6.7-2.9 7.5-7.5Z"/>',
  devto: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M6.5 9v6h1.2a1.8 1.8 0 0 0 1.8-1.8v-2.4A1.8 1.8 0 0 0 7.7 9z"/><path d="M14 9h-2.2v6H14M11.8 12h1.6"/><path d="M15.6 9l1.4 6 1.4-6"/>',
  xlogo: '<path d="M4 4h4.5L20 20h-4.5z"/><path d="M20 4l-6.6 7.2M4 20l6.6-7.2"/>',
  discord: '<path d="M8.5 17.5 7.5 19C5 18.5 3.3 17.4 2.5 16.5c0-4.5 1.3-8.5 3-11 1.4-.7 2.8-1 4-1.2l.6 1.3a14 14 0 0 1 3.8 0l.6-1.3c1.2.2 2.6.5 4 1.2 1.7 2.5 3 6.5 3 11-.8.9-2.5 2-5 2.5l-1-1.5"/><path d="M7.5 15.5c3 1.5 6 1.5 9 0"/><circle cx="9" cy="12" r="1.2"/><circle cx="15" cy="12" r="1.2"/>',
  tiktok: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.5 3 2.5 5 5.5 5"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  twitch: '<path d="M4 3h16v11l-4 4h-4l-3 3v-3H5l-1-1z"/><path d="M11 8v4M15 8v4"/>',
  reddit: '<circle cx="12" cy="14" r="7"/><path d="m12 7 1-4 4 1"/><circle cx="18" cy="4" r="1"/><path d="M9 16.5c1.5 1 4.5 1 6 0M9.5 12.5h.01M14.5 12.5h.01"/>',
  bluesky: '<path d="M12 11C10 7 6.5 4 4 4c-1.5 0-2 1-2 2.5S3 12 6 12c-3 1-3 4-1 5.5S10 17 12 13c2 4 5 6 7 4.5s2-4.5-1-5.5c3 0 4-4 4-5.5S21.5 4 20 4c-2.5 0-6 3-8 7z"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  patreon: '<circle cx="15" cy="9.5" r="6.5"/><path d="M3 3v18"/>',
  producthunt: '<circle cx="12" cy="12" r="9.5"/><path d="M10 17V7h3.2a2.9 2.9 0 0 1 0 5.8H10"/>',
  rss: '<path d="M4.5 10.5a9 9 0 0 1 9 9M4.5 4.5a15 15 0 0 1 15 15"/><circle cx="5.5" cy="18.5" r="1"/>',
  // Pylerium house glyphs (24-pt grid, 3-pt live-area padding, 1.75 stroke, round caps and joins)
  command: '<path d="M9 9V6.5A2.5 2.5 0 1 0 6.5 9H9Zm0 0h6m-6 0v6m6-6V6.5A2.5 2.5 0 1 1 17.5 9H15Zm0 0v6m0 0h-6m6 0v2.5a2.5 2.5 0 1 0 2.5-2.5H15Zm-6 0H6.5A2.5 2.5 0 1 0 9 17.5V15Z"/>',
  keyboard: '<rect x="2.5" y="6" width="19" height="12" rx="3"/><path d="M6.5 10h1M10 10h1M13.5 10h1M17 10h.5M6.5 13.5h.5M9.5 14h5M17 13.5h.5"/>',
  wifi: '<path d="M3.5 9.5a12 12 0 0 1 17 0M6.5 12.7a7.8 7.8 0 0 1 11 0M9.4 15.8a3.7 3.7 0 0 1 5.2 0"/><circle cx="12" cy="18.8" r=".5"/>',
  signout: '<path d="M14 4.5h3.5A2.5 2.5 0 0 1 20 7v10a2.5 2.5 0 0 1-2.5 2.5H14"/><path d="M4 12h10M7.5 8.5 4 12l3.5 3.5"/>'
};

// Glyphs an app or category can use as its icon (subset of the icon set, in picker order).
export const GLYPHS = ['package', 'sparkles', 'monitor', 'tv', 'play', 'home', 'cpu', 'chrome', 'terminal', 'code', 'gamepad', 'car', 'wrench',
  'puzzle', 'layers', 'shield', 'globe', 'mic', 'music', 'film', 'moon', 'zap', 'rocket', 'compass', 'image', 'video', 'phone', 'bot',
  'palette', 'book', 'heart', 'users', 'crown', 'can', 'coffee', 'key', 'megaphone'];

export function icon(name, cls = 'i') {
  return `<svg class="${cls}" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${P[name] || P.code}</svg>`;
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
const isAbs = u => /^(https?:|mailto:|#|\/)/i.test(u);
const safeUrl = u => (/^(javascript|data|vbscript):/i.test(String(u || '').trim()) ? '' : String(u || '').trim());
// Resolve a catalog link: absolute stays as-is, site-relative ("pagepackage/") gets the page's base prefix.
export function href(u, base = '') { const s = safeUrl(u); return !s ? '' : isAbs(s) ? s : base + s; }
const ext = u => (/^https?:/i.test(u) ? ' target="_blank" rel="noopener"' : '');
export const accentOf = id => ACCENTS[id] || ACCENTS.studio;
export const statusOf = id => STATUS[id] || STATUS.live;

// Image paths in the catalog are relative to the hub's media folder ("pagepackage/cover.png") or absolute URLs.
export function media(path, base) {
  if (!path) return '';
  return /^(https?:|data:|blob:)/i.test(path) ? path : base + path;
}
export function accentStyle(app) { const a = accentOf(app.accent); return `--a1:${a.a1};--a2:${a.a2}`; }

export function appIcon(app, opts = {}, size = '') {
  const inner = app.iconImage ? `<img src="${esc(media(app.iconImage, opts.mediaBase || ''))}" alt="" loading="lazy">` : icon(app.glyph || 'code');
  return `<span class="app-ico${size ? ' ' + size : ''}">${inner}</span>`;
}
function statusPill(app, long) {
  const s = statusOf(app.status);
  return `<span class="spill s-${esc(app.status || 'live')}"><i></i>${esc(long ? s.label : s.short)}</span>`;
}
// "New" for 30 days after it was added, "Updated" for 21 days after a release; a manual badge always wins.
export function badgeOf(app, now = Date.now()) {
  if (app.badge) return app.badge;
  const days = d => (d ? (now - new Date(d + 'T00:00:00')) / 864e5 : 1e9);
  if (days(app.createdAt) <= 30) return 'New';
  if (days(app.updatedAt) <= 21 && app.status !== 'soon' && app.status !== 'dev') return 'Updated';
  return '';
}
function primaryLink(app, base) {
  if (app.gate) return { url: `apps/${encodeURIComponent(app.id)}/#get`, label: app.gateLabel || 'Download', raw: '', gate: true };
  const raw = app.primaryUrl || app.pageUrl || app.repoUrl;
  if (!safeUrl(raw)) return null;
  return { url: href(raw, base), label: app.primaryLabel || (raw === app.repoUrl ? 'View on GitHub' : 'Learn more'), raw };
}
function byline(app, base) {
  if (!app.community || !app.author?.name) return '';
  const n = esc(app.author.name);
  return `<span class="byline">${icon('users')}by ${app.author.url ? `<a href="${esc(href(app.author.url, base))}"${ext(app.author.url)}>${n}</a>` : n}</span>`;
}

export function coverHTML(app, opts = {}) {
  if (app.cover) { const src = esc(media(app.cover, opts.mediaBase || '')); return `<div class="cover fit"><img class="cv-bg" src="${src}" alt="" aria-hidden="true" loading="lazy"><img class="cv-img" src="${src}" alt="${esc(app.name)} screenshot" loading="lazy"></div>`; }
  return `<div class="cover gen"><span class="gen-grid"></span><span class="gen-glyph">${icon(app.glyph || 'code')}</span><span class="gen-name">${esc(app.name)}</span></div>`;
}

// Public release repositories for apps whose catalog repoUrl is blank (or private), keyed by app id. An app's own
// "Release repository" field (releaseRepo) wins over this list.
const KNOWN_DOWNLOAD_REPOS = { 'pylerium-manager': 'Pylerium/pylerium.github.io', speak: 'Pylerium/Pylerium-Dialogue', hypnagogia: 'Pylerium/Hypnagogia' };
const KNOWN_DOWNLOAD_MATCH = { 'pylerium-manager': 'PyleriumManager-*.zip' }; // the site repo also hosts other files
const repoOf = v => String(v || '').match(/github\.com\/([\w.-]+\/[\w.-]+?)(?:\.git)?(?:[/#?].*)?$/i)?.[1] || (/^[\w.-]+\/[\w.-]+$/.test(v || '') ? v : '');
// The GitHub "owner/name" whose release downloads a card counts, or '' when none is known.
export function downloadRepoOf(app) {
  if (app.gate) return '';
  return repoOf(app.releaseRepo) || repoOf(app.repoUrl) || KNOWN_DOWNLOAD_REPOS[app.id] || '';
}
export const downloadMatchOf = app => app.releaseAssets || KNOWN_DOWNLOAD_MATCH[app.id] || '';
// Whether the card shows its Source icon: switched on (default), a repo exists, and the main button isn't already the repo.
export function showsSourceIcon(app, pl = primaryLink(app, '')) {
  return app.showSource !== false && !!app.repoUrl && (!pl || pl.raw !== app.repoUrl);
}

// A showcase card. opts: mediaBase (image prefix), base (link prefix), wide (featured layout), preview (inert, hub editor).
export function cardHTML(app, opts = {}) {
  const base = opts.base || '';
  const cat = categoryOf(app.category);
  const pl = primaryLink(app, base);
  const downloadRepo = downloadRepoOf(app);
  const tags = (app.techStack || []).slice(0, 4);
  const more = (app.techStack || []).length - tags.length;
  const link = opts.preview ? '#' : `${base}apps/${encodeURIComponent(app.id)}/`;
  const badge = badgeOf(app, opts.now);
  return `<article class="pcard${opts.wide ? ' wide' : ''}${app.featured ? ' is-featured' : ''}${app.community ? ' is-community' : ''}" data-id="${esc(app.id)}" data-cat="${esc(app.category)}" data-status="${esc(app.status)}" style="${accentStyle(app)}">
  <a class="pcard-hit" href="${link}" data-app="${esc(app.id)}" aria-label="${esc(app.name)} details"></a>
  <div class="pcard-media">${coverHTML(app, opts)}<div class="pills">${statusPill(app)}${app.community ? `<span class="cpill">${icon('users')}Community</span>` : ''}</div><div class="pills r">${app.paid && app.price ? `<span class="ppill">${icon('tag')}${esc(app.price)}</span>` : ''}${badge ? `<span class="npill">${esc(badge)}</span>` : ''}${app.featured ? `<span class="fpill">${icon('star')}Featured</span>` : ''}</div></div>
  ${opts.wide ? '<div class="pcard-side">' : ''}<div class="pcard-body">
    <div class="pcard-head">${appIcon(app, opts)}<div class="pcard-title"><h3>${esc(app.name || 'Untitled app')}</h3><div class="meta">${icon(cat.icon)}<span>${esc(cat.label)}</span>${app.version ? `<span class="dot">·</span><span class="ver">${esc(app.version)}</span>` : ''}</div></div></div>
    ${byline(app, base)}
    <p class="tagline">${esc(app.tagline)}</p>
    ${opts.wide && app.description ? `<p class="desc">${esc(clip(mdPlain(app.description), 280))}</p>` : ''}
    ${app.metricLabel || app.metricValue ? `<div class="metric"><span>${esc(app.metricLabel)}</span><b>${esc(app.metricValue)}</b></div>` : ''}
    ${tags.length ? `<div class="tags">${tags.map(t => `<span>${esc(t)}</span>`).join('')}${more > 0 ? `<span class="more">+${more}</span>` : ''}</div>` : ''}
  </div>
  <div class="pcard-foot">
    ${pl ? `<a class="btn-acc" href="${esc(pl.url)}"${pl.gate ? ` data-gate="${esc(app.id)}"` : ext(pl.url)} title="${esc(pl.label)}"><span class="lbl">${esc(pl.label)}</span>${icon('arrow')}</a>` : `<span class="btn-ghost-static">${esc(statusOf(app.status).label)}</span>`}
    <span class="sp"></span>
    ${downloadRepo ? `<span class="pcard-downloads" data-download-repo="${esc(downloadRepo)}"${downloadMatchOf(app) ? ` data-download-match="${esc(downloadMatchOf(app))}"` : ''} title="Downloads from GitHub releases" hidden>${icon('download')}<b></b><span class="u">downloads</span></span>` : ''}
    ${showsSourceIcon(app, pl) ? `<a class="ibtn" href="${esc(href(app.repoUrl, base))}" target="_blank" rel="noopener" title="Source on GitHub" aria-label="Source on GitHub">${icon('github')}</a>` : ''}
    <a class="details" href="${link}" data-app="${esc(app.id)}">Details${icon('chevron')}</a>
  </div>${opts.wide ? '</div>' : ''}
</article>`;
}

// ---------- YouTube ----------
export function youtubeId(url) {
  const m = String(url || '').match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/|v\/))([\w-]{11})/i);
  return m ? m[1] : (/^[\w-]{11}$/.test(url || '') ? url : '');
}
export const ytThumb = (id, q = 'hqdefault') => `https://i.ytimg.com/vi/${id}/${q}.jpg`;
export function ytEmbedHTML(id, title = 'Video', vertical = false) {
  return `<button type="button" class="yt-lite${vertical ? ' vert' : ''}" data-yt="${esc(id)}" aria-label="Play ${esc(title)}"><img src="${ytThumb(id, vertical ? 'hqdefault' : 'maxresdefault')}" onerror="this.onerror=null;this.src='${ytThumb(id)}'" alt="" loading="lazy"><span class="yt-play">${icon('playfill')}</span></button>`;
}
export function videoCardHTML(v) {
  return `<article class="vcard">${ytEmbedHTML(v.id, v.title)}<div class="vmeta"><h3>${esc(v.title)}</h3><span>${esc(fmtDate((v.published || '').slice(0, 10)))}${v.views >= 100 ? ` · ${esc(fmtViews(v.views))} views` : ''}</span></div></article>`;
}
export function shortCardHTML(v) {
  return `<button type="button" class="scard" data-short="${esc(v.id)}" aria-label="Play ${esc(v.title)}"><img src="${ytThumb(v.id, 'oardefault')}" onerror="this.onerror=null;this.src='${ytThumb(v.id)}'" alt="" loading="lazy"><span class="s-ov"><span class="yt-play sm">${icon('playfill')}</span><b>${esc(cleanTitle(v.title))}</b>${v.views >= 100 ? `<small>${esc(fmtViews(v.views))} views</small>` : ''}</span></button>`;
}
export const cleanTitle = t => String(t || '').replace(/\s#\S+/g, '').trim() || t;
export function fmtViews(n) { n = +n || 0; return n >= 1e6 ? (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M' : n >= 1e3 ? (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K' : String(n); }

// ---------- detail view (site dialog, app pages, hub preview) ----------
export function detailHTML(app, opts = {}) {
  const base = opts.base || '';
  const mb = opts.mediaBase || '';
  const cat = categoryOf(app.category);
  const st = statusOf(app.status);
  const shots = [app.cover, ...(app.screenshots || [])].filter(Boolean).filter((v, i, a) => a.indexOf(v) === i);
  const pl = primaryLink(app, base);
  const yt = youtubeId(app.videoUrl);
  // a video file uploaded with the app's media (mp4/webm) plays right on the page
  const vid = !yt && /\.(mp4|webm)$/i.test(app.videoUrl || '') && !/^https?:/i.test(app.videoUrl) ? app.videoUrl : '';
  const links = [];
  if (pl) links.push(`<a class="btn-acc lg" href="${esc(pl.url)}"${pl.gate ? ` data-gate="${esc(app.id)}"` : ext(pl.url)}>${esc(pl.label)}${icon('arrow')}</a>`);
  if (app.pageUrl && (!pl || app.pageUrl !== pl.raw)) links.push(`<a class="btn-soft" href="${esc(href(app.pageUrl, base))}"${ext(app.pageUrl)}>${icon('globe')}Product page</a>`);
  if (app.repoUrl && (!pl || app.repoUrl !== pl.raw)) links.push(`<a class="btn-soft" href="${esc(href(app.repoUrl, base))}" target="_blank" rel="noopener">${icon('github')}Source</a>`);
  if (app.docsUrl) links.push(`<a class="btn-soft" href="${esc(href(app.docsUrl, base))}"${ext(app.docsUrl)}>${icon('book')}Docs</a>`);
  if (app.videoUrl && !yt && !vid) links.push(`<a class="btn-soft" href="${esc(href(app.videoUrl, base))}" target="_blank" rel="noopener">${icon('video')}Watch video</a>`);
  if (!opts.preview) links.push(`<button type="button" class="btn-soft share" data-share="${esc(app.id)}">${icon('share')}<span>Share</span></button>`);
  return `<div class="detail" data-detail="${esc(app.id)}" style="${accentStyle(app)}">
  <header class="d-head">${appIcon(app, opts, 'lg')}<div class="d-title"><div class="d-row"><h2 id="dlg-title">${esc(app.name)}</h2>${app.version ? `<span class="ver-chip">${esc(app.version)}</span>` : ''}${statusPill(app, true)}${app.community ? `<span class="cpill">${icon('users')}Community</span>` : ''}</div><p>${esc(app.tagline)}</p>${byline(app, base)}</div></header>
  ${shots.length ? `<div class="d-gallery"><div class="d-stage"><img src="${esc(media(shots[0], mb))}" alt="${esc(app.name)} screenshot"></div>${shots.length > 1 ? `<div class="d-thumbs">${shots.map((s, i) => `<button type="button" class="${i ? '' : 'on'}" data-src="${esc(media(s, mb))}" aria-label="Screenshot ${i + 1}"><img src="${esc(media(s, mb))}" alt="" loading="lazy"></button>`).join('')}</div>` : ''}</div>` : `<div class="d-gallery">${coverHTML(app, opts)}</div>`}
  <div class="d-grid">
    <div class="d-main">
      ${app.description ? `<section><h4>Overview</h4><div class="d-desc md">${md(app.description, base)}</div></section>` : ''}
      ${yt ? `<section><h4>Video</h4><div class="d-video">${ytEmbedHTML(yt, app.name)}</div></section>` : ''}
      ${vid ? `<section><h4>Video</h4><div class="d-video"><video class="d-vid" src="${esc(media(vid, mb))}"${app.cover ? ` poster="${esc(media(app.cover, mb))}"` : ''} controls preload="metadata" playsinline></video></div></section>` : ''}
      ${(app.features || []).length ? `<section><h4>Highlights</h4><ul class="d-feats">${app.features.map(f => `<li>${icon('check')}<span>${esc(f)}</span></li>`).join('')}</ul></section>` : ''}
      ${app.installCommand ? `<section><h4>Get started</h4><div class="cmd"><code>${esc(app.installCommand)}</code><button type="button" class="copy" data-copy="${esc(app.installCommand)}">${icon('copy')}<span>Copy</span></button></div></section>` : ''}
      ${app.embedCode ? `<section><h4>${esc(app.embedTitle || 'More')}</h4><div class="embed-box">${opts.preview ? `<div class="embed-ph">${icon('code')}Custom embed shows here on the website</div>` : app.embedCode}</div></section>` : ''}
    </div>
    <aside class="d-side">
      <dl class="facts">
        <div><dt>Platform</dt><dd>${esc(app.platform || cat.label)}</dd></div>
        <div><dt>Status</dt><dd>${esc(st.label)}</dd></div>
        ${app.price ? `<div><dt>Price</dt><dd>${esc(app.price)}</dd></div>` : ''}
        ${app.version ? `<div><dt>Version</dt><dd>${esc(app.version)}</dd></div>` : ''}
        ${app.requirements ? `<div><dt>Requires</dt><dd>${esc(app.requirements)}</dd></div>` : ''}
        ${app.metricLabel ? `<div><dt>${esc(app.metricLabel)}</dt><dd>${esc(app.metricValue)}</dd></div>` : ''}
        ${app.updatedAt ? `<div><dt>Updated</dt><dd>${esc(fmtDate(app.updatedAt))}</dd></div>` : ''}
      </dl>
      ${(app.techStack || []).length ? `<h4>Built with</h4><div class="tags">${app.techStack.map(t => `<span>${esc(t)}</span>`).join('')}</div>` : ''}
      ${(app.changelog || []).length ? `<h4>Release notes</h4><ol class="log">${app.changelog.map(c => `<li><div><b>${esc(c.ver)}</b><span>${esc(c.date)}</span></div><p>${esc(c.note)}</p></li>`).join('')}</ol>` : ''}
    </aside>
  </div>
  ${links.length ? `<footer class="d-foot">${links.join('')}${app.paid ? `<p class="d-paid">${icon('lock')}<span>Secure checkout by Stripe. Your download is ready the moment you pay, and the link is emailed to you.</span></p>` : ''}</footer>` : ''}
</div>`;
}

export function fmtDate(iso) {
  if (!iso) return '';
  const d = new Date(iso + (iso.length === 10 ? 'T00:00:00' : ''));
  return isNaN(d) ? iso : d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function socialLinksHTML(socials = [], cls = 'socials') {
  if (!socials.length) return '';
  return `<div class="${cls}">${socials.map(s => { const m = SOCIALS[s.type] || SOCIALS.website; return `<a href="${esc(safeUrl(s.url))}"${ext(s.url)} title="${esc(s.label || m.label)}" aria-label="${esc(s.label || m.label)}">${icon(m.icon)}</a>`; }).join('')}</div>`;
}

// Fields that never leave the hub.
export const PRIVATE_FIELDS = ['notes', 'localPath', 'published', 'order', 'submission'];
// gateApi: the email-to-download service. With it, a gated app's download address never reaches the public site.
export function publicApp(app, gateApi) {
  const o = { ...app };
  for (const k of PRIVATE_FIELDS) delete o[k];
  delete o.emailGate;
  if (app.emailGate && typeof gateApi === 'string' && gateApi && (app.primaryUrl || app.repoUrl)) {
    const target = app.primaryUrl || app.repoUrl;
    o.gate = true; o.gateLabel = app.primaryLabel || 'Download';
    for (const k of ['primaryUrl', 'repoUrl', 'releaseRepo', 'releaseAssets']) delete o[k];
    if (o.pageUrl === target) delete o.pageUrl;
    if (o.docsUrl === target) delete o.docsUrl;
    if (/https?:|git@|\bgit\s+clone/i.test(o.installCommand || '')) delete o.installCommand;
    if (o.description && o.description.includes(target)) o.description = o.description.split(target).join('#get');
  }
  if (o.author) o.author = { name: o.author.name || '', url: o.author.url || '' };
  // Private repository (detected by auto-sync): no Source button or GitHub link on the public site.
  if (o.repoPrivate) delete o.repoUrl;
  delete o.repoPrivate; delete o.licensed;
  return o;
}

// ---------- Markdown (app descriptions) ----------
// A small, safe renderer: everything is escaped first, links go through safeUrl, and no raw HTML is ever passed on.
// Supports headings, paragraphs (single line breaks kept), **bold**, *italic*, ~~strike~~, `code`, fenced code, links,
// autolinks, images, bullet/numbered/task lists (nested by indent), quotes, rules and tables.
const MD_BLOCK = /^(\s{0,3}#{1,6}\s|\s*```|\s{0,3}>|\s*([-*+]|\d{1,3}[.)])\s+|\s{0,3}([-*_])(\s*\3){2,}\s*$)/;
function mdInline(s, base) {
  const keep = [];
  const put = h => `\u0000${keep.push(h) - 1}\u0000`;
  s = String(s).replace(/`([^`\n]+)`/g, (m, c) => put(`<code>${esc(c)}</code>`));
  s = s.replace(/!\[([^\]\n]*)\]\(\s*([^)\s]+)(?:\s+"[^"]*")?\s*\)/g, (m, alt, u) => { const h = href(u, base); return h && /^(https?:|\/|\.|[\w-]+\/)/i.test(h) ? put(`<img src="${esc(h)}" alt="${esc(alt)}" loading="lazy">`) : esc(alt); });
  s = s.replace(/\[([^\]\n]+)\]\(\s*([^)\s]+)(?:\s+"[^"]*")?\s*\)/g, (m, t, u) => { const h = href(u, base); return h ? put(`<a href="${esc(h)}"${ext(h)}>${mdInline(t, base)}</a>`) : esc(t); });
  s = s.replace(/(^|[\s(])(https?:\/\/[^\s<>()]+[^\s<>().,;:!?'"])/g, (m, pre, u) => pre + put(`<a href="${esc(u)}"${ext(u)}>${esc(u)}</a>`));
  s = esc(s)
    .replace(/\*\*(?=\S)([\s\S]*?\S)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^\w])__(?=\S)([\s\S]*?\S)__(?!\w)/g, '$1<strong>$2</strong>')
    .replace(/(^|[^*\w])\*(?=[^\s*])([^*\n]*?[^\s*])\*(?!\*)/g, '$1<em>$2</em>')
    .replace(/(^|[^\w])_(?=\S)([^_\n]*?\S)_(?!\w)/g, '$1<em>$2</em>')
    .replace(/~~(?=\S)([\s\S]*?\S)~~/g, '<del>$1</del>');
  return s.replace(/\u0000(\d+)\u0000/g, (m, i) => keep[+i]);
}
const mdCells = l => l.trim().replace(/^\||\|$/g, '').split(/(?<!\\)\|/).map(c => c.trim().replace(/\\\|/g, '|'));
export function md(src, base = '') {
  const L = String(src || '').replace(/\r\n?/g, '\n').replace(/\t/g, '    ').split('\n');
  const out = [];
  let i = 0;
  const indent = l => l.match(/^ */)[0].length;
  function list(min) {
    const first = L[i].match(/^(\s*)([-*+]|\d{1,3}[.)])\s+/);
    const ordered = /\d/.test(first[2]), start = ordered ? parseInt(first[2], 10) : 1, ind = first[1].length;
    const items = [];
    while (i < L.length) {
      const m = L[i].match(/^(\s*)([-*+]|\d{1,3}[.)])\s+(.*)$/);
      if (!m || m[1].length < min || m[1].length > ind + 1 || /\d/.test(m[2]) !== ordered) break;
      if (m[1].length < ind) break;
      let text = m[3]; i++;
      while (i < L.length && L[i].trim() && !/^\s*([-*+]|\d{1,3}[.)])\s+/.test(L[i]) && !MD_BLOCK.test(L[i]) && indent(L[i]) > ind) text += '\n' + L[i].trim(), i++;
      let sub = '';
      while (i < L.length && /^\s*([-*+]|\d{1,3}[.)])\s+/.test(L[i]) && indent(L[i]) > ind + 1) sub += list(ind + 2);
      const task = text.match(/^\[([ xX])\]\s+(.*)$/s);
      items.push(task ? `<li class="task"><span class="tick${task[1] === ' ' ? '' : ' on'}" aria-hidden="true"></span>${mdInline(task[2], base).replace(/\n/g, '<br>')}${sub}</li>`
        : `<li>${mdInline(text, base).replace(/\n/g, '<br>')}${sub}</li>`);
      while (i < L.length && !L[i].trim() && i + 1 < L.length && /^\s*([-*+]|\d{1,3}[.)])\s+/.test(L[i + 1]) && indent(L[i + 1]) >= ind) i++;
    }
    return ordered ? `<ol${start !== 1 ? ` start="${start}"` : ''}>${items.join('')}</ol>` : `<ul>${items.join('')}</ul>`;
  }
  while (i < L.length) {
    const l = L[i];
    if (!l.trim()) { i++; continue; }
    let m;
    if ((m = l.match(/^\s*```\s*([\w+-]*)/))) {
      const code = []; i++;
      while (i < L.length && !/^\s*```\s*$/.test(L[i])) code.push(L[i++]);
      i++;
      out.push(`<pre><code>${esc(code.join('\n'))}</code></pre>`);
      continue;
    }
    if ((m = l.match(/^\s{0,3}(#{1,6})\s+(.*?)\s*#*\s*$/))) { const n = Math.min(6, m[1].length + 2); out.push(`<h${n}>${mdInline(m[2], base)}</h${n}>`); i++; continue; }
    if (/^\s{0,3}([-*_])(\s*\1){2,}\s*$/.test(l)) { out.push('<hr>'); i++; continue; }
    if (/^\s{0,3}>/.test(l)) {
      const q = [];
      while (i < L.length && /^\s{0,3}>/.test(L[i])) q.push(L[i++].replace(/^\s{0,3}>\s?/, ''));
      out.push(`<blockquote>${md(q.join('\n'), base)}</blockquote>`);
      continue;
    }
    if (l.includes('|') && i + 1 < L.length && /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(L[i + 1])) {
      const head = mdCells(l), align = mdCells(L[i + 1]).map(c => (/^:-+:$/.test(c) ? 'center' : /-:$/.test(c) ? 'right' : ''));
      i += 2;
      const rows = [];
      while (i < L.length && L[i].includes('|') && L[i].trim()) rows.push(mdCells(L[i++]));
      const cell = (tag, c, k) => `<${tag}${align[k] ? ` style="text-align:${align[k]}"` : ''}>${mdInline(c, base)}</${tag}>`;
      out.push(`<div class="md-table"><table><thead><tr>${head.map((c, k) => cell('th', c, k)).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${head.map((_, k) => cell('td', r[k] || '', k)).join('')}</tr>`).join('')}</tbody></table></div>`);
      continue;
    }
    if (/^\s*([-*+]|\d{1,3}[.)])\s+/.test(l)) { out.push(list(0)); continue; }
    const p = [];
    while (i < L.length && L[i].trim() && !(p.length && MD_BLOCK.test(L[i])) && !(L[i].includes('|') && i + 1 < L.length && /^\s*\|?\s*:?-{2,}/.test(L[i + 1]))) p.push(L[i++].trim());
    if (!p.length) { p.push(L[i++].trim()); }
    out.push(`<p>${p.map(x => mdInline(x, base)).join('<br>')}</p>`);
  }
  return out.join('\n');
}
// Plain text for excerpts, meta descriptions and search snippets.
export function mdPlain(src) {
  return String(src || '').replace(/\r\n?/g, '\n')
    .replace(/```[\s\S]*?(```|$)/g, ' ')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^\s{0,3}#{1,6}\s+/gm, '').replace(/^\s{0,3}>\s?/gm, '').replace(/^\s*([-*+]|\d{1,3}[.)])\s+(\[[ xX]\]\s+)?/gm, '')
    .replace(/^\s*\|?\s*:?-{2,}.*$/gm, '').replace(/\|/g, ' ')
    .replace(/(\*\*|__|~~|`)/g, '').replace(/(^|[\s(])[*_](\S[^*_\n]*?)[*_](?=[\s).,;:!?]|$)/g, '$1$2')
    .replace(/^\s{0,3}([-*_])(\s*\1){2,}\s*$/gm, '')
    .replace(/\s+/g, ' ').trim();
}
export const clip = (s, n) => (s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : s);

// ---------- perks ----------
// [icon, label, what it is]. Shared by the hub's perk maker, the site builder and the site script.
export const PERK_KINDS = {
  submit: ['send', 'App submissions', 'Unlocks the form to submit your own apps to the showcase.'],
  download: ['download', 'Exclusive download', 'A file, build or bonus only perk holders can download.'],
  early: ['zap', 'Early access', 'Get an app or update before everyone else.'],
  discount: ['tag', 'Discount code', 'A code that takes money off something.'],
  discord: ['discord', 'Discord role', 'A private channel or a special role in the community.'],
  secret: ['lock', 'Secret message', 'Hidden text: a story, tips, a thank-you, a puzzle.'],
  key: ['key', 'Licence key', 'A unique key for each holder, from a list you paste in.'],
  wall: ['crown', 'Wall badge', 'A special spot on the supporters wall.'],
  credits: ['film', 'In the credits', 'Their name in an app’s credits or about screen.'],
  vote: ['chart', 'Roadmap vote', 'A say in what gets built next.'],
  beta: ['activity', 'Beta tester', 'Test new builds and report bugs first.'],
  support: ['mail', 'Priority support', 'A faster line to you for help.'],
  shoutout: ['megaphone', 'Shout-out', 'A thank-you in a video, stream or post.'],
  source: ['github', 'Source access', 'Access to a private repository.'],
  assets: ['palette', 'Asset pack', 'Wallpapers, icons, sounds, presets.'],
  custom: ['gift', 'Custom perk', 'Anything you like.']
};
export const perkKind = t => PERK_KINDS[t] || PERK_KINDS.custom;
const perkDate = d => { try { return new Date(d + 'T00:00:00').toLocaleDateString('en', { day: 'numeric', month: 'short', year: 'numeric' }); } catch { return d; } };
const names = (list, all) => { const n = list.map(a => a.name); return n.length < 2 ? n[0] || '' : `${n.slice(0, -1).join(', ')} ${all ? 'and' : 'or'} ${n.at(-1)}`; };
// How a perk is unlocked, as short lines. money(amount) formats a price in the site currency.
export function perkHowHTML(p, money = v => String(v), base = '') {
  const li = (ic, html) => `<li>${icon(ic)}<span>${html}</span></li>`;
  return (p.how || []).map(h =>
    h.k === 'total' ? li('can', `Support with <b>${esc(money(h.amount))}</b> or more in total`)
    : h.k === 'buy' ? li('card', `Get it on its own for <b>${esc(money(h.price))}</b>`)
    : h.k === 'apps' ? li('store', `Included when you buy ${h.apps.map(a => `<a href="${base}apps/${encodeURIComponent(a.id)}/" data-app="${esc(a.id)}">${esc(a.name)}</a>`).join(h.all ? ' and ' : ' or ')}`)
    : h.k === 'drop' ? li('sparkles', `Lucky drop: ${h.apps.map(a => `<b>${esc(+a.chance >= 1 ? Math.round(a.chance) : a.chance)}%</b> chance when you download <a href="${base}apps/${encodeURIComponent(a.id)}/" data-app="${esc(a.id)}">${esc(a.name)}</a>`).join(', ')}`)
    : li('gift', 'Given by the studio to people who help out')).join('');
}
export function perkCardHTML(p, o = {}) {
  const a = accentOf(p.accent), [, kind] = perkKind(p.type);
  const buy = (p.how || []).find(h => h.k === 'buy');
  const flags = [p.left != null ? (p.left ? `Only ${p.left} left` : 'All claimed') : '', p.endsAt ? `Until ${perkDate(p.endsAt)}` : '', p.days ? `Lasts ${p.days} day${p.days === 1 ? '' : 's'}` : ''].filter(Boolean);
  return `<article class="perk${p.left === 0 ? ' gone' : ''}" data-perk="${esc(p.id)}" style="--a1:${a.a1};--a2:${a.a2}">
  <div class="perk-glow"></div>
  <div class="perk-top"><span class="perk-ico">${icon(p.icon || perkKind(p.type)[0])}</span><span class="perk-kind">${esc(kind)}</span>${flags.length ? `<span class="perk-flag">${esc(flags[0])}</span>` : ''}</div>
  <h3>${esc(p.name)}</h3>${p.tagline ? `<p>${esc(p.tagline)}</p>` : ''}
  <ul class="perk-how">${perkHowHTML(p, o.money, o.base || '')}</ul>
  <div class="perk-foot">${buy && p.left !== 0 ? `<a class="btn-acc" href="${esc(buy.url)}" target="_blank" rel="noopener">${icon('card')}${esc(buy.label || 'Get this perk')}</a>` : ''}<span class="sp"></span>${p.holders ? `<span class="perk-holders">${icon('users')}${p.holders} ${p.holders === 1 ? 'holder' : 'holders'}</span>` : ''}${flags.slice(1).map(f => `<span class="perk-holders">${esc(f)}</span>`).join('')}</div>
</article>`;
}

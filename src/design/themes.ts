// Design tokens (see DESIGN.md): colors and fonts, applied by Layout.astro as
// CSS custom properties on <html>. DESIGN.md records the alternatives that
// were considered.

type Palette = {
  bg: string; // page background
  bgAlt: string; // cards, hover highlights
  bgSide: string; // sidebar panel
  text: string;
  muted: string;
  rule: string; // borders and grid lines
  accent: string; // name, links, current page, timeline bars
  accent2: string; // reserved second color (focus rings for now)
  onAccent: string; // text on accent fills
};

/**
 * Color palettes; clicking the logo cycles through them, and the first is the
 * default. All pass WCAG AA (4.5:1) for text, muted text and accent on every
 * background, and for on-accent text on the accent (see DESIGN.md).
 */
export const palettes: { id: string; name: string; colors: Palette }[] = [
  {
    id: 'sandstone-teal',
    name: 'Sandstone & Teal',
    colors: {
      bg: '#f7f3ee', bgAlt: '#ece4da', bgSide: '#ebe8e4', text: '#261c28', muted: '#6b5d6e',
      rule: '#ddd1c4', accent: '#1c7166', accent2: '#7a3b69', onAccent: '#ffffff',
    },
  },
  {
    id: 'sandstone-plum',
    name: 'Sandstone & Plum',
    colors: {
      bg: '#f7f3ee', bgAlt: '#ece4da', bgSide: '#ebe8e4', text: '#261c28', muted: '#6b5d6e',
      rule: '#ddd1c4', accent: '#7a3b69', accent2: '#1c7166', onAccent: '#ffffff',
    },
  },
  {
    id: 'paper-rust',
    name: 'Paper & Rust',
    colors: {
      bg: '#faf6f0', bgAlt: '#f0e7da', bgSide: '#ede6dc', text: '#2a211c', muted: '#6e6259',
      rule: '#e0d4c5', accent: '#b0442a', accent2: '#3c5f8c', onAccent: '#ffffff',
    },
  },
  {
    id: 'lab-notebook',
    name: 'Lab Notebook',
    colors: {
      bg: '#f2f5ee', bgAlt: '#e3eadb', bgSide: '#e5e9df', text: '#1f2a22', muted: '#5a6a5d',
      rule: '#d2dccb', accent: '#1a6e52', accent2: '#a85c1a', onAccent: '#ffffff',
    },
  },
  {
    id: 'ink-cobalt',
    name: 'Ink & Cobalt',
    colors: {
      bg: '#fafafa', bgAlt: '#eeeef1', bgSide: '#f0f0f2', text: '#18181b', muted: '#5b5b66',
      rule: '#e1e1e6', accent: '#2058d6', accent2: '#3f3f46', onAccent: '#ffffff',
    },
  },
  {
    id: 'midnight-coral',
    name: 'Midnight & Coral',
    colors: {
      bg: '#141a2e', bgAlt: '#1f2742', bgSide: '#0f1426', text: '#eef0f7', muted: '#a3a9c2',
      rule: '#2c3554', accent: '#ff7a59', accent2: '#6ea8ff', onAccent: '#141a2e',
    },
  },
  {
    id: 'forest-gold',
    name: 'Forest & Gold',
    colors: {
      bg: '#15221c', bgAlt: '#1e2f27', bgSide: '#101b16', text: '#eef0e6', muted: '#a7b3a8',
      rule: '#2b3e34', accent: '#d1b056', accent2: '#4aad8b', onAccent: '#15221c',
    },
  },
];

/** A palette as CSS custom properties: [name, value] pairs, e.g. ['--bg', '#f7f3ee']. */
export const paletteVars = (p: Palette): [string, string][] => [
  ['--bg', p.bg], ['--bg-alt', p.bgAlt], ['--bg-side', p.bgSide],
  ['--text', p.text], ['--muted', p.muted], ['--rule', p.rule],
  ['--accent', p.accent], ['--accent-2', p.accent2], ['--on-accent', p.onAccent],
];

/** Bricolage Grotesque headings, Inter body, Chivo Mono labels. */
export const fonts = {
  display: "'Bricolage Grotesque', system-ui, sans-serif",
  body: "'Inter', system-ui, sans-serif",
  mono: "'Chivo Mono', ui-monospace, monospace",
  /** Google Fonts css2 family queries. */
  families: [
    'Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,200..800',
    'Inter:ital,opsz,wght@0,14..32,400..700;1,14..32,400..700',
    'Chivo+Mono:wght@400;500',
  ],
};

export const fontsHref = `https://fonts.googleapis.com/css2?${fonts.families.map((f) => `family=${f}`).join('&')}&display=swap`;

/** Default palette and the fonts, as an inline style for <html>. */
export const tokenStyle = [
  ...paletteVars(palettes[0].colors),
  ['--font-display', fonts.display], ['--font-body', fonts.body], ['--font-mono', fonts.mono],
]
  .map(([k, v]) => `${k}:${v}`)
  .join(';');

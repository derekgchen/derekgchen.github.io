// Design tokens (see DESIGN.md): colors and fonts, applied by Layout.astro as
// CSS custom properties on <html>. DESIGN.md records the alternatives that
// were considered.

/** Sandstone & Teal. */
export const palette = {
  bg: '#f7f3ee', // page background
  bgAlt: '#ece4da', // cards, hover highlights
  bgSide: '#ebe8e4', // sidebar panel
  text: '#261c28',
  muted: '#6b5d6e',
  rule: '#ddd1c4', // borders and grid lines
  accent: '#1c7166', // blue-green: name, links, current page, timeline bars
  accent2: '#7a3b69', // plum: reserved second color (focus rings for now)
  onAccent: '#ffffff', // text on timeline bars
};

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

export const tokenStyle = [
  ['bg', palette.bg], ['bg-alt', palette.bgAlt], ['bg-side', palette.bgSide],
  ['text', palette.text], ['muted', palette.muted], ['rule', palette.rule],
  ['accent', palette.accent], ['accent-2', palette.accent2], ['on-accent', palette.onAccent],
  ['font-display', fonts.display], ['font-body', fonts.body], ['font-mono', fonts.mono],
]
  .map(([k, v]) => `--${k}:${v}`)
  .join(';');

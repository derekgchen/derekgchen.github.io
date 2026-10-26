# Design decisions

Internal record of the site's visual design: what was chosen, why, and what
else was considered, so any decision can be revisited later. Not published
(Astro only builds `src/` and `public/`), but visible in the public repo.

The live values are the tokens in [`src/design/themes.ts`](src/design/themes.ts).
If this file and that one disagree, the code wins; update this file.

## Status

| Decision | Status | Choice |
|---|---|---|
| Color palette | **Locked** (2026-10-25; accents swapped 2026-10-26) | Sandstone & Teal: blue-green primary, plum secondary |
| Heading font | **Locked** (2026-10-25) | Bricolage Grotesque |
| Body font | **Locked** (2026-10-25) | Inter |
| Italic emphasis in headings | Moot | No heading uses italic emphasis (Bricolage has no italic) |
| Bricolage width / weight | **Locked** (2026-10-26) | Default width; weight 600 (700 for the sidebar name) |
| Monospace (labels, dates) | **Locked** (2026-10-26) | Chivo Mono |
| Layout | **Locked** (2026-10-26) | Centered sidebar on a gray panel (name, degrees, contact icons, nav) + content; About / Experience (Writing unlisted) |
| Third accent color | Deferred | Gold, added when needed |
| Colophon | Decided | One line in the footer, no separate page |

---

## Colors: Sandstone & Teal

A warm, light palette: sandstone paper with a blue-green primary and a plum
secondary. Chosen as "Sandstone & Plum" over seven other palettes in the design
studio (2026-10-25); on 2026-10-26 the accents were swapped so blue-green leads,
and it was shifted ~12° greener and darkened slightly (`#2f6f73` → `#2e6f66`)
so it passes AA on every background. On 2026-10-26 it was made more
saturated (HSL saturation 0.41 → 0.60, slightly darker): `#2e6f66` → `#1c7166`.
Only the live palette is in `themes.ts`; this file records the others.

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#f7f3ee` | Page background |
| `--bg-alt` | `#ece4da` | Hover highlights, cards |
| `--bg-side` | `#ebe8e4` | Sidebar panel (light warm gray) |
| `--text` | `#261c28` | Body text |
| `--muted` | `#6b5d6e` | Secondary text, labels |
| `--rule` | `#ddd1c4` | Borders, grid lines |
| `--accent` | `#1c7166` | **Blue-green.** Primary: name, links, current page, timeline bars, tabs |
| `--accent-2` | `#7a3b69` | **Plum.** Reserved second color; only focus rings use it so far |
| `--on-accent` | `#ffffff` | Text on accent fills (timeline bars) |

**One accent in use for now.** Blue-green carries everything; plum is reserved
as the second color and gold as a possible third. Add colors only when
something needs them.

**Third color, when needed: gold `#a87420`** (from the original Plum palette).
Gold on `--bg` is only 3.7:1, below the 4.5:1 needed for body-size text. Use it
as-is for fills and large type, and darken it before using it for small text.

### Contrast (WCAG 2.x)

| Pair | Ratio | Passes |
|---|---|---|
| text on bg | 14.9 | AAA |
| muted on bg | 5.6 | AA |
| blue-green on bg | 5.3 | AA |
| blue-green on bg-alt | 4.6 | AA |
| white on blue-green | 5.8 | AA |
| plum on bg | 7.2 | AAA |
| plum on bg-alt | 6.3 | AA |
| white on plum | 7.9 | AAA |
| on-deep on deep | 13.2 | AAA |
| accent-on-deep on deep | 8.8 | AAA |
| gold on bg | 3.7 | Large text only |

### Palettes considered

These were compared in a temporary design studio (since removed).

| Palette | Mode | Accents | Notes |
|---|---|---|---|
| **Sandstone & Teal** | light | `#1c7166` `#7a3b69` (`#a87420`) | **Live**: Plum with the accents swapped |
| Sandstone & Plum | light | `#7a3b69` `#2f6f73` (`#a87420`) | Original pick (2026-10-25) |
| Paper & Rust | light | `#c4502f` `#3c5f8c` `#5e7f62` | Closest to Montgomery Bohde's site |
| Forest & Gold | dark | `#c9a84c` `#4aad8b` `#b9765b` | The original (pre-2026) site |
| Ink & Cobalt | light | `#2563eb` `#3f3f46` `#8b8b94` | Minimal, near-monochrome |
| Lab Notebook | light | `#1f7a5c` `#b5651d` `#6b5ca5` | Green paper |
| Petri Dish | light | `#c2185b` `#00897b` `#5c6bc0` | Magenta and teal; brightest |
| Midnight & Coral | dark | `#ff7a59` `#6ea8ff` `#b48ef0` | Navy |
| Graphite | dark | `#e9b44c` `#7aa2f7` `#9ece6a` | Neutral dark |

---

## Typography

### Headings: Bricolage Grotesque

A characterful grotesque from Google Fonts (variable: optical size 12–96, width
75–100%, weight 200–800). What made it the pick: the shape of the **f**, the ink
traps where strokes meet, and how slim it stays at large sizes while remaining
a sans-serif.

- Load: `Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,200..800`
- Optical size adjusts automatically with font size; letters narrow at large sizes.
- **Width is adjustable** (`font-stretch: 75%`–`100%`). The condensed, lighter
  setting (75%, weight 400) keeps the same letterforms but is tall and slim.
- **No italic.** Browsers fake one by slanting the upright letters. See
  [Open questions](#open-questions).

### Body: Inter

Inter for all running text, UI and lists: neutral and very readable, so it
lets the headings carry the personality.

- Load: `Inter:ital,opsz,wght@0,14..32,400..700;1,14..32,400..700`
- Has a true italic and optical sizes.

### Monospace: Chivo Mono

Used for small labels: dates on roles and posts, the timeline's year axis, and
the small "Publications" / "Positions" / "Latest writing" headings.

- Load: `Chivo+Mono:wght@400;500`
- Chosen because it is a grotesque like Bricolage, so the labels feel related
  to the headings rather than like code. JetBrains Mono (the placeholder) read
  as a "code editor" third voice.
- Runner-up: **Inter with tabular figures** (`font-variant-numeric:
  tabular-nums`), which would make the site two fonts. Also compared: Spline
  Sans Mono (closest in quirkiness), Fragment Mono, Geist Mono, DM Mono,
  Martian Mono (too heavy).

### Why a sans heading over Inter

Pairing a serif heading with Inter is the easy route to contrast. Bricolage was
picked anyway because its shapes differ enough from Inter (ink traps,
narrower proportions, quirkier letters) for the pairing to still read as two
voices.

### Heading fonts considered (all with Inter body)

| Font | Kind | Notes |
|---|---|---|
| **Bricolage Grotesque** | sans | **Chosen.** Distinctive f, ink traps, slim at size. No italic |
| DM Serif Display | serif | **Runner-up.** Heavy, high-contrast, confident. Real italic |
| Fraunces | serif | Warm and slightly playful; expressive italic |
| Newsreader | serif | Calm, scholarly; safest serif |
| Source Serif 4 | serif | Neutral, sturdy, academic |
| Instrument Serif | serif | Tall, narrow, magazine-like; single weight |
| Inter Display | sans | One-font look; reads "startup" |
| Space Grotesk | sans | Geometric, techy; no italic |

### Bricolage alternatives considered

Compared on a specimen sheet for similar character (headline plus "fluffy
fjord, fifty filters" to compare the f).

| Font | Similarity to Bricolage | Real italic |
|---|---|---|
| Familjen Grotesk | Closest: ink traps, quirky grotesque; rounder, wider | Yes |
| Instrument Sans (condensed, `wdth` 75) | Narrow, sharp, modern | Yes |
| Archivo (condensed, `wdth` ~70) | Very narrow classic grotesque; more serious | Yes |
| Anybody (condensed, `wdth` ~65) | Most extreme narrowness; quirky, loud | Yes |
| Schibsted Grotesk | Newspaper grotesque; less character | Yes |
| Darker Grotesque | Thin, tall, unusual shapes; quieter | No |
| Funnel Display | Quirky, wide, bold; not slim | No |

**If the missing italic ever becomes a problem,** Familjen Grotesk and
Instrument Sans (condensed) are the closest swaps that have one.

---

## Layout

**Draft, built 2026-10-25.** A mostly-minimal, multi-page site. Sidebar and
content form one centered unit (220px sidebar, 72px gap, 820px content) whose
width is the same on every page, so the sidebar never moves when navigating.

- **Sidebar panel** (2026-10-26): a full-bleed band of light gray `--bg-side`
  (`#ebe8e4`) from the window's left edge to 16px past the sidebar column,
  full height. On phones it's the header's background. Chosen over
  light ochre (`#f1e3c2`) and over a rounded card behind the sidebar. Contrast
  on it: text 13.4, muted 5.0, accent 4.8 (all AA).
- **Sidebar** (sticky, sized to its content, no divider line): name (32px,
  bold, accent color); degrees
  ("B.S. CS + Biology, MIT '26" / "M.Eng. CS, MIT '27", from `site.degrees`);
  contact icons (Email, GitHub, LinkedIn: Tabler Icons "filled" set, MIT
  license, 22px in the accent color; chosen 2026-10-26 over Phosphor, Remix,
  Font Awesome and Iconoir); nav, with Experience as an
  always-open group of its category pages. The current page is bold and in the
  accent color. No photo. Below 860px it becomes a compact header.
- **About** (`/`): photo (floated right), "Hi, I'm Derek.", intro with links
  into Experience, latest writing. Text column capped at 600px.
- **Experience**: one page per category, listed as an always-open group in the
  sidebar nav (About / Experience › Research, Industry, Teaching & Leadership,
  Honors / Writing). Pages are `/experience/research/`, `/industry/`,
  `/teaching/`, `/honors/` (from `experiencePages` in `experience.ts`);
  `/experience/` redirects to Research. The group's items are smaller (14px vs
  17px) and indented 20px with no rule line, and its last item is a Résumé ↗
  link to the PDF. Each page: the category as its title, then a timeline of
  only that category's
  bars, all in the accent color (no legend), then the entries. Honors has no
  timeline. Hovering a bar shows a tooltip (role, dates, summary) and
  highlights its entry; hovering an entry highlights its bars. Entries have
  their own anchors (`/experience/research/#barzilay-group`). `pinned`
  entries list first in their category (MIT Science Olympiad). The title and
  timeline use the full 820px; the text below (publications, entries, honors)
  is capped at 680px. (Earlier version: one page with in-page tabs.) On phones the group
  flattens into the nav row. Category names (2026-10-26): "Industry" kept
  ("Internships" felt odd); "Teaching & Service" renamed "Teaching &
  Leadership", since it holds the Tournament Director and officer roles.
- **Writing** (`/writing/`): Markdown posts in `src/content/writing/`, with
  drafts (dev only) and an RSS feed at `/rss.xml`. Text column capped at 600px.
  **Unlisted for now** (2026-10-26, `site.writingListed: false`): not in the
  nav, no RSS link in page headers, `noindex` on its pages; `/writing/` still
  works by direct link. Flip the flag to publish it.
- **About** "Recently": a few personal, undated lines from `src/data/updates.ts`
  (not résumé items; those live on Experience).

Publications live on the Experience page's Research tab, between the
timeline and the positions: the timeline stays in the same place on every
tab, and publications are the first tab-specific content. (Briefly tried on
About instead, 2026-10-25.) If the list grows long, consider a separate
Research page with publications plus current projects.

History: a top nav was built first, then a full-height left sidebar with photo
and labeled contact links, then this version.

Three earlier single-page mockups were compared (since removed):

- **A · Paper**: sticky left sidebar (name, photo, nav, contact), large display
  headline, alternating section bands, a dark awards band. Inspired by
  [Montgomery Bohde's site](https://www.mbohde.com/).
- **B · Dark**: the original site's structure (top nav, hero with the spinning
  photo ring, numbered sections), extended with the timeline and new sections.
- **C · Minimal**: narrow single column, mostly text, the timeline as the only
  visual element. In the spirit of Eric Zhang's and Albert Tam's sites.

### Fixed regardless of layout

- **Experience timeline** (`src/components/Timeline.astro`, data in
  `src/data/experience.ts`). Gantt-style bars for one category per page, all
  in the accent color. Hovering a bar shows a tooltip; bars link to their
  entries.
  Roles with a notable sub-period (e.g. MIT Science Olympiad: planning
  committee Sep 2022 – present, Tournament Director Mar 2024 – Feb 2026) use
  `highlights` in `experience.ts`: the full bar is solid accent and the
  highlighted period is a lighter bar inset within it (enclosed above and
  below), each part has its own hover tooltip, and the
  list shows the org as a heading with each role beneath it (no overall date
  range on the heading; each role has its own).
  All MIT course staff positions are one entry (`course-staff`) on its own
  "Teaching" row (`track`), set apart by a small gap (no label). It uses `periods` with per-period labels:
  one merged bar for the lab assistant stretch ("6.121 & 6.102 LA", Fall 2024 –
  Fall 2025) and one for "6.102 TA" (Spring 2026).
  **Width and scrolling:** each month gets at least 14px (18px on phones). While
  the whole range fits, the timeline fills its column and doesn't scroll (true
  on desktop as of 2026). Once it outgrows the column (more years, or any
  phone), it scrolls sideways, opens scrolled to the present, and fades the edge
  that has more to see. Bar labels stay pinned to the visible left edge, so a
  bar that starts off-screen still shows its name (bars clip with `overflow:
  clip`, which allows sticky labels; labels carry a backing in the bar color
  so they stay readable over a lighter highlight segment). In the list it is a single
  "Course Staff · MIT" entry whose `roles` name every position with its terms,
  graders included. Fall is drawn Sep–Dec and Spring Feb–May. (Tried first:
  one bar per semester, with a second row for the overlapping 6.102 LA term.)
- **Content is data.** Experience, papers, awards and "Recently" live in
  `src/data/` so text changes never touch markup.
- **Static and fast.** No client-side framework; the only JavaScript is the
  timeline's tooltips and label fitting, plus entry highlighting on Experience. React is available later via `npx astro add react`
  for interactive demos.
- **Colophon** is one footer line, e.g. "Set in Bricolage Grotesque, Inter, and Chivo Mono.
  Built with Astro."

---

## Open questions

1. **Third accent:** when and where gold (or plum) enters.

## How to change things

- **Change a color or font:** edit `palette` or `fonts` in
  `src/design/themes.ts`.
- **Change content:** edit `src/data/` (`experience.ts`, `profile.ts`,
  `updates.ts`, `site.ts`).
- After a design change, update the tables above so this record stays true.

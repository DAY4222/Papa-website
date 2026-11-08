# JSK Cleaning: design tokens

**Source.** The 5 Figma screenshots (Home, Residential, Commercial, Forensic, Contact).
All five frames are the same **1440 px** design width shown at different zoom levels
(1256 / 1150 / 1150 / 668 / 1409 px on screen). Every value below has been converted back
to 1440-frame pixels.

**Method.** Colours are medians of flat areas. Three of the screenshots are lossy WebP,
so allow ±2 levels of noise. Sizes come from pixel measurement. Fonts were identified by
fitting rendered text widths against real font metrics.

**No brand guide.** None was attached and none is in the repo, so nothing could be checked
against one. Instead, every place where **the screenshots disagree with each other** is
flagged with ⚠️ below.

**How disagreements were handled.** The build uses one value per role, usually the
majority, and section 0 lists every alternative so you can choose. The exception is the
**page hero backgrounds**: they look like deliberate per-page art direction, so each page
keeps its own.

The tokens live as CSS custom properties at the top of `assets/css/styles.css`.

---

## 0. Flagged disagreements (please confirm)

| # | Topic | What the screenshots show | Used in the build |
|---|---|---|---|
| 1 | **CTA orange** | `#FE791D` on Home, Residential and Commercial; `#EF803A` on Forensic ("Text Us 24/7") and Contact ("Submit") | `#FE791D` everywhere |
| 2 | **Brand blue** | `#54A4DF` for Learn More, Residential steps, Commercial circle and chips; `#67A3DA` for Forensic step circles and the Contact hero blob | `#54A4DF` (the blob is artwork, so it is unchanged) |
| 3 | **Header background** | Tinted `#EEF6FD` (with a slight `#E9F2F8` top) on 4 pages; **white** with a 1 px `#92B8D9` rule on Contact | Tinted on every page |
| 4 | **Page body background** | White below the hero on Home, Commercial and Forensic; `#FAFAFA` on Residential and Contact | White everywhere (cards and form stay `#FAFAFA`) |
| 5 | **Footer typeface** | Footer is set in **Inter** (fits 16.0 px exactly); everything else is Helvetica | Inter in the footer, as designed. Switching it to Helvetica saves a 48 KB font download |
| 6 | **Section heading size** | 32 px everywhere, except Forensic "What to Expect" at **48 px** | 32 px |
| 7 | **Step titles** | Residential: condensed, navy, 20 px. Forensic: Helvetica **Bold, black**, 20 px | Condensed navy on both |
| 8 | **"Plan / Certified / Sensitivity" section** | Residential and Commercial: full-bleed watercolour texture with a blue panel. Forensic: flat `#EFF6FB` inset box (r≈12) with a grey-blue `#DAE2EB` panel | Watercolour version on all three (the Forensic calmer look may be intentional; see open questions) |
| 9 | **Bullet panel colour** | Residential `#C6E0F5`; Commercial `#CEDEEC`; Forensic `#DAE2EB` | `#C6E0F5` at 85% opacity |
| 10 | **Lead-text line height** | 48 px (1.6) almost everywhere; Home map paragraph **42 px**; Residential plan paragraph **40 px** | 48 px, except the map paragraph, which keeps 1.4 (≈42 px) |
| 11 | **Hero backgrounds** | Residential gradient `#B8D9F0 → #FAFAFA` (left to right); Commercial `#C8E0F2 → #FDFDFD`; Forensic **reversed** `#FFFFFF → #C1DAF0`; Contact **flat** `#A2C7E8` | Kept per page (the Forensic image's own background needs the reversed gradient) |
| 12 | **Card heights in a row** | The 3rd card is shorter than its neighbours (Home, Residential) | Cards in a row are equal height, with Learn More buttons aligned |
| 13 | **Image-well blue** | `#D9E9F3` (Home) vs `#DCE9F4` (Forensic, Contact) | `#DCE9F4` (likely compression noise) |
| 14 | **Section spacing** | 24 / 48 / 56 / 64 / 87 / 102 / 140 px between sections | 48 px rhythm. 24 px right after a hero, 64 px after the client logos, 96 px before the Home map |
| 15 | **Logo navy vs UI navy** | Logo artwork `#1A2B57`; UI navy (band, text) `#142C5A` | Both kept: the logo is artwork |

---

## 1. Colour

### Brand

| Token | Hex | Role / where |
|---|---|---|
| `--color-navy` | `#142C5A` | Trust band; nav links; card and step titles; navy headings ("Serving Toronto…", "Working Across Industries"); focus ring |
| `--color-orange` | `#FE791D` | Primary CTA background ("Request a Free Quote", "Text Us 24/7", "Submit") ⚠️ #1 |
| `--color-blue` | `#54A4DF` | Secondary button (Learn More); step circles; chip text, icon and border; Commercial hero circle ⚠️ #2 |

### Neutrals

| Token | Hex | Role |
|---|---|---|
| `--color-ink` | `#000000` | Body text, headings, **all button labels** (black on orange and on blue) |
| `--color-white` | `#FFFFFF` | Page body; trust-band text; step numerals |
| `--color-page` | `#FAFAFA` | Home hero area, card background, form container and inputs |
| `--color-placeholder` | `#848484` | Input placeholders (see contrast) |
| `--color-border-card` | `#E5E5E5` | 1 px card border |
| `--color-border-input` | `#D6D6D6` | 2 px input border |
| `--color-border-form` | `#848484` | 1.5 px form-container border |
| `--color-connector` | `#B0B0B0` | 2 px line between step circles |

### Blue tints

| Token | Hex | Role |
|---|---|---|
| `--color-tint-50` | `#EEF6FD` | Header and footer background (Forensic and Contact footer measure `#EFF6FB`) |
| `--color-tint-100` | `#DCE9F4` | Icon wells in cards; Upload Photo area |
| `--color-chip-bg` | `#DDEDFA` | Industry chips |
| `--color-panel` | `#C6E0F5` | Bullet panel on the watercolour section ⚠️ #9 |
| `--color-watercolor` | `#E3EFFA` | Mean colour of the watercolour texture (fallback under `watercolor.svg`) |

### Page heroes (art direction; ⚠️ #11)

| Token | Value |
|---|---|
| `--hero-residential` | `linear-gradient(90deg, #B8D9F0, #FAFAFA)` |
| `--hero-commercial` | `linear-gradient(90deg, #C8E0F2, #FDFDFD)` |
| `--hero-forensic` | `linear-gradient(90deg, #FFFFFF, #C1DAF0)` |
| `--hero-contact` | `#A2C7E8` (flat) |

### Artwork-only colours (not UI tokens)

Logo navy `#1A2B57` · logo dot `#64A9ED` · roller grey `#D3D3D3` · roller orange `#FE7B1C`
· wet-floor-sign yellow `#F6E31A` · Contact blob `#67A3DA`.

### Proposed (not in the design; needed for states)

| Token | Hex | Use |
|---|---|---|
| `--color-orange-hover` | `#E8680F` | Primary button hover |
| `--color-blue-hover` | `#3D93D4` | Secondary button hover |
| `--color-error` | `#B3261E` | Form error text and border (6.3:1 on `#FAFAFA`) |
| `--color-success-bg` | `#E6F4EA` | Form success message |

### Contrast (WCAG 2.1)

| Pair | Ratio | |
|---|---|---|
| Black label on orange `#FE791D` | 7.97:1 | ✅ AA (white would be 2.64:1 ❌, so keep labels black) |
| Black label on blue `#54A4DF` | 7.75:1 | ✅ |
| Navy nav on `#EEF6FD` | 12.5:1 | ✅ |
| White on navy (trust band) | 13.7:1 | ✅ |
| **Chip text `#54A4DF` on `#DDEDFA`** | **2.27:1** | ❌ Fails AA (needs 4.5). Fix: chip text `#1F5F96` (5.6:1) or navy (11.4:1) |
| **White numeral on `#54A4DF`** (48 px bold) | **2.71:1** | ❌ Fails AA-large (needs 3). Fix: navy numeral (5.0:1) or a darker circle. Numerals are hidden from screen readers (the list is an `<ol>`) |
| **Placeholder `#848484` on `#FAFAFA`** | **3.58:1** | ⚠️ Matters because placeholders are the only visible labels. Fix: `#6B6B6B` (5.1:1) or visible labels |

---

## 2. Typography

### Typefaces

| Role | Design font (identified) | Build | Note |
|---|---|---|---|
| Everything except footer and condensed titles | **Helvetica**. All 30 px text measures 29.7–30.0 px with Helvetica/Arial metrics; Inter does not fit | `Helvetica, Arial, sans-serif` (system fonts, no download) | Arial is metric-compatible, so Windows lays out the same |
| Card titles, step titles | Semibold condensed humanist caps; looks like **Myriad Pro Semibold Condensed** (Adobe) | **Open Sans Condensed SemiBold** (OFL, self-hosted, 19 KB) | ⚠️ Confirm. Real Myriad needs an Adobe Fonts kit |
| Footer | **Inter** ⚠️ #5 | Inter (OFL, self-hosted, 48 KB variable) | |

### Text styles (1440 px)

| Style (class) | Font | Weight | Size | Line height | Colour | Case | Used for |
|---|---|---|---|---|---|---|---|
| Hero title (`.hero-title`) | Helvetica | 700 *italic* | 30 | 48 (1.6) | ink | Sentence | First line of every hero ("Ready for a Cleaner Home?") |
| Lead (`.lead`) | Helvetica | 400 | 30 | 48 (1.6) ⚠️ #10 | ink | Sentence | Hero sub-lines, split-section paragraph and bullets, map paragraph |
| Section heading (`.section-title`) | Helvetica | 400 | 32 ⚠️ #6 | auto (1.15) | ink, or navy (`--navy` variant) | Title | "Our Services", "What to Expect", … |
| Eyebrow (`.eyebrow`) | Condensed | 600 | 20 | 24 | navy | UPPER | Card titles, step titles |
| Body small (`.card__text`) | Helvetica | 400 | 16 | ≈18 (1.15) | ink | Sentence | Card and step descriptions |
| UI (`.btn`, `.input`, `.chip`) | Helvetica | 400 | 20 | 24 | ink (chips blue) | Title | Buttons, inputs, placeholders, chips, trust band |
| Secondary button | Helvetica | 400 | 16 | 24 | ink | Title | "Learn More →" |
| Nav (`.site-nav__link`) | Helvetica | 400 (active **700**) | 14 | 14 | navy | Title | Header links |
| Step numeral | Helvetica | 700 | 48 | 1 | white | n/a | 1, 2, 3… |
| Footer body | Inter | 400 | 16 | ≈19 (1.2) | ink | Sentence | Tagline, footer links, email |
| Footer brand | Inter | 500 | 20 | 24 | ink | n/a | "JSK Cleaning" beside the mark |

**Responsive scaling (proposed; there is no mobile design):** lead `clamp(20px, 16.5px + 0.94vw, 30px)`,
section heading `clamp(24px, 21.2px + 0.75vw, 32px)`, step numeral 28→48 px. Everything else is fixed.

---

## 3. Spacing

Base scale (px): **4 · 8 · 12 · 16 · 20 · 24 · 32 · 48 · 64** (plus 96 once, before the Home map).
Tokens: `--space-1` … `--space-16`.

| Layout constant | Value | Source |
|---|---|---|
| Content max width | 1440 | Frame |
| Page gutter (text inset) | 32 (20 below 900 px) | Hero and footer text start at x≈32 |
| Card-grid inset | 64 → grid max 1312 | Identical on all 4 grids |
| Card grid | 3 columns × 406–408, column gap 48, row gap 24 | |
| Header height / padding | 84 / 24 sides; logo 188 × 35 at (24, 24) | |
| Footer height | 104; padding ≈16 top, 32 left, 34 right | |
| Nav link gap | ≈8 between words | |
| Card padding | 24; title→image 20; image→text 16; text→button 16 | |
| Card media | 360 × 200 (9:5) | |
| Section heading → content | 24 | |
| Hero padding | 48 top, 32 sides and bottom; min-height 272 (Residential grows to ≈320) | |
| Split section | 24 padding; panel 706 wide; 32 gap; panel padding 40/32 | |
| Step circle | 120 (64 on mobile); connector gap 14; circle→title 48; title→text 20 | |
| Chips | height 60; gap 20 (row) × 28 (col); padding 0 12; icon 22, gap 8 | |
| Form | 740 wide; padding 24; field gap 24; input height 45; textarea 92; upload 75; submit 56 | |

---

## 4. Radii

| Token | Value | Used on |
|---|---|---|
| `--radius-sm` | 6 px | Cards, card images and icon wells, chips |
| `--radius-md` | 8 px | Buttons, inputs, upload area, form container |
| `--radius-lg` | 16 px | Bullet panels |
| (circle) | 50% | Step numerals |

## 5. Shadows / elevation

| Token | Value | Used on |
|---|---|---|
| `--shadow-form` | `0 7px 14px -3px rgb(0 0 0 / .26)` | Contact form container (fitted to the screenshot) |
| `--shadow-header` | `0 2px 8px #EEF6FD` | Soft fade under the header (no dark shadow in the design) |
| — | none | Cards (1 px border only), buttons, chips |

## 6. Borders

| Element | Border |
|---|---|
| Card | 1 px `#E5E5E5` |
| Input / select / textarea | 2 px `#D6D6D6` |
| Form container | 1.5 px `#848484` |
| Chip | 1 px `#54A4DF` |
| Step circle | 3 px blue outer ring + 3 px white inner ring around the blue fill |

## 7. Breakpoints

The design is **desktop only (1440)**. Everything below is proposed and needs your sign-off.

| Name | Range | What changes |
|---|---|---|
| Desktop | ≥ 1200 | As designed |
| Laptop | 960–1199 | Card gap tightens to 24 |
| Tablet | 900–959 | Cards → 2 columns |
| Small tablet | 640–899 | Hero illustrations hidden; split sections and map stack; steps become a vertical timeline; client logos 2×2; footer stacks; gutter 20 |
| Phone | < 640 | Cards → 1 column; nav moves to its own row under the logo; form fields stack |

## 8. Component styles

### Buttons

| Variant | Background | Label | Size | Padding | Radius | Min height | Hover* | Focus* |
|---|---|---|---|---|---|---|---|---|
| Primary (`.btn--primary`) | `#FE791D` | black, Helvetica 20/24 | n/a | 16 × 18 | 8 | 56 | `#E8680F` | 3 px navy outline, 2 px offset |
| Secondary (`.btn--secondary`) | `#54A4DF` | black, Helvetica 16 + 20 px arrow, gap 14 | n/a | 16 × 18 | 8 | 56 | `#3D93D4` | same |
| Disabled / sending* | same, 70% opacity, `cursor: progress` | "Sending…" | | | | | | |

### Links

| Kind | Default | Hover* | Active |
|---|---|---|---|
| Header nav | navy 14 px, no underline | underline (offset 4) | **bold** on the current page (`aria-current`) |
| Footer | ink, Inter 16, no underline | underline (offset 3) | n/a |
| Inline body links | none in the design | proposed: inherit colour + underline | n/a |

### Inputs

| Part | Style |
|---|---|
| Text / email / tel / date / select | `#FAFAFA` background, 2 px `#D6D6D6` border, radius 8, height 45, padding 9 × 10, Helvetica 20, placeholder `#848484` |
| Select | Same, plus a grey chevron (Material Symbols `expand_more`) 12 px from the right; grey text while the placeholder option is selected |
| Textarea | Same, 92 tall, vertically resizable; counter "0 / 500" below (not in design) |
| Upload | `#DCE9F4` background, no border, radius 8, height 75, "+" icon and "Upload Photo" in 20 px black |
| Hover* | Border `#B9B9B9` |
| Focus* | Border `#54A4DF` + 3 px `rgb(84 164 223 / .35)` ring |
| Error* | Border `#B3261E`; 14 px message below the field |

\* Not in the design. These are proposed states (see `open-questions.md`).

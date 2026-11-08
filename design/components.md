# Reusable components

Each component appears in the design screenshots more than once (or once with an obvious
pattern). Class names refer to `assets/css/styles.css`.

## Which page uses what

| Component | Home | Residential | Commercial | Forensic | Contact |
|---|:-:|:-:|:-:|:-:|:-:|
| 1. Site header + nav | ✅ | ✅ (active) | ✅ (active) | ✅ (active) | ✅ (active) |
| 2. Home hero (brush + big logo) | ✅ | | | | |
| 3. Page hero (title, lead, CTA, art) | | ✅ | ✅ | ✅ | ✅ (no CTA) |
| 4. Trust band + client logo row | ✅ | | | | |
| 5. Section heading | ✅ | ✅ ×2 | ✅ ×2 | ✅ ×3 | |
| 6. Card grid | ✅ (3) | ✅ (3) | ✅ (6) | ✅ (6 + 3) | |
| 7a. Card: icon well + Learn More | ✅ | | | | |
| 7b. Card: photo | | ✅ | ✅ | ✅ | |
| 7c. Card: icon well, no button | | | | ✅ ("Who We Help") | |
| 8. Primary button (orange) | ✅ ×2 | ✅ ×2 | ✅ ×2 | ✅ ×2 ("Text Us 24/7") | ✅ ("Submit") |
| 9. Secondary button (blue, arrow) | ✅ ×3 | | | | |
| 10. Split section (intro + bullet panel + CTA) | | ✅ | ✅ | ✅ | |
| 11. Steps timeline | | ✅ (4) | | ✅ (5) | |
| 12. Industry chips | | | ✅ (8) | | |
| 13. Service area (map + copy + CTA) | ✅ | | | | |
| 14. Quote form + fields | | | | | ✅ |
| 15. Footer | ✅ | ✅ | ✅ | ✅ | ✅ |

## Component notes

### 1. Site header (`.site-header`)
Logo (links home) on the left; Residential · Commercial · Forensic · Contact on the right. The
current page's link is **bold** and marked `aria-current="page"`. The Residential screenshot doesn't
bold "Residential"; the build does, for consistency. A "Skip to main content" link appears on
keyboard focus. Below 640 px the links move to a second row (no hamburger menu).

### 2. Home hero (`.home-hero`)
Watercolour brush stroke with a paint roller (`hero-brush.svg`) and the full logo on top,
then the bold-italic tagline, a lead paragraph, and an orange CTA. The art scales
proportionally on small screens.

### 3. Page hero (`.hero`, modifiers `--residential | --commercial | --forensic | --contact`)
Left: bold-italic title (the page's `<h1>`), 1–2 lead lines, optional CTA. Right: the illustration.
Each modifier sets its own background (art direction) and illustration size and offset. Forensic's
image bleeds to the right edge at full height. Illustrations are hidden below 900 px.

### 4. Trust band + client logos (`.trust-band`, `.clients`)
Navy 36 px band with white 20 px text ("Trusted By Institutions Such As"), then a 4-column row
of client logos at their designed sizes (2×2 below 900 px). The logos aren't links.

### 5. Section heading (`.section-title`, `--navy`)
Centred, 32 px, regular. Navy variant on "Serving Toronto and the GTA!" and "Working Across Industries".

### 6–7. Card grid + card (`.card-grid`, `.card`)
3 columns, 48 px column gap, 24 px row gap; 2 columns below 960 px, 1 below 640 px. Card: `#FAFAFA`,
1 px `#E5E5E5` border, radius 6, padding 24. Contents: condensed navy caps title → 9:5 media
(photo, or blue well with a black icon) → 16 px description → optional centred button pushed to
the bottom so buttons line up.

### 8–9. Buttons (`.btn--primary`, `.btn--secondary`)
See tokens §8. Both have black labels. The secondary button carries a right arrow and hidden
context text for screen readers ("Learn More about residential cleaning").

### 10. Split section (`.split`)
Full-bleed watercolour texture. Left: heading + 30 px paragraph. Right: rounded blue panel with a
30 px bullet list and a CTA. Stacks below 900 px. Used for "A Cleaning Plan for You!",
"We're Certified to Clean Your Business", and "Cleaning Your Property with Sensitivity, Care, and Urgency".

### 11. Steps timeline (`.steps`, `--steps: 4|5`)
An ordered list. Each step: 120 px blue circle with a white ring and white 48 px numeral, a grey
connector line to the next circle, a condensed navy title, and a 16 px description. Below 900 px it
becomes a vertical timeline (64 px circles, vertical connector).

### 12. Industry chips (`.chips`, `.chip`)
Non-interactive tags: light-blue fill, 1 px blue border, blue 20 px label, and a Material Symbols
Rounded icon (flight, school, medical_services, warehouse, local_mall, restaurant, train, church).
Flagged for contrast (tokens §1).

### 13. Service area (`.service-area`)
674 × 384 Google Maps embed (no API key needed) beside a navy heading, a 30 px paragraph, and a CTA.
Stacks below 900 px.

### 14. Quote form (`.quote-form`, `.field`, `.input`, `.upload`)
740 px container (1.5 px grey border, radius 8, drop shadow). The grid is two columns for paired
fields (First/Last, Property/Service, Rooms/Sq ft) and full width otherwise. Fields: text, email,
tel, select (custom chevron), date (placeholder overlay), textarea with counter, photo upload
(styled label over a hidden file input, with a selected-files list), and Submit. Labels are
visually hidden but present for screen readers. Errors, the status message, and submission
behaviour are in `assets/js/contact-form.js`.

### 15. Footer (`.site-footer`)
`#EEF6FD`, 104 px, Inter. Left: logo mark + "JSK Cleaning", tagline. Right: two link columns
(Residential / Commercial / Forensic & Trauma, then email / Contact Us). Stacks below 900 px.

## Assets

| File | What it is | Status |
|---|---|---|
| `assets/img/logo.svg`, `logo-mark.svg`, `favicon.svg` | Logo, vector-traced from the large Home hero logo | Replace with the original logo file if you have it |
| `assets/img/icons/*.svg` | 6 black card icons, vector-traced from the screenshots | Close match; originals preferred |
| `assets/img/illustrations/*-hero.webp` | Residential, Commercial and Contact art (colour-traced, rendered at 2×); Forensic cropped from the screenshot (low-res) | **Placeholders**: please send originals |
| `assets/img/illustrations/hero-brush.svg` | Brush stroke + roller, rebuilt as SVG | Close match |
| `assets/img/watercolor.svg` | Tileable texture tuned to the design's colour and grain | Close match |
| `assets/img/photos/*.webp` | 15 service photos **cropped from the screenshots** | **Placeholders**: low-res (Forensic ones especially). Need originals and confirmation of the licence |
| `assets/img/clients/*.webp` | 4 client logos cropped from the Home screenshot | **Placeholders**: need official files and permission to display |
| Chip, arrow, plus and chevron icons | Google Material Symbols Rounded (Apache 2.0), inlined | Final |
| `assets/fonts/*.woff2` | Open Sans Condensed SemiBold, Inter (SIL OFL) | Final unless the condensed font changes |

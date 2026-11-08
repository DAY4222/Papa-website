# What the screenshots don't show (and what I need from you)

For every gap below I picked a sensible default so the site works end to end. Each item says
**what I did** and **what I need from you**.

## A. Needed before launch

1. **24/7 phone number.** "Text Us 24/7" (Forensic) uses a **placeholder** `sms:+1 416 555 0100`.
   555-01xx numbers are reserved for fiction, so a click can't reach a real person. The Contact hero
   says "Or Text Us!" but shows no number or button.
   → What's the number? Should it also appear on Contact, in the footer, and as a "Call" (`tel:`) link?
2. **Where should quote requests go?** No backend is shown. Right now Submit validates the form, then
   opens the visitor's **email app** with the request pre-filled to `jskservicecompany@gmail.com`.
   Photos can't attach that way; the visitor is told to attach them. Pasting a form-service URL into
   `data-endpoint` on the `<form>` switches it to a real POST, photos included (already tested).
   → Pick one: Formspree, Netlify Forms, Basin, or your own server? Which inbox?
3. **Original assets.** All of these are placeholders cropped or traced from your screenshots:
   - Logo (SVG preferred). The traced version is good, but the original is safer.
   - The 4 hero illustrations, especially the low-res Forensic crime-scene image.
   - The 15 service photos. They're low-res crops, and I can't tell where they came from:
     **please confirm you have a commercial licence** for each one.
   - The 4 client logos (UofT Mississauga, York Region, Humber River Health, Sheraton): official
     files, and **confirmation you have permission to show them**. A hospital and a municipality
     often require approval for "trusted by" use.
4. **Fonts.** The card and step titles look like **Myriad Pro Semibold Condensed** (an Adobe font).
   I used the free look-alike Open Sans Condensed. → Is it Myriad? If so, do you have an Adobe Fonts
   licence, or is the look-alike fine? The **footer is in Inter** while everything else is Helvetica:
   keep it, or switch the footer to Helvetica?
5. **Facts to verify.** Commercial bullet "WHMIS-trained team **Confirm**". I removed "Confirm", which
   looks like a note to check the claim. Please confirm the claim, plus the other certifications
   listed (TCST, IICRC, WHMIS D-3, licensed biohazard disposal, insurance and bonding).

## B. Copy problems in the design

6. **Home service-card descriptions were copy-pasted.** "Commercial" reused the Deep Cleaning
   text ("A top-to-bottom reset: inside appliances, baseboards…") and "Forensic, Trauma, and Biohazard"
   reused the Move In/Out text ("…ready for handover or your first night."). I swapped in each page's
   own hero line:
   - Commercial: *"Commercial cleaning for offices, schools, clinics, and retail across the GTA."*
   - Forensic: *"Crime scene, trauma, and biohazard cleanup. Available 24/7, as quick as 45 minutes."*
   → OK, or do you want new copy? (Residential kept the design's text, which also matches the Routine Cleaning card.)
7. **Blue underlines** under the Residential "Every home is different…" and Commercial "Facility
   managers…" paragraphs look like Figma's text-hover highlight, not styling. They aren't on the
   Forensic equivalent. I rendered plain text. → Correct?
8. **"Short description (max … characters)"**: the limit is missing. I used **500**, with a live counter.
9. Smaller nits (left as designed, flag only):
   - The Commercial hero line has no final period ("…retail across the GTA").
   - The copy says "Humber River **Hospital**", but the logo says "Humber River **Health**" (renamed in 2022).
     It also says "the Municipality of York", where the logo and common usage say "York Region".
   - Contact: "Just provide **this** information we need…" might read better as "the information we need".
   - Naming varies: "Forensic" (nav), "Forensic, Trauma, and Biohazard" (Home card), "Forensic & Trauma" (footer).

## C. Interaction states (none are shown)

10. **Hover.** Buttons darken (orange `#E8680F`, blue `#3D93D4`). Nav and footer links underline.
    Inputs get a darker border. The upload area darkens slightly.
11. **Keyboard focus.** A 3 px navy outline with 2 px offset on every interactive element. Inputs get
    a blue border plus a soft blue ring. There's a "Skip to main content" link.
12. **Active nav item.** Bold on the current page. The Residential screenshot doesn't bold
    "Residential"; I treated that as an oversight.
13. **Pressed/disabled.** Submit shows "Sending…" at 70% opacity while posting (endpoint mode only).
    → Any preference?

## D. Responsive layout (only desktop is designed)

14. **Phone and tablet.** See tokens §7. Cards go 3 → 2 → 1 columns. Split sections and the map stack.
    Steps become a vertical timeline. Client logos go 2×2. The form goes to one column. The footer stacks.
15. **Mobile navigation.** Links sit on a second row under the logo (all 4 fit at 390 px), with **no
    hamburger menu**. → OK, or do you want a menu button?
16. **Hero illustrations on phones.** **Hidden below 900 px** to keep the heading and CTA on screen.
    The Home brush and logo art scales down instead. → Show them smaller above or below the text instead?
17. **Wide screens (> 1440 px).** Content stays centred at 1440 px; backgrounds stretch full width.

## E. Motion

18. **None is designed, so none is built** apart from 150 ms colour transitions on hover. It respects
    the "reduce motion" setting. → Want anything, such as fade-ins on scroll or an animated roller?

## F. Contact form behaviour (only the empty form is shown)

19. **Required fields:** First name, Email, Phone, Cleaning service. Everything else is optional. → Right set?
20. **Dropdown options** (I wrote these; please edit):
    - *Property type:* House, Condo or apartment, Townhouse, Office, Retail or restaurant, Healthcare or clinic, School or campus, Hotel, Industrial or warehouse, Other
    - *Cleaning services:* grouped Residential / Commercial / Forensic & trauma, using each page's
      service names, plus "Not sure / something else"
    - *Number of rooms:* 1–5, 6 or more, Not sure
    - *Square footage:* Under 500 · 500–999 · 1,000–1,499 · 1,500–1,999 · 2,000–2,999 · 3,000–4,999 · 5,000+ · Not sure
21. **Validation messages** appear under each field after Submit and update as the visitor fixes
    them. Focus jumps to the first problem. Email needs a valid format; phone needs 10–15 digits;
    the date can't be in the past.
22. **Photos:** images only, up to **5 files, 10 MB each**. Chosen files are listed with a "Remove"
    button. → Are those limits right? Are photos required for forensic jobs?
23. **Preferred date** is a date picker that shows "Preferred Date" until a date is chosen.
    → Do you also want a time window (morning, afternoon, evening)?
24. **Success / failure.** With a form service: "Thank you! Your request was sent. We reply within 1
    business day…". The form clears. On failure, the values are kept and an email fallback is
    offered. → Want a separate thank-you page instead (useful for ad conversion tracking)?
25. **Labels.** The design uses placeholders only, which vanish while typing. Real labels exist for
    screen readers but are visually hidden. → Consider small visible labels above each field.
26. **Privacy.** The form collects names, contact details and photos. In Canada (PIPEDA) you'll want a
    short privacy notice or policy link near Submit. → Do you have one?

## G. Other things not shown

27. **Map.** A Google Maps embed of the GTA (no marker, no API key). → Fine, or would you prefer a
    static image or a shaded service-area map? Should it show an address?
28. **Industry chips and client logos** aren't clickable. → Should chips link anywhere?
29. **Footer.** Doesn't show a phone number, address, hours, social links, copyright line, or
    privacy policy. → Add any?
30. **Page titles and descriptions** for search and browser tabs: I wrote them, so please review.
    There's no social-share image (Open Graph) or 404 page yet. → Want them?
31. **Analytics and cookies.** None installed. → Google Analytics or similar?
32. **Hosting and domain.** The site is plain HTML/CSS/JS, so any static host works (GitHub Pages,
    Netlify, Cloudflare Pages). → Do you have a domain?

## H. Accessibility findings (the design as-is fails these)

33. **Industry chip text** `#54A4DF` on `#DDEDFA` is 2.27:1 (WCAG AA needs 4.5:1). → Darken the chip
    text to `#1F5F96`? It's a one-line change.
34. **White step numerals** on `#54A4DF` are 2.71:1 (large-text minimum is 3:1). → Navy numerals or a
    darker circle?
35. **Placeholder grey** `#848484` is 3.58:1, and placeholders are the only visible labels.
    → Darken to `#6B6B6B`, or add visible labels (#25)?

(The automated axe-core audit passes on all other pages and elements.)

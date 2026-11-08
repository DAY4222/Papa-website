# JSK Cleaning website

A static website for JSK Cleaning: residential, commercial, and forensic/trauma cleaning in Toronto
and the GTA. It was built from the Figma design screenshots. It's plain HTML, CSS, and a little
JavaScript, with no build step and no dependencies.

## View it

- **Quickest:** open `index.html` in a browser. Every page and link works straight from the files.
- **Like a real host (recommended):** from this folder run

  ```bash
  python3 -m http.server 8000
  ```

  then visit <http://localhost:8000>.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `residential.html` | Residential cleaning |
| `commercial.html` | Commercial cleaning |
| `forensic.html` | Crime scene, trauma & biohazard cleanup |
| `contact.html` | Free-quote form |

The header nav, footer links, "Learn More" and "Request a Free Quote" buttons all connect the pages.
The header and footer markup is repeated on each page, so update all five files when you change it.

## Project layout

```
assets/css/styles.css      all styles; design tokens are the CSS variables at the top
assets/js/contact-form.js  quote form: validation, photo picker, submission
assets/img/                logo, icons, illustrations, photos, client logos, texture
assets/fonts/              self-hosted fonts (SIL Open Font License, see LICENSE-*.txt)
design/tokens.md           colours, type, spacing, radii, shadows, breakpoints, component styles
design/components.md       reusable components and which pages use them
design/open-questions.md   everything the screenshots don't show, with questions
```

## Before going live

See `design/open-questions.md`, section A. In short:

1. **Phone number.** "Text Us 24/7" points to a placeholder, `sms:+14165550100`.
   Search for `4165550100` in `forensic.html` and replace it.
2. **Form delivery.** In `contact.html`, set `data-endpoint="…"` on the `<form>` to a form-service URL
   (Formspree, Netlify Forms, Basin, …) to receive submissions with photos. While it's empty, Submit
   opens the visitor's email app addressed to `jskservicecompany@gmail.com`.
3. **Images.** The photos, illustrations, and client logos are placeholders cropped or traced from
   the screenshots. Swap in the originals, keeping the same file names.

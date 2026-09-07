# Brigadier's Defence & Skill Institute — Website

Static marketing site for Brigadier's Defence & Skill Institute, Dr. A. S. Rao Nagar, Secunderabad.

**Live:** https://anubhav-d-rana.github.io/brigadiers-website/

---

## What this is

Plain HTML, CSS and JavaScript. No framework, no build step, no dependencies to install.
Open `index.html` in a browser and it works.

| | |
|---|---|
| Pages | 9 (home, programmes, about, leadership, gallery, blog + 2 articles, contact) |
| Total assets | 2.9 MB |
| Animation | GSAP + ScrollTrigger + Lenis, loaded from CDN |
| Fonts | Oswald, Instrument Serif, Manrope, JetBrains Mono (Google Fonts) |

## Structure

```
index.html              Home
programmes.html         Five programme wings
about.html              Who we are, strengths, ethos
leadership.html         Brigadier Krishna Raj, Director, faculty credentials
gallery.html            Photo album with lightbox
blog.html               Blog index
blog-ssb-interview.html      Article — the SSB interview
blog-nda-preparation.html    Article — NDA six-month plan
contact.html            Contact details, enquiry form, map, FAQ

css/style.css           All styling ("Field White" theme)
js/content.js           ← EDIT THIS to change content
js/main.js              Animation, lightbox, form, mobile menu
assets/                 Photographs and logo
CONTENT.md              Full written content specification
```

## Changing content

**Most things live in `js/content.js`.** Programmes, strengths, gallery photos, faculty
credentials, blog post listings and FAQs are all data in that one file. Edit the text,
keep the quotes and commas intact, save.

Headlines and body prose inside each page are hard-coded in the HTML and must be edited
page by page. The navigation and footer are repeated on every page — a change there is
nine edits.

## Adding a blog post

1. Copy an existing `blog-*.html` file and rewrite the `<article class="post">` block.
2. Add an entry to the `blog` array in `js/content.js` pointing at the new filename.

The blog index picks it up automatically.

## Deploying

Pushing to `main` publishes automatically. No manual step.

## Notes

- The enquiry form has **no backend** — on submit it composes a WhatsApp message and opens
  `wa.me`. Nothing is stored or emailed, and an abandoned submission is lost.
- Primary contact number is **+91 72078 47051** (also the WhatsApp business line).
- Images are capped at 1600px. Keep new photographs under ~250 KB so the site stays fast.

## Contact

Jayalakshmi Enclave, Gate No. 2, Dr. A. S. Rao Nagar, Secunderabad, Telangana 500062
+91 72078 47051 · Director@brigadiersinstitute.com

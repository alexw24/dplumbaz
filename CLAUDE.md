# CLAUDE.md — Diagnostic Plumbing Hugo Site

Hugo static site for **Diagnostic Plumbing** (dplumbaz.com). Content planning lives in the Obsidian vault at `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/Gentry/`.

## Business Context

- **Company:** Diagnostic Plumbing — locally owned, East Valley AZ
- **Phone:** (480) 220-1266 ← always use this. Old WP files may show (480) 277-4501 — that is wrong.
- **Service Area:** Gilbert, Chandler, Mesa, Scottsdale, Tempe, Queen Creek, Phoenix
- **ROC Licenses:** #332463 (B-3 General Remodeling), #327364 (CR-37 Plumbing), #327365 (CR-61 Carpentry, Remodeling & Repairs — sub-$50K projects, CR = commercial + residential; R side redundant with B-3, kept for commercial coverage)
- **Key Differentiators:** High-speed drain cleaning (first-mover in East Valley), triple-licensed (plumbing + remodeling + carpentry), water softener expertise

## Tech Stack

- **SSG:** Hugo v0.159.2 — `hugo server` → http://localhost:1313/
- **CSS:** Tailwind CSS v4 via PostCSS (`@tailwindcss/postcss`, `postcss-cli`)
- **JS:** Alpine.js v3 (CDN) — mobile menu interactions
- **Repo:** https://github.com/alexw24/dplumbaz (private)
- **Hosting:** Cloudflare Pages — build: `hugo`, publish: `public/`

## Project Structure

```
~/Developer/dplumbaz/
├── hugo.toml                         # Config: baseURL, params, menus, sitemap
├── package.json                      # npm: tailwindcss, @tailwindcss/postcss, postcss-cli
├── assets/css/main.css               # @import "tailwindcss"
├── content/
│   ├── _index.md                     # Homepage
│   ├── about.md                      # type: page
│   ├── contact.md                    # type: page
│   ├── emergency-plumbing.md         # type: services
│   ├── commercial-hospitality.md     # type: services
│   ├── services/_index.md + remodeling.md
│   ├── residential-plumbing/_index.md + 5 service pages
│   ├── water-quality/_index.md + 3 service pages
│   ├── service-area/                 # 7 city pages (url: /plumber-{city}-az/)
│   └── blog/_index.md
├── layouts/
│   ├── _default/baseof.html          # HTML shell, calls all partials
│   ├── index.html                    # Homepage layout
│   ├── page/single.html              # About, Contact
│   ├── services/list.html            # Hub pages (services grid)
│   ├── services/single.html          # Service pages (content + FAQ + service areas + CTA)
│   ├── service-area/single.html
│   └── blog/list.html + single.html
└── layouts/partials/
    ├── head.html                     # Meta, Tailwind, Alpine.js CDN, OG/Twitter, schema
    ├── header.html                   # Two-bar sticky header, dropdowns, mobile hamburger
    ├── footer.html                   # Service areas, licenses, nav, copyright
    ├── hero.html                     # Page hero with optional bg image
    ├── cta.html                      # Reusable CTA block
    ├── faq.html                      # details/summary FAQ accordion
    ├── service-areas.html            # City links grid
    └── schema/
        ├── local-business.html       # Plumber JSON-LD (every page)
        └── faq.html                  # FAQPage JSON-LD (pages with faq param)
```

## Site Structure

### Navigation
`Home | About Us ▾ | Services ▾ | Water Quality ▾ | Commercial | Contact | [Call (480) 220-1266]`
- About Us: Blog
- Services: Drain Cleaning | Water Heaters | Repipes | Plumbing Repairs | Remodeling
- Water Quality: Water Softeners | Whole Home Filtration | Reverse Osmosis

### All Pages & URLs
| Page | URL | Type |
|------|-----|------|
| Home | / | — |
| Residential Plumbing | /residential-plumbing/ | services (SEO hub, not in nav) |
| Drain Cleaning | /services/drain-cleaning/ | services |
| High-Speed Drain Cleaning | /services/high-speed-drain-cleaning/ | services (linked from Drain Cleaning) |
| Water Heaters | /services/water-heaters/ | services |
| Repipes | /services/repipes/ | services |
| Plumbing Repairs | /services/plumbing-repairs/ | services |
| Services hub | /services/ | services |
| Remodeling | /services/remodeling/ | services |
| Water Quality hub | /water-quality/ | services |
| Water Softeners | /water-quality/water-softeners/ | services |
| Whole Home Filtration | /water-quality/whole-home-filtration/ | services |
| Reverse Osmosis | /water-quality/reverse-osmosis/ | services |
| Emergency Plumbing | /emergency-plumbing/ | services (not in nav) |
| Commercial & Hospitality | /commercial-hospitality/ | services |
| About | /about/ | page |
| Blog | /blog/ | — |
| Contact | /contact/ | page |
| Gilbert | /plumber-gilbert-az/ | service-area |
| Chandler | /plumber-chandler-az/ | service-area |
| Mesa | /plumber-mesa-az/ | service-area |
| Scottsdale | /plumber-scottsdale-az/ | service-area |
| Tempe | /plumber-tempe-az/ | service-area |
| Queen Creek | /plumber-queen-creek-az/ | service-area |
| Phoenix | /plumber-phoenix-az/ | service-area |

Service area pages are linked from footer + internal content, NOT primary navigation.

## Global Elements

- **Header:** Sticky, two-bar. Top bar: tagline ("Servicing Maricopa and Pinal Counties") + social icons. Main bar: logo, nav dropdowns (hover desktop / Alpine.js mobile), click-to-call CTA always visible.
- **Hero:** All pages except homepage — page title + "Request a Service" (/contact/) + "Call Us Now!" (tel:4802201266). Supports `hero_image` front matter param for bg image.
- **Footer:** Service area city links, ROC license numbers, phone, secondary nav, copyright.

## Content Front Matter Reference

```toml
+++
title = "Page Title"
description = "Meta description (150–160 chars)."
url = "/explicit-url/"          # required for service-area pages and non-standard URLs
type = "services"               # services | service-area | page

hero_image = "/images/foo.jpg"  # optional — enables bg image on hero partial

[[faq]]
question = "Question text?"
answer = "Answer text."

[[faq]]
question = "Another question?"
answer = "Another answer."
+++
```

## Writing Guidelines

- Voice: professional but personal — local-owner tone, not corporate franchise
- Always include ROC license numbers as trust signals where relevant
- Reference specific East Valley cities, neighborhoods, and local conditions (hard water, pipe age)
- FAQ entries go in front matter as `[[faq]]` arrays — the template auto-generates FAQPage schema
- Every service page needs: click-to-call CTA, internal links to related services, service area mentions

## Key Strategic Decisions

- **High-speed drain cleaning** is the primary differentiator — East Valley competitors are not marketing this technology
- **Water softeners / water quality** are a high-margin growth area — East Valley hard water (200+ mg/L) creates strong demand with relatively low SEO competition
- **Triple license** (plumbing + remodeling + carpentry) — B-3 lets Diagnostic Plumbing GC full remodels. On the site, frame as "one company, one point of contact." Do NOT mention subcontractors (positive or negative) — that's disclosed in proposals, not on the website. The site's job is to get the lead.
- **One brand: Diagnostic Plumbing** — remodeling is a service, not a separate DBA
- **Blog strategy:** informational content → service page traffic (see `Strategy/CONTENT-CALENDAR.md` in vault)
- **Service area pages** at `/plumber-{city}-az/` — footer + internal links only, not nav

## Future Integrations

- **JobTread** — CRM with open API. Contact form → lead creation, booking, review request automation.
- **Cloudflare Pages** — auto-deploy from GitHub on push to main.

# Chemea™ Oman Carbon Black (OCB)

Production static website for carbon black trading operations. Hugo + Tailwind + GitHub Pages.

[![Build Status](https://img.shields.io/github/actions/workflow/status/triqbit/chemea-ocb/deploy.yml?branch=main)](https://github.com/triqbit/chemea-ocb/actions)
[![Hugo](https://img.shields.io/badge/Hugo-0.154.1-ff4088)](https://gohugo.io)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.1-38bdf8)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

---
## Overview

Enterprise static site for **Chemea Oman Carbon Black** — ASTM-aligned carbon black trading for tire, rubber, plastics, and industrial applications across 50+ countries[file:1].

**Key Facts:**
- **Organization**: Trading hub (not manufacturer) coordinating third-party producers
- **Markets**: Tire, rubber goods, plastics compounds, industrial applications
- **Grades**: N110, N220, N330, N550, N660, N774
- **Hub**: Muscat, Oman (Office 110, Bait Arzat Building, Al Khuwair 33, PC 112)
- **Contact**: OCB@chemea.com
---
## Stack

| Layer | Tech | Version | Purpose |
|-------|------|---------|---------|
| **SSG** | Hugo Extended | 0.154.1+ | Static generation, <5s builds |
| **CSS** | Tailwind | 4.1 Oxide | JIT, <50KB production bundle |
| **JS** | Vanilla ES6+ | — | Progressive enhancement only |
| **Build** | npm + PostCSS | v20+ | Deps, autoprefixer, minify |
| **Host** | GitHub Pages | — | Zero-cost CDN hosting |
| **CI/CD** | GitHub Actions | v4 | Lint, test, build, deploy |

**Performance:**
- Lighthouse: >98 (all metrics)
- LCP <2.5s | FID <100ms | CLS <0.1
- CSS <50KB gzipped | TTI <3.5s[file:1]
---
## Structure

chemea-ocb/
│
├── .github/
│   └── workflows/
│       └── deploy.yml                    # GitHub Actions CI/CD pipeline
│
├── archetypes/
│   └── default.md                        # Hugo content archetype template
│
├── assets/
│   ├── css/
│   │   └── main.css                      # Tailwind CSS entry point
│   └── js/
│       └── main.js                       # Vanilla JS (navigation, theme, forms)
│
├── content/                               # Markdown content files
│   ├── _index.md                         # ⭐ Home page
│   ├── about/
│   │   └── index.md                      # About Chemea OCB
│   ├── products/
│   │   └── index.md                      # ASTM-aligned grades catalog
│   ├── industries/
│   │   └── index.md                      # Tire, Rubber, Plastics, Industrial
│   ├── logistics/
│   │   └── index.md                      # Incoterms, packaging, routes
│   ├── quality/
│   │   └── index.md                      # ASTM standards, certifications
│   ├── faq/
│   │   └── index.md                      # Frequently asked questions
│   ├── blog/
│   │   ├── _index.md                     # Blog listing page
│   │   ├── post-1.md                     # 📝 10 enterprise blog posts
│   │   ├── post-2.md                     #    covering ASTM standards,
│   │   ├── post-3.md                     #    supply chain resilience,
│   │   ├── post-4.md                     #    sustainability, logistics,
│   │   ├── post-5.md                     #    Oman hub positioning,
│   │   ├── post-6.md                     #    and industry insights
│   │   ├── post-7.md
│   │   ├── post-8.md
│   │   ├── post-9.md
│   │   └── post-10.md
│   ├── contact/
│   │   └── index.md                      # Multi-step RFQ form
│   ├── careers/
│   │   └── index.md                      # Job opportunities
│   ├── resources/
│   │   └── index.md                      # Whitepapers, guides, datasheets
│   ├── privacy/
│   │   └── index.md                      # Privacy policy
│   └── terms/
│       └── index.md                      # Terms of service
│
├── data/
│   ├── site.json                         # Global site configuration
│   └── navigation.json                   # Navigation menus, footer links
│
├── i18n/
│   ├── en.json                           # English translations
│   └── ar.json                           # Arabic translations (RTL support)
│
├── layouts/
│   ├── _default/
│   │   ├── baseof.html                   # Master template
│   │   ├── list.html                     # Section listing template
│   │   └── single.html                   # Single page template
│   ├── index.html                        # Home page template
│   ├── partials/
│   │   ├── head.html                     # Meta tags, CSS links
│   │   ├── header.html                   # Sticky navigation
│   │   ├── footer.html                   # Footer with links
│   │   ├── seo.html                      # SEO meta tags
│   │   ├── breadcrumbs.html              # Hierarchical navigation
│   │   ├── jsonld/                       # 🔍 Structured data schemas
│   │   │   ├── organization.html         #    - Organization schema
│   │   │   ├── webpage.html              #    - WebPage schema
│   │   │   ├── article.html              #    - Article schema
│   │   │   └── faq.html                  #    - FAQPage schema
│   │   └── components/                   # 🧩 Reusable UI components
│   │       ├── hero-orbit.html           #    - Orbit-animated hero
│   │       ├── stats-strip.html          #    - Stats counters
│   │       ├── industry-cards.html       #    - Industry sections
│   │       ├── logistics-timeline.html   #    - Visual workflow
│   │       ├── quality-checklist.html    #    - QA steps
│   │       ├── faq-accordion.html        #    - ARIA-compliant FAQ
│   │       └── contact-form.html         #    - Multi-step RFQ
│   ├── shortcodes/
│   │   ├── orbit-section.html            # Orbit-themed section wrapper
│   │   └── disclaimer.html               # Trading disclaimer snippet
│   └── 404.html                          # Custom 404 error page
│
├── static/
│   ├── favicons/
│   │   ├── favicon.ico                   # Browser favicon
│   │   ├── favicon-16x16.png             # Small favicon
│   │   ├── favicon-32x32.png             # Standard favicon
│   │   └── site.webmanifest              # PWA manifest
│   ├── _headers                          # 🔒 Security headers (CSP, HSTS)
│   ├── _redirects                        # URL rewrites and redirects
│   ├── robots.txt                        # SEO crawler directives
│   └── logo-chemea-ocb.svg               # Brand logo (SVG)
│
├── .gitignore                            # Git exclusions
├── config.toml                           # 🛠️ Hugo configuration
├── tailwind.config.js                    # 🎨 Tailwind theme (carbon/teal/gold)
├── postcss.config.cjs                    # PostCSS plugins (autoprefixer, cssnano)
├── package.json                          # 📦 npm scripts and dependencies
├── LICENSE                               # MIT License
└── README.md                             # 📘 Project documentation

[file:1][file:3]

---
## Quick Start

### Prerequisites

- Hugo Extended ≥0.154.1
- Node.js ≥20
- Git

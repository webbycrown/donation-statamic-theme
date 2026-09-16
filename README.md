# Donation — Statamic Starter Kit

A charity marketing starter kit for [Statamic](https://statamic.com/) 5.  
Built to showcase causes, events, volunteers, news, a donation inquiry form, and a career section.

---

## What's included

### One Page template + Theme sections

Every page — home, about, contact, FAQ, blog, and all others — uses a single **Page** template.  
Editors add any section in the Control Panel and drag to reorder. No developer is needed to rearrange a page.

Available sections:

| Group | Section |
|---|---|
| Content | Home hero (3 styles), About intro, About section, Help me intro, Help stories, Donate banner, Donate causes, Donation form (inline & full), Donation copy, Donation success message, Volunteer CTA, Volunteer intro, Volunteer apply form, Why choose us, Donors map, Stay connected, Contact form, Map embed, Page hero, What we do, Career intro, Presentation hero, Text section |
| Listings | News feature, News listing, Events listing, Events cards, Blog feature, Blog list, Blog grid, Blog (home-three style), Portfolio gallery, Portfolio grid, Volunteers grid, Volunteers listing, Volunteers showcase, Testimonials slider, Testimonials grid, Testimonials (home-three style), Partners, Partners (home-three style), FAQs, Careers listing, Pages index, Donation timeline |

### Collections

| Collection | Purpose |
|---|---|
| Pages | Site pages — built with Theme sections |
| Blogs | Blog posts (with detail view) |
| Events | Upcoming events (with detail view) |
| News | News articles (with detail view) |
| Portfolios | Portfolio / gallery items (with detail view) |
| Careers | Open positions |
| Causes | Donation causes |
| Testimonials | Customer / donor testimonials |
| Volunteers | Volunteer team members |
| FAQs | Frequently asked questions |

### Forms

| Handle | Purpose |
|---|---|
| `contact` | Contact us (AJAX, no reload) |
| `donation` | Donation inquiry — emails the team; **no card payment is captured** |
| `volunteer` | Become a volunteer (AJAX, no reload) |
| `career` | Career application (AJAX, no reload, file upload) |

> **Important:** The donation form is a marketing inquiry form. It emails your team with the donor's details and chosen amount. It does **not** connect to a payment gateway, and no money changes hands on submission. To accept real payments you would need to integrate a separate payment provider (Stripe, PayPal, etc.).

> **Statamic forms note:** Statamic Core includes one form. If you wish to keep all four forms, a [Statamic Pro](https://statamic.com/pricing) licence is required.

### Globals

| Global | Purpose |
|---|---|
| `setting` | Logo, phone, email, address, map embed URL, social links, donate CTA, footer copy, SEO defaults |

---

## Installation

Install this kit from the [Statamic Marketplace](https://statamic.com/starter-kits) or via the CLI:

```bash
statamic new my-site webbycrown/donation-statamic-theme
```

After installation:

1. Open the Control Panel and go to **Globals → Settings** to set your logo, phone, email, address, and social links.
2. Go to **Pages** and choose the home variant you want to show by default.
3. Add, remove, and reorder **Theme sections** on any page.
4. Configure your four forms under **Forms**.

---

## Pages in this kit

| Page | Primary sections |
|---|---|
| Home (style 1) | Home hero → About intro → Help stories → Donation timeline → Portfolio gallery → News feature → Testimonials slider → Stay connected |
| Home (style 2) | Home hero → About section → Donate causes → Events listing → Volunteers grid → Volunteer CTA → Blog feature → Testimonials slider → Stay connected |
| Home (style 3) | Home hero → Donate banner → Donors map → Events cards → Volunteers showcase → Why choose us → Blog (home-three) → Partners → Portfolio gallery → Testimonials → Stay connected |
| About Us | Page hero → About intro → What we do → Portfolio gallery → Testimonials → Stay connected |
| Contact | Contact form → Map embed |
| Donation | Donation form (inline) → Donation copy → Stay connected |
| Donation Form | Donation form (full / detailed) |
| Donation Success | Honest success message — no fake gateway receipt |
| Help Me | Help me intro → Help stories → Stay connected |
| Events | Events listing |
| News | News listing |
| Portfolio | Portfolio grid |
| Volunteers | Volunteer intro → Volunteers listing → Testimonials |
| Become a Volunteer | Volunteer apply form (wired to `volunteer` form) |
| Career | Career intro → Careers listing |
| FAQ | FAQs |
| Testimonials | Testimonials grid |
| Blog Standard | Blog list |
| Blog Grid | Blog grid |
| Latest Blog | Blog (home-three style) |
| Presentation | Presentation hero → Pages index |

---

## Support

[Submit an issue on GitHub →](https://github.com/webbycrown/donation-statamic-theme/issues)

# QA report — Electech site correction pass

**Date:** 2026-11-14  
**Production host:** https://electech-black.vercel.app  
**Production git branch:** `main` (Vercel Production tracks `main`)  
**Source of truth:** `docs/client-revision.md`

## 0. Pre-fix live crawl (before this commit)

Crawled https://electech-black.vercel.app after prior deploy `277bcaf`. Hits:

| Phrase / issue | Where |
| --- | --- |
| `weekly` | Home + Insights cards linking `/insights/weekly-mep-progress-reports`; sitemap `changefreq` |
| `www.electechmep.com` | Canonical, og:url, sitemap (from `NEXT_PUBLIC_SITE_URL`) |
| `Get a Quote` | Header CTA (all pages) |
| `Fire Fighting and Fire Alarm Installation` | Fire Fighting subpage title / meta / breadcrumb |
| `Villa Owner` | Villa project facts row |
| Solar route | `/solutions/electrical/solar-power-plant-installation` → 404 (correct, unpublished) |

Not found on live HTML: drills, expertly designed, one-stop, Luxurious Villa Transformation, Oud Metha, Report weekly, 12+, visible `[CLIENT TO PROVIDE`, Confidence built into every programme.

## 1. Fixes applied in this pass

### Content
- Home hero, capabilities, Why Electech, Planning banner, counters, How We Deliver, footer/address already aligned; Header CTA → **Request a Quotation**.
- Who We Are: both opening paragraphs now sit under **Engineering Solutions That Create Lasting Value** (not above it).
- Service overviews: client sub-headings (`Our Approach`, `How We Work`, `Scope and Responsibility`, etc.) render as real `<h2>`s with spacing; Mechanical no longer duplicates a separate “How we work” aside.
- Fire Fighting subpage title/meta/crumbs → client **Fire Alarm & Firefighting Installation Support**.
- Per-page CTA headings + short matching sentences (no reused villa/office banner copy on service pages).
- Projects: removed Client: Villa Owner; hero no longer duplicates the summary; prev/next labelled; related/index cards show specific bucket tags when primary is MEP.
- Insights: slug renamed to `/insights/mep-handover-package` with **301** from `/insights/weekly-mep-progress-reports`; reading time from word count; publish date `2025-09-12` marked `[CLIENT TO CONFIRM]`.
- Solar remains unpublished (404, no sitemap/nav).

### Design
- Welding/fabrication heroes replaced with Electech installation / MEP plant photos on Why Choose + Solutions heroes.
- Project cards/heroes use works photos where mapped; otherwise navy bucket tiles (no stock of another project; no “[CLIENT TO PROVIDE photo]” text).
- Sector tiles match client sector list with subject-matched photos.
- ISO board shown with `object-contain` on home and Certifications.

### SEO / technical
- Site name / og:site_name → **Electech**.
- Default / guarded `NEXT_PUBLIC_SITE_URL` → `https://electech-black.vercel.app` (blocks `electechmep.com` until real domain is configured).
- Meta descriptions updated (Electrical without solar; Fire = fire alarm and firefighting installation support; Mechanical matches client; home without one-stop / since-2012 precision).
- Project OG images use each story’s display photo.
- Cleared `.next` and rebuilt; all listed routes static/SSG (solar builds but `notFound()` at runtime). Sitemap `changefreq` no longer `weekly`.

## 2. Post-deploy verification (commit `86a0ef3`+)

Recrawled https://electech-black.vercel.app after Production redeploy:

| Check | Result |
| --- | --- |
| Canonical / sitemap host | `https://electech-black.vercel.app` (no `www.electechmep.com`) |
| Header CTA | Request a Quotation |
| Insights slug | `/insights/mep-handover-package`; old slug → **308** permanent redirect (Next.js permanent) |
| Solar | **404** |
| Villa Owner fact row | Removed |
| Banned phrase list | Clear (false positive only: client copy “villa owners” on About) |
| Thin pages (&lt;150 words) | None among crawled HTML routes |
| Overview headings | Electrical `Our Approach`, Mechanical `How We Work`, Fire `Scope and Responsibility` as `<h2>` |

## 3. Still blocked on client input

See `docs/client-todo.md` and `docs/image-todo.md` (villa photos, legacy project scope confirmation, logo approvals, ISO numbers, insights publish-date confirm, two office project write-ups).

## 4. Responsive

Layout is static CSS; Header mobile accordion, sector grid, project masonry and CTA wrap are unchanged from prior pass. Spot-check at 1440 / 1024 / 768 / 360 after any further visual change.

## 5. Updated live URLs (this pass)

- https://electech-black.vercel.app/
- https://electech-black.vercel.app/about/who-we-are
- https://electech-black.vercel.app/solutions/electrical
- https://electech-black.vercel.app/solutions/mechanical-plumbing
- https://electech-black.vercel.app/solutions/fire-protection
- https://electech-black.vercel.app/solutions/fire-protection/fire-fighting-fire-alarm-installation
- https://electech-black.vercel.app/projects
- https://electech-black.vercel.app/projects/dubai-hills-villa-256
- https://electech-black.vercel.app/insights/mep-handover-package
- https://electech-black.vercel.app/sitemap.xml

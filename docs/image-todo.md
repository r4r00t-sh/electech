# Image TODO — ElecTech MEP

Slots that still need real photography. Until provided, the site shows a dark navy block with the solution bucket icon (never a reused photo on the same page).

Drop files into `/public/images/` using the suggested filenames; the display map in `src/lib/media.ts` can then be pointed at them.

**Note:** Existing `/public/images/heroes/*.jpg` and `/public/images/services/*.jpg` were downloaded from the old WordPress site with a baked magenta/pink gradient. Those files have been neutralized in-repo. Prefer delivering clean, untinted originals (especially Dubai skyline heroes as `hero-1.jpg` … `hero-3.jpg`).

## Homepage hero

| Slot | Suggested file | Notes |
|------|----------------|-------|
| Hero slide 1–3 | `/public/images/hero-1.jpg` … `hero-3.jpg` (or `images/heroes/home-*.jpg`) | Full-bleed Dubai skyline / construction. Currently uses `images/heroes/home-1.jpg`–`home-3.jpg` when present. |

## Homepage sectors

| Sector | Status | Suggested file |
|--------|--------|----------------|
| Interior fit-out | Using `services/solar.jpg` temporarily | `/public/images/sectors/interior-fitout.jpg` |
| Villa developers | Placeholder | `/public/images/sectors/villa-developers.jpg` |
| Hospitality | Placeholder | `/public/images/sectors/hospitality.jpg` |
| Healthcare | Placeholder | `/public/images/sectors/healthcare.jpg` |
| Commercial | Placeholder | `/public/images/sectors/commercial.jpg` |
| Government | Placeholder | `/public/images/sectors/government.jpg` |
| Facility management | Placeholder | `/public/images/sectors/facility-management.jpg` |
| Residential | Placeholder | `/public/images/sectors/residential.jpg` |

## Client success stories (12 — all placeholders)

| Story | Suggested file | Topic match |
|-------|----------------|-------------|
| luxurious-villa-transformation | `/public/images/projects/al-zahiya-villa.jpg` | Villa exterior / MEP |
| hospitality-sector-excellence-sofitel | `/public/images/projects/sofitel-lobby.jpg` | Hotel lobby |
| amazon-ecommerce-office | `/public/images/projects/amazon-office.jpg` | Office interior |
| corporate-headquarters-upgrade-real-image | `/public/images/projects/real-image-hq.jpg` | Corporate HQ |
| healthcare-facility-upgrade-smart-salem | `/public/images/projects/smart-salem.jpg` | Medical interior |
| innovative-food-outlet-and-park-imdaad | `/public/images/projects/imdaad-outlet.jpg` | Food outlet |
| two-bedroom-flat-dhiraj-kumar | `/public/images/projects/two-bed-flat.jpg` | Flat interior |
| retail-space-innovation-atelier-difc | `/public/images/projects/atelier-difc.jpg` | Retail / DIFC |
| etisalat-office-kifaf | `/public/images/projects/etisalat-kifaf.jpg` | Office |
| logistics-office-development-gtz | `/public/images/projects/gtz-warehouse.jpg` | Logistics warehouse |
| government-office-modernization-anex | `/public/images/projects/anex-sharjah.jpg` | Government office |
| commercial-office-revamp-ascentia | `/public/images/projects/ascentia-office.jpg` | Commercial office |

## Insights / blog covers

| Post | Suggested file | Topic |
|------|----------------|-------|
| weekly-mep-progress-reports | `/public/images/insights/weekly-mep-reports.jpg` | Progress reporting |
| hvac-installation-checklist-dubai | `/public/images/insights/hvac-checklist.jpg` | HVAC |
| fire-alarm-fire-fighting-interfaces | `/public/images/insights/fire-interfaces.jpg` | Fire systems |

*(Homepage insight cards use navy placeholders so they do not repeat solution-card photos. Insights index may temporarily use related service JPGs until dedicated covers arrive.)*

## Page heroes (inner pages)

Prefer unique heroes per section when available. Until then pages reuse service photography via `PageHero` / `getServiceDisplayImage`. Dedicated replacements:

| Page | Suggested file |
|------|----------------|
| About | `/public/images/heroes/about.jpg` |
| Projects index | `/public/images/heroes/projects.jpg` |
| Insights index | `/public/images/heroes/insights.jpg` |
| Contact | `/public/images/heroes/contact.jpg` |
| Solutions index | `/public/images/heroes/solutions.jpg` |

## Certifications & logos

| Slot | Notes |
|------|-------|
| ISO / Civil Defence badges | `[CLIENT TO PROVIDE]` — homepage shows dashed placeholders |
| Client logo strip | `[CLIENT TO PROVIDE logos]` |

## Stats copy that needs numbers

| Stat | Status |
|------|--------|
| Projects delivered | `[CLIENT TO PROVIDE]` |
| Sectors served | `[CLIENT TO PROVIDE]` |

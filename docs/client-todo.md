# Client to-do / open confirmations

Items marked during the content revision against `docs/client-revision.md`.
Nothing listed here should appear as a visitor-facing placeholder on the live site.

## Solar Power Plant (ON HOLD)

- [ ] Confirm Electech's actual solar PV delivery and approval capabilities before republishing `/solutions/electrical/solar-power-plant-installation`.
- [ ] Keep page unpublished: removed from nav / mega-menu / footer / Solutions cards / Electrical links / sitemap.

## Projects — new villas

- [ ] Client to share two additional office project descriptions (promised after the three villas).
- [ ] Supply approved Electech project photographs matched by filename for:
  - Dubai Hills Villa 256
  - Dubai Hills Villa 39
  - DAMAC Hills Villa F307F
- [ ] Set real `publishedAt` dates in `src/content/posts.ts` for each insights post (none shown until set).

## Projects — published (need photo and/or scope confirm)

| Slug | Status | Gaps |
| --- | --- | --- |
| `dubai-hills-villa-256` | Published (highlights) | Matched villa photo (navy tile until supplied) |
| `dubai-hills-villa-39` | Published (highlights) | Matched villa photo |
| `damac-hills-villa-f307f` | Published (highlights) | Matched villa photo |
| `mep-works-amazon-ecommerce-office` | Published (photo) | Confirm scope wording; Technical highlights |
| `mep-works-innovative-food-outlet-imdaad` | Published (photo) | Confirm scope wording; Technical highlights |
| `mep-works-atelier-difc` | Published (photo) | Confirm scope wording; Technical highlights |
| `mep-works-etisalat-kifaf` | Published (photo) | Confirm scope wording; Technical highlights |

## Projects — draft (hidden until highlights and/or verified photo)

Summary-only legacy cards with no Technical highlights and no matched photo are `draft: true` (404, excluded from `/projects`, related lists, sitemap).

| Slug | Gaps to un-draft |
| --- | --- |
| `mep-works-al-zahiya-villa` | Verified photo; Technical highlights; exact MEP scope; client name (not “Property Owner”) |
| `mep-works-sofitel-hotel` | Verified Electech-scope photo; Technical highlights; exact package vs whole-hotel claim |
| `mep-works-real-image-headquarters` | Verified photo; Technical highlights; exact MEP scope |
| `mep-works-smart-salem-city-walk` | Verified photo; Technical highlights; exact MEP scope |
| `mep-works-two-bedroom-flat` | Verified photo; Technical highlights; exact MEP scope |
| `mep-works-gtz-shipping` | Verified photo; Technical highlights; exact MEP scope |
| `mep-works-anex-building-hamariya` | Verified photo; Technical highlights; exact MEP scope; **client name** (Anex Building is the location); **sector** (government office floor — confirm Commercial / Government / other before showing Sector) |
| `mep-works-ascentia-office` | Verified photo; Technical highlights; exact MEP scope |

- [ ] Verify every testimonial for publication (`verified: true`). All current testimonials default to `verified: false`.

## Clients / logos

- [ ] Confirm logo publication permission per client (`approved: true`) and relationship type (direct customer / main contractor / project-associated / unknown).

Clients currently `approved: false` (all):
- OAKS Hotels & Resorts (Hospitality)
- Mövenpick (Hospitality)
- Mall of the Emirates (Retail)
- Circle Mall (Retail)
- Sofitel (Hospitality)
- Dubai Mall (Retail)
- Imdaad (Facility Management)
- DAMAC
- wasl properties
- A&T Group Interiors (Fit-out and Contractors)
- Nakheel
- Amazon (Commercial)
- Summertown Interiors (Fit-out and Contractors)
- Emaar
- Multiline
- VAA
- Al Barari (Residential)
- Arco Interiors (Fit-out and Contractors)
- Etisalat (Commercial)
- Dubai Hills Estate (Residential)
- Ibn Battuta Mall (Retail)
- KG Interiors (Fit-out and Contractors)
- Liva Insurance (Commercial)
- JLL (Commercial)
- Visualize Interior Decorations LLC (Fit-out and Contractors)
- Axis Communications (Commercial)
- Emirates National Facilities Management (Facility Management)
- Real Image (Commercial)
- Ascentia (Commercial)
- Grand Hyatt (Hospitality)
- Barr + Wray
- AEW Technik
- Royal Classic Contracting (Fit-out and Contractors)
- CRI
- Kalandoor Group
- Vogo Grand Hotel (Hospitality)
- MEBS Facility Services (Facility Management)
- Marriott (Hospitality)
- The Ritz-Carlton (Hospitality)

## Contact / address

- [ ] Confirm map pin for **Hamsah-A Building, Al Karama, Dubai, UAE, P.O. Box 87556**.

## Certifications

- [ ] Provide ISO certificate numbers, validity dates and issuing bodies for ISO 9001, 14001 and 45001.

## Insights

- [ ] Confirm technical accuracy of the three published posts (handover package, HVAC checklist, electrical DBs). Claims about weekly reporting / drills / unsupported regulations removed.
- [ ] Confirm and set `publishedAt` for all three posts in `src/content/posts.ts` (UI hides the date until set).

## Domain

- [ ] When the real domain is ready, set `NEXT_PUBLIC_SITE_URL` on Vercel Production to that origin (code currently blocks `electechmep.com` and uses `https://electech-black.vercel.app`).

## Other

- [ ] Confirm EV Charging Infrastructure as a menu replacement for Solar, or leave Solar removed until ready.

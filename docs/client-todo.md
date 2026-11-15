# Client to-do / open confirmations

Final master prompt (15 November 2026). Nothing listed here should appear as a visitor-facing placeholder.

## Legal / company

- [ ] Confirm exact legal establishment year (do not publish “Since 2012” / “Established 2012” / schema `foundingDate` until confirmed).
- [ ] Confirm careers / recruitment inbox (default form recipient `info@electechmep.com`).
- [ ] Confirm enquiry form recipients (`FORM_TO_EMAIL`; optional `FORM_CC_EMAIL` / `projects@electechmep.com`).
- [ ] Confirm working hours (not shown until confirmed).
- [ ] Privacy notice legal review and retention period (`/privacy` is noindex until approved).
- [ ] Secure drawing upload (optional): until then Contact asks users to email `projects@electechmep.com` (no public file store).
- [ ] Confirm when real domain goes live so `NEXT_PUBLIC_SITE_URL` can point at `electechmep.com`.

## Address

- [ ] Confirm map pin for **Hamsah-A Building, Oud Metha, Dubai, UAE, P.O. Box 87556** (site now uses Oud Metha everywhere; Al Karama removed).

## Certifications

- [ ] ISO 9001 / 14001 / 45001: certificate numbers, issuer, scope, expiry, and permission to display certificate images.

## Clients / logos

- [ ] For every logo in `data/clients.json`: set `approved: true` only with publication permission, and set `relationship` to `direct customer` | `main contractor` | `project-associated`.
- [ ] Confirm renamed logo “Visualize Interior Decorations LLC” (was “Decstations” in source).
- [ ] Fit-out firms moved into “Fit-out and Contractors” where obvious (A&T, Summertown, Arco, KG, Visualize, Royal Classic, Multiline, Kalandoor); confirm remaining Other / `[CLIENT TO PROVIDE]` sectors.

All current logos remain `approved: false` (production grid empty until permissions land). Every entry in `data/clients.json` needs logo permission + relationship type.

## Projects

- [ ] Supply / approve Electech photos for Dubai Hills Villa 256, Villa 39, DAMAC Hills Villa F307F (galleries + heroes).
- [ ] F307F: confirm whether optional four-stage water filtration was authorised and installed — until then copy uses “water filtration provisions”.
- [ ] Confirm publication permission for each project name / location naming.
- [ ] Two commercial-office project write-ups still outstanding (same card/detail format).
- [ ] Legacy 12 “Client Success Stories” remain `published: false` (301 → `/projects`) until scope + naming permissions verified.

## Solar

- [ ] Confirm actual solar PV delivery/approval capabilities before republishing the Solar page.

## Insights

- [ ] Technically review articles (named reviewer, date, internal links) before republishing `/insights`.

## Testimonials

- [ ] Verify testimonials (`verified: true`) with name, role, company and publication permission before any widget is shown.

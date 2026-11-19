# Image TODO — Electech

Slots still waiting for dedicated Electech photography. Until then the site uses client-uploaded works where available, or **subject-matched stock** from `/public/images/pages`, `/heroes` and `/services`. Never show visitor-facing “[CLIENT TO PROVIDE photo]” text. Never reuse the same image twice on one page.

## Villa projects (stock stand-ins live)

| Project | Hero (villa exterior stock) | Gallery (MEP detail stock) |
|---------|-----------------------------|----------------------------|
| Dubai Hills Villa 256 | `projects/villas/villa-256-exterior.jpg` | DB, power, ELV, pumps, mechanical, panel work |
| Dubai Hills Villa 39 | `projects/villas/villa-39-exterior.jpg` | Distribution, sanitary, ELV, pumps, plumbing, site electrical |
| DAMAC Hills Villa F307F | `projects/villas/villa-f307f-exterior.jpg` | HVAC ducts/AC, electrical, sanitary, pipework, MEP plant |

Replace with real Electech villa photos when available.

## Industry cards

| Card | Image |
|------|--------|
| Commercial Offices | Electech works — office fit-out |
| Premium Residential Villas | Stock — finished bathroom / plumbing |
| Retail & F&B | Electech works — retail gallery |
| Hospitality | Electech works — dining interior |
| Other Facilities | Stock — MEP plant corridor |

## Page heroes (distinct)

| Page | Asset |
|------|--------|
| About | `pages/about-glass-tower.jpg` |
| Careers | `pages/who-we-are-construction.jpg` |
| Industries | `projects/works/office-commercial-fitout-01.jpg` |

## Who We Are — Our Capabilities cards

No dedicated Electech project photos exist yet for these subjects. Cards currently use **subject-matched library stand-ins** via `data/capabilities.json`. Replace each `image` path with Electech works photography when available; set `image` to `null` for a navy icon tile if a stand-in must be removed before a match exists.

| Card | Current stand-in | Needed Electech subject | Suggested path |
|------|------------------|-------------------------|----------------|
| Mechanical | `pages/hvac-equipment-detail.jpg` | HVAC ductwork / ventilation | `projects/works/capabilities-mechanical-hvac-01.jpg` |
| Electrical | `pages/electrical-installation-work.jpg` | Distribution boards and lighting | `projects/works/capabilities-electrical-db-lighting-01.jpg` |
| Plumbing | `heroes/hero-03-plant-room-pipework.jpg` | Pipework, pumps and/or filtration | `projects/works/capabilities-plumbing-pumps-01.jpg` |
| Fire-protection support | `pages/fire-control-panels.jpg` | Fire-alarm / containment install | `projects/works/capabilities-fire-alarm-01.jpg` |
| Maintenance | `pages/maintenance-workshop.jpg` | Technician servicing MEP equipment | `projects/works/capabilities-maintenance-service-01.jpg` |

Do not reuse the same image across two capability cards. Do not use finished interior lifestyle shots that do not show the system subject.

## Do not use for villa galleries

- Welding / fabrication stock (`why-choose-workshop.jpg`)
- Other-project interiors attributed as that villa’s exterior or lifestyle spaces unless captioned as system detail only

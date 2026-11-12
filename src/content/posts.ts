import type { BlogPost } from "./types";

export const posts: BlogPost[] = [
  {
    title: "What to expect from a weekly MEP progress report",
    slug: "weekly-mep-progress-reports",
    excerpt:
      "Transparent communication keeps fit-outs on track. Here is how structured weekly reporting reduces surprises on Dubai MEP programmes.",
    category: "Project Delivery",
    author: "ElecTech Engineering Team",
    publishedAt: "2025-09-12",
    readingTime: 8,
    ogImage: "/images/pages/certifications-documents.jpg",
    ogAlt: "Professional reviewing project documents and charts at a desk", featured: true,
    body: `
## Why weekly reporting matters

MEP programmes move quickly once ceilings open and materials arrive. A clear weekly report helps owners, main contractors and consultants see what was completed, what is blocked and what comes next. On fit-outs in Dubai and across the UAE, many trades share the same voids, shafts and plant rooms — so status that is only discussed verbally is easy to lose.

A written weekly update creates a shared record. It does not replace site walks or coordination meetings; it supports them by giving everyone the same baseline before they arrive.

## What a useful report usually covers

Practical reports typically include progress against the agreed sequence, material deliveries and shortages, inspections completed or pending, safety observations and upcoming hold points. Photos and simple mark-ups make status understandable without a site visit. Calling out interfaces — for example between ductwork and cable trays — helps other packages plan protection and access.

When something is waiting on information, the report should say so plainly: which RFI or approval is open, and which area is affected. That transparency lets decision-makers unblock work instead of discovering the delay at the next ceiling close-up.

[CLIENT TO PROVIDE: sample report excerpt or client-approved process detail.]

## How different stakeholders use the information

Fit-out firms use the report to coordinate finishes and furniture. Facility managers use it to plan shutdowns and access. Developers use it to protect handover dates and understand residual risk. Consultants use it to schedule inspections while systems are still visible.

A consistent format week to week matters more than elaborate design. Stakeholders should recognise the same sections immediately: completed, in progress, blocked, next week, and decisions needed.

## Photos, mark-ups and evidence

A short photo set of first-fix services before concealment is often more valuable than paragraphs of prose. Labelling photos by zone (floor, wing, plant room) keeps archives searchable after handover. Where testing is complete, attaching certificates or checklists to the weekly pack reduces last-minute document hunts.

## Closing thought

Transparent reporting is not bureaucracy — it is how professional MEP teams protect trust on live sites. Teams that write down status early spend less time reconstructing history when something changes.

[CLIENT TO PROVIDE: brand-approved example metrics or anonymised sample pages.]

Clear documentation, honest status and early coordination remain the practical foundations of professional MEP delivery on live sites across the UAE.
`.trim(),
  },
  {
    title: "HVAC installation checklist for Dubai fit-outs",
    slug: "hvac-installation-checklist-dubai",
    excerpt:
      "A practical checklist for HVAC installation on commercial and residential fit-outs — from survey through commissioning.",
    category: "Mechanical",
    author: "ElecTech Engineering Team",
    publishedAt: "2025-10-03",
    readingTime: 8,
    ogImage: "/images/pages/hvac-equipment-detail.jpg",
    ogAlt: "Modern interior with exposed ceiling services and glazing",
    body: `
## Start with the survey

Confirm loads, outdoor unit positions, condensate routes and acoustic constraints before ordering equipment. Early coordination with interiors avoids rework when ceilings, bulkheads and joinery are already fixed. In Dubai fit-outs, rooftop and balcony plant locations often compete with architectural screening — agreeing access and structural support early saves programme time.

Check power availability for outdoor units, drainage points for condensate and any restrictions on working hours for noisy tasks. Record existing conditions with photos so later variations are easy to explain.

## Installation essentials

Protect finished floors, support ductwork correctly, seal joints, and keep access panels reachable. Document deviations before concealment. Flexible connections, vibration isolation and clear labelling help facilities teams after occupation. Where multiple systems share a ceiling void, agree a stacking order so the last trade is not forced into unsafe working positions.

Indoor units should be level, drain lines correctly graded, and filters accessible. Outdoor units need clear airflow and service space. Cable trays and pipe routes should leave room for future maintenance without cutting new openings in finished ceilings.

## Commissioning and handover

Balance airflows, verify controls and record readings. Hand over O&M information your facilities team can actually use: model numbers, set-points, filter sizes and warranty contacts. A short demonstration of controls for the end user prevents many early call-backs.

[CLIENT TO PROVIDE: brand-approved checklist items and local authority notes.]

## Common coordination pitfalls

Late furniture layouts can move thermostat positions into ineffective locations. Late lighting packages can clash with diffusers. Kitchen extract and dining comfort systems need make-up air considered together, not as separate afterthoughts. Flagging these interfaces in weekly reports keeps them visible until closed.

## Closing thought

A disciplined HVAC checklist is less about paperwork and more about preventing invisible mistakes above the ceiling. Survey thoroughly, install cleanly, commission honestly and leave the building operable.

[CLIENT TO PROVIDE: any client-specific standards or preferred equipment notes for publication.]

Clear documentation, honest status and early coordination remain the practical foundations of professional MEP delivery on live sites across the UAE.
`.trim(),
  },
  {
    title: "Fire alarm and fire fighting: getting the interfaces right",
    slug: "fire-alarm-fire-fighting-interfaces",
    excerpt:
      "Life-safety systems only work as a whole. How electrical, mechanical and fire packages must interface on UAE projects.",
    category: "Fire Protection",
    author: "ElecTech Engineering Team",
    publishedAt: "2025-11-01",
    readingTime: 8,
    ogImage: "/images/pages/fire-control-panels.jpg",
    ogAlt: "Fire sprinkler riser with alarm bell and control valves",
    body: `
## Systems that must talk

Detectors, panels, dampers, pumps and suppression devices only protect people when interfaces are designed and tested together. A fire alarm that cannot release the correct dampers, or a sprinkler system that is not coordinated with detection logic, leaves gaps that drawings alone will not reveal on site.

Cause-and-effect matrices should be agreed early and kept current when layouts change. Electrical, mechanical and fire packages need a shared understanding of which signal triggers which action — and who is responsible for each cable, pipe and device.

## Coordination on site

Agree cause-and-effect matrices early. Sequence electrical and pipework so testing windows are realistic. Keep authorities informed through the approved design pathway for the project. Protect devices from dust and damage during fit-out, and verify that ceiling types still allow the specified detector spacing after design changes.

Where fire stopping seals penetrations through compartments, schedule the work as a rolling package: new openings appear throughout the fit-out, and seals must catch up before inspections.

[CLIENT TO PROVIDE: deeper technical guidance approved for publication.]

## Testing without theatre

Integrated testing should prove the matrix under controlled conditions, with observers who understand what “pass” looks like. Record results, defects and retests. Temporary isolations for other trades must be restored before occupation so the building is not left with disabled life-safety functions.

## Maintenance after handover

A certified install still needs drills, inspections and responsive maintenance. That is where long-term safety is won. Facilities teams need labelled panels, clear zone charts and contacts for call-outs. Scheduled maintenance keeps devices clean, batteries healthy and valves accessible.

## Closing thought

Life-safety performance is a system property, not a single product. Getting interfaces right on paper and on site is the difference between a certificate and genuine readiness.

[CLIENT TO PROVIDE: authority-facing wording and any brand-approved case notes.]

Clear documentation, honest status and early coordination remain the practical foundations of professional MEP delivery on live sites across the UAE.
`.trim(),
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getLatestPosts(limit = 3) {
  return [...posts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit);
}

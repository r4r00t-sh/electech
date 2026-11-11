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
    readingTime: 5,
    ogImage: "/images/services/hvac-installation.jpg",
    ogAlt: "Engineer reviewing MEP progress documentation on site",
    featured: true,
    body: `
## Why weekly reporting matters

MEP programmes move quickly once ceilings open and materials arrive. A clear weekly report helps owners, main contractors and consultants see what was completed, what is blocked and what comes next.

## What we include

Our reports typically cover progress against the programme, material status, inspections, safety observations and upcoming hold points. Photos and mark-ups make status easy to understand without a site visit.

[CLIENT TO PROVIDE: sample report excerpt or client-approved process detail.]

## How clients use the information

Fit-out firms use the report to coordinate finishes. Facility managers use it to plan shutdowns. Developers use it to protect handover dates.

## Closing thought

Transparent reporting is not bureaucracy — it is how professional MEP teams protect trust on live sites across Dubai and the wider UAE.
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
    readingTime: 6,
    ogImage: "/images/services/hvac-refrigeration.jpg",
    ogAlt: "HVAC ductwork installation in a commercial ceiling void",
    body: `
## Start with the survey

Confirm loads, outdoor unit positions, condensate routes and acoustic constraints before ordering equipment. Early coordination with interiors avoids rework.

## Installation essentials

Protect finished floors, support ductwork correctly, seal joints, and keep access panels reachable. Document deviations before concealment.

## Commissioning

Balance airflows, verify controls and record readings. Hand over O&M information your facilities team can actually use.

[CLIENT TO PROVIDE: brand-approved checklist items and local authority notes.]
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
    readingTime: 5,
    ogImage: "/images/services/fire-alarm.jpg",
    ogAlt: "Fire alarm panel and sprinkler interface in a commercial building",
    body: `
## Systems that must talk

Detectors, panels, dampers, pumps and suppression devices only protect people when interfaces are designed and tested together.

## Coordination on site

Agree cause-and-effect matrices early. Sequence electrical and pipework so testing windows are realistic. Keep authorities informed.

[CLIENT TO PROVIDE: deeper technical guidance approved for publication.]

## Maintenance after handover

A certified install still needs drills, inspections and responsive maintenance. That is where long-term safety is won.
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

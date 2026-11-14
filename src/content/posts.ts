import type { BlogPost } from "./types";

/**
 * Insights posts — [CLIENT TO REVIEW] technical accuracy before treating as final.
 * Removed weekly-reporting, drill, and unsupported regulatory claims.
 */
function readingTimeMinutes(body: string) {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

const handoverBody = `
## Why handover documentation matters

When MEP installation work is complete, the receiving team needs a clear record of what was installed, how it was tested within the contractual scope, and where key equipment and isolators are located. Organised handover documentation supports operation, maintenance and later modifications.

## Documents commonly included

A typical MEP handover package may include as-built or marked-up drawings for the works completed, equipment schedules and data sheets, applicable test records, circuit or valve identification lists, and operating notes for installed systems. The exact contents depend on the agreed project scope and the systems Electech was appointed to install.

## Photographs and labelling

Photos of first-fix services before concealment, labelled by zone, help facilities teams understand what sits above ceilings and behind finishes. Clear labelling of boards, isolators and valves shortens the time needed to find and check equipment after occupation.

## Coordination at handover

Handover works best when drawings, test records and equipment information are collected as work progresses rather than reconstructed at the end. Where other specialist parties are responsible for final system acceptance, Electech prepares the installation records within its scope and supports coordination with those parties.

## Closing thought

Clear documentation is part of dependable MEP delivery. A practical handover package helps clients and facilities teams operate the systems Electech installed with confidence.
`.trim();

export const posts: BlogPost[] = [
  {
    // [CLIENT TO CONFIRM] publish date — slug renamed from weekly-mep-progress-reports
    title: "What a typical MEP handover package includes",
    slug: "mep-handover-package",
    excerpt:
      "A practical overview of documents and records commonly gathered at MEP handover for commercial and residential projects in the UAE.",
    category: "Project Delivery",
    author: "Electech Engineering Team",
    publishedAt: "2025-09-12",
    readingTime: readingTimeMinutes(handoverBody),
    ogImage: "/images/pages/certifications-documents.jpg",
    ogAlt: "Professional reviewing project documents and charts at a desk",
    featured: true,
    body: handoverBody,
  },
  {
    // [CLIENT TO REVIEW]
    title: "HVAC installation checklist for Dubai fit-outs",
    slug: "hvac-installation-checklist-dubai",
    excerpt:
      "A practical checklist for HVAC installation on commercial and residential fit-outs — from survey through applicable testing.",
    category: "Mechanical",
    author: "Electech Engineering Team",
    publishedAt: "2025-10-03",
    readingTime: 0,
    ogImage: "/images/pages/hvac-equipment-detail.jpg",
    ogAlt: "Modern interior with exposed ceiling services and glazing",
    body: `
## Start with the survey

Confirm loads, outdoor unit positions, condensate routes and acoustic constraints before ordering equipment. Early coordination with interiors avoids rework when ceilings, bulkheads and joinery are already fixed. In Dubai fit-outs, rooftop and balcony plant locations often compete with architectural screening — agreeing access and structural support early saves programme time.

Check power availability for outdoor units, drainage points for condensate and any restrictions on working hours for noisy tasks. Record existing conditions with photos so later variations are easy to explain.

## Installation essentials

Protect finished floors, support ductwork correctly, seal joints, and keep access panels reachable. Document deviations before concealment. Flexible connections, vibration isolation and clear labelling help facilities teams after occupation. Where multiple systems share a ceiling void, agree a stacking order so the last trade is not forced into unsafe working positions.

Indoor units should be level, drain lines correctly graded, and filters accessible. Outdoor units need clear airflow and service space. Cable trays and pipe routes should leave room for future maintenance without cutting new openings in finished ceilings.

## Testing and handover

Balance airflows where required, verify controls and record readings within the agreed scope. Hand over operating information your facilities team can use: model numbers, set-points, filter sizes and warranty contacts. A short demonstration of controls for the end user prevents many early call-backs.

## Common coordination pitfalls

Late furniture layouts can move thermostat positions into ineffective locations. Late lighting packages can clash with diffusers. Kitchen extract and dining comfort systems need make-up air considered together, not as separate afterthoughts. Flagging these interfaces early keeps them visible until closed.
`.trim(),
  },
  {
    // [CLIENT TO REVIEW]
    title: "Electrical distribution boards on live fit-outs",
    slug: "electrical-distribution-boards-fit-outs",
    excerpt:
      "Practical notes on DB and SMDB works during occupied or finishing-stage fit-outs — sequencing, labelling and testing records.",
    category: "Electrical",
    author: "Electech Engineering Team",
    publishedAt: "2025-11-01",
    readingTime: 0,
    ogImage: "/images/pages/electrical-installation-work.jpg",
    ogAlt: "Organised circuit-breaker panel with colour-coded wiring",
    body: `
## Plan isolations carefully

On live or finishing-stage sites, distribution board works need clear isolation planning with the main contractor and building management. Agree which circuits can be taken offline, for how long, and who authorises energisation afterwards.

Protect finished areas when boards are open. Keep spare ways labelled and circuits identified so later modifications do not rely on memory.

## Labelling and load schedules

Circuit identification and load schedules support safe operation and future changes. Record breaker ratings, cable sizes and the areas served. Update the schedule when modifications are made during the project.

## Testing records

Applicable electrical inspections and testing records belong with the handover pack for Electech's scope. Keep certificates and checklists with the board schedule so facilities teams are not hunting for documents after occupation.

## Coordination with other services

Cable routes, containment and board locations need to stay coordinated with mechanical and plumbing packages sharing the same voids. Early agreement on access panels and clearances reduces rework when ceilings close.
`.trim(),
  },
].map((post) => ({
  ...post,
  readingTime:
    post.readingTime > 0
      ? post.readingTime
      : readingTimeMinutes(post.body),
}));

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getLatestPosts(limit = 3) {
  return [...posts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit);
}

export const BUCKETS = [
  {
    id: "mep",
    label: "MEP Solutions",
    short: "MEP",
    href: "/solutions/mep",
    accent: "mechanical" as const,
    summary:
      "Coordinated mechanical, electrical and plumbing installations for new projects, renovations and system upgrades.",
  },
  {
    id: "mechanical-plumbing",
    label: "Mechanical and Plumbing Services",
    short: "Mechanical & Plumbing",
    href: "/solutions/mechanical-plumbing",
    accent: "mechanical" as const,
    summary:
      "HVAC, ventilation, water supply, drainage, water filtration, pumps and solar water heating.",
  },
  {
    id: "electrical",
    label: "Electrical Services",
    short: "Electrical",
    href: "/solutions/electrical",
    accent: "electrical" as const,
    summary:
      "Power distribution, architectural lighting, electrical modifications, equipment connections and ELV infrastructure.",
  },
  {
    id: "fire-protection",
    label: "Fire Protection Support",
    short: "Fire Protection Support",
    href: "/solutions/fire-protection",
    accent: "fire" as const,
    summary:
      "Fire alarm and firefighting installation works, containment, piping and coordination with approved specialists.",
  },
  {
    id: "maintenance",
    label: "Maintenance Services",
    short: "Maintenance",
    href: "/solutions/maintenance",
    accent: "maintenance" as const,
    summary:
      "Preventive and corrective MEP maintenance for commercial offices, residential villas and other properties.",
  },
] as const;

export type BucketId = (typeof BUCKETS)[number]["id"];

export function getBucket(id: BucketId) {
  return BUCKETS.find((b) => b.id === id)!;
}

export function bucketLabel(id: BucketId) {
  return getBucket(id).label;
}

/** Prefer a specific secondary bucket tag when primary is the generic MEP bucket. */
export function storyBucketLabel(story: {
  primaryBucket: BucketId;
  secondaryBuckets: BucketId[];
}) {
  if (story.primaryBucket === "mep" && story.secondaryBuckets.length) {
    return story.secondaryBuckets
      .map((id) => getBucket(id).short)
      .join(" · ");
  }
  return getBucket(story.primaryBucket).short;
}

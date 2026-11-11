export const BUCKETS = [
  {
    id: "mep",
    label: "MEP Solutions",
    short: "MEP",
    href: "/solutions/mep",
    accent: "mechanical" as const,
    summary:
      "Integrated mechanical, electrical and plumbing delivery for complex fit-outs and new builds.",
  },
  {
    id: "mechanical-plumbing",
    label: "Mechanical and Plumbing Services",
    short: "Mechanical & Plumbing",
    href: "/solutions/mechanical-plumbing",
    accent: "mechanical" as const,
    summary:
      "HVAC and plumbing systems designed for comfort, efficiency and reliable drainage.",
  },
  {
    id: "electrical",
    label: "Electrical Services",
    short: "Electrical",
    href: "/solutions/electrical",
    accent: "electrical" as const,
    summary:
      "Power, ELV and solar installations engineered for safety and long-term performance.",
  },
  {
    id: "fire-protection",
    label: "Fire Protection and Safety Services",
    short: "Fire Protection",
    href: "/solutions/fire-protection",
    accent: "fire" as const,
    summary:
      "Fire fighting, alarm and fire-stopping systems that protect people and property.",
  },
  {
    id: "maintenance",
    label: "Maintenance Services",
    short: "Maintenance",
    href: "/solutions/maintenance",
    accent: "maintenance" as const,
    summary:
      "Planned maintenance contracts that keep MEP assets reliable and compliant.",
  },
] as const;

export type BucketId = (typeof BUCKETS)[number]["id"];

export function getBucket(id: BucketId) {
  return BUCKETS.find((b) => b.id === id)!;
}

export function bucketLabel(id: BucketId) {
  return getBucket(id).label;
}

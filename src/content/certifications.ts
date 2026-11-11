import type { Certification } from "./types";

export const certifications: Certification[] = [
  {
    id: "iso-9001",
    name: "ISO 9001 (placeholder)",
    description:
      "[CLIENT TO PROVIDE] Quality management certification details and certificate file.",
    badgeImage: "/images/certs/iso-9001.svg",
    order: 1,
  },
  {
    id: "iso-45001",
    name: "ISO 45001 (placeholder)",
    description:
      "[CLIENT TO PROVIDE] Occupational health & safety certification details.",
    badgeImage: "/images/certs/iso-45001.svg",
    order: 2,
  },
  {
    id: "iso-14001",
    name: "ISO 14001 (placeholder)",
    description:
      "[CLIENT TO PROVIDE] Environmental management certification details.",
    badgeImage: "/images/certs/iso-14001.svg",
    order: 3,
  },
  {
    id: "civil-defence",
    name: "Civil Defence approvals (placeholder)",
    description:
      "[CLIENT TO PROVIDE] Dubai Civil Defence / relevant authority approvals.",
    badgeImage: "/images/certs/civil-defence.svg",
    order: 4,
  },
];

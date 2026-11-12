import type { Certification } from "./types";

/** From client certifications artwork: ISO 9001, ISO 14001, ISO 45001 */
export const certifications: Certification[] = [
  {
    id: "iso-9001",
    name: "ISO 9001",
    description:
      "Quality management systems — International Organization for Standardization.",
    badgeImage: "/images/certs/iso-9001.svg",
    order: 1,
  },
  {
    id: "iso-14001",
    name: "ISO 14001",
    description:
      "Environmental management systems — International Organization for Standardization.",
    badgeImage: "/images/certs/iso-14001.svg",
    order: 2,
  },
  {
    id: "iso-45001",
    name: "ISO 45001",
    description:
      "Occupational health and safety management systems — International Organization for Standardization.",
    badgeImage: "/images/certs/iso-45001.svg",
    order: 3,
  },
];

export const certificationsBoard = {
  src: "/images/certs/iso-board.jpg",
  alt: "ISO 9001, ISO 14001 and ISO 45001 certifications",
} as const;

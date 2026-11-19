import type { Story } from "@/content/types";

export type ProjectSectorId =
  | "all"
  | "commercial-offices"
  | "residential-villas"
  | "retail-fb"
  | "hospitality"
  | "other-facilities";

export type ProjectSectorFilter = {
  id: ProjectSectorId;
  label: string;
  match: (story: Story) => boolean;
};

/** Sector filters used on /projects — aligned with Industries. */
export const PROJECT_SECTOR_FILTERS: ProjectSectorFilter[] = [
  { id: "all", label: "All", match: () => true },
  {
    id: "commercial-offices",
    label: "Commercial Offices",
    match: (s) =>
      s.sector === "Commercial Offices" || s.sector === "Commercial",
  },
  {
    id: "residential-villas",
    label: "Residential Villas",
    match: (s) =>
      s.sector === "Residential Villas" || s.sector === "Residential",
  },
  {
    id: "retail-fb",
    label: "Retail & F&B",
    match: (s) =>
      s.sector === "Retail" ||
      s.sector === "Retail & F&B" ||
      s.sector === "F&B",
  },
  {
    id: "hospitality",
    label: "Hospitality",
    match: (s) => s.sector === "Hospitality",
  },
  {
    id: "other-facilities",
    label: "Other Facilities",
    match: (s) => {
      if (!s.sector) return false;
      return ![
        "Commercial Offices",
        "Commercial",
        "Residential Villas",
        "Residential",
        "Retail",
        "Retail & F&B",
        "F&B",
        "Hospitality",
      ].includes(s.sector);
    },

  },
];

export function isProjectSectorId(value: string | null | undefined): value is ProjectSectorId {
  return PROJECT_SECTOR_FILTERS.some((f) => f.id === value);
}

export function projectsHrefForSector(id: ProjectSectorId) {
  if (id === "all") return "/projects";
  return `/projects?sector=${id}`;
}

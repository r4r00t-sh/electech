import clientsData from "../../data/clients.json";

export type ClientRecord = {
  name: string;
  slug: string;
  logo: string;
  sector: string;
  sourceFile: string;
  order: number;
  featured: boolean;
  website?: string;
  storySlug?: string;
};

export const clients = clientsData as ClientRecord[];

export const OTHER_SECTOR = "Other";

export function getClientsSorted() {
  return [...clients].sort((a, b) => a.order - b.order);
}

export function getFeaturedClients() {
  return getClientsSorted().filter((c) => c.featured);
}

export function getClientSectors(): string[] {
  const known = new Set<string>();
  for (const c of clients) {
    if (c.sector !== "[CLIENT TO PROVIDE]") known.add(c.sector);
  }
  return [...known].sort((a, b) => a.localeCompare(b));
}

/** Display sector label — unknown sectors group under Other */
export function clientDisplaySector(sector: string) {
  return sector === "[CLIENT TO PROVIDE]" ? OTHER_SECTOR : sector;
}

export function filterClientsBySector(sector: string | "All") {
  const all = getClientsSorted();
  if (sector === "All") return all;
  if (sector === OTHER_SECTOR) {
    return all.filter((c) => c.sector === "[CLIENT TO PROVIDE]");
  }
  return all.filter((c) => c.sector === sector);
}

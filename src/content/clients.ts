import clientsData from "../../data/clients.json";

export type ClientRelationship =
  | "direct customer"
  | "main contractor"
  | "project-associated"
  | "unknown";

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
  approved: boolean;
  relationship: ClientRelationship;
};

export const clients = clientsData as ClientRecord[];

export const OTHER_SECTOR = "Other";

function showUnapprovedLogos() {
  const env = process.env.SHOW_UNAPPROVED_LOGOS;
  if (env === "true") return true;
  if (env === "false") return false;
  return process.env.NODE_ENV !== "production";
}

export function getVisibleClients() {
  const all = [...clients].sort((a, b) => a.order - b.order);
  if (showUnapprovedLogos()) return all;
  return all.filter((c) => c.approved);
}

export function getHiddenClientCount() {
  if (showUnapprovedLogos()) return 0;
  return clients.filter((c) => !c.approved).length;
}

export function getHiddenClientSectors(): string[] {
  if (showUnapprovedLogos()) return [];
  const sectors = new Set<string>();
  for (const c of clients) {
    if (!c.approved && c.sector && c.sector !== "[CLIENT TO PROVIDE]") {
      sectors.add(c.sector);
    }
  }
  return [...sectors].sort((a, b) => a.localeCompare(b));
}

export function getClientsSorted() {
  return getVisibleClients();
}

export function getFeaturedClients(limit = 12) {
  return getVisibleClients()
    .filter((c) => c.featured)
    .slice(0, limit);
}

export function getClientsByRelationship() {
  const groups: Record<ClientRelationship, ClientRecord[]> = {
    "direct customer": [],
    "main contractor": [],
    "project-associated": [],
    unknown: [],
  };
  for (const c of getVisibleClients()) {
    groups[c.relationship ?? "unknown"].push(c);
  }
  return groups;
}

export function getClientSectors(): string[] {
  const known = new Set<string>();
  for (const c of getVisibleClients()) {
    if (c.sector !== "[CLIENT TO PROVIDE]") known.add(c.sector);
  }
  return [...known].sort((a, b) => a.localeCompare(b));
}

export function clientDisplaySector(sector: string) {
  return sector === "[CLIENT TO PROVIDE]" ? OTHER_SECTOR : sector;
}

export function filterClientsBySector(sector: string | "All") {
  const all = getVisibleClients();
  if (sector === "All") return all;
  if (sector === OTHER_SECTOR) {
    return all.filter((c) => c.sector === "[CLIENT TO PROVIDE]");
  }
  return all.filter((c) => c.sector === sector);
}

/** All clients needing logo permission — for docs, not the UI. */
export function getClientsNeedingPermission() {
  return clients.filter((c) => !c.approved);
}

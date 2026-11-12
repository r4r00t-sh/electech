import { getClientsSorted } from "@/content/clients";

/** @deprecated Prefer data/clients.json via getClientsSorted / getFeaturedClients */
export const clientLogos = getClientsSorted().map((c) => ({
  id: c.slug,
  name: c.name,
  logo: c.logo,
  order: c.order,
}));

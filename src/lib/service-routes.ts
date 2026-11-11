import { getServiceBySlug } from "@/content/services";

/** Map URL path segments to service slug */
export const SERVICE_PATHS: Record<string, string> = {
  "/solutions/mep": "mep",
  "/solutions/mechanical-plumbing": "mechanical-plumbing",
  "/solutions/mechanical-plumbing/hvac-installation": "hvac-installation",
  "/solutions/mechanical-plumbing/plumbing-drainage-installation":
    "plumbing-drainage-installation",
  "/solutions/electrical": "electrical",
  "/solutions/electrical/electrical-installation": "electrical-installation",
  "/solutions/electrical/extra-low-voltage-installation":
    "extra-low-voltage-installation",
  "/solutions/electrical/solar-power-plant-installation":
    "solar-power-plant-installation",
  "/solutions/fire-protection": "fire-protection",
  "/solutions/fire-protection/fire-fighting-fire-alarm-installation":
    "fire-fighting-fire-alarm-installation",
  "/solutions/fire-protection/fire-stopping-sealant-application":
    "fire-stopping-sealant-application",
  "/solutions/maintenance": "maintenance",
};

export function serviceForPath(path: string) {
  const slug = SERVICE_PATHS[path];
  return slug ? getServiceBySlug(slug) : undefined;
}

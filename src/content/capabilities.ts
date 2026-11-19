import capabilitiesData from "../../data/capabilities.json";

export type CapabilityIconId =
  | "wind"
  | "zap"
  | "droplets"
  | "flame"
  | "wrench";

export type CapabilityRecord = {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
  icon: CapabilityIconId;
  /** Matches the SVG group id in the building cross-section */
  svgGroupId: string;
  /** Absolute public path, or null for navy icon tile */
  image: string | null;
  imageAlt: string;
};

export const capabilities = capabilitiesData as CapabilityRecord[];

export function getCapabilities() {
  return capabilities;
}

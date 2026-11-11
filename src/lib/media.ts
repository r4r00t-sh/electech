import type { BucketId } from "@/lib/buckets";

/**
 * Unique photography inventory + display-layer image map.
 * Prefer files the client drops into /public/images (hero-*.jpg, etc.).
 */

export type MediaRef = {
  src: string;
  alt: string;
  lowRes?: boolean;
  placeholder?: boolean;
  bucket?: BucketId;
};

export const media = {
  hvacWide: {
    src: "/images/services/hvac-installation.jpg",
    alt: "Air-conditioning ductwork and HVAC installation on a Dubai project",
  },
  hvacSquare: {
    src: "/images/services/hvac-refrigeration.jpg",
    alt: "Air-conditioning and refrigeration plant installation",
  },
  electricalWide: {
    src: "/images/services/electrical-installation.jpg",
    alt: "Electrical installation and cable containment on site",
  },
  electricalSmall: {
    src: "/images/services/electrical-system.jpg",
    alt: "Electrical system installation detail",
    lowRes: true,
  },
  plumbingWide: {
    src: "/images/services/plumbing.jpg",
    alt: "Plumbing pipework installation in a building services shaft",
  },
  plumbingSmall: {
    src: "/images/services/plumbing-drainage.jpg",
    alt: "Plumbing and drainage installation",
    lowRes: true,
  },
  elv: {
    src: "/images/services/elv.jpg",
    alt: "Extra low voltage / low-current system installation in Dubai",
    lowRes: true,
  },
  fireWide: {
    src: "/images/services/fire-alarm.jpg",
    alt: "Fire alarm and life-safety system installation in the UAE",
  },
  fireSmall: {
    src: "/images/services/fire-alarm-install.jpg",
    alt: "Fire alarm installation works in Dubai",
    lowRes: true,
  },
  solar: {
    src: "/images/services/solar.jpg",
    alt: "Solar power plant installation in Dubai and Sharjah",
    lowRes: true,
  },
} as const;

export function placeholder(bucket: BucketId, label: string): MediaRef {
  return {
    src: "",
    alt: `${label} — [CLIENT TO PROVIDE photo]`,
    placeholder: true,
    bucket,
  };
}

/** Default hero slides when no /images/hero-*.jpg are present */
export const defaultHeroSlides: MediaRef[] = [
  media.hvacWide,
  media.electricalWide,
  media.plumbingWide,
];

/**
 * Homepage solution cards — must not collide with default hero slides
 * (hvacWide / electricalWide / plumbingWide).
 */
export const homeBucketImages: Record<BucketId, MediaRef> = {
  mep: media.fireWide,
  "mechanical-plumbing": media.hvacSquare,
  electrical: media.electricalSmall,
  "fire-protection": media.fireSmall,
  maintenance: media.plumbingSmall,
};

/** Why-choose panel on home — remaining unique asset */
export const homeWhyImage: MediaRef = media.elv;

/**
 * Homepage sectors — unique slots. With dedicated hero-*.jpg / home-*.jpg
 * in place, leftover service JPGs can fill some tiles without colliding
 * with the hero. Remaining tiles stay navy+icon placeholders.
 */
export const homeSectorImages: { label: string; image: MediaRef }[] = [
  { label: "Interior fit-out", image: media.solar },
  {
    label: "Villa developers",
    image: placeholder("mep", "Villa developers sector"),
  },
  {
    label: "Hospitality",
    image: placeholder("mechanical-plumbing", "Hospitality sector"),
  },
  {
    label: "Healthcare",
    image: placeholder("mechanical-plumbing", "Healthcare sector"),
  },
  {
    label: "Commercial",
    image: placeholder("electrical", "Commercial sector"),
  },
  {
    label: "Government",
    image: placeholder("fire-protection", "Government sector"),
  },
  {
    label: "Facility management",
    image: placeholder("maintenance", "Facility management sector"),
  },
  {
    label: "Residential",
    image: placeholder("mep", "Residential sector"),
  },
];

/**
 * Story display images — unique slots; placeholders until project photos arrive.
 */
export const storyImages: Record<string, MediaRef> = {
  "luxurious-villa-transformation": placeholder(
    "mep",
    "Al Zahiya villa exterior / MEP",
  ),
  "hospitality-sector-excellence-sofitel": placeholder(
    "mep",
    "Sofitel hotel lobby / hospitality MEP",
  ),
  "amazon-ecommerce-office": placeholder(
    "mep",
    "Amazon e-commerce office interior",
  ),
  "corporate-headquarters-upgrade-real-image": placeholder(
    "mep",
    "Real Image corporate headquarters",
  ),
  "healthcare-facility-upgrade-smart-salem": placeholder(
    "mechanical-plumbing",
    "Smart Salem medical fitness centre",
  ),
  "innovative-food-outlet-and-park-imdaad": placeholder(
    "mechanical-plumbing",
    "Imdaad food outlet and park",
  ),
  "two-bedroom-flat-dhiraj-kumar": placeholder(
    "mechanical-plumbing",
    "Two-bedroom flat interior",
  ),
  "retail-space-innovation-atelier-difc": placeholder(
    "electrical",
    "Atelier Gate Avenue DIFC retail",
  ),
  "etisalat-office-kifaf": placeholder("electrical", "Etisalat office Kifaf"),
  "logistics-office-development-gtz": placeholder(
    "electrical",
    "GTZ Shipping logistics warehouse / office",
  ),
  "government-office-modernization-anex": placeholder(
    "fire-protection",
    "Anex Building government office Sharjah",
  ),
  "commercial-office-revamp-ascentia": placeholder(
    "maintenance",
    "Ascentia commercial office",
  ),
};

export const serviceHeroImages: Record<string, MediaRef> = {
  mep: media.hvacWide,
  "mechanical-plumbing": media.hvacSquare,
  "hvac-installation": media.hvacWide,
  "plumbing-drainage-installation": media.plumbingWide,
  electrical: media.electricalWide,
  "electrical-installation": media.electricalWide,
  "extra-low-voltage-installation": media.elv,
  "solar-power-plant-installation": media.solar,
  "fire-protection": media.fireWide,
  "fire-fighting-fire-alarm-installation": media.fireWide,
  "fire-stopping-sealant-application": media.fireSmall,
  maintenance: media.plumbingSmall,
};

export const blogImages: Record<string, MediaRef> = {
  "weekly-mep-progress-reports": media.electricalSmall,
  "hvac-installation-checklist-dubai": media.hvacSquare,
  "fire-alarm-fire-fighting-interfaces": media.fireSmall,
};

export function getStoryDisplayImage(slug: string): MediaRef {
  return storyImages[slug] ?? placeholder("mep", "Project photography");
}

export function getServiceDisplayImage(slug: string): MediaRef {
  return serviceHeroImages[slug] ?? media.hvacWide;
}

export function getBlogDisplayImage(slug: string): MediaRef {
  return blogImages[slug] ?? placeholder("mep", "Insight cover");
}

/** @deprecated use homeBucketImages / getHeroSlides via server helper */
export const heroSlides = defaultHeroSlides;
export const bucketImages = homeBucketImages;

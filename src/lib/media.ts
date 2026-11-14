import type { BucketId } from "@/lib/buckets";

/**
 * Display-layer image map.
 *
 * Rules:
 * - Never use the legacy old-site service photo folder.
 * - Prefer client-uploaded /images/projects/works/* where the subject matches.
 * - Otherwise use the page heroes under /images/pages/*, matched by subject
 *   (hotel is not a restaurant bar; healthcare is not fire-alarm hardware).
 *
 * TODO(image): replace topic stand-ins with dedicated project photography —
 * see /docs/image-todo.md
 */

export type MediaRef = {
  src: string;
  alt: string;
  lowRes?: boolean;
  /** Silent navy fallback — never shows visitor-facing placeholder copy */
  placeholder?: boolean;
  bucket?: BucketId;
  objectPosition?: string;
};

/** Topic photography — all sourced from /images/pages (new site library). */
export const media = {
  hvacWide: {
    src: "/images/pages/hvac-equipment-detail.jpg",
    alt: "Modern interior with exposed ceiling services, glazing and ventilation",
  },
  hvacSquare: {
    src: "/images/pages/maintenance-workshop.jpg",
    alt: "Technician servicing a rooftop air-conditioning unit",
  },
  electricalWide: {
    src: "/images/pages/electrical-installation-work.jpg",
    alt: "Organised circuit-breaker panel with colour-coded wiring",
  },
  electricalSmall: {
    src: "/images/pages/electrical-power-infrastructure.jpg",
    alt: "Electrical switchgear corridor in an industrial control room",
  },
  plumbingWide: {
    src: "/images/pages/plumbing-finished-bathroom.jpg",
    alt: "Finished bathroom with modern plumbing fixtures",
  },
  plumbingSmall: {
    src: "/images/pages/mechanical-factory-floor.jpg",
    alt: "Industrial pipework, valves and gauges on a plant wall",
  },
  elv: {
    src: "/images/pages/elv-server-racks.jpg",
    alt: "Server racks with organised low-current cabling and status lights",
  },
  fireWide: {
    src: "/images/pages/fire-services-corridor.jpg",
    alt: "Red fire-sprinkler risers and valve manifold",
  },
  fireSmall: {
    src: "/images/pages/fire-control-panels.jpg",
    alt: "Fire sprinkler riser with alarm bell, gauges and control valves",
  },
  fireStopping: {
    src: "/images/pages/fire-stopping-interior.jpg",
    alt: "Open electrical junction box showing cable pathways that need fire-stopping",
  },
  solar: {
    src: "/images/pages/solar-rooftop-array.jpg",
    alt: "Photovoltaic solar array under a clear sky",
  },
  mepPlant: {
    src: "/images/pages/mep-industrial-systems.jpg",
    alt: "Switchgear corridor with coordinated building services",
  },
  corporateOffice: {
    src: "/images/pages/clients-corporate-office.jpg",
    alt: "Contemporary glazed office corridor and workspace",
  },
  cleanInterior: {
    src: "/images/pages/projects-office-interior.jpg",
    alt: "Bright, clean interior with glass partitions and a long corridor",
  },
  residentialTower: {
    src: "/images/pages/about-glass-tower.jpg",
    alt: "Modern apartment building exterior with glass and white cladding",
  },
  reportsDesk: {
    src: "/images/pages/certifications-documents.jpg",
    alt: "Professional reviewing project documents and charts at a desk",
  },
  drawingsDesk: {
    src: "/images/pages/insights-technical-desk.jpg",
    alt: "Architectural drawings and technical plans on a desk",
  },
} as const satisfies Record<string, MediaRef>;

/** Client-uploaded project photography (named works) */
export const works = {
  artGallery: {
    src: "/images/projects/works/retail-art-gallery-interior-01.jpg",
    alt: "Finished retail gallery interior with wall lighting and open floor space.",
  },
  commercialOffice: {
    src: "/images/projects/works/office-commercial-fitout-01.jpg",
    alt: "Open-plan commercial office with ceiling services and workstations.",
  },
  etisalatOffice: {
    src: "/images/projects/works/office-etisalat-open-plan-01.jpg",
    alt: "Open-plan office floor with desks, partitions and ceiling services.",
  },
  restaurantDining: {
    src: "/images/projects/works/restaurant-dining-interior-01.jpg",
    alt: "Restaurant dining room with tables, chairs and ambient lighting.",
  },
  restaurantBar: {
    src: "/images/projects/works/restaurant-bar-lounge-01.jpg",
    alt: "Restaurant bar and lounge with decorative lighting and seating.",
  },
} as const satisfies Record<string, MediaRef>;

/** Topic-matched stock photo when a dedicated project image is unavailable. */
export const bucketStockImages: Record<BucketId, MediaRef> = {
  mep: media.mepPlant,
  "mechanical-plumbing": media.plumbingSmall,
  electrical: media.electricalWide,
  "fire-protection": media.fireWide,
  maintenance: media.hvacSquare,
};

/**
 * Prefer a real stock photo over a blank tile. Kept name for call sites that
 * previously rendered a silent navy fallback.
 */
export function silentPlaceholder(bucket: BucketId, alt: string): MediaRef {
  const stock = bucketStockImages[bucket] ?? media.mepPlant;
  return {
    ...stock,
    alt: alt || stock.alt,
    bucket,
  };
}

/** Pick a stock photo for a bucket that is not in `excludeSrcs` when possible. */
export function stockImageForBucket(
  bucket: BucketId,
  alt: string,
  excludeSrcs: string[] = [],
): MediaRef {
  const primary = silentPlaceholder(bucket, alt);
  if (!primary.src || !excludeSrcs.includes(primary.src)) return primary;

  const alternates: MediaRef[] = [
    media.hvacWide,
    media.electricalSmall,
    media.plumbingWide,
    media.elv,
    media.fireSmall,
    media.solar,
    media.corporateOffice,
    media.cleanInterior,
    works.commercialOffice,
    works.artGallery,
  ];
  const free = alternates.find((img) => img.src && !excludeSrcs.includes(img.src));
  if (free) {
    return { ...free, alt: alt || free.alt, bucket };
  }
  return primary;
}

/** Default hero slides — prefer resolveHeroSlides() dedicated files */
export const defaultHeroSlides: MediaRef[] = [
  {
    src: "/images/heroes/hero-02-electrical-installation.jpg",
    alt: "Electrician installing wiring at an electrical distribution box.",
    objectPosition: "center right",
  },
  {
    src: "/images/heroes/hero-03-plant-room-pipework.jpg",
    alt: "Plant room stainless pipework and pump sets.",
    objectPosition: "center right",
  },
];

/** Unique inner-page heroes — never reuse home hero files */
export const pageHeroes = {
  about: {
    src: "/images/pages/about-glass-tower.jpg",
    alt: "Modern geometric building exterior with glass and white cladding.",
    objectPosition: "center right",
  },
  whoWeAre: {
    src: "/images/pages/electrical-installation-work.jpg",
    alt: "Organised electrical distribution board and installation work.",
    objectPosition: "center center",
  },
  vision: {
    src: "/images/pages/vision-site-plans.jpg",
    alt: "Engineer drafting plans with an architect’s scale on a desk.",
    objectPosition: "left center",
  },
  whyChoose: {
    src: "/images/pages/electrical-installation-work.jpg",
    alt: "Electech electrical installation — organised distribution board work.",
    objectPosition: "center center",
  },
  certifications: {
    src: "/images/pages/certifications-documents.jpg",
    alt: "Professional reviewing documents and charts at a work desk.",
    objectPosition: "center center",
  },
  solutions: {
    src: "/images/pages/mep-industrial-systems.jpg",
    alt: "Electech MEP installation — coordinated building-services infrastructure.",
    objectPosition: "center center",
  },
  projects: {
    src: "/images/pages/projects-office-interior.jpg",
    alt: "Bright modern office interior ready for fit-out handover.",
    objectPosition: "center center",
  },
  insights: {
    src: "/images/pages/insights-technical-desk.jpg",
    alt: "Architectural drawings and technical plans on a study desk.",
    objectPosition: "center 35%",
  },
  clients: {
    src: "/images/pages/clients-corporate-office.jpg",
    alt: "Contemporary glazed office workspace representing client environments.",
    objectPosition: "center center",
  },
  contact: {
    src: "/images/pages/contact-dubai-coastline.jpg",
    alt: "Dubai skyline at night with towers under construction.",
    objectPosition: "center 35%",
  },
} as const satisfies Record<string, MediaRef>;

/**
 * Homepage solution cards — one image per bucket, matched by subject.
 * Maintenance is a technician servicing plant (never solar); MEP is an
 * integrated switchgear / plant corridor.
 */
export const homeBucketImages: Record<BucketId, MediaRef> = {
  mep: media.mepPlant,
  "mechanical-plumbing": media.plumbingSmall,
  electrical: media.electricalWide,
  "fire-protection": media.fireWide,
  maintenance: media.hvacSquare,
};

/** Why-choose panel on home — craftsmanship / delivery, not ELV racks */
export const homeWhyImage: MediaRef = {
  ...works.commercialOffice,
  alt: "Electech commercial office MEP installation with ceiling services",
  objectPosition: "center center",
};

/**
 * Homepage sectors — client-revision sector list with subject-matched photos.
 * Healthcare / Government / Facility management / Villa developers from the
 * older brief are not shown (client counters use this list); gaps noted in
 * /docs/image-todo.md.
 */
export const homeSectorImages: { label: string; image: MediaRef }[] = [
  {
    label: "Residential",
    image: {
      ...media.residentialTower,
      alt: "Residential building exterior",
    },
  },
  {
    label: "Commercial",
    image: {
      ...works.commercialOffice,
      alt: "Commercial office MEP fit-out",
    },
  },
  {
    label: "Retail",
    image: { ...works.artGallery, alt: "Retail interior MEP works" },
  },
  {
    label: "Hospitality",
    image: {
      ...works.restaurantDining,
      alt: "Hospitality dining interior",
    },
  },
  {
    label: "F&B",
    image: { ...works.restaurantBar, alt: "F&B lounge interior" },
  },
  {
    label: "Industrial",
    image: {
      ...media.mepPlant,
      alt: "Industrial building-services plant corridor",
    },
  },
  {
    label: "Building Maintenance",
    image: {
      ...media.hvacSquare,
      alt: "Technician servicing plant for building maintenance",
    },
  },
];

/**
 * Story heroes — one unique src per story (12/12) so the Projects index never
 * repeats a photo. Hotel uses the dining interior (not the bar); healthcare
 * uses a clean clinical-style interior (not fire-alarm hardware).
 */
/** Verified Electech works photos only. Missing slugs → navy tile (no stock). */
export const storyImages: Record<string, MediaRef> = {
  "mep-works-amazon-ecommerce-office": {
    ...works.commercialOffice,
    objectPosition: "center center",
    alt: "Commercial office MEP fit-out",
  },
  "mep-works-innovative-food-outlet-imdaad": {
    ...works.restaurantDining,
    objectPosition: "center 40%",
    alt: "Food outlet project photography",
  },
  "mep-works-atelier-difc": {
    ...works.artGallery,
    objectPosition: "center center",
    alt: "Retail MEP works photography",
  },
  "mep-works-etisalat-kifaf": {
    ...works.etisalatOffice,
    objectPosition: "center center",
    alt: "Etisalat office MEP works",
  },
};

/** Inline gallery — only verified Electech works photos. Empty = no gallery. */
export const storyGalleryImages: Record<string, MediaRef[]> = {};

export const serviceHeroImages: Record<string, MediaRef> = {
  mep: {
    src: "/images/pages/mep-industrial-systems.jpg",
    alt: "Industrial electrical switchgear corridor with coordinated building services.",
    objectPosition: "center center",
  },
  "mechanical-plumbing": {
    src: "/images/pages/mechanical-factory-floor.jpg",
    alt: "Industrial pipework, valves and gauges on a plant wall.",
    objectPosition: "center 40%",
  },
  "hvac-installation": {
    src: "/images/pages/hvac-equipment-detail.jpg",
    alt: "Exposed ceiling HVAC ductwork and diffusers in a modern interior.",
    objectPosition: "center 30%",
  },
  "plumbing-drainage-installation": {
    src: "/images/pages/plumbing-finished-bathroom.jpg",
    alt: "Finished bathroom with modern plumbing fixtures and ventilation.",
    objectPosition: "center center",
  },
  electrical: {
    src: "/images/pages/electrical-power-infrastructure.jpg",
    alt: "Industrial electrical control room with switchgear panels.",
    objectPosition: "left center",
  },
  "electrical-installation": {
    src: "/images/pages/electrical-installation-work.jpg",
    alt: "Organised circuit-breaker panel with colour-coded wiring.",
    objectPosition: "center center",
  },
  "extra-low-voltage-installation": {
    src: "/images/pages/elv-server-racks.jpg",
    alt: "Data centre racks with organised low-current cabling and status lights.",
    objectPosition: "center center",
  },
  "solar-power-plant-installation": {
    src: "/images/pages/solar-rooftop-array.jpg",
    alt: "Photovoltaic solar array under a clear sky.",
    objectPosition: "center right",
  },
  "fire-protection": {
    src: "/images/pages/fire-services-corridor.jpg",
    alt: "Red fire-sprinkler zone risers and valve manifold on a building exterior.",
    objectPosition: "center 45%",
  },
  "fire-fighting-fire-alarm-installation": {
    src: "/images/pages/fire-control-panels.jpg",
    alt: "Fire sprinkler riser with alarm bell, gauges and control valves.",
    objectPosition: "center 25%",
  },
  "fire-stopping-sealant-application": {
    src: "/images/pages/fire-stopping-interior.jpg",
    alt: "Open electrical switchboard showing cable pathways that require fire-stopping.",
    objectPosition: "center center",
  },
  maintenance: {
    src: "/images/pages/maintenance-workshop.jpg",
    alt: "Technician servicing a rooftop air-conditioning unit.",
    objectPosition: "center right",
  },
};

export const blogImages: Record<string, MediaRef> = {
  "mep-handover-package": {
    ...media.reportsDesk,
    objectPosition: "center 40%",
  },
  "hvac-installation-checklist-dubai": {
    ...media.hvacWide,
    objectPosition: "center 40%",
    alt: "Interior with exposed ceiling ductwork and diffusers",
  },
  "electrical-distribution-boards-fit-outs": {
    ...media.electricalWide,
    objectPosition: "center center",
  },
};

/**
 * Homepage insight cards — distinct from solutions / why / sector images.
 */
export const homeBlogImages: MediaRef[] = [
  { ...media.reportsDesk, objectPosition: "center 40%" },
  { ...media.hvacWide, objectPosition: "center 40%", alt: "Interior with exposed ceiling ductwork and diffusers" },
  { ...media.fireSmall, objectPosition: "center 25%" },
];

export function getStoryDisplayImage(slug: string): MediaRef {
  const mapped = storyImages[slug];
  if (mapped?.src) return mapped;
  return {
    src: "",
    alt: "Electech project photography pending",
    placeholder: true,
    bucket: "mep",
  };
}

export function getStoryGallery(slug: string): MediaRef[] {
  return storyGalleryImages[slug] ?? [];
}

export function getServiceDisplayImage(slug: string): MediaRef {
  return serviceHeroImages[slug] ?? media.mepPlant;
}

export function getBlogDisplayImage(slug: string): MediaRef {
  return blogImages[slug] ?? media.hvacWide;
}

/** @deprecated */
export const heroSlides = defaultHeroSlides;
export const bucketImages = homeBucketImages;
export const placeholder = silentPlaceholder;

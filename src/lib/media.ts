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

export function silentPlaceholder(bucket: BucketId, alt: string): MediaRef {
  return {
    src: "",
    alt,
    placeholder: true,
    bucket,
  };
}

/** Default hero slides — prefer resolveHeroSlides() dedicated files */
export const defaultHeroSlides: MediaRef[] = [
  {
    src: "/images/heroes/hero-02-construction-site-workers.jpg",
    alt: "Site workers in high-vis on an active slab.",
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
    src: "/images/pages/who-we-are-construction.jpg",
    alt: "Active construction site with tower cranes and structural works.",
    objectPosition: "center 40%",
  },
  vision: {
    src: "/images/pages/vision-site-plans.jpg",
    alt: "Engineer drafting plans with an architect’s scale on a desk.",
    objectPosition: "left center",
  },
  whyChoose: {
    src: "/images/pages/why-choose-workshop.jpg",
    alt: "Industrial fabricator welding steel with sparks on the shop floor.",
    objectPosition: "center right",
  },
  certifications: {
    src: "/images/pages/certifications-documents.jpg",
    alt: "Professional reviewing documents and charts at a work desk.",
    objectPosition: "center center",
  },
  solutions: {
    src: "/images/pages/solutions-fabrication.jpg",
    alt: "Live-site metalwork with sparks from cutting steel on site.",
    objectPosition: "center right",
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

/** Why-choose panel on home */
export const homeWhyImage: MediaRef = media.elv;

/**
 * Homepage sectors — all 8 matched to a subject-appropriate photo.
 * Government uses a civic-style glazed office (never the Etisalat photo).
 */
export const homeSectorImages: { label: string; image: MediaRef }[] = [
  { label: "Interior fit-out", image: works.artGallery },
  {
    label: "Villa developers",
    image: {
      src: "/images/pages/who-we-are-construction.jpg",
      alt: "High-rise construction for villa and residential programmes",
    },
  },
  { label: "Hospitality", image: works.restaurantDining },
  { label: "Healthcare", image: media.cleanInterior },
  { label: "Commercial", image: works.commercialOffice },
  { label: "Government", image: media.corporateOffice },
  { label: "Facility management", image: media.electricalSmall },
  { label: "Residential", image: media.residentialTower },
];

/**
 * Story heroes — one unique src per story (12/12) so the Projects index never
 * repeats a photo. Hotel uses the dining interior (not the bar); healthcare
 * uses a clean clinical-style interior (not fire-alarm hardware).
 */
export const storyImages: Record<string, MediaRef> = {
  "luxurious-villa-transformation": {
    ...media.plumbingWide,
    objectPosition: "center center",
    alt: "Finished luxury bathroom in a private villa",
  },
  "hospitality-sector-excellence-sofitel": {
    ...works.restaurantDining,
    objectPosition: "center 40%",
    alt: "Hospitality dining and lounge interior",
  },
  "amazon-ecommerce-office": {
    ...works.commercialOffice,
    objectPosition: "center center",
    alt: "Open-plan commercial office with ceiling services",
  },
  "corporate-headquarters-upgrade-real-image": {
    ...media.hvacWide,
    objectPosition: "center 40%",
    alt: "Corporate headquarters interior with glazing and meeting area",
  },
  "healthcare-facility-upgrade-smart-salem": {
    ...media.cleanInterior,
    objectPosition: "center center",
    alt: "Clean, bright facility interior with glass partitions",
  },
  "innovative-food-outlet-and-park-imdaad": {
    ...works.restaurantBar,
    objectPosition: "center center",
    alt: "Food outlet bar and lounge with decorative lighting",
  },
  "two-bedroom-flat-dhiraj-kumar": {
    ...media.residentialTower,
    objectPosition: "center center",
    alt: "Modern apartment building exterior",
  },
  "retail-space-innovation-atelier-difc": {
    ...works.artGallery,
    objectPosition: "center center",
    alt: "Contemporary retail gallery interior with feature lighting",
  },
  "etisalat-office-kifaf": {
    ...works.etisalatOffice,
    objectPosition: "center center",
    alt: "Etisalat open-plan office floor with ceiling services",
  },
  "logistics-office-development-gtz": {
    ...media.elv,
    objectPosition: "center center",
    alt: "Server racks and low-current cabling for a logistics operations hub",
  },
  "government-office-modernization-anex": {
    ...media.corporateOffice,
    objectPosition: "center center",
    alt: "Modernised office corridor and glazed workspace",
  },
  "commercial-office-revamp-ascentia": {
    ...media.hvacSquare,
    objectPosition: "center right",
    alt: "Technician servicing building air-conditioning plant",
  },
};

/** Inline gallery per story (2 each; never the story's own hero src). */
export const storyGalleryImages: Record<string, MediaRef[]> = {
  "luxurious-villa-transformation": [
    { ...media.electricalWide, alt: "Villa-style distribution board with labelled circuits" },
    { ...media.hvacWide, objectPosition: "center 40%", alt: "Finished interior with exposed ceiling air-conditioning services" },
  ],
  "hospitality-sector-excellence-sofitel": [
    { ...media.hvacWide, objectPosition: "center 40%", alt: "Hospitality-grade interior with ceiling air-conditioning services" },
    { ...media.elv, alt: "Low-current racks supporting smart building controls" },
  ],
  "amazon-ecommerce-office": [
    { ...media.elv, alt: "Data and low-current cabling for an office floor" },
    { ...media.electricalWide, alt: "Office electrical distribution board" },
  ],
  "corporate-headquarters-upgrade-real-image": [
    { ...media.corporateOffice, alt: "Corporate office corridor with glazed meeting rooms" },
    { ...media.electricalWide, alt: "Headquarters electrical distribution board" },
  ],
  "healthcare-facility-upgrade-smart-salem": [
    { ...media.plumbingSmall, alt: "Pipework, valves and gauges for domestic water services" },
    { ...media.hvacSquare, objectPosition: "center right", alt: "Technician servicing air-conditioning plant" },
  ],
  "innovative-food-outlet-and-park-imdaad": [
    { ...works.restaurantDining, alt: "Restaurant dining area with ambient lighting" },
    { ...media.plumbingSmall, alt: "Pipework and valves for water supply and drainage" },
  ],
  "two-bedroom-flat-dhiraj-kumar": [
    { ...media.plumbingWide, alt: "Finished bathroom with modern plumbing fixtures" },
    { ...media.electricalWide, alt: "Apartment-style distribution board with labelled circuits" },
  ],
  "retail-space-innovation-atelier-difc": [
    { ...media.electricalWide, alt: "Retail distribution board and lighting circuits" },
    { ...media.elv, alt: "Low-current racks for security and audio-visual systems" },
  ],
  "etisalat-office-kifaf": [
    { ...media.electricalWide, alt: "Office distribution board with labelled circuits" },
    { ...media.elv, alt: "Data racks and organised low-current cabling" },
  ],
  "logistics-office-development-gtz": [
    { ...media.electricalSmall, alt: "Switchgear corridor for a large facility" },
    { ...media.mepPlant, alt: "Integrated switchgear and plant corridor" },
  ],
  "government-office-modernization-anex": [
    { ...media.fireSmall, objectPosition: "center 25%", alt: "Fire sprinkler riser with alarm bell and control valves" },
    { ...media.fireStopping, alt: "Cable pathways that require fire-stopping" },
  ],
  "commercial-office-revamp-ascentia": [
    { ...media.hvacWide, objectPosition: "center 40%", alt: "Office interior with exposed ceiling services" },
    { ...media.electricalWide, alt: "Office electrical distribution board" },
  ],
};

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
  "weekly-mep-progress-reports": {
    ...media.reportsDesk,
    objectPosition: "center 40%",
  },
  "hvac-installation-checklist-dubai": {
    ...media.hvacWide,
    objectPosition: "center 40%",
    alt: "Interior with exposed ceiling ductwork and diffusers",
  },
  "fire-alarm-fire-fighting-interfaces": {
    ...media.fireSmall,
    objectPosition: "center 25%",
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
  return (
    storyImages[slug] ?? {
      ...media.mepPlant,
      alt: "ElecTech project photography",
    }
  );
}

export function getStoryGallery(slug: string): MediaRef[] {
  return storyGalleryImages[slug] ?? [
    { ...media.electricalWide, alt: "Electromechanical installation detail" },
    { ...media.plumbingSmall, alt: "Building services installation detail" },
  ];
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

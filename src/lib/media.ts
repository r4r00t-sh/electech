import type { BucketId } from "@/lib/buckets";

/**
 * Unique photography inventory + display-layer image map.
 * Prefer files the client drops into /public/images (hero-*.jpg, etc.).
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
  governmentEtisalat: {
    src: "/images/projects/works/office-etisalat-open-plan-01.jpg",
    alt: "Open-plan office floor with desks, partitions and ceiling services.",
  },
  restaurant1: {
    src: "/images/projects/works/restaurant-dining-interior-01.jpg",
    alt: "Restaurant dining room with tables, chairs and ambient lighting.",
  },
  restaurant2: {
    src: "/images/projects/works/restaurant-bar-lounge-01.jpg",
    alt: "Restaurant bar and lounge with decorative lighting and seating.",
  },
} as const;

export function silentPlaceholder(bucket: BucketId, alt: string): MediaRef {
  return {
    src: "",
    alt,
    placeholder: true,
    bucket,
  };
}

/** Default hero slides when no /images/hero-*.jpg / home-*.jpg are present */
export const defaultHeroSlides: MediaRef[] = [
  media.hvacWide,
  media.electricalWide,
  media.plumbingWide,
];

/**
 * Homepage solution cards — must not collide with hero home-*.jpg
 * (duplicates of hvacWide / electricalWide / plumbingWide).
 * Maintenance must NOT reuse the plumbing photo.
 */
export const homeBucketImages: Record<BucketId, MediaRef> = {
  mep: media.fireWide,
  "mechanical-plumbing": media.hvacSquare,
  electrical: media.electricalSmall,
  "fire-protection": media.fireSmall,
  maintenance: media.solar,
};

/** Why-choose panel on home */
export const homeWhyImage: MediaRef = media.elv;

/**
 * Homepage sectors — prefer client-uploaded works; remainder silent navy.
 * Must not collide with hero/solutions/blogs on the homepage.
 */
export const homeSectorImages: { label: string; image: MediaRef }[] = [
  { label: "Interior fit-out", image: works.artGallery },
  {
    label: "Villa developers",
    image: silentPlaceholder("mep", "Villa developers sector"),
  },
  { label: "Hospitality", image: works.restaurant2 },
  {
    label: "Healthcare",
    image: silentPlaceholder("mechanical-plumbing", "Healthcare sector"),
  },
  { label: "Commercial", image: works.commercialOffice },
  { label: "Government", image: works.governmentEtisalat },
  {
    label: "Facility management",
    image: silentPlaceholder("maintenance", "Facility management sector"),
  },
  {
    label: "Residential",
    image: silentPlaceholder("mep", "Residential sector"),
  },
];

/**
 * Story heroes — client works where matched; otherwise service library.
 * All 12 srcs unique for the Projects index.
 */
export const storyImages: Record<string, MediaRef> = {
  "luxurious-villa-transformation": {
    ...media.plumbingWide,
    objectPosition: "left center",
    alt: "Villa electromechanical services",
  },
  "hospitality-sector-excellence-sofitel": {
    ...works.restaurant2,
    objectPosition: "center 40%",
    alt: "Hospitality interior with electromechanical fit-out",
  },
  "amazon-ecommerce-office": {
    ...works.commercialOffice,
    objectPosition: "center center",
    alt: "Commercial office electromechanical fit-out",
  },
  "corporate-headquarters-upgrade-real-image": {
    ...media.electricalWide,
    objectPosition: "center top",
    alt: "Corporate headquarters electrical works",
  },
  "healthcare-facility-upgrade-smart-salem": {
    ...media.fireSmall,
    objectPosition: "center 35%",
    alt: "Healthcare facility building services",
  },
  "innovative-food-outlet-and-park-imdaad": {
    ...works.restaurant1,
    objectPosition: "center center",
    alt: "Food outlet / restaurant electromechanical fit-out",
  },
  "two-bedroom-flat-dhiraj-kumar": {
    ...media.solar,
    objectPosition: "right bottom",
    alt: "Residential apartment services",
  },
  "retail-space-innovation-atelier-difc": {
    ...works.artGallery,
    objectPosition: "center center",
    alt: "Art gallery / retail outlet fit-out",
  },
  "etisalat-office-kifaf": {
    ...works.governmentEtisalat,
    objectPosition: "center center",
    alt: "Etisalat office floor electromechanical works",
  },
  "logistics-office-development-gtz": {
    ...media.hvacSquare,
    objectPosition: "center 60%",
    alt: "Logistics facility electromechanical infrastructure",
  },
  "government-office-modernization-anex": {
    ...media.electricalSmall,
    objectPosition: "center 25%",
    alt: "Government office life-safety and electrical works",
  },
  "commercial-office-revamp-ascentia": {
    ...media.hvacWide,
    objectPosition: "center center",
    alt: "Commercial office building services",
  },
};

/** Inline gallery stand-ins per story (must differ from hero src on that page) */
export const storyGalleryImages: Record<string, MediaRef[]> = {
  "luxurious-villa-transformation": [
    { ...media.electricalSmall, objectPosition: "center center", alt: "Villa electrical distribution detail" },
    { ...media.hvacSquare, objectPosition: "center 40%", alt: "Villa HVAC plant detail" },
  ],
  "hospitality-sector-excellence-sofitel": [
    { ...media.elv, objectPosition: "center top", alt: "Hospitality low-current systems" },
    { ...media.fireWide, objectPosition: "left center", alt: "Hospitality life-safety installation" },
  ],
  "amazon-ecommerce-office": [
    { ...media.electricalWide, objectPosition: "center 30%", alt: "Office electrical installation" },
    { ...media.elv, objectPosition: "right center", alt: "Office ELV pathways" },
  ],
  "corporate-headquarters-upgrade-real-image": [
    { ...media.hvacWide, objectPosition: "right center", alt: "Headquarters HVAC services" },
    { ...media.electricalWide, objectPosition: "center center", alt: "Headquarters electrical services" },
  ],
  "healthcare-facility-upgrade-smart-salem": [
    { ...media.plumbingWide, objectPosition: "center 40%", alt: "Healthcare plumbing services" },
    { ...media.hvacSquare, objectPosition: "left top", alt: "Healthcare HVAC installation" },
  ],
  "innovative-food-outlet-and-park-imdaad": [
    { ...works.restaurant2, objectPosition: "center 55%", alt: "Restaurant bar and dining MEP context" },
    { ...media.plumbingWide, objectPosition: "center center", alt: "Food outlet plumbing services" },
  ],
  "two-bedroom-flat-dhiraj-kumar": [
    { ...media.plumbingWide, objectPosition: "left center", alt: "Apartment plumbing installation" },
    { ...media.electricalSmall, objectPosition: "right top", alt: "Apartment electrical installation" },
  ],
  "retail-space-innovation-atelier-difc": [
    { ...media.electricalWide, objectPosition: "center 20%", alt: "Retail electrical and lighting power" },
    { ...media.fireSmall, objectPosition: "center center", alt: "Retail life-safety devices" },
  ],
  "etisalat-office-kifaf": [
    { ...media.electricalWide, objectPosition: "center 50%", alt: "Office electrical services" },
    { ...media.elv, objectPosition: "left bottom", alt: "Office low-current systems" },
  ],
  "logistics-office-development-gtz": [
    { ...media.electricalWide, objectPosition: "center 70%", alt: "Logistics electrical infrastructure" },
    { ...media.solar, objectPosition: "right center", alt: "Logistics energy systems context" },
  ],
  "government-office-modernization-anex": [
    { ...media.fireWide, objectPosition: "center top", alt: "Fire alarm installation detail" },
    { ...media.fireSmall, objectPosition: "center center", alt: "Life-safety device installation" },
  ],
  "commercial-office-revamp-ascentia": [
    { ...media.elv, objectPosition: "left center", alt: "Office ELV installation" },
    { ...media.fireSmall, objectPosition: "center 40%", alt: "Office life-safety services" },
  ],
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
  // Maintenance must not use the plumbing photo
  maintenance: media.elv,
};

export const blogImages: Record<string, MediaRef> = {
  "weekly-mep-progress-reports": {
    ...media.electricalSmall,
    objectPosition: "center 20%",
    alt: "Engineer reviewing electrical progress on site",
  },
  "hvac-installation-checklist-dubai": {
    ...media.hvacSquare,
    objectPosition: "center 45%",
    alt: "HVAC installation checklist context — plant and ductwork",
  },
  "fire-alarm-fire-fighting-interfaces": {
    ...media.fireSmall,
    objectPosition: "center center",
    alt: "Fire alarm and fire fighting interface equipment",
  },
};

/**
 * Homepage insight cards — paths not used by solutions / why / sectors.
 * (Hero uses /images/heroes/home-*.jpg, so these service paths stay unique on /.)
 */
export const homeBlogImages: MediaRef[] = [
  {
    ...media.electricalWide,
    objectPosition: "center 30%",
    alt: "MEP progress reporting context",
  },
  {
    ...media.hvacWide,
    objectPosition: "center 55%",
    alt: "HVAC checklist context",
  },
  {
    ...media.plumbingWide,
    objectPosition: "left center",
    alt: "Fire systems coordination context",
  },
];

export function getStoryDisplayImage(slug: string): MediaRef {
  return (
    storyImages[slug] ?? {
      ...media.hvacWide,
      alt: "ElecTech project photography",
    }
  );
}

export function getStoryGallery(slug: string): MediaRef[] {
  return storyGalleryImages[slug] ?? [
    { ...media.electricalSmall, alt: "Electromechanical installation detail" },
    { ...media.plumbingSmall, alt: "Building services installation detail" },
  ];
}

export function getServiceDisplayImage(slug: string): MediaRef {
  return serviceHeroImages[slug] ?? media.hvacWide;
}

export function getBlogDisplayImage(slug: string): MediaRef {
  return blogImages[slug] ?? media.hvacWide;
}

/** @deprecated */
export const heroSlides = defaultHeroSlides;
export const bucketImages = homeBucketImages;
export const placeholder = silentPlaceholder;

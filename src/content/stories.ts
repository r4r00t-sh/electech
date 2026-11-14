import type { Story } from "./types";

/**
 * Projects — client-revision.md is source of truth.
 * Featured: three verified villa projects. Legacy cards converted to MEP-scope
 * format; missing verified fields listed in /docs/client-todo.md.
 *
 * Data-entry template for future projects (office x2 pending from client):
 * {
 *   title, slug, subtitle?, location, sector, client,
 *   primaryBucket, secondaryBuckets, scope, status, summary, body,
 *   highlights?, hasVerifiedPhoto?, featured?, testimonial?
 * }
 */
export const stories: Story[] = [
  {
    title: "Dubai Hills Villa 256",
    slug: "dubai-hills-villa-256",
    subtitle:
      "Premium Villa - Integrated Electrical, Plumbing & Specialist MEP Works",
    heroImage: "",
    heroAlt: "Dubai Hills Villa 256 MEP works",
    hasVerifiedPhoto: false,
    primaryBucket: "mep",
    secondaryBuckets: ["electrical", "mechanical-plumbing"],
    location: "Golf Place 2, Dubai Hills Estate, Dubai",
    sector: "Residential",
    scope:
      "Extensive electrical, plumbing and specialist MEP installations for a premium residential villa",
    status: "Completed | MEP Handover",
    summary:
      "Electech delivered extensive electrical, plumbing and specialist MEP installations for a premium residential villa, integrating modern lighting, power distribution, water systems and lifestyle facilities within the property's architectural design.",
    body: `Electech delivered extensive electrical, plumbing and specialist MEP installations for a premium residential villa, integrating modern lighting, power distribution, water systems and lifestyle facilities within the property's architectural design.

The works were completed with careful coordination of existing architectural finishes, followed by testing, commissioning and comprehensive MEP handover documentation.`,
    highlights: [
      "Electrical distribution upgrades, DB/SMDB modifications and EV charging infrastructure.",
      "Architectural, façade, landscape, staircase and garage floor LED lighting.",
      "ELV, DALI lighting-control and automation containment.",
      "Electrical and plumbing provisions for jacuzzi, sauna, outdoor BBQ and rooftop pergola.",
      "Power provisions for lift and garage shutter, including lift lighting installation.",
      "Water filtration, pumping system enhancements, outdoor service sockets and water supply points.",
    ],
    gallery: [],
    featured: true,
  },
  {
    title: "Dubai Hills Villa 39",
    slug: "dubai-hills-villa-39",
    subtitle:
      "Premium Residential Villa - Electrical & Plumbing Enhancements",
    heroImage: "",
    heroAlt: "Dubai Hills Villa 39 MEP works",
    hasVerifiedPhoto: false,
    primaryBucket: "mep",
    secondaryBuckets: ["electrical", "mechanical-plumbing"],
    location: "Fairway, Dubai Hills Estate, Dubai",
    sector: "Residential",
    scope:
      "Comprehensive electrical and plumbing enhancements for a premium residential villa",
    status: "Completed",
    summary:
      "Electech delivered comprehensive electrical and plumbing enhancements for a premium residential villa, combining architectural lighting solutions, power infrastructure and upgraded water services with careful integration into the property's finishes.",
    body: `Electech delivered comprehensive electrical and plumbing enhancements for a premium residential villa, combining architectural lighting solutions, power infrastructure and upgraded water services with careful integration into the property's finishes.

The project was executed through coordinated site installation, testing, commissioning and final MEP handover.`,
    highlights: [
      "Electrical distribution modifications and dedicated power provisions.",
      "Architectural, landscape and concealed LED lighting installations.",
      "ELV, DALI and automation containment infrastructure.",
      "Pumping system enhancements and associated plumbing modifications.",
      "Premium sanitaryware installation and service connections.",
    ],
    gallery: [],
    featured: true,
  },
  {
    title: "DAMAC Hills Villa F307F",
    slug: "damac-hills-villa-f307f",
    subtitle:
      "Premium Villa - Comprehensive MEP Renovation & Modernization",
    heroImage: "",
    heroAlt: "DAMAC Hills Villa F307F MEP works",
    hasVerifiedPhoto: false,
    primaryBucket: "mep",
    secondaryBuckets: ["electrical", "mechanical-plumbing"],
    location: "DAMAC Hills, Dubai",
    sector: "Residential",
    scope:
      "Comprehensive MEP renovation and modification works for a premium residential villa",
    status: "MEP Handover Completed",
    summary:
      "Electech undertook comprehensive MEP renovation and modification works for a premium residential villa, upgrading electrical, HVAC and plumbing infrastructure to accommodate contemporary lighting, smart-home provisions and revised architectural requirements.",
    body: `Electech undertook comprehensive MEP renovation and modification works for a premium residential villa, upgrading electrical, HVAC and plumbing infrastructure to accommodate contemporary lighting, smart-home provisions and revised architectural requirements.

All works were coordinated with the Main Contractor's approved designs, client specifications and site requirements.`,
    highlights: [
      "Electrical distribution modifications, LED lighting, drivers, profiles and decorative fixtures.",
      "HVAC ductwork modifications, AC grilles and exhaust ventilation.",
      "Plumbing, drainage, rainwater modifications and sanitaryware installations.",
      "Water filtration provisions and associated service connections.",
      "Motion sensors, smart-home electrical provisions and ELV infrastructure.",
      "Coordinated MEP services for client-selected equipment and architectural features.",
    ],
    gallery: [],
    featured: true,
  },

  // --- Legacy portfolio cards (MEP-scope format; details pending client confirmation) ---
  {
    title: "MEP works for Al Zahiya Villa",
    slug: "mep-works-al-zahiya-villa",
    heroImage: "",
    heroAlt: "MEP works for Al Zahiya Villa",
    hasVerifiedPhoto: false,
    primaryBucket: "mep",
    secondaryBuckets: ["electrical", "mechanical-plumbing"],
    client: "Property Owner",
    location: "Al Zahiya Villa 5-SPA-46, Sharjah",
    sector: "Residential",
    scope: "Electromechanical package for a residential villa",
    status: "Completed",
    summary:
      "Electech provided electromechanical works for a residential villa project in Al Zahiya, Sharjah.",
    body: "Electech provided electromechanical works for a residential villa project in Al Zahiya, Sharjah.",
    gallery: [],
    testimonial: {
      quote:
        "Electech exceeded our expectations in every way. Their attention to detail and dedication to quality were evident throughout the project. We now have a beautiful home that perfectly blends modern amenities with traditional charm.",
      author: "Property Owner",
      role: "Property Owner – Al Zahiya Villa 5-SPA-46, Sharjah",
      company: "",
      verified: false,
    },
  },
  {
    title: "MEP works for Sofitel Hotel",
    slug: "mep-works-sofitel-hotel",
    heroImage: "",
    heroAlt: "MEP works for Sofitel Hotel",
    hasVerifiedPhoto: false,
    primaryBucket: "mep",
    secondaryBuckets: ["mechanical-plumbing"],
    client: "Sofitel Hotel",
    location: "Dubai, UAE",
    sector: "Hospitality",
    scope: "Electromechanical renovation support for a hospitality property",
    status: "Completed",
    summary:
      "Electech provided electromechanical renovation support for a Sofitel Hotel property in Dubai.",
    body: "Electech provided electromechanical renovation support for a Sofitel Hotel property in Dubai.",
    gallery: [],
    testimonial: {
      quote:
        "The renovation of our flagship property has been a tremendous success. Electech’s dedication to excellence and innovative approach have elevated our guest experience to new heights.",
      author: "Assistant Chief Engineer",
      role: "Assistant Chief Engineer",
      company: "Sofitel Hotel",
      verified: false,
    },
  },
  {
    title: "MEP works for Amazon e-commerce office",
    slug: "mep-works-amazon-ecommerce-office",
    heroImage: "/images/projects/works/office-commercial-fitout-01.jpg",
    heroAlt: "Commercial office MEP fit-out",
    hasVerifiedPhoto: true,
    primaryBucket: "mep",
    secondaryBuckets: ["electrical"],
    client: "Multiline",
    location: "Dubai, UAE",
    sector: "Commercial",
    scope: "MEP works for a large e-commerce office fit-out",
    status: "Completed",
    summary:
      "Electech provided MEP works for an Amazon e-commerce office project in Dubai, delivered through Multiline.",
    body: "Electech provided MEP works for an Amazon e-commerce office project in Dubai, delivered through Multiline.",
    gallery: [],
    testimonial: {
      quote:
        "Electech’s efficient project management have created an office space that perfectly supports our operations and enhances our team’s productivity. The new workspace is not only functional but also inspiring.",
      author: "Projects Manager",
      role: "Projects Manager",
      company: "Multiline",
      verified: false,
    },
  },
  {
    title: "MEP works for Real Image headquarters",
    slug: "mep-works-real-image-headquarters",
    heroImage: "",
    heroAlt: "MEP works for Real Image headquarters",
    hasVerifiedPhoto: false,
    primaryBucket: "mep",
    secondaryBuckets: ["electrical"],
    client: "Real Image",
    location: "Dubai, UAE",
    sector: "Commercial",
    scope: "Electromechanical upgrade works for a corporate headquarters",
    status: "Completed",
    summary:
      "Electech provided electromechanical upgrade works for the Real Image corporate headquarters in Dubai.",
    body: "Electech provided electromechanical upgrade works for the Real Image corporate headquarters in Dubai.",
    gallery: [],
    testimonial: {
      quote:
        "Electech’s expertise and attention to detail have transformed our headquarters into a modern, efficient workspace. The feedback from our employees has been overwhelmingly positive.",
      author: "Design Head",
      role: "Design Head",
      company: "Real Image",
      verified: false,
    },
  },
  {
    title: "MEP works for Smart Salem Medical Fitness Centre",
    slug: "mep-works-smart-salem-city-walk",
    heroImage: "",
    heroAlt: "MEP works for Smart Salem Medical Fitness Centre",
    hasVerifiedPhoto: false,
    primaryBucket: "mep",
    secondaryBuckets: ["mechanical-plumbing"],
    client: "Smart Salem Medical Fitness Centre",
    location: "City Walk, Dubai",
    sector: "Healthcare",
    scope: "Electromechanical upgrade works for a healthcare facility",
    status: "Completed",
    summary:
      "Electech provided electromechanical upgrade works for Smart Salem Medical Fitness Centre at City Walk, Dubai.",
    body: "Electech provided electromechanical upgrade works for Smart Salem Medical Fitness Centre at City Walk, Dubai.",
    gallery: [],
    testimonial: {
      quote:
        "Electech’s professionalism and expertise were evident throughout the project. The upgraded facilities have greatly improved our patient care and operational efficiency. We highly recommend their services.",
      author: "Facility Manager",
      role: "Facility Manager",
      company: "Smart Salem Medical Fitness Centre – City Walk",
      verified: false,
    },
  },
  {
    title: "MEP works for Innovative Food Outlet",
    slug: "mep-works-innovative-food-outlet-imdaad",
    heroImage: "/images/projects/works/restaurant-dining-interior-01.jpg",
    heroAlt: "Food outlet project photography",
    hasVerifiedPhoto: true,
    primaryBucket: "mep",
    secondaryBuckets: ["mechanical-plumbing"],
    client: "Imdaad",
    location: "Dubai, UAE",
    sector: "Hospitality",
    scope: "MEP design and execution support for an innovative food outlet",
    status: "Completed",
    summary:
      "Electech provided MEP works for an innovative food outlet project with Imdaad in Dubai.",
    body: "Electech provided MEP works for an innovative food outlet project with Imdaad in Dubai.",
    gallery: [],
    testimonial: {
      quote:
        "Electech’s expertise and commitment to quality were instrumental in the success of our innovative food outlet project. Their attention to detail and ability to meet deadlines were impressive. We look forward to collaborating on future projects.",
      author: "Facilities Manager",
      role: "Facilities Manager (Last Exist 11 – Innovative Food Outlet)",
      company: "Imdaad",
      verified: false,
    },
  },
  {
    title: "MEP works for two-bedroom flat",
    slug: "mep-works-two-bedroom-flat",
    heroImage: "",
    heroAlt: "MEP works for two-bedroom flat",
    hasVerifiedPhoto: false,
    primaryBucket: "mechanical-plumbing",
    secondaryBuckets: ["electrical"],
    client: "Mr. Dhiraj Kumar",
    location: "Dubai, UAE",
    sector: "Residential",
    scope: "MEP works for a two-bedroom flat fit-out",
    status: "Completed",
    summary:
      "Electech provided MEP works for a two-bedroom flat project in Dubai.",
    body: "Electech provided MEP works for a two-bedroom flat project in Dubai.",
    gallery: [],
    testimonial: {
      quote:
        "Electech turned our flat into a dream home. Their innovative design solutions and attention to detail have made our space both beautiful and functional. We couldn’t be happier with the outcome.",
      author: "Flat Owner",
      role: "Flat Owner",
      company: "Mr. Dhiraj Kumar",
      verified: false,
    },
  },
  {
    title: "MEP works for Atelier retail store",
    slug: "mep-works-atelier-difc",
    heroImage: "/images/projects/works/retail-art-gallery-interior-01.jpg",
    heroAlt: "Retail MEP works photography",
    hasVerifiedPhoto: true,
    primaryBucket: "electrical",
    secondaryBuckets: ["mep"],
    client: "Atelier",
    location: "Gate Avenue, DIFC, Dubai",
    sector: "Retail",
    scope: "MEP works for a retail environment at Gate Avenue DIFC",
    status: "Completed",
    summary:
      "Electech provided MEP works for the Atelier retail project at Gate Avenue, DIFC.",
    body: "Electech provided MEP works for the Atelier retail project at Gate Avenue, DIFC.",
    gallery: [],
    testimonial: {
      quote:
        "Electech brought our vision to life with such creativity and precision. The new store design has significantly increased our foot traffic and sales. We couldn’t be happier with the results.",
      author: "Creative Director",
      role: "Creative Director",
      company: "Atelier – Gate Avenue DIFC",
      verified: false,
    },
  },
  {
    title: "MEP works for Etisalat Office, Kifaf",
    slug: "mep-works-etisalat-kifaf",
    heroImage: "/images/projects/works/office-etisalat-open-plan-01.jpg",
    heroAlt: "Etisalat office MEP works",
    hasVerifiedPhoto: true,
    primaryBucket: "electrical",
    secondaryBuckets: ["mep"],
    client: "Etisalat",
    location: "2nd Floor, Kifaf, Dubai",
    sector: "Commercial",
    scope: "MEP works for Etisalat office space on the 2nd floor in Kifaf",
    status: "Completed",
    summary:
      "Electech provided MEP works for the Etisalat office on the 2nd floor in Kifaf, Dubai.",
    body: "Electech provided MEP works for the Etisalat office on the 2nd floor in Kifaf, Dubai.",
    gallery: [],
    testimonial: {
      quote:
        "Electech’s expertise and attention to detail have transformed our office space into a modern, efficient workspace. The new design has significantly improved our team’s productivity and collaboration. We highly recommend their services.",
      author: "Facilities Manager",
      role: "Facilities Manager",
      company: "Etisalat",
      verified: false,
    },
  },
  {
    title: "MEP works for GTZ Shipping logistics hub",
    slug: "mep-works-gtz-shipping",
    heroImage: "",
    heroAlt: "MEP works for GTZ Shipping logistics hub",
    hasVerifiedPhoto: false,
    primaryBucket: "mep",
    secondaryBuckets: ["electrical"],
    client: "GTZ Shipping LLC",
    location: "Dubai, UAE",
    sector: "Industrial",
    scope: "Electromechanical systems for a logistics hub",
    status: "Completed",
    summary:
      "Electech provided electromechanical works for a GTZ Shipping LLC logistics hub in Dubai.",
    body: "Electech provided electromechanical works for a GTZ Shipping LLC logistics hub in Dubai.",
    gallery: [],
    testimonial: {
      quote:
        "Electech’s innovative solutions and meticulous execution have transformed our logistics hub into a highly efficient and sustainable facility. Their expertise has been invaluable to our operations.",
      author: "CEO",
      role: "CEO",
      company: "GTZ Shipping LLC",
      verified: false,
    },
  },
  {
    title: "MEP works for Anex Building, Hamariya Free Zone",
    slug: "mep-works-anex-building-hamariya",
    heroImage: "",
    heroAlt: "MEP works for Anex Building",
    hasVerifiedPhoto: false,
    primaryBucket: "mep",
    secondaryBuckets: ["electrical", "fire-protection"],
    client: "Anex Building",
    location: "1st Floor, Hamariya Free Zone, Sharjah",
    sector: "Commercial",
    scope: "Electromechanical modernization works for a government office floor",
    status: "Completed",
    summary:
      "Electech provided electromechanical modernization works for Anex Building 1st Floor, Hamariya Free Zone, Sharjah.",
    body: "Electech provided electromechanical modernization works for Anex Building 1st Floor, Hamariya Free Zone, Sharjah.",
    gallery: [],
    testimonial: {
      quote:
        "Electech’s professionalism and expertise were evident throughout the project. The modernization of our office has greatly improved our operational efficiency and the overall environment. We highly recommend their services.",
      author: "Floor Manager",
      role: "Floor Manager",
      company: "Anex Building 1st Floor – Hamariya Free Zone, Sharjah",
      verified: false,
    },
  },
  {
    title: "MEP works for Ascentia office",
    slug: "mep-works-ascentia-office",
    heroImage: "",
    heroAlt: "MEP works for Ascentia office",
    hasVerifiedPhoto: false,
    primaryBucket: "mep",
    secondaryBuckets: ["electrical"],
    client: "Ascentia",
    location: "Dubai, UAE",
    sector: "Commercial",
    scope: "Electromechanical works for a commercial office revamp",
    status: "Completed",
    summary:
      "Electech provided electromechanical works for the Ascentia office project in Dubai.",
    body: "Electech provided electromechanical works for the Ascentia office project in Dubai.",
    gallery: [],
    testimonial: {
      quote:
        "The transformation of our office space has been remarkable. Electech’s innovative design and efficient project management have created an environment that truly enhances our team’s productivity and collaboration.",
      author: "CEO",
      role: "CEO",
      company: "Ascentia",
      verified: false,
    },
  },
];

export function getStoryBySlug(slug: string) {
  return stories.find((s) => s.slug === slug);
}

export function getStoriesByBucket(
  bucket: Story["primaryBucket"],
  limit?: number,
) {
  const filtered = stories.filter(
    (s) => s.primaryBucket === bucket || s.secondaryBuckets.includes(bucket),
  );
  return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
}

export function getFeaturedStories(limit = 3) {
  const featured = stories.filter((s) => s.featured);
  return (featured.length ? featured : stories).slice(0, limit);
}

export function getAdjacentStories(slug: string) {
  const index = stories.findIndex((s) => s.slug === slug);
  return {
    prev: stories[index - 1],
    next: stories[index + 1],
  };
}

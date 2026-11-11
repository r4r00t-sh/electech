import type { Story } from "./types";

/**
 * Client Success Stories — single source of truth.
 * Appears on /projects and filtered under solution buckets.
 * Full manuscripts marked [CLIENT TO PROVIDE] where not supplied.
 */
export const stories: Story[] = [
  {
    title: "Luxurious Villa Transformation",
    slug: "luxurious-villa-transformation",
    heroImage: "/images/services/hvac-refrigeration.jpg",
    heroAlt: "Villa MEP services — HVAC plant [CLIENT TO PROVIDE project photo]",
    primaryBucket: "mep",
    secondaryBuckets: ["electrical"],
    client: "Property Owner",
    location: "Al Zahiya Villa, Sharjah",
    sector: "Residential",
    scope: "Full MEP upgrade for a luxury villa fit-out",
    year: "[CLIENT TO PROVIDE]",
    summary:
      "A complete MEP transformation for a private villa in Al Zahiya, delivering comfort, power reliability and refined finishes on a live residential programme.",
    body: `
## Project overview

One of our most rewarding projects involved transforming a vacant plot into a luxurious villa for a prominent family. The client wanted a home that combined elegance with modern functionality. Our team worked closely with the client to design and execute a plan that included state-of-the-art electromechanical systems, energy-efficient solutions and luxurious finishes.

## Scope of works

We coordinated mechanical, electrical and plumbing packages so comfort systems, power distribution and wet services supported the architectural ambition of the villa. Material selections prioritised durability in UAE conditions and maintainable access for long-term care.

## How we worked

Regular coordination with the owner and design team, sequenced installation around finishes, and weekly progress reporting kept the programme visible. Quality checks were logged against approved submittals before concealment.

## Outcomes

The villa was completed on time and within budget. The family was delighted with the result, which perfectly matched their vision. They have since recommended us to their friends and continue to engage us for additional projects.

[CLIENT TO PROVIDE: programme dates, floor area and dedicated project photography.]
`.trim(),
    gallery: [
      {
        src: "/images/projects/villa-1.svg",
        alt: "Installed HVAC indoor unit in villa ceiling void",
      },
      {
        src: "/images/projects/villa-2.svg",
        alt: "Electrical distribution board ready for energisation",
      },
    ],
    testimonial: {
      quote:
        "Electech exceeded our expectations in every way. Their attention to detail and dedication to quality were evident throughout the project. We now have a beautiful home that perfectly reflects our vision.",
      author: "Property Owner",
      role: "Property Owner",
      company: "Al Zahiya Villa, Sharjah",
    },
    results: [
      { label: "Sector", value: "Residential villa" },
      { label: "Delivery", value: "Coordinated MEP package" },
      { label: "Reporting", value: "Weekly progress updates" },
    ],
    featured: true,
  },
  {
    title: "Hospitality Sector Excellence",
    slug: "hospitality-sector-excellence-sofitel",
    heroImage: "/images/services/hvac-installation.jpg",
    heroAlt: "Hospitality HVAC installation [CLIENT TO PROVIDE Sofitel project photo]",
    primaryBucket: "mep",
    secondaryBuckets: ["mechanical-plumbing"],
    client: "Sofitel",
    location: "Dubai, UAE",
    sector: "Hospitality",
    scope: "MEP works supporting hospitality operations and guest comfort",
    year: "[CLIENT TO PROVIDE]",
    summary:
      "Precision MEP delivery for a Sofitel hospitality environment where uptime, quiet operation and finish quality are non-negotiable.",
    body: `
## Project overview

A luxury hotel chain enlisted our services to renovate one of their flagship properties. The goal was an opulent yet functional space that would enhance the guest experience at Sofitel.

## Scope of works

We upgraded electromechanical systems and incorporated smart technology interfaces, sequencing works around operational constraints so guest areas remained protected wherever possible.

## Outcomes

The renovation was a resounding success, with the hotel receiving strong feedback from guests and industry stakeholders. The client appreciated our dedication to excellence.

[CLIENT TO PROVIDE: areas served and project photography.]
`.trim(),
    gallery: [
      {
        src: "/images/projects/hospitality-1.svg",
        alt: "Ceiling-mounted HVAC services in a hospitality corridor",
      },
    ],
    testimonial: {
      quote:
        "The renovation of our flagship property has been a tremendous success. Electech’s dedication to excellence and innovative approach have elevated our guest experience to new heights.",
      author: "Assistant Chief Engineer",
      role: "Assistant Chief Engineer",
      company: "Sofitel Hotel",
    },
    results: [
      { label: "Sector", value: "Hospitality" },
      { label: "Focus", value: "Guest comfort & uptime" },
      { label: "Safety", value: "Live-site protocols" },
    ],
    featured: true,
  },
  {
    title: "Amazon E-commerce Office",
    slug: "amazon-ecommerce-office",
    heroImage: "/images/services/electrical-installation.jpg",
    heroAlt: "Office electrical installation [CLIENT TO PROVIDE Amazon project photo]",
    primaryBucket: "mep",
    secondaryBuckets: [],
    client: "Amazon",
    location: "Dubai, UAE",
    sector: "Commercial / Technology",
    scope: "Office MEP fit-out support for an e-commerce workplace",
    year: "[CLIENT TO PROVIDE]",
    summary:
      "Coordinated MEP delivery for an Amazon e-commerce office environment with tight programmes and high expectations for quality.",
    body: `
## Project overview

We were commissioned to execute a large e-commerce office for Amazon in Dubai. The project required a highly functional and innovative workspace that could accommodate a large workforce and support dynamic operations.

## Scope of works

Our team supported an open-plan office with collaborative workspaces, advanced technology power infrastructure and sustainable solutions — coordinated with IT and ELV teams to keep ceiling voids clear and maintainable.

## Outcomes

The project was completed on time and within budget. The client was extremely satisfied with the new office environment.

[CLIENT TO PROVIDE: floor areas and project photography.]
`.trim(),
    gallery: [],
    testimonial: {
      quote: "Electech’s efficient project management have created an office space that perfectly supports our operations and enhances our team’s productivity. The new workspace is not only functional but also inspiring.",
      author: "Projects Manager",
      role: "Projects Manager",
      company: "Multiline",
    },
    results: [
      { label: "Sector", value: "Commercial office" },
      { label: "Approach", value: "Programme-driven MEP" },
      { label: "Handover", value: "Commissioned & documented" },
    ],
    featured: true,
  },
  {
    title: "Corporate Headquarters Upgrade",
    slug: "corporate-headquarters-upgrade-real-image",
    heroImage: "/images/services/electrical-installation.jpg",
    heroAlt: "Corporate headquarters electrical works [CLIENT TO PROVIDE Real Image project photo]",
    primaryBucket: "mep",
    secondaryBuckets: [],
    client: "Real Image",
    location: "Dubai, UAE",
    sector: "Corporate",
    scope: "Headquarters MEP upgrade and modernisation",
    year: "[CLIENT TO PROVIDE]",
    summary:
      "An MEP upgrade for Real Image's corporate headquarters, improving reliability and workplace comfort without unnecessary downtime.",
    body: `
## Project overview

A major media production company required a complete overhaul of their corporate headquarters to improve functionality and aesthetics. Real Image engaged ElecTech for the electromechanical upgrade.

## Scope of works

We implemented modern design coordination, upgraded electromechanical systems and supported a more efficient layout — balancing live-office constraints with quality installation standards.

## Outcomes

The project was completed seamlessly. The client reported improved employee satisfaction and operational efficiency.

[CLIENT TO PROVIDE: project photography.]
`.trim(),
    gallery: [],
    testimonial: {
      quote:
        "Electech’s expertise and attention to detail have transformed our headquarters into a modern, efficient workspace. The feedback from our employees has been overwhelmingly positive.",
      author: "Design Head",
      role: "Design Head",
      company: "Real Image",
    },
    results: [
      { label: "Client", value: "Real Image" },
      { label: "Type", value: "HQ upgrade" },
      { label: "Priority", value: "Live-office delivery" },
    ],
  },
  {
    title: "Healthcare Facility Upgrade",
    slug: "healthcare-facility-upgrade-smart-salem",
    heroImage: "/images/services/plumbing.jpg",
    heroAlt: "Healthcare facility MEP [CLIENT TO PROVIDE Smart Salem project photo]",
    primaryBucket: "mechanical-plumbing",
    secondaryBuckets: ["fire-protection"],
    client: "Smart Salem Medical Fitness Centre",
    location: "City Walk, Dubai",
    sector: "Healthcare",
    scope: "Mechanical, plumbing and supporting life-safety upgrades",
    year: "[CLIENT TO PROVIDE]",
    summary:
      "Sensitive healthcare MEP works at City Walk, prioritising air quality, hygiene-critical plumbing and fire protection coordination.",
    body: `
## Project overview

A renowned healthcare provider needed to upgrade their facilities to meet growing demand. At Smart Salem Medical Fitness Centre, City Walk, we modernised existing infrastructure while ensuring minimal disruption to operations.

## Scope of works

Our team implemented advanced electromechanical systems, improved energy efficiency and enhanced patient comfort. Mechanical and plumbing upgrades were coordinated with fire protection requirements appropriate to a healthcare setting.

## Outcomes

The project was completed ahead of schedule. The upgraded facility now serves as a benchmark for other healthcare providers in the region.

[CLIENT TO PROVIDE: clinical areas covered and project photography.]
`.trim(),
    gallery: [],
    testimonial: {
      quote:
        "Electech’s professionalism and expertise were evident throughout the project. The upgraded facilities have greatly improved our patient care and operational efficiency. We highly recommend their services.",
      author: "Facility Manager",
      role: "Facility Manager",
      company: "Smart Salem Medical Fitness Centre – City Walk",
    },
    results: [
      { label: "Location", value: "City Walk" },
      { label: "Sector", value: "Healthcare" },
      { label: "Focus", value: "Hygiene & reliability" },
    ],
    featured: true,
  },
  {
    title: "Innovative Food Outlet and Park",
    slug: "innovative-food-outlet-and-park-imdaad",
    heroImage: "/images/services/plumbing.jpg",
    heroAlt: "Food outlet MEP installation [CLIENT TO PROVIDE Imdaad project photo]",
    primaryBucket: "mechanical-plumbing",
    secondaryBuckets: ["maintenance"],
    client: "Imdaad",
    location: "Dubai, UAE",
    sector: "F&B / Leisure",
    scope: "Mechanical and plumbing installation with ongoing facility support",
    year: "[CLIENT TO PROVIDE]",
    summary:
      "MEP delivery for an innovative food outlet and park, with a path into facility management and maintenance partnership.",
    body: `
## Project overview

We worked with Imdaad, a leading facility management company, to design and execute a large-scale innovative food outlet. The project required meticulous planning and coordination to ensure timely delivery and adherence to high standards of quality.

## Scope and maintenance

Mechanical and plumbing works addressed kitchen loads, public amenities and outdoor interfaces. The relationship extended into facility management support — capital works and care with one accountable MEP partner.

## Outcomes

Our team successfully delivered a modern, sustainable environment that has become a sought-after address in the region.

[CLIENT TO PROVIDE: project photography.]
`.trim(),
    gallery: [],
    testimonial: {
      quote:
        "Electech’s expertise and commitment to quality were instrumental in the success of our innovative food outlet project. Their attention to detail and ability to meet deadlines were impressive. We look forward to collaborating on future projects.",
      author: "Facilities Manager",
      role: "Facilities Manager",
      company: "Imdaad",
    },
    results: [
      { label: "Client", value: "Imdaad" },
      { label: "Type", value: "F&B / park" },
      { label: "Follow-on", value: "Maintenance support" },
    ],
  },
  {
    title: "Two-Bedroom Flat",
    slug: "two-bedroom-flat-dhiraj-kumar",
    heroImage: "/images/services/hvac-refrigeration.jpg",
    heroAlt: "Residential apartment MEP [CLIENT TO PROVIDE project photo]",
    primaryBucket: "mechanical-plumbing",
    secondaryBuckets: [],
    client: "Mr. Dhiraj Kumar",
    location: "Dubai, UAE",
    sector: "Residential",
    scope: "Apartment mechanical and plumbing installation",
    year: "[CLIENT TO PROVIDE]",
    summary:
      "Careful mechanical and plumbing works for a two-bedroom flat, focused on comfort, quiet operation and tidy finishes.",
    body: `
## Project overview

An expat family approached us to transform their newly purchased two-bedroom flat into a modern, comfortable home. They wanted a space that was both functional and stylish, with an emphasis on maximising storage and natural light.

## Scope of works

Our team designed and executed a plan that included energy-efficient lighting support, comfort systems and coordinated plumbing — tailored to lifestyle and aesthetic preferences.

## Outcomes

The couple was delighted with the result, which perfectly matched their brief.

[CLIENT TO PROVIDE: project photography.]
`.trim(),
    gallery: [],
    testimonial: {
      quote: "Electech turned our flat into a dream home. Their innovative design solutions and attention to detail have made our space both beautiful and functional. We couldn’t be happier with the outcome.",
      author: "Mr. Dhiraj Kumar",
      role: "Flat Owner",
      company: "Private residence",
    },
    results: [
      { label: "Type", value: "2-bed apartment" },
      { label: "Services", value: "HVAC & plumbing" },
      { label: "Priority", value: "Finish quality" },
    ],
  },
  {
    title: "Retail Space Innovation",
    slug: "retail-space-innovation-atelier-difc",
    heroImage: "/images/services/electrical-installation.jpg",
    heroAlt: "Retail electrical installation [CLIENT TO PROVIDE Atelier project photo]",
    primaryBucket: "electrical",
    secondaryBuckets: [],
    client: "Atelier",
    location: "Gate Avenue, DIFC, Dubai",
    sector: "Retail",
    scope: "Electrical installation for a design-led retail space",
    year: "[CLIENT TO PROVIDE]",
    summary:
      "Electrical services for Atelier at Gate Avenue DIFC — supporting lighting drama, power reliability and a polished retail experience.",
    body: `
## Project overview

We were tasked with creating a dynamic retail environment for a high-end fashion brand at Gate Avenue, DIFC. The client wanted a space that would reflect their brand’s identity and attract discerning customers.

## Scope of works

Our team delivered a sleek, contemporary store with innovative lighting support, power infrastructure for interactive displays and sustainable material choices — coordinated tightly with the interior design package.

## Outcomes

The store’s grand opening was a huge success. The client saw a marked increase in foot traffic and sales, and commended our ability to bring their vision to life with precision and creativity.

[CLIENT TO PROVIDE: dedicated store photography.]
`.trim(),
    gallery: [],
    testimonial: {
      quote: "Electech brought our vision to life with such creativity and precision. The new store design has significantly increased our foot traffic and sales. We couldn’t be happier with the results.",
      author: "Creative Director",
      role: "Creative Director",
      company: "Atelier – Gate Avenue DIFC",
    },
    results: [
      { label: "Location", value: "Gate Avenue DIFC" },
      { label: "Focus", value: "Retail electrical" },
      { label: "Coordination", value: "Design-led install" },
    ],
    featured: true,
  },
  {
    title: "Etisalat Office, 2nd Floor, Kifaf",
    slug: "etisalat-office-kifaf",
    heroImage: "/images/services/electrical-installation.jpg",
    heroAlt: "Etisalat office electrical works [CLIENT TO PROVIDE project photo]",
    primaryBucket: "electrical",
    secondaryBuckets: [],
    client: "Etisalat",
    location: "Kifaf, Dubai",
    sector: "Telecommunications / Corporate",
    scope: "Electrical installation for a corporate office floor",
    year: "[CLIENT TO PROVIDE]",
    summary:
      "Electrical works for Etisalat's 2nd floor office in Kifaf, delivered to corporate standards with clear documentation.",
    body: `
## Project overview

We were engaged by Etisalat to revamp their office space on the 2nd floor in Kifaf. The goal was a modern, efficient workspace that would enhance employee productivity and reflect Etisalat’s innovative brand.

## Scope of works

Our team supported a sleek, open-plan office with electrical infrastructure for state-of-the-art technology, ergonomic workstations and collaborative zones — with clear containment, labelling and testing.

## Outcomes

The project was completed ahead of schedule. The client was extremely pleased with the results.

[CLIENT TO PROVIDE: dedicated project photography.]
`.trim(),
    gallery: [],
    testimonial: {
      quote: "Electech’s expertise and attention to detail have transformed our office space into a modern, efficient workspace. The new design has significantly improved our team’s productivity and collaboration. We highly recommend their services.",
      author: "Facilities Manager",
      role: "Facilities Manager",
      company: "Etisalat",
    },
    results: [
      { label: "Client", value: "Etisalat" },
      { label: "Floor", value: "2nd Floor, Kifaf" },
      { label: "Discipline", value: "Electrical" },
    ],
  },
  {
    title: "Logistics Office Development",
    slug: "logistics-office-development-gtz",
    heroImage: "/images/services/electrical-installation.jpg",
    heroAlt: "Logistics office electrical infrastructure [CLIENT TO PROVIDE GTZ project photo]",
    primaryBucket: "electrical",
    secondaryBuckets: [],
    client: "GTZ Shipping LLC",
    location: "Dubai, UAE",
    sector: "Logistics",
    scope: "Electrical development for a logistics office",
    year: "[CLIENT TO PROVIDE]",
    summary:
      "Electrical infrastructure for GTZ Shipping LLC's logistics office, sized for operational loads and future flexibility.",
    body: `
## Project overview

We collaborated with GTZ Shipping LLC to develop a state-of-the-art logistics hub. The project involved designing and implementing advanced electromechanical systems to ensure efficient operations and energy savings.

## Scope of works

Electrical and supporting MEP infrastructure was sized for operational loads with an eye on future flexibility, maintainability and clear as-built documentation.

## Outcomes

Our team delivered a highly functional and sustainable facility that has significantly improved the company’s logistics capabilities.

[CLIENT TO PROVIDE: project photography.]
`.trim(),
    gallery: [],
    testimonial: {
      quote:
        "Electech’s innovative solutions and meticulous execution have transformed our logistics hub into a highly efficient and sustainable facility. Their expertise has been invaluable to our operations.",
      author: "CEO",
      role: "CEO",
      company: "GTZ Shipping LLC",
    },
    results: [
      { label: "Client", value: "GTZ Shipping LLC" },
      { label: "Sector", value: "Logistics" },
      { label: "Package", value: "Electrical" },
    ],
  },
  {
    title: "Government Office Modernization",
    slug: "government-office-modernization-anex",
    heroImage: "/images/services/fire-alarm.jpg",
    heroAlt: "Government office fire and life-safety works [CLIENT TO PROVIDE Anex project photo]",
    primaryBucket: "fire-protection",
    secondaryBuckets: ["maintenance"],
    client: "Anex Building",
    location: "Hamariya Free Zone, Sharjah",
    sector: "Government / Free Zone",
    scope: "Fire protection and safety modernisation for a government office",
    year: "[CLIENT TO PROVIDE]",
    summary:
      "Life-safety modernisation for a government office in Hamariya Free Zone, with a pathway into ongoing maintenance.",
    body: `
## Project overview

We were commissioned to modernize a government office building — the Anex Building, Hamariya Free Zone, Sharjah — to improve efficiency and create a more welcoming environment for employees and visitors.

## Scope of works

Our team implemented advanced electromechanical systems and energy-efficient solutions, with fire protection and life-safety works coordinated to authority expectations. Maintenance continuity was considered from day one.

## Outcomes

The project was completed ahead of schedule. The government office now serves as a model for other public sector projects.

[CLIENT TO PROVIDE: alarm/sprinkler scope detail and project photography.]
`.trim(),
    gallery: [],
    testimonial: {
      quote:
        "Electech’s professionalism and expertise were evident throughout the project. The modernization of our office has greatly improved our operational efficiency and the overall environment. We highly recommend their services.",
      author: "Floor Manager",
      role: "Floor Manager",
      company: "Anex Building, Hamariya Free Zone, Sharjah",
    },
    results: [
      { label: "Location", value: "Hamariya Free Zone" },
      { label: "Focus", value: "Fire & life safety" },
      { label: "Follow-on", value: "Maintenance ready" },
    ],
    featured: true,
  },
  {
    title: "Commercial Office Revamp",
    slug: "commercial-office-revamp-ascentia",
    heroImage: "/images/services/hvac-installation.jpg",
    heroAlt: "Commercial office MEP revamp [CLIENT TO PROVIDE Ascentia project photo]",
    primaryBucket: "maintenance",
    secondaryBuckets: ["fire-protection"],
    client: "Ascentia",
    location: "Dubai, UAE",
    sector: "Commercial",
    scope: "Office revamp with ongoing maintenance partnership",
    year: "[CLIENT TO PROVIDE]",
    summary:
      "A commercial office revamp for Ascentia that led into an ongoing maintenance relationship — capital works and care under one team.",
    body: `
## Project overview

A leading multinational corporation approached us to revamp their Dubai headquarters. They needed a space that would foster creativity and collaboration among their employees.

## Scope of works

We designed an open-plan office with flexible workspaces, modern meeting rooms and recreational areas, supported by coordinated electromechanical systems. Fire protection interfaces and maintainable plant access were planned from the outset.

## Installation to maintenance

Beyond the capital works, Ascentia continues to rely on us for ongoing maintenance and future expansion — a single accountable partner from revamp through operations.

## Outcomes

The project was completed on time and within budget. The client reported a significant boost in employee morale and productivity.

[CLIENT TO PROVIDE: dedicated project photography and SLA details.]
`.trim(),
    gallery: [],
    testimonial: {
      quote:
        "The transformation of our office space has been remarkable. Electech’s innovative design and efficient project management have created an environment that truly enhances our team’s productivity and collaboration.",
      author: "CEO",
      role: "CEO",
      company: "Ascentia",
    },
    results: [
      { label: "Client", value: "Ascentia" },
      { label: "Model", value: "Install + maintain" },
      { label: "Status", value: "Ongoing client" },
    ],
    featured: true,
  },
];

export function getStoryBySlug(slug: string) {
  return stories.find((s) => s.slug === slug);
}

export function getStoriesByBucket(bucket: Story["primaryBucket"], limit?: number) {
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
  if (index < 0) return { prev: undefined, next: undefined };
  return {
    prev: stories[index - 1],
    next: stories[index + 1],
  };
}

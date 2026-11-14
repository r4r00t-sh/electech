export type ServicePage = {
  slug: string;
  title: string;
  bucket:
    | "mep"
    | "mechanical-plumbing"
    | "electrical"
    | "fire-protection"
    | "maintenance";
  parentHref?: string;
  intro: string;
  overview: string;
  keyServices: { title: string; description: string }[];
  howWeWork: string[];
  sectors: string[];
  faqs: { question: string; answer: string }[];
  heroImage: string;
  heroAlt: string;
  ctaTitle?: string;
  /** Short page-specific supporting line; omit to show heading + button only. */
  ctaDescription?: string;
};

/**
 * Service page copy — body text taken from the client website docx.
 * Key Services headings match the client's supplied lists where provided.
 */
export const servicePages: ServicePage[] = [
  {
    slug: "mep",
    title: "Integrated MEP Solutions",
    bucket: "mep",
    intro:
      "Coordinated Mechanical, Electrical & Plumbing Services",
    overview: `
Electech delivers integrated MEP installation, modification, testing and maintenance services for commercial offices, residential villas, retail premises, hospitality properties and other building environments.

Our work covers HVAC and ventilation, electrical distribution, lighting, water supply, drainage, pumping systems and associated building-services infrastructure.

We coordinate with main contractors, consultants and other trades to address technical interfaces, site conditions, installation sequencing and handover requirements.
`.trim(),
    keyServices: [
      {
        title: "Mechanical Services",
        description:
          "Air-conditioning installation and modifications, ventilation, ductwork, equipment connections and maintenance.",
      },
      {
        title: "Electrical Services",
        description:
          "Power distribution, DB/SMDB installation and modifications, lighting, cabling, containment, EV charging provisions and ELV infrastructure.",
      },
      {
        title: "Plumbing Services",
        description:
          "Water supply, drainage, sanitary installations, water filtration, pumping systems, pressure controls and solar water heating.",
      },
      {
        title: "Fire Protection Installation Support",
        description:
          "Fire alarm and firefighting containment, cabling, piping and equipment installation within the approved project scope.",
      },
      {
        title: "MEP Maintenance",
        description:
          "Preventive and corrective maintenance, troubleshooting, system upgrades and annual maintenance contracts.",
      },
    ],
    howWeWork: [
      "Scope review and site assessment",
      "Technical coordination and material planning",
      "Supervised installation",
      "Inspection, applicable testing and documentation",
      "Handover and maintenance support",
    ],
    sectors: [
      "Commercial offices",
      "Residential villas",
      "Retail premises",
      "Hospitality properties",
    ],
    faqs: [
      {
        question: "Do you undertake both new installations and modifications?",
        answer:
          "Yes. Electech undertakes MEP installation, alteration, refurbishment and system-upgrade works according to project requirements.",
      },
      {
        question:
          "Do you support occupied commercial offices and residential villas?",
        answer:
          "Yes. We plan work around access requirements, existing services, operational constraints and protection of completed finishes.",
      },
      {
        question: "Can Electech provide maintenance after installation?",
        answer:
          "Yes. Preventive maintenance, corrective works and annual maintenance arrangements can be provided according to the agreed scope.",
      },
    ],
    heroImage: "/images/pages/mep-industrial-systems.jpg",
    heroAlt: "Coordinated MEP installation including HVAC plant and services",
    ctaTitle: "Request an MEP Quotation",
    ctaDescription:
      "Share your project location, drawings or MEP package requirements for a practical quotation.",
  },
  {
    slug: "mechanical-plumbing",
    title: "Mechanical and Plumbing Services",
    bucket: "mechanical-plumbing",
    intro:
      "Reliable Building Systems for Everyday Performance",
    overview: `
Electech provides HVAC, ventilation, plumbing, drainage and water-system installation and maintenance services for commercial and residential properties.

Our mechanical and plumbing works are coordinated with architectural layouts, equipment requirements, existing services and site conditions to support functionality, accessibility and long-term maintainability.

How We Work

We review site requirements, coordinate the installation scope, execute the works, undertake applicable testing and provide relevant handover documentation.
`.trim(),
    keyServices: [
      {
        title: "HVAC & Ventilation",
        description:
          "Air-conditioning installation and modifications, ductwork, diffusers, grilles, condensate drainage, equipment connections and maintenance.",
      },
      {
        title: "Water Supply & Drainage",
        description:
          "PPR/PEX water distribution, uPVC drainage, sanitary connections, valves, water heaters and associated pipework.",
      },
      {
        title: "Water Filtration",
        description:
          "Installation of multi-stage water filtration systems, connection of equipment, testing and maintenance support.",
      },
      {
        title: "Pumping Systems",
        description:
          "Transfer and circulation pumps, pressure tanks, control panels, associated pipework and system troubleshooting.",
      },
      {
        title: "Solar Water Heating",
        description:
          "Solar water heater installation, relocation, pipework modifications, circulation pumps and associated controls.",
      },
    ],
    howWeWork: [
      "Review site requirements",
      "Coordinate the installation scope",
      "Execute the works",
      "Undertake applicable testing",
      "Provide relevant handover documentation",
    ],
    sectors: ["Commercial", "Residential"],
    faqs: [],
    heroImage: "/images/pages/mechanical-factory-floor.jpg",
    heroAlt: "Mechanical plant and plumbing services installation",
    ctaTitle: "Discuss Your Mechanical or Plumbing Requirements",
    ctaDescription:
      "Tell us about the HVAC, plumbing or water-system works you need on site.",
  },
  {
    slug: "hvac-installation",
    title: "HVAC Installation",
    bucket: "mechanical-plumbing",
    parentHref: "/solutions/mechanical-plumbing",
    intro:
      "Air-conditioning installation and modifications, ductwork, diffusers, grilles, condensate drainage, equipment connections and maintenance.",
    overview: `
Electech provides HVAC and ventilation installation and maintenance for commercial and residential properties.

Our HVAC works include air-conditioning installation and modifications, ductwork, diffusers, grilles, condensate drainage, equipment connections and maintenance. Works are coordinated with architectural layouts, equipment requirements, existing services and site conditions.
`.trim(),
    keyServices: [
      {
        title: "Ductwork",
        description:
          "Installation and modification of ductwork coordinated with site layouts and finishes.",
      },
      {
        title: "AC equipment",
        description:
          "Air-conditioning equipment installation, connections and modifications.",
      },
      {
        title: "Diffusers and grilles",
        description:
          "Supply and install of diffusers and grilles as specified for the project.",
      },
      {
        title: "Condensate drainage",
        description:
          "Condensate drainage installation and checks to support reliable AC operation.",
      },
      {
        title: "Installation modifications and maintenance",
        description:
          "HVAC modifications and maintenance support according to the agreed scope.",
      },
    ],
    howWeWork: [
      "Review site requirements",
      "Coordinate installation scope",
      "Execute HVAC works",
      "Applicable testing",
      "Handover documentation",
    ],
    sectors: ["Commercial", "Residential"],
    faqs: [],
    heroImage: "/images/pages/hvac-equipment-detail.jpg",
    heroAlt: "HVAC ductwork and air-conditioning installation",
    ctaTitle: "Discuss Your Mechanical or Plumbing Requirements",
    ctaDescription:
      "Share your air-conditioning or ventilation installation requirements.",
  },
  {
    slug: "plumbing-drainage-installation",
    title: "Plumbing and Drainage Installation",
    bucket: "mechanical-plumbing",
    parentHref: "/solutions/mechanical-plumbing",
    intro:
      "Water supply, drainage, sanitary installations, water filtration, pumping systems and solar water heating.",
    overview: `
Electech provides plumbing, drainage and water-system installation and maintenance for commercial and residential properties.

Our plumbing works include PPR/PEX water distribution, uPVC drainage, sanitary connections, valves, water heaters and associated pipework, together with water filtration, pumping systems, pressure tanks, hot-water circulation and solar water heating where specified.
`.trim(),
    keyServices: [
      {
        title: "Water Supply & Drainage",
        description:
          "PPR/PEX water distribution, uPVC drainage, sanitary connections, valves, water heaters and associated pipework.",
      },
      {
        title: "Water Filtration",
        description:
          "Installation of multi-stage water filtration systems, connection of equipment, testing and maintenance support.",
      },
      {
        title: "Pumping Systems",
        description:
          "Transfer and circulation pumps, pressure tanks, control panels, associated pipework and system troubleshooting.",
      },
      {
        title: "Hot-water circulation",
        description:
          "Hot-water circulation pipework and associated controls as specified for the project.",
      },
      {
        title: "Solar Water Heating",
        description:
          "Solar water heater installation, relocation, pipework modifications, circulation pumps and associated controls.",
      },
    ],
    howWeWork: [
      "Review site requirements",
      "Coordinate installation scope",
      "Execute plumbing and drainage works",
      "Applicable testing",
      "Handover documentation",
    ],
    sectors: ["Commercial", "Residential"],
    faqs: [],
    heroImage: "/images/pages/plumbing-finished-bathroom.jpg",
    heroAlt: "Plumbing and drainage installation",
    ctaTitle: "Discuss Your Mechanical or Plumbing Requirements",
    ctaDescription:
      "Share your water supply, drainage or sanitary installation requirements.",
  },
  {
    slug: "electrical",
    title: "Electrical Services",
    bucket: "electrical",
    intro:
      "Safe, Practical & Reliable Electrical Installations",
    overview: `
Electech undertakes electrical installation, modifications, power distribution, lighting and associated low-current infrastructure works for commercial offices, residential villas, retail premises and hospitality projects.

Our electrical services include new installations, circuit modifications, equipment power provisions, electrical containment, testing and documentation.

Our Approach

We coordinate electrical installations with architectural layouts, equipment requirements and other building services to achieve safe and maintainable systems.
`.trim(),
    keyServices: [
      {
        title: "Power Distribution",
        description:
          "Distribution boards, sub-main distribution boards, circuit modifications, breakers, isolators, cabling and electrical load coordination.",
      },
      {
        title: "Lighting Systems",
        description:
          "Architectural lighting, LED strips, concealed lighting, landscape lighting, decorative fixtures and lighting-control provisions.",
      },
      {
        title: "Power & Equipment Connections",
        description:
          "Socket outlets, dedicated equipment supplies, AC power provisions, water-heater connections, pump power and EV charging infrastructure.",
      },
      {
        title: "ELV Infrastructure",
        description:
          "Conduits, containment, cabling provisions and associated infrastructure for CCTV, data, Wi-Fi, access control and intercom systems.",
      },
      {
        title: "Testing & Documentation",
        description:
          "Applicable electrical inspections, circuit identification, load schedules, testing records and handover documentation.",
      },
    ],
    howWeWork: [
      "Coordinate with architectural layouts and equipment requirements",
      "Install power distribution and lighting systems",
      "Provide equipment connections and ELV infrastructure",
      "Complete applicable testing and documentation",
      "Hand over maintainable systems",
    ],
    sectors: ["Commercial offices", "Residential villas", "Retail premises", "Hospitality"],
    faqs: [],
    heroImage: "/images/pages/electrical-power-infrastructure.jpg",
    heroAlt: "Electrical installation and switchgear works",
    ctaTitle: "Request an Electrical Works Quotation",
    ctaDescription:
      "Share drawings or a brief for power, lighting or ELV infrastructure works.",
  },
  {
    slug: "electrical-installation",
    title: "Electrical Installation",
    bucket: "electrical",
    parentHref: "/solutions/electrical",
    intro:
      "Power distribution, lighting, load schedules, cabling, isolators, EV infrastructure and testing.",
    overview: `
Electech undertakes electrical installation and modifications for commercial offices, residential villas, retail premises and hospitality projects.

Our electrical installation works emphasise distribution boards and sub-main distribution boards, lighting, load schedules, cabling, isolators, EV charging infrastructure and applicable testing with handover documentation.
`.trim(),
    keyServices: [
      {
        title: "DB / SMDB",
        description:
          "Distribution boards, sub-main distribution boards, circuit modifications, breakers and isolators.",
      },
      {
        title: "Lighting",
        description:
          "Architectural lighting, LED strips, concealed lighting, landscape lighting and decorative fixtures.",
      },
      {
        title: "Cabling and load schedules",
        description:
          "Cabling works with circuit identification and electrical load coordination.",
      },
      {
        title: "EV infrastructure",
        description:
          "EV charging infrastructure provisions as specified for the project.",
      },
      {
        title: "Testing",
        description:
          "Applicable electrical inspections, testing records and handover documentation.",
      },
    ],
    howWeWork: [
      "Coordinate layouts and load requirements",
      "Install distribution and lighting systems",
      "Complete cabling and equipment connections",
      "Applicable testing and documentation",
      "Handover",
    ],
    sectors: ["Commercial", "Residential", "Retail", "Hospitality"],
    faqs: [],
    heroImage: "/images/pages/electrical-installation-work.jpg",
    heroAlt: "Electrical installation on a commercial project",
    ctaTitle: "Request an Electrical Works Quotation",
    ctaDescription:
      "Share your distribution board, lighting or power installation requirements.",
  },
  {
    slug: "extra-low-voltage-installation",
    title: "Extra Low Voltage Installation",
    bucket: "electrical",
    parentHref: "/solutions/electrical",
    intro:
      "Conduits, containment, cabling provisions and associated infrastructure for CCTV, data, Wi-Fi, access control and intercom systems.",
    overview: `
Electech provides ELV infrastructure for commercial offices, residential villas, retail premises and hospitality projects.

Our ELV scope covers conduits, containment, cabling provisions and associated infrastructure for CCTV, data, Wi-Fi, access control and intercom systems. Electech provides containment and installation provisions; full specialist system design and commissioning are undertaken by the responsible specialist parties as applicable.
`.trim(),
    keyServices: [
      {
        title: "Containment and conduits",
        description:
          "Conduits, containment and pathways for low-current systems.",
      },
      {
        title: "Cabling provisions",
        description:
          "Cabling provisions for CCTV, data, Wi-Fi, access control and intercom systems.",
      },
      {
        title: "Associated infrastructure",
        description:
          "Associated ELV infrastructure within the agreed installation scope.",
      },
      {
        title: "Coordination with specialists",
        description:
          "Coordination with specialist parties responsible for full system design and commissioning where applicable.",
      },
    ],
    howWeWork: [
      "Review ELV infrastructure requirements",
      "Install containment and cabling provisions",
      "Coordinate with specialist parties",
      "Document installation within Electech scope",
      "Handover to responsible parties",
    ],
    sectors: ["Commercial", "Residential", "Retail", "Hospitality"],
    faqs: [],
    heroImage: "/images/pages/elv-server-racks.jpg",
    heroAlt: "Extra low voltage infrastructure installation",
    ctaTitle: "Request an Electrical Works Quotation",
    ctaDescription:
      "Share your ELV containment, cabling or infrastructure requirements.",
  },
  {
    slug: "solar-power-plant-installation",
    title: "Solar Power Plant Installation",
    bucket: "electrical",
    parentHref: "/solutions/electrical",
    intro:
      "At Electech, we provide innovative solar photovoltaic (PV) energy systems that generate electricity with minimal pollution.",
    overview: `
As environmental concerns grow, the demand for cleaner energy solutions increases. At Electech, we provide innovative solar photovoltaic (PV) energy systems that generate electricity with minimal pollution. Solar PV energy harnesses the sun’s power, a renewable resource available at no cost, reducing reliance on fossil fuels and lowering greenhouse gas emissions.

Our services include customized system design, seamless installation, comprehensive maintenance, and real-time energy monitoring. Benefits include cost savings, reduced carbon footprint, and greater energy independence. Experience the advantages of solar PV energy with Electech and join us in creating a sustainable future.
`.trim(),
    keyServices: [
      {
        title: "Customized system design",
        description:
          "Solar PV system design tailored to the project and site conditions.",
      },
      {
        title: "Seamless installation",
        description:
          "Installation of solar photovoltaic energy systems.",
      },
      {
        title: "Comprehensive maintenance",
        description:
          "Ongoing maintenance to support system performance after handover.",
      },
      {
        title: "Real-time energy monitoring",
        description:
          "Monitoring that supports visibility of generation for facilities teams.",
      },
    ],
    howWeWork: [
      "Feasibility and design",
      "Installation",
      "Commissioning and monitoring setup",
      "Maintenance pathway",
    ],
    sectors: ["Commercial", "Industrial", "Education", "Hospitality"],
    faqs: [],
    heroImage: "/images/pages/solar-rooftop-array.jpg",
    heroAlt: "Solar power plant installation in Dubai and Sharjah",
  },
  {
    slug: "fire-protection",
    title: "Fire Protection Support",
    bucket: "fire-protection",
    intro:
      "Fire Alarm & Firefighting Installation Support",
    overview: `
Coordinated Installation Works for Building Fire Protection Systems

Electech supports fire alarm and firefighting installation activities as part of commercial, residential and refurbishment projects, working in coordination with building management, main contractors and the responsible approved fire-protection specialists.

Scope and Responsibility

Electech undertakes the installation activities included in its agreed contract scope. System isolation, final integrated testing, commissioning, certification and authority approvals are coordinated with and undertaken by the responsible authorized parties, as applicable.

Our objective is to support accurate installation, clear interface management and smooth handover to the parties responsible for final system acceptance.
`.trim(),
    keyServices: [
      {
        title: "Fire alarm conduiting and containment",
        description:
          "Installation of fire alarm conduiting and containment within the agreed project scope.",
      },
      {
        title: "Fire alarm cabling and associated works",
        description:
          "Fire alarm cabling and associated installation works.",
      },
      {
        title: "Detection and alarm equipment",
        description:
          "Installation of specified detection and alarm equipment.",
      },
      {
        title: "Firefighting pipework",
        description:
          "Firefighting pipework installation and modifications.",
      },
      {
        title: "Firefighting components",
        description:
          "Installation and repositioning of specified firefighting components.",
      },
      {
        title: "Installation records and coordination",
        description:
          "Preparation of relevant installation records and supporting documentation, coordination of system isolation requests and work permits, and assistance during inspections and final specialist commissioning.",
      },
    ],
    howWeWork: [
      "Scope review with project stakeholders",
      "Coordination with approved fire-protection specialists",
      "Supervised installation within contract scope",
      "Installation records and supporting documentation",
      "Handover to parties responsible for final system acceptance",
    ],
    sectors: ["Commercial", "Residential", "Refurbishment"],
    faqs: [],
    heroImage: "/images/pages/fire-services-corridor.jpg",
    heroAlt: "Fire protection installation support works",
    ctaTitle: "Enquire About Fire Protection Installation Support",
    ctaDescription:
      "Share the fire alarm or firefighting installation support scope Electech should undertake.",
  },
  {
    slug: "fire-fighting-fire-alarm-installation",
    title: "Fire Alarm & Firefighting Installation Support",
    bucket: "fire-protection",
    parentHref: "/solutions/fire-protection",
    intro:
      "Coordinated Installation Works for Building Fire Protection Systems",
    overview: `
Electech supports fire alarm and firefighting installation activities as part of commercial, residential and refurbishment projects, working in coordination with building management, main contractors and the responsible approved fire-protection specialists.

Our scope may include fire alarm conduiting and containment; fire alarm cabling and associated installation works; installation of specified detection and alarm equipment; firefighting pipework installation and modifications; installation and repositioning of specified firefighting components; preparation of relevant installation records and supporting documentation; coordination of system isolation requests and work permits; and assistance during inspections and final specialist commissioning.

Scope and Responsibility

Electech undertakes the installation activities included in its agreed contract scope. System isolation, final integrated testing, commissioning, certification and authority approvals are coordinated with and undertaken by the responsible authorized parties, as applicable.

Our objective is to support accurate installation, clear interface management and smooth handover to the parties responsible for final system acceptance.
`.trim(),
    keyServices: [
      {
        title: "Fire alarm conduiting and containment",
        description:
          "Installation of fire alarm conduiting and containment within the agreed project scope.",
      },
      {
        title: "Fire alarm cabling",
        description:
          "Fire alarm cabling and associated installation works.",
      },
      {
        title: "Detection and alarm equipment",
        description:
          "Installation of specified detection and alarm equipment.",
      },
      {
        title: "Firefighting pipework and components",
        description:
          "Firefighting pipework installation and modifications, and installation or repositioning of specified firefighting components.",
      },
    ],
    howWeWork: [
      "Agree installation scope with project stakeholders",
      "Coordinate with approved fire-protection specialists",
      "Execute supervised installation works",
      "Prepare installation records and supporting documentation",
      "Support handover to parties responsible for final acceptance",
    ],
    sectors: ["Commercial", "Residential", "Refurbishment"],
    faqs: [],
    heroImage: "/images/pages/fire-control-panels.jpg",
    heroAlt: "Fire alarm and firefighting installation support",
    ctaTitle: "Enquire About Fire Protection Installation Support",
    ctaDescription:
      "Share the fire alarm or firefighting installation support scope Electech should undertake.",
  },
  {
    slug: "fire-stopping-sealant-application",
    title: "Fire Stopping Sealant Application",
    bucket: "fire-protection",
    parentHref: "/solutions/fire-protection",
    intro:
      "Installation of specified fire-rated sealant systems and coordination with the responsible approval parties.",
    overview: `
Electech undertakes installation of specified fire-rated sealant systems as part of commercial, residential and refurbishment projects.

Our fire-stopping works are carried out according to the project specifications and coordinated with the responsible approval parties. System isolation, final integrated testing, commissioning, certification and authority approvals are coordinated with and undertaken by the responsible authorized parties, as applicable.
`.trim(),
    keyServices: [
      {
        title: "Specified fire-rated sealant systems",
        description:
          "Installation of specified fire-rated sealant systems within the agreed contract scope.",
      },
      {
        title: "Penetration sealing",
        description:
          "Sealing of penetrations through fire compartment walls and floors as specified.",
      },
      {
        title: "Coordination with approval parties",
        description:
          "Coordination with the responsible approval parties for inspections and acceptance as applicable.",
      },
    ],
    howWeWork: [
      "Review specified fire-stopping systems",
      "Install sealants within agreed scope",
      "Coordinate with responsible approval parties",
      "Prepare supporting installation records",
      "Handover within Electech scope",
    ],
    sectors: ["Commercial", "Residential", "Refurbishment"],
    faqs: [],
    heroImage: "/images/pages/fire-stopping-interior.jpg",
    heroAlt: "Fire stopping and fire-rated sealing works",
    ctaTitle: "Enquire About Fire Protection Installation Support",
    ctaDescription:
      "Share your fire-stopping sealant application requirements for the project.",
  },
  {
    slug: "maintenance",
    title: "MEP Maintenance & Annual Maintenance Contracts",
    bucket: "maintenance",
    intro:
      "Keeping Your Building Services Reliable",
    overview: `
Electech provides planned and corrective MEP maintenance services for residential villas, commercial offices and selected properties across Dubai.

We help property owners, tenants and facility managers maintain essential electrical, air-conditioning and plumbing systems through scheduled inspections, troubleshooting, repair and replacement works.

Annual Maintenance Contracts

Our AMC arrangements can be tailored to the property type, equipment inventory, required visit frequency and agreed response provisions.
`.trim(),
    keyServices: [
      {
        title: "Electrical Maintenance",
        description:
          "Distribution boards, lighting, socket outlets, isolators, circuit faults and electrical accessories.",
      },
      {
        title: "Air-Conditioning Maintenance",
        description:
          "AC inspections, routine servicing, filter cleaning, condensate drainage checks and fault investigation.",
      },
      {
        title: "Plumbing Maintenance",
        description:
          "Water supply and drainage issues, leaks, sanitary connections, valves, water heaters and associated pipework.",
      },
      {
        title: "Pumps & Water Systems",
        description:
          "Pump troubleshooting, pressure systems, filtration equipment and associated control components.",
      },
      {
        title: "Preventive Maintenance",
        description:
          "Planned service visits, condition checks and recommendations for corrective action.",
      },
      {
        title: "Corrective Maintenance",
        description:
          "Fault diagnosis, repairs, replacements and system restoration within the agreed service scope.",
      },
    ],
    howWeWork: [
      "Review property type and equipment inventory",
      "Agree visit frequency and response provisions",
      "Scheduled inspections and preventive service",
      "Corrective diagnosis, repair and restoration",
      "Reporting within the agreed service scope",
    ],
    sectors: ["Residential villas", "Commercial offices", "Selected properties"],
    faqs: [],
    heroImage: "/images/pages/maintenance-workshop.jpg",
    heroAlt: "MEP maintenance and annual maintenance contracts",
    ctaTitle: "Request an AMC Proposal",
    ctaDescription:
      "Share your property type, equipment list and preferred visit frequency.",
  },
];

export function getServiceBySlug(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}

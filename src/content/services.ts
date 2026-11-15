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
    title: "Integrated Mechanical, Electrical & Plumbing Solutions",
    bucket: "mep",
    intro:
      "Electech delivers coordinated MEP installation, modification, testing and maintenance for offices, villas, retail and hospitality properties. We work with contractors, consultants and owners to manage technical interfaces, site constraints, installation sequencing and handover.",
    overview: `
Delivery Sequence

Scope review → technical coordination → supervised installation → applicable testing/documentation → handover/support.
`.trim(),
    keyServices: [
      {
        title: "Mechanical",
        description:
          "Air-conditioning installation and modifications, ventilation, ductwork, equipment connections and maintenance.",
      },
      {
        title: "Electrical",
        description:
          "DB/SMDB, cabling, containment, architectural lighting, equipment power, EV provisions and ELV infrastructure.",
      },
      {
        title: "Plumbing",
        description:
          "Water supply, drainage, sanitary installations, filtration, pumps, pressure controls and solar water heating.",
      },
      {
        title: "Fire Protection Support",
        description:
          "Defined containment, cabling, piping and equipment installation under the approved project scope.",
      },
      {
        title: "Maintenance",
        description:
          "Planned and corrective servicing, fault diagnosis, system upgrades and annual maintenance contracts.",
      },
    ],
    howWeWork: [
      "Scope review",
      "Technical coordination",
      "Supervised installation",
      "Applicable testing/documentation",
      "Handover/support",
    ],
    sectors: [
      "Commercial offices",
      "Residential villas",
      "Retail premises",
      "Hospitality properties",
    ],
    faqs: [
      {
        question: "Do you handle both new installations and modifications?",
        answer:
          "Yes. Electech undertakes installation, alteration, refurbishment and system-upgrade works according to the agreed project scope.",
      },
      {
        question: "Do you work in occupied offices and villas?",
        answer:
          "Yes. Work planning considers access, existing services, operational constraints and protection of finished surfaces.",
      },
      {
        question: "Can you provide maintenance after installation?",
        answer:
          "Yes. Preventive and corrective services and AMC arrangements are available according to the agreed scope.",
      },
    ],
    heroImage: "/images/pages/mep-industrial-systems.jpg",
    heroAlt: "Coordinated MEP installation including HVAC plant and services",
    ctaTitle: "Request an MEP Quotation",
    ctaDescription: "Request MEP Quote",
  },
  {
    slug: "mechanical-plumbing",
    title: "Reliable Building Systems for Everyday Performance",
    bucket: "mechanical-plumbing",
    intro:
      "Electech provides HVAC, ventilation, plumbing, drainage and water-system installations and maintenance, coordinated with equipment requirements, architectural layouts and existing services.",
    overview: "",
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
          "Multi-stage water-filtration installation, equipment connections, applicable testing and maintenance support.",
      },
      {
        title: "Pumping Systems",
        description:
          "Transfer and circulation pumps, pressure tanks, control panels, associated pipework and troubleshooting.",
      },
      {
        title: "Solar Water Heating",
        description:
          "Solar water-heater installation and relocation, pipework modifications, circulation pumps and controls.",
      },
    ],
    howWeWork: [],
    sectors: ["Commercial fit-out", "Villa upgrade", "System replacement"],
    faqs: [
      {
        question: "Can you install water filtration and pumping systems?",
        answer:
          "Yes. Electech undertakes multi-stage filtration and pumping-system installation and upgrades, subject to project-specific requirements.",
      },
    ],
    heroImage: "/images/pages/mechanical-factory-floor.jpg",
    heroAlt: "HVAC plant and plumbing services installation",
    ctaTitle: "Discuss Mechanical or Plumbing Works",
    ctaDescription: "Request Mechanical / Plumbing Assessment",
  },
  {
    slug: "hvac-installation",
    title: "HVAC Installation",
    bucket: "mechanical-plumbing",
    parentHref: "/solutions/mechanical-plumbing",
    intro:
      "Air-conditioning installation and modifications, ductwork, diffusers, grilles, condensate drainage, equipment connections and maintenance.",
    overview: `
Electech provides duct modifications, AC equipment connections, diffusers/grilles, condensate drainage and maintenance. Works are coordinated with architectural layouts, equipment requirements and existing services. Electech does not claim full HVAC engineering design.
`.trim(),
    keyServices: [
      {
        title: "Duct modifications",
        description:
          "Duct modifications coordinated with site layouts and finishes.",
      },
      {
        title: "AC equipment connections",
        description:
          "Air-conditioning equipment connections and modifications.",
      },
      {
        title: "Diffusers and grilles",
        description:
          "Diffusers and grilles as specified for the project.",
      },
      {
        title: "Condensate drainage",
        description:
          "Condensate drainage installation and checks to support reliable AC operation.",
      },
      {
        title: "Maintenance",
        description:
          "HVAC maintenance support according to the agreed scope.",
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
      "Water distribution, sanitary, drainage, water heaters, filtration and pumping — for upgrades and new installations within the agreed scope.",
    overview: `
Electech undertakes plumbing and drainage works covering water distribution, sanitary connections, drainage, water heaters, filtration and pumping. Scope may cover upgrades to existing services or new installations, according to the agreed project requirements.
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
    title: "Reliable Electrical Infrastructure & Lighting",
    bucket: "electrical",
    intro:
      "Electech undertakes electrical installation, modifications, power distribution, lighting and low-current infrastructure for offices, villas, retail and hospitality properties.",
    overview: "",
    keyServices: [
      {
        title: "Power Distribution",
        description:
          "Distribution boards, sub-main distribution boards, circuit modifications, breakers, isolators, cabling and load coordination.",
      },
      {
        title: "Lighting",
        description:
          "Architectural, façade, landscape, staircase, concealed LED and decorative lighting, with lighting-control provisions.",
      },
      {
        title: "Power Connections",
        description:
          "Socket outlets, dedicated equipment supplies, AC and pump power, water-heater connections and EV charging infrastructure.",
      },
      {
        title: "ELV Infrastructure",
        description:
          "Conduits, containment and installation provisions for CCTV, data, Wi-Fi, access control and intercom systems.",
      },
      {
        title: "Testing & Documentation",
        description:
          "Applicable inspections, circuit identification, load schedules, testing records and handover documentation.",
      },
    ],
    howWeWork: [],
    sectors: [],
    faqs: [],
    heroImage: "/images/pages/electrical-power-infrastructure.jpg",
    heroAlt: "Electrical distribution board and installation works",
    ctaTitle: "Request an Electrical Quotation",
    ctaDescription: "Send Electrical Scope / Drawings",
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
      "Conduits, containment and power provisions for CCTV, data, Wi-Fi, access control and intercom systems.",
    overview: `
Electech provides ELV conduits, containment and power provisions only. Complete active-system design and commissioning are undertaken by the responsible specialist parties as applicable.
`.trim(),
    keyServices: [
      {
        title: "Containment and conduits",
        description:
          "Conduits, containment and pathways for low-current systems.",
      },
      {
        title: "Power provisions",
        description:
          "Power provisions for CCTV, data, Wi-Fi, access control and intercom systems within the agreed scope.",
      },
      {
        title: "Coordination with specialists",
        description:
          "Coordination with specialist parties responsible for complete active-system design and commissioning where applicable.",
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
    title: "Fire Alarm & Firefighting Installation Support",
    bucket: "fire-protection",
    intro:
      "Electech supports fire-protection installation activities in coordination with main contractors, building management and responsible approved specialists.",
    overview: `
Our agreed scope may include:

- Fire-alarm conduiting, containment and cabling
- Installation of specified detection and alarm equipment
- Firefighting pipework and component modifications
- Preparation of supporting installation records
- Coordination of isolation requests and permits

Scope Boundary

Electech undertakes preliminary installation activities within its contract. Isolation, final integrated testing, commissioning, certification and authority approvals remain with the responsible authorized parties, as applicable.
`.trim(),
    keyServices: [
      {
        title: "Fire-alarm conduiting, containment and cabling",
        description:
          "Installation of fire-alarm conduiting, containment and cabling within the agreed project scope.",
      },
      {
        title: "Detection and alarm equipment",
        description:
          "Installation of specified detection and alarm equipment.",
      },
      {
        title: "Firefighting pipework and components",
        description:
          "Firefighting pipework and component modifications within the agreed scope.",
      },
      {
        title: "Installation records and permits",
        description:
          "Preparation of supporting installation records and coordination of isolation requests and permits.",
      },
    ],
    howWeWork: [],
    sectors: ["Commercial", "Residential", "Refurbishment"],
    faqs: [
      {
        question: "Do you provide full fire-system commissioning?",
        answer:
          "Electech supports defined preliminary installation works. Final commissioning and certification are handled by the responsible authorized parties.",
      },
    ],
    heroImage: "/images/pages/fire-services-corridor.jpg",
    heroAlt: "Fire alarm and firefighting installation support",
    ctaTitle: "Enquire About Fire Protection Installation Support",
    ctaDescription: "Discuss Fire Installation Package",
  },
  {
    slug: "fire-fighting-fire-alarm-installation",
    title: "Fire Alarm & Firefighting Installation Support",
    bucket: "fire-protection",
    parentHref: "/solutions/fire-protection",
    intro:
      "Electech supports fire-protection installation activities in coordination with main contractors, building management and responsible approved specialists.",
    overview: `
Our agreed scope may include:

- Fire-alarm conduiting, containment and cabling
- Installation of specified detection and alarm equipment
- Firefighting pipework and component modifications
- Preparation of supporting installation records
- Coordination of isolation requests and permits

Scope Boundary

Electech undertakes preliminary installation activities within its contract. Isolation, final integrated testing, commissioning, certification and authority approvals remain with the responsible authorized parties, as applicable.
`.trim(),
    keyServices: [
      {
        title: "Fire-alarm conduiting, containment and cabling",
        description:
          "Installation of fire-alarm conduiting, containment and cabling within the agreed project scope.",
      },
      {
        title: "Detection and alarm equipment",
        description:
          "Installation of specified detection and alarm equipment.",
      },
      {
        title: "Firefighting pipework and components",
        description:
          "Firefighting pipework and component modifications within the agreed scope.",
      },
      {
        title: "Installation records and permits",
        description:
          "Preparation of supporting installation records and coordination of isolation requests and permits.",
      },
    ],
    howWeWork: [],
    sectors: ["Commercial", "Residential", "Refurbishment"],
    faqs: [
      {
        question: "Do you provide full fire-system commissioning?",
        answer:
          "Electech supports defined preliminary installation works. Final commissioning and certification are handled by the responsible authorized parties.",
      },
    ],
    heroImage: "/images/pages/fire-control-panels.jpg",
    heroAlt: "Fire alarm and firefighting installation support",
    ctaTitle: "Enquire About Fire Protection Installation Support",
    ctaDescription: "Discuss Fire Installation Package",
  },
  {
    slug: "fire-stopping-sealant-application",
    title: "Fire Stopping Sealant Application",
    bucket: "fire-protection",
    parentHref: "/solutions/fire-protection",
    intro:
      "Installation of specified fire-rated sealant systems and coordination with the responsible approval parties, within agreed scope.",
    overview: `
Electech undertakes installation of specified fire-rated sealant systems and coordination with the responsible approval parties, within the agreed project scope. Electech does not provide independent fire-system certification.
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
      "Electech provides planned and corrective maintenance for residential villas, commercial offices and selected properties in Dubai. We help owners and facility managers maintain essential electrical, AC, plumbing and water systems through inspections, troubleshooting, repairs and replacements.",
    overview: `
AMC Packages

Tailored to property type, asset inventory, planned visit frequency and agreed response provisions.
`.trim(),
    keyServices: [
      {
        title: "Electrical",
        description:
          "DBs, lighting, sockets, isolators, circuit faults and accessories.",
      },
      {
        title: "Air-Conditioning",
        description:
          "Routine servicing, filter cleaning, condensate checks and fault investigation.",
      },
      {
        title: "Plumbing",
        description:
          "Leaks, water supply, drainage, sanitary connections, valves and heaters.",
      },
      {
        title: "Pumps & Water Systems",
        description:
          "Pumps, pressure systems, filtration equipment and associated controls.",
      },
    ],
    howWeWork: [],
    sectors: ["Villas", "Offices", "Selected commercial facilities"],
    faqs: [],
    heroImage: "/images/pages/maintenance-workshop.jpg",
    heroAlt: "MEP maintenance and annual maintenance contracts",
    ctaTitle: "Request Property-Specific AMC",
    ctaDescription: "Request an AMC Proposal",
  },
];

export function getServiceBySlug(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}

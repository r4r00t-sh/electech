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
};

export const servicePages: ServicePage[] = [
  {
    slug: "mep",
    title: "MEP Solutions",
    bucket: "mep",
    intro:
      "Integrated mechanical, electrical and plumbing delivery for projects that need one accountable contractor.",
    overview: `
ElecTech Electromechanical Works LLC stands as a premium provider of MEP solutions, blending the accessibility of a local firm with the stability and resources needed for demanding programmes. We cater to residential, commercial, hospitality, educational, healthcare, showroom, factory and warehouse clients.

Our strength is meticulous design and installation practice, quality materials, fail-safe equipment and deep field expertise. We comply with local regulations and safety standards, use certified materials, follow installation guidelines and conduct regular safety inspections.

Regular maintenance and timely upgrades prevent breakdowns, extend equipment life and reduce operating costs — a smart investment for any facility.
`.trim(),
    keyServices: [
      {
        title: "Coordinated MEP design support",
        description:
          "Constructible drawings and coordination with architecture, interiors and structure.",
      },
      {
        title: "Multi-discipline installation",
        description:
          "Mechanical, electrical and plumbing executed as one sequenced package.",
      },
      {
        title: "Testing and commissioning",
        description:
          "Documented checks before concealment and at handover.",
      },
      {
        title: "Authority compliance",
        description:
          "Installations aligned with local authority and safety expectations.",
      },
    ],
    howWeWork: [
      "Survey and brief clarification",
      "Coordinated drawings and material submittals",
      "Sequenced installation with weekly reporting",
      "Testing, handover and optional maintenance",
    ],
    sectors: [
      "Residential",
      "Commercial",
      "Hospitality",
      "Healthcare",
      "Education",
      "Industrial",
    ],
    faqs: [
      {
        question: "Can ElecTech deliver full MEP as a single package?",
        answer:
          "Yes. We coordinate mechanical, electrical and plumbing as one accountable delivery team.",
      },
      {
        question: "Do you work with fit-out contractors?",
        answer:
          "Yes. Interior fit-out firms are a core client group. We sequence works around finishes and occupation plans.",
      },
      {
        question: "How do you keep clients informed?",
        answer:
          "We issue weekly progress reports covering completed works, risks and upcoming milestones.",
      },
    ],
    heroImage: "/images/services/hvac-installation.jpg",
    heroAlt: "Coordinated MEP installation including HVAC plant and services",
  },
  {
    slug: "mechanical-plumbing",
    title: "Mechanical and Plumbing Services",
    bucket: "mechanical-plumbing",
    intro:
      "HVAC and plumbing systems engineered for comfort, hygiene and dependable performance.",
    overview: `
Our mechanical and plumbing teams design, install and maintain HVAC and wet services for fit-outs and new builds. We focus on constructible details, quiet operation and maintainable access — so facilities teams can care for assets after handover.
`.trim(),
    keyServices: [
      {
        title: "HVAC installation",
        description: "Cooling, ventilation and related controls for UAE climates.",
      },
      {
        title: "Plumbing and drainage",
        description: "Water supply and drainage networks for reliable daily use.",
      },
      {
        title: "Plant coordination",
        description: "Outdoor units, pumps and plant spaces planned for service access.",
      },
      {
        title: "Commissioning support",
        description: "Balancing, leak tests and documented handover packs.",
      },
    ],
    howWeWork: [
      "Load and route assessment",
      "Equipment selection and submittals",
      "Protected installation on live or finishing sites",
      "Testing and O&M handover",
    ],
    sectors: ["Residential", "Hospitality", "Healthcare", "Commercial", "F&B"],
    faqs: [
      {
        question: "Do you handle both HVAC and plumbing?",
        answer:
          "Yes. Mechanical and plumbing can be delivered together or as focused packages.",
      },
      {
        question: "Can you work in occupied buildings?",
        answer:
          "Yes. We plan noisy and invasive tasks carefully and protect finished areas.",
      },
    ],
    heroImage: "/images/services/hvac-refrigeration.jpg",
    heroAlt: "Mechanical plant and plumbing services installation",
  },
  {
    slug: "hvac-installation",
    title: "HVAC Installation",
    bucket: "mechanical-plumbing",
    parentHref: "/solutions/mechanical-plumbing",
    intro:
      "Heating, ventilation and air-conditioning installation for comfort and efficiency in Dubai projects.",
    overview: `
We understand that different projects require a multi-specialist provider of HVAC installation, service and maintenance. Our trained technicians deliver reliable, high-quality HVAC services suited to the project's needs and budget, maintaining systems for dependable comfort and performance.

Air-conditioning, refrigeration and ventilation works are planned around architectural constraints, acoustic expectations and UAE operating conditions.
`.trim(),
    keyServices: [
      { title: "Split and VRF systems", description: "Selection and installation matched to zone loads." },
      { title: "Ducted ventilation", description: "Supply, return and exhaust routes with proper support and sealing." },
      { title: "Controls basics", description: "Thermostats and control interfaces coordinated with the electrical package." },
      { title: "Service access", description: "Panels and clearances that make maintenance practical." },
    ],
    howWeWork: [
      "Survey and capacity confirmation",
      "Material approval",
      "Installation and protection of finishes",
      "Commissioning and demonstration",
    ],
    sectors: ["Villas", "Apartments", "Offices", "Hospitality", "Healthcare"],
    faqs: [
      {
        question: "Do you provide HVAC maintenance after installation?",
        answer:
          "Yes. Ask about our maintenance contracts for preventive care and call-outs.",
      },
      {
        question: "Can you retrofit systems in existing buildings?",
        answer:
          "Yes. We assess structural and architectural constraints before proposing routes and equipment.",
      },
    ],
    heroImage: "/images/services/hvac-installation.jpg",
    heroAlt: "HVAC ductwork and air-conditioning installation in Dubai",
  },
  {
    slug: "plumbing-drainage-installation",
    title: "Plumbing and Drainage Installation",
    bucket: "mechanical-plumbing",
    parentHref: "/solutions/mechanical-plumbing",
    intro:
      "In-house design, installation and maintenance of plumbing and drainage systems.",
    overview: `
We are capable of in-house design, installation and maintenance of plumbing and drainage systems. Plumbing supplies water to kitchen and toilet outlets through pipe distribution systems. Drainage removes waste through a planned network of drainage pipes.

Installations prioritise leak integrity, accessibility and compliance with local expectations.
`.trim(),
    keyServices: [
      { title: "Domestic water", description: "Supply pipework to wet areas with clean isolation strategy." },
      { title: "Drainage networks", description: "Gravity and pumped drainage planned for reliability." },
      { title: "Sanitary coordination", description: "Alignment with interiors and fixture schedules." },
      { title: "Testing", description: "Pressure and flow checks before concealment." },
    ],
    howWeWork: [
      "Route survey",
      "Shop drawings / mark-ups",
      "Installation and protection",
      "Test and handover",
    ],
    sectors: ["Residential", "Commercial", "Hospitality", "Healthcare"],
    faqs: [
      {
        question: "Do you coordinate with interior designers?",
        answer:
          "Yes. Fixture positions and access panels are agreed before closing walls and ceilings.",
      },
    ],
    heroImage: "/images/services/plumbing.jpg",
    heroAlt: "Plumbing and drainage pipework installation",
  },
  {
    slug: "electrical",
    title: "Electrical Services",
    bucket: "electrical",
    intro:
      "Power, extra-low voltage and solar installations engineered for safety and longevity.",
    overview: `
Our electrical services cover systems that help organisations manage operating costs while meeting performance needs. Beyond execution, we consult clients on strategies and cost allocations for specific electrical systems — from distribution to ELV and solar.
`.trim(),
    keyServices: [
      { title: "Electrical installation", description: "HV/LV distribution, containment and final circuits." },
      { title: "ELV systems", description: "Low-current systems supporting safety and connectivity." },
      { title: "Solar power plants", description: "Photovoltaic systems for cleaner on-site generation." },
      { title: "Testing & certification support", description: "Documented checks ready for inspection." },
    ],
    howWeWork: [
      "Load assessment and design coordination",
      "Approved materials",
      "Neat containment and termination",
      "Testing and as-built documentation",
    ],
    sectors: ["Offices", "Retail", "Logistics", "Residential", "Education"],
    faqs: [
      {
        question: "Do you install ELV and solar as well as power?",
        answer:
          "Yes. Electrical Installation, Extra Low Voltage and Solar Power Plant Installation are part of this bucket.",
      },
    ],
    heroImage: "/images/services/electrical-installation.jpg",
    heroAlt: "Electrical installation and switchgear works",
  },
  {
    slug: "electrical-installation",
    title: "Electrical Installation",
    bucket: "electrical",
    parentHref: "/solutions/electrical",
    intro:
      "In-house design, installation and maintenance of high voltage, low voltage and related systems.",
    overview: `
We are capable of in-house design, installation and maintenance of high voltage, low voltage and low current systems. Our electrical services encompass a full range of systems that can reduce operating costs when specified and installed correctly.

We consult clients on strategies and associated costs for each electrical system on their project.
`.trim(),
    keyServices: [
      { title: "Distribution boards", description: "Organised, labelled boards ready for facilities teams." },
      { title: "Containment & cabling", description: "Neat routes that respect other trades." },
      { title: "Lighting support", description: "Power infrastructure for architectural lighting packages." },
      { title: "Small power", description: "Workstations, kitchens and specialty loads." },
    ],
    howWeWork: [
      "Survey and coordination",
      "Material submittals",
      "First and second fix",
      "Testing and energisation support",
    ],
    sectors: ["Commercial", "Retail", "Residential", "Hospitality"],
    faqs: [
      {
        question: "Can you work to consultant specifications?",
        answer:
          "Yes. We install to approved drawings and raise RFIs when site conditions require clarification.",
      },
    ],
    heroImage: "/images/services/electrical-installation.jpg",
    heroAlt: "Electrical installation on a commercial project",
  },
  {
    slug: "extra-low-voltage-installation",
    title: "Extra Low Voltage Installation",
    bucket: "electrical",
    parentHref: "/solutions/electrical",
    intro:
      "Design, installation and maintenance of low-current systems for functional, safe spaces.",
    overview: `
We are capable of in-house design, installation and maintenance of low current systems. Our engineers provide designer services for electrical distribution and lighting-related ELV needs across project types.

We work closely with clients to assess requirements, recommend alternatives and deliver environments that are functional, safe and aesthetically aligned with the interior brief.
`.trim(),
    keyServices: [
      { title: "Structured pathways", description: "Containment ready for ELV devices and future adds." },
      { title: "Device installation", description: "Clean mounting coordinated with interiors." },
      { title: "Integration support", description: "Interfaces with fire, access and BMS as specified." },
      { title: "Testing", description: "Point-to-point checks before handover." },
    ],
    howWeWork: [
      "Brief and device schedule review",
      "Containment first-fix",
      "Device fit-off",
      "Testing with stakeholders",
    ],
    sectors: ["Offices", "Education", "Healthcare", "Hospitality"],
    faqs: [
      {
        question: "Which ELV systems do you cover?",
        answer:
          "[CLIENT TO PROVIDE: definitive ELV system list for marketing pages.]",
      },
    ],
    heroImage: "/images/services/elv.jpg",
    heroAlt: "Extra low voltage / low-current system installation",
  },
  {
    slug: "solar-power-plant-installation",
    title: "Solar Power Plant Installation",
    bucket: "electrical",
    parentHref: "/solutions/electrical",
    intro:
      "Photovoltaic systems that generate electricity with less pollution — often rooftop ready.",
    overview: `
Environmental concerns continue to grow. Generating electricity with less pollution is increasingly attractive. Unlike conventional generation, the fuel for solar photovoltaic energy is available at no cost. Solar PV systems can often be installed on roofs where structure and access allow.

[CLIENT TO PROVIDE: typical system sizes, authority pathway notes and case metrics.]
`.trim(),
    keyServices: [
      { title: "Rooftop PV arrays", description: "Module layout planned for access and wind exposure." },
      { title: "Inverters & AC interface", description: "Safe connection to the building electrical system." },
      { title: "Monitoring basics", description: "Visibility of generation for facilities teams." },
      { title: "Maintenance pathway", description: "Cleaning and inspection routines after handover." },
    ],
    howWeWork: [
      "Feasibility and structure review",
      "Design and approvals support",
      "Install and electrical interface",
      "Commissioning and training",
    ],
    sectors: ["Commercial", "Industrial", "Education", "Hospitality"],
    faqs: [
      {
        question: "Do you handle authority approvals?",
        answer:
          "We support the technical package. [CLIENT TO PROVIDE: exact approvals scope.]",
      },
    ],
    heroImage: "/images/services/solar.jpg",
    heroAlt: "Solar power plant installation in Dubai and Sharjah",
  },
  {
    slug: "fire-protection",
    title: "Fire Protection and Safety Services",
    bucket: "fire-protection",
    intro:
      "Fire fighting, fire alarm and fire-stopping systems that protect people first — then property.",
    overview: `
Fire protection is among the most important building services. Our solutions are designed to detect and suppress fire risks swiftly, supporting occupant safety and limiting damage. We coordinate installation, testing and the documentation facilities teams need for inspections.
`.trim(),
    keyServices: [
      { title: "Fire fighting & fire alarm", description: "Detection and suppression packages working together." },
      { title: "Fire stopping", description: "Sealing penetrations to protect compartments." },
      { title: "Inspection readiness", description: "Documentation and testing support." },
      { title: "Maintenance", description: "Ongoing care to keep systems ready." },
    ],
    howWeWork: [
      "Risk and drawing review",
      "Material and cause-and-effect alignment",
      "Installation and interface testing",
      "Handover and maintenance options",
    ],
    sectors: ["Government", "Healthcare", "Commercial", "Hospitality", "Residential"],
    faqs: [
      {
        question: "Do you install both detection and suppression?",
        answer:
          "Yes. Fire fighting and fire alarm installation is a core offering, complemented by fire stopping.",
      },
    ],
    heroImage: "/images/services/fire-alarm.jpg",
    heroAlt: "Fire protection and fire alarm system installation",
  },
  {
    slug: "fire-fighting-fire-alarm-installation",
    title: "Fire Fighting and Fire Alarm Installation",
    bucket: "fire-protection",
    parentHref: "/solutions/fire-protection",
    intro:
      "Detection and suppression systems designed to protect life and limit property damage.",
    overview: `
A firefighting system is one of the most critical building services, prioritising human life first and property second. Our solution is designed to detect and suppress fires swiftly. Key components include fire alarms, sprinkler systems, fire extinguishers and smoke detectors working together.

We provide regular maintenance and support drills to help keep systems effective.
`.trim(),
    keyServices: [
      { title: "Fire alarm systems", description: "Detection, panels and notification devices." },
      { title: "Sprinkler & fighting systems", description: "Pipework and devices installed to specification." },
      { title: "Interface testing", description: "Cause-and-effect verification with related trades." },
      { title: "Maintenance & drills support", description: "Keep readiness after handover." },
    ],
    howWeWork: [
      "Drawing and matrix review",
      "First fix pipework/cabling",
      "Device fit-off",
      "Integrated testing and handover",
    ],
    sectors: ["Commercial", "Government", "Healthcare", "Hospitality"],
    faqs: [
      {
        question: "Do you coordinate with Civil Defence requirements?",
        answer:
          "Installations follow approved designs and local authority expectations. [CLIENT TO PROVIDE: specific approval process wording.]",
      },
    ],
    heroImage: "/images/services/fire-alarm.jpg",
    heroAlt: "Fire fighting and fire alarm installation in the UAE",
  },
  {
    slug: "fire-stopping-sealant-application",
    title: "Fire Stopping Sealant Application",
    bucket: "fire-protection",
    parentHref: "/solutions/fire-protection",
    intro:
      "Sealing penetrations and joints so fire compartments perform as designed.",
    overview: `
Our fire stopping services include sealing and protecting penetrations through fire compartment walls and floors. We install fire barriers around combinations of penetrations and apply fire-rated solutions to ducts, pipes, joints, electrical conduits and gaps. We also offer acoustic and non-fire-rated sealant applications where specified.

Work adheres to specifications, safety guidelines and local authority regulations, with periodic inspections to support a risk-controlled environment.
`.trim(),
    keyServices: [
      { title: "Penetration seals", description: "Pipes, cables and ducts through rated walls and floors." },
      { title: "Linear joint seals", description: "Joints protected to the specified rating." },
      { title: "Mixed service barriers", description: "Combined penetrations treated as a system." },
      { title: "Inspection support", description: "Traceable applications ready for review." },
    ],
    howWeWork: [
      "Survey of openings",
      "Approved system selection",
      "Application and labelling",
      "Record photos and handover",
    ],
    sectors: ["Commercial", "Healthcare", "Government", "Hospitality"],
    faqs: [
      {
        question: "Can you attend after other trades create new openings?",
        answer:
          "Yes. Fire stopping often continues as a rolling package through the fit-out.",
      },
    ],
    heroImage: "/images/services/fire-alarm-install.jpg",
    heroAlt: "Fire stopping and fire-rated sealing works",
  },
  {
    slug: "maintenance",
    title: "Maintenance Contract",
    bucket: "maintenance",
    intro:
      "Planned maintenance that keeps MEP assets reliable, compliant and ready for daily use.",
    overview: `
Maintenance includes a wide variety of tasks depending on the organisation. It is the behind-the-scenes work that keeps facilities functional and comfortable. Our experienced team coordinates civil, mechanical, electrical, plumbing and IT-related interfaces without the delay of waiting on multiple vendors for basic information — speeding estimates and improving service for building amenities.

Whether you need preventive routines after a fit-out or an ongoing contract for an occupied asset, we provide clear scopes, responsive call-outs and transparent reporting.
`.trim(),
    keyServices: [
      { title: "Preventive maintenance", description: "Scheduled inspections and servicing for MEP assets." },
      { title: "Responsive call-outs", description: "Support when systems need urgent attention." },
      { title: "Multi-discipline coordination", description: "One team across mechanical, electrical and plumbing." },
      { title: "Reporting", description: "Clear records of visits, findings and recommendations." },
    ],
    howWeWork: [
      "Asset and criticality review",
      "Agreed SLA and visit plan",
      "Scheduled service + call-out response",
      "Monthly or weekly status reporting as agreed",
    ],
    sectors: ["Commercial", "Hospitality", "Healthcare", "Retail", "Government"],
    faqs: [
      {
        question: "Can maintenance follow an ElecTech installation?",
        answer:
          "Yes. Many clients continue with us after handover so knowledge of the install is retained.",
      },
      {
        question: "Do you maintain systems installed by others?",
        answer:
          "Often yes, after a condition survey. [CLIENT TO PROVIDE: onboarding process.]",
      },
    ],
    heroImage: "/images/services/plumbing.jpg",
    heroAlt: "Planned MEP maintenance on building services",
  },
];

export function getServiceBySlug(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}

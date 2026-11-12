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

/**
 * Service page copy — body text taken from the client website docx.
 * Key Services headings match the client's supplied lists where provided.
 */
export const servicePages: ServicePage[] = [
  {
    slug: "mep",
    title: "MEP Solutions",
    bucket: "mep",
    intro:
      "Electech Electromechanical Works LLC is a distinguished provider of MEP solutions, seamlessly integrating personalized support and accessibility with the robustness, stability, and extensive resources of a leading industry player.",
    overview: `
We cater to a diverse clientele across multiple sectors, including residential, commercial, hospitality, educational institutions, healthcare, showrooms, factories, and warehouses. Our core strength lies in our unwavering commitment to meticulous design and installation practices, utilisation of superior materials, fail-safe equipment, and profound expertise in our field. Our compliance with local regulations and safety standards is a cornerstone of our approach. We use certified materials, adhere to installation guidelines, and conduct regular safety inspections to ensure that all systems meet the highest standards of safety and reliability.

Regular maintenance and timely upgrades are crucial components of our service offering. We provide ongoing support to prevent system breakdowns and extend the lifespan of equipment. Upgrading outdated systems with modern, energy-efficient solutions not only enhances performance but also reduces operational costs, making it a smart investment for any facility.
`.trim(),
    keyServices: [
      {
        title: "Design and installation",
        description:
          "Meticulous design and installation practices across mechanical, electrical and plumbing packages.",
      },
      {
        title: "Certified materials and equipment",
        description:
          "Utilisation of superior materials and fail-safe equipment aligned with local regulations and safety standards.",
      },
      {
        title: "Safety inspections",
        description:
          "Regular safety inspections to support systems that meet expected standards of safety and reliability.",
      },
      {
        title: "Maintenance and upgrades",
        description:
          "Ongoing support to help prevent breakdowns, extend equipment life and support energy-efficient upgrades.",
      },
    ],
    howWeWork: [
      "Brief and site survey",
      "Coordinated design and material selection",
      "Sequenced multi-discipline installation",
      "Inspection, handover and maintenance options",
    ],
    sectors: [
      "Residential",
      "Commercial",
      "Hospitality",
      "Education",
      "Healthcare",
      "Showrooms",
      "Factories",
      "Warehouses",
    ],
    faqs: [
      {
        question: "What sectors do you serve with MEP solutions?",
        answer:
          "We cater to residential, commercial, hospitality, educational institutions, healthcare, showrooms, factories and warehouses.",
      },
      {
        question: "Do you offer maintenance after installation?",
        answer:
          "Yes. Regular maintenance and timely upgrades are part of our service offering.",
      },
      {
        question: "[CLIENT TO PROVIDE]",
        answer:
          "[CLIENT TO PROVIDE: additional FAQs approved for publication.]",
      },
    ],
    heroImage: "/images/pages/mep-industrial-systems.jpg",
    heroAlt: "Coordinated MEP installation including HVAC plant and services",
  },
  {
    slug: "mechanical-plumbing",
    title: "Mechanical and Plumbing Services",
    bucket: "mechanical-plumbing",
    intro:
      "HVAC installation, plumbing and drainage services designed, installed and maintained for reliable building performance.",
    overview: `
Mechanical and Plumbing Services covers HVAC installation and plumbing and drainage installation. Our teams deliver these packages with attention to functionality, safety and maintainability for residential, commercial and specialised environments.
`.trim(),
    keyServices: [
      {
        title: "HVAC Installation",
        description:
          "Installation, service and maintenance of HVAC systems tailored to project needs.",
      },
      {
        title: "Plumbing and Drainage Installation",
        description:
          "In-house design, installation and maintenance of plumbing and drainage systems.",
      },
    ],
    howWeWork: [
      "Survey and brief",
      "Design coordination",
      "Installation and protection of finishes",
      "Testing and handover",
    ],
    sectors: ["Residential", "Hospitality", "Healthcare", "Commercial", "F&B"],
    faqs: [
      {
        question: "Which pages sit under Mechanical and Plumbing?",
        answer:
          "HVAC Installation and Plumbing and Drainage Installation.",
      },
      {
        question: "[CLIENT TO PROVIDE]",
        answer:
          "[CLIENT TO PROVIDE: additional FAQs approved for publication.]",
      },
    ],
    heroImage: "/images/pages/mechanical-factory-floor.jpg",
    heroAlt: "Mechanical plant and plumbing services installation",
  },
  {
    slug: "hvac-installation",
    title: "HVAC Installation",
    bucket: "mechanical-plumbing",
    parentHref: "/solutions/mechanical-plumbing",
    intro:
      "At Electech, we recognize that different projects demand a multi-specialist provider for HVAC installation, service, and maintenance.",
    overview: `
At Electech, we recognize that different projects demand a multi-specialist provider for HVAC installation, service, and maintenance. Our team of trained and certified HVAC technicians brings expertise, speed, and reliability to every project, ensuring high-quality HVAC services tailored to your specific needs.

Trust Electech for all your HVAC needs, and experience the assurance of top-notch service and performance.
`.trim(),
    keyServices: [
      {
        title: "Installation",
        description:
          "Expert installation of HVAC systems to ensure optimal performance and efficiency.",
      },
      {
        title: "Service and Maintenance",
        description:
          "Regular maintenance and prompt service to keep your HVAC systems in top condition, ensuring maximum comfort and reliability.",
      },
      {
        title: "Expert Technicians",
        description:
          "Our certified technicians are skilled in handling a wide range of HVAC systems, providing solutions that meet the highest standards of performance and service.",
      },
      {
        title: "Customized Solutions",
        description:
          "We work within your budget to deliver HVAC services that are dependable and tailored to your needs.",
      },
      {
        title: "Commitment to Quality",
        description:
          "We maintain your HVAC system to ensure it operates efficiently, providing you with comfort and peace of mind.",
      },
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
        question: "Do you both install and maintain HVAC systems?",
        answer:
          "Yes. Our offering covers HVAC installation, service and maintenance.",
      },
      {
        question: "[CLIENT TO PROVIDE]",
        answer:
          "[CLIENT TO PROVIDE: additional FAQs approved for publication.]",
      },
    ],
    heroImage: "/images/pages/hvac-equipment-detail.jpg",
    heroAlt: "HVAC ductwork and air-conditioning installation in Dubai",
  },
  {
    slug: "plumbing-drainage-installation",
    title: "Plumbing and Drainage Installation",
    bucket: "mechanical-plumbing",
    parentHref: "/solutions/mechanical-plumbing",
    intro:
      "At Electech, we specialize in the in-house design, installation, and maintenance of comprehensive plumbing and drainage systems.",
    overview: `
At Electech, we specialize in the in-house design, installation, and maintenance of comprehensive plumbing and drainage systems. Our expertise ensures a reliable water supply to kitchen and toilet outlets through meticulously designed pipe distribution systems. Additionally, our drainage solutions efficiently manage waste removal via a well-arranged network of drainage pipes.

Our team of skilled engineers collaborates closely with clients to deliver tailored solutions that meet the highest standards of functionality and safety. By providing accurate assessments and recommending optimal alternatives, we create environments that are not only highly functional but also aesthetically pleasing. Trust Electech for all your plumbing and drainage needs, ensuring seamless and efficient water management for your projects.
`.trim(),
    keyServices: [
      {
        title: "Plumbing systems",
        description:
          "Reliable water supply to kitchen and toilet outlets through meticulously designed pipe distribution systems.",
      },
      {
        title: "Drainage systems",
        description:
          "Drainage solutions that manage waste removal via a well-arranged network of drainage pipes.",
      },
      {
        title: "Design and collaboration",
        description:
          "Skilled engineers collaborate with clients to deliver tailored solutions for functionality and safety.",
      },
    ],
    howWeWork: [
      "Route survey",
      "Assessments and alternatives",
      "Installation and protection",
      "Test and handover",
    ],
    sectors: ["Residential", "Commercial", "Hospitality", "Healthcare"],
    faqs: [
      {
        question: "Do you design as well as install plumbing and drainage?",
        answer:
          "Yes. We specialize in in-house design, installation and maintenance of plumbing and drainage systems.",
      },
      {
        question: "[CLIENT TO PROVIDE]",
        answer:
          "[CLIENT TO PROVIDE: additional FAQs approved for publication.]",
      },
    ],
    heroImage: "/images/pages/plumbing-finished-bathroom.jpg",
    heroAlt: "Plumbing and drainage pipework installation",
  },
  {
    slug: "electrical",
    title: "Electrical Services",
    bucket: "electrical",
    intro:
      "Electrical Installation, Extra Low Voltage Installation and Solar Power Plant Installation for organisations and projects across the UAE.",
    overview: `
Electrical Services covers electrical installation, extra low voltage installation and solar power plant installation. Our teams focus on systems that support reliable operation and informed decisions on strategy and cost.
`.trim(),
    keyServices: [
      {
        title: "Electrical Installation",
        description:
          "Comprehensive electrical systems from design through installation and maintenance.",
      },
      {
        title: "Extra Low Voltage Installation",
        description:
          "In-house design, installation and maintenance of low current systems.",
      },
      {
        title: "Solar Power Plant Installation",
        description:
          "Solar photovoltaic energy systems with design, installation, maintenance and monitoring.",
      },
    ],
    howWeWork: [
      "Load assessment and design coordination",
      "Approved materials",
      "Installation and termination",
      "Testing and documentation",
    ],
    sectors: ["Offices", "Retail", "Logistics", "Residential", "Education"],
    faqs: [
      {
        question: "Which pages sit under Electrical Services?",
        answer:
          "Electrical Installation, Extra Low Voltage Installation and Solar Power Plant Installation.",
      },
      {
        question: "[CLIENT TO PROVIDE]",
        answer:
          "[CLIENT TO PROVIDE: additional FAQs approved for publication.]",
      },
    ],
    heroImage: "/images/pages/electrical-power-infrastructure.jpg",
    heroAlt: "Electrical installation and switchgear works",
  },
  {
    slug: "electrical-installation",
    title: "Electrical Installation",
    bucket: "electrical",
    parentHref: "/solutions/electrical",
    intro:
      "At Electech, we offer comprehensive electrical services that cover a full range of electrical systems, designed to provide lower operating costs for organizations and electrical projects.",
    overview: `
At Electech, we offer comprehensive electrical services that cover a full range of electrical systems, designed to provide lower operating costs for organizations and electrical projects. Our expertise ensures that every project is executed with precision and efficiency, delivering optimal performance and cost savings.

By working closely with our clients, we ensure that each electrical system is tailored to meet their unique requirements, delivering both functionality and value. Trust Electech to provide innovative electrical solutions that drive efficiency and cost-effectiveness for your projects.
`.trim(),
    keyServices: [
      {
        title: "Full Range of Electrical Systems",
        description:
          "From design to installation and maintenance, we handle all aspects of electrical systems to ensure seamless operation and reliability.",
      },
      {
        title: "Cost-Effective Solutions",
        description:
          "Our systems are engineered to reduce operating costs, providing long-term savings and enhanced efficiency for our clients.",
      },
      {
        title: "Consultation and Strategy",
        description:
          "Beyond project execution, we offer expert consultation on various strategies and associated costs for specific electrical systems. Our goal is to help clients make informed decisions that align with their budget and operational needs.",
      },
    ],
    howWeWork: [
      "Survey and coordination",
      "Material submittals",
      "Installation",
      "Testing and energisation support",
    ],
    sectors: ["Commercial", "Retail", "Residential", "Hospitality"],
    faqs: [
      {
        question: "Do you consult on electrical strategies as well as install?",
        answer:
          "Yes. Beyond project execution, we offer consultation on strategies and associated costs for specific electrical systems.",
      },
      {
        question: "[CLIENT TO PROVIDE]",
        answer:
          "[CLIENT TO PROVIDE: additional FAQs approved for publication.]",
      },
    ],
    heroImage: "/images/pages/electrical-installation-work.jpg",
    heroAlt: "Electrical installation on a commercial project",
  },
  {
    slug: "extra-low-voltage-installation",
    title: "Extra Low Voltage Installation",
    bucket: "electrical",
    parentHref: "/solutions/electrical",
    intro:
      "At Electech, we excel in the in-house design, installation, and maintenance of low current systems.",
    overview: `
At Electech, we excel in the in-house design, installation, and maintenance of low current systems. Our engineers bring extensive expertise in providing designer services for electrical distribution and lighting systems across a variety of projects. This deep knowledge base allows us to deliver highly functional, safe, and aesthetically pleasing environments.

We work closely with our clients to provide accurate assessments and recommend the best alternatives. Our collaborative approach ensures that every project meets the highest standards of functionality and safety while enhancing the overall aesthetic appeal. Trust Electech to deliver comprehensive low current system solutions tailored to your specific needs.
`.trim(),
    keyServices: [
      {
        title: "Low current systems",
        description:
          "In-house design, installation and maintenance of low current systems.",
      },
      {
        title: "Distribution and lighting design support",
        description:
          "Designer services for electrical distribution and lighting systems across a variety of projects.",
      },
      {
        title: "Client collaboration",
        description:
          "Accurate assessments and recommended alternatives to meet functionality and safety standards.",
      },
    ],
    howWeWork: [
      "Brief and assessment",
      "Recommended alternatives",
      "Installation",
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
    heroImage: "/images/pages/elv-server-racks.jpg",
    heroAlt: "Extra low voltage / low-current system installation",
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
    faqs: [
      {
        question: "Do you handle authority approvals for solar?",
        answer:
          "[CLIENT TO PROVIDE: exact approvals scope for solar projects.]",
      },
    ],
    heroImage: "/images/pages/solar-rooftop-array.jpg",
    heroAlt: "Solar power plant installation in Dubai and Sharjah",
  },
  {
    slug: "fire-protection",
    title: "Fire Protection and Safety Services",
    bucket: "fire-protection",
    intro:
      "Fire Fighting and Fire Alarm Installation and Fire Stopping Sealant Application for building safety.",
    overview: `
Fire Protection and Safety Services covers fire fighting and fire alarm installation, and fire stopping sealant application. These packages support early detection, suppression readiness and compartment integrity as specified for each project.
`.trim(),
    keyServices: [
      {
        title: "Fire Fighting and Fire Alarm Installation",
        description:
          "Detection and suppression components working together for building safety.",
      },
      {
        title: "Fire Stopping Sealant Application",
        description:
          "Sealing and protecting penetrations through fire compartment walls and floors.",
      },
    ],
    howWeWork: [
      "Drawing and risk review",
      "Material and system alignment",
      "Installation and interface testing",
      "Handover and maintenance options",
    ],
    sectors: ["Government", "Healthcare", "Commercial", "Hospitality", "Residential"],
    faqs: [
      {
        question: "Which pages sit under Fire Protection and Safety?",
        answer:
          "Fire Fighting and Fire Alarm Installation, and Fire Stopping Sealant Application.",
      },
      {
        question: "[CLIENT TO PROVIDE]",
        answer:
          "[CLIENT TO PROVIDE: additional FAQs approved for publication.]",
      },
    ],
    heroImage: "/images/pages/fire-services-corridor.jpg",
    heroAlt: "Fire protection and fire alarm system installation",
  },
  {
    slug: "fire-fighting-fire-alarm-installation",
    title: "Fire Fighting and Fire Alarm Installation",
    bucket: "fire-protection",
    parentHref: "/solutions/fire-protection",
    intro:
      "At Electech, we understand that a firefighting system is one of the most critical building services, prioritizing human life first and property second.",
    overview: `
At Electech, we understand that a firefighting system is one of the most critical building services, prioritizing human life first and property second. Our expertly designed solutions swiftly detect and suppress fires, ensuring occupant safety and minimizing damage.

We provide regular maintenance and conduct drills to ensure the system’s effectiveness, making our firefighting systems indispensable for any building’s safety infrastructure. Trust Electech to safeguard your property and lives with our comprehensive firefighting solutions.
`.trim(),
    keyServices: [
      {
        title: "Fire Alarms",
        description: "Early detection and alert systems.",
      },
      {
        title: "Sprinkler Systems",
        description: "Automated fire suppression.",
      },
      {
        title: "Fire Extinguishers",
        description: "Accessible and effective fire control.",
      },
      {
        title: "Smoke Detectors",
        description: "Continuous monitoring for smoke and fire.",
      },
    ],
    howWeWork: [
      "Drawing and matrix review",
      "Installation of detection and suppression components",
      "Integrated testing",
      "Maintenance and drills support",
    ],
    sectors: ["Commercial", "Government", "Healthcare", "Hospitality"],
    faqs: [
      {
        question: "Do you support maintenance after fire system installation?",
        answer:
          "Yes. We provide regular maintenance and conduct drills to support system effectiveness.",
      },
      {
        question: "[CLIENT TO PROVIDE]",
        answer:
          "[CLIENT TO PROVIDE: Civil Defence / approvals wording for marketing pages.]",
      },
    ],
    heroImage: "/images/pages/fire-control-panels.jpg",
    heroAlt: "Fire fighting and fire alarm installation in the UAE",
  },
  {
    slug: "fire-stopping-sealant-application",
    title: "Fire Stopping Sealant Application",
    bucket: "fire-protection",
    parentHref: "/solutions/fire-protection",
    intro:
      "Our fire stopping services include sealing and protecting penetrations through fire compartment walls and floors.",
    overview: `
Our fire stopping services include sealing and protecting penetrations through fire compartment walls and floors. We also install fire barriers around combinations of penetrations in fire zones and apply fire-rated solutions to ducts, various types of pipes, joints, electrical conduits, and gaps. Additionally, we offer a range of acoustic and non-fire-rated sealant applications. Our work adheres to specifications, safety guidelines, and local authority regulations, with periodic inspections conducted to ensure quality and a risk-free environment.
`.trim(),
    keyServices: [
      {
        title: "Penetration seals",
        description:
          "Sealing and protecting penetrations through fire compartment walls and floors.",
      },
      {
        title: "Fire barriers",
        description:
          "Fire barriers around combinations of penetrations in fire zones.",
      },
      {
        title: "Fire-rated applications",
        description:
          "Fire-rated solutions to ducts, pipes, joints, electrical conduits and gaps.",
      },
      {
        title: "Acoustic and non-fire-rated sealants",
        description:
          "A range of acoustic and non-fire-rated sealant applications where specified.",
      },
    ],
    howWeWork: [
      "Survey of openings",
      "Approved system selection",
      "Application and labelling",
      "Periodic inspection support",
    ],
    sectors: ["Commercial", "Healthcare", "Government", "Hospitality"],
    faqs: [
      {
        question: "Do you work to local authority regulations?",
        answer:
          "Yes. Our work adheres to specifications, safety guidelines and local authority regulations.",
      },
      {
        question: "[CLIENT TO PROVIDE]",
        answer:
          "[CLIENT TO PROVIDE: additional FAQs approved for publication.]",
      },
    ],
    heroImage: "/images/pages/fire-stopping-interior.jpg",
    heroAlt: "Fire stopping and fire-rated sealing works",
  },
  {
    slug: "maintenance",
    title: "Maintenance Contract",
    bucket: "maintenance",
    intro:
      "Maintenance includes a wide variety of tasks depending on the particular business or organization.",
    overview: `
Maintenance includes a wide variety of tasks depending on the particular business or organization. It encompasses a great deal of ‘behind the scenes’ work to ensure that facilities or buildings remain functional and comfortable for their users. Our experienced team works together to coordinate the intricate layout of all your civil, mechanical, electrical, plumbing, and IT systems without the delay of waiting on other businesses for information. This not only speeds up the estimating of requirements but also leads to a far better service for your building amenities.
`.trim(),
    keyServices: [
      {
        title: "Multi-discipline coordination",
        description:
          "Coordination across civil, mechanical, electrical, plumbing and IT systems.",
      },
      {
        title: "Facility readiness",
        description:
          "Behind-the-scenes work that helps facilities remain functional and comfortable for users.",
      },
      {
        title: "Faster estimating",
        description:
          "One experienced team reduces delay from waiting on multiple vendors for basic information.",
      },
    ],
    howWeWork: [
      "Asset and criticality review",
      "Agreed visit plan",
      "Scheduled service and call-out response",
      "Status reporting as agreed",
    ],
    sectors: ["Commercial", "Hospitality", "Healthcare", "Retail", "Government"],
    faqs: [
      {
        question: "What does a maintenance contract typically cover?",
        answer:
          "[CLIENT TO PROVIDE: standard maintenance contract scope for marketing pages.]",
      },
    ],
    heroImage: "/images/pages/maintenance-workshop.jpg",
    heroAlt: "Planned MEP maintenance on building services",
  },
];

export function getServiceBySlug(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}

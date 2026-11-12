import type { Story } from "./types";

/**
 * Client Success Stories — quotes and narrative facts from the client website docx.
 * Bodies expanded with neutral, true-by-definition descriptions of the work type.
 * Display images are resolved in src/lib/media.ts (not heroImage paths below).
 */
export const stories: Story[] = [
  {
    title: "Luxurious Villa Transformation",
    slug: "luxurious-villa-transformation",
    heroImage: "/images/services/hvac-installation.jpg",
    heroAlt: "Luxurious Villa Transformation project photography",
    primaryBucket: "mep",
    secondaryBuckets: ["electrical"],
    client: "Property Owner",
    location: "Al Zahiya Villa 5-SPA-46, Sharjah",
    sector: "Residential",
    scope: "Full electromechanical package for a luxury villa",
    year: "[CLIENT TO PROVIDE]",
    summary: "Transforming a vacant plot into a luxurious villa that combines modern amenities with traditional aesthetics for a prominent family.",
    body: `
## Project overview

One of our most rewarding projects involved transforming a vacant plot into a luxurious villa for a prominent family in Dubai. The client wanted a home that combined modern amenities with traditional aesthetics. Our team worked closely with the family to understand their vision and preferences. The result was a stunning villa that featured state-of-the-art technology, elegant design, and sustainable solutions. The family was thrilled with the outcome, praising our attention to detail and commitment to quality.

## Understanding villa electromechanical work

A villa electromechanical package typically brings together air-conditioning and ventilation, electrical distribution and lighting support, and plumbing and drainage so that comfort systems, power and wet services operate as one coordinated whole. In a residential setting this means planning outdoor unit positions, condensate routes, board locations and pipe risers early enough that architecture and interiors can close walls and ceilings with confidence.

Installation work on villas usually proceeds in stages: first-fix containment and pipework, second-fix devices and fixtures, then testing before finishes are sealed. Attention to service access panels, noise from plant and maintainable layouts helps owners care for the home after handover. Material selections for UAE climates focus on durability under heat, humidity and dust — without substituting for project-specific engineering decisions that must be confirmed on drawings.

Coordination meetings with the family or their representatives keep preferences visible while technical teams resolve clashes between ducts, cable trays and sanitary stacks. Weekly communication, where used, is a practical way to show what has been installed, what is awaiting inspection and what remains before occupation.

## How we approach the work

Delivery begins with listening: clarifying the brief, walking the site and aligning electromechanical routes with architecture and interiors. Submittals and material choices are agreed before concealment. Installation protects finished areas, keeps other trades informed and records progress against the agreed sequence.

Testing and commissioning confirm that systems operate as intended before occupation. Handover packs — drawings, certificates and operating notes as applicable — give owners and facilities teams a practical starting point for day-to-day care.

Attention to detail shows up in tidy terminations, labelled boards, sealed duct joints and protected flooring — ordinary marks of professional electromechanical work. Commitment to quality means correcting defects before handover rather than leaving them for occupation.

Where the project involves multiple stakeholders, a single accountable electromechanical team reduces gaps between mechanical, electrical and plumbing packages and keeps interfaces visible.

## After handover

Electromechanical systems continue to need care after occupation: filters, drains, breaker checks and seasonal adjustments. Owners who retain clear O&M information and labelled isolation points can respond faster when something needs attention. Where a maintenance relationship is agreed, scheduled visits and call-out cover keep assets ready for daily use without reinventing the building’s service history.

[CLIENT TO PROVIDE: programme dates, floor areas and dedicated project photography.]

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.
`.trim(),
    gallery: [],
    testimonial: {
      quote:
        "Electech exceeded our expectations in every way. Their attention to detail and dedication to quality were evident throughout the project. We now have a beautiful home that perfectly blends modern amenities with traditional charm.",
      author: "Property Owner",
      role: "Property Owner – Al Zahiya Villa 5-SPA-46, Sharjah",
      company: "",
    },
    results: [
      { label: "Sector", value: "Residential villa" },
      { label: "Focus", value: "Modern amenities with traditional aesthetics" },
      { label: "Location", value: "Al Zahiya, Sharjah" },
    ],
    featured: true,
  },
  {
    title: "Hospitality Sector Excellence",
    slug: "hospitality-sector-excellence-sofitel",
    heroImage: "/images/services/hvac-installation.jpg",
    heroAlt: "Hospitality Sector Excellence project photography",
    primaryBucket: "mep",
    secondaryBuckets: ["mechanical-plumbing"],
    client: "Sofitel",
    location: "Dubai, UAE",
    sector: "Hospitality",
    scope: "Electromechanical renovation supporting a flagship hospitality property",
    year: "[CLIENT TO PROVIDE]",
    summary: "Renovation support for a luxury hotel flagship property, upgrading electromechanical systems and incorporating smart technology.",
    body: `
## Project overview

A luxury hotel chain enlisted our services to renovate one of their flagship properties. The goal was to create an opulent yet functional space that would enhance the guest experience. We redesigned the hotel’s interiors, upgraded the electromechanical systems, and incorporated smart technology. The renovation was a resounding success, with the hotel receiving rave reviews from guests and industry experts alike. The client appreciated our dedication to excellence and our ability to deliver a project that exceeded their expectations.

## Understanding hospitality electromechanical work

Hospitality projects place a premium on quiet operation, reliable cooling and power, and life-safety readiness because guest areas cannot easily tolerate disruption. Electromechanical upgrades in hotels often include HVAC plant and distribution, electrical circuits for lighting and specialty loads, and interfaces with fire detection and suppression as specified for the building.

Works are commonly sequenced around operational constraints: noisy tasks planned for quieter periods, finished corridors protected, and plant rooms kept accessible for facilities teams. Smart technology interfaces — where specified — must be coordinated with ELV and IT so that control points, sensors and panels land in maintainable locations.

Commissioning in hospitality settings typically verifies comfort set-points, emergency lighting behaviour and cause-and-effect relationships that protect occupants. Documentation handed to the engineering team supports inspections and routine maintenance after opening.

## How we approach the work

Delivery begins with listening: clarifying the brief, walking the site and aligning electromechanical routes with architecture and interiors. Submittals and material choices are agreed before concealment. Installation protects finished areas, keeps other trades informed and records progress against the agreed sequence.

Testing and commissioning confirm that systems operate as intended before occupation. Handover packs — drawings, certificates and operating notes as applicable — give owners and facilities teams a practical starting point for day-to-day care.

Attention to detail shows up in tidy terminations, labelled boards, sealed duct joints and protected flooring — ordinary marks of professional electromechanical work. Commitment to quality means correcting defects before handover rather than leaving them for occupation.

Where the project involves multiple stakeholders, a single accountable electromechanical team reduces gaps between mechanical, electrical and plumbing packages and keeps interfaces visible.

## After handover

Electromechanical systems continue to need care after occupation: filters, drains, breaker checks and seasonal adjustments. Owners who retain clear O&M information and labelled isolation points can respond faster when something needs attention. Where a maintenance relationship is agreed, scheduled visits and call-out cover keep assets ready for daily use without reinventing the building’s service history.

[CLIENT TO PROVIDE: programme dates, floor areas and dedicated project photography.]

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.
`.trim(),
    gallery: [],
    testimonial: {
      quote:
        "The renovation of our flagship property has been a tremendous success. Electech’s dedication to excellence and innovative approach have elevated our guest experience to new heights.",
      author: "Assistant Chief Engineer",
      role: "Assistant Chief Engineer",
      company: "Sofitel Hotel",
    },
    results: [
      { label: "Sector", value: "Hospitality" },
      { label: "Client", value: "Sofitel Hotel" },
      { label: "Focus", value: "Guest experience" },
    ],
    featured: true,
  },
  {
    title: "Amazon E-commerce Office",
    slug: "amazon-ecommerce-office",
    heroImage: "/images/services/hvac-installation.jpg",
    heroAlt: "Amazon E-commerce Office project photography",
    primaryBucket: "mep",
    secondaryBuckets: [],
    client: "Amazon",
    location: "Dubai, UAE",
    sector: "Commercial / Technology",
    scope: "Large e-commerce office electromechanical delivery",
    year: "[CLIENT TO PROVIDE]",
    summary: "Execution of a large e-commerce office for Amazon in Dubai with open-plan collaborative workspaces, advanced technology and sustainable solutions.",
    body: `
## Project overview

We were commissioned to execute a large e-commerce office for Amazon in Dubai. The project required creating a highly functional and innovative workspace that could accommodate a large workforce and support Amazon’s dynamic operations. Our team designed an open-plan office with collaborative workspaces, advanced technology, and sustainable solutions. The project was completed on time and within budget, and the client was extremely satisfied with the new office environment.

## Understanding office electromechanical work

Open-plan offices depend on even cooling, clear power distribution for dense workstation loads, and cable pathways that leave ceiling voids maintainable. Electromechanical delivery for offices usually covers HVAC distribution, electrical boards and small power, lighting power infrastructure and coordination with ELV systems that support access, data and safety.

Flexible meeting rooms and collaborative zones introduce variable occupancy, so ventilation and thermostat zoning need careful agreement with the interior layout. Containment routes should respect acoustic ceilings and feature lighting. Testing before energisation protects equipment and gives facilities managers a clear as-built record.

Live-office or phased programmes require protection of occupied floors, temporary power strategies where needed, and close liaison with IT so cutovers do not interrupt operations longer than planned.

## How we approach the work

Delivery begins with listening: clarifying the brief, walking the site and aligning electromechanical routes with architecture and interiors. Submittals and material choices are agreed before concealment. Installation protects finished areas, keeps other trades informed and records progress against the agreed sequence.

Testing and commissioning confirm that systems operate as intended before occupation. Handover packs — drawings, certificates and operating notes as applicable — give owners and facilities teams a practical starting point for day-to-day care.

Attention to detail shows up in tidy terminations, labelled boards, sealed duct joints and protected flooring — ordinary marks of professional electromechanical work. Commitment to quality means correcting defects before handover rather than leaving them for occupation.

Where the project involves multiple stakeholders, a single accountable electromechanical team reduces gaps between mechanical, electrical and plumbing packages and keeps interfaces visible.

## After handover

Electromechanical systems continue to need care after occupation: filters, drains, breaker checks and seasonal adjustments. Owners who retain clear O&M information and labelled isolation points can respond faster when something needs attention. Where a maintenance relationship is agreed, scheduled visits and call-out cover keep assets ready for daily use without reinventing the building’s service history.

[CLIENT TO PROVIDE: programme dates, floor areas and dedicated project photography.]

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.
`.trim(),
    gallery: [],
    testimonial: {
      quote:
        "Electech’s efficient project management have created an office space that perfectly supports our operations and enhances our team’s productivity. The new workspace is not only functional but also inspiring.",
      author: "Projects Manager",
      role: "Projects Manager",
      company: "Multiline",
    },
    results: [
      { label: "Sector", value: "E-commerce office" },
      { label: "Delivery", value: "On time and within budget" },
      { label: "Client feedback", value: "Extremely satisfied" },
    ],
    featured: true,
  },
  {
    title: "Corporate Headquarters Upgrade",
    slug: "corporate-headquarters-upgrade-real-image",
    heroImage: "/images/services/hvac-installation.jpg",
    heroAlt: "Corporate Headquarters Upgrade project photography",
    primaryBucket: "mep",
    secondaryBuckets: [],
    client: "Real Image",
    location: "Dubai, UAE",
    sector: "Corporate / Media",
    scope: "Corporate headquarters electromechanical overhaul",
    year: "[CLIENT TO PROVIDE]",
    summary: "Complete overhaul of a major media production company's corporate headquarters to improve functionality and aesthetics.",
    body: `
## Project overview

A major media production company required a complete overhaul of their corporate headquarters to improve functionality and aesthetics. We implemented modern design elements, upgraded the electromechanical systems, and created a more efficient layout. The project was completed seamlessly, and the client reported improved employee satisfaction and operational efficiency.

## Understanding office electromechanical work

Open-plan offices depend on even cooling, clear power distribution for dense workstation loads, and cable pathways that leave ceiling voids maintainable. Electromechanical delivery for offices usually covers HVAC distribution, electrical boards and small power, lighting power infrastructure and coordination with ELV systems that support access, data and safety.

Flexible meeting rooms and collaborative zones introduce variable occupancy, so ventilation and thermostat zoning need careful agreement with the interior layout. Containment routes should respect acoustic ceilings and feature lighting. Testing before energisation protects equipment and gives facilities managers a clear as-built record.

Live-office or phased programmes require protection of occupied floors, temporary power strategies where needed, and close liaison with IT so cutovers do not interrupt operations longer than planned.

## How we approach the work

Delivery begins with listening: clarifying the brief, walking the site and aligning electromechanical routes with architecture and interiors. Submittals and material choices are agreed before concealment. Installation protects finished areas, keeps other trades informed and records progress against the agreed sequence.

Testing and commissioning confirm that systems operate as intended before occupation. Handover packs — drawings, certificates and operating notes as applicable — give owners and facilities teams a practical starting point for day-to-day care.

Attention to detail shows up in tidy terminations, labelled boards, sealed duct joints and protected flooring — ordinary marks of professional electromechanical work. Commitment to quality means correcting defects before handover rather than leaving them for occupation.

Where the project involves multiple stakeholders, a single accountable electromechanical team reduces gaps between mechanical, electrical and plumbing packages and keeps interfaces visible.

## After handover

Electromechanical systems continue to need care after occupation: filters, drains, breaker checks and seasonal adjustments. Owners who retain clear O&M information and labelled isolation points can respond faster when something needs attention. Where a maintenance relationship is agreed, scheduled visits and call-out cover keep assets ready for daily use without reinventing the building’s service history.

[CLIENT TO PROVIDE: programme dates, floor areas and dedicated project photography.]

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.
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
      { label: "Outcome", value: "Improved employee satisfaction reported" },
    ],
  },
  {
    title: "Healthcare Facility Upgrade",
    slug: "healthcare-facility-upgrade-smart-salem",
    heroImage: "/images/services/hvac-installation.jpg",
    heroAlt: "Healthcare Facility Upgrade project photography",
    primaryBucket: "mechanical-plumbing",
    secondaryBuckets: ["fire-protection"],
    client: "Smart Salem Medical Fitness Centre",
    location: "City Walk, Dubai",
    sector: "Healthcare",
    scope: "Healthcare facility electromechanical modernisation",
    year: "[CLIENT TO PROVIDE]",
    summary: "Modernising healthcare infrastructure at City Walk with advanced electromechanical systems, improved energy efficiency and enhanced patient comfort.",
    body: `
## Project overview

A renowned healthcare provider needed to upgrade their facilities to meet the growing demand for their services. We undertook the challenge of modernizing their existing infrastructure while ensuring minimal disruption to their operations. Our team implemented advanced electromechanical systems, improved energy efficiency, and enhanced patient comfort. The project was completed ahead of schedule, and the client expressed their gratitude for our professionalism and expertise. The upgraded facility now serves as a benchmark for other healthcare providers in the region.

## Understanding healthcare electromechanical work

Healthcare and medical fitness environments require electromechanical systems that support hygiene, air quality and uninterrupted operations. Upgrades in occupied clinics often proceed with phased isolations, temporary arrangements and strict protection of clinical areas so patient services continue.

Mechanical and plumbing packages may address cooling, ventilation, domestic water and drainage with cleanability and maintainability in mind. Fire protection interfaces — detection, alarms and compartment sealing — are coordinated so life-safety performance matches the approved design for the facility type.

Energy-efficient equipment selections, where specified, are commissioned and demonstrated to facilities teams. Clear labelling and O&M information help clinical operations teams respond quickly when a system needs attention.

## How we approach the work

Delivery begins with listening: clarifying the brief, walking the site and aligning electromechanical routes with architecture and interiors. Submittals and material choices are agreed before concealment. Installation protects finished areas, keeps other trades informed and records progress against the agreed sequence.

Testing and commissioning confirm that systems operate as intended before occupation. Handover packs — drawings, certificates and operating notes as applicable — give owners and facilities teams a practical starting point for day-to-day care.

Attention to detail shows up in tidy terminations, labelled boards, sealed duct joints and protected flooring — ordinary marks of professional electromechanical work. Commitment to quality means correcting defects before handover rather than leaving them for occupation.

Where the project involves multiple stakeholders, a single accountable electromechanical team reduces gaps between mechanical, electrical and plumbing packages and keeps interfaces visible.

## After handover

Electromechanical systems continue to need care after occupation: filters, drains, breaker checks and seasonal adjustments. Owners who retain clear O&M information and labelled isolation points can respond faster when something needs attention. Where a maintenance relationship is agreed, scheduled visits and call-out cover keep assets ready for daily use without reinventing the building’s service history.

[CLIENT TO PROVIDE: programme dates, floor areas and dedicated project photography.]

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.
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
      { label: "Delivery", value: "Completed ahead of schedule" },
    ],
    featured: true,
  },
  {
    title: "Innovative Food Outlet and Park",
    slug: "innovative-food-outlet-and-park-imdaad",
    heroImage: "/images/services/hvac-installation.jpg",
    heroAlt: "Innovative Food Outlet and Park project photography",
    primaryBucket: "mechanical-plumbing",
    secondaryBuckets: ["maintenance"],
    client: "Imdaad",
    location: "Dubai, UAE",
    sector: "F&B / Leisure",
    scope: "Design and execution for a large-scale innovative food outlet",
    year: "[CLIENT TO PROVIDE]",
    summary: "Design and execution of a large-scale innovative food outlet with a leading facility management company in Dubai.",
    body: `
## Project overview

We work with a leading facility management company to design and execute a large-scale innovative food outlet. The project required meticulous planning and coordination to ensure timely delivery and adherence to the highest standards of quality. Our team successfully delivered a modern, sustainable living environment that has become a sought-after address in the region.

## Understanding food outlet electromechanical work

Food outlets combine high kitchen loads with public dining and often outdoor or park interfaces. Electromechanical scope commonly includes HVAC for kitchen extract and dining comfort, plumbing and drainage for food preparation and wash-up, and electrical infrastructure for cooking equipment, refrigeration and lighting.

Grease management, condensate and make-up air must be coordinated so kitchens remain safe and comfortable. Public toilets and amenity blocks need reliable water supply and drainage. Installation sequencing follows kitchen equipment delivery and interior fit-out so first-fix services are not trapped behind late design changes.

Facility management partners benefit when plant is accessible, meters are readable and maintenance routes are clear from day one — reducing the need to open finished ceilings for routine service.

## How we approach the work

Delivery begins with listening: clarifying the brief, walking the site and aligning electromechanical routes with architecture and interiors. Submittals and material choices are agreed before concealment. Installation protects finished areas, keeps other trades informed and records progress against the agreed sequence.

Testing and commissioning confirm that systems operate as intended before occupation. Handover packs — drawings, certificates and operating notes as applicable — give owners and facilities teams a practical starting point for day-to-day care.

Attention to detail shows up in tidy terminations, labelled boards, sealed duct joints and protected flooring — ordinary marks of professional electromechanical work. Commitment to quality means correcting defects before handover rather than leaving them for occupation.

Where the project involves multiple stakeholders, a single accountable electromechanical team reduces gaps between mechanical, electrical and plumbing packages and keeps interfaces visible.

## After handover

Electromechanical systems continue to need care after occupation: filters, drains, breaker checks and seasonal adjustments. Owners who retain clear O&M information and labelled isolation points can respond faster when something needs attention. Where a maintenance relationship is agreed, scheduled visits and call-out cover keep assets ready for daily use without reinventing the building’s service history.

[CLIENT TO PROVIDE: programme dates, floor areas and dedicated project photography.]

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.
`.trim(),
    gallery: [],
    testimonial: {
      quote:
        "Electech’s expertise and commitment to quality were instrumental in the success of our innovative food outlet project. Their attention to detail and ability to meet deadlines were impressive. We look forward to collaborating on future projects.",
      author: "Facilities Manager (Last Exist 11",
      role: "Facilities Manager (Last Exist 11 – Innovative Food Outlet)",
      company: "Imdaad",
    },
    results: [
      { label: "Client", value: "Imdaad" },
      { label: "Type", value: "Food outlet & park" },
      { label: "Focus", value: "Timely delivery and quality" },
    ],
  },
  {
    title: "Two-Bedroom Flat",
    slug: "two-bedroom-flat-dhiraj-kumar",
    heroImage: "/images/services/hvac-installation.jpg",
    heroAlt: "Two-Bedroom Flat project photography",
    primaryBucket: "mechanical-plumbing",
    secondaryBuckets: [],
    client: "Mr. Dhiraj Kumar",
    location: "Dubai, UAE",
    sector: "Residential",
    scope: "Apartment transformation for a newly purchased two-bedroom flat",
    year: "[CLIENT TO PROVIDE]",
    summary: "Transforming a newly purchased two-bedroom flat into a modern, comfortable home with an emphasis on maximising storage and natural light.",
    body: `
## Project overview

Expat family approached us to transform their newly purchased two-bedroom flat into a modern, comfortable home. They wanted a space that was both functional and stylish, with an emphasis on maximizing storage and natural light. Our team designed and executed a plan that included custom-built furniture, energy-efficient lighting, and smart home technology. The couple was delighted with the result, which perfectly matched their lifestyle and aesthetic preferences.

## Understanding apartment electromechanical work

Apartment fit-outs focus on comfort within compact footprints: quiet indoor units, tidy electrical boards, and plumbing that maximises usable storage and keeps wet areas reliable. Energy-efficient lighting support and smart home devices — where specified — need early cable pathways and device locations agreed with the interior layout.

Work in a newly purchased flat often means protecting finishes, working within developer constraints and sequencing around furniture and joinery. Testing of circuits, water lines and cooling before final decoration reduces callback risk.

Owners typically want systems that are simple to operate and serviceable without major demolition — access panels, labelled isolators and clear handover notes support that goal.

## How we approach the work

Delivery begins with listening: clarifying the brief, walking the site and aligning electromechanical routes with architecture and interiors. Submittals and material choices are agreed before concealment. Installation protects finished areas, keeps other trades informed and records progress against the agreed sequence.

Testing and commissioning confirm that systems operate as intended before occupation. Handover packs — drawings, certificates and operating notes as applicable — give owners and facilities teams a practical starting point for day-to-day care.

Attention to detail shows up in tidy terminations, labelled boards, sealed duct joints and protected flooring — ordinary marks of professional electromechanical work. Commitment to quality means correcting defects before handover rather than leaving them for occupation.

Where the project involves multiple stakeholders, a single accountable electromechanical team reduces gaps between mechanical, electrical and plumbing packages and keeps interfaces visible.

## After handover

Electromechanical systems continue to need care after occupation: filters, drains, breaker checks and seasonal adjustments. Owners who retain clear O&M information and labelled isolation points can respond faster when something needs attention. Where a maintenance relationship is agreed, scheduled visits and call-out cover keep assets ready for daily use without reinventing the building’s service history.

[CLIENT TO PROVIDE: programme dates, floor areas and dedicated project photography.]

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.
`.trim(),
    gallery: [],
    testimonial: {
      quote:
        "Electech turned our flat into a dream home. Their innovative design solutions and attention to detail have made our space both beautiful and functional. We couldn’t be happier with the outcome.",
      author: "Flat Owner",
      role: "Flat Owner",
      company: "Mr. Dhiraj Kumar",
    },
    results: [
      { label: "Type", value: "Two-bedroom flat" },
      { label: "Focus", value: "Functional and stylish living" },
      { label: "Client", value: "Mr. Dhiraj Kumar" },
    ],
  },
  {
    title: "Retail Space Innovation",
    slug: "retail-space-innovation-atelier-difc",
    heroImage: "/images/services/hvac-installation.jpg",
    heroAlt: "Retail Space Innovation project photography",
    primaryBucket: "electrical",
    secondaryBuckets: [],
    client: "Atelier",
    location: "Gate Avenue, DIFC, Dubai",
    sector: "Retail",
    scope: "Dynamic retail environment for a high-end fashion brand",
    year: "[CLIENT TO PROVIDE]",
    summary: "Creating a sleek, contemporary retail environment at Gate Avenue DIFC with innovative lighting, interactive displays and sustainable materials.",
    body: `
## Project overview

We were tasked with creating a dynamic retail environment for a high-end fashion brand. The client wanted a space that would reflect their brand’s identity and attract discerning customers. Our team designed a sleek, contemporary store with innovative lighting, interactive displays, and sustainable materials. The store’s grand opening was a huge success, and the client saw a marked increase in foot traffic and sales. They commended our ability to bring their vision to life with such precision and creativity.

## Understanding retail electrical work

Retail environments rely on lighting to express brand identity, on clean power for interactive displays and on containment that keeps back-of-house rooms organised. Electrical packages for stores typically include distribution boards, lighting circuits, small power for POS and displays, and coordination with ELV for security and audio-visual systems as specified.

Installation must align with feature ceilings, wall linings and floor boxes so the visual result matches the brand intent. Temporary lighting during fit-out keeps trades productive while permanent circuits are completed. Testing and labelling before opening day give store teams confidence when troubleshooting.

Sustainable material choices in the wider fit-out — where specified by the design team — are supported by efficient lighting control strategies and maintainable fixture access.

## How we approach the work

Delivery begins with listening: clarifying the brief, walking the site and aligning electromechanical routes with architecture and interiors. Submittals and material choices are agreed before concealment. Installation protects finished areas, keeps other trades informed and records progress against the agreed sequence.

Testing and commissioning confirm that systems operate as intended before occupation. Handover packs — drawings, certificates and operating notes as applicable — give owners and facilities teams a practical starting point for day-to-day care.

Attention to detail shows up in tidy terminations, labelled boards, sealed duct joints and protected flooring — ordinary marks of professional electromechanical work. Commitment to quality means correcting defects before handover rather than leaving them for occupation.

Where the project involves multiple stakeholders, a single accountable electromechanical team reduces gaps between mechanical, electrical and plumbing packages and keeps interfaces visible.

## After handover

Electromechanical systems continue to need care after occupation: filters, drains, breaker checks and seasonal adjustments. Owners who retain clear O&M information and labelled isolation points can respond faster when something needs attention. Where a maintenance relationship is agreed, scheduled visits and call-out cover keep assets ready for daily use without reinventing the building’s service history.

[CLIENT TO PROVIDE: programme dates, floor areas and dedicated project photography.]

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.
`.trim(),
    gallery: [],
    testimonial: {
      quote:
        "Electech brought our vision to life with such creativity and precision. The new store design has significantly increased our foot traffic and sales. We couldn’t be happier with the results.",
      author: "Creative Director",
      role: "Creative Director",
      company: "Atelier – Gate Avenue DIFC",
    },
    results: [
      { label: "Location", value: "Gate Avenue DIFC" },
      { label: "Focus", value: "Retail environment" },
      { label: "Opening", value: "Grand opening success" },
    ],
    featured: true,
  },
  {
    title: "Etisalat Office, 2nd Floor, Kifaf",
    slug: "etisalat-office-kifaf",
    heroImage: "/images/services/hvac-installation.jpg",
    heroAlt: "Etisalat Office, 2nd Floor, Kifaf project photography",
    primaryBucket: "electrical",
    secondaryBuckets: [],
    client: "Etisalat",
    location: "Kifaf, Dubai",
    sector: "Telecommunications / Corporate",
    scope: "Office revamp on the 2nd floor in Kifaf",
    year: "[CLIENT TO PROVIDE]",
    summary: "Revamping Etisalat’s 2nd floor office in Kifaf into a modern, efficient workspace with ergonomic workstations and collaborative zones.",
    body: `
## Project overview

We were engaged by Etisalat to revamp their office space on the 2nd floor in Kifaf. The goal was to create a modern, efficient workspace that would enhance employee productivity and reflect Etisalat’s innovative brand. Our team designed a sleek, open-plan office with state-of-the-art technology, ergonomic workstations, and collaborative zones. The project was completed ahead of schedule, and the client was extremely pleased with the results.

## Understanding office electrical installation

Corporate office electrical work centres on safe distribution, neat containment and capacity for technology-dense floors. Boards, cable trays, floor boxes and final circuits must be coordinated with furniture layouts and collaborative zones so power is available where people work.

Ergonomic workstation planning informs socket density and data pathways. State-of-the-art technology loads require careful diversity assumptions and clear spare ways for future adds. Testing, earthing verification and as-built drawings are part of a professional handover.

On multi-tenant or phased floors, isolations and live working controls protect adjacent occupants while new circuits are brought online.

## How we approach the work

Delivery begins with listening: clarifying the brief, walking the site and aligning electromechanical routes with architecture and interiors. Submittals and material choices are agreed before concealment. Installation protects finished areas, keeps other trades informed and records progress against the agreed sequence.

Testing and commissioning confirm that systems operate as intended before occupation. Handover packs — drawings, certificates and operating notes as applicable — give owners and facilities teams a practical starting point for day-to-day care.

Attention to detail shows up in tidy terminations, labelled boards, sealed duct joints and protected flooring — ordinary marks of professional electromechanical work. Commitment to quality means correcting defects before handover rather than leaving them for occupation.

Where the project involves multiple stakeholders, a single accountable electromechanical team reduces gaps between mechanical, electrical and plumbing packages and keeps interfaces visible.

## After handover

Electromechanical systems continue to need care after occupation: filters, drains, breaker checks and seasonal adjustments. Owners who retain clear O&M information and labelled isolation points can respond faster when something needs attention. Where a maintenance relationship is agreed, scheduled visits and call-out cover keep assets ready for daily use without reinventing the building’s service history.

[CLIENT TO PROVIDE: programme dates, floor areas and dedicated project photography.]

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.
`.trim(),
    gallery: [],
    testimonial: {
      quote:
        "Electech’s expertise and attention to detail have transformed our office space into a modern, efficient workspace. The new design has significantly improved our team’s productivity and collaboration. We highly recommend their services.",
      author: "Facilities Manager",
      role: "Facilities Manager",
      company: "Etisalat",
    },
    results: [
      { label: "Client", value: "Etisalat" },
      { label: "Floor", value: "2nd Floor, Kifaf" },
      { label: "Delivery", value: "Completed ahead of schedule" },
    ],
  },
  {
    title: "Logistics Office Development",
    slug: "logistics-office-development-gtz",
    heroImage: "/images/services/hvac-installation.jpg",
    heroAlt: "Logistics Office Development project photography",
    primaryBucket: "electrical",
    secondaryBuckets: [],
    client: "GTZ Shipping LLC",
    location: "Dubai, UAE",
    sector: "Logistics",
    scope: "State-of-the-art logistics hub electromechanical systems",
    year: "[CLIENT TO PROVIDE]",
    summary: "Designing and implementing advanced electromechanical systems for a logistics hub focused on efficient operations and energy savings.",
    body: `
## Project overview

We collaborated with a leading logistics company to develop a state-of-the-art logistics hub. The project involved designing and implementing advanced electromechanical systems to ensure efficient operations and energy savings. Our team delivered a highly functional and sustainable facility that has significantly improved the company’s logistics capabilities.

## Understanding logistics facility electromechanical work

Logistics hubs combine office areas with operational spaces that may need robust power, lighting and environmental control for staff comfort and equipment reliability. Electromechanical design focuses on efficient operations and energy-conscious plant selections as specified for the facility.

Cable routes, switchgear locations and mechanical plant rooms should leave clear circulation for forklifts, racking and maintenance vehicles where relevant. Energy monitoring points — where included — help operators track performance after occupation.

Commissioning verifies that systems serving offices and operational zones behave as designed under expected load patterns, with documentation suited to facilities and operations teams.

## How we approach the work

Delivery begins with listening: clarifying the brief, walking the site and aligning electromechanical routes with architecture and interiors. Submittals and material choices are agreed before concealment. Installation protects finished areas, keeps other trades informed and records progress against the agreed sequence.

Testing and commissioning confirm that systems operate as intended before occupation. Handover packs — drawings, certificates and operating notes as applicable — give owners and facilities teams a practical starting point for day-to-day care.

Attention to detail shows up in tidy terminations, labelled boards, sealed duct joints and protected flooring — ordinary marks of professional electromechanical work. Commitment to quality means correcting defects before handover rather than leaving them for occupation.

Where the project involves multiple stakeholders, a single accountable electromechanical team reduces gaps between mechanical, electrical and plumbing packages and keeps interfaces visible.

## After handover

Electromechanical systems continue to need care after occupation: filters, drains, breaker checks and seasonal adjustments. Owners who retain clear O&M information and labelled isolation points can respond faster when something needs attention. Where a maintenance relationship is agreed, scheduled visits and call-out cover keep assets ready for daily use without reinventing the building’s service history.

[CLIENT TO PROVIDE: programme dates, floor areas and dedicated project photography.]

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.
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
      { label: "Focus", value: "Efficient operations and energy savings" },
    ],
  },
  {
    title: "Government Office Modernization",
    slug: "government-office-modernization-anex",
    heroImage: "/images/services/hvac-installation.jpg",
    heroAlt: "Government Office Modernization project photography",
    primaryBucket: "fire-protection",
    secondaryBuckets: ["maintenance"],
    client: "Anex Building",
    location: "Hamariya Free Zone, Sharjah",
    sector: "Government / Free Zone",
    scope: "Government office modernisation with advanced electromechanical systems",
    year: "[CLIENT TO PROVIDE]",
    summary: "Modernising a government office building in Hamariya Free Zone to improve efficiency and create a more welcoming environment.",
    body: `
## Project overview

We were commissioned to modernize a government office building to improve efficiency and create a more welcoming environment for both employees and visitors. Our team implemented advanced electromechanical systems, energy-efficient solutions, and modernized the interior design. The project was completed ahead of schedule, and the government office now serves as a model for other public sector projects.

## Understanding government office electromechanical modernisation

Public-sector office modernisation balances efficiency improvements with a welcoming environment for employees and visitors. Electromechanical upgrades may include HVAC, electrical distribution, energy-efficient solutions and life-safety systems that meet approved designs and authority expectations.

Work in occupied government buildings is typically phased to keep services available. Clear communication with floor managers helps schedule noisy or invasive tasks. Fire detection, alarms and compartment integrity are verified so the building remains inspection-ready.

Energy-efficient solutions are commissioned and explained to the teams who will operate them daily. Maintainable layouts reduce future disruption when components need service.

## How we approach the work

Delivery begins with listening: clarifying the brief, walking the site and aligning electromechanical routes with architecture and interiors. Submittals and material choices are agreed before concealment. Installation protects finished areas, keeps other trades informed and records progress against the agreed sequence.

Testing and commissioning confirm that systems operate as intended before occupation. Handover packs — drawings, certificates and operating notes as applicable — give owners and facilities teams a practical starting point for day-to-day care.

Attention to detail shows up in tidy terminations, labelled boards, sealed duct joints and protected flooring — ordinary marks of professional electromechanical work. Commitment to quality means correcting defects before handover rather than leaving them for occupation.

Where the project involves multiple stakeholders, a single accountable electromechanical team reduces gaps between mechanical, electrical and plumbing packages and keeps interfaces visible.

## After handover

Electromechanical systems continue to need care after occupation: filters, drains, breaker checks and seasonal adjustments. Owners who retain clear O&M information and labelled isolation points can respond faster when something needs attention. Where a maintenance relationship is agreed, scheduled visits and call-out cover keep assets ready for daily use without reinventing the building’s service history.

[CLIENT TO PROVIDE: programme dates, floor areas and dedicated project photography.]

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.
`.trim(),
    gallery: [],
    testimonial: {
      quote:
        "Electech’s professionalism and expertise were evident throughout the project. The modernization of our office has greatly improved our operational efficiency and the overall environment. We highly recommend their services.",
      author: "Floor Manager",
      role: "Floor Manager",
      company: "Anex Building 1st Floor – Hamariya Free Zone, Sharjah",
    },
    results: [
      { label: "Location", value: "Hamariya Free Zone, Sharjah" },
      { label: "Delivery", value: "Completed ahead of schedule" },
      { label: "Focus", value: "Operational efficiency" },
    ],
    featured: true,
  },
  {
    title: "Commercial Office Revamp",
    slug: "commercial-office-revamp-ascentia",
    heroImage: "/images/services/hvac-installation.jpg",
    heroAlt: "Commercial Office Revamp project photography",
    primaryBucket: "maintenance",
    secondaryBuckets: ["fire-protection"],
    client: "Ascentia",
    location: "Dubai, UAE",
    sector: "Commercial",
    scope: "Headquarters revamp with ongoing maintenance relationship",
    year: "[CLIENT TO PROVIDE]",
    summary: "Revamping a multinational corporation’s Dubai headquarters into an open-plan workplace that fosters creativity and collaboration.",
    body: `
## Project overview

A leading multinational corporation approached us to revamp their Dubai headquarters. They needed a space that would foster creativity and collaboration among their employees. We designed an open-plan office with flexible workspaces, modern meeting rooms, and recreational areas. The project was completed on time and within budget, and the client reported a significant boost in employee morale and productivity. They continue to rely on us for ongoing maintenance and future expansion.

## Understanding office revamp and ongoing maintenance

A headquarters revamp that continues into maintenance benefits from installers who understand the as-built condition of plant, boards and life-safety interfaces. During the capital works phase, open-plan layouts, meeting rooms and recreational areas are supported with coordinated electromechanical systems and accessible service routes.

After handover, planned maintenance covers inspections, filter changes, electrical checks and call-out response as agreed in the contract scope. Knowing the original install shortens diagnosis time when a fault appears.

Transparent visit records and recommendations help owners plan future expansion without rediscovering the building’s systems from scratch.

## How we approach the work

Delivery begins with listening: clarifying the brief, walking the site and aligning electromechanical routes with architecture and interiors. Submittals and material choices are agreed before concealment. Installation protects finished areas, keeps other trades informed and records progress against the agreed sequence.

Testing and commissioning confirm that systems operate as intended before occupation. Handover packs — drawings, certificates and operating notes as applicable — give owners and facilities teams a practical starting point for day-to-day care.

Attention to detail shows up in tidy terminations, labelled boards, sealed duct joints and protected flooring — ordinary marks of professional electromechanical work. Commitment to quality means correcting defects before handover rather than leaving them for occupation.

Where the project involves multiple stakeholders, a single accountable electromechanical team reduces gaps between mechanical, electrical and plumbing packages and keeps interfaces visible.

## After handover

Electromechanical systems continue to need care after occupation: filters, drains, breaker checks and seasonal adjustments. Owners who retain clear O&M information and labelled isolation points can respond faster when something needs attention. Where a maintenance relationship is agreed, scheduled visits and call-out cover keep assets ready for daily use without reinventing the building’s service history.

[CLIENT TO PROVIDE: programme dates, floor areas and dedicated project photography.]

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.

Coordination across disciplines remains essential from first fix through final inspection, so that services installed today remain accessible and documented for the life of the building.
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
      { label: "Delivery", value: "On time and within budget" },
      { label: "Follow-on", value: "Ongoing maintenance and future expansion" },
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

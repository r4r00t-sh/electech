import type { Story } from "./types";

/**
 * Client Success Stories — lead paragraph and testimonials are verbatim from the client website docx.
 * Remaining sections are neutral descriptions of the work type; client-specific gaps are marked [CLIENT TO PROVIDE].
 * No paragraph may repeat within a story (enforced by scripts/check-duplicate-paragraphs.mjs).
 * Display images are resolved in src/lib/media.ts (not heroImage paths below).
 */
export const stories: Story[] = [
  {
    title: "Luxurious Villa Transformation",
    slug: "luxurious-villa-transformation",
    heroImage: "/images/pages/plumbing-finished-bathroom.jpg",
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

## What a villa electromechanical package involves

A villa electromechanical package brings together air-conditioning and ventilation, electrical distribution and lighting power, and plumbing and drainage. In a private home these services share the same walls, ceilings and risers, so their routes are normally agreed with the architect and interior designer before finishes are chosen.

Cooling for a villa is usually a choice between split units, ducted systems or a combination of both, with outdoor units, condensate drains and refrigerant routes planned around the building envelope. Electrical work covers the main distribution board, final circuits, containment and earthing, plus provision for lighting control and any home automation the owner has requested.

Plumbing and drainage covers hot and cold water supply, sanitary pipework, floor drains and roof or balcony drainage. Pressure testing before concealment is standard practice, because a leak behind finished tiles or joinery is expensive to trace and repair.

## Coordination on a private residence

Villa projects often involve several decision-makers: family members, a design consultant, an interior designer and a main contractor. A shared coordination drawing for ceiling voids and risers helps everyone see where ducts, cable trays and soil stacks sit, and where access panels must remain.

Work normally proceeds in stages. First fix covers containment and pipework while walls are open, second fix covers devices and fixtures after finishes, and testing follows before the home is occupied. Where a brief blends modern amenities with traditional detailing, concealed routes and carefully placed grilles help services stay out of sight without losing access for maintenance.

## Testing, commissioning and handover

Before handover, electrical circuits are tested for insulation resistance and earth continuity, water systems are pressure tested and flushed, and air-conditioning is run and balanced so that each room can reach its design temperature.

An owner-focused handover typically includes as-built drawings, equipment data, warranty information and a walk-through showing where isolators, stop valves and filters are located.

## Care after handover

Villas in the UAE run cooling for much of the year, so filters, drains and outdoor units benefit from regular attention. Labelled boards and valves let a household or its facilities contractor respond quickly when something needs checking.

## From vacant plot to finished home

Building on a vacant plot means the electromechanical package starts with the ground itself: incoming utilities, external drainage, sleeves through foundations and routes for electrical and water services are set out long before any room is finished. Decisions made at this stage are difficult to change later, so they are normally confirmed with the design team and, where required, the relevant authorities.

As the structure rises, services follow it. Risers, plant positions, roof equipment areas and meter rooms are held free of other trades, and sleeves are checked against the structural drawings before concrete is poured.

## Project details to be confirmed

[CLIENT TO PROVIDE: villa plot and built-up area, programme dates, equipment makes and capacities, specific technology installed, and dedicated project photography.]
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
    heroImage: "/images/projects/works/restaurant-dining-interior-01.jpg",
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

## What hospitality electromechanical upgrades involve

Hotels place a premium on quiet operation, reliable cooling and power, and life-safety readiness, because guest areas cannot easily tolerate disruption. Electromechanical upgrades in a hotel commonly cover air-conditioning plant and distribution, electrical circuits for lighting and specialist loads, and interfaces with fire detection and suppression as defined by the approved design.

Smart technology, where specified, depends on low-current infrastructure: control cabling, sensors, panels and network links. Their locations need to be agreed with the interior design team so that devices land in places that look right and can still be reached by engineering staff.

## Working around live operations

Renovating a flagship property usually means working within operational constraints. Noisy or dusty tasks are planned for quieter periods, finished corridors and lifts are protected, and plant rooms are kept accessible to the engineering team throughout.

Phasing by floor, wing or outlet allows part of the property to keep trading while another is upgraded. Clear communication with the hotel engineering department helps schedule isolations of power, water and cooling so that guests are affected as little as possible.

## Commissioning for a guest environment

Hospitality commissioning typically verifies comfort set-points, noise levels from ventilation, emergency lighting behaviour and the cause-and-effect relationships that protect occupants. Rooms and public areas are tested against the approved design before they are returned to service.

Documentation handed to the engineering team, such as drawings, test certificates and operating notes, supports statutory inspections and routine maintenance once the property reopens its refurbished areas.

## Keeping a hotel running after the upgrade

Hotels operate every hour of the day, so planned preventive maintenance and a clear call-out route are part of keeping upgraded systems reliable. Labelled valves, isolators and panels shorten the time needed to find and resolve a fault.

## Redesigned interiors and the services behind them

When interiors are redesigned, the services above and behind them are rarely left unchanged. New ceiling designs, lighting concepts and furniture layouts change where diffusers, luminaires, sockets and sensors should be. An electromechanical upgrade is therefore planned alongside the interior design instead of after it.

In a luxury setting, visible devices such as grilles, sprinkler heads, detectors and switch plates are usually selected or finished to suit the design. Early agreement on those items avoids a rushed substitution late in the programme.

Back-of-house areas matter just as much as guest areas. Plant rooms, risers, kitchens and service corridors keep the property operating, so any upgrade must preserve the engineering team's access and the safe separation between guest and service routes.

## Documentation for engineering teams

A hotel engineering department relies on clear records. Marked-up drawings, equipment schedules, valve and isolator charts and test certificates allow the team to carry out routine maintenance, respond to faults and support inspections. Collecting this documentation as work progresses is easier than reconstructing it at the end.

Where upgrades are carried out in stages, each completed area is documented before the next begins, so the property always has an accurate picture of what is installed.

## Project details to be confirmed

[CLIENT TO PROVIDE: property name approval for publication, number of floors or keys covered, programme dates, specific smart technology installed, and dedicated project photography.]
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
    heroImage: "/images/projects/works/office-commercial-fitout-01.jpg",
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

## What a large office fit-out involves

Open-plan offices depend on even cooling, clear power distribution for dense workstation loads, and cable pathways that keep ceiling voids maintainable. Electromechanical delivery for an office typically covers air-conditioning distribution, electrical boards and small power, lighting power infrastructure and coordination with the low-current systems that support access control, data and safety.

Collaborative zones and flexible meeting rooms create variable occupancy, so ventilation and thermostat zoning need to be agreed with the interior layout early. Containment routes should respect acoustic ceilings and feature lighting rather than fight them.

## Supporting a large workforce

A workspace designed for a large workforce raises the stakes on diversity assumptions for power, the capacity of risers and the resilience of cooling. Spare ways in distribution boards and spare capacity in containment make later changes simpler, which matters for teams whose headcount and layout can change.

Floor boxes, power poles and workstation feeds are normally set out against the furniture plan. Agreeing that plan before first fix avoids cutting into finished floors or ceilings later.

## Programme and testing

Large office programmes depend on tidy sequencing between first-fix services, ceilings, flooring and furniture. Testing before energisation protects equipment, and a clear as-built record gives facilities managers a reliable starting point for operation.

Where technology is installed alongside the electromechanical packages, shared pathways and agreed cut-over dates keep IT teams and installers from working against each other.

## Operating the space

Offices change over time. Well-labelled boards, accessible plant and documented zoning let a facilities team reconfigure the space without rediscovering how the building was built.

## Sustainable solutions in an office environment

Sustainability in an office is often delivered through ordinary engineering choices: efficient lighting with occupancy or daylight control, air-conditioning zoned to follow occupancy, properly insulated pipework and equipment that can be maintained to stay efficient. These measures are specified by the design team and installed and commissioned to the approved design.

Metering and monitoring points, where specified, let building operators see how energy is used across floors and tenancies, and are a practical starting point for later improvements.

## Technology and infrastructure together

Advanced technology in a workplace depends on infrastructure that is easy to overlook: containment for data cabling, space in risers, resilient power for network equipment and cooling for communications rooms. When these are planned together with electrical and mechanical works, the technology can be installed without competing for the same ceiling space.

A clear interface list between the electromechanical team, the IT team and the interior contractor assigns responsibility for each device and cable route, reducing gaps and overlaps.

## Delivering to a fixed programme

Corporate fit-outs often have fixed occupation dates, so programme discipline matters. Long-lead items such as switchgear, air-handling equipment and specialist luminaires are ordered early, and inspection hold points are agreed with the consultant in advance.

A weekly progress record helps the client and design team see how the work is advancing and decide quickly when a question needs an answer.

## Project details to be confirmed

[CLIENT TO PROVIDE: floor area, headcount supported, programme dates, building and floor name approved for publication, and dedicated project photography.]
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
    heroImage: "/images/pages/hvac-equipment-detail.jpg",
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

## What a headquarters overhaul involves

A headquarters upgrade is more than a cosmetic refresh. Layout changes move partitions, ceilings and furniture, which in turn move air-conditioning diffusers, lighting circuits, small-power outlets and data points. The electromechanical package has to follow the new plan rather than the old one.

Existing installations are surveyed before work begins so that serviceable equipment can be retained and ageing plant can be replaced where the design calls for it. Upgrading distribution boards, containment and ventilation in one coordinated package usually creates less disruption than several uncoordinated visits.

## Considerations for a media production company

Offices serving media and creative teams often combine open workspace with meeting rooms, editing or review rooms and equipment areas. These rooms can have higher cooling loads, tighter noise limits and denser data requirements than an ordinary office floor.

Where such rooms are part of the brief, ventilation noise, power quality and cable routes are considered alongside the design of the room so that equipment performs and occupants stay comfortable.

## Testing and handover

Before staff move back in, circuits are tested, air-conditioning is balanced and any life-safety changes are verified with the relevant parties. A seamless completion depends on snagging early, while trades are still on site and finishes can be touched up.

Handover typically includes as-built drawings, board schedules and operating information, so the operations team can maintain the upgraded systems.

## Efficiency after completion

A more efficient layout is supported by services that are zoned sensibly, easy to adjust and easy to reach. Clear documentation helps a facilities team keep running costs predictable.

## Planning an efficient layout

A more efficient layout starts with how people actually work: which teams sit together, how often they meet, which rooms are used most and where equipment needs to be. Electromechanical services then follow that plan, with power, data and cooling provided in the right quantities in the right places.

Poorly planned services can undermine a good layout. Diffusers placed over desks, lighting that does not match the furniture plan, or sockets too far from work areas all reduce comfort and productivity. A coordinated design avoids these problems before installation starts.

## Modern design elements and building services

Modern design features such as exposed ceilings, glazed partitions, feature lighting and acoustic treatments each bring constraints for services. Exposed ductwork needs neat installation because it is part of the interior, glazed partitions limit where cables can run, and acoustic treatments need cut-outs that are formed carefully.

Coordinating these features in a single drawing set lets the designers, contractors and the building owner agree on a result that looks right and can still be maintained.

## Staff comfort and everyday operation

People notice building services only when they fail: a room that is too warm, lighting that flickers or a socket that is out of reach. Careful design and installation prevent these everyday irritations, and clear controls let staff or the facilities team adjust conditions without calling a contractor.

Simple operating guidance for thermostats, lighting scenes and meeting room equipment helps employees get the best out of an upgraded workplace.

## Project details to be confirmed

[CLIENT TO PROVIDE: building and floor area, scope of the electromechanical upgrade, programme dates, and dedicated project photography.]
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
    heroImage: "/images/pages/projects-office-interior.jpg",
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

## What healthcare electromechanical upgrades involve

Healthcare and medical fitness environments need electromechanical systems that support hygiene, air quality and uninterrupted operation. Upgrades in an occupied facility are normally phased, with temporary arrangements and strict protection of treatment and patient areas so services can continue.

Mechanical and plumbing packages may address cooling, ventilation, domestic water and drainage, with cleanability and maintainability in mind. Equipment selections favour accessible filters, drains and isolation valves so that routine service does not disturb patients or staff.

## Minimising disruption in an operating facility

Working in a live facility means agreeing work areas, noise limits and dust control with the operator before work starts. Short, planned isolations of power, water or cooling are scheduled around appointment times, and every isolation is communicated to the people who rely on that service.

Infection control expectations apply to contractors as well as clinicians. Protective barriers, sealed work areas and careful clean-up help protect patients while construction is under way.

## Energy efficiency and patient comfort

Energy-efficient equipment and sensible zoning can reduce running costs while improving comfort. Temperature, humidity and fresh-air provision are checked against the approved design, and results are demonstrated to the facilities team at handover.

Lighting power, ventilation and cooling are coordinated so that treatment rooms, waiting areas and back-of-house spaces each receive the conditions suited to their use.

## Testing and handover

Commissioning confirms that mechanical, plumbing and electrical systems behave as designed, and that any related life-safety interfaces match the approved drawings for the facility type. Clear labelling and operating information help the clinical operations team respond quickly when a system needs attention.

## Water, drainage and hygiene

In healthcare buildings, domestic water and drainage systems are part of hygiene. Hot-water temperatures, stagnation, backflow prevention and the ease of cleaning fixtures and drains are all considered when pipework is designed and installed. Pipework is flushed and tested before use, and valves and isolation points are labelled for the maintenance team.

Wash-hand basins, sinks and showers are usually positioned to suit the clinical workflow. Their supply and drainage connections are set out against room layouts and finishes that are easy to clean.

## Ventilation and air quality

Ventilation influences comfort, odour control and the removal of airborne contaminants. Fresh-air rates, filtration levels and air pressure relationships between rooms are set by the design team to suit the facility type. Installation and testing then confirm that the delivered airflows match the approved design.

Accessible filters, clearly marked dampers and easy-to-reach coils make routine maintenance simpler and reduce the need to enter treatment rooms for service.

## Documentation for clinical operators

Healthcare operators need clear records of what is installed and how it should be maintained. Operating and maintenance information, test results and equipment schedules are compiled so facilities staff can plan servicing around clinical activity.

## Project details to be confirmed

[CLIENT TO PROVIDE: floor area and number of treatment rooms, scope of mechanical and plumbing works, programme dates, and dedicated project photography of the completed facility.]
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
    heroImage: "/images/projects/works/restaurant-bar-lounge-01.jpg",
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

## What a food outlet electromechanical package involves

Food outlets combine high kitchen loads with public dining and, in a park setting, outdoor or semi-outdoor areas. Electromechanical scope commonly includes air-conditioning and kitchen extract, plumbing and drainage for preparation and wash-up, and electrical infrastructure for cooking equipment, refrigeration and lighting.

Grease management, condensate and make-up air have to be coordinated so that kitchens remain safe and comfortable for staff. Public toilets and amenity blocks need reliable water supply and drainage that copes with peak use.

## Planning and coordination

A large-scale outlet needs meticulous planning because several packages depend on one another: kitchen equipment, interior fit-out, landscaping and utilities. Installation sequencing follows equipment delivery so that first-fix services are not trapped behind late design changes.

Coordination with a facility management partner helps ensure that plant is accessible, meters are readable and maintenance routes are clear from the first day of operation.

## Quality and timely delivery

Meeting deadlines in hospitality-led projects usually depends on early procurement of long-lead equipment and clear approval routes. Keeping a live snag list and a weekly progress record shows what has been installed, what is awaiting inspection and what remains.

Testing covers electrical circuits, water supply, drainage and ventilation before the venue opens. Any issues found at that stage are far easier to correct than after trading begins.

## Operating a busy outlet

Food and beverage venues work long hours, so reliable cooling, hot water and power are essential. Planned preventive maintenance of extract systems, grease traps and refrigeration helps keep the venue running through peak periods.

## Kitchens, extraction and ventilation

Commercial kitchens generate heat, steam and grease, so extraction and make-up air are central to safety and comfort. Hood sizes, duct routes, fan locations and fire-rated ductwork where required are set out to suit the equipment layout. Make-up air should be provided in a way that keeps the dining area comfortable and avoids drafts.

Kitchen extract ductwork requires access for cleaning, and grease-laden routes are designed to allow it. Clear access panels and labelled fan isolators are small details that make a large difference to long-term maintenance.

## Water supply and drainage for food service

Food preparation areas need hot and cold water at the right pressure, floor drains positioned around equipment, and grease interceptors sized for the load. Sinks, hand-wash stations and dishwashers each need a defined supply and drain, which are normally coordinated with the kitchen equipment supplier's drawings.

For a park or outdoor setting, drainage must also account for surface water, irrigation and landscape features, which are usually shared between several trades.

## Safety and compliance in food service

Food service premises are subject to hygiene, fire and building safety requirements. Materials in food areas are chosen so that surfaces can be cleaned, penetrations are sealed, and fire-related services are installed and tested to the approved design.

Inspections by the relevant authorities are part of opening a venue, so documentation and test records are prepared with that in mind.

## Project details to be confirmed

[CLIENT TO PROVIDE: site name and approved description, floor area, number of outlets, programme dates, and dedicated project photography.]
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
    heroImage: "/images/pages/about-glass-tower.jpg",
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

## What an apartment fit-out involves

Apartment fit-outs focus on comfort within a compact footprint: quiet indoor units, tidy electrical boards, and plumbing that protects usable storage and keeps wet areas reliable. Services need to share limited ceiling and wall depth, so routes are planned early.

Energy-efficient lighting and smart home devices, where specified, need early cable pathways and device locations agreed with the interior layout. Custom-built furniture and joinery should be set out with sockets, switches and access panels in mind.

## Working in a newly purchased flat

Working in a newly purchased flat often means protecting existing finishes, following building management rules and fitting around deliveries. Sequencing between joinery, electrical second fix and decoration reduces rework.

Testing circuits, water lines and cooling before final decoration lowers the risk of callbacks. Concealed pipework is pressure tested before walls are closed.

## Making the most of storage and light

A brief that emphasises storage and natural light affects the services as well as the interiors. Compact distribution boards, slim ceiling bulkheads and carefully placed lighting circuits help keep walls and ceilings free for storage and daylight.

Lighting layouts that combine general, task and accent lighting need clear circuit planning so that scenes can be controlled without crowding the walls with switches.

## Handover to the owner

Owners generally want systems that are simple to operate and can be serviced without major demolition. Access panels, labelled isolators and a clear handover note covering filters, drains and breakers support that goal.

## Air-conditioning in a flat

Apartment cooling may come from a central building system, from split units, or from a fan-coil arrangement connected to the building's chilled water. Each option has different requirements for access, drainage and noise. A flat's layout, window orientation and ceiling height influence how air is distributed.

Quiet operation is particularly important in bedrooms. Equipment is normally placed away from beds where possible, and condensate drains are routed with a continuous fall so that they do not leak or make noise.

## Lighting, power and smart devices

Good lighting design in a small home layers general lighting with task and accent lighting. Each layer is usually on its own circuit or control group so that the household can set the mood and save energy. Switches and dimmers are positioned for convenience and agreed with the interior layout.

Smart home technology can include remote control of lighting, curtains, cooling and security. It depends on power and data being available at each device, which is easiest to provide before walls and ceilings are closed.

## Respecting the building and neighbours

Apartment buildings have rules about working hours, deliveries, lift protection and waste removal. Following them keeps relations with building management and neighbours positive and avoids interruptions to the work.

Penetrations in walls and floors that separate flats, and any work touching shared risers, normally need building management approval, so these items are raised early in the programme.

## Project details to be confirmed

[CLIENT TO PROVIDE: building name and unit size approved for publication, specific smart home features installed, programme dates, and dedicated project photography.]
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
    heroImage: "/images/projects/works/retail-art-gallery-interior-01.jpg",
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

## What retail electrical work involves

Retail environments rely on lighting to express brand identity, on clean power for interactive displays and on containment that keeps back-of-house rooms organised. Electrical packages for stores typically include distribution boards, lighting circuits, small power for point-of-sale and displays, and coordination with low-current systems for security and audio-visual equipment.

In a high-end fashion setting the lighting design is part of the brand, so circuits, dimming and fixture positions follow the lighting designer's drawings closely. Installation tolerances are tight because fixtures sit beside finished walls and feature ceilings.

## Fitting out inside a retail destination

Stores inside a retail destination such as a shopping avenue operate under the landlord's technical and working-hours rules. Deliveries, noisy work and use of common areas are scheduled with the landlord's management team.

Temporary lighting and power keep trades productive during fit-out while permanent circuits are finished. Landlord approval of electrical and fire-related interfaces is normally required before a store can open.

## Interactive displays and sustainable finishes

Interactive displays depend on reliable power and data at the right locations, often in floors, plinths or joinery. Agreeing these locations before joinery is made avoids drilling into finished units.

Where sustainable materials are specified by the design team, efficient lighting and sensible control strategies support the same goal, and fixtures positioned for easy access keep maintenance simple.

## Testing before opening day

Circuits are tested and labelled before the store opens, giving store teams confidence when troubleshooting. A tidy distribution board and clear schedule are valuable to a retail operator who may be managing many stores.

## Lighting as part of the brand

In fashion retail, lighting influences how products look, how customers move through the store and how the brand is perceived. Display lighting is typically separate from general lighting so that it can be adjusted without affecting circulation areas, and fittings are positioned relative to rails, shelving and focal displays.

Dimming, scene control and emergency lighting each need to be wired and tested together so that the store looks right and remains safe. Lighting control panels are placed where staff can use them easily, and are labelled clearly.

## Air-conditioning and comfort for shoppers

Shoppers spend longer in a store that feels comfortable. Cooling is normally designed to maintain a steady temperature without drafts on display areas or fitting rooms, and fresh air is provided according to the approved design. Heat from lighting and equipment is part of the cooling load and is included in the calculations.

Diffusers are positioned to suit ceiling features and lighting, and thermostats or sensors are placed away from direct sunlight and heat sources so that they read accurately.

## Keeping a store trading

A retail store earns money only while it is open, so reliable services matter. Distribution boards sized with spare capacity, clearly labelled circuits and accessible isolators reduce the time needed to resolve a fault, and easy-to-reach air-conditioning units keep maintenance visits short.

Store teams benefit from a short, clear handover covering lighting control, emergency lighting tests and whom to call when something does not work as expected.

## Project details to be confirmed

[CLIENT TO PROVIDE: store area, brand name approval for publication, opening date, lighting and display specifications, and dedicated project photography.]
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
    heroImage: "/images/projects/works/office-etisalat-open-plan-01.jpg",
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

## What corporate office electrical installation involves

Corporate office electrical work centres on safe distribution, neat containment and capacity for technology-dense floors. Boards, cable trays, floor boxes and final circuits are coordinated with furniture layouts and collaborative zones so power is available where people work.

Ergonomic workstation planning informs socket density and data pathways. Technology loads call for careful diversity assumptions and spare ways for future additions.

## Open-plan layouts and collaborative zones

An open-plan floor concentrates many people and devices in one space, so cooling, lighting and power have to work together. Zoning allows separate control of collaborative areas, meeting rooms and quieter desks.

Containment that follows the ceiling grid and floor boxes set out against the furniture plan keep the finished office tidy. Where a floor is revamped rather than built new, existing services are surveyed before new routes are chosen.

## Working on a floor within a larger building

On a single floor of a larger building, isolations and live-working controls protect neighbouring occupants while new circuits are brought online. Out-of-hours work is common where a floor shares risers or plant with other tenants.

Coordination with building management covers access, lift use, waste removal and any interface with the shared fire alarm and air-conditioning systems.

## Testing and as-built records

Testing, earthing verification and as-built drawings are part of a professional handover. A labelled board schedule helps the facilities manager find and isolate circuits quickly after the new workspace is occupied.

## Lighting, cooling and comfort on an office floor

Office lighting is designed to provide even illumination on desks without glare on screens. Luminaires are laid out against the ceiling grid and furniture plan, and controls such as occupancy sensing or zone switching help avoid unnecessary use. Air-conditioning diffusers and returns are positioned so that cool air reaches occupants without causing drafts.

On a technology-dense floor, heat from equipment affects cooling needs, so communications rooms and meeting rooms are often given their own cooling provision.

## Technology-ready infrastructure

State-of-the-art technology depends on reliable power and well-planned cabling. Dedicated circuits for sensitive equipment, tidy containment for data and low-current cables, and clear separation between power and data routes all help prevent interference and make future changes easier.

Labelling of cables, patch panels and distribution boards is a small effort at installation time and a large benefit to whoever maintains the floor afterwards.

## Phasing and out-of-hours work

Where a floor remains partly in use, work is split into zones so that staff can relocate temporarily. Noisy or disruptive activities such as drilling and cutting are scheduled outside working hours where possible.

A clear handback process for each zone, including a short snagging walk, lets the occupier see progress and confirm that finished areas meet their expectations.

## Handover to a facilities team

A facilities manager looks after the floor for years after the project ends, so handover documents matter. Drawings, board schedules, test certificates and equipment information give the facilities team a reliable starting point for maintenance and later alterations.

A short walk-through, showing where isolators, valves and filters are located and how controls are set, helps the team operate the new workspace confidently from the first day.

## Project details to be confirmed

[CLIENT TO PROVIDE: floor area, headcount, programme dates, scope of electrical and technology works, and dedicated project photography of the completed floor.]
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
    heroImage: "/images/pages/elv-server-racks.jpg",
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

## What a logistics hub electromechanical package involves

Logistics hubs combine office areas with operational spaces that need robust power, lighting and environmental control for staff comfort and equipment reliability. Electromechanical design focuses on efficient operation and energy-conscious plant selection as defined by the approved design.

Cable routes, switchgear locations and mechanical plant rooms should leave clear circulation for forklifts, racking and maintenance vehicles. Lighting in storage areas is normally designed around racking layouts so that aisles are evenly lit.

## Energy savings in a large facility

Large floor areas make energy performance important. Efficient lighting with sensible controls, well-insulated services and appropriately sized cooling plant can reduce running costs over the life of the building.

Where energy monitoring points are included in the design, they help operators track performance after occupation and identify where adjustments would be worthwhile.

## Office and operational zones together

The office area of a hub has different needs from the warehouse floor. Staff areas call for comfortable temperatures, good lighting and reliable data, while operational areas prioritise robust power, clear circulation and equipment protection.

Dividing services so that each zone can be isolated and maintained separately limits the effect of a fault or planned shutdown on the rest of the facility.

## Commissioning for operations

Commissioning verifies that systems serving offices and operational zones behave as designed under expected load patterns. Documentation suited to facilities and operations teams supports safe operation and planned maintenance.

## Power and lighting for operational areas

Operational areas such as loading bays, sorting zones and storage aisles need durable power distribution and lighting that suits the way the space is used. Luminaires are selected for mounting height and robustness, and circuits are arranged so that a single fault does not darken a whole zone.

Sockets and power drops are positioned for equipment such as chargers, conveyors and handheld devices. Containment is mounted out of reach of vehicle movements, or protected where it cannot be.

## Cooling, ventilation and staff comfort

Large, high-roofed spaces present specific challenges for ventilation and cooling. The design team decides which areas are fully air-conditioned, which are ventilated, and how loading doors and other openings are handled. Staff areas and offices within the hub typically have conventional air-conditioning for comfort.

Plant such as chillers, air handlers and fans is positioned to allow maintenance access and to reduce noise in occupied areas.

## Safety in an industrial setting

Logistics facilities include vehicle movements, working at height and heavy equipment, so installation work is planned around them. Segregated work areas, clear signage and coordination with operations staff help keep contractors and employees safe.

Electrical, mechanical and fire-related systems are tested and documented so that the operator can demonstrate compliance during inspections.

## Designing for growth and flexibility

Logistics operations change with demand, so a hub is more useful when its services can adapt. Spare capacity in switchgear, space in containment and provision for additional cooling or lighting allow the facility to grow without wholesale replacement of its infrastructure.

Clear zoning of power and lighting also supports changes to racking layouts, loading arrangements and office areas, because circuits can be modified one zone at a time. Records of capacity and loading are kept so that the operator knows how much headroom remains before upgrades are needed.

Designing for access also matters: plant rooms, panels and valves are placed where they can be reached safely, without interrupting day-to-day movements across the site.

## Project details to be confirmed

[CLIENT TO PROVIDE: site size, office and warehouse areas, energy-saving measures installed, programme dates, and dedicated project photography.]
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
    heroImage: "/images/pages/clients-corporate-office.jpg",
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

## What government office modernisation involves

Public-sector office modernisation balances efficiency improvements with a welcoming environment for employees and visitors. Electromechanical upgrades may include air-conditioning, electrical distribution, energy-efficient lighting and life-safety systems that meet the approved design and authority expectations.

Reception areas, service counters and waiting spaces are public-facing, so comfort, lighting and clear signage matter as much as back-office efficiency. Services are planned to support that mix of public and staff areas.

## Working in an occupied building

Work in occupied government buildings is typically phased to keep services available to the public. Clear communication with floor managers helps schedule noisy or invasive tasks outside peak hours.

Temporary arrangements for power, cooling and access are planned in advance, and every isolation is notified so that staff and visitors are not caught out.

## Life-safety and compliance

Fire detection, alarms and compartment integrity are verified so the building stays inspection-ready. Cable and pipe penetrations through fire-rated walls and floors need to be sealed with approved products, and the work is recorded for inspection.

Regulatory approvals and inspections form part of the programme, and documentation is prepared with that in mind.

## Efficiency and maintainability

Energy-efficient equipment is commissioned and explained to the teams who will operate it daily. Maintainable layouts reduce future disruption when components need service.

## Efficient and welcoming public spaces

A welcoming environment for visitors depends on comfortable temperatures, good lighting and clear wayfinding as much as on appearance. Electromechanical systems support this by keeping reception and waiting areas evenly cooled and lit, and by keeping noise from plant and ventilation low.

For staff, efficiency comes from reliable systems and well-planned workspaces. Power and data are available at each desk, meeting rooms have suitable ventilation and lighting, and equipment such as printers has appropriate power and cooling.

## Energy-efficient systems in a public building

Public buildings often operate long hours, so efficient lighting, appropriately sized cooling plant and sensible controls can reduce running costs. Equipment is selected and commissioned to the approved design, and settings are explained to the building's operators.

Where meters or monitoring points are specified, they help the building owner track consumption and plan future improvements. Keeping documentation up to date ensures later changes build on what is actually installed.

## Clear communication with building users

Employees and visitors are more accepting of disruption when they know what to expect. Notices on planned isolations, temporary routes and noisy work help them plan their day, and a named contact on site gives staff someone to talk to.

Regular progress meetings with the building management team keep the programme aligned with the needs of the department.

## Modernising the interior alongside the services

Interior modernisation and electromechanical upgrades affect each other. New ceilings need the lighting, air-conditioning and fire detection layouts to be coordinated with them, and new partitions change how cooling is distributed and where detectors must be placed.

Carrying out both together reduces repeated disturbance of the building, because ceilings and walls are opened once. Agreed drawings showing the final layout of services in each area are the best protection against clashes and rework.

Where a building houses public services, signage, queue systems and information displays may also need power and data. These items are included in the coordination so that they are ready when the area reopens.

## Project details to be confirmed

[CLIENT TO PROVIDE: floor area, authority or department approval for publication, scope of life-safety and electrical works, programme dates, and dedicated project photography.]
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
    heroImage: "/images/pages/maintenance-workshop.jpg",
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

## What an office revamp involves

An office revamp changes layout, finishes and often the way a floor is used. Open-plan areas, flexible workspaces, meeting rooms and recreational areas all place different demands on cooling, lighting and power, so the electromechanical package is planned around how each area will be occupied.

Meeting rooms need quiet ventilation and good control of temperature, while recreation and breakout areas may need extra power and different lighting. Flexible workspaces benefit from containment and floor boxes that can follow a changing layout.

## Why the installer matters afterwards

A headquarters revamp that continues into maintenance benefits from installers who understand the as-built condition of plant, boards and life-safety interfaces. Knowing the original installation shortens diagnosis time when a fault appears.

After handover, planned maintenance typically covers inspections, filter changes, electrical checks and call-out response as agreed in the contract scope.

## Planning for future expansion

Spare capacity in distribution boards, containment and cooling plant makes later expansion simpler. Transparent visit records and recommendations let owners plan changes without rediscovering the building's systems from scratch.

When an office grows, new partitions, desks and meeting rooms can be added with less disruption if the original services were laid out with that flexibility in mind.

## Testing and handover

Circuits, air-conditioning and life-safety interfaces are tested before staff return. Handover typically includes as-built drawings, schedules and operating information that the maintenance team can build on.

## Creativity and collaboration in the workplace

Workplaces designed to encourage creativity and collaboration often include a mix of open areas, quiet rooms, informal seating and meeting spaces. Each type of space has different requirements for lighting levels, ventilation and acoustics, which the electromechanical design takes into account.

Flexible furniture and movable partitions mean that power and data should be available across the floor rather than only at fixed desks. Floor boxes, ceiling-mounted drops and perimeter trunking are common ways to provide this flexibility.

## Planned maintenance for an office floor

A planned maintenance programme normally combines scheduled inspections with a call-out service. Typical tasks include air-conditioning filter changes and coil cleaning, checks on electrical boards and emergency lighting, and visual inspections of life-safety devices. Visit reports record what was done, what was found and what is recommended.

Over time, these records form a service history for the building. They help owners budget for repairs and replacements and help the maintenance team spot recurring issues earlier.

## Keeping records up to date

When a contractor both builds and maintains systems, records should stay current. Each modification, replacement part and settings change is noted, so the next engineer to visit sees the true condition of the building.

Up-to-date board schedules, equipment lists and drawings also speed up future works, because designers and installers start from accurate information.

## Delivering on time and within budget

Predictable delivery comes from early planning, clear scope and fast decisions. Procurement of major equipment, agreement of finishes and inspection hold points are all scheduled with the client and consultant before work begins.

Changes are inevitable on any project, so a simple change-control routine, in which each variation is described, priced and approved before it is built, helps keep budget and programme under control.

## Project details to be confirmed

[CLIENT TO PROVIDE: floor area, programme dates, scope of the ongoing maintenance agreement, and dedicated project photography.]
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

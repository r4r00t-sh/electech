"use client";

import { useId } from "react";

/** Engineering-style building cross-section — systems are separate SVG groups. */
export function BuildingCrossSection({
  activeGroupId,
}: {
  activeGroupId: string;
}) {
  const reactId = useId().replace(/:/g, "");
  const glowId = `cap-glow-${reactId}`;

  const systemProps = (id: string) => {
    const isActive = activeGroupId === id;
    return {
      className: isActive ? "cap-system is-active" : "cap-system",
      filter: isActive ? `url(#${glowId})` : undefined,
      strokeWidth: 2,
      vectorEffect: "non-scaling-stroke" as const,
    };
  };

  return (
    <svg
      viewBox="0 0 520 620"
      role="img"
      aria-label="Building cross-section showing Electech MEP systems"
      className="cap-diagram h-full w-full text-navy"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <filter
          id={glowId}
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Structure — always muted navy */}
      <g
        className="cap-structure"
        stroke="currentColor"
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
      >
        {/* Ground / foundation */}
        <path d="M40 560 H480" />
        <path d="M56 560 V180" />
        <path d="M464 560 V180" />
        {/* Roof slab */}
        <path d="M48 180 H472" />
        <path d="M72 148 H448" />
        <path d="M72 148 L48 180" />
        <path d="M448 148 L472 180" />
        {/* Floors */}
        <path d="M56 280 H464" />
        <path d="M56 380 H464" />
        <path d="M56 480 H464" />
        {/* Core / shaft walls */}
        <path d="M236 180 V560" />
        <path d="M284 180 V560" />
        {/* Windows (simple rectangles) */}
        <rect x="88" y="210" width="48" height="40" rx="2" />
        <rect x="160" y="210" width="48" height="40" rx="2" />
        <rect x="312" y="210" width="48" height="40" rx="2" />
        <rect x="384" y="210" width="48" height="40" rx="2" />
        <rect x="88" y="310" width="48" height="40" rx="2" />
        <rect x="160" y="310" width="48" height="40" rx="2" />
        <rect x="312" y="310" width="48" height="40" rx="2" />
        <rect x="384" y="310" width="48" height="40" rx="2" />
        <rect x="88" y="410" width="48" height="40" rx="2" />
        <rect x="160" y="410" width="48" height="40" rx="2" />
        <rect x="312" y="410" width="48" height="40" rx="2" />
        <rect x="384" y="410" width="48" height="40" rx="2" />
        {/* Plant room door */}
        <rect x="340" y="500" width="36" height="60" rx="2" />
      </g>

      {/* Mechanical — roof AC / ventilation + ducts */}
      <g id="cap-mechanical" {...systemProps("cap-mechanical")}>
        {/* Rooftop AHU / condenser */}
        <rect x="96" y="96" width="72" height="40" rx="3" />
        <path d="M108 96 V84" />
        <path d="M124 96 V80" />
        <path d="M140 96 V84" />
        <path d="M156 96 V80" />
        <rect x="188" y="104" width="56" height="32" rx="3" />
        <circle cx="204" cy="120" r="6" />
        <circle cx="228" cy="120" r="6" />
        {/* Duct main across roof into shaft */}
        <path d="M168 116 H236" />
        <path d="M260 116 H320" />
        <rect x="244" y="108" width="24" height="16" rx="2" />
        {/* Vertical duct in shaft */}
        <path d="M248 124 V470" />
        <path d="M268 124 V470" />
        {/* Floor branch ducts */}
        <path d="M244 230 H120" />
        <path d="M120 230 V250" />
        <path d="M244 330 H120" />
        <path d="M120 330 V350" />
        <path d="M244 430 H120" />
        <path d="M120 430 V450" />
        {/* Diffuser marks */}
        <path d="M112 250 H128" />
        <path d="M112 350 H128" />
        <path d="M112 450 H128" />
      </g>

      {/* Electrical — riser, DBs, ceiling lights */}
      <g id="cap-electrical" {...systemProps("cap-electrical")}>
        {/* Vertical cable riser */}
        <path d="M252 180 V560" />
        {/* Distribution boards */}
        <rect x="292" y="220" width="40" height="48" rx="2" />
        <path d="M300 232 H324" />
        <path d="M300 244 H324" />
        <path d="M300 256 H324" />
        <rect x="292" y="420" width="40" height="48" rx="2" />
        <path d="M300 432 H324" />
        <path d="M300 444 H324" />
        <path d="M300 456 H324" />
        {/* Feeders to boards */}
        <path d="M252 244 H292" />
        <path d="M252 444 H292" />
        {/* Ceiling lights */}
        <circle cx="112" cy="196" r="5" />
        <circle cx="184" cy="196" r="5" />
        <circle cx="336" cy="196" r="5" />
        <circle cx="408" cy="196" r="5" />
        <circle cx="112" cy="296" r="5" />
        <circle cx="184" cy="296" r="5" />
        <circle cx="336" cy="296" r="5" />
        <circle cx="408" cy="296" r="5" />
        <path d="M112 196 V210" />
        <path d="M184 196 V210" />
        <path d="M336 196 V210" />
        <path d="M408 196 V210" />
        <path d="M112 296 V310" />
        <path d="M184 296 V310" />
        <path d="M336 296 V310" />
        <path d="M408 296 V310" />
      </g>

      {/* Plumbing — risers, plant pump/filter, drainage, solar WH */}
      <g id="cap-plumbing" {...systemProps("cap-plumbing")}>
        {/* Solar water heater on roof */}
        <rect x="360" y="88" width="64" height="28" rx="2" />
        <path d="M368 88 L392 72 L416 88" />
        <path d="M392 100 V148" />
        {/* Hot / cold risers */}
        <path d="M392 148 V520" />
        <path d="M408 180 V520" />
        {/* Plant room pump + filtration */}
        <circle cx="400" cy="520" r="14" />
        <path d="M400 506 V492" />
        <rect x="372" y="528" width="28" height="18" rx="2" />
        <rect x="416" y="528" width="28" height="18" rx="2" />
        <path d="M400 534 H416" />
        <path d="M386 528 V520" />
        {/* Drainage stack */}
        <path d="M176 280 V560" />
        <path d="M104 300 H176" />
        <path d="M104 400 H176" />
        <path d="M104 500 H176" />
        {/* Floor traps */}
        <circle cx="104" cy="300" r="4" />
        <circle cx="104" cy="400" r="4" />
        <circle cx="104" cy="500" r="4" />
      </g>

      {/* Fire-protection — sprinkler line + detector / alarm panel */}
      <g id="cap-fire-protection" {...systemProps("cap-fire-protection")}>
        {/* Sprinkler main in ceiling voids */}
        <path d="M72 200 H448" />
        <path d="M72 300 H448" />
        <path d="M72 400 H448" />
        {/* Sprinkler heads */}
        <path d="M130 200 V212" />
        <path d="M124 212 H136" />
        <path d="M210 200 V212" />
        <path d="M204 212 H216" />
        <path d="M350 200 V212" />
        <path d="M344 212 H356" />
        <path d="M420 200 V212" />
        <path d="M414 212 H426" />
        <path d="M130 300 V312" />
        <path d="M124 312 H136" />
        <path d="M350 300 V312" />
        <path d="M344 312 H356" />
        <path d="M130 400 V412" />
        <path d="M124 412 H136" />
        <path d="M350 400 V412" />
        <path d="M344 412 H356" />
        {/* Vertical fire riser */}
        <path d="M220 180 V560" />
        {/* Alarm panel */}
        <rect x="188" y="500" width="32" height="40" rx="2" />
        <circle cx="204" cy="516" r="4" />
        <path d="M196 528 H212" />
        {/* Ceiling detector */}
        <circle cx="260" cy="196" r="7" />
        <circle cx="260" cy="196" r="2" />
      </g>

      {/* Maintenance — technician at roof / plant service point */}
      <g id="cap-maintenance" {...systemProps("cap-maintenance")}>
        {/* Service platform */}
        <path d="M300 148 H350" />
        <path d="M308 148 V160" />
        <path d="M342 148 V160" />
        {/* Technician (simple geometric figure) */}
        <circle cx="326" cy="118" r="8" />
        <path d="M326 126 V148" />
        <path d="M326 132 L312 142" />
        <path d="M326 132 L348 128" />
        <path d="M348 128 L356 118" />
        {/* Tool / service point on AHU */}
        <path d="M356 118 H368" />
        <rect x="368" y="112" width="14" height="14" rx="2" />
        {/* Ladder to roof */}
        <path d="M300 148 V180" />
        <path d="M312 148 V180" />
        <path d="M300 156 H312" />
        <path d="M300 164 H312" />
        <path d="M300 172 H312" />
      </g>
    </svg>
  );
}

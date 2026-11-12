"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  clientDisplaySector,
  filterClientsBySector,
  getClientSectors,
  OTHER_SECTOR,
  type ClientRecord,
} from "@/content/clients";
import { cn } from "@/lib/utils";

const filters = ["All", ...getClientSectors(), OTHER_SECTOR] as const;

export function ClientsLogoWall({ clients }: { clients: ClientRecord[] }) {
  const [sector, setSector] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(() => {
    if (sector === "All") return [...clients].sort((a, b) => a.order - b.order);
    return filterClientsBySector(sector);
  }, [clients, sector]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter clients by sector"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={sector === f}
            onClick={() => setSector(f)}
            className={cn(
              "rounded-md border px-3 py-1.5 text-[14px] font-medium transition",
              sector === f
                ? "border-navy bg-navy text-white"
                : "border-navy/15 bg-white text-slate-dark hover:border-navy/40",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="mt-4 text-[14px] text-slate">
        Showing {visible.length} of {clients.length} organisations
        {sector !== "All" ? ` · ${sector}` : ""}
      </p>

      <ul className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-4 xl:grid-cols-6">
        {visible.map((client) => (
          <li key={client.slug}>
            <ClientTile client={client} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ClientTile({ client }: { client: ClientRecord }) {
  const hasStory = Boolean(client.storySlug);
  const sectorLabel = clientDisplaySector(client.sector);

  const inner = (
    <>
      <Image
        src={client.logo}
        alt={client.name}
        width={200}
        height={80}
        className="max-h-12 w-auto max-w-full object-contain grayscale transition duration-300 group-hover:grayscale-0 group-focus-within:grayscale-0"
      />
      {hasStory ? (
        <span className="pointer-events-none absolute inset-x-2 bottom-2 translate-y-1 text-center text-[11px] font-semibold text-navy opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          View project
        </span>
      ) : null}
      <span className="sr-only">
        {client.name}
        {hasStory ? " — View project" : ""} · {sectorLabel}
      </span>
    </>
  );

  const className = cn(
    "group relative flex aspect-[5/3] w-full items-center justify-center overflow-hidden rounded-md border border-navy/10 bg-white p-4",
    hasStory && "focus-within:ring-2 focus-within:ring-green/50",
  );

  if (hasStory && client.storySlug) {
    return (
      <Link
        href={`/projects/${client.storySlug}`}
        className={className}
        title={`${client.name} — View project`}
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className={className} title={client.name}>
      {inner}
    </div>
  );
}

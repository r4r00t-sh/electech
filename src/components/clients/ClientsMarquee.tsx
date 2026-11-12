"use client";

import Image from "next/image";
import Link from "next/link";
import type { ClientRecord } from "@/content/clients";

/** Featured client logos — auto-scrolls, pauses on hover, respects reduced motion. */
export function ClientsMarquee({
  clients,
  title = "Trusted by organisations across the UAE",
}: {
  clients: ClientRecord[];
  title?: string;
}) {
  const logos = clients.length ? clients : [];
  const loop = [...logos, ...logos];

  return (
    <div>
      <div className="mb-6 flex flex-col items-center justify-between gap-3 sm:flex-row sm:items-end">
        <p className="text-center text-[15px] font-semibold text-slate-dark sm:text-left">
          {title}
        </p>
        <Link
          href="/clients"
          className="text-[15px] font-semibold text-navy hover:text-green"
        >
          View all clients
        </Link>
      </div>

      <div className="relative overflow-hidden border-y border-navy/8 py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-mist to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-mist to-transparent" />

        <div className="group flex w-max animate-clients-marquee hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:w-full motion-reduce:justify-center motion-reduce:gap-3">
          {loop.map((client, i) => (
            <div
              key={`${client.slug}-${i}`}
              className="mx-2 flex h-16 w-36 shrink-0 items-center justify-center rounded-md border border-navy/8 bg-white px-4 py-2"
              aria-hidden={i >= logos.length}
            >
              <Image
                src={client.logo}
                alt={i < logos.length ? client.name : ""}
                width={140}
                height={48}
                className="max-h-10 w-auto object-contain grayscale transition group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import type { ClientRecord } from "@/content/clients";

/** Client logos — auto-scrolls, pauses on hover, respects reduced motion. */
export function ClientsMarquee({
  clients,
  title = "Trusted by organisations across the UAE",
}: {
  clients: ClientRecord[];
  title?: string;
}) {
  const logos = clients.length ? clients : [];
  const loop = [...logos, ...logos];
  const durationSec = Math.max(40, logos.length * 2.5);

  if (!logos.length) return null;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-center text-[2rem] font-bold text-navy md:text-left md:text-[2.25rem]">
          {title}
        </h2>
      </div>

      <div className="relative overflow-hidden border-y border-navy/8 py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-mist to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-mist to-transparent" />

        <div
          className="group flex w-max animate-clients-marquee hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:w-full motion-reduce:justify-center motion-reduce:gap-3"
          style={{ animationDuration: `${durationSec}s` }}
        >
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
                className="max-h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import type { ClientRecord } from "@/content/clients";
import { ClientLogo } from "@/components/clients/ClientLogo";

const CAPTION = "Projects delivered directly and through main contractors.";

/** Client logos — auto-scrolls, pauses on hover/focus, respects reduced motion. */
export function ClientsMarquee({
  clients,
  title = "Organisations We Work With",
}: {
  clients: ClientRecord[];
  title?: string;
}) {
  const logos = clients.length ? clients : [];
  const loop = [...logos, ...logos];
  const durationSec = Math.max(40, logos.length * 2.5);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (!logos.length) return null;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-center text-[2rem] font-bold text-navy md:text-left md:text-[2.25rem]">
          {title}
        </h2>
        <p className="mt-2 text-center text-[15px] text-slate-dark md:text-left">
          {CAPTION}
        </p>
      </div>

      <div className="group/marquee relative overflow-hidden border-y border-navy/8 py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-mist to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-mist to-transparent" />

        <div
          className={
            reduceMotion
              ? "flex flex-wrap justify-center gap-3"
              : "group flex w-max animate-clients-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
          }
          style={reduceMotion ? undefined : { animationDuration: `${durationSec}s` }}
        >
          {(reduceMotion ? logos : loop).map((client, i) => (
            <div
              key={`${client.slug}-${i}`}
              className="group mx-2 h-20 w-40 shrink-0"
              aria-hidden={!reduceMotion && i >= logos.length}
            >
              <ClientLogo client={client} maxHeight={56} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

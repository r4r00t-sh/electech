"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Droplets,
  Flame,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  getCapabilities,
  type CapabilityIconId,
  type CapabilityRecord,
} from "@/content/capabilities";
import { cn } from "@/lib/utils";

const icons: Record<CapabilityIconId, LucideIcon> = {
  wind: Wind,
  zap: Zap,
  droplets: Droplets,
  flame: Flame,
  wrench: Wrench,
};

function CapabilityMedia({ item }: { item: CapabilityRecord }) {
  const Icon = icons[item.icon];

  if (item.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-navy">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(10,20,40,0.55)] via-[rgba(10,20,40,0.18)] to-transparent"
          aria-hidden
        />
      </div>
    );
  }

  return (
    <div
      className="relative flex aspect-[16/10] items-center justify-center bg-navy-deep"
      role="img"
      aria-label={item.imageAlt}
    >
      <Icon className="h-14 w-14 text-white/75" strokeWidth={1.5} aria-hidden />
    </div>
  );
}

function CapabilityCard({
  item,
  className,
}: {
  item: CapabilityRecord;
  className?: string;
}) {
  const Icon = icons[item.icon];

  return (
    <Link
      href={item.href}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[10px] border border-navy/12 bg-white shadow-[0_2px_8px_rgba(32,32,96,0.06)]",
        "transition-[transform,box-shadow] duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(32,32,96,0.12)]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className,
      )}
    >
      <span
        className="absolute left-3 top-3 z-10 rounded-md bg-white/90 px-2 py-0.5 font-display text-[12px] font-semibold tracking-wide text-navy/45"
        aria-hidden
      >
        {item.number}
      </span>
      <span
        className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/90 text-navy transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
        aria-hidden
      >
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
      </span>

      <CapabilityMedia item={item} />

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-green">
            <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </span>
          <span
            className="h-0.5 w-8 origin-left bg-green transition-all duration-300 ease-out group-hover:w-12 motion-reduce:transition-none motion-reduce:group-hover:w-8"
            aria-hidden
          />
        </div>
        <h3 className="font-display text-[22px] font-bold leading-snug text-navy md:text-[24px]">
          {item.title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-slate-dark">
          {item.description}
        </p>
      </div>
    </Link>
  );
}

export function CapabilitiesGrid() {
  const items = getCapabilities();

  return (
    <ul className="grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-6">
      {items.map((item, index) => {
        const isTopRow = index < 3;
        const isLastOnTablet = index === items.length - 1;

        return (
          <li
            key={item.id}
            className={cn(
              isTopRow ? "lg:col-span-2" : "lg:col-span-3",
              isLastOnTablet && "sm:col-span-2 lg:col-span-3",
            )}
          >
            <FadeIn delay={index * 0.08} className="h-full">
              <CapabilityCard item={item} />
            </FadeIn>
          </li>
        );
      })}
    </ul>
  );
}

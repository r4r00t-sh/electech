"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import {
  ArrowUpRight,
  Droplets,
  Flame,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { BuildingCrossSection } from "@/components/about/BuildingCrossSection";
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

const CYCLE_MS = 4000;

function CompanionPhoto({ item }: { item: CapabilityRecord }) {
  const Icon = icons[item.icon];

  if (item.image) {
    return (
      <div className="relative aspect-[16/9] overflow-hidden rounded-[10px] border border-navy/12 bg-navy">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className="relative flex aspect-[16/9] items-center justify-center rounded-[10px] border border-navy/12 bg-navy-deep"
      role="img"
      aria-label={item.imageAlt}
    >
      <Icon className="h-12 w-12 text-white/70" strokeWidth={1.5} aria-hidden />
    </div>
  );
}

export function CapabilitiesGrid() {
  const items = getCapabilities();
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(items[0]?.id ?? "mechanical");
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === activeId),
  );
  const activeItem = items[activeIndex] ?? items[0]!;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setInView(Boolean(entry?.isIntersecting)),
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || paused || reduceMotion || items.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveId((current) => {
        const idx = items.findIndex((item) => item.id === current);
        const next = items[(idx + 1) % items.length];
        return next?.id ?? current;
      });
    }, CYCLE_MS);
    return () => window.clearInterval(timer);
  }, [inView, paused, reduceMotion, items]);

  const selectAt = useCallback(
    (index: number) => {
      const item = items[index];
      if (item) setActiveId(item.id);
    },
    [items],
  );

  const onListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const delta = event.key === "ArrowDown" ? 1 : -1;
    const next = (activeIndex + delta + items.length) % items.length;
    selectAt(next);
    const btn = document.getElementById(`${listId}-btn-${next}`);
    btn?.focus();
  };

  return (
    <div
      ref={rootRef}
      className="cap-explorer grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      {/* Drawing + companion photo — stacks above list on tablet/mobile */}
      <div className="order-1 flex flex-col gap-4 lg:order-2">
        <div
          className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[10px] border border-navy/12 bg-white p-3 text-navy shadow-[0_2px_8px_rgba(32,32,96,0.06)] sm:p-4 md:max-w-none lg:max-w-none"
          style={{ minHeight: "min(60vh, 420px)" }}
        >
          <div
            className="mx-auto h-[min(60vh,420px)] w-full max-w-md lg:h-[min(68vh,560px)] lg:max-w-none"
            data-active-group={activeItem.svgGroupId}
          >
            <BuildingCrossSection activeGroupId={activeItem.svgGroupId} />
          </div>
        </div>
        <CompanionPhoto item={activeItem} />
      </div>

      {/* Capability list */}
      <div
        className="order-2 flex flex-col gap-3 lg:order-1"
        role="group"
        aria-label="MEP capabilities"
        onKeyDown={onListKeyDown}
      >
        {items.map((item, index) => {
          const isActive = item.id === activeId;
          return (
            <div
              key={item.id}
              className={cn(
                "flex min-h-[5.75rem] overflow-hidden rounded-[10px] border transition-[background-color,border-color,color,box-shadow] duration-[250ms] ease-out",
                isActive
                  ? "border-navy bg-navy text-white shadow-[0_8px_20px_rgba(32,32,96,0.18)]"
                  : "border-navy/12 bg-white text-navy shadow-[0_2px_8px_rgba(32,32,96,0.05)]",
              )}
            >
              <button
                type="button"
                id={`${listId}-btn-${index}`}
                aria-pressed={isActive}
                aria-current={isActive ? "true" : undefined}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(item.id)}
                className="flex min-h-[5.75rem] flex-1 items-start gap-4 px-4 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-green md:px-5"
              >
                <span
                  className={cn(
                    "mt-0.5 font-display text-[15px] font-bold tracking-wide",
                    isActive ? "text-green" : "text-navy",
                  )}
                >
                  {item.number}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={cn(
                      "mb-2 block h-0.5 w-8 transition-[width,background-color] duration-[250ms] ease-out",
                      isActive ? "w-12 bg-green" : "bg-green/70",
                    )}
                    aria-hidden
                  />
                  <span className="block font-display text-[22px] font-bold leading-snug">
                    {item.title}
                  </span>
                  <span
                    className={cn(
                      "mt-1 block text-base leading-relaxed",
                      isActive ? "text-white/85" : "text-slate-dark",
                    )}
                  >
                    {item.description}
                  </span>
                </span>
              </button>
              <Link
                href={item.href}
                aria-label={`View ${item.title}`}
                className={cn(
                  "inline-flex w-12 shrink-0 items-center justify-center border-l transition-colors duration-[250ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-green",
                  isActive
                    ? "border-white/15 text-white hover:bg-white/10"
                    : "border-navy/10 text-navy hover:bg-mist",
                )}
              >
                <ArrowUpRight className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import statsData from "../../../data/stats.json";
import { cn } from "@/lib/utils";

export type StatCell = {
  id: string;
  show: boolean;
  value?: number;
  suffix?: string;
  prefix?: string;
  textValue?: string;
  label: string;
  animate?: boolean;
};

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!active) return;
    if (reduce || target <= 0) {
      setValue(target);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setValue(Math.round(target * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration, reduce]);

  return value;
}

function StatItem({
  cell,
  active,
  className,
}: {
  cell: StatCell;
  active: boolean;
  className?: string;
}) {
  const shouldAnimate =
    Boolean(cell.animate) &&
    typeof cell.value === "number" &&
    !cell.textValue;
  const counted = useCountUp(cell.value ?? 0, active && shouldAnimate);
  const displayNumber = shouldAnimate ? counted : (cell.value ?? 0);

  return (
    <div className={cn("px-4 py-6 text-center md:px-6 md:text-left", className)}>
      <p className="font-display text-3xl font-bold text-navy md:text-4xl">
        {cell.textValue ? (
          <span className="block text-lg font-semibold leading-snug text-navy md:text-xl">
            {cell.textValue}
          </span>
        ) : (
          <>
            {cell.prefix ?? ""}
            <span>{displayNumber}</span>
            {cell.suffix ?? ""}
          </>
        )}
      </p>
      <p className="mt-2 text-[14px] leading-snug text-slate md:text-[15px]">
        {cell.label}
      </p>
    </div>
  );
}

export function StatsStrip() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  const cells = (statsData as StatCell[]).filter((c) => c.show);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActive(true);
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!cells.length) return null;

  return (
    <section
      ref={ref}
      aria-label="Electech at a glance"
      className="border-y border-navy/10 bg-mist"
    >
      <div className="container-site">
        <div
          className={cn(
            "grid grid-cols-1 divide-y divide-navy/10 sm:grid-cols-2 sm:divide-y-0",
            cells.length >= 4
              ? "lg:grid-cols-4 lg:divide-x lg:divide-navy/10"
              : cells.length === 3
                ? "lg:grid-cols-3 lg:divide-x lg:divide-navy/10"
                : "lg:grid-cols-2 lg:divide-x lg:divide-navy/10",
          )}
        >
          {cells.map((cell, i) => (
            <StatItem
              key={cell.id}
              cell={cell}
              active={active}
              className={cn(
                // tablet: vertical divider between columns in each row
                i % 2 === 1 && "sm:border-l sm:border-navy/10 lg:border-l-0",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

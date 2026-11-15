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

function useCountUp(
  target: number,
  active: boolean,
  enabled: boolean,
  duration = 1200,
) {
  const [value, setValue] = useState(target);
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!enabled || !active || done) return;
    if (reduce || target <= 0) {
      setValue(target);
      setDone(true);
      return;
    }
    setValue(0);
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setValue(Math.round(target * progress));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration, reduce, enabled, done]);

  return value;
}

function StatItem({
  cell,
  active,
  index,
  total,
  wide,
}: {
  cell: StatCell;
  active: boolean;
  index: number;
  total: number;
  wide?: boolean;
}) {
  const shouldAnimate =
    Boolean(cell.animate) &&
    typeof cell.value === "number" &&
    !cell.textValue;
  const displayNumber = useCountUp(cell.value ?? 0, active, shouldAnimate);
  const isTextFigure = Boolean(cell.textValue);

  return (
    <div
      className={cn(
        "flex flex-col justify-start px-4 py-8 text-left md:px-6",
        wide && "md:col-span-2",
        index < total - 1 && "border-b border-white/15 md:border-b-0 md:border-r md:border-white/15",
      )}
    >
      <p
        className={cn(
          "font-display font-bold !text-white",
          isTextFigure
            ? "text-[20px] leading-snug md:text-[20px]"
            : "text-4xl leading-none md:text-5xl",
        )}
      >
        {cell.textValue ? (
          cell.textValue
        ) : (
          <>
            {cell.prefix ?? ""}
            <span>{displayNumber}</span>
            {cell.suffix ?? ""}
          </>
        )}
      </p>
      <p className="mt-2 text-[15px] leading-snug text-white/70">{cell.label}</p>
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
      className="relative z-[2] bg-navy"
    >
      <div className="container-site grid grid-cols-1 md:grid-cols-4">
        {cells.map((cell, i) => (
          <StatItem
            key={cell.id}
            cell={cell}
            active={active}
            index={i}
            total={cells.length}
            wide={cell.id === "sectors" || Boolean(cell.textValue)}
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { siteConfig } from "@/content/site";

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
  value,
  label,
  suffix,
  prefix,
  placeholder,
  textValue,
  active,
}: {
  value: number;
  label: string;
  suffix: string;
  prefix: string;
  placeholder?: string;
  textValue?: string;
  active: boolean;
}) {
  const counted = useCountUp(value, active);
  return (
    <div className="text-center md:text-left">
      <p className="font-display text-3xl font-bold text-navy md:text-4xl">
        {textValue ? (
          <span className="block text-base font-semibold leading-snug text-navy">
            {textValue}
          </span>
        ) : placeholder && value === 0 ? (
          <span className="text-base font-semibold text-slate">{placeholder}</span>
        ) : (
          <>
            {prefix}
            {counted}
            {suffix}
          </>
        )}
      </p>
      <p className="mt-1 text-sm text-slate">{label}</p>
    </div>
  );
}

export function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

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

  return (
    <div
      ref={ref}
      className="grid gap-8 rounded-[var(--radius-card)] border border-navy/8 bg-white p-6 shadow-[var(--shadow-card)] sm:grid-cols-2 lg:grid-cols-4 lg:p-8"
    >
      {siteConfig.stats.map((stat) => (
        <StatItem key={stat.label} {...stat} active={active} />
      ))}
    </div>
  );
}

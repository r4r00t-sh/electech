"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from "lucide-react";
import type { Testimonial } from "@/content/types";
import { getStoryDisplayImage } from "@/lib/media";
import { PhotoMedia } from "@/components/ui/PhotoMedia";
import { cn } from "@/lib/utils";

export function TestimonialsBanner({
  items,
}: {
  items: Testimonial[];
  title?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [paused, items.length]);

  if (!items.length) return null;
  const current = items[index];
  const sideImage = current.storySlug
    ? getStoryDisplayImage(current.storySlug)
    : getStoryDisplayImage("");

  // Role + company only (docx provides roles / attributions, not personal names).
  // If role already includes the full attribution, skip repeating company.
  const attribution = (() => {
    const role = current.role?.trim() ?? "";
    const company = current.company?.trim() ?? "";
    if (!company) return role;
    if (role.includes(company)) return role;
    return [role, company].filter(Boolean).join(", ");
  })();

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null;
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start == null || items.length < 2) return;
    const end = e.changedTouches[0]?.clientX ?? start;
    const delta = end - start;
    if (Math.abs(delta) < 40) return;
    setIndex((i) =>
      delta < 0 ? (i + 1) % items.length : (i - 1 + items.length) % items.length,
    );
  };

  return (
    <section
      className="bg-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="section-pad px-6 md:px-10 lg:px-14">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="font-display text-[2.5rem] font-bold !text-white md:text-[2.75rem]">
              What our clients say
            </h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 text-white hover:bg-white/10"
                aria-label="Previous testimonial"
                onClick={() =>
                  setIndex((i) => (i - 1 + items.length) % items.length)
                }
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 text-white hover:bg-white/10"
                aria-label="Next testimonial"
                onClick={() => setIndex((i) => (i + 1) % items.length)}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 text-white hover:bg-white/10"
                aria-label={paused ? "Play testimonials" : "Pause testimonials"}
                onClick={() => setPaused((p) => !p)}
              >
                {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div aria-live="polite">
            <Quote className="mb-4 h-8 w-8 text-green" aria-hidden />
            <blockquote className="max-w-2xl text-xl leading-relaxed text-white md:text-2xl">
              “{current.quote}”
            </blockquote>
            <footer className="mt-6">
              <p className="text-[15px] font-medium text-white/80">
                {attribution}
              </p>
            </footer>
          </div>

          <div className="mt-8 flex gap-2" role="tablist" aria-label="Testimonials">
            {items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition",
                  i === index ? "bg-green" : "bg-white/30 hover:bg-white/50",
                )}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative min-h-[280px] lg:min-h-full">
          <PhotoMedia image={sideImage} sizes="(max-width: 1024px) 100vw, 40vw" />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { MediaRef } from "@/lib/media";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 6500;
const FADE_MS = 1200;

export function HeroSlider({ slides }: { slides: MediaRef[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused || slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion, slides.length]);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => {
        const active = i === index;
        return (
          <div
            key={`${slide.src}-${i}`}
            className="absolute inset-0"
            style={{
              opacity: active ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease-in-out`,
              zIndex: active ? 1 : 0,
            }}
            aria-hidden={!active}
          >
            {slide.src ? (
              <div
                className={cn(
                  "absolute inset-0 will-change-transform",
                  active && !reduceMotion && "animate-hero-kenburns",
                )}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="object-cover"
                  style={{
                    objectPosition: slide.objectPosition ?? "center right",
                  }}
                  sizes="100vw"
                />
              </div>
            ) : (
              <div className="h-full w-full bg-navy-deep" />
            )}
          </div>
        );
      })}
    </div>
  );
}

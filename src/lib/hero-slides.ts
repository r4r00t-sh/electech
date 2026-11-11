import { existsSync, readdirSync } from "fs";
import path from "path";
import { defaultHeroSlides, type MediaRef } from "@/lib/media";

function collectHeroJpgs(): MediaRef[] {
  const found: MediaRef[] = [];
  const seen = new Set<string>();

  const push = (publicRel: string, alt: string) => {
    if (seen.has(publicRel)) return;
    if (!existsSync(path.join(process.cwd(), "public", publicRel))) return;
    seen.add(publicRel);
    found.push({ src: `/${publicRel}`, alt });
  };

  // Prefer explicit hero-*.jpg at images root or images/heroes
  for (const root of ["images", "images/heroes"]) {
    for (let i = 1; i <= 8; i++) {
      push(
        `${root}/hero-${i}.jpg`,
        `Dubai skyline and construction photography ${i}`,
      );
    }
  }

  // Also pick up client drops: home-*.jpg, skyline-*.jpg under images/heroes
  const heroesDir = path.join(process.cwd(), "public", "images", "heroes");
  if (existsSync(heroesDir)) {
    const files = readdirSync(heroesDir)
      .filter((f) => /\.(jpe?g|webp)$/i.test(f))
      .filter((f) => /^(hero|home|skyline)-/i.test(f))
      .sort();
    for (const file of files) {
      push(
        `images/heroes/${file}`,
        "Dubai skyline and construction photography",
      );
    }
  }

  return found;
}

/** Server-only: prefer client-added hero photos when present. */
export function resolveHeroSlides(): MediaRef[] {
  const found = collectHeroJpgs();
  if (found.length >= 3) return found.slice(0, 3);
  if (found.length > 0) {
    return [...found, ...defaultHeroSlides].slice(0, 3);
  }
  return defaultHeroSlides;
}

import { existsSync } from "fs";
import path from "path";
import type { MediaRef } from "@/lib/media";

const HOME_HEROES: MediaRef[] = [
  {
    src: "/images/heroes/hero-02-electrical-installation.jpg",
    alt: "Electrician in safety gear installing and testing wiring at an electrical distribution box.",
    objectPosition: "center right",
  },
  {
    src: "/images/heroes/hero-03-plant-room-pipework.jpg",
    alt: "Clean stainless-steel plant room with pumps, valves and industrial pipework.",
    objectPosition: "center right",
  },
];

function fileExists(publicPath: string) {
  return existsSync(
    path.join(process.cwd(), "public", publicPath.replace(/^\//, "")),
  );
}

/** Server-only: dedicated home hero photos (never old-site crops). */
export function resolveHeroSlides(): MediaRef[] {
  const ready = HOME_HEROES.filter((h) => fileExists(h.src));
  return ready.length > 0 ? ready : HOME_HEROES;
}

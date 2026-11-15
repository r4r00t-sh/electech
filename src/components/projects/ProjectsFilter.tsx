"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Story } from "@/content/types";
import { getStoryDisplayImage } from "@/lib/media";
import { PhotoMedia } from "@/components/ui/PhotoMedia";
import { cn } from "@/lib/utils";

type FilterId =
  | "all"
  | "residential-villas"
  | "commercial-offices"
  | "electrical"
  | "mechanical-plumbing";

const FILTER_DEFS: {
  id: FilterId;
  label: string;
  match: (s: Story) => boolean;
}[] = [
  { id: "all", label: "All", match: () => true },
  {
    id: "residential-villas",
    label: "Residential Villas",
    match: (s) =>
      s.sector === "Residential Villas" || s.sector === "Residential",
  },
  {
    id: "commercial-offices",
    label: "Commercial Offices",
    match: (s) =>
      s.sector === "Commercial Offices" || s.sector === "Commercial",
  },
  {
    id: "electrical",
    label: "Electrical",
    match: (s) =>
      s.primaryBucket === "electrical" ||
      s.secondaryBuckets.includes("electrical"),
  },
  {
    id: "mechanical-plumbing",
    label: "Mechanical & Plumbing",
    match: (s) =>
      s.primaryBucket === "mechanical-plumbing" ||
      s.secondaryBuckets.includes("mechanical-plumbing"),
  },
];

export function ProjectsFilter({ stories }: { stories: Story[] }) {
  const [active, setActive] = useState<FilterId>("all");

  const visibleFilters = useMemo(
    () =>
      FILTER_DEFS.filter(
        (f) => f.id === "all" || stories.some((s) => f.match(s)),
      ),
    [stories],
  );

  const filtered = useMemo(() => {
    const def = FILTER_DEFS.find((f) => f.id === active) ?? FILTER_DEFS[0]!;
    return stories.filter((s) => def.match(s));
  }, [active, stories]);

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects"
      >
        {visibleFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={active === filter.id}
            className={cn(
              "rounded-md px-4 py-2 text-[15px] font-semibold transition",
              active === filter.id
                ? "bg-navy text-white"
                : "border border-navy/10 bg-white text-navy hover:border-navy/30",
            )}
            onClick={() => setActive(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
        {filtered.map((story) => {
          const image = getStoryDisplayImage(story);
          return (
            <article
              key={story.slug}
              className="mb-6 break-inside-avoid overflow-hidden rounded-md border border-navy/10 bg-white"
            >
              <Link href={`/projects/${story.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <PhotoMedia
                    image={image}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={
                      image.placeholder
                        ? undefined
                        : "transition duration-500 group-hover:scale-105"
                    }
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-display text-xl font-bold text-navy transition-colors group-hover:text-green">
                    {story.title}
                  </h2>
                  <p className="mt-1 text-[14px] font-medium text-slate">
                    {story.location}
                  </p>
                  <p className="mt-3 text-[15px] text-slate-dark">
                    {story.scope}
                  </p>
                  <p className="mt-3 text-[13px] font-semibold text-green">
                    {story.status}
                  </p>
                  <span className="mt-4 inline-flex text-[15px] font-semibold text-navy group-hover:text-green">
                    View Project
                  </span>
                </div>
              </Link>
            </article>
          );
        })}
      </div>

      {!filtered.length ? (
        <p className="text-slate-dark">No projects match this filter yet.</p>
      ) : null}
    </div>
  );
}

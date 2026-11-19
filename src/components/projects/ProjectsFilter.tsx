"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Story } from "@/content/types";
import { getStoryDisplayImage } from "@/lib/media";
import {
  isProjectSectorId,
  PROJECT_SECTOR_FILTERS,
  type ProjectSectorId,
} from "@/lib/project-sectors";
import { PhotoMedia } from "@/components/ui/PhotoMedia";
import { cn } from "@/lib/utils";

export function ProjectsFilter({
  stories,
  initialSector = "all",
}: {
  stories: Story[];
  initialSector?: ProjectSectorId;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sectorParam = searchParams.get("sector");
  const fromUrl: ProjectSectorId = isProjectSectorId(sectorParam)
    ? sectorParam
    : initialSector;

  const [active, setActive] = useState<ProjectSectorId>(fromUrl);

  useEffect(() => {
    setActive(fromUrl);
  }, [fromUrl]);

  const selectSector = (id: ProjectSectorId) => {
    setActive(id);
    const params = new URLSearchParams(searchParams.toString());
    if (id === "all") params.delete("sector");
    else params.set("sector", id);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const filtered = useMemo(() => {
    const def =
      PROJECT_SECTOR_FILTERS.find((f) => f.id === active) ??
      PROJECT_SECTOR_FILTERS[0]!;
    return stories.filter((s) => def.match(s));
  }, [active, stories]);

  const counts = useMemo(() => {
    const map = new Map<ProjectSectorId, number>();
    for (const filter of PROJECT_SECTOR_FILTERS) {
      map.set(
        filter.id,
        filter.id === "all"
          ? stories.length
          : stories.filter((s) => filter.match(s)).length,
      );
    }
    return map;
  }, [stories]);

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects by sector"
      >
        {PROJECT_SECTOR_FILTERS.map((filter) => {
          const count = counts.get(filter.id) ?? 0;
          return (
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
              onClick={() => selectSector(filter.id)}
            >
              {filter.label}
              <span
                className={cn(
                  "ml-2 text-[13px] font-medium",
                  active === filter.id ? "text-white/70" : "text-slate",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
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
                  {story.sector ? (
                    <p className="text-[13px] font-semibold uppercase tracking-wide text-green">
                      {story.sector}
                    </p>
                  ) : null}
                  <h2 className="mt-1 font-display text-xl font-bold text-navy transition-colors group-hover:text-green">
                    {story.title}
                  </h2>
                  <p className="mt-1 text-[14px] font-medium text-slate">
                    {story.location}
                  </p>
                  <p className="mt-3 text-[15px] text-slate-dark">{story.scope}</p>
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
        <p className="text-slate-dark">No projects match this sector yet.</p>
      ) : null}
    </div>
  );
}

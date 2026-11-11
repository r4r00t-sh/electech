"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Story } from "@/content/types";
import { BUCKETS, type BucketId, bucketLabel } from "@/lib/buckets";
import { getStoryDisplayImage } from "@/lib/media";
import { PhotoMedia } from "@/components/ui/PhotoMedia";
import { cn } from "@/lib/utils";

const filters: { id: "all" | BucketId; label: string }[] = [
  { id: "all", label: "All" },
  ...BUCKETS.map((b) => ({ id: b.id, label: b.short })),
];

export function ProjectsFilter({ stories }: { stories: Story[] }) {
  const [active, setActive] = useState<"all" | BucketId>("all");

  const filtered = useMemo(() => {
    if (active === "all") return stories;
    return stories.filter(
      (s) => s.primaryBucket === active || s.secondaryBuckets.includes(active),
    );
  }, [active, stories]);

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects by solution"
      >
        {filters.map((filter) => (
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
          const image = getStoryDisplayImage(story.slug);
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
                  <p className="text-[14px] font-semibold text-green">
                    {bucketLabel(story.primaryBucket)}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-bold text-navy transition-colors group-hover:text-green">
                    {story.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-[15px] text-slate-dark">
                    {story.summary}
                  </p>
                </div>
              </Link>
            </article>
          );
        })}
      </div>

      {!filtered.length ? (
        <p className="text-slate-dark">No stories in this bucket yet.</p>
      ) : null}
    </div>
  );
}

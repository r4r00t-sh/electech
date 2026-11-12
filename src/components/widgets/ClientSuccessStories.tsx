import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Story } from "@/content/types";
import { bucketLabel } from "@/lib/buckets";
import { getStoryDisplayImage, stockImageForBucket } from "@/lib/media";
import { FadeIn } from "@/components/ui/FadeIn";
import { PhotoMedia } from "@/components/ui/PhotoMedia";

export function ClientSuccessStories({
  stories,
  title = "Client Success Stories",
  description,
  /**
   * @deprecated Prefer showing story photos. When true, still uses
   * topic-matched stock images (never a blank navy tile).
   */
  silentImages = false,
  excludeSrcs = [],
}: {
  stories: Story[];
  title?: string;
  description?: string;
  silentImages?: boolean;
  excludeSrcs?: string[];
}) {
  if (!stories.length) return null;

  const used = new Set(excludeSrcs);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-[2.5rem] font-bold text-navy md:text-[2.75rem]">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 max-w-2xl text-[17px] text-slate-dark">
              {description}
            </p>
          ) : null}
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy hover:text-green"
        >
          View all projects <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {stories.map((story, i) => {
          let image = getStoryDisplayImage(story.slug);
          const clash =
            silentImages ||
            (image.src ? used.has(image.src) : true) ||
            !image.src ||
            image.placeholder;

          if (clash) {
            image = stockImageForBucket(
              story.primaryBucket,
              story.title,
              [...used],
            );
          }

          if (image.src) used.add(image.src);

          return (
            <FadeIn key={story.slug} delay={i * 0.04}>
              <article className="group overflow-hidden rounded-md border border-navy/10 bg-white">
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-deep">
                  <PhotoMedia
                    image={image}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[14px] font-semibold text-green">
                    {bucketLabel(story.primaryBucket)}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-navy">
                    {story.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[15px] text-slate-dark">
                    {story.summary}
                  </p>
                  <Link
                    href={`/projects/${story.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-navy hover:text-green"
                  >
                    Read story <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}

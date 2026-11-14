import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Story } from "@/content/types";
import { bucketLabel } from "@/lib/buckets";
import { getStoryDisplayImage, type MediaRef } from "@/lib/media";
import { FadeIn } from "@/components/ui/FadeIn";
import { PhotoMedia } from "@/components/ui/PhotoMedia";

function resolveCardImage(story: Story): MediaRef {
  const mapped = getStoryDisplayImage(story.slug);
  if (mapped.src) {
    return { ...mapped, alt: mapped.alt || story.heroAlt || story.title };
  }
  if (story.hasVerifiedPhoto && story.heroImage) {
    return {
      src: story.heroImage,
      alt: story.heroAlt || story.title,
      objectPosition: "center",
    };
  }
  return {
    src: "",
    alt: story.heroAlt || story.title,
    placeholder: true,
    bucket: story.primaryBucket,
  };
}

export function ClientSuccessStories({
  stories,
  title = "Client Success Stories",
  description,
}: {
  stories: Story[];
  title?: string;
  description?: string;
  /** @deprecated Ignored — cards always show photos. */
  silentImages?: boolean;
  /** @deprecated Ignored — cards always show each story photo. */
  excludeSrcs?: string[];
}) {
  if (!stories.length) return null;

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
          const image = resolveCardImage(story);
          return (
            <FadeIn key={story.slug} delay={i * 0.04}>
              <article className="group overflow-hidden rounded-md border border-navy/10 bg-white">
                <Link href={`/projects/${story.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
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
                    <h3 className="mt-2 font-display text-xl font-bold text-navy transition-colors group-hover:text-green">
                      {story.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[15px] text-slate-dark">
                      {story.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-navy group-hover:text-green">
                      Read story <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}

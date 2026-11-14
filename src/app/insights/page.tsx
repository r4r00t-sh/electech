import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { PhotoMedia } from "@/components/ui/PhotoMedia";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { formatReadingTime, getLatestPosts, posts } from "@/content/posts";
import { getBlogDisplayImage, pageHeroes } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Engineering insights from Electech — project delivery, HVAC and electrical notes for Dubai projects.",
  image: "/images/pages/insights-technical-desk.jpg",
  path: "/insights",
});

export default function InsightsPage() {
  const sorted = getLatestPosts(posts.length);
  const [featured, ...rest] = sorted;

  return (
    <>
      <PageHero
        title="Insights"
        intro="Practical notes from our engineers on delivery, systems and life safety."
        media={pageHeroes.insights}
        crumbs={[{ label: "Insights" }]}
      />
      <Section>
        {featured ? (
          <Link
            href={`/insights/${featured.slug}`}
            className="group mb-10 grid overflow-hidden rounded-md border border-navy/10 bg-white lg:grid-cols-2"
          >
            <div className="relative min-h-[260px]">
              <PhotoMedia
                image={getBlogDisplayImage(featured.slug)}
                sizes="50vw"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10">
              <p className="text-[14px] font-semibold text-green">
                {featured.category} · {formatReadingTime(featured.readingTime)}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy transition-colors duration-200 group-hover:text-green">
                {featured.title}
              </h2>
              <p className="mt-3 text-[17px] text-slate-dark">{featured.excerpt}</p>
              <p className="mt-4 text-[15px] text-slate">
                {featured.author}
                {featured.publishedAt ? ` · ${featured.publishedAt}` : null}
              </p>
            </div>
          </Link>
        ) : null}

        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group overflow-hidden rounded-md border border-navy/10 bg-white"
            >
              <div className="relative aspect-[16/10]">
                <PhotoMedia
                  image={getBlogDisplayImage(post.slug)}
                  sizes="50vw"
                />
              </div>
              <div className="p-5">
                <p className="text-[14px] font-semibold text-green">
                  {post.category} · {formatReadingTime(post.readingTime)}
                </p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy transition-colors duration-200 group-hover:text-green">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-[15px] text-slate-dark">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <Section tone="mist">
        <CtaBanner />
      </Section>
    </>
  );
}

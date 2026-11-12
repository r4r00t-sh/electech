import Link from "next/link";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section } from "@/components/ui/Section";
import { PhotoMedia } from "@/components/ui/PhotoMedia";
import { ClientSuccessStories } from "@/components/widgets/ClientSuccessStories";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import {
  getAdjacentStories,
  getStoriesByBucket,
  getStoryBySlug,
  stories,
} from "@/content/stories";
import { bucketLabel } from "@/lib/buckets";
import { getStoryDisplayImage, getStoryGallery } from "@/lib/media";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/site";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return {};
  const display = getStoryDisplayImage(story.slug);
  return pageMetadata({
    title: story.title,
    description: story.summary,
    path: `/projects/${story.slug}`,
    image: display.src || undefined,
  });
}

function attribution(role: string, company: string) {
  const r = role?.trim() ?? "";
  const c = company?.trim() ?? "";
  if (!c) return r;
  if (r.includes(c)) return r;
  return [r, c].filter(Boolean).join(", ");
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  const { prev, next } = getAdjacentStories(slug);
  const related = getStoriesByBucket(story.primaryBucket, 4)
    .filter((s) => s.slug !== story.slug)
    .slice(0, 3);

  const displayImage = getStoryDisplayImage(story.slug);
  const gallery = getStoryGallery(story.slug);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.summary,
    image: displayImage.src
      ? `${siteConfig.url}${displayImage.src}`
      : undefined,
    author: { "@type": "Organization", name: siteConfig.legalName },
    publisher: { "@type": "Organization", name: siteConfig.legalName },
  };

  const bodyLines = story.body.split("\n");
  let galleryInserted = false;

  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          breadcrumbSchema([
            { name: "Projects", path: "/projects" },
            { name: story.title, path: `/projects/${story.slug}` },
          ]),
        ]}
      />
      <div className="bg-white">
        <Breadcrumbs
          items={[
            { label: "Projects", href: "/projects" },
            { label: story.title },
          ]}
        />
      </div>

      <div className="relative min-h-[52vh] overflow-hidden bg-[#0a1428]">
        <div className="absolute inset-0">
          <PhotoMedia image={displayImage} priority sizes="100vw" />
        </div>
        <div className="pointer-events-none absolute inset-0 photo-scrim" />
        <div className="container-site relative z-[1] flex min-h-[52vh] flex-col justify-end py-14">
          <p className="text-[14px] font-semibold text-green">
            {bucketLabel(story.primaryBucket)}
          </p>
          <h1 className="mt-3 max-w-4xl text-[2.75rem] font-bold !text-white md:text-5xl">
            {story.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[17px] text-white/90">{story.summary}</p>
        </div>
      </div>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="prose-mep whitespace-pre-line text-slate">
            {bodyLines.map((line, i) => {
              if (line.startsWith("## ")) {
                const heading = (
                  <h2 key={`h-${i}`} className="font-display text-navy">
                    {line.replace("## ", "")}
                  </h2>
                );
                // Insert inline gallery after the first major section body
                if (!galleryInserted && i > 0) {
                  galleryInserted = true;
                  return (
                    <Fragment key={`sec-${i}`}>
                      {heading}
                      <div className="my-8 grid gap-4 not-prose md:grid-cols-2">
                        {gallery.map((img) => (
                          <div
                            key={`${img.src}-${img.objectPosition ?? ""}-${img.alt}`}
                            className="relative aspect-[4/3] overflow-hidden rounded-md"
                          >
                            <PhotoMedia image={img} sizes="50vw" />
                          </div>
                        ))}
                      </div>
                    </Fragment>
                  );
                }
                return heading;
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={i} className="font-display text-navy">
                    {line.replace("### ", "")}
                  </h3>
                );
              }
              if (!line.trim()) return <br key={i} />;
              return <p key={i}>{line}</p>;
            })}

            {!galleryInserted && gallery.length ? (
              <div className="my-8 grid gap-4 not-prose md:grid-cols-2">
                {gallery.map((img) => (
                  <div
                    key={`${img.src}-${img.alt}`}
                    className="relative aspect-[4/3] overflow-hidden rounded-md"
                  >
                    <PhotoMedia image={img} sizes="50vw" />
                  </div>
                ))}
              </div>
            ) : null}

            <figure className="my-10 rounded-md border border-navy/10 bg-mist p-6 md:p-8">
              <Quote className="h-8 w-8 text-green" aria-hidden />
              <blockquote className="mt-4 text-xl font-medium text-navy">
                “{story.testimonial.quote}”
              </blockquote>
              <figcaption className="mt-4 text-[15px] text-slate-dark">
                {attribution(
                  story.testimonial.role,
                  story.testimonial.company,
                )}
              </figcaption>
            </figure>
          </article>

          <aside className="h-fit rounded-md border border-navy/10 bg-mist p-6 lg:sticky lg:top-24">
            <h2 className="font-display text-lg font-bold text-navy">
              Project facts
            </h2>
            <dl className="mt-4 space-y-4 text-[15px]">
              {[
                ["Client", story.client],
                ["Location", story.location],
                ["Sector", story.sector],
                ["Scope", story.scope],
                ["Year", story.year],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-slate">{label}</dt>
                  <dd className="mt-1 font-medium text-navy">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      <Section tone="mist">
        <h2 className="mb-6 font-display text-2xl font-bold text-navy">
          Results & outcomes
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {story.results.map((result) => (
            <div
              key={result.label}
              className="rounded-md border border-navy/10 bg-white p-5"
            >
              <p className="text-[15px] text-slate">{result.label}</p>
              <p className="mt-1 font-display text-xl font-bold text-navy">
                {result.value}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-4 border-y border-navy/10 py-6 sm:flex-row sm:justify-between">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy hover:text-green"
            >
              <ArrowLeft className="h-4 w-4" /> {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy hover:text-green"
            >
              {next.title} <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </Section>

      <Section tone="mist">
        <ClientSuccessStories
          stories={related}
          title="Related stories"
          description="More work from the same solutions bucket."
        />
      </Section>

      <Section>
        <CtaBanner />
      </Section>
    </>
  );
}

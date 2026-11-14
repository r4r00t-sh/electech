import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section } from "@/components/ui/Section";
import { PhotoMedia } from "@/components/ui/PhotoMedia";
import { ClientSuccessStories } from "@/components/widgets/ClientSuccessStories";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import {
  getAdjacentStories,
  getPublishedStories,
  getRelatedStories,
  getStoryBySlug,
} from "@/content/stories";
import { storyBucketLabel } from "@/lib/buckets";
import {
  getStoryDisplayImage,
  getStoryGallery,
  getStoryOgImage,
} from "@/lib/media";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/site";

export function generateStaticParams() {
  return getPublishedStories().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story || story.draft) return {};
  return pageMetadata({
    title: story.title,
    description: story.summary,
    path: `/projects/${story.slug}`,
    image: getStoryOgImage(story),
  });
}

function attribution(role: string, company: string) {
  const r = role?.trim() ?? "";
  const c = company?.trim() ?? "";
  if (!c) return r;
  if (r.includes(c)) return r;
  return [r, c].filter(Boolean).join(", ");
}

function showUnverifiedTestimonials() {
  const env = process.env.SHOW_UNVERIFIED_TESTIMONIALS;
  if (env === "true") return true;
  if (env === "false") return false;
  return process.env.NODE_ENV !== "production";
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story || story.draft) notFound();

  const { prev, next } = getAdjacentStories(slug);
  const related = getRelatedStories(story, 3);

  const displayImage = getStoryDisplayImage(story);
  const gallery = getStoryGallery(story.slug);
  const ogSrc = getStoryOgImage(story);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.summary,
    image: `${siteConfig.url}${ogSrc}`,
    author: { "@type": "Organization", name: siteConfig.legalName },
    publisher: { "@type": "Organization", name: siteConfig.legalName },
  };

  const showTestimonial =
    story.testimonial &&
    (story.testimonial.verified || showUnverifiedTestimonials());

  const facts = [
    ["Location", story.location],
    story.sector ? ["Sector", story.sector] : null,
    ["Electech scope", story.scope],
    ["Status", story.status],
    story.client ? ["Client", story.client] : null,
  ].filter(Boolean) as [string, string][];

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
            {storyBucketLabel(story)}
          </p>
          <h1 className="mt-3 max-w-4xl text-[2.75rem] font-bold !text-white md:text-5xl">
            {story.title}
          </h1>
          {story.subtitle ? (
            <p className="mt-3 max-w-3xl text-[17px] font-medium text-white/90">
              {story.subtitle}
            </p>
          ) : null}
        </div>
      </div>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="prose-mep whitespace-pre-line text-slate">
            {story.body.split("\n").map((line, i) => {
              if (!line.trim()) return <br key={i} />;
              return <p key={i}>{line}</p>;
            })}

            {story.highlights?.length ? (
              <div className="not-prose mt-8">
                <h2 className="font-display text-2xl font-bold text-navy">
                  Key Project Highlights
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-dark">
                  {story.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {gallery.length ? (
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

            {showTestimonial && story.testimonial ? (
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
            ) : null}
          </article>

          <aside className="h-fit rounded-md border border-navy/10 bg-mist p-6 lg:sticky lg:top-24">
            <h2 className="font-display text-lg font-bold text-navy">
              Project facts
            </h2>
            <dl className="mt-4 space-y-4 text-[15px]">
              {facts.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-slate">{label}</dt>
                  <dd className="mt-1 font-medium text-navy">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-4 border-y border-navy/10 py-6 sm:flex-row sm:justify-between">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group inline-flex max-w-sm flex-col gap-1 text-[15px] font-semibold text-navy hover:text-green"
            >
              <span className="inline-flex items-center gap-2 text-[13px] font-medium text-slate">
                <ArrowLeft className="h-4 w-4" /> Previous project
              </span>
              <span>{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group inline-flex max-w-sm flex-col gap-1 text-right text-[15px] font-semibold text-navy hover:text-green sm:items-end"
            >
              <span className="inline-flex items-center justify-end gap-2 text-[13px] font-medium text-slate">
                Next project <ArrowRight className="h-4 w-4" />
              </span>
              <span>{next.title}</span>
            </Link>
          ) : null}
        </div>
      </Section>

      {related.length ? (
        <Section tone="mist">
          <ClientSuccessStories
            stories={related}
            title="Related projects"
            description="More Electech projects in related sectors and solution areas."
          />
        </Section>
      ) : null}

      <Section>
        <CtaBanner />
      </Section>
    </>
  );
}

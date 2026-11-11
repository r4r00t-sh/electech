import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { PhotoMedia } from "@/components/ui/PhotoMedia";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { getLatestPosts, getPostBySlug, posts } from "@/content/posts";
import { getBlogDisplayImage } from "@/lib/media";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const cover = getBlogDisplayImage(post.slug);
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${post.slug}`,
    image: cover.src || undefined,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const cover = getBlogDisplayImage(post.slug);
  const related = getLatestPosts(4).filter((p) => p.slug !== post.slug).slice(0, 2);
  const shareUrl = encodeURIComponent(`${siteConfig.url}/insights/${post.slug}`);
  const shareText = encodeURIComponent(post.title);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            author: { "@type": "Person", name: post.author },
            image: cover.src ? `${siteConfig.url}${cover.src}` : undefined,
          },
          breadcrumbSchema([
            { name: "Insights", path: "/insights" },
            { name: post.title, path: `/insights/${post.slug}` },
          ]),
        ]}
      />
      <PageHero
        title={post.title}
        intro={post.excerpt}
        media={cover}
        crumbs={[
          { label: "Insights", href: "/insights" },
          { label: post.title },
        ]}
      />
      <Section>
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate">
          <span className="rounded-full bg-mist px-3 py-1 font-semibold text-navy">
            {post.category}
          </span>
          <span>{post.author}</span>
          <span>{post.publishedAt}</span>
          <span>{post.readingTime} min read</span>
        </div>
        <article className="prose-mep whitespace-pre-line text-slate">
          {post.body.split("\n").map((line, i) => {
            if (line.startsWith("## ")) {
              return (
                <h2 key={i} className="font-display text-navy">
                  {line.replace("## ", "")}
                </h2>
              );
            }
            if (!line.trim()) return <br key={i} />;
            return <p key={i}>{line}</p>;
          })}
        </article>

        <div className="mt-10 flex flex-wrap gap-3">
          <span className="text-sm font-semibold text-navy">Share:</span>
          <a
            className="text-sm text-slate hover:text-amber"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-sm text-slate hover:text-amber"
            href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          <a
            className="text-sm text-slate hover:text-amber"
            href={`mailto:?subject=${shareText}&body=${shareUrl}`}
          >
            Email
          </a>
        </div>
      </Section>

      {related.length ? (
        <Section tone="mist">
          <h2 className="mb-6 font-display text-2xl font-bold text-navy">
            Related posts
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/insights/${item.slug}`}
                className="group overflow-hidden rounded-md border border-navy/10 bg-white"
              >
                <div className="relative aspect-[16/10]">
                  <PhotoMedia
                    image={getBlogDisplayImage(item.slug)}
                    sizes="50vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-navy transition-colors duration-200 group-hover:text-green">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <Section>
        <CtaBanner />
      </Section>
    </>
  );
}

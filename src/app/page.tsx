import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  Hammer,
  MessageSquare,
  PenTool,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { PhotoMedia } from "@/components/ui/PhotoMedia";
import { HeroSlider } from "@/components/home/HeroSlider";
import { ClientSuccessStories } from "@/components/widgets/ClientSuccessStories";
import { TestimonialsBanner } from "@/components/widgets/TestimonialsBanner";
import { ClientsMarquee } from "@/components/clients/ClientsMarquee";
import { getFeaturedClients } from "@/content/clients";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { BUCKETS } from "@/lib/buckets";
import {
  homeBlogImages,
  homeBucketImages,
  homeSectorImages,
  homeWhyImage,
} from "@/lib/media";
import { resolveHeroSlides } from "@/lib/hero-slides";
import { siteConfig } from "@/content/site";
import { getFeaturedStories } from "@/content/stories";
import { getFeaturedTestimonials } from "@/content/testimonials";
import { getLatestPosts } from "@/content/posts";
import { aboutContent } from "@/content/about";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "MEP Contractor Dubai",
  description: siteConfig.description,
  image: "/images/heroes/hero-02-construction-site-workers.jpg",
  path: "/",
});

const process = aboutContent.visionMission.process;
const processIcons = [MessageSquare, PenTool, Hammer, ClipboardList, Wrench];

export default function HomePage() {
  const stories = getFeaturedStories(3);
  const testimonials = getFeaturedTestimonials(3);
  const posts = getLatestPosts(3);
  const heroSlides = resolveHeroSlides();
  const [featuredBucket, ...restBuckets] = BUCKETS;

  return (
    <>
      {/* Full-bleed photo hero */}
      <section className="relative overflow-hidden bg-[#0a1428]">
        <div className="relative min-h-[70vh]">
          <HeroSlider slides={heroSlides} />
          <div className="pointer-events-none absolute inset-0 z-[1] photo-scrim-left" />
          <div className="container-site relative z-[2] flex min-h-[70vh] flex-col justify-center py-16 md:py-20">
            <h1 className="max-w-3xl text-[2.75rem] font-bold leading-[1.08] !text-white md:text-[3.5rem] lg:text-[4rem]">
              {siteConfig.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-[17px] text-white/90 md:text-lg">
              One-stop mechanical, electrical, plumbing and fire safety
              contractor with 12+ years delivering precision work across the UAE.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/solutions">Explore Our Solutions</Button>
              <Button href="/contact" variant="outline">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Full-width navy stats strip */}
        <div className="relative z-[2] bg-navy">
          <div className="container-site grid grid-cols-2 md:grid-cols-4">
            {siteConfig.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-4 py-8 md:px-6 ${
                  i < siteConfig.stats.length - 1
                    ? "md:border-r md:border-white/15"
                    : ""
                } ${i % 2 === 0 ? "border-r border-white/15 md:border-r" : ""} ${
                  i < 2 ? "border-b border-white/15 md:border-b-0" : ""
                }`}
              >
                <p className="font-display text-4xl font-bold !text-white md:text-5xl">
                  {"placeholder" in stat && stat.value === 0 ? (
                    <span className="text-[15px] font-semibold text-white/70">
                      {stat.placeholder}
                    </span>
                  ) : (
                    <>
                      {stat.prefix}
                      {stat.value}
                      {stat.suffix}
                    </>
                  )}
                </p>
                <p className="mt-2 text-[15px] text-white/75">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asymmetric solutions — MEP spans both rows */}
      <Section>
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-[2.5rem] font-bold text-navy md:text-[2.75rem]">
            Five capabilities. One accountable team.
          </h2>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy hover:text-green"
          >
            All solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-2">
          {featuredBucket ? (
            <FadeIn className="lg:row-span-2">
              <Link
                href={featuredBucket.href}
                className="group relative block h-full min-h-[420px] overflow-hidden rounded-md lg:min-h-full"
              >
                <PhotoMedia
                  image={homeBucketImages[featuredBucket.id]}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 photo-scrim" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3 className="font-display text-2xl font-bold !text-white md:text-3xl">
                    {featuredBucket.label}
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] text-white/90">
                    {featuredBucket.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-white">
                    View solution <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ) : null}

          {restBuckets.map((bucket, i) => (
            <FadeIn key={bucket.id} delay={i * 0.04}>
              <Link
                href={bucket.href}
                className="group flex h-full flex-col overflow-hidden rounded-md border border-navy/10 bg-white"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <PhotoMedia
                    image={homeBucketImages[bucket.id]}
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className={
                      homeBucketImages[bucket.id].placeholder
                        ? undefined
                        : "transition duration-500 group-hover:scale-105"
                    }
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-display text-lg font-bold text-navy">
                    {bucket.short}
                  </h3>
                  <p className="mt-1 flex-1 text-[15px] text-slate-dark">
                    {bucket.summary}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[15px] font-semibold text-navy group-hover:text-green">
                    Explore <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Split image / text — natural photo, no tint */}
      <section className="bg-mist">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-[520px]">
            <PhotoMedia image={homeWhyImage} sizes="50vw" />
          </div>
          <div className="section-pad px-6 md:px-10 lg:px-14">
            <h2 className="text-[2.5rem] font-bold text-navy md:text-[2.75rem]">
              Confidence built into every programme
            </h2>
            <p className="mt-4 max-w-xl text-[17px] text-slate-dark">
              Precision, on-time delivery, quality materials, transparent weekly
              reporting, safety and sustainability.
            </p>
            <ul className="mt-8 space-y-4">
              {aboutContent.whyChooseUs.points.slice(0, 4).map((point) => (
                <li key={point.title} className="border-l-2 border-green pl-4">
                  <h3 className="font-display text-[17px] font-bold text-navy">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-[15px] text-slate-dark">
                    {point.description}
                  </p>
                </li>
              ))}
            </ul>
            <Button href="/about/why-choose-us" className="mt-8" variant="ghost">
              Why choose ElecTech
            </Button>
          </div>
        </div>
      </section>

      {/* Process — stronger presence */}
      <section className="bg-mist">
        <div className="container-site section-pad">
          <h2 className="mb-10 max-w-xl text-[2.5rem] font-bold text-navy md:text-[2.75rem]">
            From consult to maintain
          </h2>
          <ol className="relative grid gap-8 md:grid-cols-5 md:gap-5">
            <div
              className="pointer-events-none absolute left-[10%] right-[10%] top-7 hidden h-px bg-navy/20 md:block"
              aria-hidden
            />
            {process.map((step, i) => {
              const Icon = processIcons[i]!;
              return (
                <li key={step.title} className="relative text-center md:text-left">
                  <span className="relative z-[1] mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green text-white md:mx-0">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <p className="mt-4 font-display text-[14px] font-bold text-green">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-slate-dark">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <Section>
        <ClientSuccessStories
          stories={stories}
          excludeSrcs={[
            homeBucketImages.mep.src,
            homeBucketImages["mechanical-plumbing"].src,
            homeBucketImages.electrical.src,
            homeBucketImages["fire-protection"].src,
            homeBucketImages.maintenance.src,
            homeWhyImage.src,
            ...homeSectorImages.map((s) => s.image.src),
            ...homeBlogImages.map((img) => img.src),
          ].filter(Boolean)}
        />
      </Section>

      <TestimonialsBanner items={testimonials} />

      {/* Sectors — 8 image tiles */}
      <Section>
        <h2 className="mb-8 text-[2.5rem] font-bold text-navy md:text-[2.75rem]">
          Sectors we serve across the UAE
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {homeSectorImages.map((sector) => (
            <div
              key={sector.label}
              className="group relative aspect-[4/3] overflow-hidden rounded-md"
            >
              <PhotoMedia image={sector.image} sizes="25vw" />
              <div className="pointer-events-none absolute inset-0 photo-scrim" />
              <p className="absolute inset-x-0 bottom-0 p-4 font-display text-[16px] font-bold !text-white">
                {sector.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <ClientsMarquee clients={getFeaturedClients()} />
      </Section>

      <section className="border-y border-navy/10 bg-white">
        <div className="container-site py-10">
          <h2 className="font-display text-2xl font-bold text-navy">
            Certifications
          </h2>
          <p className="mt-2 text-[15px] text-slate-dark">
            ISO 9001, ISO 14001 and ISO 45001 — quality, environmental and
            occupational health &amp; safety management systems.
          </p>
          <div className="relative mx-auto mt-6 aspect-[806/372] max-w-3xl overflow-hidden rounded-md border border-navy/10 bg-white">
            <PhotoMedia
              image={{
                src: "/images/certs/iso-board.jpg",
                alt: "ISO 9001, ISO 14001 and ISO 45001 certifications",
              }}
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <Section>
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-[2.5rem] font-bold text-navy md:text-[2.75rem]">
            Latest insights
          </h2>
          <Link
            href="/insights"
            className="text-[15px] font-semibold text-navy hover:text-green"
          >
            View all
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group overflow-hidden rounded-md border border-navy/10 bg-white"
            >
              <div className="relative aspect-[16/10]">
                <PhotoMedia
                  image={
                    homeBlogImages[i] ?? {
                      src: "/images/pages/electrical-installation-work.jpg",
                      alt: post.title,
                    }
                  }
                  sizes="33vw"
                />
              </div>
              <div className="p-4">
                <p className="text-[14px] font-semibold text-green">
                  {post.category}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-navy transition-colors duration-200 group-hover:text-green">
                  {post.title}
                </h3>
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

import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { PhotoMedia } from "@/components/ui/PhotoMedia";
import { BUCKETS } from "@/lib/buckets";
import { homeBucketImages, homeWhyImage } from "@/lib/media";
import { resolveHeroSlides } from "@/lib/hero-slides";
import { siteConfig } from "@/content/site";
import { aboutContent } from "@/content/about";
import { getFeaturedStories } from "@/content/stories";
import { pageMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Electech MEP Contractor Dubai | Electrical, HVAC & Plumbing",
  description:
    "MEP installation, upgrades and maintenance in Dubai for villas, offices, retail and hospitality.",
  image: "/images/heroes/hero-02-electrical-installation.jpg",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  const stories = getFeaturedStories(3);
  const hero = resolveHeroSlides()[0]!;
  const [featuredBucket, ...restBuckets] = BUCKETS;

  return (
    <>
      <section className="relative overflow-hidden bg-[#0a1428]">
        <div className="relative min-h-[70vh]">
          <div className="absolute inset-0">
            <PhotoMedia image={hero} priority sizes="100vw" />
          </div>
          <div className="pointer-events-none absolute inset-0 z-[1] photo-scrim-left" />
          <div className="container-site relative z-[2] flex min-h-[70vh] flex-col justify-center py-16 md:py-20">
            <h1 className="max-w-3xl text-[2.75rem] font-bold leading-[1.08] !text-white md:text-[3.5rem] lg:text-[4rem]">
              {siteConfig.tagline}
            </h1>
            <p className="mt-4 text-[15px] font-semibold uppercase tracking-wide text-green md:text-base">
              {siteConfig.taglineSupport}
            </p>
            <p className="mt-5 max-w-xl text-[17px] text-white/90 md:text-lg">
              Electech delivers dependable MEP installation, system upgrades and
              maintenance services for commercial offices, residential villas,
              retail and hospitality projects across the UAE.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/solutions">Explore Our Services</Button>
              <Button href="/contact" variant="outline">
                Request a Quotation
              </Button>
            </div>
            <p className="mt-8 text-[14px] font-semibold tracking-wide text-white/80">
              ISO 9001 <span className="mx-2 text-white/40">|</span> ISO 14001{" "}
              <span className="mx-2 text-white/40">|</span> ISO 45001
            </p>
          </div>
        </div>
      </section>

      <Section>
        <h2 className="mb-8 text-[2.5rem] font-bold text-navy md:text-[2.75rem]">
          Choose a path
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-md border border-navy/10 bg-mist p-6 md:p-8">
            <p className="text-[14px] font-semibold text-green">
              For Main Contractors &amp; Fit-Out Teams
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-navy">
              Commercial MEP Partner
            </h3>
            <p className="mt-3 text-slate-dark">
              Coordinated mechanical, electrical and plumbing works for new
              projects, renovations and system upgrades.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/solutions/mep">Integrated MEP</Button>
              <Button href="/projects" variant="ghost">
                Selected projects
              </Button>
            </div>
          </div>
          <div className="rounded-md border border-navy/10 bg-mist p-6 md:p-8">
            <p className="text-[14px] font-semibold text-green">
              For Villa Owners
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-navy">
              Premium Villa Systems &amp; Maintenance
            </h3>
            <p className="mt-3 text-slate-dark">
              Architectural lighting, electrical upgrades, water filtration,
              pumps, plumbing and specialist provisions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/solutions/mechanical-plumbing">
                Mechanical &amp; Plumbing
              </Button>
              <Button href="/solutions/maintenance" variant="ghost">
                Maintenance
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-[2.5rem] font-bold text-navy md:text-[2.75rem]">
            Five Capabilities. One Coordinated Team.
          </h2>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy hover:text-green"
          >
            All services <ArrowRight className="h-4 w-4" />
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
                    Integrated MEP
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
                    className="transition duration-500 group-hover:scale-105"
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

      <Section>
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-[2.5rem] font-bold text-navy md:text-[2.75rem]">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy hover:text-green"
          >
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/projects/${story.slug}`}
              className="group overflow-hidden rounded-md border border-navy/10 bg-white"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-navy">
                <PhotoMedia
                  image={{
                    src: story.heroImage || "",
                    alt: story.heroAlt,
                    placeholder: !story.hasVerifiedPhoto,
                    bucket: story.primaryBucket,
                  }}
                  sizes="33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-[14px] font-semibold text-green">
                  {story.location}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-navy group-hover:text-green">
                  {story.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-[15px] text-slate-dark">
                  {story.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <section className="bg-mist">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-[520px]">
            <PhotoMedia image={homeWhyImage} sizes="50vw" />
          </div>
          <div className="section-pad px-6 md:px-10 lg:px-14">
            <h2 className="text-[2.5rem] font-bold text-navy md:text-[2.75rem]">
              Why Clients Work With Electech
            </h2>
            <p className="mt-4 max-w-xl text-[17px] text-slate-dark">
              {aboutContent.homeWhy.intro}
            </p>
            <ul className="mt-8 space-y-4">
              {aboutContent.homeWhy.points.map((point) => (
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
          </div>
        </div>
      </section>

      <Section>
        <div className="rounded-md bg-navy px-6 py-10 md:px-10 md:py-12">
          <h2 className="font-display text-2xl font-bold !text-white md:text-3xl">
            Planning an MEP Project?
          </h2>
          <p className="mt-3 max-w-2xl text-white/75">
            From a villa water-system upgrade to a commercial office MEP
            installation, our team can review your requirements and propose a
            practical scope of work.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact">Request a Quotation</Button>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <a
              href={whatsappLink(siteConfig.whatsappTel)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

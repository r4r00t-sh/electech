import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PhotoMedia } from "@/components/ui/PhotoMedia";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { BUCKETS } from "@/lib/buckets";
import { homeBucketImages, pageHeroes } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Solutions",
  description:
    "MEP, mechanical and plumbing, electrical, fire protection support and maintenance services from Electech in Dubai.",
  image: "/images/pages/mep-industrial-systems.jpg",
  path: "/solutions",
});

export default function SolutionsLandingPage() {
  return (
    <>
      <PageHero
        media={pageHeroes.solutions}
        title="Our Solutions"
        intro="Mechanical, electrical, plumbing and maintenance services, delivered through five coordinated service areas."
        crumbs={[{ label: "Our Solutions" }]}
      />
      <Section>
        <SectionHeading title="Choose a capability" />
        <div className="grid gap-6">
          {BUCKETS.map((bucket) => (
            <Link
              key={bucket.id}
              href={bucket.href}
              className="group grid gap-4 overflow-hidden rounded-[var(--radius-card)] border border-navy/8 bg-mist transition hover:bg-white hover:shadow-[var(--shadow-card)] md:grid-cols-[200px_1fr_auto] md:items-center"
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:h-full md:min-h-[140px]">
                <PhotoMedia
                  image={homeBucketImages[bucket.id]}
                  sizes="(max-width: 768px) 100vw, 200px"
                  className="transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-6 pb-2 md:py-6 md:pl-2 md:pr-0">
                <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
                  {bucket.label}
                </h2>
                <p className="mt-2 max-w-3xl text-slate">{bucket.summary}</p>
              </div>
              <span className="inline-flex items-center gap-2 px-6 pb-6 text-sm font-semibold text-navy group-hover:text-amber md:px-8 md:pb-0">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
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

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { BUCKETS } from "@/lib/buckets";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Our Solutions",
  description:
    "MEP, mechanical and plumbing, electrical, fire protection and maintenance services from ElecTech MEP Dubai.",
  image: "/images/pages/solutions-fabrication.jpg",
  path: "/solutions",
});

export default function SolutionsLandingPage() {
  return (
    <>
      <PageHero
        media={pageHeroes.solutions}
        title="Our Solutions"
        intro="Five service buckets covering the full electromechanical lifecycle — from design-led installation to maintenance."
        crumbs={[{ label: "Our Solutions" }]}
      />
      <Section>
        <SectionHeading
          title="Choose a capability"
          description="Each bucket links to focused service pages with stories and testimonials from related projects."
        />
        <div className="grid gap-6">
          {BUCKETS.map((bucket) => (
            <Link
              key={bucket.id}
              href={bucket.href}
              className="group grid gap-4 rounded-[var(--radius-card)] border border-navy/8 bg-mist p-6 transition hover:bg-white hover:shadow-[var(--shadow-card)] md:grid-cols-[1fr_auto] md:items-center md:p-8"
            >
              <div>
                <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
                  {bucket.label}
                </h2>
                <p className="mt-2 max-w-3xl text-slate">{bucket.summary}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-amber">
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

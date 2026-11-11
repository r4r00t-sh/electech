import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { aboutContent } from "@/content/about";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Why Choose Us",
  description:
    "Why fit-out firms, developers and facility managers choose ElecTech MEP in Dubai.",
  path: "/about/why-choose-us",
});

export default function WhyChooseUsPage() {
  const content = aboutContent.whyChooseUs;
  return (
    <>
      <PageHero
        title={content.title}
        intro={content.intro}
        crumbs={[
          { label: "About Us", href: "/about" },
          { label: "Why Choose Us" },
        ]}
      />
      <Section>
        <SectionHeading title="What sets us apart" />
        <div className="grid gap-5 md:grid-cols-2">
          {content.points.map((point) => (
            <div
              key={point.title}
              className="rounded-[var(--radius-card)] border border-navy/8 bg-mist p-6"
            >
              <h2 className="font-display text-xl font-bold text-navy">
                {point.title}
              </h2>
              <p className="mt-2 text-slate">{point.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="mist">
        <CtaBanner />
      </Section>
    </>
  );
}

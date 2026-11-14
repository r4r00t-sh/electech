import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { aboutContent } from "@/content/about";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Why Choose Electech?",
  description:
    "Practical engineering, reliable delivery and accountable service from Electech Electromechanical Works LLC.",
  image: "/images/pages/why-choose-workshop.jpg",
  path: "/about/why-choose-us",
});

export default function WhyChooseUsPage() {
  const content = aboutContent.whyChooseUs;
  return (
    <>
      <PageHero
        media={pageHeroes.whyChoose}
        title={content.title}
        intro={content.subtitle}
        crumbs={[
          { label: "About Us", href: "/about" },
          { label: "Why Choose Us" },
        ]}
      />
      <Section>
        <p className="prose-mep max-w-3xl text-slate-dark">{content.intro}</p>
        <div className="mt-10">
          <SectionHeading title="What sets us apart" />
        </div>
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
        <CtaBanner
          title={content.closing}
          description="Share your project requirements and our team will respond with the appropriate next steps."
          buttonLabel="Request a Quotation"
        />
      </Section>
    </>
  );
}

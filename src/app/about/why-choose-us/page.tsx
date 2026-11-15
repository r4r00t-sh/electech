import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { aboutContent } from "@/content/about";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Why Choose Electech | Practical MEP Delivery",
  description:
    "Electech combines UAE project experience with direct technical involvement, responsive communication and accountable delivery.",
  image: "/images/pages/electrical-installation-work.jpg",
  path: "/about/why-choose-us",
  absoluteTitle: true,
});

export default function WhyChooseUsPage() {
  const content = aboutContent.whyChooseUs;
  return (
    <>
      <PageHero
        media={pageHeroes.whyChoose}
        title={content.title}
        intro={content.intro}
        crumbs={[
          { label: "About Us", href: "/about" },
          { label: "Why Choose Us" },
        ]}
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {content.points.map((point) => (
            <div
              key={point.title}
              className="rounded-md border border-navy/10 bg-mist p-6"
            >
              <h2 className="font-display text-lg font-bold text-navy">
                {point.title}
              </h2>
              <p className="mt-2 text-sm text-slate">{point.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="mist">
        <CtaBanner
          title={content.closing}
          buttonLabel="Request a Quotation"
        />
      </Section>
    </>
  );
}
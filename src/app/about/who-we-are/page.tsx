import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CapabilitiesGrid } from "@/components/about/CapabilitiesGrid";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { aboutContent } from "@/content/about";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Who We Are | Electech MEP Dubai",
  description:
    "Electech provides MEP installation, modification and maintenance across residential, commercial, retail and hospitality environments.",
  image: "/images/pages/electrical-installation-work.jpg",
  path: "/about/who-we-are",
  absoluteTitle: true,
});

export default function WhoWeArePage() {
  const content = aboutContent.whoWeAre;
  return (
    <>
      <PageHero
        media={pageHeroes.whoWeAre}
        title={content.title}
        intro={content.intro}
        crumbs={[
          { label: "About Us", href: "/about" },
          { label: "Who We Are" },
        ]}
      />
      <Section>
        <SectionHeading title="Our Story" />
        <p className="max-w-3xl text-slate-dark">{content.story}</p>
      </Section>
      <Section tone="mist">
        <SectionHeading title="Our Capabilities" />
        <CapabilitiesGrid />
      </Section>
      <Section>
        <SectionHeading title="How We Work" />
        <p className="max-w-3xl text-slate-dark">{content.howWeWork}</p>
      </Section>
      <Section tone="mist">
        <SectionHeading title="Our Commitment" />
        <p className="max-w-3xl text-slate-dark">{content.commitment}</p>
      </Section>
      <Section>
        <CtaBanner
          title={content.ctaTitle}
          buttonLabel="Request a Quotation"
        />
      </Section>
    </>
  );
}

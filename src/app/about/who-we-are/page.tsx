import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
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
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.capabilities.map((item) => (
            <li
              key={item.title}
              className="rounded-md border border-navy/10 bg-white p-5"
            >
              <h3 className="font-display text-lg font-bold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate">{item.description}</p>
            </li>
          ))}
        </ul>
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

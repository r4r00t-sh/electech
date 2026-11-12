import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { aboutContent } from "@/content/about";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Who We Are",
  description:
    "About ElecTech Electromechanical Works LLC — MEP contractor Dubai operating since 2012.",
  image: "/images/pages/who-we-are-construction.jpg",
  path: "/about/who-we-are",
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
        <div className="space-y-10">
          {content.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
                {section.heading}
              </h2>
              <div className="prose-mep mt-4 space-y-4 text-slate">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
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

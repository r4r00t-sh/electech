import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { aboutContent } from "@/content/about";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Who We Are",
  description:
    "Electech Electromechanical Works LLC is an established Dubai-based MEP contractor with more than 14 years of UAE operations.",
  image: "/images/pages/electrical-installation-work.jpg",
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
              {section.paragraphs.length ? (
                <div className="prose-mep mt-4 space-y-4 text-slate">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              {"bullets" in section && section.bullets?.length ? (
                <ul className="mt-4 space-y-3">
                  {section.bullets.map((item) => (
                    <li key={item.title} className="text-slate-dark">
                      <span className="font-semibold text-navy">
                        {item.title}:
                      </span>{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </Section>
      <Section tone="mist">
        <CtaBanner
          title={content.ctaTitle}
          description="Share your project location, scope, drawings or service requirements."
          buttonLabel="Request a Quotation"
        />
      </Section>
    </>
  );
}

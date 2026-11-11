import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { aboutContent } from "@/content/about";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Who We Are",
  description:
    "About ElecTech Electromechanical Works LLC — MEP contractor Dubai operating since 2012.",
  path: "/about/who-we-are",
});

export default function WhoWeArePage() {
  const content = aboutContent.whoWeAre;
  return (
    <>
      <PageHero
        title={content.title}
        intro={content.intro}
        crumbs={[
          { label: "About Us", href: "/about" },
          { label: "Who We Are" },
        ]}
      />
      <Section>
        <div className="prose-mep whitespace-pre-line text-slate">
          {content.body}
        </div>
      </Section>
      <Section tone="mist">
        <CtaBanner />
      </Section>
    </>
  );
}

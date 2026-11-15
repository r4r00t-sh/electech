import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { aboutContent } from "@/content/about";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Vision, Mission & Values | Electech",
  description:
    "Electech vision, mission and values — accountability, technical excellence and long-term client relationships.",
  image: "/images/pages/vision-site-plans.jpg",
  path: "/about/vision-mission",
  absoluteTitle: true,
});

export default function VisionMissionPage() {
  const content = aboutContent.visionMission;
  return (
    <>
      <PageHero
        media={pageHeroes.vision}
        title={content.title}
        crumbs={[
          { label: "About Us", href: "/about" },
          { label: "Vision & Mission" },
        ]}
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-md border border-navy/8 bg-mist p-6">
            <h2 className="font-display text-2xl font-bold text-navy">Vision</h2>
            <p className="mt-3 text-slate">{content.vision}</p>
          </div>
          <div className="rounded-md border border-navy/8 bg-mist p-6">
            <h2 className="font-display text-2xl font-bold text-navy">
              Mission
            </h2>
            <p className="mt-3 text-slate">{content.mission}</p>
          </div>
        </div>
      </Section>
      <Section tone="mist">
        <SectionHeading title="Values" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {content.values.map((value) => (
            <div
              key={value.title}
              className="rounded-md border border-navy/8 bg-white p-5"
            >
              <h3 className="font-display text-lg font-bold text-navy">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-slate">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <CtaBanner
          title="Work With a Dependable MEP Partner"
          buttonLabel="Request a Quotation"
        />
      </Section>
    </>
  );
}

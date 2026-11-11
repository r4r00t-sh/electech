import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { aboutContent } from "@/content/about";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Vision and Mission",
  description:
    "ElecTech MEP vision, mission, values, expertise and delivery process.",
  path: "/about/vision-mission",
});

export default function VisionMissionPage() {
  const content = aboutContent.visionMission;
  return (
    <>
      <PageHero
        title={content.title}
        intro="The principles and process that guide every ElecTech MEP engagement."
        crumbs={[
          { label: "About Us", href: "/about" },
          { label: "Vision and Mission" },
        ]}
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[var(--radius-card)] border border-navy/8 bg-mist p-6">
            <h2 className="font-display text-2xl font-bold text-navy">Vision</h2>
            <p className="mt-3 text-slate">{content.vision}</p>
          </div>
          <div className="rounded-[var(--radius-card)] border border-navy/8 bg-mist p-6">
            <h2 className="font-display text-2xl font-bold text-navy">Mission</h2>
            <p className="mt-3 text-slate">{content.mission}</p>
          </div>
        </div>
      </Section>
      <Section tone="mist">
        <SectionHeading title="Our values" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {content.values.map((value) => (
            <div
              key={value.title}
              className="rounded-[var(--radius-card)] border border-navy/8 bg-white p-5"
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
        <SectionHeading title="Our expertise" />
        <div className="prose-mep whitespace-pre-line text-slate">
          {content.expertise}
        </div>
      </Section>
      <Section tone="mist">
        <SectionHeading title="Our process" />
        <ol className="grid gap-4 md:grid-cols-5">
          {content.process.map((step, i) => (
            <li
              key={step.title}
              className="rounded-[var(--radius-card)] border border-navy/8 bg-white p-5"
            >
              <span className="text-xs font-semibold text-amber">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section>
        <CtaBanner />
      </Section>
    </>
  );
}

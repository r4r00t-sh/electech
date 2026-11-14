import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { aboutContent } from "@/content/about";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Vision, Mission & Values",
  description:
    "Electech Electromechanical Works LLC vision, mission, core values and delivery process.",
  image: "/images/pages/vision-site-plans.jpg",
  path: "/about/vision-mission",
});

export default function VisionMissionPage() {
  const content = aboutContent.visionMission;
  return (
    <>
      <PageHero
        media={pageHeroes.vision}
        title={content.title}
        intro="Dependable engineering solutions, professional accountability and long-term client relationships."
        crumbs={[
          { label: "About Us", href: "/about" },
          { label: "Vision and Mission" },
        ]}
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[var(--radius-card)] border border-navy/8 bg-mist p-6">
            <h2 className="font-display text-2xl font-bold text-navy">
              Our Vision
            </h2>
            <p className="mt-3 text-slate">{content.vision}</p>
          </div>
          <div className="rounded-[var(--radius-card)] border border-navy/8 bg-mist p-6">
            <h2 className="font-display text-2xl font-bold text-navy">
              Our Mission
            </h2>
            <p className="mt-3 text-slate">{content.mission}</p>
          </div>
        </div>
      </Section>
      <Section tone="mist">
        <SectionHeading title="Our Core Values" />
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
        <SectionHeading title="Our Expertise" />
        <div className="prose-mep space-y-4 text-slate">
          {content.expertise.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </Section>
      <Section tone="mist">
        <SectionHeading title="How We Deliver" />
        <ol className="grid gap-4 md:grid-cols-5">
          {content.process.map((step, i) => (
            <li
              key={step.title}
              className="rounded-[var(--radius-card)] border border-navy/8 bg-white p-5"
            >
              <span className="text-xs font-semibold text-green">
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
        <SectionHeading title="Our Commitment" />
        <p className="prose-mep max-w-3xl text-slate-dark">
          {content.commitment}
        </p>
      </Section>
      <Section tone="mist">
        <CtaBanner
          title="Work With a Dependable MEP Partner"
          buttonLabel="Request a Quotation"
        />
      </Section>
    </>
  );
}

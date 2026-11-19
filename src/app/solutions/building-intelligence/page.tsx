import {
  Activity,
  Briefcase,
  Building2,
  Cpu,
  Droplets,
  Home,
  Leaf,
  Shield,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { buildingIntelligenceContent as content } from "@/content/building-intelligence";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Building Intelligence | Electech Dubai",
  description:
    "Intelligent building solutions from Electech — smart homes, BMS, energy, water, security, HVAC wellbeing and predictive maintenance in the UAE.",
  image: "/images/pages/elv-server-racks.jpg",
  path: "/solutions/building-intelligence",
  absoluteTitle: true,
});

const icons: Record<(typeof content.solutions)[number]["icon"], LucideIcon> = {
  home: Home,
  building: Building2,
  leaf: Leaf,
  droplets: Droplets,
  shield: Shield,
  wind: Wind,
  briefcase: Briefcase,
  activity: Activity,
  cpu: Cpu,
};

export default function BuildingIntelligencePage() {
  return (
    <>
      <PageHero
        media={pageHeroes.buildingIntelligence}
        title={content.title}
        intro={content.tagline}
        crumbs={[
          { label: "Our Solutions", href: "/solutions" },
          { label: "Building Intelligence" },
        ]}
      />

      <Section>
        <p className="text-[15px] font-semibold text-green">{content.support}</p>
        <div className="mt-5 max-w-3xl space-y-4 text-[17px] text-slate-dark">
          {content.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading title={content.solutionsHeading} />
        <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.solutions.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li
                key={item.number}
                className="flex h-full flex-col rounded-[10px] border border-navy/12 bg-white p-5 shadow-[0_2px_8px_rgba(32,32,96,0.05)] md:p-6"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-green">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="font-display text-[15px] font-bold tracking-wide text-navy/45">
                    {item.number}
                  </span>
                </div>
                <span className="mb-3 block h-0.5 w-8 bg-green" aria-hidden />
                <h3 className="font-display text-[20px] font-bold leading-snug text-navy md:text-[22px]">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-slate-dark">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section>
        <SectionHeading title={content.processHeading} />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.process.map((step, index) => (
            <li
              key={step.title}
              className="rounded-[10px] border border-navy/12 bg-mist p-5 md:p-6"
            >
              <p className="font-display text-[14px] font-bold tracking-wide text-green">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-base text-slate-dark">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="mist">
        <SectionHeading title={content.partnershipsHeading} />
        <div className="max-w-3xl space-y-4 text-[17px] text-slate-dark">
          {content.partnerships.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title={content.audiencesHeading} />
        <ul className="grid gap-4 md:grid-cols-3">
          {content.audiences.map((item) => (
            <li
              key={item.title}
              className="rounded-[10px] border border-navy/12 bg-white p-5 md:p-6"
            >
              <h3 className="font-display text-lg font-bold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-base text-slate-dark">{item.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist">
        <CtaBanner
          title={content.ctaHeading}
          description={content.ctaBody}
          buttonLabel="Request a Quotation"
        />
        <p className="mt-6 text-center font-display text-lg font-bold text-navy">
          {content.closingTagline}
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-center text-[14px] leading-relaxed text-slate">
          {content.disclaimer}
        </p>
      </Section>
    </>
  );
}

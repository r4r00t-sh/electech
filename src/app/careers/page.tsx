import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CareersForm } from "@/components/careers/CareersForm";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Careers at Electech Dubai",
  description:
    "Explore careers and opportunities in mechanical, electrical and plumbing services.",
  image: "/images/pages/who-we-are-construction.jpg",
  path: "/careers",
  absoluteTitle: true,
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        media={pageHeroes.careers}
        title="Build Your Career with Electech"
        intro="We welcome applications from professionals who value workmanship, safety, teamwork and accountability in MEP delivery. Current vacancies will be published here when available."
        crumbs={[{ label: "Careers" }]}
      />

      <Section>
        <p className="max-w-3xl text-slate-dark">
          We welcome applications from motivated professionals and skilled
          tradespeople interested in mechanical, electrical, plumbing and
          building-services work. Opportunities depend on current project
          requirements and vacancies.
        </p>

        <div className="mt-10 rounded-md border border-navy/10 bg-mist p-6">
          <h2 className="font-display text-xl font-bold text-navy">
            Current openings
          </h2>
          <p className="mt-2 text-slate-dark">No current vacancies listed.</p>
        </div>

        <div className="mt-12">
          <SectionHeading
            title="Applications"
            description="Please send your CV with your trade, experience and contact details using the application form below."
          />
          <CareersForm />
        </div>
      </Section>

      <Section tone="mist">
        <CtaBanner
          title="Contact Electech"
          buttonLabel="Contact Electech"
        />
      </Section>
    </>
  );
}

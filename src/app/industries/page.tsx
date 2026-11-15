import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Industries Served | Electech MEP Dubai",
  description:
    "MEP services for offices, villas, retail, F&B and hospitality environments.",
  image: "/images/pages/projects-office-interior.jpg",
  path: "/industries",
  absoluteTitle: true,
});

/** Placeholder shell for Batch 1 navigation — full industries content lands in Batch 2. */
export default function IndustriesPage() {
  return (
    <>
      <PageHero
        media={pageHeroes.projects}
        title="MEP Solutions for the Spaces People Use Every Day"
        intro="Electech supports building-services installations, modifications and maintenance across commercial offices, premium residences, retail premises and hospitality environments."
        crumbs={[{ label: "Industries" }]}
      />
      <Section>
        <p className="max-w-3xl text-slate-dark">
          Industry cards and service cross-links are being finalised in the next
          content batch. Meanwhile, explore our{" "}
          <a href="/solutions" className="font-semibold text-navy hover:text-green">
            services
          </a>{" "}
          or{" "}
          <a href="/contact" className="font-semibold text-navy hover:text-green">
            request a quotation
          </a>
          .
        </p>
      </Section>
      <Section tone="mist">
        <CtaBanner
          title="Discuss Your Project"
          buttonLabel="Request a Quotation"
        />
      </Section>
    </>
  );
}

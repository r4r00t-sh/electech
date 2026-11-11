import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { media } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Certifications",
  description:
    "ElecTech MEP certifications — official certificates to be supplied by the client.",
  path: "/about/certifications",
});

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        title="Certifications"
        intro="Quality, safety and compliance credentials that support our delivery across the UAE."
        image={media.electricalWide.src}
        imageAlt={media.electricalWide.alt}
        crumbs={[
          { label: "About Us", href: "/about" },
          { label: "Certifications" },
        ]}
      />
      <Section>
        <h2 className="font-display text-2xl font-bold text-navy">
          Certificate library
        </h2>
        <p className="mt-3 max-w-2xl text-slate-dark">
          Content must be provided. ISO and authority certificates will be
          published here once the client supplies official files.
        </p>
        <div className="mt-8 rounded-md border border-dashed border-navy/20 bg-mist px-6 py-10 text-center">
          <p className="font-display text-lg font-semibold text-navy">
            [CLIENT TO PROVIDE]
          </p>
          <p className="mt-2 text-sm text-slate">
            Upload certificate PDFs or badge images to replace this placeholder
            row.
          </p>
        </div>
      </Section>
      <Section tone="mist">
        <CtaBanner />
      </Section>
    </>
  );
}

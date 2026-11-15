import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { PhotoMedia } from "@/components/ui/PhotoMedia";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import {
  certifications,
  certificationsBoard,
} from "@/content/certifications";
import { pageHeroes } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Commitment to Quality, Environment & Safety | Electech",
  description:
    "Electech confirms ISO 9001, ISO 14001 and ISO 45001 certifications.",
  image: "/images/certs/iso-board.jpg",
  path: "/about/certifications",
});

export default function CertificationsPage() {
  const items = [...certifications].sort((a, b) => a.order - b.order);

  return (
    <>
      <PageHero
        title="Commitment to Quality, Environment & Safety"
        intro="Electech confirms ISO 9001, ISO 14001 and ISO 45001 certifications."
        media={pageHeroes.certifications}
        crumbs={[
          { label: "About Us", href: "/about" },
          { label: "Certifications" },
        ]}
      />
      <Section>
        <div className="relative mx-auto aspect-[797/372] max-w-3xl overflow-hidden rounded-md border border-navy/10 bg-white">
          <PhotoMedia
            image={certificationsBoard}
            sizes="(max-width: 768px) 100vw, 720px"
            className="object-contain"
          />
        </div>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((cert) => (
            <li
              key={cert.id}
              className="rounded-md border border-navy/10 bg-mist p-5"
            >
              <h2 className="font-display text-lg font-bold text-navy">
                {cert.name}
              </h2>
              <p className="mt-2 text-[15px] text-slate-dark">
                {cert.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="mist">
        <CtaBanner />
      </Section>
    </>
  );
}

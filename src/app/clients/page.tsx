import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { ClientsLogoWall } from "@/components/clients/ClientsLogoWall";
import { TestimonialsBanner } from "@/components/widgets/TestimonialsBanner";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import {
  getClientsByRelationship,
  getHiddenClientCount,
  getHiddenClientSectors,
  getVisibleClients,
} from "@/content/clients";
import { getFeaturedTestimonials } from "@/content/testimonials";
import {
  breadcrumbSchema,
  organizationSchema,
  pageMetadata,
} from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Our Clients & Project Relationships",
  description:
    "Electech Electromechanical Works LLC has contributed MEP services to projects involving developers, property owners, main contractors, fit-out companies, hospitality operators and facility management organizations across the UAE.",
  image: "/images/pages/clients-corporate-office.jpg",
  path: "/clients",
});

const RELATIONSHIP_LABELS = {
  "direct customer": "Direct customers",
  "main contractor": "Main contractors",
  "project-associated": "Project-associated organizations",
  unknown: "Project relationships",
} as const;

export default function ClientsPage() {
  const clients = getVisibleClients();
  const grouped = getClientsByRelationship();
  const hiddenCount = getHiddenClientCount();
  const hiddenSectors = getHiddenClientSectors();
  const testimonials = getFeaturedTestimonials();

  const jsonLd = [
    organizationSchema(),
    breadcrumbSchema([{ name: "Our Clients", path: "/clients" }]),
  ];

  const knownGroups = (
    ["direct customer", "main contractor", "project-associated", "unknown"] as const
  ).filter((key) => grouped[key].length > 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        media={pageHeroes.clients}
        title="Our Clients & Project Relationships"
        intro="Trusted Relationships Across the UAE"
        crumbs={[{ label: "Our Clients" }]}
      />

      <Section>
        <div className="prose-mep max-w-3xl space-y-4 text-slate-dark">
          <p>
            Electech has contributed MEP services to projects involving
            recognized developers, property owners, main contractors, interior
            fit-out companies, hospitality operators and facility management
            organizations.
          </p>
          <p>
            Our experience includes both direct appointments and subcontracted
            MEP packages delivered through established project teams.
          </p>
          <p>
            We value these relationships and remain committed to reliable
            execution, responsive communication and long-term collaboration.
          </p>
        </div>

        {hiddenCount > 0 ? (
          <p className="mt-8 text-[15px] text-slate-dark">
            Project relationships across the UAE
            {hiddenSectors.length
              ? ` — sectors include ${hiddenSectors.join(", ")}`
              : ""}
            .
          </p>
        ) : null}

        <div className="mt-10 space-y-12">
          {knownGroups.map((key) => (
            <div key={key}>
              <h2 className="font-display text-xl font-bold text-navy">
                {RELATIONSHIP_LABELS[key]}
              </h2>
              <div className="mt-6">
                <ClientsLogoWall clients={grouped[key]} />
              </div>
            </div>
          ))}
          {!clients.length ? (
            <p className="text-slate-dark">
              Client logos will appear here once publication permissions are
              confirmed.
            </p>
          ) : null}
        </div>
      </Section>

      {testimonials.length ? (
        <Section tone="mist">
          <TestimonialsBanner items={testimonials} />
        </Section>
      ) : null}

      <Section>
        <CtaBanner />
      </Section>
    </>
  );
}

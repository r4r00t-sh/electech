import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { ClientsLogoWall } from "@/components/clients/ClientsLogoWall";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import {
  getClientsByRelationship,
  getHiddenClientCount,
  getVisibleClients,
  filterClientsBySector,
} from "@/content/clients";
import { getFeaturedTestimonials } from "@/content/testimonials";
import { TestimonialsBanner } from "@/components/widgets/TestimonialsBanner";
import {
  breadcrumbSchema,
  organizationSchema,
  pageMetadata,
} from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Our Clients & Project Relationships | Electech",
  description:
    "Electech MEP project relationships across developers, main contractors, fit-out companies and property owners in the UAE.",
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
  const fitOut = filterClientsBySector("Fit-out and Contractors");
  const hiddenCount = getHiddenClientCount();
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
        intro="Trusted Relationships Across the UAE."
        crumbs={[{ label: "Our Clients" }]}
      />

      <Section>
        <div className="prose-mep max-w-3xl space-y-4 text-slate-dark">
          <p>
            Electech has contributed MEP services to projects involving
            recognized developers, property owners, main contractors, interior
            fit-out companies, hospitality operators and facilities
            organizations. Our experience includes both direct appointments and
            subcontracted MEP packages delivered through established project
            teams. We value repeat business and long-term collaboration.
          </p>
          <p className="text-[15px] font-medium text-navy">
            Projects delivered directly and through main contractors.
          </p>
          <p className="text-[15px] text-slate-dark">
            <Link
              href="/about/certifications"
              className="font-semibold text-navy hover:text-green"
            >
              ISO 9001, ISO 14001 and ISO 45001
            </Link>
          </p>
        </div>

        {hiddenCount > 0 ? (
          <p className="mt-8 text-[15px] text-slate-dark">
            Client logos appear here once publication permissions are confirmed.
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

          {fitOut.length &&
          !knownGroups.some((k) =>
            grouped[k].some((c) => c.sector === "Fit-out and Contractors"),
          ) ? (
            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                Fit-out and Contractors
              </h2>
              <div className="mt-6">
                <ClientsLogoWall clients={fitOut} />
              </div>
            </div>
          ) : null}

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
        <div className="mb-6">
          <Link
            href="/projects"
            className="text-[15px] font-semibold text-navy hover:text-green"
          >
            View Projects
          </Link>
        </div>
        <CtaBanner
          title="Discuss a Requirement"
          buttonLabel="Discuss a Requirement"
        />
      </Section>
    </>
  );
}

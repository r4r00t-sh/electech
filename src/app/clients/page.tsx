import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { ClientsLogoWall } from "@/components/clients/ClientsLogoWall";
import { TestimonialsBanner } from "@/components/widgets/TestimonialsBanner";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { getClientsSorted } from "@/content/clients";
import { getFeaturedTestimonials } from "@/content/testimonials";
import {
  breadcrumbSchema,
  organizationSchema,
  pageMetadata,
} from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Clients",
  description:
    "Organisations that trust Electech Electromechanical Works LLC across hospitality, retail, commercial and facility management projects in the UAE.",
  path: "/clients",
});

export default function ClientsPage() {
  const clients = getClientsSorted();
  const testimonials = getFeaturedTestimonials();

  const jsonLd = [organizationSchema(), breadcrumbSchema([
    { name: "Our Clients", path: "/clients" },
  ])];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        title="Our Clients"
        intro="Trusted by leading organisations across the UAE."
        crumbs={[{ label: "Our Clients" }]}
      />

      <Section>
        <p className="text-[15px] text-slate-dark">
          {clients.length} organisations represented below. Filter by sector or
          open a linked project story where available.
        </p>
        <div className="mt-8">
          <ClientsLogoWall clients={clients} />
        </div>
      </Section>

      <Section tone="mist">
        <TestimonialsBanner items={testimonials} />
      </Section>

      <Section>
        <CtaBanner />
      </Section>
    </>
  );
}

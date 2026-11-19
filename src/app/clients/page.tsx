import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ClientLogo } from "@/components/clients/ClientLogo";
import { getVisibleClients } from "@/content/clients";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Our Clients | Electech MEP Dubai",
  description:
    "Organisations Electech has worked with across the UAE — projects delivered directly and through main contractors.",
  image: "/images/pages/clients-corporate-office.jpg",
  path: "/clients",
  absoluteTitle: true,
});

export default function ClientsPage() {
  const clients = getVisibleClients();

  return (
    <>
      <PageHero
        media={pageHeroes.clients}
        title="Our Clients"
        intro="Projects delivered directly and through main contractors."
        crumbs={[{ label: "Our Clients" }]}
      />
      <Section>
        <SectionHeading
          title="Organisations We Work With"
          description="Projects delivered directly and through main contractors."
        />
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {clients.map((client) => (
            <li key={client.slug} className="group h-28">
              <ClientLogo client={client} maxHeight={72} className="h-full" />
            </li>
          ))}
        </ul>
        {!clients.length ? (
          <p className="mt-6 text-slate-dark">
            Client logos appear here once publication permissions are confirmed.
          </p>
        ) : null}
      </Section>
    </>
  );
}

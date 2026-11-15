import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "mep";

export const metadata = pageMetadata({
  title: "MEP Services Dubai | Electech",
  description:
    "Coordinated mechanical, electrical and plumbing installations, upgrades and maintenance.",
  image: "/images/pages/mep-industrial-systems.jpg",
  path: "/solutions/mep",
  absoluteTitle: true,
});

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <ServicePageView
      service={service}
      crumbs={[
        { label: "Services", href: "/solutions" },
        { label: "Integrated MEP" },
      ]}
    />
  );
}

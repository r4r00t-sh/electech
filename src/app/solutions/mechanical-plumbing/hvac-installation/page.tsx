import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "hvac-installation";

export const metadata = pageMetadata({
  title: "HVAC Installation Dubai",
  description:
    "Electech provides HVAC and ventilation installation and maintenance for commercial and residential properties in Dubai.",
  image: "/images/pages/hvac-equipment-detail.jpg",
  path: "/solutions/mechanical-plumbing/hvac-installation",
});

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <ServicePageView
      service={service}
      crumbs={[{ label: "Our Solutions", href: "/solutions" },{ label: "Mechanical and Plumbing", href: "/solutions/mechanical-plumbing" },{ label: "HVAC Installation" }]}
    />
  );
}

import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "mechanical-plumbing";

export const metadata = pageMetadata({
  title: "Mechanical and Plumbing Services",
  description:
    "Electech provides HVAC, ventilation, plumbing, drainage and water-system installation and maintenance for commercial and residential properties in Dubai.",
  image: "/images/pages/mechanical-factory-floor.jpg",
  path: "/solutions/mechanical-plumbing",
});

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <ServicePageView
      service={service}
      crumbs={[{ label: "Our Solutions", href: "/solutions" },{ label: "Mechanical and Plumbing" }]}
    />
  );
}

import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "maintenance";

export const metadata = pageMetadata({
  title: "MEP Maintenance & AMC Dubai | Electech",
  description:
    "Preventive and corrective MEP maintenance for villas, offices and commercial properties.",
  image: "/images/pages/maintenance-workshop.jpg",
  path: "/solutions/maintenance",
  absoluteTitle: true,
});

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <ServicePageView
      service={service}
      crumbs={[{ label: "Our Solutions", href: "/solutions" },{ label: "Maintenance Contract" }]}
    />
  );
}

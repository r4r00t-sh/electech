import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "maintenance";

export const metadata = pageMetadata({
  title: "Maintenance Contract",
  description:
    "Electech provides planned and corrective MEP maintenance and annual maintenance contracts for residential villas and commercial offices in Dubai.",
  image: "/images/pages/maintenance-workshop.jpg",
  path: "/solutions/maintenance",
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

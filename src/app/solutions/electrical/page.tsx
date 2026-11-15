import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "electrical";

export const metadata = pageMetadata({
  title: "Electrical & Lighting Contractor Dubai | Electech",
  description:
    "Power distribution, lighting, DB modifications, EV provisions and ELV containment.",
  image: "/images/pages/electrical-power-infrastructure.jpg",
  path: "/solutions/electrical",
  absoluteTitle: true,
});

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <ServicePageView
      service={service}
      crumbs={[{ label: "Our Solutions", href: "/solutions" },{ label: "Electrical Services" }]}
    />
  );
}

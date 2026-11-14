import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "electrical";

export const metadata = pageMetadata({
  title: "Electrical Services",
  description:
    "Electech undertakes electrical installation, modifications, power distribution, lighting and ELV infrastructure for commercial offices, residential villas, retail and hospitality projects in Dubai.",
  image: "/images/pages/electrical-power-infrastructure.jpg",
  path: "/solutions/electrical",
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

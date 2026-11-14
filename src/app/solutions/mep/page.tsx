import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "mep";

export const metadata = pageMetadata({
  title: "MEP Solutions",
  description:
    "Electech delivers integrated MEP installation, modification, testing and maintenance for commercial offices, residential villas, retail and hospitality projects in Dubai.",
  image: "/images/pages/mep-industrial-systems.jpg",
  path: "/solutions/mep",
});

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <ServicePageView
      service={service}
      crumbs={[{ label: "Our Solutions", href: "/solutions" },{ label: "MEP Solutions" }]}
    />
  );
}

import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "electrical";

export const metadata = pageMetadata({
  title: "Electrical Services",
  description: "Electrical, ELV and solar installation Dubai from ElecTech MEP.",
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

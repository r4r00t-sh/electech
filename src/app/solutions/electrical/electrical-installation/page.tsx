import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "electrical-installation";

export const metadata = pageMetadata({
  title: "Electrical Installation Dubai",
  description: "Electrical installation Dubai — power and distribution by ElecTech MEP.",
  path: "/solutions/electrical/electrical-installation",
});

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <ServicePageView
      service={service}
      crumbs={[{ label: "Our Solutions", href: "/solutions" },{ label: "Electrical Services", href: "/solutions/electrical" },{ label: "Electrical Installation" }]}
    />
  );
}

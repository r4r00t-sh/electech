import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "fire-protection";

export const metadata = pageMetadata({
  title: "Fire Protection and Safety Services",
  description: "Fire alarm installation Dubai and fire fighting systems by ElecTech MEP.",
  path: "/solutions/fire-protection",
});

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <ServicePageView
      service={service}
      crumbs={[{ label: "Our Solutions", href: "/solutions" },{ label: "Fire Protection and Safety" }]}
    />
  );
}

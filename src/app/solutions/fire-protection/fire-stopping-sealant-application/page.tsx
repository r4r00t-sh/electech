import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "fire-stopping-sealant-application";

export const metadata = pageMetadata({
  title: "Fire Stopping Sealant Application",
  description:
    "Electech undertakes installation of specified fire-rated sealant systems as part of commercial, residential and refurbishment projects in Dubai.",
  image: "/images/pages/fire-stopping-interior.jpg",
  path: "/solutions/fire-protection/fire-stopping-sealant-application",
});

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <ServicePageView
      service={service}
      crumbs={[{ label: "Our Solutions", href: "/solutions" },{ label: "Fire Protection", href: "/solutions/fire-protection" },{ label: "Fire Stopping Sealant" }]}
    />
  );
}

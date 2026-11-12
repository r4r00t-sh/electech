import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "solar-power-plant-installation";

export const metadata = pageMetadata({
  title: "Solar Power Plant Installation",
  description: "Solar power plant installation Dubai by ElecTech MEP.",
  image: "/images/pages/solar-rooftop-array.jpg",
  path: "/solutions/electrical/solar-power-plant-installation",
});

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <ServicePageView
      service={service}
      crumbs={[{ label: "Our Solutions", href: "/solutions" },{ label: "Electrical Services", href: "/solutions/electrical" },{ label: "Solar Power Plant" }]}
    />
  );
}

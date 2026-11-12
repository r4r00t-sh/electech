import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "fire-fighting-fire-alarm-installation";

export const metadata = pageMetadata({
  title: "Fire Fighting and Fire Alarm Installation",
  description: "Fire alarm installation Dubai and fire fighting systems by ElecTech MEP.",
  image: "/images/pages/fire-control-panels.jpg",
  path: "/solutions/fire-protection/fire-fighting-fire-alarm-installation",
});

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <ServicePageView
      service={service}
      crumbs={[{ label: "Our Solutions", href: "/solutions" },{ label: "Fire Protection", href: "/solutions/fire-protection" },{ label: "Fire Fighting and Fire Alarm" }]}
    />
  );
}

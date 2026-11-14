import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "fire-fighting-fire-alarm-installation";

export const metadata = pageMetadata({
  title: "Fire Alarm & Firefighting Installation Support",
  description:
    "Electech provides fire alarm and firefighting installation support for commercial, residential and refurbishment projects in Dubai.",
  image: "/images/pages/fire-control-panels.jpg",
  path: "/solutions/fire-protection/fire-fighting-fire-alarm-installation",
});

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <ServicePageView
      service={service}
      crumbs={[
        { label: "Our Solutions", href: "/solutions" },
        {
          label: "Fire Protection Support",
          href: "/solutions/fire-protection",
        },
        { label: "Fire Alarm & Firefighting Installation Support" },
      ]}
    />
  );
}

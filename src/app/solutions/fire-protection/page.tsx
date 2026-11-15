import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "fire-protection";

export const metadata = pageMetadata({
  title: "Fire Alarm & Firefighting Installation Support | Electech",
  description:
    "Preliminary fire alarm and firefighting installation support with approved specialists.",
  image: "/images/pages/fire-services-corridor.jpg",
  path: "/solutions/fire-protection",
  absoluteTitle: true,
});

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <ServicePageView
      service={service}
      crumbs={[
        { label: "Our Solutions", href: "/solutions" },
        { label: "Fire Protection Support" },
      ]}
    />
  );
}

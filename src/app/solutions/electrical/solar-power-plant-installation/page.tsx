import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "solar-power-plant-installation";

// [CLIENT TO CONFIRM] Solar PV offering — unpublished until confirmed.
const SOLAR_PUBLISHED = process.env.PUBLISH_SOLAR_PAGE === "true";

export const metadata = {
  ...pageMetadata({
    title: "Solar Power Plant Installation",
    description:
      "Solar power plant installation — content held pending confirmation of Electech delivery scope.",
    image: "/images/pages/solar-rooftop-array.jpg",
    path: "/solutions/electrical/solar-power-plant-installation",
  }),
  robots: { index: false, follow: false },
};

export default function Page() {
  if (!SOLAR_PUBLISHED) notFound();
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <ServicePageView
      service={service}
      crumbs={[
        { label: "Our Solutions", href: "/solutions" },
        { label: "Electrical Services", href: "/solutions/electrical" },
        { label: "Solar Power Plant" },
      ]}
    />
  );
}

import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "extra-low-voltage-installation";

export const metadata = pageMetadata({
  title: "Extra Low Voltage Installation",
  description:
    "Electech provides ELV infrastructure including conduits, containment and cabling provisions for CCTV, data, Wi-Fi, access control and intercom systems.",
  image: "/images/pages/elv-server-racks.jpg",
  path: "/solutions/electrical/extra-low-voltage-installation",
});

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <ServicePageView
      service={service}
      crumbs={[{ label: "Our Solutions", href: "/solutions" },{ label: "Electrical Services", href: "/solutions/electrical" },{ label: "Extra Low Voltage" }]}
    />
  );
}

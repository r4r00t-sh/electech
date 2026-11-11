import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "mep";

export const metadata = pageMetadata({
  title: "MEP Solutions",
  description: "Integrated MEP contractor Dubai — mechanical, electrical and plumbing delivery by ElecTech MEP.",
  path: "/solutions/mep",
});

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <ServicePageView
      service={service}
      crumbs={[{ label: "Our Solutions", href: "/solutions" },{ label: "MEP Solutions" }]}
    />
  );
}

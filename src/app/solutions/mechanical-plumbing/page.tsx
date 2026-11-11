import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "mechanical-plumbing";

export const metadata = pageMetadata({
  title: "Mechanical and Plumbing Services",
  description: "HVAC and plumbing installation Dubai from ElecTech MEP.",
  path: "/solutions/mechanical-plumbing",
});

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <ServicePageView
      service={service}
      crumbs={[{ label: "Our Solutions", href: "/solutions" },{ label: "Mechanical and Plumbing" }]}
    />
  );
}

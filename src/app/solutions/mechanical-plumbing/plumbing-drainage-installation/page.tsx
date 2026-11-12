import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { getServiceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const slug = "plumbing-drainage-installation";

export const metadata = pageMetadata({
  title: "Plumbing and Drainage Installation",
  description: "Plumbing and drainage installation Dubai by ElecTech MEP.",
  image: "/images/pages/plumbing-finished-bathroom.jpg",
  path: "/solutions/mechanical-plumbing/plumbing-drainage-installation",
});

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <ServicePageView
      service={service}
      crumbs={[{ label: "Our Solutions", href: "/solutions" },{ label: "Mechanical and Plumbing", href: "/solutions/mechanical-plumbing" },{ label: "Plumbing and Drainage" }]}
    />
  );
}

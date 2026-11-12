import { ClientsMarquee } from "@/components/clients/ClientsMarquee";
import { getFeaturedClients } from "@/content/clients";

/** Homepage / shared featured logo strip (marquee). */
export function ClientLogoStrip({
  title = "Trusted by organisations across the UAE",
}: {
  title?: string;
}) {
  return <ClientsMarquee clients={getFeaturedClients()} title={title} />;
}

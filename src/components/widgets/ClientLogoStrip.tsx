import { ClientsMarquee } from "@/components/clients/ClientsMarquee";
import { getVisibleClients } from "@/content/clients";

/** Homepage / shared client logo marquee. */
export function ClientLogoStrip({
  title = "Organisations We Work With",
}: {
  title?: string;
}) {
  return <ClientsMarquee clients={getVisibleClients()} title={title} />;
}

import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact ElecTech MEP in Dubai — request a quote for MEP, HVAC, electrical, fire protection or maintenance.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        intro="Talk to our engineers about your next fit-out, upgrade or maintenance brief."
        crumbs={[{ label: "Contact Us" }]}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              title="Send an enquiry"
              description="We respond to project enquiries at info@electechmep.com."
            />
            <ContactForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-[var(--radius-card)] border border-navy/8 bg-mist p-6">
              <h2 className="font-display text-xl font-bold text-navy">
                {siteConfig.legalName}
              </h2>
              <ul className="mt-5 space-y-4 text-sm text-slate-dark">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                  <span>
                    {siteConfig.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                    <span className="mt-2 block text-xs text-slate">
                      {siteConfig.address.note}
                    </span>
                  </span>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phoneTel}`}
                    className="inline-flex items-center gap-3 hover:text-amber"
                  >
                    <Phone className="h-4 w-4 text-amber" />
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink(siteConfig.whatsappTel)}
                    className="inline-flex items-center gap-3 hover:text-amber"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 text-amber" />
                    WhatsApp {siteConfig.whatsapp}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-3 hover:text-amber"
                  >
                    <Mail className="h-4 w-4 text-amber" />
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                  <span>
                    {siteConfig.hours.map((h) => (
                      <span key={h.day} className="block">
                        <strong className="text-navy">{h.day}:</strong> {h.time}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-[var(--radius-card)] border border-navy/8">
              <iframe
                title="ElecTech MEP office map — Hamsah Building, Oud Metha, Dubai"
                src={siteConfig.address.mapEmbedUrl}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/utils";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact Electech Electromechanical Works LLC — Hamsah-A Building, Al Karama, Dubai. Submit your MEP enquiry.",
  image: "/images/pages/contact-dubai-coastline.jpg",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        media={pageHeroes.contact}
        title="Contact Electech"
        intro="Let's Discuss Your MEP Requirements"
        crumbs={[{ label: "Contact Us" }]}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="prose-mep max-w-2xl text-slate-dark">
              Whether you are planning a commercial office project, upgrading a
              residential villa or looking for reliable MEP maintenance support,
              Electech is ready to review your requirements.
            </p>
            <p className="prose-mep mt-4 max-w-2xl text-slate-dark">
              Share your project location, scope, drawings or service
              requirements, and our team will respond with the appropriate next
              steps.
            </p>
            <div className="mt-10">
              <SectionHeading
                title="Submit Your Enquiry"
                description={`We respond to project enquiries at ${siteConfig.email}.`}
              />
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[var(--radius-card)] border border-navy/8 bg-mist p-6">
              <h2 className="font-display text-xl font-bold text-navy">
                {siteConfig.legalName}
              </h2>
              <ul className="mt-5 space-y-4 text-sm text-slate-dark">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                  <span>
                    {siteConfig.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phoneTel}`}
                    className="inline-flex items-center gap-3 hover:text-green"
                  >
                    <Phone className="h-4 w-4 text-green" />
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink(siteConfig.whatsappTel)}
                    className="inline-flex items-center gap-3 hover:text-green"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 text-green" />
                    WhatsApp {siteConfig.whatsapp}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-3 hover:text-green"
                  >
                    <Mail className="h-4 w-4 text-green" />
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-[var(--radius-card)] border border-navy/8">
              <iframe
                title="Electech Electromechanical Works LLC — Hamsah-A Building, Al Karama, Dubai"
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

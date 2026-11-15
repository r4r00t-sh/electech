import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactActionLinks } from "@/components/contact/ContactActionLinks";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Contact Electech MEP Dubai",
  description:
    "Contact Electech for electrical, HVAC, plumbing and maintenance enquiries in Dubai.",
  image: "/images/heroes/hero-02-electrical-installation.jpg",
  path: "/contact",
  absoluteTitle: true,
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        media={pageHeroes.contact}
        title="Let's Discuss Your MEP Requirements"
        intro="Speak to Electech about your MEP requirements."
        crumbs={[{ label: "Contact" }]}
      />

      <Section>
        <ContactActionLinks />
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="prose-mep max-w-2xl text-slate-dark">
              Planning a commercial fit-out, premium villa upgrade or maintenance
              contract? Send your project details, drawings or service
              requirements and our team will review the next steps.
            </p>
            <p className="prose-mep mt-4 max-w-2xl text-slate-dark">
              Whether planning a commercial office project, upgrading a
              residential villa or seeking dependable MEP maintenance, share your
              scope, project location and relevant drawings.
            </p>
            <div className="mt-10">
              <SectionHeading title="Submit Your Enquiry" />
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[var(--radius-card)] border border-navy/8 bg-white p-6">
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
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                  <span>
                    Telephone {siteConfig.phone}
                    <span className="mt-1 block">
                      Mobile/WhatsApp {siteConfig.whatsapp}
                    </span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                  <span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="block hover:text-green"
                    >
                      {siteConfig.email}
                    </a>
                    <a
                      href={`mailto:${siteConfig.projectsEmail}`}
                      className="mt-1 block hover:text-green"
                    >
                      {siteConfig.projectsEmail}
                    </a>
                    <span className="mt-1 block">{siteConfig.websiteDisplay}</span>
                  </span>
                </li>
              </ul>
              <a
                href={siteConfig.address.mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-[15px] font-semibold text-navy hover:text-green"
              >
                View on map
              </a>
            </div>
            <p className="text-[13px] text-slate">
              Prefer to send drawings? Email {siteConfig.projectsEmail}
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}

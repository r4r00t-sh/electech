import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes } from "@/lib/media";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = pageMetadata({
  title: "Industries Served | Electech MEP Dubai",
  description:
    "MEP services for offices, villas, retail, F&B and hospitality environments.",
  image: "/images/heroes/hero-02-electrical-installation.jpg",
  path: "/industries",
  absoluteTitle: true,
});

const industries = [
  {
    title: "Commercial Offices",
    description:
      "Electrical distribution, lighting, HVAC modifications, ventilation, plumbing, server-room power and service coordination.",
    links: [
      { label: "Integrated MEP", href: "/solutions/mep" },
      { label: "Electrical", href: "/solutions/electrical" },
      { label: "Maintenance", href: "/solutions/maintenance" },
    ],
  },
  {
    title: "Premium Residential Villas",
    description:
      "Architectural lighting, electrical upgrades, plumbing, pumps, filtration, solar water heating, lifestyle equipment provisions and maintenance.",
    links: [
      { label: "Mechanical & Plumbing", href: "/solutions/mechanical-plumbing" },
      { label: "Electrical", href: "/solutions/electrical" },
      { label: "Maintenance", href: "/solutions/maintenance" },
    ],
  },
  {
    title: "Retail & F&B",
    description:
      "MEP modifications, equipment power, lighting, ventilation, plumbing and drainage aligned with fit-out programmes.",
    links: [
      { label: "Integrated MEP", href: "/solutions/mep" },
      { label: "Mechanical & Plumbing", href: "/solutions/mechanical-plumbing" },
    ],
  },
  {
    title: "Hospitality",
    description:
      "Refurbishment and MEP maintenance support, coordinated around operational constraints and guest-facing finishes.",
    links: [
      { label: "Integrated MEP", href: "/solutions/mep" },
      { label: "Maintenance", href: "/solutions/maintenance" },
    ],
  },
  {
    title: "Other Facilities",
    description:
      "Scope-specific MEP works for suitable commercial properties, subject to technical review and project requirements.",
    links: [
      { label: "Integrated MEP", href: "/solutions/mep" },
      { label: "Fire Protection Support", href: "/solutions/fire-protection" },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        media={pageHeroes.projects}
        title="MEP Solutions for the Spaces People Use Every Day"
        intro="Electech supports building-services installations, modifications and maintenance across commercial offices, premium residences, retail premises and hospitality environments."
        crumbs={[{ label: "Industries" }]}
      />

      <Section>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-green px-5 py-2.5 text-[15px] font-semibold text-white hover:bg-green/90"
          >
            Request an Industry-Specific Scope Review
          </Link>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 rounded-md border border-navy/15 px-5 py-2.5 text-[15px] font-semibold text-navy hover:border-navy/30"
          >
            Explore services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading
          title="MEP Solutions Across Diverse Property Types"
          description="Electech supports contractors, owners and facilities teams with MEP installations, upgrades and maintenance across different operating environments."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.04}>
              <article className="flex h-full flex-col rounded-md border border-navy/10 bg-white p-6">
                <div
                  className="mb-5 flex h-16 items-center justify-center rounded-md bg-navy/95"
                  aria-hidden
                >
                  <span className="font-display text-sm font-semibold tracking-wide text-white/80">
                    Electech
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] text-slate-dark">
                  {item.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {item.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-1 text-[14px] font-semibold text-navy hover:text-green"
                      >
                        {link.label}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <CtaBanner
          title="Discuss Your Project"
          buttonLabel="Request a Quotation"
        />
      </Section>
    </>
  );
}

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Home,
  Store,
  Hotel,
  Warehouse,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { PhotoMedia } from "@/components/ui/PhotoMedia";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes, type MediaRef } from "@/lib/media";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = pageMetadata({
  title: "Industries Served | Electech MEP Dubai",
  description:
    "MEP services for offices, villas, retail, F&B and hospitality environments.",
  image: "/images/projects/works/office-commercial-fitout-01.jpg",
  path: "/industries",
  absoluteTitle: true,
});

const industries: {
  title: string;
  description: string;
  links: { label: string; href: string }[];
  image?: MediaRef;
  Icon: typeof Building2;
}[] = [
  {
    title: "Commercial Offices",
    description:
      "Electrical distribution, lighting, HVAC modifications, ventilation, plumbing, server-room power and service coordination.",
    links: [
      { label: "Integrated MEP", href: "/solutions/mep" },
      { label: "Electrical", href: "/solutions/electrical" },
      { label: "Maintenance", href: "/solutions/maintenance" },
    ],
    image: {
      src: "/images/projects/works/office-commercial-fitout-01.jpg",
      alt: "Commercial office fit-out with exposed MEP ceiling services.",
    },
    Icon: Building2,
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
    image: {
      src: "/images/projects/villas/villa-39-exterior.jpg",
      alt: "Premium residential villa exterior for villa MEP services.",
    },
    Icon: Home,
  },
  {
    title: "Retail & F&B",
    description:
      "MEP modifications, equipment power, lighting, ventilation, plumbing and drainage aligned with fit-out programmes.",
    links: [
      { label: "Integrated MEP", href: "/solutions/mep" },
      { label: "Mechanical & Plumbing", href: "/solutions/mechanical-plumbing" },
    ],
    image: {
      src: "/images/projects/works/retail-art-gallery-interior-01.jpg",
      alt: "Retail interior with Electech MEP works.",
    },
    Icon: Store,
  },
  {
    title: "Hospitality",
    description:
      "Refurbishment and MEP maintenance support, coordinated around operational constraints and guest-facing finishes.",
    links: [
      { label: "Integrated MEP", href: "/solutions/mep" },
      { label: "Maintenance", href: "/solutions/maintenance" },
    ],
    image: {
      src: "/images/projects/works/restaurant-dining-interior-01.jpg",
      alt: "Hospitality dining interior with MEP services.",
    },
    Icon: Hotel,
  },
  {
    title: "Other Facilities",
    description:
      "Scope-specific MEP works for suitable commercial properties, subject to technical review and project requirements.",
    links: [
      { label: "Integrated MEP", href: "/solutions/mep" },
      { label: "Fire Protection Support", href: "/solutions/fire-protection" },
    ],
    image: {
      src: "/images/pages/mep-industrial-systems.jpg",
      alt: "Building-services plant corridor for commercial facilities.",
    },
    Icon: Warehouse,
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        media={pageHeroes.industries}
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
          {industries.map((item, i) => {
            const Icon = item.Icon;
            return (
              <FadeIn key={item.title} delay={i * 0.04}>
                <article className="flex h-full flex-col overflow-hidden rounded-md border border-navy/10 bg-white">
                  <div className="relative aspect-[16/10] bg-navy">
                    {item.image ? (
                      <PhotoMedia image={item.image} sizes="33vw" />
                    ) : (
                      <div
                        className="flex h-full w-full items-center justify-center bg-navy"
                        role="img"
                        aria-label={`${item.title} — photo pending`}
                      >
                        <Icon className="h-10 w-10 text-green" aria-hidden />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
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
                  </div>
                </article>
              </FadeIn>
            );
          })}
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

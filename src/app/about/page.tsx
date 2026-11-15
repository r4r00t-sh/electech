import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { aboutContent } from "@/content/about";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "About Electech | Trusted MEP Contractor in Dubai",
  description:
    "Learn about Electech's UAE MEP experience, accountable delivery and practical engineering approach.",
  image: "/images/pages/electrical-installation-work.jpg",
  path: "/about",
  absoluteTitle: true,
});

const links = [
  {
    href: "/about/who-we-are",
    title: "Who We Are",
    description: "Our story, capabilities and commitment.",
  },
  {
    href: "/about/vision-mission",
    title: "Vision & Mission",
    description: "Vision, mission and core values.",
  },
  {
    href: "/about/why-choose-us",
    title: "Why Choose Us",
    description: "Practical engineering and accountable service.",
  },
  {
    href: "/clients",
    title: "Our Clients",
    description: "Project relationships across the UAE.",
  },
  {
    href: "/about/certifications",
    title: "Certifications",
    description: "ISO 9001, ISO 14001 and ISO 45001.",
  },
];

export default function AboutLandingPage() {
  const { landing } = aboutContent;

  return (
    <>
      <PageHero
        media={pageHeroes.whoWeAre}
        title={landing.title}
        intro={landing.intro}
        crumbs={[{ label: "About Us" }]}
      />

      <Section>
        <SectionHeading title="Our approach" />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {landing.approach.map((step, i) => (
            <li
              key={step.title}
              className="rounded-md border border-navy/10 bg-mist p-5"
            >
              <span className="text-xs font-semibold text-green">0{i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-bold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="mist">
        <SectionHeading title="Values" />
        <div className="grid gap-5 md:grid-cols-2">
          {landing.values.map((value) => (
            <div
              key={value.title}
              className="rounded-md border border-navy/10 bg-white p-5"
            >
              <h3 className="font-display text-lg font-bold text-navy">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-slate">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Proof" />
        <p className="text-slate-dark">
          ISO 9001, ISO 14001 and ISO 45001 — quality, environmental and
          occupational health &amp; safety management systems.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/about/certifications">Certifications</Button>
          <Button href="/projects" variant="ghost">
            View Our Work
          </Button>
        </div>
      </Section>

      <Section tone="mist">
        <h2 className="font-display text-2xl font-bold text-navy">
          Explore Electech
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-md border border-navy/8 bg-white p-6 transition hover:shadow-[var(--shadow-card)]"
            >
              <h3 className="font-display text-xl font-bold text-navy">
                {link.title}
              </h3>
              <p className="mt-2 text-slate">{link.description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-green">
                Read more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-md bg-navy px-6 py-10 md:px-10">
          <h2 className="font-display text-2xl font-bold !text-white md:text-3xl">
            Discuss Your MEP Requirements
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact">Discuss Your MEP Requirements</Button>
            <Button href="/projects" variant="outline">
              View Our Work
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

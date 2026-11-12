import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Learn about ElecTech Electromechanical Works LLC — MEP and fire safety contractor in Dubai since 2012.",
  path: "/about",
});

const links = [
  {
    href: "/about/who-we-are",
    title: "Who We Are",
    description: "Our story, capabilities and commitment to UAE clients.",
  },
  {
    href: "/about/vision-mission",
    title: "Vision and Mission",
    description: "Values, expertise and the process behind every project.",
  },
  {
    href: "/about/why-choose-us",
    title: "Why Choose Us",
    description: "The reasons fit-out firms and owners appoint ElecTech MEP.",
  },
  {
    href: "/clients",
    title: "Our Clients",
    description: "Organisations across the UAE that trust Electech MEP.",
  },
  {
    href: "/about/certifications",
    title: "Certifications",
    description: "Quality, safety and authority credentials.",
  },
];

export default function AboutLandingPage() {
  return (
    <>
      <PageHero
        media={pageHeroes.about}
        title="About Us"
        intro="ElecTech MEP is a Dubai-based electromechanical contractor delivering precision MEP and fire safety since 2012."
        crumbs={[{ label: "About Us" }]}
      />
      <Section>
        <SectionHeading
          title="Get to know ElecTech"
          description="Explore who we are, how we work and the credentials behind our delivery."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-[var(--radius-card)] border border-navy/8 bg-mist p-6 transition hover:bg-white hover:shadow-[var(--shadow-card)]"
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                {link.title}
              </h2>
              <p className="mt-2 text-slate">{link.description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-amber">
                Read more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <Section tone="mist">
        <CtaBanner />
      </Section>
    </>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { aboutContent } from "@/content/about";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Electech Electromechanical Works LLC is a Dubai-based electromechanical contractor with more than 14 years of operational experience across the UAE.",
  image: "/images/pages/about-glass-tower.jpg",
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
    title: "Vision & Mission",
    description: "Values, expertise and how we deliver every project.",
  },
  {
    href: "/about/why-choose-us",
    title: "Why Choose Us",
    description: "Practical engineering, reliable delivery and accountable service.",
  },
  {
    href: "/clients",
    title: "Our Clients",
    description: "Project relationships across the UAE.",
  },
  {
    href: "/about/certifications",
    title: "Certifications",
    description: "Confirmed ISO management-system credentials.",
  },
];

export default function AboutLandingPage() {
  const { landing } = aboutContent;

  return (
    <>
      <PageHero
        media={pageHeroes.about}
        title={landing.title}
        intro={landing.intro}
        crumbs={[{ label: "About Us" }]}
      />
      <Section>
        <div className="prose-mep max-w-3xl space-y-4 text-slate-dark">
          {landing.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <h2 className="mt-12 font-display text-2xl font-bold text-navy">
          Explore Electech
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
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
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-green">
                Read more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <Section tone="mist">
        <CtaBanner
          title="Discuss Your MEP Requirements With Electech"
          description="Share your project location, scope or service requirements and our team will respond with the appropriate next steps."
          buttonLabel="Request a Quotation"
        />
      </Section>
    </>
  );
}

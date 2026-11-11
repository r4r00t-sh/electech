import Link from "next/link";
import {
  Wrench,
  ClipboardCheck,
  ShieldCheck,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { ClientSuccessStories } from "@/components/widgets/ClientSuccessStories";
import { TestimonialsBanner } from "@/components/widgets/TestimonialsBanner";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import type { ServicePage } from "@/content/services";
import {
  getStoriesByBucket,
} from "@/content/stories";
import { getTestimonialsByBucket } from "@/content/testimonials";
import { getServiceDisplayImage } from "@/lib/media";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Crumb } from "@/components/layout/Breadcrumbs";

const icons = [Wrench, ClipboardCheck, ShieldCheck, Building2];

const CHILD_LINKS: Record<string, { label: string; href: string }[]> = {
  "mechanical-plumbing": [
    {
      label: "HVAC Installation",
      href: "/solutions/mechanical-plumbing/hvac-installation",
    },
    {
      label: "Plumbing and Drainage Installation",
      href: "/solutions/mechanical-plumbing/plumbing-drainage-installation",
    },
  ],
  electrical: [
    {
      label: "Electrical Installation",
      href: "/solutions/electrical/electrical-installation",
    },
    {
      label: "Extra Low Voltage Installation",
      href: "/solutions/electrical/extra-low-voltage-installation",
    },
    {
      label: "Solar Power Plant Installation",
      href: "/solutions/electrical/solar-power-plant-installation",
    },
  ],
  "fire-protection": [
    {
      label: "Fire Fighting and Fire Alarm Installation",
      href: "/solutions/fire-protection/fire-fighting-fire-alarm-installation",
    },
    {
      label: "Fire Stopping Sealant Application",
      href: "/solutions/fire-protection/fire-stopping-sealant-application",
    },
  ],
};

export function ServicePageView({
  service,
  crumbs,
}: {
  service: ServicePage;
  crumbs: Crumb[];
}) {
  const stories = getStoriesByBucket(service.bucket, 3);
  const testimonials = getTestimonialsByBucket(service.bucket, 3);
  const children = CHILD_LINKS[service.slug];
  const heroMedia = getServiceDisplayImage(service.slug);

  return (
    <>
      <PageHero
        title={service.title}
        intro={service.intro}
        media={heroMedia}
        crumbs={crumbs}
      />

      {children?.length ? (
        <Section tone="mist">
          <SectionHeading title="In this solution" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="group flex items-center justify-between rounded-[var(--radius-card)] border border-navy/8 bg-white p-5 shadow-[var(--shadow-card)]"
              >
                <span className="font-display font-semibold text-navy">
                  {child.label}
                </span>
                <ArrowRight className="h-4 w-4 text-amber transition group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading title="Overview" />
            <div className="prose-mep whitespace-pre-line text-slate">
              {service.overview}
            </div>
          </div>
          <aside className="rounded-[var(--radius-card)] border border-navy/8 bg-mist p-6">
            <h3 className="font-display text-lg font-bold text-navy">
              How we work
            </h3>
            <ol className="mt-4 space-y-3">
              {service.howWeWork.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-slate-dark">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-amber">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading
          title="Key services"
          description="Practical capabilities delivered by our site and engineering teams."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {service.keyServices.map((item, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <FadeIn key={item.title} delay={i * 0.04}>
                <div className="h-full rounded-md border border-navy/10 bg-white p-6">
                  <Icon className="h-6 w-6 text-green" aria-hidden />
                  <h3 className="mt-4 font-display text-lg font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{item.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Relevant sectors" />
        <ul className="flex flex-wrap gap-3">
          {service.sectors.map((sector) => (
            <li
              key={sector}
              className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-sm text-navy"
            >
              <CheckCircle2 className="h-4 w-4 text-amber" aria-hidden />
              {sector}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist">
        <SectionHeading title="Frequently asked questions" />
        <Accordion items={service.faqs} />
      </Section>

      <Section>
        <ClientSuccessStories
          stories={stories}
          description="Related projects from this solutions bucket."
        />
      </Section>

      <Section tone="mist">
        <TestimonialsBanner items={testimonials} />
      </Section>

      <Section>
        <CtaBanner />
      </Section>
    </>
  );
}

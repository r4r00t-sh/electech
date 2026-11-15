import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Privacy Notice | Electech",
    description:
      "How Electech Electromechanical Works LLC handles enquiry and careers form data.",
    path: "/privacy",
    absoluteTitle: true,
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy notice"
        intro="How we handle information you send through this website."
        crumbs={[{ label: "Privacy" }]}
      />
      <Section>
        <div className="prose-mep max-w-3xl space-y-4 text-slate-dark">
          <p>
            This short notice explains how {siteConfig.legalName} (“Electech”,
            “we”) handles personal information submitted through the enquiry and
            careers forms on this website.
          </p>
          <h2 className="font-display text-xl font-bold text-navy">
            What we collect
          </h2>
          <p>
            Enquiry form: name, optional company, email, phone, project
            location, property type, service required, and the short project
            details you provide.
          </p>
          <p>
            Careers form: name, trade, years of experience, email, phone, and
            your CV file (PDF, DOC or DOCX).
          </p>
          <h2 className="font-display text-xl font-bold text-navy">
            Why we collect it
          </h2>
          <p>
            We use this information only to respond to your enquiry or
            application and to manage related follow-up for Electech’s MEP
            services or recruitment.
          </p>
          <h2 className="font-display text-xl font-bold text-navy">
            Who receives it
          </h2>
          <p>
            Submissions are received by Electech Electromechanical Works LLC.
            Forms are delivered to our configured inbox (default{" "}
            {siteConfig.email}). We do not sell this information.
          </p>
          <h2 className="font-display text-xl font-bold text-navy">
            Retention
          </h2>
          <p>
            We keep form records only as long as needed to handle your request
            and meet ordinary business or legal obligations.
          </p>
          <h2 className="font-display text-xl font-bold text-navy">
            Your rights
          </h2>
          <p>
            To correct or request deletion of personal data you have sent us,
            contact Electech at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or by
            telephone on {siteConfig.phone}.
          </p>
          <p className="text-[14px] text-slate">
            Office: {siteConfig.address.lines.join(", ")}.
          </p>
        </div>
      </Section>
    </>
  );
}

import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { ProjectsFilter } from "@/components/projects/ProjectsFilter";
import { stories } from "@/content/stories";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects / Client Success Stories",
  description:
    "Client success stories from ElecTech MEP — villa, hospitality, healthcare, retail, government and commercial projects across the UAE.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Projects / Client Success Stories"
        intro="Real programmes across our five solutions buckets — filter by capability to find relevant work."
        crumbs={[{ label: "Projects" }]}
      />
      <Section>
        <ProjectsFilter stories={stories} />
      </Section>
      <Section tone="mist">
        <CtaBanner />
      </Section>
    </>
  );
}

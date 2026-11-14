import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { ProjectsFilter } from "@/components/projects/ProjectsFilter";
import { getPublishedStories } from "@/content/stories";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Selected MEP projects by Electech Electromechanical Works LLC across residential, commercial, retail and hospitality properties in the UAE.",
  image: "/images/pages/projects-office-interior.jpg",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        media={pageHeroes.projects}
        title="Selected MEP Projects"
        intro="Electech's MEP contribution across residential, commercial, retail and hospitality projects — filter by capability to find relevant work."
        crumbs={[{ label: "Projects" }]}
      />
      <Section>
        <ProjectsFilter stories={getPublishedStories()} />
      </Section>
      <Section tone="mist">
        <CtaBanner />
      </Section>
    </>
  );
}

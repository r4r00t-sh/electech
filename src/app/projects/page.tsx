import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { ProjectsFilter } from "@/components/projects/ProjectsFilter";
import { getPublishedStories } from "@/content/stories";
import { pageMetadata } from "@/lib/seo";
import { pageHeroes } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Electech MEP Projects | Dubai Villa & Commercial Works",
  description:
    "Explore Electech's completed and ongoing mechanical, electrical and plumbing project work.",
  image: "/images/heroes/hero-02-electrical-installation.jpg",
  path: "/projects",
  absoluteTitle: true,
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        media={pageHeroes.projects}
        title="Our Work in Practice"
        intro="Explore examples of Electech's electrical, mechanical and plumbing works across premium residential properties and commercial environments. Each project demonstrates a distinct technical scope, coordinated execution and attention to building-services performance."
        crumbs={[{ label: "Projects" }]}
      />
      <Section>
        <SectionHeading title="Selected MEP Projects" />
        <ProjectsFilter stories={getPublishedStories()} />
      </Section>
      <Section tone="mist">
        <CtaBanner
          title="Discuss a Similar MEP Project"
          buttonLabel="Request a Quotation"
        />
      </Section>
    </>
  );
}

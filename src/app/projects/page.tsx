import { Suspense } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/widgets/CtaBanner";
import { ProjectsFilter } from "@/components/projects/ProjectsFilter";
import { getPublishedStories } from "@/content/stories";
import {
  isProjectSectorId,
  type ProjectSectorId,
} from "@/lib/project-sectors";
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

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ sector?: string }>;
}) {
  const params = await searchParams;
  const initialSector: ProjectSectorId = isProjectSectorId(params.sector)
    ? params.sector
    : "all";

  return (
    <>
      <PageHero
        media={pageHeroes.projects}
        title="Our Work in Practice"
        intro="Explore examples of Electech's electrical, mechanical and plumbing works across premium residential properties and commercial environments. Each project demonstrates a distinct technical scope, coordinated execution and attention to building-services performance."
        crumbs={[{ label: "Projects" }]}
      />
      <Section>
        <SectionHeading
          title="Selected MEP Projects"
          description="Filter by sector to browse Electech work across commercial offices, residential villas, retail & F&B, hospitality and other facilities."
        />
        <Suspense fallback={<p className="text-slate-dark">Loading projects…</p>}>
          <ProjectsFilter
            stories={getPublishedStories()}
            initialSector={initialSector}
          />
        </Suspense>
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

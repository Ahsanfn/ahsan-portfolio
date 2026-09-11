import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { Stagger, StaggerItem } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export default function Projects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="scroll-mt-[5.5rem] border-b border-border py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Featured work, in progress."
          description="These cards are placeholders for upcoming case studies. None of these products are claimed as completed shipping work yet."
        />

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {featured.map((project) => (
            <StaggerItem key={project.id} className="h-full">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

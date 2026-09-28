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
      className="scroll-mt-[5.5rem] border-t border-border py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work."
          description="A short selection of what I'm building — marked Coming Soon until there's a live build to share."
        />

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
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
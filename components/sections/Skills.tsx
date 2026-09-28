import { skillCategories } from "@/data/skills";
import { Container } from "@/components/ui/container";
import { Stagger, StaggerItem } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-[5.5rem] border-t border-border py-20 sm:py-28"
    >
      <Container>
        <SectionHeading eyebrow="Skills" title="What I work with." />

        <Stagger className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                {category.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                {category.items.join(" · ")}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
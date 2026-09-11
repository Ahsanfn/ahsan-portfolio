import { skillCategories } from "@/data/skills";
import { Container } from "@/components/ui/container";
import { Stagger, StaggerItem } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-[5.5rem] border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with."
          description="Grouped by area. These are skills and tools I use — not a claim of production ownership for every item."
        />

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title} className="h-full">
              <article className="h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold tracking-tight text-foreground">
                  {category.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li key={item} className="skill-chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

import { aboutContent } from "@/data/site";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-[5.5rem] border-t border-border py-20 sm:py-28"
    >
      <Container>
        <SectionHeading eyebrow="About" title="A short introduction." />

        <ScrollReveal>
          <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
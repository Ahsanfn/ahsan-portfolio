import { aboutContent } from "@/data/site";
import { Container } from "@/components/ui/container";
import { ScrollReveal, Stagger, StaggerItem } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const aboutPanels = [
  {
    title: "Craft",
    body: "Interfaces in React and Next.js, shaped with product and design partners.",
  },
  {
    title: "Delivery",
    body: "Client-facing applications, API integrations, and performance-minded builds.",
  },
  {
    title: "Next focus",
    body: "Deepening backend, cloud, system design, and AI engineering skills.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-[5.5rem] border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Building practical software with a product mindset."
          description="A concise snapshot of how I work — without inflated claims."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <ScrollReveal>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-[1.05rem]">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>

          <Stagger className="grid gap-3" delay={0.08} fast>
            {aboutPanels.map((panel) => (
              <StaggerItem key={panel.title}>
                <article className="about-panel rounded-2xl border border-border bg-card p-5">
                  <h3 className="text-sm font-semibold tracking-tight text-foreground">
                    {panel.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{panel.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}

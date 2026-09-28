import { siteConfig } from "@/data/site";
import { SocialLinks } from "@/components/social-links";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-[5.5rem] border-t border-border py-20 sm:py-28"
    >
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {"Let's build something."}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
              {"Open to roles and collaborations. Reach out and let's talk."}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href={`mailto:${siteConfig.email}`} size="lg">
                Email me
              </Button>
              <Button
                href={siteConfig.resumePath}
                variant="secondary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                View resume
              </Button>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="nav-underline text-sm text-foreground"
              >
                {siteConfig.email}
              </a>
              <SocialLinks />
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
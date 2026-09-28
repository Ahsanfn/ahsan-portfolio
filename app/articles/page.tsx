import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { articles } from "@/data/articles";
import { siteConfig } from "@/data/site";
import { ArticleCard } from "@/components/articles/article-card";
import { Container } from "@/components/ui/container";
import { PageTransition } from "@/components/ui/page-transition";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollReveal, Stagger, StaggerItem } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: `Articles | ${siteConfig.name}`,
  description: `Technical articles by ${siteConfig.name} on AI engineering, LLMs, RAG, AI agents, and full-stack development with Next.js, React and TypeScript.`,
};

export default function Articles() {
  const githubHref = siteConfig.social.github.href;

  return (
    <PageTransition>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-md focus:bg-card focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main" className="flex-1">
        <section
          id="articles"
          className="scroll-mt-[5.5rem] py-20 sm:py-28"
        >
          <Container>
            <SectionHeading
              eyebrow="Articles"
              title="Notes on building web and AI products."
              description="I write about what I learn while building modern web and AI-powered products — AI engineering, LLMs, RAG and AI agents, plus full-stack development with Next.js, React and TypeScript."
            />

            <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
              {articles.map((article) => (
                <StaggerItem key={article.id} className="h-full">
                  <ArticleCard article={article} />
                </StaggerItem>
              ))}
            </Stagger>

            <ScrollReveal delay={0.08}>
              <p className="mt-10 text-sm text-muted">
                New posts are on the way. In the meantime, reach out at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="nav-underline text-foreground"
                >
                  {siteConfig.email}
                </a>
                {githubHref ? (
                  <>
                    {" "}
                    or find me on{" "}
                    <a
                      href={githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-underline text-foreground"
                    >
                      GitHub
                    </a>
                  </>
                ) : null}
                .
              </p>
            </ScrollReveal>
          </Container>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
}
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { SocialLinks } from "@/components/social-links";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { clipReveal, intro, staggerFast, wordReveal } from "@/lib/motion";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "LLMs",
  "RAG",
  "AI Agents",
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const delay = shouldReduceMotion ? 0 : intro.contentDelay;

  return (
    <section id="top" className="relative overflow-hidden">
      <HeroBackdrop />

      <Container className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-24 sm:py-32">
        <motion.div
          className="max-w-3xl"
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.07, delayChildren: delay },
            },
          }}
        >
          <motion.p
            className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted"
            variants={wordReveal}
          >
            <span className="availability-dot size-1.5 rounded-full bg-accent" />
            {siteConfig.location}
          </motion.p>

          <h1 className="overflow-hidden pb-1">
            <motion.span
              className="block text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              variants={shouldReduceMotion ? wordReveal : clipReveal}
            >
              {siteConfig.name}
            </motion.span>
          </h1>

          <motion.p
            className="mt-5 text-lg font-medium text-accent sm:text-xl"
            variants={wordReveal}
          >
            {siteConfig.headline}
          </motion.p>

          <motion.p
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
            variants={wordReveal}
          >
            {siteConfig.supportingText}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            variants={staggerFast}
          >
            <motion.div variants={wordReveal}>
              <SocialLinks iconClassName="size-11 border border-border" />
            </motion.div>
            <motion.div variants={wordReveal}>
              <Button
                href={siteConfig.resumePath}
                variant="secondary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
                <ArrowDownRight
                  className="btn-icon-shift size-4"
                  aria-hidden="true"
                />
              </Button>
            </motion.div>
          </motion.div>

          <motion.ul
            className="mt-14 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted"
            variants={staggerFast}
          >
            {technologies.map((tech, index) => (
              <motion.li
                key={tech}
                variants={wordReveal}
                className="flex items-center gap-6"
              >
                {index > 0 ? (
                  <span aria-hidden="true" className="text-border">
                    ·
                  </span>
                ) : null}
                <span>{tech}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </section>
  );
}
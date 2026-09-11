"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { HeroAvatar } from "@/components/hero-avatar";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { clipReveal, intro, staggerFast, wordReveal } from "@/lib/motion";

const headlineLead = "Full Stack Developer";
const headlineRest =
  " building modern web applications and AI-powered products.";
const technologies = ["React.js", "Next.js", "Node.js", "TypeScript", "AI"];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const delay = shouldReduceMotion ? 0 : intro.contentDelay;
  const restWords = headlineRest.trim().split(" ");

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <HeroBackdrop />

      <Container className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20 sm:py-28">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
        <motion.div
          className="min-w-0 max-w-4xl"
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: delay },
            },
          }}
        >
          <motion.p
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium text-accent"
            variants={wordReveal}
          >
            <span className="availability-dot size-1.5 rounded-full bg-accent" />
            {siteConfig.location}
          </motion.p>

          <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12]">
            <span className="inline-block overflow-hidden pb-1 align-bottom">
              <motion.span
                className="inline-block text-accent"
                variants={shouldReduceMotion ? wordReveal : clipReveal}
              >
                {headlineLead}
              </motion.span>
            </span>{" "}
            {shouldReduceMotion ? (
              <span>{headlineRest.trim()}</span>
            ) : (
              <motion.span
                className="inline"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.032 } },
                }}
              >
                {restWords.map((word, index) => (
                  <motion.span
                    key={`${word}-${index}`}
                    className="mr-[0.28em] inline-block"
                    variants={wordReveal}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            )}
          </h1>

          <motion.p
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
            variants={wordReveal}
          >
            {siteConfig.supportingText}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            variants={staggerFast}
          >
            <motion.div variants={wordReveal}>
              <Button
                href="#projects"
                size="lg"
              >
                View Projects
              </Button>
            </motion.div>
            <motion.div variants={wordReveal}>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
              >
                Contact Me
              </Button>
            </motion.div>
            <motion.div variants={wordReveal}>
              <Button
                href={siteConfig.resumePath}
                variant="ghost"
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
            className="mt-16 flex flex-wrap gap-2"
            variants={staggerFast}
          >
            {technologies.map((tech) => (
              <motion.li
                key={tech}
                variants={wordReveal}
                className="skill-chip rounded-full px-3 py-1"
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <HeroAvatar />
        </div>
      </Container>
    </section>
  );
}

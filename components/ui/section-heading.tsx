"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUpScale, tweenOut, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={cn("max-w-2xl", className)}>
        {eyebrow ? (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <span className="mt-5 block h-px w-16 bg-border" aria-hidden="true" />
        {description ? (
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted">
            {description}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <motion.div
      className={cn("max-w-2xl", className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.02 } },
      }}
    >
      {eyebrow ? (
        <motion.p
          className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-accent"
          variants={fadeUpScale}
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        variants={fadeUpScale}
      >
        {title}
      </motion.h2>
      <motion.span
        aria-hidden="true"
        className="mt-5 block h-px w-16 origin-left bg-border"
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: {
            scaleX: 1,
            opacity: 1,
            transition: tweenOut,
          },
        }}
      />
      {description ? (
        <motion.p
          className="mt-4 text-pretty text-base leading-relaxed text-muted"
          variants={fadeUpScale}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}

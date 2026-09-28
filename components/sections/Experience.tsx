"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/experience";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUpScale, viewportOnce } from "@/lib/motion";

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="scroll-mt-[5.5rem] border-t border-border py-20 sm:py-28"
    >
      <Container>
        <SectionHeading eyebrow="Experience" title="Where I've worked." />

        <motion.ul
          className="mt-10 max-w-3xl"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {experience.map((item) => (
            <motion.li
              key={`${item.company}-${item.role}`}
              className="border-b border-border py-6 first:pt-0 last:border-b-0"
              variants={fadeUpScale}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-2">
                  <h3 className="font-medium tracking-tight text-foreground">
                    {item.company}
                  </h3>
                  <span aria-hidden="true" className="hidden text-border sm:inline">
                    /
                  </span>
                  <p className="text-sm text-muted">{item.role}</p>
                </div>
                <p className="shrink-0 font-mono text-xs text-muted">
                  {item.start} – {item.end}
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.highlights[0]}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
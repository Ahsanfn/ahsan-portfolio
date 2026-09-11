"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/experience";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUpScale, tweenOut, viewportOnce } from "@/lib/motion";

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="scroll-mt-[5.5rem] border-b border-border py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Roles and the work behind them."
        />

        <div className="relative mt-12 pl-2 sm:pl-3">
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[7px] w-px bg-border sm:left-[11px]"
          />
          <motion.div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-accent/55 sm:left-[11px]"
            initial={shouldReduceMotion ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />

          <ol className="space-y-4">
            {experience.map((item, index) => (
              <motion.li
                key={`${item.company}-${item.role}`}
                className="relative pl-8 sm:pl-10"
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={viewportOnce}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: index * 0.08,
                    },
                  },
                }}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-7 left-0 size-2 rounded-full border border-accent bg-background sm:left-1 sm:size-2.5"
                />
                <motion.article
                  className="experience-card rounded-2xl border border-border bg-card p-6 sm:p-8"
                  variants={fadeUpScale}
                >
                  <div className="flex flex-col gap-3 border-b border-border pb-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        {item.company}
                        {item.engagement ? ` — ${item.engagement}` : null}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm text-muted">
                      {item.start} – {item.end}
                    </p>
                  </div>
                  <motion.ul
                    className="mt-5 space-y-2.5 text-sm leading-relaxed text-muted"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: { staggerChildren: 0.035, delayChildren: 0.08 },
                      },
                    }}
                  >
                    {item.highlights.map((highlight) => (
                      <motion.li
                        key={highlight}
                        className="flex gap-3"
                        variants={
                          shouldReduceMotion
                            ? undefined
                            : {
                                hidden: { opacity: 0, y: 6 },
                                visible: { opacity: 1, y: 0, transition: tweenOut },
                              }
                        }
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                        />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.article>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

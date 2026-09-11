"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { easings, intro } from "@/lib/motion";
import { siteConfig } from "@/data/site";

export function PageIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = window.setTimeout(
      () => setShow(false),
      reduced ? 0 : intro.hold * 1000,
    );
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="page-intro pointer-events-none fixed inset-0 z-[80] flex items-center justify-center bg-background"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-10%" }}
          transition={{ duration: intro.exit, ease: easings.exit }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-6 px-6">
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: easings.out }}
            >
              <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-surface font-mono text-sm font-semibold tracking-[0.2em] text-accent">
                AA
              </span>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted">
                {siteConfig.name}
              </p>
            </motion.div>
            <div className="h-px w-36 overflow-hidden rounded-full bg-border">
              <motion.div
                className="h-full origin-left bg-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: intro.hold, ease: easings.out }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageIntro />
      {children}
    </>
  );
}

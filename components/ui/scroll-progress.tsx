"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress pointer-events-none fixed inset-x-0 top-0 z-[70] h-px origin-left bg-accent"
      style={{ scaleX: shouldReduceMotion ? 0 : scaleX }}
      aria-hidden="true"
    />
  );
}

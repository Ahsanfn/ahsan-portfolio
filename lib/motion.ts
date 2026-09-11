import type { Transition, Variants } from "framer-motion";

export const easings = {
  out: [0.22, 1, 0.36, 1] as const,
  inOut: [0.4, 0, 0.2, 1] as const,
  exit: [0.76, 0, 0.24, 1] as const,
};

export const duration = {
  fast: 0.22,
  base: 0.45,
  slow: 0.7,
};

/** Intro hold ~900ms, then a short exit. Hero/nav start as the overlay leaves. */
export const intro = {
  hold: 0.9,
  exit: 0.55,
  contentDelay: 0.88,
};

export const springSoft: Transition = {
  type: "spring",
  stiffness: 140,
  damping: 22,
  mass: 0.7,
};

export const tweenOut: Transition = {
  duration: duration.base,
  ease: easings.out,
};

export const viewportOnce = {
  once: true,
  margin: "-72px 0px -32px 0px",
  amount: 0.18 as const,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: tweenOut },
};

export const fadeUpScale: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: tweenOut,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.base, ease: easings.out },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
};

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: easings.out },
  },
};

export const clipReveal: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.55, ease: easings.out },
  },
};

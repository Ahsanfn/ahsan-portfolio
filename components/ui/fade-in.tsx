"use client";

import { type ReactNode } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  return (
    <ScrollReveal className={className} delay={delay}>
      {children}
    </ScrollReveal>
  );
}

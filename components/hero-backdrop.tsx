"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function HeroBackdrop() {
  const shouldReduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const driftRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0, running: false });

  useEffect(() => {
    const drift = driftRef.current;
    const root = rootRef.current;
    if (!drift || !root || shouldReduceMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        drift.classList.toggle("is-paused", !entry.isIntersecting);
      },
      { threshold: 0.05 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const glow = glowRef.current;
    const root = rootRef.current;
    const section = root?.parentElement;
    if (!finePointer || !glow || !root || !section) {
      return;
    }

    const tick = () => {
      const current = pos.current;
      current.x += (current.tx - current.x) * 0.1;
      current.y += (current.ty - current.y) * 0.1;
      glow.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;

      if (
        Math.abs(current.tx - current.x) > 0.4 ||
        Math.abs(current.ty - current.y) > 0.4
      ) {
        frame.current = requestAnimationFrame(tick);
      } else {
        current.running = false;
      }
    };

    const onMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      pos.current.tx = event.clientX - rect.left - 160;
      pos.current.ty = event.clientY - rect.top - 160;
      if (!pos.current.running) {
        pos.current.running = true;
        frame.current = requestAnimationFrame(tick);
      }
    };

    section.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      section.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame.current);
    };
  }, [shouldReduceMotion]);

  return (
    <div ref={rootRef} className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        ref={driftRef}
        className="hero-drift absolute inset-x-0 top-0 h-72 bg-hero-glow"
      />
      <div
        ref={glowRef}
        className="hero-cursor-glow absolute top-0 left-0 hidden size-80 rounded-full md:block motion-reduce:hidden"
      />
    </div>
  );
}

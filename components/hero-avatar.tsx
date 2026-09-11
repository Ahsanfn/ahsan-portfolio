"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { intro } from "@/lib/motion";

export function HeroAvatar() {
  const shouldReduceMotion = useReducedMotion();
  const followRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0, running: false });

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const node = followRef.current;
    if (!finePointer || !node) {
      return;
    }

    const section = node.closest("section");
    if (!section) {
      return;
    }

    const tick = () => {
      const current = pos.current;
      current.x += (current.tx - current.x) * 0.12;
      current.y += (current.ty - current.y) * 0.12;
      node.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;

      if (
        Math.abs(current.tx - current.x) > 0.2 ||
        Math.abs(current.ty - current.y) > 0.2
      ) {
        frame.current = requestAnimationFrame(tick);
      } else {
        current.running = false;
      }
    };

    const onMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;
      pos.current.tx = nx * 10;
      pos.current.ty = ny * 8;
      if (!pos.current.running) {
        pos.current.running = true;
        frame.current = requestAnimationFrame(tick);
      }
    };

    const onLeave = () => {
      pos.current.tx = 0;
      pos.current.ty = 0;
      if (!pos.current.running) {
        pos.current.running = true;
        frame.current = requestAnimationFrame(tick);
      }
    };

    section.addEventListener("pointermove", onMove, { passive: true });
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame.current);
    };
  }, [shouldReduceMotion]);

  return (
    <motion.div
      className="hero-avatar shrink-0"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: shouldReduceMotion ? 0 : intro.contentDelay + 0.12,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      aria-hidden="true"
    >
      <div ref={followRef} className="will-change-transform">
        <div className="hero-avatar-bob">
          <div className="hero-avatar-tilt">
            <PixelDeveloper />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PixelDeveloper() {
  return (
    <svg
      viewBox="0 0 16 18"
      width="112"
      height="126"
      className="hero-avatar-svg h-24 w-[5.33rem] sm:h-[7rem] sm:w-24"
      shapeRendering="crispEdges"
    >
      <rect width="16" height="18" fill="transparent" />
      <rect x="5" y="1" width="6" height="1" fill="var(--foreground)" />
      <rect x="4" y="2" width="8" height="2" fill="var(--foreground)" />
      <rect x="5" y="4" width="6" height="1" fill="var(--foreground)" />
      <rect x="5" y="5" width="6" height="4" fill="#c4b5a5" />
      <rect x="5" y="5" width="6" height="1" fill="var(--foreground)" />
      <rect x="6" y="6" width="1" height="1" fill="var(--foreground)" />
      <rect x="9" y="6" width="1" height="1" fill="var(--foreground)" />
      <rect x="7" y="8" width="2" height="1" fill="#a89080" />
      <rect x="4" y="9" width="8" height="1" fill="var(--accent)" />
      <rect x="4" y="10" width="8" height="4" fill="var(--surface)" />
      <rect x="4" y="10" width="8" height="1" fill="var(--border)" />
      <rect x="6" y="11" width="4" height="1" fill="var(--accent)" />
      <rect x="3" y="11" width="1" height="3" fill="#c4b5a5" />
      <rect x="12" y="11" width="1" height="3" fill="#c4b5a5" />
      <rect x="5" y="14" width="2" height="3" fill="var(--foreground)" />
      <rect x="9" y="14" width="2" height="3" fill="var(--foreground)" />
      <rect x="2" y="13" width="5" height="3" fill="var(--card)" />
      <rect x="2" y="13" width="5" height="1" fill="var(--accent)" />
      <rect x="3" y="14" width="3" height="1" fill="var(--foreground)" />
    </svg>
  );
}

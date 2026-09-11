"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "@/components/social-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NavLink } from "@/components/ui/nav-link";
import { intro, wordReveal } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const delay = shouldReduceMotion ? 0 : intro.contentDelay;

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 12;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("mobile-menu-button")?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300",
        scrolled || open
          ? "border-border/80 bg-background/80 shadow-[0_1px_0_0_color-mix(in_oklab,var(--border)_70%,transparent)]"
          : "border-transparent bg-background/35",
      )}
      initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container
        className={cn(
          "flex items-center justify-between gap-4 transition-[height] duration-300",
          scrolled ? "h-14" : "h-16",
        )}
      >
        <motion.a
          href="#top"
          className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.02, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setOpen(false)}
        >
          <span className="flex size-8 items-center justify-center rounded-md border border-border bg-surface font-mono text-xs font-semibold tracking-tight text-accent">
            AA
          </span>
          <span className="text-sm font-semibold tracking-tight">
            {siteConfig.name}
          </span>
        </motion.a>

        <motion.nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.05, delayChildren: delay + 0.1 },
            },
          }}
        >
          {navItems.map((item) => (
            <motion.div key={item.href} variants={wordReveal}>
              <NavLink href={item.href} className="rounded-md px-3 py-2 text-sm">
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </motion.nav>

        <motion.div
          className="hidden items-center gap-1 lg:flex"
          initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.28, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <SocialLinks />
          <ThemeToggle />
          <Button
            href={siteConfig.resumePath}
            variant="secondary"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Button>
        </motion.div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Button
            type="button"
            id="mobile-menu-button"
            variant="ghost"
            size="icon"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </Button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            className="overflow-x-hidden overflow-y-auto border-t border-border bg-background lg:hidden"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <Container className="flex max-h-[calc(100svh-4rem)] flex-col gap-4 py-6">
              <nav className="flex flex-col" aria-label="Mobile">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-1 py-3 text-base text-foreground"
                    onNavigate={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <SocialLinks />
                <Button
                  href={siteConfig.resumePath}
                  variant="secondary"
                  size="sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
};

const isInternalRoute = (href: string) =>
  href.startsWith("/") && !href.startsWith("//");

export function NavLink({ href, children, className, onNavigate }: NavLinkProps) {
  const classes = cn(
    "nav-underline rounded-sm text-muted transition-colors duration-200 hover:text-foreground",
    "focus-visible:outline-none focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    className,
  );

  if (isInternalRoute(href)) {
    return (
      <Link href={href} onClick={() => onNavigate?.()} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} onClick={() => onNavigate?.()} className={classes}>
      {children}
    </a>
  );
}

"use client";

import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
};

export function NavLink({ href, children, className, onNavigate }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={() => onNavigate?.()}
      className={cn(
        "nav-underline rounded-sm text-muted transition-colors duration-200 hover:text-foreground",
        "focus-visible:outline-none focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      {children}
    </a>
  );
}

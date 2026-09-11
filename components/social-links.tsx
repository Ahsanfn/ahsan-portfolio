import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const iconClass = "size-4";

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
  showEmail?: boolean;
};

function SocialControl({
  href,
  label,
  className,
  children,
}: {
  href?: string | null;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = cn(
    "social-icon inline-flex size-10 items-center justify-center rounded-lg text-muted",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <span title={`${label} coming soon`} aria-label={`${label} coming soon`} className={cn(classes, "text-muted/60")}>
      {children}
    </span>
  );
}

export function SocialLinks({
  className,
  iconClassName,
  showEmail = false,
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <SocialControl
        href={siteConfig.social.github.href}
        label="GitHub"
        className={iconClassName}
      >
        <GitHubIcon className={iconClass} />
      </SocialControl>
      <SocialControl
        href={siteConfig.social.linkedin.href}
        label="LinkedIn"
        className={iconClassName}
      >
        <LinkedInIcon className={iconClass} />
      </SocialControl>
      {showEmail ? (
        <a
          href={`mailto:${siteConfig.email}`}
          aria-label="Email"
          className={cn(
            "social-icon inline-flex size-10 items-center justify-center rounded-lg text-muted",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            iconClassName,
          )}
        >
          <Mail className={iconClass} aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const isComingSoon = project.status === "coming-soon";

  return (
    <article className="project-card group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-surface">
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full items-end justify-between bg-project-placeholder p-5 transition-transform duration-500 ease-out group-hover:scale-[1.04]">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {project.title
                .split(" ")
                .slice(0, 2)
                .map((word) => word[0])
                .join("")}
            </span>
            {isComingSoon ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-2.5 py-1 text-[11px] font-medium text-muted backdrop-blur-sm">
                <span className="coming-soon-dot size-1.5 rounded-full bg-accent" />
                Coming Soon
              </span>
            ) : null}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          {isComingSoon && project.image ? (
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-2 py-0.5 text-[11px] text-muted">
              <span className="coming-soon-dot size-1.5 rounded-full bg-accent" />
              Coming Soon
            </span>
          ) : null}
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="skill-chip">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-3 text-sm">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link inline-flex items-center gap-1.5 text-muted"
            >
              <GitHubIcon className="size-3.5" />
              Code
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-muted/50">
              <GitHubIcon className="size-3.5" />
              Code soon
            </span>
          )}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={cn("project-link inline-flex items-center gap-1.5 text-muted")}
            >
              Live
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-muted/50">
              Live soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

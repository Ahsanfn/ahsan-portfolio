import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import type { Project } from "@/types/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  const isComingSoon = project.status === "coming-soon";

  return (
    <article className="project-card flex h-full flex-col rounded-2xl border border-border bg-card p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        {isComingSoon ? (
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted">
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

      {project.githubUrl || project.liveUrl ? (
        <div className="mt-5 flex items-center gap-4 text-sm">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link inline-flex items-center gap-1.5 text-muted"
            >
              <GitHubIcon className="size-3.5" />
              Code
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link inline-flex items-center gap-1.5 text-muted"
            >
              Live
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
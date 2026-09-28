import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/types/portfolio";

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function ArticleCard({ article }: { article: Article }) {
  const isPublished = Boolean(article.href);

  return (
    <article className="project-card flex h-full flex-col rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="skill-chip">{article.category}</span>
        <time dateTime={article.date} className="text-xs text-muted">
          {formatDate(article.date)}
        </time>
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
        {article.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {article.description}
      </p>

      <div className="mt-6">
        {isPublished ? (
          <Link
            href={article.href as string}
            className="project-link inline-flex items-center gap-1.5 text-sm font-medium text-accent"
          >
            Read Article
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm text-muted/60">
            Read Article
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
            <span className="ml-1 text-[11px] uppercase tracking-[0.16em]">
              Coming Soon
            </span>
          </span>
        )}
      </div>
    </article>
  );
}
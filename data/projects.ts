import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "project-management-saas",
    title: "Project Management SaaS",
    description:
      "A full-stack product for planning work, tracking progress and collaborating across teams.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    image: null,
    githubUrl: null,
    liveUrl: null,
    featured: true,
    status: "coming-soon",
  },
  {
    id: "ai-support-saas",
    title: "AI Customer Support SaaS",
    description:
      "A knowledge-base assistant that answers product questions with retrieval-augmented generation.",
    technologies: ["Next.js", "OpenAI API", "RAG"],
    image: null,
    githubUrl: null,
    liveUrl: null,
    featured: true,
    status: "coming-soon",
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description:
      "A storefront and catalog experience with a checkout-oriented architecture.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    image: null,
    githubUrl: null,
    liveUrl: null,
    featured: true,
    status: "coming-soon",
  },
  {
    id: "ai-powered-application",
    title: "AI-powered Application",
    description:
      "An application that uses modern AI APIs for practical product workflows.",
    technologies: ["React", "Node.js", "OpenAI API"],
    image: null,
    githubUrl: null,
    liveUrl: null,
    featured: true,
    status: "coming-soon",
  },
];
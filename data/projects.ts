import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "project-management-saas",
    title: "Project Management SaaS",
    description:
      "A full-stack product for planning work, tracking progress and collaborating across teams. Architecture is being prepared for a real case study.",
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
      "A knowledge-base assistant for answering product questions with retrieval-augmented generation. Details and demos will be added when the build is ready to share.",
    technologies: ["Next.js", "OpenAI API", "RAG", "LangChain"],
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
      "A storefront and catalog experience with checkout-oriented architecture. This card is a placeholder until a live build and write-up are available.",
    technologies: ["Next.js", "TypeScript", "REST APIs", "PostgreSQL"],
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
      "An application that uses modern AI APIs for practical product workflows. Source, screenshots and a live URL will replace this coming-soon state.",
    technologies: ["React.js", "Node.js", "OpenAI API", "TypeScript"],
    image: null,
    githubUrl: null,
    liveUrl: null,
    featured: true,
    status: "coming-soon",
  },
];

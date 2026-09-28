import type { Article } from "@/types/portfolio";

/**
 * Placeholder articles.
 *
 * To publish a real post:
 * 1. Update `title`, `description`, `category` and `date`.
 * 2. Set `href` to the post URL (e.g. "/articles/my-post" or an external link).
 *    While `href` is `null`, the card shows a "Read Article" action that is
 *    disabled and marked "Coming Soon".
 * 3. Keep the newest posts first — the list renders in this order.
 */
export const articles: Article[] = [
  {
    id: "rag-in-practice",
    title: "RAG in practice: grounding LLM answers in your own data",
    description:
      "How I approach retrieval-augmented generation — chunking, embeddings, retrieval, and keeping responses grounded instead of hallucinated.",
    category: "RAG",
    date: "2026-01-15",
    href: null,
  },
  {
    id: "ai-agents-101",
    title: "AI agents 101: from single prompts to tool-using systems",
    description:
      "A practical look at what makes an AI agent, how tool calling works, and where agents make sense in real products.",
    category: "AI Agents",
    date: "2026-01-08",
    href: null,
  },
  {
    id: "openai-api-patterns",
    title: "OpenAI API patterns for production apps",
    description:
      "Streaming, structured outputs, error handling, and cost-aware patterns I use when wiring LLMs into a real application.",
    category: "LLMs",
    date: "2025-12-20",
    href: null,
  },
  {
    id: "nextjs-app-router-notes",
    title: "Next.js App Router notes for real projects",
    description:
      "Server vs client components, data fetching, and structure decisions that keep a Next.js codebase tidy as it grows.",
    category: "Next.js",
    date: "2025-12-11",
    href: null,
  },
  {
    id: "typescript-full-stack",
    title: "TypeScript across the full stack",
    description:
      "Sharing types between the frontend and backend, validating boundaries, and catching bugs before runtime.",
    category: "TypeScript",
    date: "2025-11-28",
    href: null,
  },
  {
    id: "building-ai-products",
    title: "Building AI-powered products that people actually use",
    description:
      "Turning an LLM demo into a product: scoping the problem, designing the UX, and shipping something reliable.",
    category: "AI Products",
    date: "2025-11-14",
    href: null,
  },
];
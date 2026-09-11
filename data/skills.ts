import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Material UI",
      "Redux Toolkit",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "JWT Authentication",
      "OAuth",
      "WebSockets",
    ],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase Firestore"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Git", "GitHub", "Docker", "AWS Basics", "Vercel", "CI/CD"],
  },
  {
    title: "AI",
    items: [
      "OpenAI API",
      "AI Chatbots",
      "RAG",
      "Prompt Engineering",
      "LangChain",
      "AI Agents",
      "MCP Fundamentals",
    ],
  },
  {
    title: "Tools",
    items: ["Cursor", "Figma", "Adobe XD", "Postman"],
  },
];

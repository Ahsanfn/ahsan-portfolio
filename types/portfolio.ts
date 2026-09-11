export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string | null;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  role: string;
  headline: string;
  supportingText: string;
  email: string;
  resumePath: string;
  location: string;
  social: {
    github: SocialLink;
    linkedin: SocialLink;
  };
};

export type ExperienceItem = {
  company: string;
  engagement?: string;
  role: string;
  start: string;
  end: string;
  highlights: string[];
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type ProjectStatus = "coming-soon" | "live";

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string | null;
  githubUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
  status: ProjectStatus;
};

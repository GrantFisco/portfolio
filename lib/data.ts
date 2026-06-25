// lib/data.ts

export const PROJECTS = [
  {
    slug: "document-namer", // <-- This is the new ID for the URL
    title: "Document Namer",
    description: "An automated PDF metadata extraction tool...",
    content: "Here is a much longer explanation of how I built the Document Namer using the Gemini API. It streams responses to...",
    techStack: ["Next.js", "TypeScript", "FastAPI", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/document-namer"
  },
  {
    slug: "enterprise-data-vis",
    title: "Enterprise Data Vis",
    description: "A team-based software development project...",
    content: "Working on a team of four, we architected this visualization platform...",
    techStack: ["React", "TypeScript", "SQL"],
    githubUrl: "https://github.com/yourusername/data-vis"
  }
];

// Helper function to find a project by its slug
export function getProjectBySlug(slug: string) {
  return PROJECTS.find(project => project.slug === slug);
}
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

// lib/data.ts (Add this to the bottom of your existing file)

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "automating-pdf-metadata-extraction",
    title: "Automating PDF Metadata Extraction with the Gemini API",
    date: "June 24, 2026",
    excerpt: "A deep dive into building 'Document Namer'—leveraging LLM streaming responses to organize system-level files efficiently.",
    tags: ["Next.js", "FastAPI", "AI APIs"],
    content: "When managing large volumes of documentation, manual renaming is a massive bottleneck. In this post, I break down how I built Document Namer. The backend uses FastAPI to parse PDF schemas, which are then passed to the Google Gemini API using structured JSON outputs. On the frontend, Next.js handles the chunked streaming response to update the UI in real time..."
  },
  {
    slug: "lessons-learned-in-enterprise-data-vis",
    title: "Architecting Performance in Enterprise Data Visualization",
    date: "June 10, 2026",
    excerpt: "Reflecting on engineering tradeoffs, state management, and team collaboration while building an enterprise analytics dashboard.",
    tags: ["React", "TypeScript", "UI/UX"],
    content: "Working in a team of four to build a full-scale data visualization tool teaches you a lot about communication—both between developers and between software components. We ran into early rendering bottlenecks when loading large datasets into standard React state. By optimizing component mounting life-cycles and implementing strict TypeScript interfaces, we reduced re-renders by 40%..."
  }
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find(post => post.slug === slug);
}
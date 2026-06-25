// components/ProjectCard.tsx
import Link from 'next/link';

// 1. Define the shape of our data
export interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  slug: string; // Updated from linkUrl to handle internal routing
}

// 2. Build the component
export default function ProjectCard({ title, description, techStack, slug }: ProjectProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white flex flex-col h-full">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.map((tech, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Replaced <a> with Next.js <Link> for client-side navigation */}
      <Link 
        href={`/projects/${slug}`}
        className="text-blue-600 font-medium hover:underline flex items-center gap-1"
      >
        View Project &rarr;
      </Link>
    </div>
  );
}
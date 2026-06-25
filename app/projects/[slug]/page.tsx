// app/projects/[slug]/page.tsx
import { getProjectBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// 1. Change the type signature so params is a Promise, and make the component async
export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  
  // 2. Await the params to unwrap the Promise
  const resolvedParams = await params;
  
  // 3. Now it is safe to extract the slug
  const project = getProjectBySlug(resolvedParams.slug);

  // If the URL slug doesn't match any project in our data, trigger the 404 page
  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
        &larr; Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
      
      <div className="flex gap-2 mb-8">
        {project.techStack.map(tech => (
          <span key={tech} className="px-3 py-1 bg-gray-100 text-sm rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <div className="prose lg:prose-lg text-gray-700">
        <p>{project.content}</p>
      </div>

      <a 
        href={project.githubUrl} 
        target="_blank" 
        rel="noreferrer"
        className="mt-10 inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
      >
        View Source Code
      </a>
    </main>
  );
}
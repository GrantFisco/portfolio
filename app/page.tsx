// app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { PROJECTS } from '@/lib/data'; // 1. Import our central data!

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-blue-200">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="projects" className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                slug={project.slug} // 2. Changed from linkUrl to slug!
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Your Name. Built with Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}
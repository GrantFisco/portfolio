// components/Hero.tsx
export default function Hero() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto flex flex-col justify-center min-h-[60vh]">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
        Building data-driven <br className="hidden md:block" />
        <span className="text-blue-600">software solutions.</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
        I'm a Computer Science student and Data & Analytics Intern specializing in full-stack engineering, business intelligence, and building tools that automate complex workflows.
      </p>
      <div className="flex gap-4">
        <a 
          href="#projects" 
          className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          View My Work
        </a>
        <a 
          href="mailto:your-email@example.com" 
          className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
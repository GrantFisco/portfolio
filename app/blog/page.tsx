// app/blog/page.tsx
import Navbar from '@/components/Navbar';
import { BLOG_POSTS } from '@/lib/data';
import Link from 'next/link';

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <main className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
          Technical Writing
        </h1>
        <p className="text-gray-600 mb-12">
          Documenting my engineering journey, architectural choices, and technical deep dives.
        </p>

        <div className="space-y-10">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8 last:border-0">
              <span className="text-sm text-gray-500 font-medium">{post.date}</span>
              <h2 className="text-2xl font-bold text-gray-900 mt-1 mb-3 hover:text-blue-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
              
              <div className="flex gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-0.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
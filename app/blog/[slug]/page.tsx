// app/blog/[slug]/page.tsx
import { getPostBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <main className="max-w-2xl mx-auto py-16 px-6">
        <Link href="/blog" className="text-blue-600 hover:underline text-sm font-medium mb-8 inline-block">
          &larr; Back to all posts
        </Link>
        
        <header className="mb-8">
          <span className="text-sm text-gray-500 font-medium">{post.date}</span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mt-2 mb-4">
            {post.title}
          </h1>
          <div className="flex gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Body */}
        <div className="text-gray-800 leading-relaxed space-y-6 text-lg">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </main>
    </div>
  );
}
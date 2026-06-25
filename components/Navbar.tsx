// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full py-6 px-4 md:px-8 flex justify-between items-center max-w-5xl mx-auto">
      <Link href="/" className="text-xl font-bold tracking-tighter hover:text-blue-600 transition-colors">
        GF.
      </Link>
      <div className="flex gap-6 text-sm font-medium text-gray-600">
        <Link href="#projects" className="hover:text-black transition-colors">
          Projects
        </Link>
        <Link href="/blog" className="hover:text-black transition-colors">
          Blog
        </Link>
        <a href="https://github.com/GrantFisco" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
          GitHub
        </a>
      </div>
    </nav>
  );
}
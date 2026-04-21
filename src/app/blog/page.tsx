import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import Blog from '@/components/blog';

export default async function BlogPage() {
  const allPosts = await getBlogPosts();
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F4F6]">
      <main className="mx-auto max-w-5xl px-6 pb-20 pt-12">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:brightness-110">
          ← Retour
        </Link>
        <div className="mb-12">
          <h1 className="mb-3 font-headline text-4xl text-[#F3F4F6] md:text-5xl">Crypto Insights</h1>
          <p className="text-[#F3F4F6]/50">
            Analyses de marché, guides et actualités pour maîtriser les actifs numériques.
          </p>
        </div>
        <Blog posts={allPosts} />
      </main>
    </div>
  );
}

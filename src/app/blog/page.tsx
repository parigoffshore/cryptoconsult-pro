import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import Blog from '@/components/blog';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default async function BlogPage() {
  const allPosts = await getBlogPosts();
  return (
    <div className="min-h-screen bg-gold-ingot text-[#0A0A0A]">
      <main className="mx-auto max-w-6xl px-4 sm:px-6 pb-24 pt-12">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-lg bg-[#0A0A0A] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] shadow-md transition hover:brightness-110"
        >
          <ArrowLeft className="h-4 w-4" /> Retour à l&apos;Accueil
        </Link>

        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0A0A0A] px-4 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#D4AF37] mb-3">
            <Sparkles className="h-3.5 w-3.5" /> Recherche &amp; Stratégie Patrimoniale
          </div>
          <h1 className="mb-3 font-headline text-4xl font-bold text-[#0A0A0A] md:text-6xl">
            Crypto Insights
          </h1>
          <p className="mx-auto max-w-2xl text-sm sm:text-base font-medium text-[#2A2005]">
            Analyses macro-économiques, décryptages institutionnels et guides de souveraineté financière par David Birota.
          </p>
        </div>

        <Blog posts={allPosts} />
      </main>
    </div>
  );
}

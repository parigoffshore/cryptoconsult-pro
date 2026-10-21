import { getBlogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, UserCheck, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';
import { format } from 'date-fns';

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = (await getBlogPosts()).find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: 'Article Introuvable | CryptoConsult Pro' };
  }

  return {
    title: `${post.metadata.title} | CryptoConsult Pro`,
    description: post.metadata.summary,
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const resolvedParams = await params;
  const post = (await getBlogPosts()).find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  let formattedDate = post.metadata.date;
  try {
    formattedDate = format(new Date(post.metadata.date), 'dd/MM/yyyy');
  } catch (e) {}

  return (
    <div className="min-h-screen bg-gold-ingot py-12 px-4 sm:px-6 lg:px-8">
      <main className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0A0A0A] px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#D4AF37] shadow-md transition hover:brightness-110"
          >
            <ArrowLeft className="h-4 w-4" /> Retour aux Articles
          </Link>
        </div>

        <article className="onyx-card rounded-2xl p-6 sm:p-12 lg:p-14">
          <header className="border-b border-[#D4AF37]/30 pb-8 mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {(post.metadata.categories || ['Stratégie']).map(category => (
                <Badge
                  key={category}
                  className="bg-[#D4AF37] text-[#0A0A0A] font-black text-[10px] uppercase tracking-widest hover:bg-[#D4AF37]"
                >
                  {category}
                </Badge>
              ))}
            </div>

            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {post.metadata.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-300">
              <span className="flex items-center gap-1.5 font-semibold">
                <UserCheck className="h-4 w-4 text-[#D4AF37]" />
                Par <strong className="text-white">{post.metadata.author || 'David Birota — Crypto Consult Pro'}</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-[#D4AF37]" />
                Publié le {formattedDate}
              </span>
            </div>
          </header>

          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:font-headline prose-headings:text-[#D4AF37] prose-p:text-gray-200 prose-p:leading-relaxed prose-strong:text-white prose-li:text-gray-200 prose-a:text-[#D4AF37]"
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
          />

          {/* BANDEAU DE CONVERSION FIN D'ARTICLE */}
          <div className="mt-12 pt-8 border-t-2 border-[#D4AF37]/40">
            <div className="rounded-xl bg-gradient-to-r from-[#171204] via-[#0f0f0f] to-[#171204] border border-[#D4AF37] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37]">
                  <Sparkles className="h-3.5 w-3.5" /> Passez de la théorie à l&apos;action
                </div>
                <h3 className="font-headline text-2xl text-white">
                  Votre portefeuille est-il préparé pour ce cycle ?
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Testez gratuitement votre profil d&apos;investisseur en 2 minutes sur notre simulateur interactif ou réservez votre appel stratégique avec David Birota.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
                <Link
                  href="/#simulateur"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-3 text-xs font-black uppercase tracking-wider text-[#0A0A0A] transition hover:brightness-110"
                >
                  Tester mon Profil <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/#reservation"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#D4AF37]/50 bg-[#0A0A0A] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#D4AF37] transition hover:bg-white/5"
                >
                  Appel Stratégique
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

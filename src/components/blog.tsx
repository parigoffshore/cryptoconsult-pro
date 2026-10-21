"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/lib/blog';
import { Search, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

interface BlogProps {
  posts: BlogPost[];
}

function getCardCover(title: string = '', index: number = 0, customImg?: string) {
  if (customImg && customImg.startsWith('/images/blog/')) return customImg;
  const t = title.toLowerCase();
  let label = "THÈSE MACRO & PATRIMOINE";
  if (t.includes('defi') || t.includes('rente') || t.includes('yield')) label = "DEFI & RENDEMENT";
  else if (t.includes('sec') || t.includes('etf') || t.includes('wall street')) label = "ANALYSE INSTITUTIONNELLE";
  else if (t.includes('pierre') || t.includes('immo')) label = "INGÉNIERIE PATRIMONIALE";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 320">
    <defs>
      <linearGradient id="g${index}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#070707"/>
        <stop offset="55%" stop-color="#171204"/>
        <stop offset="100%" stop-color="#090909"/>
      </linearGradient>
    </defs>
    <rect width="600" height="320" fill="url(#g${index})"/>
    <path d="M 30 260 Q 180 220, 290 150 T 560 60" fill="none" stroke="#D4AF37" stroke-width="2.5" opacity="0.7"/>
    <circle cx="560" cy="60" r="6" fill="#F3E0A2"/>
    <rect x="28" y="28" width="240" height="26" rx="4" fill="#0A0A0A" stroke="#D4AF37" stroke-opacity="0.5"/>
    <text x="40" y="45" fill="#D4AF37" font-family="sans-serif" font-size="10" font-weight="bold" letter-spacing="2">${label}</text>
    <text x="28" y="295" fill="#9CA3AF" font-family="sans-serif" font-size="9" font-weight="bold" letter-spacing="2">CRYPTO CONSULT PRO · RECHERCHE</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default function Blog({ posts }: BlogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const safePosts = posts || [];
  const allCategories = [...new Set(safePosts.flatMap(post => post?.metadata?.categories || []))];

  const filteredPosts = safePosts.filter(post => {
    const title = post?.metadata?.title || '';
    const summary = post?.metadata?.summary || '';
    const categories = post?.metadata?.categories || [];

    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? categories.includes(selectedCategory) : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="flex flex-col items-center gap-4 mb-12">
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#D4AF37]" />
          <Input
            type="search"
            placeholder="Rechercher une note de recherche (ex: Bitcoin, DeFi, Rente)..."
            className="h-12 rounded-xl border border-[#D4AF37]/50 bg-[#0A0A0A] pl-10 text-sm text-white placeholder:text-gray-400 shadow-lg focus:border-[#D4AF37]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 pt-1">
          <Button
            variant="outline"
            onClick={() => setSelectedCategory(null)}
            className={`rounded-lg text-xs font-black uppercase tracking-wider px-4 py-2 transition ${
              !selectedCategory
                ? 'bg-[#0A0A0A] text-[#D4AF37] border-2 border-[#0A0A0A] shadow-md'
                : 'bg-[#0A0A0A]/80 text-gray-300 border border-[#D4AF37]/30 hover:text-[#D4AF37]'
            }`}
          >
            Toutes les Publications ({safePosts.length})
          </Button>
          {allCategories.map(category => (
            <Button
              key={category}
              variant="outline"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-lg text-xs font-black uppercase tracking-wider px-4 py-2 transition ${
                selectedCategory === category
                  ? 'bg-[#0A0A0A] text-[#D4AF37] border-2 border-[#0A0A0A] shadow-md'
                  : 'bg-[#0A0A0A]/80 text-gray-300 border border-[#D4AF37]/30 hover:text-[#D4AF37]'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post, idx) => {
          let formattedDate = post?.metadata?.date || '';
          try {
            if (post?.metadata?.date) {
              formattedDate = format(new Date(post.metadata.date), 'dd/MM/yyyy');
            }
          } catch (e) {}

          const anyMeta = (post?.metadata || {}) as any;
          const imgSrc = getCardCover(anyMeta.title, idx, anyMeta.image || anyMeta.coverImage);

          return (
            <Link
              href={`/blog/${post?.slug || '#'}`}
              key={post?.slug || idx}
              className="onyx-card onyx-card-hover group flex h-full flex-col justify-between overflow-hidden rounded-2xl"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden border-b border-[#D4AF37]/25 bg-[#050505]">
                  <img
                    src={imgSrc}
                    alt={anyMeta.title || 'Analyse'}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge
                      variant="secondary"
                      className="rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]"
                    >
                      {anyMeta.categories?.[0] || 'Note de Recherche'}
                    </Badge>
                    <span className="flex items-center gap-1 text-[11px] font-medium text-gray-400">
                      <Calendar className="h-3 w-3 text-[#D4AF37]" />
                      {formattedDate}
                    </span>
                  </div>

                  <h2 className="font-headline text-xl font-bold leading-snug text-white transition-colors group-hover:text-[#D4AF37] mb-3 line-clamp-2">
                    {anyMeta.title || 'Analyse Stratégique'}
                  </h2>

                  <p className="text-xs sm:text-sm leading-relaxed text-gray-300 line-clamp-3">
                    {anyMeta.summary || ''}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-bold text-gray-400">Par David Birota</span>
                <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                  Lire la note <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

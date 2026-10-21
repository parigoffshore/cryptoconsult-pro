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
            placeholder="Rechercher une analyse (ex: Bitcoin, DeFi, BCE, Rente)..."
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
            Tous les articles ({safePosts.length})
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
        {filteredPosts.map(post => {
          let formattedDate = post?.metadata?.date || '';
          try {
            if (post?.metadata?.date) {
              formattedDate = format(new Date(post.metadata.date), 'dd/MM/yyyy');
            }
          } catch (e) {}

          return (
            <Link
              href={`/blog/${post?.slug || '#'}`}
              key={post?.slug || Math.random().toString()}
              className="onyx-card onyx-card-hover group flex h-full flex-col justify-between rounded-2xl p-7"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {(post?.metadata?.categories || ['Stratégie']).slice(0, 2).map(category => (
                      <Badge
                        key={category}
                        variant="secondary"
                        className="rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-medium text-gray-400">
                    <Calendar className="h-3 w-3 text-[#D4AF37]" />
                    {formattedDate}
                  </span>
                </div>

                <h2 className="font-headline text-xl font-bold leading-snug text-white transition-colors group-hover:text-[#D4AF37] mb-3">
                  {post?.metadata?.title || 'Analyse Stratégique'}
                </h2>

                <p className="text-sm leading-relaxed text-gray-300 line-clamp-4">
                  {post?.metadata?.summary || ''}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-bold text-gray-400">Par David Birota</span>
                <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                  Lire l&apos;article <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {filteredPosts.length === 0 && (
        <div className="onyx-card mx-auto max-w-xl rounded-2xl p-12 text-center my-8">
          <p className="text-base font-bold text-white">Aucun article ne correspond à votre recherche.</p>
        </div>
      )}
    </div>
  );
}

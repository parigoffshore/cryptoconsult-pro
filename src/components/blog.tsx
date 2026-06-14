"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/lib/blog';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // SÉCURITÉ 1 : Valeur de repli (fallback) si "posts" n'est pas encore disponible
  const safePosts = posts || [];

  // SÉCURITÉ 2 : Chaînage optionnel sur les métadonnées pour éviter les plantages
  const allCategories = [...new Set(safePosts.flatMap(post => post?.metadata?.categories || []))];

  const filteredPosts = safePosts.filter(post => {
    const title = post?.metadata?.title || '';
    const summary = post?.metadata?.summary || '';
    const categories = post?.metadata?.categories || [];

    const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? categories.includes(selectedCategory) : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#333]" />
          <Input
            type="search"
            placeholder="Search posts..."
            className="border-[#1c1c1c] bg-[#0f0f0f] pl-10 text-[#F3F4F6] placeholder:text-[#333]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
            <Button
                variant={!selectedCategory ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(null)}
                className={`whitespace-nowrap ${!selectedCategory ? 'bg-[#D4AF37] text-[#0A0A0A] hover:bg-[#D4AF37]' : 'border-[#1c1c1c] bg-[#0f0f0f] text-[#F3F4F6] hover:border-[#D4AF37]/30 hover:text-[#D4AF37]'}`}
            >
                All
            </Button>
            {allCategories.map(category => (
                <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap ${selectedCategory === category ? 'bg-[#D4AF37] text-[#0A0A0A] hover:bg-[#D4AF37]' : 'border-[#1c1c1c] bg-[#0f0f0f] text-[#F3F4F6] hover:border-[#D4AF37]/30 hover:text-[#D4AF37]'}`}
                >
                    {category}
                </Button>
            ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map(post => {
          // SÉCURITÉ 3 : Prévenir les erreurs de formatage si la date est mal générée
          let formattedDate = '';
          try {
            if (post?.metadata?.date) {
              formattedDate = format(new Date(post.metadata.date), 'MM/dd/yyyy');
            }
          } catch (e) {
            console.error("Erreur formatage date:", e);
          }

          return (
            <Link href={`/blog/${post?.slug || '#'}`} key={post?.slug || Math.random().toString()} className="group">
              <Card className="flex h-full flex-col rounded-md border border-[#1a1a1a] bg-[#0f0f0f] transition-colors hover:border-[#D4AF37]/30">
                <CardHeader>
                  <CardTitle className="text-[#d0cac0] transition-colors group-hover:text-[#D4AF37]">
                    {post?.metadata?.title || 'Titre indisponible'}
                  </CardTitle>
                  <CardDescription className="text-[#404040]">{formattedDate}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-[#404040]">{post?.metadata?.summary || ''}</p>
                </CardContent>
                <CardFooter className="flex-wrap gap-2">
                  {(post?.metadata?.categories || []).map(category => (
                    <Badge key={category} variant="secondary" className="border-none bg-[#1a1200] text-[#D4AF37]">
                      {category}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </div>
       {filteredPosts.length === 0 && (
          <div className="text-center col-span-full py-16">
            <p className="text-lg text-[#404040]">Aucun article disponible pour le moment.</p>
          </div>
       )}
    </div>
  );
}

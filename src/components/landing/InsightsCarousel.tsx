"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, BookOpen, Calendar, ShieldCheck } from 'lucide-react';

interface CarouselPost {
  slug: string;
  metadata: {
    title?: string;
    date?: string;
    summary?: string;
    image?: string;
    coverImage?: string;
    categories?: string[];
  };
}

// Générateur de visuels institutionnels SVG 16:9 Noir & Or pour les articles existants
function getInstitutionalArtwork(title: string = '', index: number = 0, customImage?: string) {
  if (customImage && customImage.startsWith('/images/blog/')) {
    return customImage;
  }

  const t = title.toLowerCase();
  let themeLabel = "STRATÉGIE MACRO & SOUVERAINETÉ";
  let accentSymbol = "₿";

  if (t.includes('defi') || t.includes('rente') || t.includes('yield')) {
    themeLabel = "INGÉNIERIE DEFI & RENDEMENT";
    accentSymbol = "◈";
  } else if (t.includes('banque') || t.includes('sec') || t.includes('wall street') || t.includes('etf')) {
    themeLabel = "ANALYSE INSTITUTIONNELLE";
    accentSymbol = "🏛️";
  } else if (t.includes('immo') || t.includes('pierre') || t.includes('patrimoine')) {
    themeLabel = "ARCHITECTURE PATRIMONIALE";
    accentSymbol = "❖";
  } else if (t.includes('sécurité') || t.includes('garde') || t.includes('dormant')) {
    themeLabel = "AUTO-GARDE & SÉCURITÉ";
    accentSymbol = "🛡️";
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
    <defs>
      <linearGradient id="bg${index}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#050505"/>
        <stop offset="50%" stop-color="#141004"/>
        <stop offset="100%" stop-color="#080808"/>
      </linearGradient>
      <linearGradient id="gold${index}" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#C59B27"/>
        <stop offset="50%" stop-color="#F5E3A6"/>
        <stop offset="100%" stop-color="#D4AF37"/>
      </linearGradient>
      <radialGradient id="glow${index}" cx="75%" cy="35%" r="50%">
        <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.28"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="800" height="450" fill="url(#bg${index})"/>
    <rect width="800" height="450" fill="url(#glow${index})"/>
    <g stroke="#D4AF37" stroke-opacity="0.12" stroke-width="1">
      <line x1="0" y1="90" x2="800" y2="90"/>
      <line x1="0" y1="180" x2="800" y2="180"/>
      <line x1="0" y1="270" x2="800" y2="270"/>
      <line x1="0" y1="360" x2="800" y2="360"/>
      <line x1="160" y1="0" x2="160" y2="450"/>
      <line x1="320" y1="0" x2="320" y2="450"/>
      <line x1="480" y1="0" x2="480" y2="450"/>
      <line x1="640" y1="0" x2="640" y2="450"/>
    </g>
    <path d="M 60 360 Q 220 320, 340 240 T 580 140 T 740 70" fill="none" stroke="url(#gold${index})" stroke-width="3.5" opacity="0.85"/>
    <circle cx="580" cy="140" r="6" fill="#F5E3A6"/>
    <circle cx="740" cy="70" r="8" fill="#D4AF37"/>
    <polygon points="560,75 680,145 560,215 440,145" fill="none" stroke="url(#gold${index})" stroke-width="1.8" opacity="0.45"/>
    <polygon points="560,105 650,155 560,205 470,155" fill="#D4AF37" fill-opacity="0.08" stroke="#D4AF37" stroke-width="1" opacity="0.6"/>
    <rect x="45" y="42" width="290" height="32" rx="6" fill="#0A0A0A" stroke="#D4AF37" stroke-opacity="0.5"/>
    <text x="62" y="63" fill="#D4AF37" font-family="sans-serif" font-size="11" font-weight="bold" letter-spacing="2.5">${themeLabel}</text>
    <text x="640" y="340" fill="url(#gold${index})" fill-opacity="0.18" font-family="serif" font-size="150" font-weight="bold" text-anchor="middle">${accentSymbol}</text>
    <text x="45" y="415" fill="#9CA3AF" font-family="sans-serif" font-size="11" font-weight="bold" letter-spacing="3">CABINET CRYPTO CONSULT PRO · RECHERCHE PATRIMONIALE</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default function InsightsCarousel({ posts }: { posts: CarouselPost[] }) {
  const items = (posts || []).slice(0, 6);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (items.length <= 1 || isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [items.length, isPaused]);

  if (items.length === 0) return null;

  const currentPost = items[activeIndex];
  const secondaryPosts = [
    items[(activeIndex + 1) % items.length],
    items[(activeIndex + 2) % items.length],
  ].filter(Boolean);

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % items.length);

  const coverSrc = getInstitutionalArtwork(
    currentPost?.metadata?.title,
    activeIndex,
    currentPost?.metadata?.image || currentPost?.metadata?.coverImage
  );

  return (
    <div
      className="mx-auto max-w-6xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* CARTE VEDETTE DU CARROUSEL (IMAGE 16:9 + THÈSE DU CABINET) */}
      <div className="onyx-card overflow-hidden rounded-2xl border-2 border-[#D4AF37]/60">
        <div className="grid lg:grid-cols-[1.15fr_1fr] items-stretch">
          {/* VISUEL D'ILLUSTRATION 16:9 */}
          <Link
            href={`/blog/${currentPost.slug}`}
            className="relative block min-h-[260px] sm:min-h-[340px] overflow-hidden bg-[#050505] group border-b lg:border-b-0 lg:border-r border-[#D4AF37]/30"
          >
            <img
              src={coverSrc}
              alt={currentPost.metadata?.title || 'Note de Recherche Crypto Consult Pro'}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#0A0A0A]/90 border border-[#D4AF37]/60 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">
                <ShieldCheck className="h-3.5 w-3.5" /> Note Stratégique #{activeIndex + 1} / {items.length}
              </span>
              <span className="rounded-md bg-[#D4AF37] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#0A0A0A] shadow">
                Lecture 4 min
              </span>
            </div>
          </Link>

          {/* CONTENU ÉDITORIAL DE LA NOTE */}
          <div className="p-6 sm:p-10 flex flex-col justify-between bg-[#0A0A0A]">
            <div>
              <div className="flex items-center justify-between gap-2 text-xs text-gray-400 mb-4">
                <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-widest text-[#D4AF37]">
                  <BookOpen className="h-3.5 w-3.5" />
                  {currentPost.metadata?.categories?.[0] || 'Note de Recherche Macro'}
                </span>
                <span className="flex items-center gap-1 text-[11px]">
                  <Calendar className="h-3 w-3 text-[#D4AF37]" />
                  {currentPost.metadata?.date}
                </span>
              </div>

              <Link href={`/blog/${currentPost.slug}`} className="group">
                <h3 className="font-headline text-2xl sm:text-3xl font-bold leading-snug text-white transition-colors group-hover:text-[#D4AF37] mb-4">
                  {currentPost.metadata?.title}
                </h3>
              </Link>

              <p className="text-sm sm:text-base leading-relaxed text-gray-300 line-clamp-3 mb-6">
                {currentPost.metadata?.summary}
              </p>
            </div>

            <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <Link
                href={`/blog/${currentPost.slug}`}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#E6C770] px-5 py-3 text-xs font-black uppercase tracking-wider text-[#0A0A0A] shadow-md transition hover:brightness-110"
              >
                Consulter la Note Complète <ArrowRight className="h-4 w-4" />
              </Link>

              {/* CONTRÔLES DU CARROUSEL */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Note précédente"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D4AF37]/40 bg-[#141414] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0A0A0A]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-1.5 px-2">
                  {items.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Aller à la note ${idx + 1}`}
                      className={
                        idx === activeIndex
                          ? "h-2 w-6 rounded-full bg-[#D4AF37] transition-all"
                          : "h-2 w-2 rounded-full bg-white/25 hover:bg-white/50 transition-all"
                      }
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Note suivante"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D4AF37]/40 bg-[#141414] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0A0A0A]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* APERÇU RAPIDE DES 2 NOTES SUIVANTES EN DESSOUS DU CARROUSEL */}
      {secondaryPosts.length > 0 && (
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {secondaryPosts.map((post, i) => {
            const thumbSrc = getInstitutionalArtwork(
              post?.metadata?.title,
              activeIndex + i + 1,
              post?.metadata?.image || post?.metadata?.coverImage
            );
            return (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug || i}
                className="onyx-card onyx-card-hover group flex items-center gap-4 rounded-xl p-4"
              >
                <div className="h-20 w-28 shrink-0 overflow-hidden rounded-lg border border-[#D4AF37]/30 bg-[#050505]">
                  <img
                    src={thumbSrc}
                    alt={post.metadata?.title || 'Publication'}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                    {post.metadata?.date} · Dossier Stratégique
                  </p>
                  <h4 className="mt-1 font-headline text-sm sm:text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                    {post.metadata?.title}
                  </h4>
                </div>
                <ArrowRight className="h-4 w-4 text-[#D4AF37] shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

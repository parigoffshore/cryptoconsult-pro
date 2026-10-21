import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import { BarChart3, Clock3, FileText, Shield, EyeOff, Globe, Key, Linkedin, Twitter, Instagram, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Testimonials from '@/components/landing/testimonials';
import LeadForm from '@/components/landing/LeadForm';
import CryptoSimulator from '@/components/landing/CryptoSimulator';
import { getBlogPosts } from '@/lib/blog';

export default async function HomePage() {
  const allPosts = await getBlogPosts();
  const latestPosts = (allPosts || []).slice(0, 3);

  return (
    <div className="bg-gold-ingot text-[#0A0A0A] min-h-screen">
      <main>
        {/* ==================== SECTION HERO : LINGOT SATINÉ & ÉCRIN ONYX ==================== */}
        <section
          id="home"
          className="relative flex min-h-[calc(100vh-5rem)] items-center px-4 sm:px-6 py-16 md:py-24 text-center"
        >
          <div className="mx-auto w-full max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4AF37] shadow-lg mb-6 border border-[#D4AF37]/40">
              <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
              Cabinet de Conseil Stratégique · Crypto &amp; Patrimoine depuis 2019
            </div>

            <h1 className="font-headline text-4xl font-bold leading-tight text-[#0A0A0A] sm:text-6xl md:text-7xl drop-shadow-sm">
              L&apos;Architecte de votre
              <br />
              <span className="inline-block mt-2 px-5 py-1 rounded-lg bg-[#0A0A0A] italic text-[#D4AF37] shadow-[0_15px_35px_rgba(0,0,0,0.45)] border border-[#D4AF37]/40">
                Souveraineté Financière
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg font-medium text-[#1F1703] leading-relaxed">
              Protégez, structurez et développez votre patrimoine hors système bancaire grâce à une ingénierie financière sur-mesure alliant discrétion, contrôle Non-Custodial et rendement institutionnel.
            </p>

            {/* MONOLITHE CENTRAL HERO : CAPTURE LEAD & NAVIGATION */}
            <div className="onyx-card mx-auto mt-10 max-w-3xl rounded-2xl p-6 sm:p-8 text-left">
              <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] items-center">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-1">
                    Guide Stratégique Offert
                  </p>
                  <h2 className="font-headline text-xl sm:text-2xl text-white mb-2">
                    Recevez « Le Plan de Sortie » (PDF)
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Découvrez la méthodologie exacte pour sécuriser vos actifs numériques et préparer vos prises de profits de fin de cycle.
                  </p>
                  <LeadForm />
                </div>

                <div className="flex flex-col gap-3 border-t md:border-t-0 md:border-l border-white/10 pt-5 md:pt-0 md:pl-6">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    Diagnostic Immédiat
                  </p>
                  <a
                    href="#simulateur"
                    className="flex items-center justify-between rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#E6C770] px-5 py-3.5 text-xs font-black uppercase tracking-wider text-[#0A0A0A] shadow-md transition hover:brightness-110"
                  >
                    <span>Tester mon Profil Investisseur</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#services"
                    className="flex items-center justify-between rounded-lg border border-[#D4AF37]/50 bg-[#141414] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#D4AF37] transition hover:bg-[#1f1f1f]"
                  >
                    <span>Découvrir nos Services</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <div className="flex items-center gap-2 text-[11px] text-gray-400 pt-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
                    <span>Accompagnement 100% Non-Custodial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SECTION SIMULATEUR DE PROFIL ==================== */}
        <section id="simulateur" className="bg-gold-champagne px-4 sm:px-6 py-20 md:py-28 border-t border-[#0A0A0A]/15">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <span className="inline-block rounded-full bg-[#0A0A0A] px-4 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#D4AF37] mb-3">
                Outil Interactif Gratuit
              </span>
              <h2 className="font-headline text-3xl sm:text-5xl font-bold text-[#0A0A0A]">
                Quel est votre Profil d&apos;Investisseur ?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base font-medium text-[#2A2005]">
                Répondez à 8 questions stratégiques en 2 minutes pour identifier vos vulnérabilités et recevoir votre feuille de route personnalisée.
              </p>
            </div>
            <CryptoSimulator />
          </div>
        </section>

        {/* ==================== SECTION LES 3 PILIERS ==================== */}
        <section id="piliers" className="bg-gold-ingot px-4 sm:px-6 py-20 md:py-28 border-t border-[#0A0A0A]/15">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="inline-block rounded-full bg-[#0A0A0A] px-4 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#D4AF37]">
                Fondements de notre Approche
              </span>
              <h2 className="mt-3 font-headline text-3xl sm:text-5xl font-bold text-[#0A0A0A]">
                Les 3 Piliers de votre Souveraineté
              </h2>
              <p className="mt-3 text-sm sm:text-base font-medium text-[#2A2005]">
                Trois principes institutionnels qui guident chaque architecture patrimoniale
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
              <article className="onyx-card onyx-card-hover relative rounded-xl p-8 text-center">
                <span className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b bg-[#D4AF37]" />
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.25em] text-[#D4AF37]">PILIER 01</p>
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40">
                  <EyeOff className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <h3 className="mb-3 font-headline text-2xl text-white">Confidentialité</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  Protéger votre vie privée financière avec des architectures discrètes, résilientes et conformes.
                </p>
              </article>

              <article className="onyx-card onyx-card-hover relative rounded-xl p-8 text-center">
                <span className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b bg-[#D4AF37]" />
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.25em] text-[#D4AF37]">PILIER 02</p>
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40">
                  <Globe className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <h3 className="mb-3 font-headline text-2xl text-white">Mobilité Internationale</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  Conserver un accès immédiat et sans frontières à votre capital, où que vous résidiez dans le monde.
                </p>
              </article>

              <article className="onyx-card onyx-card-hover relative rounded-xl p-8 text-center">
                <span className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b bg-[#D4AF37]" />
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.25em] text-[#D4AF37]">PILIER 03</p>
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40">
                  <Key className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <h3 className="mb-3 font-headline text-2xl text-white">Auto-Garde Souveraine</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  Éliminer le risque de contrepartie bancaire ou d&apos;exchange grâce aux clés matérielles (Ledger / Rabby).
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ==================== SECTION NOS SERVICES ==================== */}
        <section id="services" className="bg-gold-champagne px-4 sm:px-6 py-20 md:py-28 border-t border-[#0A0A0A]/15">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="inline-block rounded-full bg-[#0A0A0A] px-4 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#D4AF37]">
                Expertise &amp; Accompagnement
              </span>
              <h2 className="mt-3 font-headline text-3xl sm:text-5xl font-bold text-[#0A0A0A]">
                Nos Services sur Mesure
              </h2>
              <p className="mt-3 text-sm sm:text-base font-medium text-[#2A2005]">
                Des solutions d&apos;ingénierie patrimoniale calibrées pour les investisseurs et dirigeants exigeants
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
              <article className="onyx-card onyx-card-hover rounded-xl p-8 flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#D4AF37] text-[#0A0A0A] shadow-md">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-headline text-2xl text-white">Stratégie de Portefeuille</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    Audit quantitatif de vos actifs, élimination du risque de dilution (Token Unlocks) et allocation optimale selon votre profil de risque.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="inline-block rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
                    Allocation &amp; Cycles
                  </span>
                  <a href="#reservation" className="text-xs font-bold text-white hover:text-[#D4AF37]">Réserver →</a>
                </div>
              </article>

              <article className="onyx-card onyx-card-hover rounded-xl p-8 flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#D4AF37] text-[#0A0A0A] shadow-md">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-headline text-2xl text-white">Sécurité &amp; Auto-Garde</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    Mise en place opérationnelle de votre coffre-fort numérique (Ledger, Rabby Wallet), hygiène de sécurité et protection contre le gel bancaire.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="inline-block rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
                    Souveraineté &amp; Garde
                  </span>
                  <a href="#reservation" className="text-xs font-bold text-white hover:text-[#D4AF37]">Réserver →</a>
                </div>
              </article>

              <article className="onyx-card onyx-card-hover rounded-xl p-8 flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#D4AF37] text-[#0A0A0A] shadow-md">
                    <Clock3 className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-headline text-2xl text-white">Rendement DeFi &amp; Trésorerie</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    Déploiement sécurisé en finance décentralisée pour générer des revenus passifs sur vos Stablecoins et actifs majeurs sans intermédiaire.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="inline-block rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
                    Yield · DeFi · Web3
                  </span>
                  <a href="#reservation" className="text-xs font-bold text-white hover:text-[#D4AF37]">Réserver →</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ==================== SECTION À PROPOS (DAVID BIROTA) ==================== */}
        <section id="team" className="bg-gold-ingot px-4 sm:px-6 py-20 md:py-28 border-t border-[#0A0A0A]/15">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <span className="inline-block rounded-full bg-[#0A0A0A] px-4 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#D4AF37]">
                L&apos;Expert derrière la Marque
              </span>
              <h2 className="mt-3 font-headline text-3xl sm:text-5xl font-bold text-[#0A0A0A]">
                À Propos de David Birota
              </h2>
            </div>

            <div className="onyx-card rounded-2xl p-8 md:p-12 grid items-center gap-10 md:grid-cols-[240px_1fr]">
              <div>
                <Image
                  src="/profil-david.png"
                  alt="David Birota - CryptoConsult Pro"
                  width={400}
                  height={533}
                  className="w-full rounded-xl border-2 border-[#D4AF37]/60 object-cover shadow-xl"
                  priority
                  unoptimized
                />
                <div className="flex flex-col gap-2.5 mt-5">
                  <a
                    href="https://www.linkedin.com/in/david-birota-cryptoconsultme/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-[#D4AF37]/30 bg-[#141414] px-3 py-2 text-xs font-bold text-gray-200 transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    <Linkedin className="h-4 w-4 text-[#D4AF37]" />
                    LinkedIn
                  </a>
                  <a
                    href="https://x.com/Coinaisseur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-[#D4AF37]/30 bg-[#141414] px-3 py-2 text-xs font-bold text-gray-200 transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    <Twitter className="h-4 w-4 text-[#D4AF37]" />
                    X (@Coinaisseur)
                  </a>
                  <a
                    href="https://instagram.com/coinaisseur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-[#D4AF37]/30 bg-[#141414] px-3 py-2 text-xs font-bold text-gray-200 transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    <Instagram className="h-4 w-4 text-[#D4AF37]" />
                    Instagram (@Coinaisseur)
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-headline text-3xl text-white">David Birota</h3>
                <p className="mb-6 mt-1 text-xs font-black uppercase tracking-[0.22em] text-[#D4AF37]">
                  FOUNDER · STRATEGIST · DEFI &amp; WEALTH CONSULTANT
                </p>
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-200">
                  <p>
                    Consultant en stratégie d&apos;investissement crypto et souveraineté financière, j&apos;accompagne une clientèle exigeante (dirigeants, professions libérales, investisseurs CSP+) entre finance traditionnelle et écosystèmes décentralisés.
                  </p>
                  <p>
                    Actif sur les marchés crypto depuis 2019 à travers plusieurs cycles complets, mon rôle est de transformer une technologie complexe en <strong className="text-[#D4AF37]">plan d&apos;action patrimonial clair, sécurisé et rentable</strong> — qu&apos;il s&apos;agisse de diversifier une trésorerie d&apos;entreprise ou de bâtir un portefeuille souverain en auto-garde.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#reservation"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-[#0A0A0A] shadow-lg transition hover:brightness-110"
                  >
                    Réserver ma consultation gratuite <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#simulateur"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#D4AF37]/50 bg-[#141414] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#D4AF37] transition hover:bg-white/5"
                  >
                    Faire le test de profil
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SECTION TÉMOIGNAGES ==================== */}
        <Testimonials />

        {/* ==================== SECTION BLOG DYNAMIQUE ==================== */}
        <section id="blog" className="bg-gold-ingot px-4 sm:px-6 py-20 md:py-28 border-t border-[#0A0A0A]/15">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="inline-block rounded-full bg-[#0A0A0A] px-4 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#D4AF37]">
                Insights &amp; Analyses Macro
              </span>
              <h2 className="mt-3 font-headline text-3xl sm:text-5xl font-bold text-[#0A0A0A]">
                Nos Derniers Articles de Fond
              </h2>
              <p className="mt-3 text-sm sm:text-base font-medium text-[#2A2005]">
                Décryptages institutionnels, gestion du risque et stratégies DeFi pour éclairer vos décisions
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
              {latestPosts.map((post, idx) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug || idx}
                  className="onyx-card onyx-card-hover group flex flex-col justify-between overflow-hidden rounded-xl"
                >
                  <div>
                    <div className="flex h-24 items-center justify-between border-b border-[#D4AF37]/20 bg-gradient-to-r from-[#141004] to-[#0A0A0A] px-6">
                      <span className="rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
                        {post.metadata?.categories?.[0] || 'Stratégie'}
                      </span>
                      {idx === 0 ? (
                        <BarChart3 className="h-7 w-7 text-[#D4AF37]" />
                      ) : idx === 1 ? (
                        <Clock3 className="h-7 w-7 text-[#D4AF37]" />
                      ) : (
                        <FileText className="h-7 w-7 text-[#D4AF37]" />
                      )}
                    </div>
                    <div className="p-6">
                      <p className="text-[11px] font-semibold text-[#D4AF37]/80">{post.metadata?.date}</p>
                      <h3 className="mb-3 mt-2 font-headline text-lg leading-snug text-white transition-colors group-hover:text-[#D4AF37] line-clamp-2">
                        {post.metadata?.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-gray-300 line-clamp-3">
                        {post.metadata?.summary}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                      Lire l&apos;article complet <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0A0A0A] border border-[#D4AF37] px-8 py-4 text-xs font-black uppercase tracking-widest text-[#D4AF37] shadow-xl transition hover:bg-[#141414]"
              >
                Explorer tous les articles du Blog <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ==================== SECTION CALENDLY / APPEL STRATÉGIQUE ==================== */}
        <section id="reservation" className="bg-gold-champagne px-4 sm:px-6 py-20 md:py-28 border-t border-[#0A0A0A]/15">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="inline-block rounded-full bg-[#0A0A0A] px-4 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#D4AF37]">
                Planifiez votre Entretien
              </span>
              <h2 className="mt-3 font-headline text-3xl sm:text-5xl font-bold text-[#0A0A0A]">
                Appel Stratégique Confidentiel
              </h2>
              <p className="mt-3 text-sm sm:text-base font-medium text-[#2A2005]">
                Première consultation de cadrage 100% gratuite · Sélectionnez votre créneau ci-dessous
              </p>
            </div>

            <div className="onyx-card mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl p-4 sm:p-8">
              <div
                className="calendly-inline-widget overflow-hidden rounded-xl"
                data-url="https://calendly.com/davidcrypto507/30min?background_color=0a0a0a&text_color=f8fafc&primary_color=d4af37"
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
          </div>
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        </section>
      </main>

      {/* ==================== FOOTER ONYX ==================== */}
      <footer className="border-t-2 border-[#D4AF37] bg-[#0A0A0A] py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-8">
          <div>
            <p className="text-xs font-black tracking-widest text-white">
              CRYPTO<span className="text-[#D4AF37]">CONSULT</span> PRO
            </p>
            <p className="text-[11px] text-gray-400 mt-1">© 2026 CryptoConsult Pro · Cabinet de Conseil en Stratégie Crypto &amp; Souveraineté Financière</p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/blog" className="text-xs text-gray-300 transition-colors hover:text-[#D4AF37]">Blog</Link>
            <a href="#simulateur" className="text-xs text-gray-300 transition-colors hover:text-[#D4AF37]">Simulateur</a>
            <a
              href="https://www.linkedin.com/in/david-birota-cryptoconsultme/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-300 transition-colors hover:text-[#D4AF37]"
            >
              <Linkedin className="h-3.5 w-3.5 text-[#D4AF37]" />
              LinkedIn
            </a>
            <a
              href="https://x.com/Coinaisseur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-300 transition-colors hover:text-[#D4AF37]"
            >
              <Twitter className="h-3.5 w-3.5 text-[#D4AF37]" />
              X
            </a>
            <a
              href="https://instagram.com/coinaisseur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-300 transition-colors hover:text-[#D4AF37]"
            >
              <Instagram className="h-3.5 w-3.5 text-[#D4AF37]" />
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import Script from 'next/script';
import { BarChart3, Clock3, FileText, Shield } from 'lucide-react';
import Testimonials from '@/components/landing/testimonials';

export default function HomePage() {
  return (
    <div className="bg-[#0A0A0A] text-[#F3F4F6]">
      <main>
        <section
          id="home"
          className="relative flex min-h-[calc(100vh-5rem)] items-center px-6 py-20 text-center"
        >
          <div className="mx-auto w-full max-w-5xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
              Strategic Advisory · Crypto & TradFi depuis 2019
            </p>
            <h1 className="mt-6 font-headline text-5xl font-normal leading-tight md:text-7xl">
              L&apos;Architecte de votre
              <br />
              <span className="italic text-[#D4AF37]">Souveraineté Financière</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[#F3F4F6]/70">
              Protégez votre patrimoine hors système bancaire avec une stratégie sur mesure,
              alliant discrétion, contrôle et résilience.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#reservation"
                className="rounded-sm bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-[#0A0A0A] transition hover:brightness-110"
              >
                Télécharger le Plan de Sortie
              </a>
              <a
                href="#services"
                className="rounded-sm border border-[#D4AF37]/40 bg-transparent px-5 py-2.5 text-sm text-[#F3F4F6] transition-colors hover:border-[#D4AF37]"
              >
                Nos Services
              </a>
              <a
                href="https://cryptoconsultme.systeme.io/ton-livre-blanc-gratuit"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-[#D4AF37]/40 bg-transparent px-5 py-2.5 text-sm text-[#F3F4F6] transition-colors hover:border-[#D4AF37]"
              >
                Livre Blanc Gratuit
              </a>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0">
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full -mb-px">
              <path
                d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z"
                fill="#0d0d0d"
              />
            </svg>
          </div>
        </section>

        <section id="piliers" className="bg-[#0d0d0d] px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
              FONDEMENTS DE NOTRE APPROCHE
            </p>
            <h2 className="mt-2 text-center font-headline text-3xl text-[#F3F4F6] md:text-5xl">
              Les 3 Piliers
            </h2>
            <p className="mt-3 text-center text-[#F3F4F6]/50">
              Trois principes fondamentaux qui guident chaque stratégie patrimoniale
            </p>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
              <article className="relative rounded-md border border-[#D4AF37]/20 bg-[#121212] p-8 text-center">
                <span className="absolute left-1/2 top-0 h-0.5 w-12 -translate-x-1/2 rounded-b-sm bg-[#D4AF37]" />
                <p className="mb-4 text-[8px] uppercase tracking-[0.25em] text-[#D4AF37]">PILIER 01</p>
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#1a1200]">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                    <circle cx="22" cy="22" r="13" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="22" cy="22" r="3" fill="#D4AF37" />
                  </svg>
                </div>
                <h3 className="mb-3 font-headline text-xl text-[#F3F4F6]">Invisibilité</h3>
                <p className="text-sm leading-relaxed text-[#F3F4F6]/50">
                  Protéger votre vie privée patrimoniale avec des structures discrètes et robustes.
                </p>
              </article>

              <article className="relative rounded-md border border-[#D4AF37]/20 bg-[#121212] p-8 text-center">
                <span className="absolute left-1/2 top-0 h-0.5 w-12 -translate-x-1/2 rounded-b-sm bg-[#D4AF37]" />
                <p className="mb-4 text-[8px] uppercase tracking-[0.25em] text-[#D4AF37]">PILIER 02</p>
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#1a1200]">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                    <circle cx="15" cy="22" r="5" stroke="#D4AF37" strokeWidth="1.8" />
                    <path d="M20 22h12M28 16l6 6-6 6" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mb-3 font-headline text-xl text-[#F3F4F6]">Mobilité</h3>
                <p className="text-sm leading-relaxed text-[#F3F4F6]/50">
                  Conserver un accès agile à vos capitaux partout dans le monde, sans friction inutile.
                </p>
              </article>

              <article className="relative rounded-md border border-[#D4AF37]/20 bg-[#121212] p-8 text-center">
                <span className="absolute left-1/2 top-0 h-0.5 w-12 -translate-x-1/2 rounded-b-sm bg-[#D4AF37]" />
                <p className="mb-4 text-[8px] uppercase tracking-[0.25em] text-[#D4AF37]">PILIER 03</p>
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#1a1200]">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                    <path d="M22 8 12 12.5v9.4c0 6.2 4 11 10 13.6 6-2.6 10-7.4 10-13.6v-9.4L22 8Z" stroke="#D4AF37" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="m17.8 22.2 3 3 5.5-5.7" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mb-3 font-headline text-xl text-[#F3F4F6]">Auto-Garde</h3>
                <p className="text-sm leading-relaxed text-[#F3F4F6]/50">
                  Garder le contrôle de vos actifs stratégiques avec une gouvernance claire et sécurisée.
                </p>
              </article>
            </div>
          </div>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="mt-20 block w-full -mb-px">
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z" fill="#070707" />
          </svg>
        </section>

        <section id="services" className="bg-[#070707] px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-xs uppercase tracking-[0.2em] text-[#D4AF37]">CE QUE NOUS OFFRONS</p>
            <h2 className="mt-2 text-center font-headline text-3xl text-[#F3F4F6] md:text-5xl">Nos Services</h2>
            <p className="mt-3 text-center text-[#F3F4F6]/50">
              Des solutions adaptées à chaque profil d&apos;investisseur exigeant
            </p>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
              <article className="rounded-md border border-[#1e1e1e] bg-[#0f0f0f] p-6 transition-colors hover:border-[#D4AF37]/40">
                <BarChart3 className="h-9 w-9 text-[#D4AF37]" />
                <h3 className="mt-4 font-headline text-xl text-[#F3F4F6]">Stratégie de portefeuille</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#F3F4F6]/60">
                  Analyse personnalisée et construction d&apos;un portefeuille crypto adapté à vos objectifs de rendement.
                </p>
                <span className="mt-4 inline-block rounded-sm bg-[#1a1200] px-2 py-0.5 text-[10px] tracking-wide text-[#D4AF37]">
                  TradFi + DeFi
                </span>
              </article>

              <article className="rounded-md border border-[#1e1e1e] bg-[#0f0f0f] p-6 transition-colors hover:border-[#D4AF37]/40">
                <Shield className="h-9 w-9 text-[#D4AF37]" />
                <h3 className="mt-4 font-headline text-xl text-[#F3F4F6]">Protection patrimoniale</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#F3F4F6]/60">
                  Structures juridiques et solutions hors système pour sécuriser et transmettre votre patrimoine.
                </p>
                <span className="mt-4 inline-block rounded-sm bg-[#1a1200] px-2 py-0.5 text-[10px] tracking-wide text-[#D4AF37]">
                  Juridique &amp; Structurel
                </span>
              </article>

              <article className="rounded-md border border-[#1e1e1e] bg-[#0f0f0f] p-6 transition-colors hover:border-[#D4AF37]/40">
                <Clock3 className="h-9 w-9 text-[#D4AF37]" />
                <h3 className="mt-4 font-headline text-xl text-[#F3F4F6]">Conseil DeFi &amp; Web3</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#F3F4F6]/60">
                  Navigation experte dans la finance décentralisée, yield farming et protocoles Web3 prometteurs.
                </p>
                <span className="mt-4 inline-block rounded-sm bg-[#1a1200] px-2 py-0.5 text-[10px] tracking-wide text-[#D4AF37]">
                  DeFi · Web3
                </span>
              </article>
            </div>
          </div>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="mt-20 block w-full -mb-px">
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z" fill="#0b0b0b" />
          </svg>
        </section>

        <section id="team" className="bg-[#0b0b0b] px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-xs uppercase tracking-[0.2em] text-[#D4AF37]">L&apos;EXPERT DERRIÈRE LA MARQUE</p>
            <h2 className="mt-2 text-center font-headline text-3xl text-[#F3F4F6] md:text-5xl">A propos de moi</h2>

            <div className="mx-auto mt-12 grid max-w-4xl items-start gap-12 md:grid-cols-[200px_1fr]">
              <div>
                <div className="flex aspect-[3/4] flex-col items-center justify-center gap-3 rounded-md border border-[#1e1e1e] bg-[#121212]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a1200] text-lg font-bold text-[#D4AF37]">
                    DB
                  </div>
                  <p className="text-xs text-[#333]">Photo</p>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="https://www.linkedin.com/in/david-birota-cryptoconsultme/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-sm border border-[#1c1c1c] bg-[#0f0f0f] px-3 py-1.5 text-xs text-[#888] transition-colors hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V24h-4V8Zm7 0h3.8v2.2h.1c.53-1 1.83-2.2 3.76-2.2C19.2 8 24 10.4 24 17.1V24h-4v-6c0-2.5-.04-5.7-3.47-5.7-3.48 0-4.01 2.72-4.01 5.52V24h-4V8Z" /></svg>
                    LinkedIn
                  </a>
                  <a
                    href="https://x.com/ParigOffshore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-sm border border-[#1c1c1c] bg-[#0f0f0f] px-3 py-1.5 text-xs text-[#888] transition-colors hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.2l-4.86-6.34L6.6 22H3.5l7.24-8.27L1.1 2h6.35l4.4 5.82L18.9 2Zm-1.1 18h1.72L6.47 3.89H4.62L17.8 20Z" /></svg>
                    X (Twitter)
                  </a>
                  <a
                    href="https://instagram.com/coinaisseur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-sm border border-[#1c1c1c] bg-[#0f0f0f] px-3 py-1.5 text-xs text-[#888] transition-colors hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
                    Instagram
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-headline text-2xl text-[#F3F4F6]">David Birota</h3>
                <p className="mb-5 mt-1 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
                  FOUNDER · ANALYST · DEFI CONSULTANT
                </p>
                <div className="space-y-4 text-sm leading-relaxed text-[#F3F4F6]/60">
                  <p>
                    Expert en stratégie patrimoniale, j&apos;accompagne une clientèle exigeante entre finance traditionnelle (TradFi) et écosystèmes crypto. Mon approche combine architecture financière, protection juridique et exécution opérationnelle.
                  </p>
                  <p>
                    Plongé dans la crypto depuis 2019, j&apos;ai vécu tous les cycles de marché. Mon rôle est de servir de traducteur entre un écosystème très technique et mes clients. Que vous soyez une entreprise souhaitant diversifier votre trésorerie ou un particulier cherchant à investir sereinement, je vous apporte un plan d&apos;action clair et sur-mesure.
                  </p>
                </div>
                <a
                  href="#reservation"
                  className="mt-6 inline-block rounded-sm bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-[#0A0A0A] transition hover:brightness-110"
                >
                  Première analyse gratuite
                </a>
              </div>
            </div>
          </div>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="mt-20 block w-full -mb-px">
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z" fill="#060606" />
          </svg>
        </section>

        <section id="testimonials" className="bg-[#060606]">
          <Testimonials />
        </section>

        <section id="blog" className="bg-[#090909] px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-xs uppercase tracking-[0.2em] text-[#D4AF37]">INSIGHTS &amp; ANALYSES</p>
            <h2 className="mt-2 text-center font-headline text-3xl text-[#F3F4F6] md:text-5xl">Le Blog</h2>
            <p className="mt-3 text-center text-[#F3F4F6]/50">
              Analyses de marché, guides et actualités pour prendre de meilleures décisions
            </p>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
              <article className="group cursor-pointer overflow-hidden rounded-md border border-[#1a1a1a] bg-[#0f0f0f] transition-colors hover:border-[#D4AF37]/30">
                <div className="flex h-24 items-center justify-center border-b border-[#1a1a1a] bg-[#0d0900]">
                  <BarChart3 className="h-9 w-9 text-[#D4AF37]" />
                </div>
                <div className="p-4">
                  <p className="text-[9px] text-[#333]">15 Avril 2025</p>
                  <h3 className="mb-2 mt-1 font-headline text-sm leading-snug text-[#d0cac0] transition-colors group-hover:text-[#D4AF37]">
                    Bitcoin 2025 : analyse du cycle et niveaux clés à surveiller
                  </h3>
                  <p className="text-[11px] leading-relaxed text-[#3a3a3a]">
                    Tour d&apos;horizon des indicateurs on-chain et des zones de résistance pour le second semestre.
                  </p>
                  <p className="mt-3 text-[10px] text-[#D4AF37]">→ Lire l&apos;article</p>
                </div>
              </article>

              <article className="group cursor-pointer overflow-hidden rounded-md border border-[#1a1a1a] bg-[#0f0f0f] transition-colors hover:border-[#D4AF37]/30">
                <div className="flex h-24 items-center justify-center border-b border-[#1a1a1a] bg-[#0d0900]">
                  <Clock3 className="h-9 w-9 text-[#D4AF37]" />
                </div>
                <div className="p-4">
                  <p className="text-[9px] text-[#333]">8 Avril 2025</p>
                  <h3 className="mb-2 mt-1 font-headline text-sm leading-snug text-[#d0cac0] transition-colors group-hover:text-[#D4AF37]">
                    DeFi vs CeFi : quelle approche choisir en 2025 ?
                  </h3>
                  <p className="text-[11px] leading-relaxed text-[#3a3a3a]">
                    Comparatif objectif entre finance décentralisée et centralisée : risques, rendements et cas d&apos;usage.
                  </p>
                  <p className="mt-3 text-[10px] text-[#D4AF37]">→ Lire l&apos;article</p>
                </div>
              </article>

              <article className="group cursor-pointer overflow-hidden rounded-md border border-[#1a1a1a] bg-[#0f0f0f] transition-colors hover:border-[#D4AF37]/30">
                <div className="flex h-24 items-center justify-center border-b border-[#1a1a1a] bg-[#0d0900]">
                  <FileText className="h-9 w-9 text-[#D4AF37]" />
                </div>
                <div className="p-4">
                  <p className="text-[9px] text-[#333]">1 Avril 2025</p>
                  <h3 className="mb-2 mt-1 font-headline text-sm leading-snug text-[#d0cac0] transition-colors group-hover:text-[#D4AF37]">
                    5 erreurs classiques des débutants en crypto (et comment les éviter)
                  </h3>
                  <p className="text-[11px] leading-relaxed text-[#3a3a3a]">
                    Les pièges vus des centaines de fois chez mes clients, avec les solutions concrètes pour chacun.
                  </p>
                  <p className="mt-3 text-[10px] text-[#D4AF37]">→ Lire l&apos;article</p>
                </div>
              </article>
            </div>

            <div className="mt-10 text-center">
              <a
                href="/blog"
                className="inline-block rounded-sm border border-[#1e1e1e] px-6 py-2.5 text-sm text-[#888] transition-colors hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
              >
                Voir tous les articles →
              </a>
            </div>
          </div>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="mt-20 block w-full -mb-px">
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z" fill="#070707" />
          </svg>
        </section>

        <section id="reservation" className="bg-[#070707] px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-xs uppercase tracking-[0.2em] text-[#D4AF37]">PLANIFIEZ VOTRE APPEL</p>
            <h2 className="mt-2 text-center font-headline text-3xl text-[#F3F4F6] md:text-5xl">Appel Stratégique</h2>
            <p className="mt-3 text-center text-[#F3F4F6]/50">
              Première consultation 100% gratuite · Choisissez votre créneau ci-dessous
            </p>

            <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-md border border-[#D4AF37]/20 bg-[#0f0f0f] p-6 md:p-10">
              <div
                className="calendly-inline-widget overflow-hidden rounded-md"
                data-url="https://calendly.com/davidcrypto507/30min?background_color=0f0f0f&text_color=f3f4f6&primary_color=d4af37"
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
          </div>
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        </section>
      </main>

      <footer className="border-t border-[#111] bg-[#030303] py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-8">
          <p className="text-[9px] text-[#252525]">© 2025 CryptoConsult Pro · Tous droits réservés</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#" className="text-[9px] text-[#2a2a2a] transition-colors hover:text-[#D4AF37]">Mentions légales</a>
            <a href="#" className="text-[9px] text-[#2a2a2a] transition-colors hover:text-[#D4AF37]">Confidentialité</a>
            <a
              href="https://www.linkedin.com/in/david-birota-cryptoconsultme/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[9px] text-[#2a2a2a] transition-colors hover:text-[#D4AF37]"
            >
              <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-[#D4AF37]" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V24h-4V8Zm7 0h3.8v2.2h.1c.53-1 1.83-2.2 3.76-2.2C19.2 8 24 10.4 24 17.1V24h-4v-6c0-2.5-.04-5.7-3.47-5.7-3.48 0-4.01 2.72-4.01 5.52V24h-4V8Z" /></svg>
              LinkedIn
            </a>
            <a
              href="https://x.com/ParigOffshore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[9px] text-[#2a2a2a] transition-colors hover:text-[#D4AF37]"
            >
              <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-[#555]" aria-hidden="true"><path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.2l-4.86-6.34L6.6 22H3.5l7.24-8.27L1.1 2h6.35l4.4 5.82L18.9 2Zm-1.1 18h1.72L6.47 3.89H4.62L17.8 20Z" /></svg>
              X
            </a>
            <a
              href="https://instagram.com/coinaisseur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[9px] text-[#2a2a2a] transition-colors hover:text-[#D4AF37]"
            >
              <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-[#555]" aria-hidden="true"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm4.5 3.4a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 1.8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.7-.95a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" /></svg>
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

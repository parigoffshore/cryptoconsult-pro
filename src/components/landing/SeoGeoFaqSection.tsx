import React from 'react';
import { HelpCircle, ShieldCheck } from 'lucide-react';

export const FAQ_ITEMS = [
  {
    q: "Pourquoi faire appel à un consultant crypto indépendant plutôt qu'à sa banque ou YouTube ?",
    a: "Un consultant crypto indépendant en architecture Non-Custodiale vous apprend à détenir 100 % de vos actifs sur votre propre clé matérielle (Ledger), sans jamais confier vos fonds à un tiers. Contrairement aux contenus génériques sur internet, un accompagnement 1-to-1 élimine les erreurs techniques irréversibles (mauvais réseau blockchain, contrats malveillants, frais cachés de 3% à 5%) et filtre les tokens subissant une forte inflation (Token Unlocks)."
  },
  {
    q: "Comment sécuriser ses cryptomonnaies sur un hardware wallet (Ledger) sans risque ?",
    a: "La sécurisation optimale repose sur une architecture à deux étages : 80 % du patrimoine (Bitcoin, Ethereum, réserve principale) est verrouillé à froid hors ligne sur une clé matérielle Ledger, tandis que 20 % maximum transite par un portefeuille Web3 isolé (Rabby Wallet) pour les opérations en Finance Décentralisée (DeFi). Toute transaction exige une validation physique sur l'appareil."
  },
  {
    q: "Comment investir dans le Bitcoin et les cryptomonnaies depuis l'Île Maurice ou l'international ?",
    a: "Depuis l'Île Maurice comme depuis l'Europe, l'investissement s'effectue via des plateformes d'échange régulées offrant des frais institutionnels (0,1 %), suivi d'un rapatriement immédiat vers votre coffre-fort numérique personnel (Auto-Garde). CryptoConsult Pro propose à Maurice un Pack Essentiel à 17 000 Rs (et des mandats sur-mesure à l'international) couvrant l'éducation financière, le plan d'accumulation programmée (DCA), la sécurité matérielle et la conformité des flux bancaires (Off-Ramp)."
  },
  {
    q: "Quel rendement peut-on générer en Finance Décentralisée (DeFi) sur des Stablecoins ?",
    a: "En déployant des Stablecoins (USDC, USDT ou EURC) sur des protocoles de prêts décentralisés institutionnels et audités comme Aave, il est possible de générer un rendement passif compris entre 5 % et 9 % par an (APY) selon les conditions de liquidité du marché, tout en conservant la garde directe de ses clés privées et une disponibilité immédiate du capital."
  }
];

export default function SeoGeoFaqSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["FinancialService", "ProfessionalService", "Organization"],
        "@id": "https://cryptoconsult.me/#organization",
        "name": "CryptoConsult Pro",
        "alternateName": "Crypto Consult Pro",
        "url": "https://cryptoconsult.me",
        "logo": "https://cryptoconsult.me/profil-david.png",
        "image": "https://cryptoconsult.me/profil-david.png",
        "description": "Cabinet de conseil en stratégie d'investissement crypto, configuration de hardware wallets (Ledger / Auto-Garde) et rendement en Finance Décentralisée (DeFi) dirigé par David Birota.",
        "email": "cryptoconsultme@gmail.com",
        "telephone": "+23054741839",
        "priceRange": "€€ - €€€",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "MU",
          "addressRegion": "Île Maurice"
        },
        "areaServed": ["MU", "FR", "CH", "BE", "CA", "AE"],
        "availableLanguage": ["fr", "en"],
        "founder": { "@id": "https://cryptoconsult.me/#david-birota" },
        "sameAs": [
          "https://www.linkedin.com/in/david-birota-cryptoconsultme/",
          "https://x.com/ParigOffshore",
          "https://instagram.com/coinaisseur"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services de Consulting Crypto & DeFi",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Pack Essentiel Crypto (Île Maurice)",
              "description": "Éducation financière, plan d'investissement personnalisé, premiers achats, sécurisation Ledger et suivi trimestriel.",
              "price": "17000",
              "priceCurrency": "MUR"
            },
            {
              "@type": "Offer",
              "name": "Diagnostic & Architecture Souveraine",
              "description": "Audit quantitatif de portefeuille, Stress-Test de cycle et plan d'allocation sur-mesure.",
              "price": "990",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "name": "Mandat d'Implémentation Souveraineté & DeFi",
              "description": "Configuration assistée 1-to-1 Ledger + Rabby Wallet, déploiement rendement Stablecoins DeFi et plan de sortie.",
              "price": "2500",
              "priceCurrency": "EUR"
            }
          ]
        }
      },
      {
        "@type": "Person",
        "@id": "https://cryptoconsult.me/#david-birota",
        "name": "David Birota",
        "jobTitle": "Consultant en Stratégie Crypto, DeFi & Souveraineté Financière",
        "worksFor": { "@id": "https://cryptoconsult.me/#organization" },
        "url": "https://cryptoconsult.me/#team",
        "image": "https://cryptoconsult.me/profil-david.png",
        "knowsAbout": [
          "Bitcoin",
          "Decentralized Finance (DeFi)",
          "Hardware Wallets (Ledger)",
          "Non-Custodial Asset Security",
          "Tokenomics & FDV Dilution Audit",
          "Crypto Portfolio Management"
        ],
        "sameAs": [
          "https://www.linkedin.com/in/david-birota-cryptoconsultme/",
          "https://x.com/ParigOffshore",
          "https://instagram.com/coinaisseur"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://cryptoconsult.me/#faq",
        "mainEntity": FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };

  return (
    <section id="faq" className="bg-gold-champagne px-4 sm:px-6 py-20 md:py-28 border-t border-[#0A0A0A]/15">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0A0A0A] px-4 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#D4AF37]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" /> Questions Fréquentes · Clarté &amp; Transparence
          </span>
          <h2 className="mt-3 font-headline text-3xl sm:text-5xl font-bold text-[#0A0A0A]">
            Comprendre notre Accompagnement Crypto &amp; DeFi
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base font-medium text-[#2A2005]">
            Réponses directes aux questions clés sur la sécurisation matérielle (Ledger), le rendement DeFi et nos interventions à l&apos;Île Maurice comme à l&apos;international.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {FAQ_ITEMS.map((item, idx) => (
            <article key={idx} className="onyx-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <h3 className="font-headline text-lg sm:text-xl text-white leading-snug">
                    {item.q}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

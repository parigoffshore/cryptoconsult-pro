import type { Metadata } from 'next';
import Link from 'next/link';
import { Globe, ShieldCheck, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Conseil Crypto & Bitcoin à l’Île Maurice (Mauritius) — Pack Essentiel 17 000 Rs | CryptoConsult Pro',
  description: 'Cabinet de conseil en investissement crypto, Bitcoin et sécurité Ledger basé à l’Île Maurice. Accompagnement éducatif et patrimonial pour résidents mauriciens, expatriés et entreprises (FR / EN).',
  alternates: {
    canonical: 'https://cryptoconsult.me/services/conseil-crypto-ile-maurice'
  }
};

export default function ConseilCryptoMauricePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'CryptoConsult Pro — Conseil Crypto & Bitcoin Île Maurice (Mauritius)',
    url: 'https://cryptoconsult.me/services/conseil-crypto-ile-maurice',
    telephone: '+23054741839',
    email: 'cryptoconsultme@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MU',
      addressRegion: 'Île Maurice / Mauritius'
    },
    offers: {
      '@type': 'Offer',
      name: 'Pack Essentiel Crypto Île Maurice',
      price: '17000',
      priceCurrency: 'MUR',
      description: 'Éducation financière, plan d’investissement personnalisé, premiers achats au tarif institutionnel, sécurisation Ledger et suivi trimestriel.'
    }
  };

  return (
    <div className="bg-gold-ingot text-[#0A0A0A] min-h-screen py-16 px-4 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl space-y-10">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0A0A0A] hover:underline">
          ← Retour à l&apos;accueil CryptoConsult Pro
        </Link>

        <header className="onyx-card rounded-2xl p-8 sm:p-10 space-y-5 border-2 border-[#D4AF37]">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">
            <Globe className="h-3.5 w-3.5" /> Île Maurice · Mauritius · Accompagnement Local &amp; International (FR / EN)
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl font-bold text-white leading-tight">
            Investir dans le Bitcoin et les Cryptomonnaies à l&apos;Île Maurice en toute Sécurité
          </h1>
          <div className="p-5 rounded-xl bg-[#141414] border-l-4 border-[#D4AF37] text-sm text-gray-200 leading-relaxed space-y-2">
            <p>
              <strong className="text-[#D4AF37] uppercase text-xs tracking-wider">En bref (FR) :</strong> Basé à l&apos;Île Maurice, <strong>CryptoConsult Pro</strong> (fondé par David Birota) accompagne les résidents mauriciens, les expatriés et les dirigeants d&apos;entreprises dans la création et la sécurisation de leur portefeuille d&apos;actifs numériques. Notre règle d&apos;or : <strong>vous ne nous confiez jamais votre argent</strong>. Vous restez propriétaire à 100 % de vos comptes et de votre clé matérielle Ledger.
            </p>
            <p className="text-xs text-gray-400 italic">
              <strong className="text-[#D4AF37] not-italic">Executive Summary (EN) :</strong> Based in Mauritius, CryptoConsult Pro provides bespoke, 100% non-custodial Bitcoin, DeFi, and hardware wallet (Ledger) advisory services for Mauritian residents, expats, and corporate treasuries.
            </p>
          </div>
        </header>

        {/* OFFRE LOCALE MAURICE : PACK ESSENTIEL 17 000 RS */}
        <section className="onyx-card rounded-2xl p-8 space-y-6 border border-[#D4AF37]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">Offre Dédiée Marché Mauricien</span>
              <h2 className="font-headline text-2xl sm:text-3xl text-white mt-1">
                Le « Pack Essentiel » — Autonomie &amp; Sécurité
              </h2>
            </div>
            <div className="px-5 py-2.5 rounded-xl bg-[#D4AF37] text-[#0A0A0A] font-black text-xl">
              17 000 Rs <span className="text-xs font-bold uppercase block">Forfait tout inclus</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm text-gray-200">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" />
              <span><strong>1. Éducation Financière Anti-Pièges :</strong> Comprendre les cycles du Bitcoin et distinguer les vrais actifs souverains des arnaques en ligne.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" />
              <span><strong>2. Plan d&apos;Investissement Personnalisé :</strong> Allocation sur-mesure selon votre budget (en Rs, EUR ou USD) et votre horizon.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" />
              <span><strong>3. Premiers Achats Guidés (0,1 % de frais) :</strong> Économisez les 3 % à 5 % de frais cachés des applications grand public.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" />
              <span><strong>4. Sécurisation sur Clé Matérielle Ledger :</strong> Installation assistée de votre coffre-fort numérique personnel hors ligne.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" />
              <span><strong>5. Best Practices &amp; Couloir Bancaire :</strong> Bonnes pratiques pour effectuer vos transferts bancaires en toute conformité.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" />
              <span><strong>6. Suivi Trimestriel Inclus :</strong> Point régulier pour ajuster votre portefeuille et préparer vos prises de profits.</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t border-white/10">
            <div className="p-4 rounded-xl bg-[#141414] border border-[#D4AF37]/40">
              <div className="text-xs font-black text-[#D4AF37] uppercase">Option A · Session DeFi Avancée (+ 5 000 Rs)</div>
              <p className="text-xs text-gray-300 mt-1">
                Déploiement d&apos;une poche de Stablecoins (USDC/USDT) rémunérée entre 6 % et 9 % par an en Finance Décentralisée avec cloisonnement Rabby Wallet.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#141414] border border-[#D4AF37]/40">
              <div className="text-xs font-black text-[#D4AF37] uppercase">Option B · Consultation Fiscalité Crypto (Sur devis)</div>
              <p className="text-xs text-gray-300 mt-1">
                Analyse de votre régime fiscal selon votre pays de résidence (Île Maurice, France, Europe, expatriation) et structuration des conversions.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 items-center justify-between border-t border-white/10">
            <div className="text-xs text-gray-300">
              📍 <strong>Contact direct Île Maurice :</strong> +230 5474-1839 (Téléphone / WhatsApp) • cryptoconsultme@gmail.com
            </div>
            <a
              href="/#reservation"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E6C770] text-[#0A0A0A] font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg"
            >
              Prendre rendez-vous avec David Birota <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

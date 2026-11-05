import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock3, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Consultant DeFi & Rendement Stablecoins (6% à 9% APY) | CryptoConsult Pro',
  description: 'Générez des revenus passifs sur vos liquidités et votre trésorerie en Finance Décentralisée (DeFi) sans intermédiaire bancaire. Accompagnement sur-mesure par David Birota.',
  alternates: {
    canonical: 'https://cryptoconsult.me/services/consultant-defi-rendement'
  }
};

export default function ConsultantDefiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Conseil en Finance Décentralisée (DeFi) & Rendement sur Stablecoins',
    provider: {
      '@type': 'Organization',
      name: 'CryptoConsult Pro',
      url: 'https://cryptoconsult.me'
    },
    areaServed: ['MU', 'FR', 'CH', 'BE', 'CA'],
    description: 'Déploiement de stratégies de rendement Non-Custodiales (6% à 9% APY) sur Stablecoins (USDC/EURC) et actifs majeurs via des protocoles institutionnels audités.'
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
            <Clock3 className="h-3.5 w-3.5" /> Ingénierie de Rendement · Trésorerie &amp; Patrimoine
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl font-bold text-white leading-tight">
            Consultant DeFi : Générer du Rendement sur vos Stablecoins sans Intermédiaire Bancaire
          </h1>
          <div className="p-5 rounded-xl bg-[#141414] border-l-4 border-[#D4AF37] text-sm text-gray-200 leading-relaxed">
            <strong className="text-[#D4AF37] block uppercase text-xs tracking-wider mb-1">En bref (Synthèse Stratégique) :</strong>
            La Finance Décentralisée (DeFi) permet aux investisseurs particuliers et aux dirigeants de sociétés de rémunérer leur réserve de liquidités (Stablecoins USDC, USDT, EURC) entre 6 % et 9 % par an (APY) sur des marchés monétaires algorithmiques audités comme Aave. Contrairement à un placement bancaire bloqué, vos fonds restent 100 % liquides, sur votre propre clé matérielle (Ledger), et les prêts sous-jacents sont sur-collatéralisés.
          </div>
        </header>

        <section className="onyx-card rounded-2xl p-8 space-y-6">
          <h2 className="font-headline text-2xl sm:text-3xl text-[#D4AF37]">
            Comparatif : Épargne Bancaire vs Rendement DeFi Institutionnel
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#D4AF37] text-[#D4AF37] uppercase text-[11px]">
                  <th className="py-3 px-4">Paramètre Financier</th>
                  <th className="py-3 px-4">Compte à Terme / Fonds Euros</th>
                  <th className="py-3 px-4 bg-[#171204]">Poche Stablecoins DeFi (Méthode CryptoConsult)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-gray-200">
                <tr>
                  <td className="py-3 px-4 font-bold text-white">Rendement annuel moyen</td>
                  <td className="py-3 px-4 text-gray-300">2 % à 3 % brut (souvent inférieur à l&apos;inflation)</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold bg-[#171204]">6 % à 9 % APY (Versé bloc par bloc en temps réel)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-white">Disponibilité du capital</td>
                  <td className="py-3 px-4 text-amber-300">Préavis de retrait ou pénalités de sortie</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold bg-[#171204]">Liquidité instantanée 24h/24 et 7j/7</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-white">Garantie du capital prêté</td>
                  <td className="py-3 px-4 text-red-400">Réserve fractionnaire bancaire</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold bg-[#171204]">Sur-collatéralisation (>130 %) liquidable automatiquement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="onyx-card rounded-2xl p-8 space-y-6">
          <h2 className="font-headline text-2xl sm:text-3xl text-white">
            Comment nous sécurisons vos rendements DeFi
          </h2>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <span><strong className="text-white">Sélection stricte des protocoles (Blue-Chips) :</strong> Nous déployons uniquement sur des protocoles éprouvés depuis plusieurs cycles disposant de milliards de dollars de TVL (Aave, Uniswap, Lido).</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <span><strong className="text-white">Accumulation Auto-Financée :</strong> Les intérêts générés par vos Stablecoins servent à acheter automatiquement du Bitcoin et de l&apos;Ethereum lors des replis du marché, sans entamer votre capital initial.</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <span><strong className="text-white">Audit &amp; Révocation des Permissions :</strong> Nettoyage complet de vos approbations de smart contracts pour éviter toute faille d&apos;exploitation.</span>
            </li>
          </ul>

          <div className="pt-4 flex flex-wrap gap-4 items-center justify-between border-t border-white/10">
            <div>
              <p className="text-sm font-bold text-white">Vous souhaitez faire travailler votre trésorerie ou votre réserve de Stablecoins ?</p>
              <p className="text-xs text-gray-400">Diagnostic gratuit de 30 minutes avec simulation de rendement sur votre capital.</p>
            </div>
            <a
              href="/#reservation"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E6C770] text-[#0A0A0A] font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg"
            >
              Simuler mon rendement en appel <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

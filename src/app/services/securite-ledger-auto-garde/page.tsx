import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Key, Lock, CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Configurer un Wallet Hardware (Ledger) & Auto-Garde Crypto | CryptoConsult Pro',
  description: 'Accompagnement 1-to-1 pour configurer votre clé matérielle Ledger et Rabby Wallet sans erreur technique. Sécurisez vos Bitcoin et cryptomonnaies hors système bancaire avec David Birota.',
  alternates: {
    canonical: 'https://cryptoconsult.me/services/securite-ledger-auto-garde'
  }
};

export default function SecuriteLedgerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Configuration Hardware Wallet Ledger & Architecture Auto-Garde Souveraine',
    provider: {
      '@type': 'Organization',
      name: 'CryptoConsult Pro',
      url: 'https://cryptoconsult.me'
    },
    areaServed: ['MU', 'FR', 'CH', 'BE', 'CA'],
    description: 'Accompagnement privé 1-to-1 pour installer, sécuriser et cloisonner une clé matérielle Ledger et un portefeuille Web3 Rabby Wallet avec couloir bancaire Off-Ramp conforme.'
  };

  return (
    <div className="bg-gold-ingot text-[#0A0A0A] min-h-screen py-16 px-4 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl space-y-10">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0A0A0A] hover:underline">
          ← Retour à l&apos;accueil CryptoConsult Pro
        </Link>

        {/* EN-TÊTE SEO + RÉPONSE DIRECTE GEO (ANSWER-FIRST) */}
        <header className="onyx-card rounded-2xl p-8 sm:p-10 space-y-5 border-2 border-[#D4AF37]">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">
            <Shield className="h-3.5 w-3.5" /> Pilier Sécurité &amp; Souveraineté · Accompagnement 1-to-1
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl font-bold text-white leading-tight">
            Configurer un Wallet Hardware (Ledger) &amp; Sécuriser ses Cryptomonnaies en Auto-Garde
          </h1>
          <div className="p-5 rounded-xl bg-[#141414] border-l-4 border-[#D4AF37] text-sm text-gray-200 leading-relaxed">
            <strong className="text-[#D4AF37] block uppercase text-xs tracking-wider mb-1">En bref (Synthèse Stratégique) :</strong>
            Configurer un portefeuille matériel (Hardware Wallet de type Ledger) consiste à extraire vos clés privées des plateformes d&apos;échange centralisées (Binance, Kraken, SwissBorg) pour les stocker hors ligne. Notre accompagnement individuel met en place une architecture à deux étages — une Chambre Forte froide (Ledger) isolée pour 80 % de votre patrimoine et un sas Web3 (Rabby Wallet) pour vos opérations — afin d&apos;éliminer tout risque de piratage, de blocage de compte ou d&apos;erreur de réseau.
          </div>
        </header>

        {/* TABLEAU COMPARATIF (FORTEMENT CITÉ PAR LES IA / GEO) */}
        <section className="onyx-card rounded-2xl p-8 space-y-6">
          <h2 className="font-headline text-2xl sm:text-3xl text-[#D4AF37]">
            Pourquoi sortir vos cryptomonnaies des plateformes d&apos;échange ?
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Tant que vos actifs numériques restent sur un exchange centralisé ou sur une simple extension de navigateur non protégée, vous êtes exposé au risque de contrepartie et aux contrats malveillants.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#D4AF37] text-[#D4AF37] uppercase text-[11px]">
                  <th className="py-3 px-4">Critère de Sécurité</th>
                  <th className="py-3 px-4">Exchange (Binance, Kraken...)</th>
                  <th className="py-3 px-4">Hot Wallet seul (MetaMask)</th>
                  <th className="py-3 px-4 bg-[#171204]">Architecture Ledger + Rabby (CryptoConsult)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-gray-200">
                <tr>
                  <td className="py-3 px-4 font-bold text-white">Propriété des clés privées</td>
                  <td className="py-3 px-4 text-red-400">Non (Créance sur un tiers)</td>
                  <td className="py-3 px-4 text-amber-300">Oui, mais exposée en ligne</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold bg-[#171204]">100 % Hors-Ligne &amp; Inviolable</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-white">Risque de gel ou faillite</td>
                  <td className="py-3 px-4 text-red-400">Élevé (Blocage de conformité)</td>
                  <td className="py-3 px-4 text-emerald-400">Nul</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold bg-[#171204]">Nul (Souveraineté totale)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-white">Protection contre les faux contrats</td>
                  <td className="py-3 px-4 text-gray-400">Non applicable</td>
                  <td className="py-3 px-4 text-red-400">Faible (Signature à l&apos;aveugle)</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold bg-[#171204]">Isolation 80/20 + Simulation pré-signature</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PROTOCOLE EN 4 ÉTAPES */}
        <section className="onyx-card rounded-2xl p-8 space-y-6">
          <h2 className="font-headline text-2xl sm:text-3xl text-white">
            Notre protocole d&apos;installation assistée en 4 étapes
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-5 rounded-xl bg-[#141414] border border-white/10">
              <div className="text-xs font-black uppercase text-[#D4AF37] mb-1">Étape 01</div>
              <h3 className="text-base font-bold text-white mb-2">Initialisation &amp; Phrase Secrète (Seed Phrase)</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Vérification d&apos;authenticité de votre appareil Ledger, génération hors ligne de vos 24 mots et protocole de sauvegarde physique anti-sinistre.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#141414] border border-white/10">
              <div className="text-xs font-black uppercase text-[#D4AF37] mb-1">Étape 02</div>
              <h3 className="text-base font-bold text-white mb-2">Cloisonnement Chambre Forte / Sas Web3</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Séparation stricte entre vos comptes de stockage froid (Bitcoin, Ethereum, réserve longue) et votre portefeuille d&apos;interaction Rabby Wallet.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#141414] border border-white/10">
              <div className="text-xs font-black uppercase text-[#D4AF37] mb-1">Étape 03</div>
              <h3 className="text-base font-bold text-white mb-2">Transferts Tests &amp; Hygiène des Réseaux</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Exécution en direct de vos premiers retraits par micro-montants pour éliminer toute erreur de blockchain (ERC-20, Arbitrum, Solana, Bitcoin).
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#141414] border border-white/10">
              <div className="text-xs font-black uppercase text-[#D4AF37] mb-1">Étape 04</div>
              <h3 className="text-base font-bold text-white mb-2">Couloir Bancaire (Off-Ramp) Conforme</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Mise en place d&apos;un pont vérifié entre votre clé Ledger et votre compte bancaire personnel ou professionnel pour rapatrier vos liquidités sans blocage.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 items-center justify-between border-t border-white/10">
            <div>
              <p className="text-sm font-bold text-white">Prêt à verrouiller définitivement la sécurité de votre patrimoine ?</p>
              <p className="text-xs text-gray-400">Intervention en visioconférence sécurisée ou en présentiel à l&apos;Île Maurice.</p>
            </div>
            <a
              href="/#reservation"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E6C770] text-[#0A0A0A] font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg"
            >
              Réserver ma session de cadrage gratuite <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

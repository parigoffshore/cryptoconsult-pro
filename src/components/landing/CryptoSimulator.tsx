'use client';

import { useState } from 'react';
import { Download, Calendar, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

const questions = [
  {
    q: "Quel est votre objectif principal durant cette phase d'accumulation ?",
    options: [
      "Préserver mon épargne de l'inflation et la faire croître sereinement",
      "Diversifier une partie de mon patrimoine avec méthode",
      "Générer du rendement passif (DeFi) et capter la hausse du cycle",
      "Viser une performance asymétrique maximale sur ce cycle"
    ],
    justification: "L'objectif détermine la répartition entre le socle souverain (Bitcoin) et les poches de rendement ou de croissance."
  },
  {
    q: "Sur quel horizon de temps envisagez-vous cet investissement ?",
    options: ["Moins de 12 mois (Cycle court)", "1 à 3 ans (Cycle complet)", "3 à 5 ans (Patrimonial)", "Plus de 5 ans (Souveraineté long terme)"],
    justification: "L'horizon temporel permet de calibrer vos paliers d'accumulation (DCA) et vos seuils de prise de profits."
  },
  {
    q: "Quel niveau de fluctuation temporaire acceptez-vous sur votre portefeuille ?",
    options: [
      "Le plus faible possible (priorité à la stabilité)",
      "Des variations modérées et maîtrisées",
      "Des variations importantes si le couple rendement/risque est fort",
      "Une forte volatilité pour maximiser les multiples de fin de cycle"
    ],
    justification: "Votre tolérance au risque fixe la part de réserve liquide (Stablecoins rémunérés) à conserver en sécurité."
  },
  {
    q: "En cas de repli temporaire du marché (-20%), quelle est votre réaction ?",
    options: [
      "Je préfère sécuriser et réduire mon exposition",
      "Je patiente mais j'ai besoin d'un cadre rassurant",
      "Je maintiens mon plan d'accumulation sans émotion",
      "Je déploie ma réserve de liquidités pour renforcer à bon prix"
    ],
    justification: "La gestion émotionnelle dicte le niveau d'automatisation de vos achats et de vos seuils de protection."
  },
  {
    q: "Quelle est votre expérience actuelle avec les actifs numériques ?",
    options: [
      "Je débute et souhaite partir sur des bases 100% saines",
      "Je détiens quelques cryptos sur une application ou un exchange",
      "Je connais les bases et je veux structurer ma sécurité (Ledger / DeFi)",
      "Je suis déjà investi et je veux optimiser la performance de mon portefeuille"
    ],
    justification: "Votre maîtrise technique oriente le niveau d'accompagnement pratique requis pour sécuriser vos clés privées."
  },
  {
    q: "Quel capital (initial ou progressif) envisagez-vous d'allouer à cette stratégie ?",
    options: ["Moins de 1 000 €", "1 000 à 5 000 €", "5 000 à 25 000 €", "Plus de 25 000 €"],
    justification: "Le volume de capital détermine l'architecture de garde (Cold Storage, isolation DeFi) et l'éligibilité au Stress-Test en direct."
  },
  {
    q: "Quelle approche de gestion vous correspond le mieux ?",
    options: [
      "Une réserve souveraine simple, hors banque et facile à suivre",
      "Un équilibre entre stockage froid (Ledger) et revenus passifs (Stablecoins)",
      "Une stratégie active combinant grands protocoles et finance décentralisée",
      "Un pilotage dynamique guidé par les données quantitatives et les cycles"
    ],
    justification: "Ce choix définit l'équilibre entre détention patrimoniale froide et exploitation active du Web3."
  },
  {
    q: "Aujourd'hui, quelle est votre priorité absolue pour passer à l'action ?",
    options: [
      "Être guidé pas à pas pour éviter toute erreur technique ou fiscale",
      "Obtenir un plan d'accumulation clair avec des paliers précis",
      "Sécuriser mes actifs hors des plateformes d'échange et générer du rendement",
      "Auditer mon portefeuille actuel pour éliminer les tokens dilués avant le bull run"
    ],
    justification: "C'est l'indicateur final qui personnalise votre feuille de route et votre Ebook stratégique."
  }
];

const scoringMatrix = [
  [[3,0,0], [2,1,0], [0,3,0], [0,0,3]],
  [[0,0,3], [0,2,1], [2,1,0], [3,0,0]],
  [[3,0,0], [2,1,0], [0,2,1], [0,0,3]],
  [[3,0,0], [2,1,0], [0,2,1], [0,0,3]],
  [[3,0,0], [2,1,0], [0,3,0], [0,0,3]],
  [[0,0,0], [0,0,0], [0,0,0], [0,0,0]],
  [[3,0,0], [1,2,0], [0,3,0], [0,0,3]],
  [[3,0,0], [1,2,0], [0,1,2], [0,0,3]]
];

const PROFILE_DETAILS: Record<string, {
  title: string;
  badge: string;
  pdfUrl: string;
  allocation: string;
  summary: string;
}> = {
  Conservateur: {
    title: "Profil Conservateur · Préservation & Croissance Sereine",
    badge: "ARCHITECTURE BUNKER & DCA",
    pdfUrl: "/Plan_de_Sortie_Conservateur.pdf",
    allocation: "55% Bitcoin (Ledger) • 25% Ethereum • 20% Réserve Stablecoins (USDC/EURC)",
    summary: "Votre priorité est la protection de votre capital contre l'inflation et le risque bancaire. La phase d'accumulation actuelle est idéale pour bâtir votre réserve par achats lissés (DCA) sur clé matérielle Ledger."
  },
  Explorateur: {
    title: "Profil Explorateur · Équilibre, Croissance & Rendement DeFi",
    badge: "CHAMBRE FORTE + MOTEUR DEFI (6-9% APY)",
    pdfUrl: "/Plan_de_Sortie_Explorateur.pdf",
    allocation: "40% Bitcoin (Ledger) • 25% Leaders TVL (ETH/SOL/AAVE/LINK) • 25% Yield Stablecoins • 10% Tactique",
    summary: "Vous cherchez le point d'équilibre optimal : sécuriser 80% de votre patrimoine à froid sur Ledger tout en faisant travailler 20% de liquidités en Finance Décentralisée pour autofinancer vos achats sur repli."
  },
  Speculateur: {
    title: "Profil Dynamique · Performance Asymétrique & Maîtrise du Cycle",
    badge: "ASYMÉTRIE QUANTITATIVE & ROTATION",
    pdfUrl: "/Plan_de_Sortie_Speculateur.pdf",
    allocation: "40% Socle BTC/ETH • 30% Narratives à Cash-Flow • 15% Alpha Ciblé • 15% Poudre Sèche DeFi",
    summary: "Vous visez des multiples élevés sur ce cycle. Votre enjeu numéro 1 est d'éliminer les altcoins à forte dilution (Token Unlocks) et de programmer mathématiquement vos paliers de prise de profits vers votre Ledger."
  }
};

export default function CryptoSimulator() {
  const [step, setStep] = useState(0);
  const [choices, setChoices] = useState<number[]>(new Array(8).fill(0));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [finalProfile, setFinalProfile] = useState<'Conservateur' | 'Explorateur' | 'Speculateur'>('Explorateur');

  const handleChoice = (choiceIndex: number) => {
    const newChoices = [...choices];
    newChoices[step] = choiceIndex;
    setChoices(newChoices);
    setStep(step + 1);
  };

  const submitSimulation = async () => {
    if (!name.trim()) return alert('Veuillez indiquer votre prénom ou nom.');
    if (!email.includes('@')) return alert('Veuillez entrer une adresse email valide.');
    if (!consent) return alert('Veuillez accepter les conditions pour afficher et recevoir votre diagnostic.');

    setIsSubmitting(true);

    let totalScores = [0, 0, 0];
    for (let i = 0; i < 8; i++) {
      const choice = choices[i] ?? 0;
      totalScores[0] += scoringMatrix[i][choice][0];
      totalScores[1] += scoringMatrix[i][choice][1];
      totalScores[2] += scoringMatrix[i][choice][2];
    }

    const maxScore = Math.max(...totalScores);
    const profileName: 'Conservateur' | 'Explorateur' | 'Speculateur' =
      totalScores[0] === maxScore ? 'Conservateur' : totalScores[1] === maxScore ? 'Explorateur' : 'Speculateur';

    setFinalProfile(profileName);

    const capitalRange = questions[5].options[choices[5] ?? 2];
    const horizon = questions[1].options[choices[1] ?? 1];
    const objective = questions[0].options[choices[0] ?? 1];
    const priorityNeed = questions[7].options[choices[7] ?? 1];

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      profile: profileName,
      investorProfile: profileName,
      capitalRange,
      horizon,
      objective,
      priorityNeed,
      source: 'Simulateur cryptoconsult.me'
    };

    // 1. Envoi au backend du site (Brevo + Relais CRM)
    try {
      await fetch('/api/simulateur', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (_) {}

    // 2. Envoi direct au CRM du Dashboard Admin (CORS activé)
    try {
      await fetch('https://admin.cryptoconsult.me/api/crm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          source: 'Simulateur cryptoconsult.me',
          investorProfile: profileName,
          capitalRange,
          holdings: `Objectif : ${objective} | Horizon : ${horizon}`,
          notes: `Priorité : ${priorityNeed}`
        })
      });
    } catch (_) {}

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    const info = PROFILE_DETAILS[finalProfile] || PROFILE_DETAILS.Explorateur;
    const isHighTicket = (choices[5] ?? 0) >= 2; // >= 5 000 € ou > 25 000 €
    const calendlyPrefillUrl = `https://calendly.com/davidcrypto507/30min?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;

    return (
      <div className="onyx-card mx-auto max-w-3xl rounded-2xl p-8 sm:p-10 space-y-6 border-2 border-[#D4AF37]">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">
            <ShieldCheck className="h-3.5 w-3.5" /> {info.badge}
          </span>
          <span className="text-xs text-gray-400">Dossier préparé pour <strong className="text-white">{name}</strong></span>
        </div>

        <div>
          <h3 className="font-headline text-2xl sm:text-3xl text-white mb-2">{info.title}</h3>
          <p className="text-sm text-gray-300 leading-relaxed">{info.summary}</p>
        </div>

        <div className="p-4 rounded-xl bg-[#141414] border border-[#D4AF37]/40">
          <div className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] mb-1">
            Allocation Cible Recommandée en Phase d&apos;Accumulation :
          </div>
          <div className="text-xs sm:text-sm font-bold text-white">{info.allocation}</div>
        </div>

        {/* TÉLÉCHARGEMENT IMMÉDIAT DE L'EBOOK PERSONNALISÉ */}
        <div className="p-5 rounded-xl bg-gradient-to-r from-[#171204] via-[#0f0f0f] to-[#171204] border border-[#D4AF37]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">
              Votre Ebook Stratégique Illustré (PDF)
            </div>
            <div className="text-sm font-bold text-white mt-0.5">
              Le Plan d&apos;Accumulation Souveraine — Édition {finalProfile}
            </div>
            <div className="text-xs text-gray-400">
              Également envoyé sur {email}
            </div>
          </div>
          <a
            href={info.pdfUrl}
            download
            className="w-full sm:w-auto px-5 py-3 rounded-lg bg-[#D4AF37] hover:bg-[#e5c145] text-[#0A0A0A] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 shadow-lg transition"
          >
            <Download className="h-4 w-4" /> Télécharger mon PDF
          </a>
        </div>

        {/* BLOC DE CONVERSION CALENDLY (MISE EN AVANT PRIORITAIRE POUR LES PROFILS QUALIFIÉS) */}
        {isHighTicket ? (
          <div className="p-6 rounded-xl bg-[#121910] border-2 border-emerald-500/60 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-black uppercase tracking-wider">
              <CheckCircle2 className="h-4 w-4" /> Éligibilité Confirmée · Diagnostic &amp; Stress-Test en Direct Offert
            </div>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              Au vu de votre capacité d&apos;allocation (<strong className="text-white">{questions[5].options[choices[5]]}</strong>), la moindre erreur de sélection de token ou de paramétrage de sécurité (Ledger / DeFi) peut représenter plusieurs milliers d&apos;euros d&apos;écart en fin de cycle. Vous êtes éligible à une session privée de 30 minutes avec <strong className="text-[#D4AF37]">David Birota</strong> pour passer votre portefeuille dans notre Simulateur de Cycle.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={calendlyPrefillUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[240px] py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F3E0A2] text-[#0A0A0A] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:brightness-110 transition"
              >
                <Calendar className="h-4 w-4" /> Réserver mon Appel Stratégique (Pré-rempli)
              </a>
              <a
                href="#reservation"
                className="py-3.5 px-5 rounded-xl border border-[#D4AF37]/50 bg-[#0A0A0A] text-[#D4AF37] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                Voir le Calendrier ci-dessous <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ) : (
          <div className="p-5 rounded-xl bg-[#141414] border border-white/10 space-y-2 text-center">
            <p className="text-xs text-gray-300 leading-relaxed">
              Étudiez attentivement votre Ebook ci-dessus pour appliquer la méthode des achats programmés (DCA) à votre rythme. Si vous souhaitez un accompagnement sur-mesure pour configurer votre sécurité matérielle Ledger, vous pouvez <a href="#reservation" className="text-[#D4AF37] underline font-bold">consulter nos disponibilités ici</a>.
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="onyx-card mx-auto max-w-2xl rounded-2xl p-8 sm:p-10">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <h3 className="font-headline text-2xl text-white">
          Simulateur d&apos;<span className="italic text-[#D4AF37]">Accumulation Souveraine</span>
        </h3>
        {step < 8 && (
          <span className="rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 px-3 py-1 text-xs font-black text-[#D4AF37]">
            {step + 1} / 8
          </span>
        )}
      </div>

      {step < 8 ? (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="w-full bg-white/10 h-1.5 rounded-full mb-6 overflow-hidden">
            <div
              className="bg-[#D4AF37] h-full transition-all duration-300"
              style={{ width: `${((step + 1) / 8) * 100}%` }}
            />
          </div>

          <p className="mb-6 text-lg sm:text-xl font-bold text-white leading-snug">{questions[step].q}</p>

          <div className="flex flex-col gap-3">
            {questions[step].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleChoice(idx)}
                className="rounded-xl border border-white/15 bg-[#141414] p-4 text-left text-sm font-medium text-gray-100 transition hover:border-[#D4AF37] hover:bg-[#1f1a08] hover:text-[#D4AF37]"
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-4 text-center">
            <p className="text-xs italic text-gray-400">{questions[step].justification}</p>
          </div>
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37]">
              <Sparkles className="h-3.5 w-3.5" /> Analyse Complétée
            </span>
            <p className="mt-1 text-lg font-bold text-white">
              Où devons-nous afficher et envoyer votre Plan d&apos;Accumulation personnalisé ?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre Prénom & Nom *"
              className="w-full rounded-xl border border-[#D4AF37]/40 bg-[#141414] p-3.5 text-sm text-white placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none"
              required
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Téléphone / WhatsApp (Optionnel)"
              className="w-full rounded-xl border border-white/15 bg-[#141414] p-3.5 text-sm text-white placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse email professionnelle *"
            className="w-full rounded-xl border border-[#D4AF37]/40 bg-[#141414] p-3.5 text-sm text-white placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none"
            required
          />

          <label className="flex items-start gap-3 text-xs text-gray-300 text-left cursor-pointer pt-1">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 accent-[#D4AF37]"
            />
            <span>
              J&apos;accepte de recevoir mon Ebook « Le Plan d&apos;Accumulation Souveraine » et mon diagnostic personnalisé de la part de Crypto Consult Pro. Vos données restent strictement confidentielles.
            </span>
          </label>

          <button
            onClick={submitSimulation}
            disabled={isSubmitting}
            className="w-full rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E6C770] p-4 text-xs font-black text-[#0A0A0A] transition hover:brightness-110 uppercase tracking-widest shadow-lg disabled:opacity-50"
          >
            {isSubmitting ? 'Génération de votre Dossier...' : 'Découvrir mon Profil & Télécharger mon Ebook (PDF)'}
          </button>
        </div>
      )}
    </div>
  );
}

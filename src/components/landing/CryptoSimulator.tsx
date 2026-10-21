'use client';

import { useState } from 'react';

const questions = [
  {
    q: "Quel est votre objectif principal avec la crypto ?",
    options: ["Préserver et faire croître mon capital progressivement", "Diversifier une partie de mon patrimoine", "Chercher des opportunités plus dynamiques", "Profiter d’opportunités rapides de marché"],
    justification: "L'objectif définit la pondération entre les actifs de réserve souverains (BTC) et les actifs de croissance."
  },
  {
    q: "Sur quelle durée êtes-vous prêt à investir cet argent ?",
    options: ["Moins de 12 mois", "1 à 3 ans", "3 à 5 ans", "Plus de 5 ans"],
    justification: "L'horizon temporel détermine si votre capital peut mathématiquement absorber la cyclicité du marché."
  },
  {
    q: "Quel niveau de variation de votre capital êtes-vous prêt à accepter ?",
    options: ["Le moins possible", "De petites variations seulement", "Des variations modérées si le potentiel est intéressant", "De fortes variations si le potentiel est élevé"],
    justification: "L'évaluation de votre tolérance au risque permet de calibrer la poche de Stablecoins rémunérés en DeFi."
  },
  {
    q: "Si votre portefeuille baisse fortement pendant un moment, que faites-vous le plus probablement ?",
    options: ["Je préfère sortir rapidement", "J’attends mais cela m’inquiète", "Je garde mon plan sans paniquer", "Je cherche si c’est une opportunité"],
    justification: "Cette donnée révèle votre gestion émotionnelle face aux purges et dicte vos paliers d'achat DCA."
  },
  {
    q: "Quel est votre niveau actuel en crypto ?",
    options: ["Je débute complètement", "J’ai déjà acheté quelques cryptos", "Je comprends les bases et je veux structurer", "Je suis déjà actif et je veux aller plus loin"],
    justification: "L'identification de votre maîtrise technique permet de concevoir une architecture de sécurité adaptée (Ledger / Rabby)."
  },
  {
    q: "Quel montant seriez-vous à l’aise d’allouer à la crypto aujourd’hui ?",
    options: ["Moins de 1 000 €", "1 000 à 5 000 €", "5 000 à 25 000 €", "Plus de 25 000 €"],
    justification: "Le volume de capital exige des protocoles de sécurisation et de répartition spécifiques."
  },
  {
    q: "Quel type d'approche vous correspond le mieux ?",
    options: ["Quelque chose de simple, stable et encadré", "Un mélange entre sécurité et opportunités", "Une approche plus innovante pour le rendement", "Une approche opportuniste, plus active"],
    justification: "Cela oriente le choix stratégique entre une détention froide et une génération de rendement DeFi."
  },
  {
    q: "Aujourd’hui, de quoi avez-vous le plus besoin ?",
    options: ["D’être rassuré et guidé pas à pas", "D’un cadre clair pour investir avec méthode", "D’identifier de nouvelles opportunités", "D’une stratégie plus offensive et réactive"],
    justification: "C'est l'indicateur final pour définir le plan d'action qui structurera efficacement votre portefeuille."
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

export default function CryptoSimulator() {
  const [step, setStep] = useState(0);
  const [choices, setChoices] = useState<number[]>(new Array(8).fill(0));
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChoice = (choiceIndex: number) => {
    const newChoices = [...choices];
    newChoices[step] = choiceIndex;
    setChoices(newChoices);
    setStep(step + 1);
  };

  const submitSimulation = async () => {
    if (!email.includes('@')) return alert('Veuillez entrer une adresse email valide.');
    if (!consent) return alert('Veuillez accepter les conditions pour recevoir votre diagnostic.');

    let totalScores = [0, 0, 0];
    for (let i = 0; i < 8; i++) {
      const choice = choices[i] ?? 0;
      totalScores[0] += scoringMatrix[i][choice][0];
      totalScores[1] += scoringMatrix[i][choice][1];
      totalScores[2] += scoringMatrix[i][choice][2];
    }

    let maxScore = Math.max(...totalScores);
    let profileName = totalScores[0] === maxScore ? "Conservateur" :
                      totalScores[1] === maxScore ? "Explorateur" : "Speculateur";

    try {
      await fetch('/api/simulateur', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, profile: profileName })
      });
    } catch (err) {
      console.error('Erreur réseau silencieuse', err);
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="onyx-card mx-auto max-w-2xl rounded-2xl p-10 text-center">
        <h3 className="mb-4 font-headline text-3xl text-[#D4AF37]">Diagnostic Généré avec Succès</h3>
        <p className="text-gray-200 leading-relaxed">
          L&apos;analyse de votre profil d&apos;investisseur est terminée. Votre plan d&apos;action stratégique personnalisé vient d&apos;être envoyé sur votre boîte mail.<br/><br/>
          <span className="text-xs text-gray-400">Pensez à vérifier vos courriers indésirables si vous ne le voyez pas d&apos;ici quelques minutes.</span>
        </p>
      </div>
    );
  }

  return (
    <div className="onyx-card mx-auto max-w-2xl rounded-2xl p-8 sm:p-10">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <h3 className="font-headline text-2xl text-white">
          Simulateur de <span className="italic text-[#D4AF37]">Profil Patrimonial</span>
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
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="mb-2 text-center text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37]">Calcul Terminé</p>
          <p className="mb-6 text-center text-lg font-bold text-white">
            À quelle adresse devons-nous envoyer votre Plan d&apos;Action personnalisé ?
          </p>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse email professionnelle"
            className="mb-5 w-full rounded-xl border border-[#D4AF37]/40 bg-[#141414] p-4 text-sm text-white placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none"
            required
          />

          <label className="mb-6 flex items-start gap-3 text-xs text-gray-300 text-left cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 accent-[#D4AF37]"
            />
            <span>
              J&apos;accepte de recevoir mon diagnostic patrimonial et les analyses stratégiques de Crypto Consult Pro. Vos données restent strictement confidentielles.
            </span>
          </label>

          <button
            onClick={submitSimulation}
            className="w-full rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E6C770] p-4 text-xs font-black text-[#0A0A0A] transition hover:brightness-110 uppercase tracking-widest shadow-lg"
          >
            Recevoir mon Diagnostic Gratuit
          </button>
        </div>
      )}
    </div>
  );
}

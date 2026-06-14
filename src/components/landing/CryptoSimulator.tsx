'use client';

import { useState } from 'react';

const questions = [
  {
    q: "Quel est votre objectif principal avec la crypto ?",
    options: ["Préserver et faire croître mon capital progressivement", "Diversifier une partie de mon patrimoine", "Chercher des opportunités plus dynamiques", "Profiter d’opportunités rapides de marché"],
    justification: "L'objectif définit la pondération entre les actifs de réserve structurants et les actifs à forte volatilité."
  },
  {
    q: "Sur quelle durée êtes-vous prêt à investir cet argent ?",
    options: ["Moins de 12 mois", "1 à 3 ans", "3 à 5 ans", "Plus de 5 ans"],
    justification: "L'horizon temporel détermine si votre capital peut mathématiquement absorber la cyclicité historique du marché."
  },
  {
    q: "Quel niveau de variation de votre capital êtes-vous prêt à accepter ?",
    options: ["Le moins possible", "De petites variations seulement", "Des variations modérées si le potentiel est intéressant", "De fortes variations si le potentiel est élevé"],
    justification: "L'évaluation de votre tolérance au risque permet de calibrer la proportion de liquidités (poudre sèche) nécessaire."
  },
  {
    q: "Si votre portefeuille baisse fortement pendant un moment, que faites-vous le plus probablement ?",
    options: ["Je préfère sortir rapidement", "J’attends mais cela m’inquiète", "Je garde mon plan sans paniquer", "Je cherche si c’est une opportunité"],
    justification: "Cette donnée révèle votre gestion émotionnelle face aux baisses et dicte le niveau d'automatisation requis pour protéger vos fonds."
  },
  {
    q: "Quel est votre niveau actuel en crypto ?",
    options: ["Je débute complètement", "J’ai déjà acheté quelques cryptos", "Je comprends les bases et je veux structurer", "Je suis déjà actif et je veux aller plus loin"],
    justification: "L'identification de votre maîtrise technique permet de concevoir une architecture de sécurité adaptée."
  },
  {
    q: "Quel montant seriez-vous à l’aise d’allouer à la crypto aujourd’hui ?",
    options: ["Moins de 1 000 €", "1 000 à 5 000 €", "5 000 à 25 000 €", "Plus de 25 000 €"],
    justification: "Le volume de capital exige des infrastructures différentes : les protocoles de sécurisation évoluent selon les montants."
  },
  {
    q: "Quel type d'approche vous correspond le mieux ?",
    options: ["Quelque chose de simple, stable et encadré", "Un mélange entre sécurité et opportunités", "Une approche plus innovante pour le rendement", "Une approche opportuniste, plus active"],
    justification: "Cela oriente le choix stratégique entre une détention passive et une exploitation active de l'écosystème."
  },
  {
    q: "Aujourd’hui, de quoi avez-vous le plus besoin ?",
    options: ["D’être rassuré et guidé pas à pas", "D’un cadre clair pour investir avec méthode", "D’identifier de nouvelles opportunités", "D’une stratégie plus offensive et réactive"],
    justification: "C'est l'indicateur final pour définir le plan d'action qui corrigera efficacement vos lacunes actuelles."
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

    const webhookUrl = '/api/simulateur';

    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: email, 
          profile: profileName
        })
      });
    } catch (err) {
      console.error('Erreur réseau silencieuse', err);
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl rounded-md border border-[#D4AF37]/40 bg-[#0a0a0a] p-10 text-center shadow-2xl">
        <h3 className="mb-4 font-headline text-2xl text-[#D4AF37]">Données Sécurisées.</h3>
        <p className="text-[#F3F4F6]/70">L&apos;analyse de votre profil est terminée. Votre Plan de Sortie stratégique vient d&apos;être généré et envoyé sur votre boîte mail.<br/><br/>Veuillez vérifier vos courriers indésirables si vous ne le recevez pas d&apos;ici quelques minutes.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-md border border-[#1e1e1e] bg-[#0a0a0a] p-8 shadow-2xl">
      <h2 className="mb-2 text-center font-headline text-3xl text-white">Audit de <span className="italic text-[#D4AF37]">Souveraineté</span></h2>
      
      {step < 8 ? (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="mb-8 text-center text-xs uppercase tracking-[0.2em] text-[#D4AF37]">Question {step + 1} / 8</p>
          <p className="mb-6 text-center text-lg font-medium text-[#F3F4F6]">{questions[step].q}</p>
          
          <div className="flex flex-col gap-3">
            {questions[step].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleChoice(idx)}
                className="rounded-md border border-[#1e1e1e] bg-[#111] p-4 text-left text-sm text-[#F3F4F6] transition hover:border-[#D4AF37] hover:bg-[#1a1a1a]"
              >
                {opt}
              </button>
            ))}
          </div>
          
          <div className="mt-8 border-t border-[#1e1e1e] pt-4 text-center">
            <p className="text-xs italic text-[#F3F4F6]/40">{questions[step].justification}</p>
          </div>
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="mb-8 text-center text-xs uppercase tracking-[0.2em] text-[#D4AF37]">Diagnostic Terminé</p>
          <p className="mb-6 text-center text-lg font-medium text-[#F3F4F6]">Où devons-nous envoyer votre Plan de Sortie et l&apos;analyse de vos vulnérabilités ?</p>
          
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre email professionnel"
            className="mb-6 w-full rounded-md border border-[#1e1e1e] bg-[#151a22] p-4 text-white focus:border-[#D4AF37] focus:outline-none"
            required
          />
          
          <label className="mb-6 flex items-start gap-3 text-xs text-[#F3F4F6]/50 text-left">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5" />
            <span>En validant ce formulaire, j&apos;accepte de recevoir mon diagnostic et des communications stratégiques de la part de Crypto Consult Pro. Vos données restent strictement confidentielles.</span>
          </label>
          
          <button
            onClick={submitSimulation}
            className="w-full rounded-md bg-[#D4AF37] p-4 text-sm font-bold text-[#0A0A0A] transition hover:brightness-110 uppercase tracking-wider"
          >
            Recevoir le diagnostic
          </button>
        </div>
      )}
    </div>
  );
}

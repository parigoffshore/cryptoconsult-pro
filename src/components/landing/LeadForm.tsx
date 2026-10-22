"use client";

import { useState } from 'react';
import { Download } from 'lucide-react';

export default function LeadForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      // Envoi simultané dans le CRM du Dashboard pour ne perdre aucun lead du Hero
      try {
        await fetch('https://admin.cryptoconsult.me/api/crm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: email.split('@')[0],
            email,
            source: 'Guide Hero (Plan Accumulation)',
            investorProfile: 'À qualifier (Guide téléchargé)',
            capitalRange: '5 000 à 25 000 €',
            holdings: 'Téléchargement du Guide PDF en page d’accueil'
          })
        });
      } catch (_) {}

      const data = await response.json();
      if (response.ok) {
        setIsSuccess(true);
      } else {
        setError(data.error || "Une erreur est survenue");
      }
    } catch (err) {
      setIsSuccess(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="pt-2">
        <a
          href="/Le_Plan_de_Sortie.pdf"
          download="Le_Plan_d_Accumulation_Souveraine_CryptoConsultPro.pdf"
          className="inline-flex items-center justify-center gap-2 w-full text-center bg-gradient-to-r from-[#D4AF37] to-[#E6C770] text-[#0A0A0A] font-black text-xs uppercase tracking-wider py-3.5 px-6 rounded-lg shadow-lg hover:brightness-110 transition"
        >
          <Download className="h-4 w-4" /> Télécharger « Le Plan d&apos;Accumulation Souveraine » (PDF)
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre email professionnel..."
        required
        className="flex-1 px-4 py-3 bg-[#141414] border border-[#D4AF37]/40 rounded-lg text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37]"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="bg-[#D4AF37] hover:bg-[#e3be42] text-[#0A0A0A] font-black text-xs uppercase tracking-wider py-3 px-5 rounded-lg transition shadow-md disabled:opacity-50 whitespace-nowrap"
      >
        {isLoading ? 'Envoi...' : 'Recevoir l’Ebook'}
      </button>
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </form>
  );
}

"use client";

import { useState } from 'react';

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

      const data = await response.json();
      if (response.ok) {
        setIsSuccess(true);
      } else {
        setError(data.error || "Une erreur est survenue");
      }
    } catch (err) {
      setError("Erreur de connexion");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="pt-2">
        <a
          href="/Le_Plan_de_Sortie.pdf"
          download
          className="inline-block w-full text-center bg-gradient-to-r from-[#D4AF37] to-[#E6C770] text-[#0A0A0A] font-black text-xs uppercase tracking-wider py-3.5 px-6 rounded-lg shadow-lg hover:brightness-110 transition"
        >
          Télécharger Le Plan de Sortie (PDF)
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
        {isLoading ? 'Envoi...' : 'Recevoir le Guide'}
      </button>
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </form>
  );
}

"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    initials: "MF",
    name: "Marc Furlan",
    role: "Investisseur particulier",
    quote:
      "Grâce aux conseils de CryptoConsult Pro, j'ai pu structurer mon portefeuille crypto et réaliser des gains significatifs en seulement 6 mois.",
  },
  {
    initials: "SM",
    name: "Sofia Martinez",
    role: "Dirigeante d'entreprise",
    quote:
      "Leurs conseils m'ont permis de diversifier mes investissements et de sécuriser mes actifs sur clé matérielle tout en maximisant mes rendements.",
  },
  {
    initials: "TVS",
    name: "Thomas Van Steiner",
    role: "Entrepreneur",
    quote:
      "J'ai appris énormément sur la sécurité Non-Custodiale et la gestion des cycles. J'investis maintenant avec une vraie méthode institutionnelle.",
  },
  {
    initials: "AL",
    name: "Amélie Laurent",
    role: "Chef d'entreprise",
    quote:
      "Un accompagnement professionnel qui m'a permis d'éviter les pièges de dilution du marché et de bâtir une stratégie long terme solide.",
  },
];

const slides = [
  [testimonials[0], testimonials[1]],
  [testimonials[2], testimonials[3]],
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + 2) % 2);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % 2);

  return (
    <section id="testimonials" className="bg-gold-champagne py-20 md:py-28 border-t border-[#0A0A0A]/15">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#0A0A0A] px-4 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#D4AF37]">
            Ils nous font Confiance
          </span>
          <h2 className="mt-3 font-headline text-3xl sm:text-5xl font-bold text-[#0A0A0A]">
            Ce que disent nos Clients
          </h2>
          <p className="mt-3 text-sm sm:text-base font-medium text-[#2A2005]">
            Retours d&apos;expérience d&apos;investisseurs et dirigeants accompagnés par CryptoConsult Pro
          </p>
        </div>

        <div className="mt-12">
          <div className="grid gap-8 md:grid-cols-2">
            {slides[currentIndex].map((testimonial) => (
              <article
                key={testimonial.name}
                className="onyx-card rounded-xl p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="h-3.5 w-3.5 bg-[#D4AF37]"
                        style={{
                          clipPath:
                            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                        }}
                      />
                    ))}
                  </div>
                  <p className="mb-6 text-base italic leading-relaxed text-gray-200">
                    “{testimonial.quote}”
                  </p>
                </div>
                <div className="flex items-center gap-3.5 border-t border-white/10 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-xs font-black text-[#0A0A0A]">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{testimonial.name}</p>
                    <p className="text-xs text-[#D4AF37]">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Témoignages précédents"
              onClick={goPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A0A0A] text-[#D4AF37] shadow-md transition hover:scale-105"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {[0, 1].map((dot) => (
                <button
                  key={dot}
                  type="button"
                  aria-label={`Aller au slide ${dot + 1}`}
                  onClick={() => setCurrentIndex(dot)}
                  className={
                    dot === currentIndex
                      ? "h-2.5 w-8 rounded-full bg-[#0A0A0A]"
                      : "h-2.5 w-2.5 rounded-full bg-[#0A0A0A]/40"
                  }
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Témoignages suivants"
              onClick={goNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A0A0A] text-[#D4AF37] shadow-md transition hover:scale-105"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

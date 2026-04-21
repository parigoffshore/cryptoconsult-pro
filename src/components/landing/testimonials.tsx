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
    role: "Restauratrice",
    quote:
      "Leurs conseils m'ont permis de diversifier mes investissements et de sécuriser mes actifs tout en maximisant mes rendements.",
  },
  {
    initials: "TVS",
    name: "Thomas Van Steiner",
    role: "Entrepreneur",
    quote:
      "J'ai appris énormément sur la sécurité et la diversification. J'investis maintenant en crypto avec beaucoup plus de confiance.",
  },
  {
    initials: "AL",
    name: "Amélie Laurent",
    role: "Chef d'entreprise",
    quote:
      "Un accompagnement professionnel qui m'a permis d'éviter les pièges classiques du marché et de bâtir une stratégie long terme solide.",
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
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + 2) % 2);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % 2);

  return (
    <section id="testimonials" className="bg-[#060606] py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
          ILS NOUS FONT CONFIANCE
        </p>
        <h2 className="mt-2 text-center font-headline text-3xl text-[#F3F4F6] md:text-5xl">
          Ce que disent nos clients
        </h2>
        <p className="mt-3 text-center text-[#F3F4F6]/50">
          Histoires vraies de clients qui se sont associés à nous
        </p>

        <div className="mt-12">
          <div className="grid gap-6 md:grid-cols-2">
            {slides[currentIndex].map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-md border border-[#1a1a1a] bg-[#0f0f0f] p-6"
              >
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-[12px] w-[12px] bg-[#D4AF37]"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                      }}
                    />
                  ))}
                </div>
                <p className="mb-5 text-sm italic leading-relaxed text-[#F3F4F6]/50">
                  “{testimonial.quote}”
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a1200] text-[10px] font-bold text-[#D4AF37]">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#d0cac0]">{testimonial.name}</p>
                    <p className="text-[10px] text-[#404040]">{testimonial.role}</p>
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
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1c1c1c] bg-[#0f0f0f] text-[#666] transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              <ChevronLeft className="h-4 w-4" />
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
                      ? "h-1.5 w-4 rounded-sm bg-[#D4AF37]"
                      : "h-1.5 w-1.5 rounded-full bg-[#1c1c1c]"
                  }
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Témoignages suivants"
              onClick={goNext}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1c1c1c] bg-[#0f0f0f] text-[#666] transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="mt-20 block w-full -mb-px">
        <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z" fill="#090909" />
      </svg>
    </section>
  );
}

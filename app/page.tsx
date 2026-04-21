import Script from 'next/script';

const pillars = [
  {
    title: 'Invisibilite',
    description:
      'Proteger votre vie privee patrimoniale avec des structures discretes et robustes.',
  },
  {
    title: 'Mobilite',
    description:
      'Conserver un acces agile a vos capitaux partout dans le monde, sans friction inutile.',
  },
  {
    title: 'Auto-Garde',
    description:
      'Garder le controle de vos actifs strategiques avec une gouvernance claire et securisee.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-[#0A0A0A] text-[#F3F4F6]">
      <main>
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
              Private Banking Strategic Advisory
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              L&apos;Architecte de votre Souverainete Financiere
            </h1>
            <p className="mt-6 max-w-2xl text-base text-[#F3F4F6]/80 md:text-lg">
              Protégez votre patrimoine hors système bancaire avec une strategie
              sur mesure, alliant discretion, controle et resilience.
            </p>
            <a
              href="#reservation"
              className="mt-10 inline-flex rounded-md bg-[#D4AF37] px-7 py-3.5 font-semibold text-[#0A0A0A] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
            >
              Telecharger le Plan de Sortie
            </a>
          </div>
        </section>

        <section className="px-6 py-20 md:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Les 3 Piliers</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-md border border-[#D4AF37]/25 bg-[#121212] p-6"
                >
                  <h3 className="text-2xl font-semibold text-[#D4AF37]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[#F3F4F6]/80">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-24">
          <div className="mx-auto max-w-6xl rounded-md border border-[#D4AF37]/25 bg-[#121212] p-8 md:p-12">
            <h2 className="text-3xl font-semibold md:text-4xl">A propos</h2>
            <h3 className="mt-4 text-2xl font-semibold text-[#D4AF37]">
              David Birota
            </h3>
            <p className="mt-4 max-w-3xl text-[#F3F4F6]/85">
              Expert en strategie patrimoniale, j&apos;accompagne une clientele
              exigeante entre finance traditionnelle (TradFi) et ecosystemes
              crypto. Mon approche combine architecture financiere, protection
              juridique et execution operationnelle.
            </p>
          </div>
        </section>

        <section id="reservation" className="px-6 py-20 md:py-24">
          <div className="mx-auto max-w-6xl rounded-md border border-[#D4AF37]/25 bg-[#121212] p-6 md:p-10">
            <h2 className="text-center text-3xl font-semibold text-[#D4AF37] md:text-4xl">
              Planifiez votre appel strategique
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[#F3F4F6]/85">
              Choisissez le creneau qui vous convient ci-dessous.
            </p>
            <div
              className="calendly-inline-widget mt-8 overflow-hidden rounded-md"
              data-url="https://calendly.com/davidcrypto507/30min?background_color=0a0a0a&text_color=f3f4f6&primary_color=d4af37"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </section>
      </main>
    </div>
  );
}


import "./globals.css";

export const metadata = {
  title: "Crypto Consult Pro | L'Architecte de votre Souveraineté",
  description: "Stratégies d'investissement et protection de patrimoine hors du système bancaire classique.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Chargement standard des polices sans bloquer le build */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0A0A0A] text-[#F3F4F6] antialiased">
        {children}
      </body>
    </html>
  );
}
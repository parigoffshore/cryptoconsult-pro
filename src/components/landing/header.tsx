"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GoogleTranslateWidget } from '@/components/google-translate-widget';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#simulateur', label: 'Simulateur' },
    { href: '/#services', label: 'Services' },
    { href: '/#team', label: 'À Propos' },
    { href: '/#testimonials', label: 'Témoignages' },
    { href: '/blog', label: 'Blog' },
    { href: 'https://instagram.com/coinaisseur', label: 'Instagram', external: true },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled
        ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#D4AF37]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        : "bg-[#0A0A0A] border-b border-[#D4AF37]/30 shadow-lg"
    )}>
      <div className="container mx-auto flex h-20 items-center px-4 md:px-6">
        <div className="flex basis-1/3 justify-start">
          <Link href="/" className="flex items-center gap-2 text-sm font-black tracking-[0.14em] text-white">
            <ShieldCheck className="h-5 w-5 text-[#D4AF37]" />
            <span>CRYPTO<span className="text-[#D4AF37]">CONSULT</span> PRO</span>
          </Link>
        </div>

        <div className="hidden basis-1/3 justify-center md:flex">
          <nav className="flex items-center gap-7 text-xs font-bold uppercase tracking-widest">
            {navLinks.filter((link) => !link.external).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#D4AF37] transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex basis-1/3 items-center justify-end gap-3">
          <GoogleTranslateWidget />
          <Link
            href="/#reservation"
            className="hidden rounded-md bg-gradient-to-r from-[#D4AF37] via-[#F3E0A2] to-[#C59B27] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-[#0A0A0A] shadow-md transition hover:brightness-110 md:inline-flex"
          >
            Appel Stratégique
          </Link>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#D4AF37] hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] border-l border-[#D4AF37]/40 bg-[#0A0A0A] text-white sm:w-[380px]">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-white/10">
                    <Link href="/" className="text-sm font-black tracking-[0.14em] text-white">
                      CRYPTO<span className="text-[#D4AF37]">CONSULT</span> PRO
                    </Link>
                  </div>
                  <nav className="flex flex-col gap-5 p-6 text-base font-bold uppercase tracking-wider">
                    {navLinks.map((link) => (
                      link.external ? (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )
                    ))}
                    <Link
                      href="/#reservation"
                      className="mt-4 inline-flex w-full justify-center rounded-md bg-[#D4AF37] px-5 py-3 text-xs font-black uppercase tracking-wider text-[#0A0A0A]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Appel Stratégique
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

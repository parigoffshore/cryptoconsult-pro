"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
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
    { href: '#services', label: 'Services' },
    { href: '#team', label: 'A Propos' },
    { href: '#testimonials', label: 'Témoignages' },
    { href: '/blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
    { href: 'https://instagram.com/coinaisseur', label: 'Instagram', external: true },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled
        ? "bg-[#0A0A0A]/95 backdrop-blur border-b border-[#D4AF37]/10"
        : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center px-4 md:px-6">
        <div className="flex basis-1/3 justify-start">
          <Link href="/" className="text-sm font-semibold tracking-[0.12em] text-[#F3F4F6]">
            CRYPTO<span className="text-[#D4AF37]">CONSULT</span> PRO
          </Link>
        </div>

        <div className="hidden basis-1/3 justify-center md:flex">
          <nav className="flex items-center gap-6 text-sm font-medium">
            {navLinks.filter((link) => !link.external).map((link) => (
              <Link key={link.href} href={link.href} className="text-[#F3F4F6]/60 hover:text-[#D4AF37] transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex basis-1/3 items-center justify-end gap-2">
          <GoogleTranslateWidget />
          <Link
            href="#reservation"
            className="hidden rounded-sm bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#0A0A0A] transition hover:brightness-110 md:inline-flex"
          >
            Appel Stratégique
          </Link>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] border-[#D4AF37]/10 bg-[#0A0A0A] text-[#F3F4F6] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="p-6">
                    <Link href="/" className="text-sm font-semibold tracking-[0.12em] text-[#F3F4F6]">
                      CRYPTO<span className="text-[#D4AF37]">CONSULT</span> PRO
                    </Link>
                  </div>
                  <nav className="flex flex-col gap-6 p-6 text-lg font-medium">
                    {navLinks.map((link) => (
                      link.external ? (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#F3F4F6]/60 hover:text-[#D4AF37] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-[#F3F4F6]/60 hover:text-[#D4AF37] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )
                    ))}
                    <Link
                      href="#reservation"
                      className="inline-flex w-fit rounded-sm bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#0A0A0A] transition hover:brightness-110"
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

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Process', href: '/about' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';

  return (
    <>
      {/* Top Utility Contact Bar (Visible above 80px scroll) */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 text-[11px] tracking-widest uppercase border-b ${
          isScrolled
            ? 'opacity-0 -translate-y-full pointer-events-none'
            : 'opacity-100 translate-y-0 text-neutral-300 border-white/10 bg-gradient-to-b from-[#121316]/90 via-[#121316]/60 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-3 text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C08A58]" />
            <span className="hidden sm:inline">Turnkey · Concrete · Dirt Work · Land Clearing · Builds</span>
            <span className="sm:hidden">Turnkey General Contractor</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:+18325550303"
              className="flex items-center gap-1.5 hover:text-[#C08A58] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C08A58]" />
              <span>(832) 555-0303</span>
            </a>
            <span className="text-neutral-600 hidden sm:inline">/</span>
            <a
              href="mailto:inquiries@3constructionllc.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-[#C08A58] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#C08A58]" />
              <span>inquiries@3constructionllc.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'top-0 bg-[#121316]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
            : 'top-8 sm:top-9 bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-left text-[#F4F2EB] focus:outline-none"
            aria-label="III Construction LLC Home"
          >
            <div className="flex items-center gap-1">
              <span className="w-1 h-5 bg-[#C08A58] group-hover:h-6 transition-all duration-300" />
              <span className="w-1 h-5 bg-[#C08A58] group-hover:h-6 transition-all duration-300 delay-75" />
              <span className="w-1 h-5 bg-[#C08A58] group-hover:h-6 transition-all duration-300 delay-150" />
            </div>
            <span className="text-sm sm:text-base font-light tracking-[0.25em] uppercase text-[#F4F2EB] group-hover:text-white transition-colors">
              III Construction <span className="text-[#C08A58] font-normal">LLC</span>
            </span>
          </Link>

          {/* Zone 2: Multi-Page Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs tracking-[0.2em] uppercase text-neutral-300">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors cursor-pointer relative py-1 ${
                    active ? 'text-[#C08A58] font-medium' : 'hover:text-[#C08A58] text-neutral-300'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C08A58]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary action */}
          <div className="flex items-center gap-4">
            {onOpenInquiry ? (
              <button
                onClick={onOpenInquiry}
                className="relative group overflow-hidden px-5 py-2.5 text-xs font-medium tracking-[0.18em] uppercase border border-[#C08A58]/60 hover:border-[#C08A58] text-[#F4F2EB] bg-[#C08A58]/10 hover:bg-[#C08A58] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2 group-hover:text-[#121316] font-semibold transition-colors duration-300">
                  Inquire Project
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </button>
            ) : (
              <Link
                href="/contact"
                className="relative group overflow-hidden px-5 py-2.5 text-xs font-medium tracking-[0.18em] uppercase border border-[#C08A58]/60 hover:border-[#C08A58] text-[#F4F2EB] bg-[#C08A58]/10 hover:bg-[#C08A58] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2 group-hover:text-[#121316] font-semibold transition-colors duration-300">
                  Inquire Project
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
            )}

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-[#C08A58] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-30 bg-[#101114]/98 backdrop-blur-xl lg:hidden transition-all duration-500 flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-8'
        }`}
      >
        <div className="flex flex-col gap-6">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#C08A58] font-mono">
            Navigation Directory
          </span>

          <nav className="flex flex-col gap-5 text-xl sm:text-2xl font-light tracking-wide text-neutral-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-left hover:text-[#C08A58] transition-colors border-b border-white/5 pb-3 flex items-center justify-between ${
                pathname === '/' ? 'text-[#C08A58]' : ''
              }`}
            >
              <span>01. Home & Overview</span>
              <ArrowUpRight className="w-5 h-5 text-neutral-500" />
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-left hover:text-[#C08A58] transition-colors border-b border-white/5 pb-3 flex items-center justify-between ${
                pathname === '/services' ? 'text-[#C08A58]' : ''
              }`}
            >
              <span>02. Services & Capabilities</span>
              <ArrowUpRight className="w-5 h-5 text-neutral-500" />
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-left hover:text-[#C08A58] transition-colors border-b border-white/5 pb-3 flex items-center justify-between ${
                pathname === '/projects' ? 'text-[#C08A58]' : ''
              }`}
            >
              <span>03. Selected Projects</span>
              <ArrowUpRight className="w-5 h-5 text-neutral-500" />
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-left hover:text-[#C08A58] transition-colors border-b border-white/5 pb-3 flex items-center justify-between ${
                pathname === '/about' ? 'text-[#C08A58]' : ''
              }`}
            >
              <span>04. Methodology & Process</span>
              <ArrowUpRight className="w-5 h-5 text-neutral-500" />
            </Link>
            <Link
              href="/journal"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-left hover:text-[#C08A58] transition-colors border-b border-white/5 pb-3 flex items-center justify-between ${
                pathname === '/journal' ? 'text-[#C08A58]' : ''
              }`}
            >
              <span>05. Field Journal</span>
              <ArrowUpRight className="w-5 h-5 text-neutral-500" />
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-left hover:text-[#C08A58] transition-colors border-b border-white/5 pb-3 flex items-center justify-between ${
                pathname === '/contact' ? 'text-[#C08A58]' : ''
              }`}
            >
              <span>06. Contact & Consultation</span>
              <ArrowUpRight className="w-5 h-5 text-neutral-500" />
            </Link>
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col gap-4 text-xs tracking-wider text-neutral-400">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase text-neutral-500 tracking-[0.2em]">
              Direct Inquiries
            </span>
            <a href="tel:+18325550303" className="hover:text-white text-sm">
              (832) 555-0303
            </a>
            <a href="mailto:inquiries@3constructionllc.com" className="hover:text-white text-sm">
              inquiries@3constructionllc.com
            </a>
          </div>
          <a
            href="https://instagram.com/3constructionllc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C08A58] hover:underline"
          >
            Instagram: @3constructionllc
          </a>
        </div>
      </div>
    </>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useSmoothScroll } from './SmoothScrollProvider';

interface FooterProps {
  onOpenInquiry?: () => void;
}

export default function Footer({ onOpenInquiry }: FooterProps) {
  const { scrollTo } = useSmoothScroll();

  return (
    <footer className="bg-[#101114] text-[#F4F2EB] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Identity Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo / Wordmark */}
              <Link href="/" className="flex items-center gap-2 mb-4 group">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-6 bg-[#C08A58] block" />
                  <span className="w-1.5 h-6 bg-[#C08A58] block" />
                  <span className="w-1.5 h-6 bg-[#C08A58] block" />
                </div>
                <span className="text-lg sm:text-xl font-light tracking-[0.25em] uppercase text-white group-hover:text-white transition-colors">
                  III Construction <span className="text-[#C08A58] font-normal">LLC</span>
                </span>
              </Link>

              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-sm mb-6">
                Turnkey general contracting, engineered concrete construction, precision dirt work,
                land clearing, and bespoke residential and commercial builds.
              </p>

              {/* Instagram link (Exact handle: @3constructionllc) */}
              <a
                href="https://instagram.com/3constructionllc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs font-mono tracking-widest uppercase text-[#C08A58] hover:text-white transition-colors p-2.5 border border-[#C08A58]/30 hover:border-[#C08A58] bg-[#C08A58]/5"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram: @3constructionllc</span>
              </a>
            </div>

            <div className="mt-8 text-[11px] font-mono text-neutral-500">
              LICENSED & INSURED GENERAL CONTRACTOR
            </div>
          </div>

          {/* Navigation & Services Column */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#C08A58] block mb-4">
              Explore
            </span>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-300 font-light mb-6">
              <li>
                <Link href="/services" className="hover:text-[#C08A58] transition-colors">
                  All Services & Capabilities
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#C08A58] transition-colors">
                  Selected Works (#01–#05)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C08A58] transition-colors">
                  Methodology & Process
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-[#C08A58] transition-colors">
                  Field Journal & Notes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C08A58] transition-colors">
                  Project Consultation
                </Link>
              </li>
            </ul>

            <span className="text-xs font-mono tracking-[0.25em] uppercase text-neutral-500 block mb-2">
              Disciplines
            </span>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-mono text-neutral-400">
              <span>Turnkey</span>
              <span className="text-[#C08A58]">·</span>
              <span>Concrete</span>
              <span className="text-[#C08A58]">·</span>
              <span>Dirt Work</span>
              <span className="text-[#C08A58]">·</span>
              <span>Clearing</span>
              <span className="text-[#C08A58]">·</span>
              <span>Builds</span>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#C08A58] block mb-4">
                Direct Contact
              </span>
              <div className="space-y-3 text-xs sm:text-sm text-neutral-300 font-light">
                <a
                  href="tel:+18325550303"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C08A58] shrink-0" />
                  <span>Phone: (832) 555-0303</span>
                </a>
                <a
                  href="mailto:inquiries@3constructionllc.com"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C08A58] shrink-0" />
                  <span>Email: inquiries@3constructionllc.com</span>
                </a>
                <div className="flex items-center gap-3 text-neutral-400">
                  <MapPin className="w-4 h-4 text-[#C08A58] shrink-0" />
                  <span>Location: Austin & Greater Texas</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              {onOpenInquiry ? (
                <button
                  onClick={onOpenInquiry}
                  className="w-full py-3 bg-white/5 hover:bg-[#C08A58] hover:text-[#121316] text-white border border-white/10 text-xs font-mono uppercase tracking-widest transition-all duration-300"
                >
                  Request Consultation
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="block text-center w-full py-3 bg-white/5 hover:bg-[#C08A58] hover:text-[#121316] text-white border border-white/10 text-xs font-mono uppercase tracking-widest transition-all duration-300"
                >
                  Request Consultation
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} III Construction LLC. All rights reserved.
          </div>

          <button
            onClick={() => scrollTo(0, { offset: 0, duration: 1.6 })}
            className="flex items-center gap-2 hover:text-[#C08A58] transition-colors cursor-pointer group"
            aria-label="Back to top"
          >
            <span className="tracking-widest uppercase">Back to Top</span>
            <div className="w-6 h-6 rounded-full border border-neutral-700 group-hover:border-[#C08A58] flex items-center justify-center">
              <ArrowUp className="w-3 h-3 text-[#C08A58] group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

'use client';

import React from 'react';
import { ArrowUpRight, ArrowRight, MessageSquare } from 'lucide-react';

interface FinalCTAProps {
  onOpenInquiry: () => void;
}

export default function FinalCTA({ onOpenInquiry }: FinalCTAProps) {
  return (
    <section
      id="contact"
      className="relative py-32 sm:py-44 bg-[#151618] text-[#F4F2EB] border-b border-white/10 overflow-hidden"
    >
      {/* Background Architectural Accent lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-[#C08A58]" />
          <span className="text-xs font-mono tracking-[0.35em] uppercase text-[#C08A58]">
            06 / Initiate Collaboration
          </span>
          <span className="w-8 h-px bg-[#C08A58]" />
        </div>

        {/* Huge Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight uppercase leading-[1.08] text-white max-w-5xl mx-auto mb-10 text-balance">
          Do you have a project to{' '}
          <span className="font-serif italic font-normal text-[#C08A58] lowercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
            discuss
          </span>
          ?
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg text-neutral-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          From vacant acreage clearing and precision earth grading to structural concrete
          and finished turnkey delivery, let us engineer your vision without compromise.
        </p>

        {/* Primary Interactive Action with Arrow Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={onOpenInquiry}
            className="group relative px-10 py-5 bg-[#C08A58] hover:bg-[#A97343] text-[#121316] font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase transition-all duration-300 flex items-center gap-4 shadow-2xl"
          >
            <span>Start Project Inquiry</span>
            <div className="w-8 h-8 rounded-full bg-[#121316] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4 text-[#C08A58]" />
            </div>
          </button>

          <a
            href="tel:+18325550303"
            className="px-8 py-5 border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs sm:text-sm tracking-[0.2em] uppercase transition-all flex items-center gap-3"
          >
            <MessageSquare className="w-4 h-4 text-[#C08A58]" />
            <span>Direct Line: (832) 555-0303</span>
          </a>
        </div>
      </div>
    </section>
  );
}

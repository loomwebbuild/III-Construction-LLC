'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { ASSETS } from '@/lib/assets';
import { useSmoothScroll } from './SmoothScrollProvider';

interface HeroProps {
  isPreloaderFinished: boolean;
  onOpenInquiry: () => void;
}

export default function Hero({ isPreloaderFinished, onOpenInquiry }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const actionRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    if (!isPreloaderFinished) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Slow scale-down on load for background image
      gsap.fromTo(
        imageContainerRef.current,
        { scale: 1.16 },
        {
          scale: 1.0,
          duration: 2.4,
          ease: 'power2.out',
        }
      );

      // 2. Headline staggered line-by-line reveal (translateY 40px + opacity 0 to 1, 0.9s, power3.out, stagger 0.12)
      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo(
        [line1Ref.current, line2Ref.current, line3Ref.current],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
        }
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.4'
      )
      .fromTo(
        [actionRef.current, scrollIndicatorRef.current],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.1,
        },
        '-=0.3'
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isPreloaderFinished]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#121316] text-[#F4F2EB] pt-24 sm:pt-28 pb-10"
    >
      {/* Background Image Container with Slow Scale Down */}
      <div
        ref={imageContainerRef}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src={ASSETS.hero}
          alt="III Construction LLC luxury architectural project under construction"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim for WCAG AAA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-[#121316]/65 to-[#121316]/40" />
        <div className="absolute inset-0 bg-[#121316]/20 backdrop-brightness-95" />
      </div>

      {/* Top spacer */}
      <div className="relative z-10" />

      {/* Main Hero Typography Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full my-auto py-12">
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-[#C08A58]" />
            <span className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#C08A58]">
              Turnkey Construction · General Contractor
            </span>
          </div>

          {/* Staggered Line-by-Line Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-light leading-[1.05] tracking-tight text-[#F4F2EB] mb-8 uppercase text-balance">
            <div ref={line1Ref} className="overflow-hidden">
              <span>We build</span>
            </div>
            <div ref={line2Ref} className="overflow-hidden">
              <span className="font-serif italic font-normal text-[#C08A58] lowercase text-5xl sm:text-7xl md:text-8xl lg:text-[5.8rem] pr-3">
                masterful
              </span>
              <span>turnkey</span>
            </div>
            <div ref={line3Ref} className="overflow-hidden">
              <span>spaces with precision.</span>
            </div>
          </h1>

          {/* Subheading / Service Scope */}
          <div
            ref={subtitleRef}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm sm:text-base text-neutral-300 max-w-2xl font-light mb-10"
          >
            <p className="leading-relaxed">
              From heavy land clearing and precision dirt work to structural concrete
              and bespoke residential and commercial construction.
            </p>
          </div>

          {/* Action CTAs */}
          <div
            ref={actionRef}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <button
              onClick={onOpenInquiry}
              className="px-8 py-4 bg-[#C08A58] hover:bg-[#A97343] text-[#121316] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-3 shadow-xl"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('#projects', { offset: -40 })}
              className="px-8 py-4 border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-[#F4F2EB] text-xs tracking-[0.2em] uppercase transition-all duration-300"
            >
              View Selected Works
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Services signature & Bobbing Scroll indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Core 5 Services Bar */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] sm:text-xs tracking-[0.2em] uppercase text-neutral-400 font-light">
          <span className="hover:text-white transition-colors">Turnkey</span>
          <span className="text-[#C08A58]">·</span>
          <span className="hover:text-white transition-colors">Concrete Construction</span>
          <span className="text-[#C08A58]">·</span>
          <span className="hover:text-white transition-colors">Dirt Work</span>
          <span className="text-[#C08A58]">·</span>
          <span className="hover:text-white transition-colors">Land Clearing</span>
          <span className="text-[#C08A58]">·</span>
          <span className="hover:text-white transition-colors">New Home Construction</span>
        </div>

        {/* Bobbing Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          onClick={() => scrollTo('#intro', { offset: -40 })}
          className="flex items-center gap-3 text-neutral-400 hover:text-[#C08A58] transition-colors cursor-pointer group shrink-0"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-mono">
            Scroll To Explore
          </span>
          <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#C08A58] flex items-center justify-center transition-colors">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C08A58]" />
          </div>
        </div>
      </div>
    </section>
  );
}

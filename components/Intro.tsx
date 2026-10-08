'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Check, X, Shield, Layers, HardHat, Compass } from 'lucide-react';
import { ASSETS } from '@/lib/assets';

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const slowImageRef = useRef<HTMLDivElement>(null);
  const fastImageRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // 1. Text Reveal Stagger
      const revealElements = textContentRef.current?.querySelectorAll('.reveal-item');
      if (revealElements) {
        gsap.fromTo(
          revealElements,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 2. Parallax speeds for the two images
      if (!prefersReducedMotion) {
        // Slow image parallax (max ~8% travel)
        if (slowImageRef.current) {
          gsap.fromTo(
            slowImageRef.current.querySelector('img'),
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
              },
            }
          );
        }

        // Fast image parallax (max ~15% travel)
        if (fastImageRef.current) {
          gsap.fromTo(
            fastImageRef.current.querySelector('img'),
            { yPercent: -15 },
            {
              yPercent: 15,
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.8,
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="services"
        ref={sectionRef}
        className="relative py-28 sm:py-36 bg-[#151618] text-[#F4F2EB] border-b border-white/10 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Section Indicator */}
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-px bg-[#C08A58]" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C08A58]">
              01 / Core Philosophy
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Big Statement Headline, Short Paragraph, Read More */}
            <div ref={textContentRef} className="lg:col-span-6 flex flex-col justify-center">
              <h2 className="reveal-item text-3xl sm:text-5xl lg:text-6xl font-light leading-[1.12] tracking-tight mb-8 text-balance">
                Dedication, experience and a passion for{' '}
                <span className="font-serif italic font-normal text-[#C08A58]">
                  perfection
                </span>
                .
              </h2>

              <p className="reveal-item text-neutral-300 text-base sm:text-lg font-light leading-relaxed mb-6 max-w-xl">
                III Construction LLC is a dedicated turnkey builder uniting land clearing,
                precision dirt grading, architectural concrete, and custom residential and
                commercial construction into a single, seamless standard of execution.
              </p>

              <p className="reveal-item text-neutral-400 text-sm leading-relaxed mb-8 max-w-xl">
                By maintaining master oversight over every phase of site transformation,
                we eliminate trade hand-off errors, guarantee structural integrity, and
                deliver uncompromising quality on time and on spec.
              </p>

              {/* Read More Link / Button & Services Page Link */}
              <div className="reveal-item flex flex-wrap items-center gap-6">
                <button
                  onClick={() => setModalOpen(true)}
                  className="group inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-[#C08A58] hover:text-white transition-colors cursor-pointer"
                >
                  <span className="border-b border-[#C08A58] pb-1 group-hover:border-white transition-colors">
                    Read More About Our Approach
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors"
                >
                  <span>Explore All 5 Disciplines</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Service Badges Row */}
              <div className="reveal-item mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-neutral-400">
                <div className="flex flex-col">
                  <span className="text-[#C08A58] text-[10px] tracking-widest uppercase">Scope 01</span>
                  <span className="text-white mt-1">Turnkey Builds</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#C08A58] text-[10px] tracking-widest uppercase">Scope 02</span>
                  <span className="text-white mt-1">Concrete Craft</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#C08A58] text-[10px] tracking-widest uppercase">Scope 03</span>
                  <span className="text-white mt-1">Dirt Work & Prep</span>
                </div>
              </div>
            </div>

            {/* Right Column: Two Asymmetric Parallax Images (One Slow, One Fast) */}
            <div className="lg:col-span-6 relative grid grid-cols-12 gap-6 items-center">
              {/* Image 1: Slow Parallax (Concrete Craftsmanship) */}
              <div
                ref={slowImageRef}
                className="col-span-7 sm:col-span-7 relative h-[360px] sm:h-[460px] overflow-hidden border border-white/10 bg-[#1e2024] shadow-2xl"
              >
                <div className="relative w-full h-[120%] -top-[10%]">
                  <Image
                    src={ASSETS.introConcrete}
                    alt="Precision poured architectural concrete detail by III Construction LLC"
                    fill
                    sizes="(max-width: 768px) 60vw, 30vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-[10px] uppercase font-mono tracking-widest text-neutral-300 bg-[#121316]/80 backdrop-blur-md px-3 py-1.5 border border-white/10 flex items-center justify-between">
                  <span>Architectural Concrete</span>
                  <span className="text-[#C08A58]">01</span>
                </div>
              </div>

              {/* Image 2: Fast Parallax (Dirt Work & Land Clearing) */}
              <div
                ref={fastImageRef}
                className="col-span-5 sm:col-span-5 relative h-[280px] sm:h-[360px] overflow-hidden border border-white/10 bg-[#1e2024] shadow-2xl mt-16 sm:mt-24"
              >
                <div className="relative w-full h-[130%] -top-[15%]">
                  <Image
                    src={ASSETS.introDirt}
                    alt="Precision dirt work and topographic excavation by III Construction LLC"
                    fill
                    sizes="(max-width: 768px) 40vw, 20vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-[10px] uppercase font-mono tracking-widest text-neutral-300 bg-[#121316]/80 backdrop-blur-md px-3 py-1.5 border border-white/10 flex items-center justify-between">
                  <span>Dirt Work</span>
                  <span className="text-[#C08A58]">02</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Read More Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#151618] border border-white/15 text-[#F4F2EB] p-8 sm:p-12 shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C08A58]">
              Methodology & Standards
            </span>

            <h3
              id="modal-title"
              className="text-2xl sm:text-4xl font-light tracking-tight mt-2 mb-6"
            >
              The Turnkey Standard of{' '}
              <span className="font-serif italic text-[#C08A58]">III Construction LLC</span>
            </h3>

            <div className="space-y-6 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              <p>
                Unlike conventional general contracting where earthmoving, concrete work, and
                framing are subcontracted to disjointed crews, III Construction LLC executes
                each foundational phase with direct accountability and proprietary precision.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                <div className="p-5 border border-white/10 bg-white/5">
                  <div className="flex items-center gap-3 mb-2 text-[#C08A58]">
                    <Layers className="w-5 h-5" />
                    <h4 className="text-sm font-semibold tracking-wide text-white uppercase">
                      Single Turnkey Source
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-400">
                    From initial forestry clearing to final architectural sign-off, every stage
                    is managed under one cohesive standard.
                  </p>
                </div>

                <div className="p-5 border border-white/10 bg-white/5">
                  <div className="flex items-center gap-3 mb-2 text-[#C08A58]">
                    <Shield className="w-5 h-5" />
                    <h4 className="text-sm font-semibold tracking-wide text-white uppercase">
                      Zero-Compromise Foundations
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Dirt work and concrete cured to strict structural tolerances, eliminating
                    settlement issues before walls go up.
                  </p>
                </div>
              </div>

              <h4 className="text-base font-semibold tracking-wide text-white uppercase pt-2">
                Five Core Disciplines
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C08A58] shrink-0 mt-0.5" />
                  <span>
                    <strong>Turnkey Construction:</strong> Full project delivery with transparent
                    timelines, cost control, and master craftsmanship.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C08A58] shrink-0 mt-0.5" />
                  <span>
                    <strong>Concrete Construction:</strong> Monolithic slabs, board-formed walls,
                    retaining structures, and architectural flatwork.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C08A58] shrink-0 mt-0.5" />
                  <span>
                    <strong>Dirt Work:</strong> Laser grading, deep excavation, site drainage,
                    and structural pad compaction.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C08A58] shrink-0 mt-0.5" />
                  <span>
                    <strong>Land Clearing:</strong> Environmentally conscious selective clearing,
                    stump removal, and heavy site reclamation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C08A58] shrink-0 mt-0.5" />
                  <span>
                    <strong>New Home Construction:</strong> High-performance residential and
                    commercial buildings engineered for permanence.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-6 py-3 bg-[#C08A58] hover:bg-[#A97343] text-[#121316] font-semibold text-xs uppercase tracking-widest transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

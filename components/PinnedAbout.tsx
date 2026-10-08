'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '@/lib/assets';
import { TreePine, Shovel, Layers, Home, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface PhaseItem {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  content: string[];
  specs: { label: string; value: string }[];
}

const PHASES: PhaseItem[] = [
  {
    id: 'phase-clearing',
    step: 'Phase 01',
    title: 'Land Clearing & Site Reclamation',
    subtitle: 'Transforming Raw Terrain into Build-Ready Canvas',
    icon: <TreePine className="w-5 h-5 text-[#C08A58]" />,
    content: [
      'Every master project begins with strategic land clearing. We deploy heavy forestry mulchers, excavators, and stump-grinding equipment to reclaim overgrown parcels and acreage.',
      'Our crews meticulously preserve designated specimen trees, establish certified erosion-control perimeters, and clear access corridors for heavy structural transport.',
    ],
    specs: [
      { label: 'Scope', value: 'Acreage & Wooded Lots' },
      { label: 'Compliance', value: 'Erosion & Environmental' },
      { label: 'Equipment', value: 'Heavy Forestry Mulchers' },
    ],
  },
  {
    id: 'phase-dirtwork',
    step: 'Phase 02',
    title: 'Precision Dirt Work & Grading',
    subtitle: 'Engineered Earthmoving and Foundation Pad Compaction',
    icon: <Shovel className="w-5 h-5 text-[#C08A58]" />,
    content: [
      'A flawless building cannot sit on unstable earth. III Construction LLC utilizes 3D laser-guided grading and compaction rollers to achieve 98%+ Proctor density foundation pads.',
      'We execute deep utility trenching, engineered cut-and-fill balances, swales, and subsurface drainage systems engineered to shed hydrostatic pressure for decades.',
    ],
    specs: [
      { label: 'Compaction', value: '98%+ Proctor Density' },
      { label: 'Tolerance', value: 'Laser-Guided Precision' },
      { label: 'Drainage', value: 'Subsurface & Gravity Swales' },
    ],
  },
  {
    id: 'phase-concrete',
    step: 'Phase 03',
    title: 'Concrete Construction & Foundations',
    subtitle: 'Monolithic Slabs, Grade Beams & Architectural Walls',
    icon: <Layers className="w-5 h-5 text-[#C08A58]" />,
    content: [
      'Our concrete division crafts the architectural backbone of your project. From post-tension engineered slabs and deep concrete caissons to cantilevered retaining walls.',
      'We mix, pour, and cure board-formed architectural concrete with exacting geometric alignments, ensuring zero cold joints and pristine finish aesthetics.',
    ],
    specs: [
      { label: 'Mix Strength', value: '4,000–5,500 PSI Cured' },
      { label: 'Formwork', value: 'Board-Formed & Smooth' },
      { label: 'Structural', value: 'Post-Tension & Grade Beams' },
    ],
  },
  {
    id: 'phase-build',
    step: 'Phase 04',
    title: 'Finished Turnkey Construction',
    subtitle: 'Residential Estates & Commercial Facilities Delivered Turnkey',
    icon: <Home className="w-5 h-5 text-[#C08A58]" />,
    content: [
      'The culmination of turnkey mastery: vertical architectural framing, structural steel integration, thermal envelopes, luxury interiors, and MEP systems under one accountable team.',
      'From the moment we clear the first tree to the day we hand over the keys, III Construction LLC guarantees an uncompromised standard of craftsmanship.',
    ],
    specs: [
      { label: 'Delivery', value: '100% Turnkey Handover' },
      { label: 'Type', value: 'Residential & Commercial' },
      { label: 'Accountability', value: 'Single General Contractor' },
    ],
  },
];

export default function PinnedAbout() {
  const containerRef = useRef<HTMLElement>(null);
  const pinnedBgRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Pin background image while text scrolls
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: pinnedBgRef.current,
        pinSpacing: false,
      });

      // Stagger card reveals as they enter view
      const cards = cardsContainerRef.current?.querySelectorAll('.scroll-card');
      cards?.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about-pinned"
      ref={containerRef}
      className="relative bg-[#121316] text-[#F4F2EB] border-b border-white/10"
    >
      {/* Pinned Fullscreen Background Image Carrier */}
      <div
        ref={pinnedBgRef}
        className="w-full h-screen relative z-0 overflow-hidden"
      >
        <Image
          src={ASSETS.pinnedPanorama}
          alt="Panoramic construction site by III Construction LLC"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Deep contrast overlay */}
        <div className="absolute inset-0 bg-[#121316]/75 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121316] via-[#121316]/80 to-[#121316]/40" />

        {/* Static Background Ambient Watermark / Title */}
        <div className="absolute top-12 left-8 sm:left-16 z-10 opacity-30 pointer-events-none">
          <span className="text-[11px] font-mono tracking-[0.4em] uppercase text-[#C08A58]">
            III Construction LLC · Master Methodology
          </span>
        </div>
      </div>

      {/* Scrolling Text Content Flowing Over the Pinned Background */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 -mt-[100vh] pt-24 pb-36">
        {/* Intro Section Header */}
        <div className="max-w-2xl mb-24 pt-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#C08A58]" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C08A58]">
              04 / End-to-End Delivery
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white uppercase mb-6">
            From raw earth to <span className="font-serif italic font-normal text-[#C08A58] lowercase text-4xl sm:text-6xl lg:text-7xl">architectural permanence</span>.
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
            Witness how our turnkey methodology unifies every phase of structural creation
            into a harmonious, single-source process.
          </p>
        </div>

        {/* Phase Cards Journey (4 Scroll Cards) */}
        <div ref={cardsContainerRef} className="space-y-24 sm:space-y-32 max-w-3xl ml-auto">
          {PHASES.map((phase, index) => (
            <div
              key={phase.id}
              className="scroll-card p-8 sm:p-12 bg-[#151618]/90 backdrop-blur-xl border border-white/15 shadow-2xl relative"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white/5 border border-white/10 text-[#C08A58]">
                    {phase.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#C08A58]">
                      {phase.step}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                      {phase.title}
                    </h3>
                  </div>
                </div>
                <span className="text-3xl sm:text-4xl font-light text-neutral-600 font-mono">
                  0{index + 1}
                </span>
              </div>

              {/* Subtitle */}
              <p className="text-xs font-mono tracking-wider uppercase text-neutral-400 mb-6">
                {phase.subtitle}
              </p>

              {/* Narrative Prose */}
              <div className="space-y-4 text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-8">
                {phase.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                {phase.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                      {spec.label}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white mt-1">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

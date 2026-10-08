'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, MessageSquare, Users, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ExcelPillar {
  id: string;
  icon: React.ReactNode;
  title: string;
  bulletWords: string[];
  description: string;
}

const PILLARS: ExcelPillar[] = [
  {
    id: 'details',
    icon: <Eye className="w-6 h-6 text-[#C08A58]" />,
    title: 'The Details',
    bulletWords: ['Precision', 'Craft', 'Finish'],
    description:
      'From laser-calibrated foundation elevations to seamless structural transitions, millimeter accuracy governs every cut and pour.',
  },
  {
    id: 'communication',
    icon: <MessageSquare className="w-6 h-6 text-[#C08A58]" />,
    title: 'Open Communication',
    bulletWords: ['Transparent', 'Proactive', 'Direct'],
    description:
      'Direct superintendent access, unvarnished project updates, and transparent scheduling so you remain informed at every milestone.',
  },
  {
    id: 'crews',
    icon: <Users className="w-6 h-6 text-[#C08A58]" />,
    title: 'Reliable Crews',
    bulletWords: ['Vetted', 'Disciplined', 'Skilled'],
    description:
      'Dedicated, safety-first field professionals who master heavy machinery, concrete finishing, and structural framing with pride.',
  },
  {
    id: 'expectations',
    icon: <Award className="w-6 h-6 text-[#C08A58]" />,
    title: 'Exceeding Expectations',
    bulletWords: ['Standards', 'Timelines', 'Quality'],
    description:
      'We do not simply build to code; we build structures that endure generations, handed over clean, complete, and on schedule.',
  },
];

export default function ExcelSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.excel-card');
      if (cards) {
        gsap.fromTo(
          cards,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="excel"
      ref={sectionRef}
      className="relative py-28 sm:py-36 bg-[#151618] text-[#F4F2EB] border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#C08A58]" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C08A58]">
              03 / Uncompromising Execution
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight uppercase text-white">
            We excel in every <span className="font-serif italic font-normal text-[#C08A58] lowercase text-4xl sm:text-6xl lg:text-7xl">dimension</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light mt-4 max-w-xl">
            Four non-negotiable operational disciplines that distinguish III Construction LLC
            across residential and commercial projects.
          </p>
        </div>

        {/* 4 Columns Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="excel-card group relative p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#C08A58]/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Accent & Index */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-white/5 border border-white/10 group-hover:border-[#C08A58]/50 transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-mono text-neutral-500 group-hover:text-[#C08A58] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white mb-4 group-hover:text-[#C08A58] transition-colors">
                  {pillar.title}
                </h3>

                {/* 3 Short Bullet Words (Clean unboxed text separated by ·) */}
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#C08A58] mb-6 pb-6 border-b border-white/10">
                  <span>{pillar.bulletWords[0]}</span>
                  <span aria-hidden="true">·</span>
                  <span>{pillar.bulletWords[1]}</span>
                  <span aria-hidden="true">·</span>
                  <span>{pillar.bulletWords[2]}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-8 pt-4 flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-neutral-500">
                <span className="w-1.5 h-1.5 bg-[#C08A58]/60 rounded-full" />
                <span>Verified Metric</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

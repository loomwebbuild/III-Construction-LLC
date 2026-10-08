'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        setIsFinished(true);
        onComplete();
      }, 0);
      return () => clearTimeout(timer);
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsFinished(true);
          onComplete();
        },
      });

      // Initial state
      gsap.set(logoRef.current, { opacity: 0, y: 20 });
      gsap.set(subtitleRef.current, { opacity: 0 });
      const dots = dotsRef.current?.querySelectorAll('span');
      if (dots) {
        gsap.set(dots, { opacity: 0.2, scale: 0.8 });
      }

      // 1. Logo fades in
      tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
      .to(subtitleRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.3');

      // 2. Three animated dots pulsing sequentially
      if (dots) {
        tl.to(
          dots,
          {
            opacity: 1,
            scale: 1.2,
            backgroundColor: '#C08A58',
            duration: 0.35,
            stagger: {
              each: 0.18,
              repeat: 2,
              yoyo: true,
            },
            ease: 'power1.inOut',
          },
          '-=0.2'
        );
      }

      // 3. Logo and content fade out slightly, then whole preloader lifts away
      tl.to([logoRef.current, subtitleRef.current, dotsRef.current], {
        opacity: 0,
        y: -15,
        duration: 0.4,
        ease: 'power2.in',
      })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 1.1,
        ease: 'power4.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (isFinished) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#101114] text-[#F4F2EB] pointer-events-auto"
      aria-label="Loading III Construction LLC"
      role="status"
    >
      <div className="flex flex-col items-center justify-center text-center px-6">
        {/* Architectural Roman Numeral Emblem */}
        <div ref={logoRef} className="flex flex-col items-center mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-7 bg-[#C08A58] block" />
            <span className="w-1.5 h-7 bg-[#C08A58] block" />
            <span className="w-1.5 h-7 bg-[#C08A58] block" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-light tracking-[0.3em] uppercase text-[#F4F2EB]">
            III Construction
          </h1>
          <span className="text-[10px] tracking-[0.5em] text-[#C08A58] uppercase mt-1">
            LLC
          </span>
        </div>

        <p
          ref={subtitleRef}
          className="text-xs uppercase tracking-[0.35em] text-neutral-400 mb-8 font-light"
        >
          Turnkey Construction & Civil Engineering
        </p>

        {/* Three Animated Dots */}
        <div ref={dotsRef} className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-neutral-500 block transition-all" />
          <span className="w-2 h-2 rounded-full bg-neutral-500 block transition-all" />
          <span className="w-2 h-2 rounded-full bg-neutral-500 block transition-all" />
        </div>
      </div>

      {/* Subtle bottom detail */}
      <div className="absolute bottom-8 text-[11px] tracking-[0.25em] text-neutral-600 uppercase font-mono">
        EST. ARCHITECTURAL MASTERY
      </div>
    </div>
  );
}

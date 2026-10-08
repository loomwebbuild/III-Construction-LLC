'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Plus, Minus, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { ASSETS } from '@/lib/assets';

gsap.registerPlugin(ScrollTrigger);

interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  discipline: string;
  location: string;
  year: string;
  description: string;
  image: any;
  highlights: string[];
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-1',
    number: '#1',
    name: 'The Hillside Pavilion',
    category: 'Turnkey Luxury Residence',
    discipline: 'Turnkey & Architectural Concrete',
    location: 'Westlake Hills, TX',
    year: '2026',
    description:
      'Turnkey luxury estate build encompassing full forestry clearing, hillside pad stabilization, architectural board-formed concrete slabs, and comprehensive modern structural construction.',
    image: ASSETS.projectOne,
    highlights: ['Complete Turnkey Oversight', 'Structural Concrete Overhangs', 'Hillside Site Grading'],
  },
  {
    id: 'project-2',
    number: '#2',
    name: 'Apex Commercial Center',
    category: 'Commercial Architectural Facility',
    discipline: 'Concrete Construction & Commercial Build',
    location: 'Domain North, Austin, TX',
    year: '2025',
    description:
      'Heavy commercial development featuring deep engineered footings, polished concrete structural flooring, monolithic retaining walls, and custom steel-and-timber architectural framing.',
    image: ASSETS.projectTwo,
    highlights: ['Commercial Slabs & Grade Beams', 'Heavy Machine Excavation', 'Turnkey Project Delivery'],
  },
  {
    id: 'project-3',
    number: '#3',
    name: 'Crestview Master Grading',
    category: 'Master Civil Dirt Work & Pad Preparation',
    discipline: 'Dirt Work & Topographic Excavation',
    location: 'Dripping Springs, TX',
    year: '2025',
    description:
      'Large-scale master site development requiring 40,000 cu yds of cut-and-fill dirt grading, laser-level compaction, retention basins, and subterranean utility trenching.',
    image: ASSETS.introDirt,
    highlights: ['Laser-Calibrated Compaction', 'Subsurface Drainage', 'Engineered Foundation Pads'],
  },
  {
    id: 'project-4',
    number: '#4',
    name: 'Pinnacle Ridge Acreage',
    category: 'Hillside Land Clearing & Site Reclamation',
    discipline: 'Land Clearing & Forestry Prep',
    location: 'Fredericksburg, TX',
    year: '2024',
    description:
      'Selective timber land clearing and environmentally compliant site reclamation on complex acreage, clearing access routes while protecting native legacy trees.',
    image: ASSETS.articleClearing,
    highlights: ['Forestry Mulching & Grubbing', 'Access Road Development', 'Erosion Control Silt Fencing'],
  },
  {
    id: 'project-5',
    number: '#5',
    name: 'The Monolith Estate',
    category: 'Custom Modern Residential Build',
    discipline: 'New Home Construction (Residential)',
    location: 'Lake Travis, TX',
    year: '2026',
    description:
      'From vacant raw wooded acreage to a turnkey architectural residence with integrated concrete pools, cantilevered roofs, and seamless indoor-outdoor living.',
    image: ASSETS.hero,
    highlights: ['Architectural Concrete Work', 'Custom Structural Framing', 'Full Turnkey Handover'],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowsContainerRef = useRef<HTMLDivElement>(null);
  const floatingPreviewRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(PROJECTS_DATA[0].id);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // GSAP reveal animation on scroll (staggered slide-up translateY 40px + opacity 0 to 1, 0.9s, power3.out, stagger 0.12)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = rowsContainerRef.current?.querySelectorAll('.project-row');
      if (rows) {
        gsap.fromTo(
          rows,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Desktop floating cursor image follow
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!floatingPreviewRef.current) return;
      // Smoothly update position
      gsap.to(floatingPreviewRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleMobileExpand = (id: string) => {
    setExpandedMobileId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-28 sm:py-36 bg-[#121316] text-[#F4F2EB] border-b border-white/10 overflow-hidden"
    >
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#C08A58]" />
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C08A58]">
                02 / Portfolio Showcase
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white uppercase">
              Selected <span className="font-serif italic font-normal text-[#C08A58] lowercase text-4xl sm:text-6xl lg:text-7xl">projects</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono text-neutral-400 mt-4 md:mt-0 tracking-wider">
            #01 TO #05 · TURNKEY RESIDENTIAL & COMMERCIAL WORKS
          </p>
        </div>

        {/* Numbered List (#1 to #5) */}
        <div ref={rowsContainerRef} className="flex flex-col divide-y divide-white/10">
          {PROJECTS_DATA.map((project) => {
            const isExpanded = expandedMobileId === project.id;

            return (
              <div
                key={project.id}
                className="project-row group transition-colors duration-300"
                onMouseEnter={() => setActiveProject(project)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Desktop Interactive Row (hidden on small screens) */}
                <div className="hidden md:grid grid-cols-12 gap-6 py-8 sm:py-10 items-center cursor-pointer hover:bg-white/[0.02] px-4 -mx-4 transition-all duration-300">
                  {/* Number #1 to #5 */}
                  <div className="col-span-1 text-sm sm:text-base font-mono tracking-widest text-[#C08A58]">
                    {project.number}
                  </div>

                  {/* Large Project Name */}
                  <div className="col-span-5">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight group-hover:text-[#C08A58] transition-colors duration-300">
                      {project.name}
                    </h3>
                  </div>

                  {/* Discipline / Category */}
                  <div className="col-span-3 text-xs tracking-widest uppercase text-neutral-400 font-light">
                    {project.discipline}
                  </div>

                  {/* Location & Year */}
                  <div className="col-span-2 text-xs font-mono text-neutral-400">
                    <div>{project.location}</div>
                    <div className="text-neutral-500 text-[11px]">{project.year}</div>
                  </div>

                  {/* Arrow Action */}
                  <div className="col-span-1 flex justify-end">
                    <div className="w-10 h-10 rounded-full border border-white/15 group-hover:border-[#C08A58] group-hover:bg-[#C08A58] flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#121316] transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Mobile Tap-to-Expand Card (visible on mobile only) */}
                <div className="md:hidden py-6">
                  <button
                    onClick={() => toggleMobileExpand(project.id)}
                    className="w-full flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#C08A58]">{project.number}</span>
                      <h3 className="text-xl font-light text-white">{project.name}</h3>
                    </div>
                    <div className="p-2 text-neutral-400">
                      {isExpanded ? (
                        <Minus className="w-5 h-5 text-[#C08A58]" />
                      ) : (
                        <Plus className="w-5 h-5 text-neutral-400" />
                      )}
                    </div>
                  </button>

                  {/* Mobile Expanded Drawer */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-white/5 space-y-4 animate-fadeIn">
                      <div className="relative h-56 w-full overflow-hidden border border-white/10 bg-[#1e2024]">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          sizes="100vw"
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pt-1">
                        <span className="text-[#C08A58]">{project.discipline}</span>
                        <span>{project.location}</span>
                      </div>

                      <p className="text-xs text-neutral-300 leading-relaxed font-light">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 bg-white/5 px-2.5 py-1 border border-white/10"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects Link */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
            5 Completed Featured Master Projects
          </span>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] text-[#C08A58] hover:text-white transition-colors group"
          >
            <span>Explore Full Project Portfolio & Blueprints</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Floating Cursor Image Preview (Desktop Only) */}
        <div
          ref={floatingPreviewRef}
          className={`fixed pointer-events-none z-30 -translate-x-1/2 -translate-y-1/2 hidden md:block transition-opacity duration-300 ${
            activeProject ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ width: '380px', height: '240px' }}
        >
          {activeProject && (
            <div className="w-full h-full relative overflow-hidden border border-white/20 bg-[#151618] shadow-2xl">
              <Image
                src={activeProject.image}
                alt={activeProject.name}
                fill
                sizes="380px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white">
                <span className="tracking-widest uppercase">{activeProject.category}</span>
                <span className="text-[#C08A58]">{activeProject.number}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, X, Calendar, BookOpen } from 'lucide-react';
import { ASSETS } from '@/lib/assets';

interface ArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: any;
  summary: string;
  content: string[];
}

const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'article-1',
    title: 'The Turnkey Advantage: Unifying Earthwork to Final Handover',
    category: 'Turnkey Construction',
    date: 'October 2026',
    readTime: '4 min read',
    image: ASSETS.hero,
    summary:
      'How contracting a single master builder eliminates fragmented subcontractor margins, trade conflict, and schedule latency on complex residential builds.',
    content: [
      'When excavation, structural concrete, and framing are split across independent subcontractors, misalignments compound beneath the surface. A fraction of an inch error in pad elevation cascades into structural framing compromises weeks down the line.',
      'III Construction LLC’s single-source model maintains direct accountability from the initial forestry clearing through structural lockup. Our superintendents oversee soil compaction, rebar grids, and thermal framing under a unified standard.',
      'The result is verifiable cost efficiency, streamlined municipal inspections, and an architectural structure that endures for generations without settlement fatigue.',
    ],
  },
  {
    id: 'article-2',
    title: 'Architectural Concrete: Precision Curing & Board-Formed Tolerances',
    category: 'Concrete Engineering',
    date: 'September 2026',
    readTime: '6 min read',
    image: ASSETS.introConcrete,
    summary:
      'Technical parameters for high-performance mix designs, moisture-retention curing, and monolithic vertical surfaces free of aggregate segregation.',
    content: [
      'Architectural concrete is as much a sculpture as it is a foundation. Achieving pristine board-formed textures requires rigorous control over hydration heat, formwork rigidity, and mechanical vibrator frequency during continuous pours.',
      'Our field crews calibrate concrete mixes up to 5,500 PSI, tailoring aggregate grading and water-cement ratios to match ambient humidity and thermal variations on pour day.',
      'By preventing surface honeycombing and tie-hole blowouts, our exposed structural walls deliver the raw tactile warmth and permanence modern luxury architecture demands.',
    ],
  },
  {
    id: 'article-3',
    title: 'Engineered Earth: Laser Grading & Proctor Compaction Standards',
    category: 'Dirt Work & Land Clearing',
    date: 'August 2026',
    readTime: '5 min read',
    image: ASSETS.articleClearing,
    summary:
      'Why foundation durability starts 10 feet below ground level: laser topography, moisture conditioning, and 98%+ Proctor density verification.',
    content: [
      'Before a single cubic yard of concrete is delivered, the soil beneath must be engineered into an immovable substrate. Complex parcels and expansive soils demand strategic cut-and-fill grading and deep subsoil conditioning.',
      'We deploy laser-guided heavy equipment and compaction rollers to compact subgrades in calibrated 8-inch lifts, verifying optimal moisture-density curves with field density testing before sign-off.',
      'Integrated swales and subterranean French drains divert thousands of gallons of stormwater away from the foundation perimeter, protecting the building envelope permanently.',
    ],
  },
];

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  return (
    <>
      <section
        id="articles"
        className="relative py-28 sm:py-36 bg-[#121316] text-[#F4F2EB] border-b border-white/10 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#C08A58]" />
                <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C08A58]">
                  06 / Field Notes & Insights
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white uppercase">
                Articles & <span className="font-serif italic font-normal text-[#C08A58] lowercase text-4xl sm:text-6xl lg:text-7xl">perspectives</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-neutral-400 mt-4 md:mt-0 tracking-wider">
              FIELD ENGINEERING & CONSTRUCTION METHODOLOGIES
            </p>
          </div>

          {/* 3 Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {ARTICLES_DATA.map((article) => (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="group flex flex-col border border-white/10 bg-[#151618] overflow-hidden cursor-pointer hover:border-[#C08A58]/50 transition-all duration-300"
              >
                {/* Image Container with Zoom */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#1e2024]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151618] via-transparent to-black/20" />
                </div>

                {/* Content Block */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Clean unboxed metadata with typographic separators (Zero-Pill Rule) */}
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-4">
                      <span className="text-[#C08A58]">{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white group-hover:text-[#C08A58] transition-colors duration-300 mb-3">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6 line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  {/* Read Article Action */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono tracking-wider uppercase text-neutral-400 group-hover:text-white transition-colors">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C08A58] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View Full Journal Link */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
              Technical Documentation & Methodology Insights
            </span>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] text-[#C08A58] hover:text-white transition-colors group"
            >
              <span>Explore Complete Field Journal & Notes</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#151618] border border-white/15 text-[#F4F2EB] p-8 sm:p-12 shadow-2xl">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close article"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Unboxed Metadata */}
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
              <span className="text-[#C08A58] uppercase">{selectedArticle.category}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedArticle.date}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <h3
              id="article-modal-title"
              className="text-2xl sm:text-4xl font-light tracking-tight text-white mb-6"
            >
              {selectedArticle.title}
            </h3>

            <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-white/10 mb-8">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-6 text-sm sm:text-base text-neutral-300 leading-relaxed font-light font-sans">
              {selectedArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex justify-between items-center text-xs font-mono text-neutral-400">
              <span>III CONSTRUCTION LLC FIELD JOURNAL</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 bg-[#C08A58] text-[#121316] font-semibold uppercase tracking-widest hover:bg-[#A97343] transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

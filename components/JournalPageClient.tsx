'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectInquiryModal from '@/components/ProjectInquiryModal';
import { ASSETS } from '@/lib/assets';
import { ArrowUpRight, X } from 'lucide-react';

interface JournalEntry {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: any;
  leadExcerpt: string;
  bodyParagraphs: string[];
  keyTakeaways: string[];
}

const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'entry-1',
    title: 'The Turnkey Advantage: Unifying Earthwork to Final Handover',
    category: 'Turnkey Construction',
    date: 'October 2026',
    readTime: '4 min read',
    image: ASSETS.hero,
    leadExcerpt:
      'How contracting a single master builder eliminates fragmented subcontractor margins, trade conflict, and schedule latency on complex residential builds.',
    bodyParagraphs: [
      'In conventional residential building contracts, a client hires an excavation subcontractor to clear and rough-grade the site. That crew departs, leaving a foundation subcontractor to discover grade elevations off by three inches. The foundation contractor pours the slab to accommodate the discrepancy, creating framing misalignments that cost weeks of structural remediation.',
      'III Construction LLC’s single-source model maintains direct accountability from the initial forestry clearing through structural lockup. Our engineering superintendents oversee soil compaction, rebar grids, and thermal framing under a unified standard.',
      'The result is verifiable cost efficiency, streamlined municipal inspections, and an architectural structure that endures for generations without settlement fatigue.',
    ],
    keyTakeaways: [
      'Single contractual warranty covering both soil substrate and structural framing',
      'Zero trade downtime between earthwork completion and concrete formwork',
      'Direct superintendent contact eliminates communication silos',
    ],
  },
  {
    id: 'entry-2',
    title: 'Architectural Concrete: Precision Curing & Board-Formed Tolerances',
    category: 'Concrete Engineering',
    date: 'September 2026',
    readTime: '6 min read',
    image: ASSETS.introConcrete,
    leadExcerpt:
      'Technical parameters for high-performance mix designs, moisture-retention curing, and monolithic vertical surfaces free of aggregate segregation.',
    bodyParagraphs: [
      'Architectural concrete is as much a sculpture as it is a foundation. Achieving pristine board-formed textures requires rigorous control over hydration heat, formwork rigidity, and mechanical vibrator frequency during continuous pours.',
      'Our field crews calibrate concrete mixes up to 5,500 PSI, tailoring aggregate grading and water-cement ratios to match ambient humidity and thermal variations on pour day.',
      'By preventing surface honeycombing and tie-hole blowouts, our exposed structural walls deliver the raw tactile warmth and permanence modern luxury architecture demands.',
    ],
    keyTakeaways: [
      'Strict water-cement ratio monitoring prevents shrinkage micro-fissures',
      'Specially milled tongue-and-groove boards produce crisp wood-grain embossing',
      'ASTM cylinder break tests verify 5,500 PSI compressive targets at 28 days',
    ],
  },
  {
    id: 'entry-3',
    title: 'Engineered Earth: Laser Grading & Proctor Compaction Standards',
    category: 'Dirt Work & Grading',
    date: 'August 2026',
    readTime: '5 min read',
    image: ASSETS.introDirt,
    leadExcerpt:
      'Why foundation durability starts 10 feet below ground level: laser topography, moisture conditioning, and 98%+ Proctor density verification.',
    bodyParagraphs: [
      'Before a single cubic yard of concrete is delivered, the soil beneath must be engineered into an immovable substrate. Complex parcels and expansive soils demand strategic cut-and-fill grading and deep subsoil conditioning.',
      'We deploy laser-guided heavy equipment and compaction rollers to compact subgrades in calibrated 8-inch lifts, verifying optimal moisture-density curves with field density testing before sign-off.',
      'Integrated swales and subterranean French drains divert thousands of gallons of stormwater away from the foundation perimeter, protecting the building envelope permanently.',
    ],
    keyTakeaways: [
      'Nuclear gauge field density testing validates 98%+ Modified Proctor standard',
      'Dual-slope gravity swales prevent hydrostatic accumulation at foundations',
      'Moisture conditioning prevents differential swelling in reactive clay soils',
    ],
  },
  {
    id: 'entry-4',
    title: 'Selective Forestry Clearing: Preserving Heritage Canopies',
    category: 'Land Clearing',
    date: 'July 2026',
    readTime: '5 min read',
    image: ASSETS.articleClearing,
    leadExcerpt:
      'Balancing heavy equipment efficiency with delicate arboricultural preservation on raw Texas acreage and ranch estates.',
    bodyParagraphs: [
      'Clearing raw land for a custom home does not mean bulldozing every living organism down to bare bedrock. In Texas, mature live oaks, pecans, and cedar elms take a century to grow and add priceless architectural drama to an estate.',
      'Using tracked forestry mulchers rather than destructive chaining or burning, we surgically extract invasive undergrowth and cedar cedar brush. The resulting organic mulch stays on-site as an instant erosion barrier that enriches the soil and retains moisture.',
      'Every major specimen tree within 50 feet of the building pad receives a fenced root protection zone, preventing soil compaction across the critical root radius.',
    ],
    keyTakeaways: [
      'Forestry mulching prevents scorched earth burn scars',
      'Critical root radius protection maintains heritage oak health',
      'On-site recycled mulch satisfies state stormwater silt standards',
    ],
  },
];

export default function JournalPageClient() {
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenInquiry={() => setIsInquiryModalOpen(true)} />

      <main className="bg-[#121316] text-[#F4F2EB] pt-32 sm:pt-40 pb-28">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20 sm:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#C08A58]" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C08A58]">
              04 / Technical Field Journal
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight uppercase leading-[1.1] text-white max-w-4xl mb-6">
            Field notes & <span className="font-serif italic font-normal text-[#C08A58] lowercase text-5xl sm:text-7xl lg:text-8xl">engineering</span> perspectives.
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base font-light max-w-2xl leading-relaxed">
            Detailed insights on turnkey construction management, concrete tolerances,
            soil compaction science, and selective land clearing in Texas.
          </p>
        </section>

        {/* Articles List Grid */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            {JOURNAL_ENTRIES.map((entry) => (
              <article
                key={entry.id}
                onClick={() => setSelectedEntry(entry)}
                className="group flex flex-col border border-white/10 bg-[#151618] overflow-hidden hover:border-[#C08A58]/50 transition-all duration-300 cursor-pointer"
              >
                {/* Image Container with Zoom */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#1e2024]">
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151618] via-transparent to-black/20" />
                </div>

                {/* Content Block */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Unboxed Metadata (Zero-Pill Rule) */}
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
                      <span className="text-[#C08A58] uppercase">{entry.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{entry.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{entry.readTime}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white group-hover:text-[#C08A58] transition-colors duration-300 mb-4">
                      {entry.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6">
                      {entry.leadExcerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono tracking-wider uppercase text-neutral-400 group-hover:text-white transition-colors">
                    <span>Read Technical Article</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C08A58] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Dedicated Article Reader Modal */}
        {selectedEntry && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="reader-title"
          >
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#151618] border border-white/15 text-[#F4F2EB] p-8 sm:p-12 shadow-2xl">
              <button
                onClick={() => setSelectedEntry(null)}
                className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
                <span className="text-[#C08A58] uppercase">{selectedEntry.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedEntry.date}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedEntry.readTime}</span>
              </div>

              <h3
                id="reader-title"
                className="text-2xl sm:text-4xl font-light tracking-tight text-white mb-6"
              >
                {selectedEntry.title}
              </h3>

              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-white/10 mb-8 bg-[#1e2024]">
                <Image
                  src={selectedEntry.image}
                  alt={selectedEntry.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-6 text-sm sm:text-base text-neutral-300 leading-relaxed font-light mb-8">
                {selectedEntry.bodyParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Key Takeaways Box */}
              <div className="p-6 bg-white/5 border border-white/10 mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#C08A58] mb-3">
                  Key Technical Takeaways
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  {selectedEntry.keyTakeaways.map((item, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2.5">
                      <span className="text-[#C08A58] font-bold">―</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-between items-center text-xs font-mono text-neutral-400">
                <span>III CONSTRUCTION LLC TECHNICAL SERIES</span>
                <button
                  onClick={() => setSelectedEntry(null)}
                  className="px-6 py-2.5 bg-[#C08A58] text-[#121316] font-semibold uppercase tracking-widest hover:bg-[#A97343] transition-colors cursor-pointer"
                >
                  Close Reading View
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer onOpenInquiry={() => setIsInquiryModalOpen(true)} />

      <ProjectInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />
    </>
  );
}

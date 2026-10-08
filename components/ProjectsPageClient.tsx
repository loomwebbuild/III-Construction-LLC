'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectInquiryModal from '@/components/ProjectInquiryModal';
import { ASSETS } from '@/lib/assets';
import { ArrowUpRight, MapPin, Calendar, Check, X } from 'lucide-react';

interface ProjectRecord {
  id: string;
  number: string;
  name: string;
  category: string;
  categoryKey: string;
  discipline: string;
  location: string;
  year: string;
  image: any;
  leadDescription: string;
  fullNarrative: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
}

const ALL_PROJECTS: ProjectRecord[] = [
  {
    id: 'p1',
    number: '#01',
    name: 'The Hillside Pavilion',
    category: 'Turnkey Luxury Residence',
    categoryKey: 'turnkey',
    discipline: 'Turnkey & Architectural Concrete',
    location: 'Westlake Hills, TX',
    year: '2026',
    image: ASSETS.projectOne,
    leadDescription:
      'Turnkey luxury estate build encompassing full forestry clearing, hillside pad stabilization, architectural board-formed concrete slabs, and comprehensive modern structural construction.',
    fullNarrative:
      'Perched on a 14-acre hillside parcel with a 32-degree elevation drop, The Hillside Pavilion required surgical land clearing to preserve native live oaks while carving a stable foundation pad into solid limestone. Our team excavated 18,000 cu yds of rock, formed deep drilled caissons, and poured cantilevered board-formed concrete decks that support floor-to-ceiling glass pavilions.',
    metrics: [
      { label: 'Site Acreage', value: '14.2 Acres' },
      { label: 'Earth Moved', value: '18,500 Cu Yds' },
      { label: 'Concrete Cured', value: '1,450 Cu Yds' },
      { label: 'Living Area', value: '8,400 Sq Ft' },
    ],
    deliverables: [
      'Selective forestry clearing and silt barrier installation',
      'Rock excavation and laser-calibrated building pad compaction',
      'Monolithic post-tension foundation and architectural retaining walls',
      'Structural steel cantilever framing and full interior turnkey delivery',
    ],
  },
  {
    id: 'p2',
    number: '#02',
    name: 'Apex Commercial Center',
    category: 'Commercial Architectural Facility',
    categoryKey: 'concrete',
    discipline: 'Concrete Construction & Commercial Build',
    location: 'Domain North, Austin, TX',
    year: '2025',
    image: ASSETS.projectTwo,
    leadDescription:
      'Heavy commercial development featuring deep engineered footings, polished concrete structural flooring, monolithic retaining walls, and custom steel-and-timber architectural framing.',
    fullNarrative:
      'Engineered for maximum commercial durability, this multi-use pavilion features angular structural concrete pylons and expansive outdoor hardscapes. III Construction LLC served as the primary concrete and earthwork contractor, ensuring tight grade transitions across the 5-acre commercial campus.',
    metrics: [
      { label: 'Commercial Footprint', value: '26,000 Sq Ft' },
      { label: 'Compressive PSI', value: '5,200 PSI Cured' },
      { label: 'Turnaround Time', value: '11 Months' },
      { label: 'Safety Record', value: 'Zero Incident Hours' },
    ],
    deliverables: [
      'Commercial grade beam reinforcement and heavy concrete pads',
      'Board-formed sculptural concrete facade pillars',
      'Subsurface commercial stormwater detention chambers',
      'Architectural hardscape pathways and integrated retaining curbs',
    ],
  },
  {
    id: 'p3',
    number: '#03',
    name: 'Crestview Master Grading',
    category: 'Civil Dirt Work & Pad Preparation',
    categoryKey: 'dirtwork',
    discipline: 'Dirt Work & Topographic Excavation',
    location: 'Dripping Springs, TX',
    year: '2025',
    image: ASSETS.introDirt,
    leadDescription:
      'Large-scale master site development requiring 40,000 cu yds of cut-and-fill dirt grading, laser-level compaction, retention basins, and subterranean utility trenching.',
    fullNarrative:
      'This rugged Hill Country ranch development presented difficult expansive clay deposits and fractured limestone layers. Using GPS-guided bulldozers and multi-ton vibratory sheep-foot rollers, our crews achieved 98.5% Modified Proctor density across four building pads and completed 3,200 linear feet of utility trenches.',
    metrics: [
      { label: 'Volume Balanced', value: '42,000 Cu Yds' },
      { label: 'Proctor Density', value: '98.5% Tested' },
      { label: 'Trenching Length', value: '3,200 Linear Ft' },
      { label: 'Drainage Basins', value: '2 Retention Ponds' },
    ],
    deliverables: [
      'Topographic cut-and-fill slope stabilization',
      'Nuclear gauge verified pad compaction lifts',
      'Deep rock trenching for high-voltage and water conduits',
      'Gravity bioswales preventing perimeter runoff',
    ],
  },
  {
    id: 'p4',
    number: '#04',
    name: 'Pinnacle Ridge Acreage',
    category: 'Land Clearing & Site Reclamation',
    categoryKey: 'clearing',
    discipline: 'Land Clearing & Forestry Prep',
    location: 'Fredericksburg, TX',
    year: '2024',
    image: ASSETS.articleClearing,
    leadDescription:
      'Selective timber land clearing and environmentally compliant site reclamation on complex acreage, clearing access routes while protecting native legacy trees.',
    fullNarrative:
      'Reclaiming 85 acres of dense cedar brush and tangled understory for an equestrian estate, III Construction LLC deployed heavy tracked forestry mulchers to grind unwanted brush into ground cover, eliminating brush pile burn scars and providing immediate erosion stabilization.',
    metrics: [
      { label: 'Acreage Cleared', value: '85 Acres' },
      { label: 'Access Roads Built', value: '1.4 Miles' },
      { label: 'Mulching Yield', value: '100% Recycled Soil Cover' },
      { label: 'Specimen Trees Saved', value: '240+ Legacy Oaks' },
    ],
    deliverables: [
      'Selective cedar clearing around historic oak motts',
      'Subgrade road cuts with crushed base compaction',
      'Stump extraction and root grubbing along building envelopes',
      'State-compliant watercourse buffer protection',
    ],
  },
  {
    id: 'p5',
    number: '#05',
    name: 'The Monolith Estate',
    category: 'New Home Construction',
    categoryKey: 'newhome',
    discipline: 'New Home Construction (Residential)',
    location: 'Lake Travis, TX',
    year: '2026',
    image: ASSETS.hero,
    leadDescription:
      'From vacant raw wooded acreage to a turnkey architectural residence with integrated concrete pools, cantilevered roofs, and seamless indoor-outdoor living.',
    fullNarrative:
      'Constructed on a cliff overlooking Lake Travis, The Monolith Estate represents the pinnacle of III Construction LLC turnkey mastery. Every phase was executed by our in-house divisions: land clearing, cliff pad anchor excavation, structural concrete swimming pool engineering, and fine turnkey architectural handover.',
    metrics: [
      { label: 'Structural Steel', value: '62 Tons' },
      { label: 'Pool Elevation', value: 'Cliff-Edge Infinity' },
      { label: 'Handover State', value: '100% Turnkey' },
      { label: 'Architecture', value: 'Modern Minimalist' },
    ],
    deliverables: [
      'Cliffside rock anchors and retaining foundation beams',
      'Architectural board-formed perimeter walls',
      'Integrated structural infinity swimming pool',
      'Luxury residential turnkey project completion',
    ],
  },
];

const FILTERS = [
  { key: 'all', label: 'All Projects' },
  { key: 'turnkey', label: 'Turnkey' },
  { key: 'concrete', label: 'Concrete' },
  { key: 'dirtwork', label: 'Dirt Work' },
  { key: 'clearing', label: 'Land Clearing' },
  { key: 'newhome', label: 'New Home' },
];

export default function ProjectsPageClient() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectRecord | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const filteredProjects =
    selectedFilter === 'all'
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.categoryKey === selectedFilter);

  return (
    <>
      <Navbar onOpenInquiry={() => setIsInquiryModalOpen(true)} />

      <main className="bg-[#121316] text-[#F4F2EB] pt-32 sm:pt-40 pb-28">
        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#C08A58]" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C08A58]">
              02 / Project Portfolio
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/10">
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight uppercase leading-[1.1] text-white">
                Selected works <span className="font-serif italic font-normal text-[#C08A58] lowercase text-5xl sm:text-7xl lg:text-8xl">(#01–#05)</span>
              </h1>
              <p className="text-neutral-400 text-sm sm:text-base font-light mt-4 max-w-xl">
                A curated survey of turnkey luxury residences, precision dirt work, heavy
                land clearing, and commercial concrete builds across Texas.
              </p>
            </div>

            {/* Interactive Filter Controls */}
            <div className="flex flex-wrap items-center gap-2 bg-[#151618] p-1.5 border border-white/10">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setSelectedFilter(f.key)}
                  className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                    selectedFilter === f.key
                      ? 'bg-[#C08A58] text-[#121316] font-semibold shadow-md'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col border border-white/10 bg-[#151618] overflow-hidden hover:border-[#C08A58]/50 transition-all duration-300 cursor-pointer"
                onClick={() => setActiveModalProject(project)}
              >
                {/* Image Container with Zoom */}
                <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-[#1e2024]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151618] via-transparent to-black/20" />

                  {/* Number & Discipline Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                    <span className="bg-[#121316]/80 backdrop-blur-md px-3 py-1 border border-white/10 text-[#C08A58]">
                      {project.number}
                    </span>
                    <span className="bg-[#121316]/80 backdrop-blur-md px-3 py-1 border border-white/10 uppercase">
                      {project.discipline}
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Location & Year Metadata */}
                    <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-3">
                      <div className="flex items-center gap-1.5 text-neutral-300">
                        <MapPin className="w-3.5 h-3.5 text-[#C08A58]" />
                        <span>{project.location}</span>
                      </div>
                      <span aria-hidden="true">·</span>
                      <div className="flex items-center gap-1.5 text-neutral-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight group-hover:text-[#C08A58] transition-colors duration-300 mb-4">
                      {project.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6">
                      {project.leadDescription}
                    </p>

                    {/* Metrics preview */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 mb-6">
                      {project.metrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx} className="flex flex-col">
                          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                            {m.label}
                          </span>
                          <span className="text-xs font-semibold text-white mt-0.5">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono tracking-wider uppercase text-neutral-400 group-hover:text-white transition-colors">
                    <span>Inspect Project Blueprints & Scope</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C08A58] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Detailed Scope Modal */}
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#151618] border border-white/15 text-[#F4F2EB] p-8 sm:p-12 shadow-2xl">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 text-xs font-mono text-[#C08A58] uppercase mb-2">
                <span>{activeModalProject.number}</span>
                <span aria-hidden="true">·</span>
                <span>{activeModalProject.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeModalProject.location}</span>
              </div>

              <h3
                id="project-modal-title"
                className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-6"
              >
                {activeModalProject.name}
              </h3>

              <div className="relative h-64 sm:h-96 w-full overflow-hidden border border-white/10 mb-8 bg-[#1e2024]">
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Technical Metrics 4-Column Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-white/5 border border-white/10 mb-8">
                {activeModalProject.metrics.map((m, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                      {m.label}
                    </span>
                    <span className="text-sm font-semibold text-white mt-1">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-6 text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8">
                <p>{activeModalProject.fullNarrative}</p>
              </div>

              {/* Scope Deliverables */}
              <h4 className="text-xs font-mono tracking-widest uppercase text-[#C08A58] mb-4">
                Completed Scope Deliverables
              </h4>
              <div className="space-y-2.5 mb-10">
                {activeModalProject.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-[#C08A58] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  onClick={() => {
                    setActiveModalProject(null);
                    setIsInquiryModalOpen(true);
                  }}
                  className="px-8 py-3.5 bg-[#C08A58] text-[#121316] font-semibold text-xs uppercase tracking-widest hover:bg-[#A97343] transition-colors"
                >
                  Inquire Similar Project Scope
                </button>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-6 py-3.5 border border-white/20 text-neutral-300 hover:text-white text-xs uppercase tracking-widest transition-colors"
                >
                  Close Window
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

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectInquiryModal from '@/components/ProjectInquiryModal';
import { ASSETS } from '@/lib/assets';
import {
  CheckCircle2,
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  discipline: string;
  image: any;
  overview: string;
  keyCapabilities: string[];
  specs: { label: string; value: string }[];
}

const SERVICES_CATALOG: ServiceDetail[] = [
  {
    id: 'turnkey',
    number: '01',
    title: 'Turnkey Construction',
    subtitle: 'End-to-End Architectural Leadership & General Contracting',
    discipline: 'Residential & Commercial General Contracting',
    image: ASSETS.hero,
    overview:
      'Our turnkey construction service represents a master contract delivery model. By eliminating disjointed hand-offs between site preparers, foundation contractors, and framers, we guarantee uncompromised quality, compressed project timelines, and fixed financial accountability.',
    keyCapabilities: [
      'Single-source owner representation and licensed general contractor oversight',
      'Unified master scheduling synchronizing earthwork, concrete curing, and vertical framing',
      'Transparent milestone budget auditing and value engineering',
      'Municipal permit coordination, environmental reviews, and rigorous code inspections',
    ],
    specs: [
      { label: 'Management Model', value: '100% Direct Superintendent Oversight' },
      { label: 'Project Scale', value: 'Single-Family Luxury to Commercial Pavilions' },
      { label: 'Warranty', value: 'Comprehensive Structural Warranty' },
    ],
  },
  {
    id: 'concrete',
    number: '02',
    title: 'Concrete Construction',
    subtitle: 'High-Tolerance Slabs, Board-Formed Walls & Grade Beams',
    discipline: 'Structural & Architectural Concrete',
    image: ASSETS.introConcrete,
    overview:
      'We craft the structural spine of every build. From post-tension monolithic slabs and deep pier caissons to exposed board-formed architectural walls, our concrete crew adheres to millimeter tolerances and strict hydration protocols.',
    keyCapabilities: [
      'Architectural board-formed walls with crisp geometric alignment and zero tie-hole blowouts',
      'Engineered post-tension residential slabs and heavy commercial grade beams',
      'Hydration heat monitoring and compressive strength verification up to 5,500 PSI',
      'Integrated structural pool basins, cantilevered patio decks, and monolithic retaining walls',
    ],
    specs: [
      { label: 'Compressive Range', value: '4,000 to 5,500 PSI Cured' },
      { label: 'Finish Quality', value: 'Architectural Class A & Polished Slabs' },
      { label: 'Testing Method', value: 'ASTM Certified Cylinder Breaks' },
    ],
  },
  {
    id: 'dirtwork',
    number: '03',
    title: 'Dirt Work & Grading',
    subtitle: 'Topographic Excavation, Pad Compaction & Drainage Engineering',
    discipline: 'Civil Earthmoving & Subgrade Engineering',
    image: ASSETS.introDirt,
    overview:
      'Immovable structures demand immovable earth. We deploy GPS-guided bulldozers and multi-ton compaction rollers to balance cut-and-fill topographies, establish engineered foundation pads, and safeguard against soil settlement.',
    keyCapabilities: [
      '3D laser-calibrated grading achieving 98%+ Modified Proctor soil density',
      'Complex cut-and-fill volume balancing on rolling hillsides and raw acreage',
      'Subsurface French drains, retention detention ponds, and gravity swales',
      'Subterranean utility trenching for high-voltage power, water main lines, and septic fields',
    ],
    specs: [
      { label: 'Density Standard', value: '98%+ Proctor Compaction Verified' },
      { label: 'Grading Tech', value: '3D Laser & GPS Machine Guidance' },
      { label: 'Drainage Systems', value: 'Engineered Stormwater Retention & Swales' },
    ],
  },
  {
    id: 'land-clearing',
    number: '04',
    title: 'Land Clearing & Forestry',
    subtitle: 'Acreage Reclamation, Heavy Mulching & Site Preparation',
    discipline: 'Site Preparation & Selective Forestry',
    image: ASSETS.articleClearing,
    overview:
      'Transforming dense raw woodlands into pristine building sites requires surgical power. Our land clearing division clears building envelopes and access corridors while respecting native topography and legacy heritage trees.',
    keyCapabilities: [
      'Heavy-duty forestry mulching transforming underbrush into nutrient-rich organic groundcover',
      'Selective clearing designed to protect mature oaks, heritage hardwoods, and scenic views',
      'Stump extraction, boulder removal, and root grubbing below subgrade levels',
      'Silt fencing, erosion control barriers, and environmental compliance documentation',
    ],
    specs: [
      { label: 'Tract Capacity', value: 'Subdivision Parcels to 500+ Acre Ranches' },
      { label: 'Ecological Standard', value: 'Erosion-Compliant Selective Clearing' },
      { label: 'Debris Disposal', value: 'On-Site Organic Forestry Mulching' },
    ],
  },
  {
    id: 'new-home',
    number: '05',
    title: 'New Home Construction',
    subtitle: 'Bespoke Architectural Residences & Commercial Structures',
    discipline: 'Custom Residential & Commercial Turnkey Builds',
    image: ASSETS.projectOne,
    overview:
      'From custom private retreats with cantilevered rooflines to modern commercial architectural pavilions, III Construction LLC turns complex blueprints into permanent physical reality with fine finishing craftsmanship.',
    keyCapabilities: [
      'Heavy timber, structural steel, and mass-concrete integrated architectural framing',
      'High-performance building envelopes with advanced thermal and acoustical sealing',
      'Floor-to-ceiling panoramic glass wall framing and concealed pocket door engineering',
      'Turnkey delivery through final interior finishes, hardscaping, and client handover',
    ],
    specs: [
      { label: 'Construction Scope', value: 'Architectural Residential & Commercial' },
      { label: 'Structural Types', value: 'Mass Concrete, Steel & Heavy Timber' },
      { label: 'Handover State', value: '100% Complete & Move-In Certified' },
    ],
  },
];

export default function ServicesPageClient() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenInquiry={() => setIsInquiryModalOpen(true)} />

      <main className="bg-[#121316] text-[#F4F2EB] pt-32 sm:pt-40 pb-28">
        {/* Page Hero */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20 sm:mb-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#C08A58]" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C08A58]">
              01 / Core Disciplines
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight uppercase leading-[1.1] text-white max-w-4xl mb-8">
            Complete turnkey craft from{' '}
            <span className="font-serif italic font-normal text-[#C08A58] lowercase text-5xl sm:text-7xl lg:text-8xl">
              raw ground
            </span>{' '}
            to finished build.
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mb-10">
            III Construction LLC eliminates fragmented subcontracting by integrating land
            clearing, precision dirt grading, structural concrete, and master construction
            under a single standard of excellence.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsInquiryModalOpen(true)}
              className="px-8 py-4 bg-[#C08A58] hover:bg-[#A97343] text-[#121316] font-semibold text-xs tracking-widest uppercase transition-all duration-300"
            >
              Discuss Your Scope of Work
            </button>
            <Link
              href="/projects"
              className="px-8 py-4 border border-white/20 hover:border-white/60 bg-white/5 text-neutral-300 hover:text-white text-xs tracking-widest uppercase transition-all"
            >
              View Completed Projects
            </Link>
          </div>
        </section>

        {/* Detailed Catalog of 5 Services */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-28 sm:space-y-36">
          {SERVICES_CATALOG.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="pt-12 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center"
              >
                {/* Visual Image Column */}
                <div
                  className={`lg:col-span-6 relative h-[380px] sm:h-[480px] overflow-hidden border border-white/15 bg-[#1a1c20] shadow-2xl ${
                    isReversed ? 'lg:order-2' : ''
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  <div className="absolute top-4 left-4 bg-[#121316]/80 backdrop-blur-md px-3 py-1.5 border border-white/10 text-xs font-mono text-[#C08A58]">
                    {service.number} · {service.discipline}
                  </div>
                </div>

                {/* Content Details Column */}
                <div className={`lg:col-span-6 flex flex-col justify-center ${isReversed ? 'lg:order-1' : ''}`}>
                  <span className="text-xs font-mono tracking-widest text-[#C08A58] uppercase mb-2">
                    {service.subtitle}
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mb-6">
                    {service.title}
                  </h2>

                  <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-8">
                    {service.overview}
                  </p>

                  {/* Key Capabilities */}
                  <div className="space-y-3 mb-8">
                    {service.keyCapabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-[#C08A58] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technical Specs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    {service.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex flex-col">
                        <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                          {spec.label}
                        </span>
                        <span className="text-xs font-semibold text-white mt-1">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Comparison Matrix Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-36 pt-24 border-t border-white/10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C08A58]">
              Operational Advantage
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mt-2 uppercase">
              The Turnkey Difference
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light mt-3">
              How unified general contracting compares against fragmented multi-trade models.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-light">
              <thead>
                <tr className="border-b border-white/20 text-neutral-400 font-mono tracking-wider uppercase">
                  <th className="py-4 px-4">Evaluation Metric</th>
                  <th className="py-4 px-4 text-neutral-400">Fragmented Subcontracting</th>
                  <th className="py-4 px-4 text-[#C08A58] font-semibold">III Construction LLC (Turnkey)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-neutral-300">
                <tr>
                  <td className="py-5 px-4 font-mono text-white">Liability & Accountability</td>
                  <td className="py-5 px-4 text-neutral-400">Finger-pointing between earthmover & foundation crew</td>
                  <td className="py-5 px-4 text-white font-medium">Single general contractor bears 100% accountability</td>
                </tr>
                <tr>
                  <td className="py-5 px-4 font-mono text-white">Subgrade Compaction</td>
                  <td className="py-5 px-4 text-neutral-400">Unverified visual estimates, risking settlement cracks</td>
                  <td className="py-5 px-4 text-white font-medium">98%+ Modified Proctor nuclear density testing</td>
                </tr>
                <tr>
                  <td className="py-5 px-4 font-mono text-white">Schedule Lag</td>
                  <td className="py-5 px-4 text-neutral-400">4–8 weeks idle downtime waiting for separate trades</td>
                  <td className="py-5 px-4 text-white font-medium">Zero-gap transitions from land clearing to framing</td>
                </tr>
                <tr>
                  <td className="py-5 px-4 font-mono text-white">Concrete Tolerances</td>
                  <td className="py-5 px-4 text-neutral-400">Standard residential code minimums (2,500–3,000 PSI)</td>
                  <td className="py-5 px-4 text-white font-medium">Architectural class tolerances (up to 5,500 PSI)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-28">
          <div className="p-10 sm:p-16 border border-white/15 bg-gradient-to-r from-[#151618] via-[#1a1c20] to-[#151618] text-center flex flex-col items-center">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C08A58] mb-3">
              Direct Estimator Engagement
            </span>
            <h3 className="text-3xl sm:text-5xl font-light text-white tracking-tight uppercase max-w-2xl mb-6">
              Ready to engineer your site from the ground up?
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base font-light max-w-xl mb-8">
              Send us your site acreage, architectural blueprints, or foundation requirements for
              a comprehensive scope estimate.
            </p>
            <button
              onClick={() => setIsInquiryModalOpen(true)}
              className="px-10 py-4 bg-[#C08A58] hover:bg-[#A97343] text-[#121316] font-semibold text-xs tracking-widest uppercase transition-all shadow-xl"
            >
              Start Scope Discussion
            </button>
          </div>
        </section>
      </main>

      <Footer onOpenInquiry={() => setIsInquiryModalOpen(true)} />

      <ProjectInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />
    </>
  );
}

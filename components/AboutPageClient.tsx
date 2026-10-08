'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectInquiryModal from '@/components/ProjectInquiryModal';
import { ASSETS } from '@/lib/assets';
import {
  Award,
  Users,
  Eye,
  MessageSquare,
} from 'lucide-react';

export default function AboutPageClient() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenInquiry={() => setIsInquiryModalOpen(true)} />

      <main className="bg-[#121316] text-[#F4F2EB] pt-32 sm:pt-40 pb-28">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-24 sm:mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#C08A58]" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C08A58]">
              03 / Architectural Philosophy & Process
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight uppercase leading-[1.1] text-white max-w-4xl mb-8">
            Dedication, experience and a passion for{' '}
            <span className="font-serif italic font-normal text-[#C08A58] lowercase text-5xl sm:text-7xl lg:text-8xl">
              perfection
            </span>
            .
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6 border-t border-white/10">
            <div className="lg:col-span-7 space-y-6 text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
              <p>
                III Construction LLC was founded on a singular principle: building truly magnificent
                structures requires mastering the soil upon which they stand. In a fragmented industry
                where excavation contractors pass blame to foundation crews, who in turn blame the
                framers, we operate as a unified turnkey force.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base">
                From selective timber land clearing on raw Texas acreage through laser-guided pad
                grading, structural post-tension concrete, and bespoke architectural framing, our team
                maintains direct daily accountability. We do not just build houses or commercial
                facilities; we engineer permanent assets designed to stand for centuries.
              </p>
            </div>

            <div className="lg:col-span-5 p-8 border border-white/10 bg-[#151618] space-y-4">
              <span className="text-xs font-mono tracking-widest uppercase text-[#C08A58]">
                Core Credentials
              </span>
              <div className="space-y-3 text-xs sm:text-sm font-light text-neutral-300">
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-neutral-400">License Status</span>
                  <span className="text-white font-mono">Licensed & Fully Insured General Contractor</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-neutral-400">Primary Region</span>
                  <span className="text-white font-mono">Austin, Hill Country & Greater Texas</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-neutral-400">Delivery Model</span>
                  <span className="text-white font-mono">100% Turnkey Master Contracting</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-neutral-400">Safety Standards</span>
                  <span className="text-white font-mono">OSHA-30 Certified Field Superintendents</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Bleed Architectural Panorama */}
        <section className="relative h-[420px] sm:h-[560px] w-full overflow-hidden border-y border-white/10 mb-28">
          <Image
            src={ASSETS.pinnedPanorama}
            alt="III Construction LLC turnkey jobsite in Texas"
            fill
            sizes="100vw"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-[#121316]/50 to-[#121316]/30" />
          <div className="absolute bottom-8 left-6 sm:left-12 max-w-xl">
            <span className="text-xs font-mono tracking-widest uppercase text-[#C08A58]">
              Field Reality
            </span>
            <p className="text-xl sm:text-2xl font-light text-white tracking-tight mt-1">
              Every master structural elevation begins with surgical earth grading.
            </p>
          </div>
        </section>

        {/* 4-Phase Turnkey Process */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-32">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C08A58]">
              The Lifecycle
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mt-2 uppercase">
              Our 4-Phase Delivery Framework
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light mt-3">
              How we orchestrate complex parcel development from initial survey through final occupancy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 border border-white/10 bg-[#151618] flex flex-col justify-between">
              <div>
                <span className="text-3xl font-light font-mono text-[#C08A58]">01</span>
                <h3 className="text-xl font-light text-white mt-4 mb-3">
                  Land Clearing & Survey
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  Selective forestry mulching, environmental silt fencing, stump extraction, and
                  geotechnical soil boring coordination.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 text-[10px] font-mono text-neutral-500 uppercase">
                Site Reclamation Complete
              </div>
            </div>

            <div className="p-8 border border-white/10 bg-[#151618] flex flex-col justify-between">
              <div>
                <span className="text-3xl font-light font-mono text-[#C08A58]">02</span>
                <h3 className="text-xl font-light text-white mt-4 mb-3">
                  Laser Dirt Work & Compaction
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  3D GPS earthmoving, 98%+ Proctor density pad compaction, retention pond sculpting,
                  and utility trenching.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 text-[10px] font-mono text-neutral-500 uppercase">
                Proctor Density Verified
              </div>
            </div>

            <div className="p-8 border border-white/10 bg-[#151618] flex flex-col justify-between">
              <div>
                <span className="text-3xl font-light font-mono text-[#C08A58]">03</span>
                <h3 className="text-xl font-light text-white mt-4 mb-3">
                  Architectural Concrete Slabs
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  Grade beam reinforcement, post-tension rebar grids, monolithic pours, and
                  architectural board-formed perimeter walls.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 text-[10px] font-mono text-neutral-500 uppercase">
                5,500 PSI Cured Strength
              </div>
            </div>

            <div className="p-8 border border-white/10 bg-[#151618] flex flex-col justify-between">
              <div>
                <span className="text-3xl font-light font-mono text-[#C08A58]">04</span>
                <h3 className="text-xl font-light text-white mt-4 mb-3">
                  Turnkey Master Build
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  Structural steel and timber framing, glass wall engineering, MEP integration,
                  fine finishes, and final certificate of occupancy.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 text-[10px] font-mono text-neutral-500 uppercase">
                100% Handover Complete
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Excellence */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-32 pt-24 border-t border-white/10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C08A58]">
              Operating Discipline
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mt-2 uppercase">
              We Excel in Every Dimension
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 border border-white/10 bg-[#151618]">
              <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#C08A58] mb-6">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-light text-white mb-2">The Details</h3>
              <div className="text-xs font-mono text-[#C08A58] mb-4">Precision · Craft · Finish</div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Millimeter tolerances on structural concrete, zero cold joints, and razor-sharp
                geometric alignments across all exposed planes.
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-[#151618]">
              <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#C08A58] mb-6">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-light text-white mb-2">Open Communication</h3>
              <div className="text-xs font-mono text-[#C08A58] mb-4">Transparent · Proactive · Direct</div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Weekly progress reports, transparent cost accounts, and continuous direct access
                to your designated project superintendent.
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-[#151618]">
              <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#C08A58] mb-6">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-light text-white mb-2">Reliable Crews</h3>
              <div className="text-xs font-mono text-[#C08A58] mb-4">Vetted · Disciplined · Skilled</div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Dedicated equipment operators, skilled concrete form carpenters, and master
                tradesmen who take pride in lasting structural execution.
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-[#151618]">
              <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#C08A58] mb-6">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-light text-white mb-2">Exceeding Expectations</h3>
              <div className="text-xs font-mono text-[#C08A58] mb-4">Standards · Timelines · Quality</div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                We consistently outperform municipal building codes, delivering pristine estates
                and commercial pavilions on schedule and on budget.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="p-12 sm:p-20 border border-white/15 bg-gradient-to-r from-[#151618] via-[#1a1c20] to-[#151618] text-center flex flex-col items-center">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C08A58] mb-3">
              Direct Inquiries
            </span>
            <h3 className="text-3xl sm:text-5xl font-light text-white tracking-tight uppercase max-w-2xl mb-6">
              Discuss Your Upcoming Project with Our Superintendency
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base font-light max-w-xl mb-8">
              Whether you are planning custom acreage clearing or a complex turnkey luxury residence,
              our team provides uncompromised guidance from day one.
            </p>
            <button
              onClick={() => setIsInquiryModalOpen(true)}
              className="px-10 py-4 bg-[#C08A58] hover:bg-[#A97343] text-[#121316] font-semibold text-xs tracking-widest uppercase transition-all shadow-xl"
            >
              Request Initial Consultation
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

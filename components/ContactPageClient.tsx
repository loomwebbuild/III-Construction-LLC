'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Send,
  Check,
  AlertCircle,
  Plus,
  Minus,
} from 'lucide-react';

const SERVICES = [
  'Turnkey Construction',
  'Concrete Construction',
  'Dirt Work & Grading',
  'Land Clearing',
  'New Home Construction (Residential)',
  'Commercial Construction',
];

const FAQS = [
  {
    q: 'How does your turnkey contracting process start on raw land?',
    a: 'Every project begins with a topographical and boundary assessment. We review civil engineering plans, perform geotechnical soil review, and develop a synchronized schedule starting with selective forestry clearing, erosion fencing, laser grading, and structural pad compaction.',
  },
  {
    q: 'Do you manage both residential custom homes and commercial facilities?',
    a: 'Yes. Our equipment fleet and licensed superintendents execute custom luxury architectural estates as well as commercial pavilions, storage facilities, and master dirt work for regional commercial developments.',
  },
  {
    q: 'What quality guarantees do you offer on concrete and earth compaction?',
    a: 'We perform nuclear gauge testing to verify 98%+ Modified Proctor compaction on every building pad. For structural concrete, cylinder break tests verify 4,000–5,500 PSI compressive targets at 7 and 28 days.',
  },
  {
    q: 'What regions of Texas does III Construction LLC serve?',
    a: 'Our primary operations cover Austin, the Texas Hill Country (Dripping Springs, Westlake, Fredericksburg, Lake Travis), Houston, and contiguous acreage properties across Greater Texas.',
  },
];

export default function ContactPageClient() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Turnkey Construction']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'Austin / Greater Texas',
    timeline: 'Immediate / Next 30 Days',
    budget: '$500k – $1.5M',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please provide your name and contact email.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#121316] text-[#F4F2EB] pt-32 sm:pt-40 pb-28">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20 sm:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#C08A58]" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C08A58]">
              05 / Consultation & Inquiries
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight uppercase leading-[1.1] text-white max-w-4xl mb-6">
            Initiate your project with{' '}
            <span className="font-serif italic font-normal text-[#C08A58] lowercase text-5xl sm:text-7xl lg:text-8xl">
              principals
            </span>
            .
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Direct access to III Construction LLC estimators and superintendents. Discuss
            acreage, engineering blueprints, or turnkey timelines with our master builder.
          </p>
        </section>

        {/* Main Grid: Form + Contact Info */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            {/* Left Column: Interactive Consultation Questionnaire */}
            <div className="lg:col-span-7 p-8 sm:p-12 border border-white/15 bg-[#151618] shadow-2xl">
              {submitted ? (
                <div className="text-center py-16 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#C08A58]/20 border border-[#C08A58] text-[#C08A58] flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                    Inquiry Received by Estimating Team
                  </h2>
                  <p className="text-sm text-neutral-300 font-light max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our principal superintendent will evaluate your
                    parameters and contact you directly within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        location: 'Austin / Greater Texas',
                        timeline: 'Immediate / Next 30 Days',
                        budget: '$500k – $1.5M',
                        description: '',
                      });
                    }}
                    className="px-8 py-3.5 bg-[#C08A58] text-[#121316] font-semibold text-xs uppercase tracking-widest hover:bg-[#A97343] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#C08A58]">
                      Scope Specification Form
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight mt-1">
                      Project Parameters
                    </h2>
                  </div>

                  {error && (
                    <div className="p-3 bg-red-950/50 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Services Multi-Select */}
                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
                      Target Disciplines (Select All Applicable)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {SERVICES.map((s) => {
                        const active = selectedServices.includes(s);
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() => toggleService(s)}
                            className={`px-3 py-2 text-xs font-mono text-left border transition-all flex items-center justify-between ${
                              active
                                ? 'bg-[#C08A58]/20 border-[#C08A58] text-white'
                                : 'bg-white/[0.02] border-white/10 text-neutral-400 hover:border-white/30'
                            }`}
                          >
                            <span className="truncate">{s}</span>
                            {active && <Check className="w-3.5 h-3.5 text-[#C08A58]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact Info Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Johnathan Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#101114] border border-white/15 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C08A58]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#101114] border border-white/15 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C08A58]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(832) 555-0303"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#101114] border border-white/15 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C08A58]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                        Estimated Budget Scope
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#101114] border border-white/15 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C08A58]"
                      >
                        <option>$250k – $500k</option>
                        <option>$500k – $1.5M</option>
                        <option>$1.5M – $5M</option>
                        <option>$5M+ Master Estate / Commercial</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                      Project Location / Parcel Acreage & Specifics
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Specify the city or county, raw acreage size, whether trees need selective clearing, concrete foundation specifications, or architectural design state..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full bg-[#101114] border border-white/15 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C08A58]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-neutral-500">
                      Confidential Contractor Inquiry
                    </span>

                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-[#C08A58] hover:bg-[#A97343] text-[#121316] font-semibold text-xs tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>Transmit Scope</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Direct Contact & Office Details */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Touchpoints Box */}
              <div className="p-8 border border-white/15 bg-[#151618] space-y-6">
                <span className="text-xs font-mono tracking-widest uppercase text-[#C08A58]">
                  Direct Touchpoints
                </span>

                <div className="space-y-4 text-xs sm:text-sm font-light">
                  <a
                    href="tel:+18325550303"
                    className="flex items-start gap-4 text-neutral-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#C08A58] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-mono text-xs text-neutral-400 uppercase">Telephone</div>
                      <div className="text-white text-base mt-0.5">(832) 555-0303</div>
                    </div>
                  </a>

                  <a
                    href="mailto:inquiries@3constructionllc.com"
                    className="flex items-start gap-4 text-neutral-300 hover:text-white transition-colors pt-3 border-t border-white/10"
                  >
                    <Mail className="w-5 h-5 text-[#C08A58] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-mono text-xs text-neutral-400 uppercase">Email</div>
                      <div className="text-white text-base mt-0.5">inquiries@3constructionllc.com</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 text-neutral-300 pt-3 border-t border-white/10">
                    <MapPin className="w-5 h-5 text-[#C08A58] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-mono text-xs text-neutral-400 uppercase">Operating Center</div>
                      <div className="text-white text-sm mt-0.5">1000 Commercial Parkway, Suite 400</div>
                      <div className="text-neutral-400 text-xs">Austin, TX 78701</div>
                    </div>
                  </div>

                  <a
                    href="https://instagram.com/3constructionllc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 text-[#C08A58] hover:text-white transition-colors pt-3 border-t border-white/10"
                  >
                    <Instagram className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-mono text-xs text-neutral-400 uppercase">Social Documentation</div>
                      <div className="text-sm mt-0.5">Instagram: @3constructionllc</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Hours & Response SLA */}
              <div className="p-8 border border-white/10 bg-white/[0.02] space-y-4">
                <div className="flex items-center gap-2 text-[#C08A58]">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-widest text-white">
                    Superintendency Hours
                  </span>
                </div>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Monday – Friday: 06:30 – 18:00 CST<br />
                  Saturday: 07:00 – 14:00 (Field Operations Only)<br />
                  Emergency Jobsite Superintendency: 24/7 on Active Builds
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-28 pt-20 border-t border-white/10">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C08A58]">
              Frequently Addressed
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mt-2 uppercase">
              Project Questions & Answers
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {FAQS.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-white/10 bg-[#151618] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-light text-white">
                      {faq.q}
                    </span>
                    <div className="p-1 text-neutral-400 shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#C08A58]" />
                      ) : (
                        <Plus className="w-4 h-4 text-neutral-400" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

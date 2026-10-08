'use client';

import React, { useState } from 'react';
import { X, Check, Send, AlertCircle, Sparkles } from 'lucide-react';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICES = [
  'Turnkey Construction',
  'Concrete Construction',
  'Dirt Work & Grading',
  'Land Clearing',
  'New Home Construction (Residential)',
  'Commercial Construction',
];

export default function ProjectInquiryModal({
  isOpen,
  onClose,
}: ProjectInquiryModalProps) {
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

  if (!isOpen) return null;

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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#151618] border border-white/15 text-[#F4F2EB] p-8 sm:p-10 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#C08A58]/20 border border-[#C08A58] text-[#C08A58] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              Inquiry Transmitted to Superintendency
            </h3>

            <p className="text-sm text-neutral-300 font-light max-w-md mx-auto leading-relaxed">
              Thank you for considering III Construction LLC. Our principal estimator will review
              your project scope and contact you within 24 business hours.
            </p>

            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3.5 bg-[#C08A58] text-[#121316] font-semibold text-xs tracking-widest uppercase hover:bg-[#A97343] transition-colors"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C08A58]">
                Project Consultation
              </span>
              <h3
                id="inquiry-title"
                className="text-2xl sm:text-3xl font-light text-white tracking-tight mt-1"
              >
                Discuss Your <span className="font-serif italic text-[#C08A58]">Vision</span>
              </h3>
              <p className="text-xs text-neutral-400 mt-1 font-light">
                Direct engagement with III Construction LLC turnkey estimators.
              </p>
            </div>

            {error && (
              <div className="p-3 bg-red-950/50 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Service Selection */}
            <div>
              <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
                Select Scope of Work (Multiple Allowed)
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

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Johnathan Vance"
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
                  Target Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-[#101114] border border-white/15 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C08A58]"
                >
                  <option>Immediate / Next 30 Days</option>
                  <option>1 – 3 Months</option>
                  <option>3 – 6 Months</option>
                  <option>Future Planning / Conceptual</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                Project Details / Site Acreage & Scope
              </label>
              <textarea
                rows={3}
                placeholder="Describe the parcel size, concrete specifications, site terrain, or new home architecture..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-[#101114] border border-white/15 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C08A58]"
              />
            </div>

            {/* Submit button */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] font-mono text-neutral-500">
                Direct Transmission to III Construction LLC
              </span>

              <button
                type="submit"
                className="px-8 py-3.5 bg-[#C08A58] hover:bg-[#A97343] text-[#121316] font-semibold text-xs tracking-widest uppercase transition-all flex items-center gap-2"
              >
                <span>Submit Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

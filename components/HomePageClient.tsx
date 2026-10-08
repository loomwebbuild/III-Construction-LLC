'use client';

import React, { useState } from 'react';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import ExcelSection from '@/components/ExcelSection';
import PinnedAbout from '@/components/PinnedAbout';
import Articles from '@/components/Articles';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import ProjectInquiryModal from '@/components/ProjectInquiryModal';

export default function HomePageClient() {
  const [isPreloaderFinished, setIsPreloaderFinished] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  return (
    <>
      {/* 1. Preloader */}
      <Preloader onComplete={() => setIsPreloaderFinished(true)} />

      {/* Navigation */}
      <Navbar onOpenInquiry={() => setIsInquiryModalOpen(true)} />

      <main className="relative z-10">
        {/* 2. Hero */}
        <Hero
          isPreloaderFinished={isPreloaderFinished}
          onOpenInquiry={() => setIsInquiryModalOpen(true)}
        />

        {/* 3. Intro with Statement & Dual Parallax Images */}
        <Intro />

        {/* 4. Projects (#1 to #5 with Cursor-Follow Preview / Mobile Accordion) */}
        <Projects />

        {/* 5. "We Excel In" (4 Columns with 3 Bullet Words) */}
        <ExcelSection />

        {/* 6. Long-Form About Text over Pinned Background Image */}
        <PinnedAbout />

        {/* 7. Articles (3 Cards with Zoom & Reader Modal) */}
        <Articles />

        {/* 8. Final CTA */}
        <FinalCTA onOpenInquiry={() => setIsInquiryModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenInquiry={() => setIsInquiryModalOpen(true)} />

      {/* Interactive Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />
    </>
  );
}

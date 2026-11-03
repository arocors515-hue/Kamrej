/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { TrainingFacilities } from './components/TrainingFacilities.tsx';
import { Reviews } from './components/Reviews.tsx';
import { Membership } from './components/Membership.tsx';
import { Gallery } from './components/Gallery.tsx';
import { ContactLocation } from './components/ContactLocation.tsx';
import { Footer } from './components/Footer.tsx';
import { EnquiryModal } from './components/EnquiryModal.tsx';
import { MobileQuickBar } from './components/MobileQuickBar.tsx';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanForEnquiry, setSelectedPlanForEnquiry] = useState<string>('General Enquiry');

  const handleOpenEnquiry = (planName?: string) => {
    setSelectedPlanForEnquiry(planName || 'General Enquiry');
    setIsModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-100 flex flex-col font-sans selection:bg-red-600 selection:text-white pb-14 sm:pb-0">
      {/* 1. Header Navigation conforming to Top Bar Contract */}
      <Header onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Homepage / Dramatic Hero */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* 2. About the Gym */}
        <About />

        {/* 3. Training and Facilities */}
        <TrainingFacilities onOpenEnquiry={handleOpenEnquiry} />

        {/* 4. Customer Reviews & Transparent 'Things to Consider' */}
        <Reviews />

        {/* 5. Membership Plans with Editable Price Placeholders */}
        <Membership onOpenEnquiry={handleOpenEnquiry} />

        {/* 6. Gym Gallery & Iron Atmosphere */}
        <Gallery />

        {/* 7. Contact, Location & Google Maps */}
        <ContactLocation />
      </main>

      {/* 8. Comprehensive Footer */}
      <Footer />

      {/* Interactive Modal for Enquiries and WhatsApp */}
      <EnquiryModal
        isOpen={isModalOpen}
        initialPlan={selectedPlanForEnquiry}
        onClose={handleCloseEnquiry}
      />

      {/* High-Converting Mobile Bottom Bar (<15% screen height) */}
      <MobileQuickBar />
    </div>
  );
}

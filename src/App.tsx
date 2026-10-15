/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/home/HeroSection';
import { CommunityIntro } from './components/home/CommunityIntro';
import { TrekDiscovery } from './components/home/TrekDiscovery';
import { RegionShowcase } from './components/home/RegionShowcase';
import { CategoryShowcase } from './components/home/CategoryShowcase';
import { WhyTrekWithUs } from './components/home/WhyTrekWithUs';
import { CommunityStories } from './components/home/CommunityStories';
import { AdventureGallery } from './components/home/AdventureGallery';
import { SafetySection } from './components/home/SafetySection';
import { MembershipSection } from './components/home/MembershipSection';
import { BookingEnquirySection } from './components/home/BookingEnquirySection';
import { InstagramShowcase } from './components/home/InstagramShowcase';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { TrekDetailModal } from './components/trek/TrekDetailModal';
import { Trek, TrekRegion, TrekCategory } from './types';

export default function App() {
  const [selectedTrekForModal, setSelectedTrekForModal] = useState<Trek | null>(null);
  const [enquiryTrek, setEnquiryTrek] = useState<Trek | null>(null);
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<TrekRegion | 'All'>('All');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<TrekCategory | 'All'>('All');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegionClick = (region: TrekRegion) => {
    setSelectedRegionFilter(region);
    scrollToSection('treks');
  };

  const handleCategoryClick = (category: TrekCategory) => {
    setSelectedCategoryFilter(category);
    scrollToSection('treks');
  };

  const handleStartBookingEnquiry = (trek: Trek) => {
    setEnquiryTrek(trek);
    scrollToSection('enquiry');
  };

  return (
    <div className="min-h-screen bg-[#0b110e] text-[#edebe4] flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Navigation */}
      <Navbar
        onJoinClick={() => scrollToSection('treks')}
        onNavigateSection={scrollToSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreTreks={() => scrollToSection('treks')}
          onOpenEnquiry={() => scrollToSection('enquiry')}
        />

        {/* 2. Community Introduction */}
        <CommunityIntro
          onLearnMore={() => scrollToSection('safety')}
          onExploreCommunityStories={() => scrollToSection('community')}
        />

        {/* 3. Upcoming Treks Discovery (12 circuits) */}
        <TrekDiscovery
          onSelectTrek={(trek) => setSelectedTrekForModal(trek)}
          selectedRegionFilter={selectedRegionFilter}
          selectedCategoryFilter={selectedCategoryFilter}
        />

        {/* 4. Explore by Region */}
        <RegionShowcase onSelectRegion={handleRegionClick} />

        {/* 5. Trek Categories */}
        <CategoryShowcase onSelectCategory={handleCategoryClick} />

        {/* 6. Why Trek With Us */}
        <WhyTrekWithUs />

        {/* 7. Community Stories */}
        <CommunityStories />

        {/* 8. Adventure Photo Gallery & Lightbox */}
        <AdventureGallery />

        {/* 9. Mountain Safety & LNT Code */}
        <SafetySection />

        {/* 10. Community Membership & WhatsApp Join */}
        <MembershipSection />

        {/* 11. Trek Booking Enquiry Form */}
        <BookingEnquirySection preselectedTrek={enquiryTrek} />

        {/* 12. Instagram Dispatches */}
        <InstagramShowcase />
      </main>

      {/* Footer */}
      <Footer onNavigateSection={scrollToSection} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Dedicated Trek Detail Modal */}
      {selectedTrekForModal && (
        <TrekDetailModal
          trek={selectedTrekForModal}
          onClose={() => setSelectedTrekForModal(null)}
          onBookEnquiry={handleStartBookingEnquiry}
        />
      )}
    </div>
  );
}

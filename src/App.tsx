import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { WelcomeSection } from './components/WelcomeSection';
import { TheStaySection } from './components/TheStaySection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { BreakfastSection } from './components/BreakfastSection';
import { PoolSection } from './components/PoolSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { DetailsSection } from './components/DetailsSection';
import { PracticalInfoSection } from './components/PracticalInfoSection';
import { LocationSection } from './components/LocationSection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';
import { DetailItem } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState<DetailItem | null>(null);

  return (
    <div className="relative min-h-screen bg-[#F7F4EE] text-[#1C1917] selection:bg-[#3D4833] selection:text-[#F7F4EE]">
      {/* Signature Visual Effect: Subtle Photographic Film Grain Overlay */}
      <div className="grain-overlay pointer-events-none" aria-hidden="true" />

      {/* Top Editorial Navigation */}
      <Navigation onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Content Flow: Editorial Hospitality Narrative */}
      <main>
        {/* Section 01: Welcome */}
        <WelcomeSection />

        {/* Section 02: The Stay */}
        <TheStaySection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Section 03: Amenities */}
        <AmenitiesSection />

        {/* Section 04: Breakfast */}
        <BreakfastSection />

        {/* Section 05: Pool (Pause & Stillness) */}
        <PoolSection />

        {/* Section 06: Sustainability */}
        <SustainabilitySection />

        {/* Section 07: The Details */}
        <DetailsSection onSelectDetail={(item) => setSelectedDetail(item)} />

        {/* Section 08: Practical Information */}
        <PracticalInfoSection />

        {/* Section 09: Location */}
        <LocationSection />

        {/* Section 10: Reservation Call */}
        <ReservationSection onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Section 11: Editorial Publication Colophon & Footer */}
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Interactive Detail Lightbox Modal */}
      <LightboxModal
        item={selectedDetail}
        onClose={() => setSelectedDetail(null)}
      />
    </div>
  );
}

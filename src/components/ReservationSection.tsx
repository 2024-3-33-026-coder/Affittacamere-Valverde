import React from 'react';
import { ArrowRight, Calendar, Phone } from 'lucide-react';
import { PROPERTY_INFO } from '../data/valverdeData';
import { EditorialVisual } from './EditorialVisual';

interface ReservationSectionProps {
  onOpenBooking: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ onOpenBooking }) => {
  const scrollToAmenities = () => {
    const el = document.getElementById('amenities');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-28 md:py-40 bg-[#181715] text-[#F7F4EE] overflow-hidden">
      {/* Background Visual Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-25">
        <EditorialVisual
          type="landscape"
          imgSrc="/assets/images/valverde-exterior.jpg"
          aspect="16:9"
          className="w-full h-full !aspect-auto"
          altText="Atmospheric stone guesthouse and landscape at Affittacamere Valverde in Loc. Vessus"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-[#181715]/80 to-[#141311]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-sans block">
              RESERVATION
            </span>

            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-white">
              MAKE ROOM <br />
              <span className="italic font-light text-[#E0D8CB]">FOR A SLOWER DAY.</span>
            </h2>

            <div className="w-16 h-[1px] bg-[#C49A45]/70 my-2" />

            <p className="text-base sm:text-lg md:text-xl text-[#D1C9BC] font-light max-w-2xl leading-relaxed">
              A comfortable stay, simple amenities, and a quieter pace. Inquire directly for your dates in Loc. Vessus.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-4 bg-[#F7F4EE] hover:bg-white text-[#181715] text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
              >
                <span>BOOK YOUR STAY</span>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={scrollToAmenities}
                className="px-6 py-4 border border-white/25 hover:border-white/60 text-[#D8CFBF] hover:text-white text-xs tracking-[0.16em] uppercase transition-colors flex items-center justify-center cursor-pointer whitespace-nowrap"
              >
                VIEW AMENITIES
              </button>
            </div>
          </div>

          {/* Right Direct Contact Card */}
          <div className="lg:col-span-4 bg-[#201E1B] border border-white/10 p-8 shadow-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C49A45] font-sans block mb-3">
              DIRECT ASSISTANCE
            </span>
            <h3 className="font-serif text-2xl text-white mb-2">
              Speak with us directly
            </h3>
            <p className="text-xs text-[#A8A29E] font-light leading-relaxed mb-6">
              Have questions about your arrival, room setup, or dates? Reach us directly via phone.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#78716C] block">
                  PHONE
                </span>
                <a
                  href={`tel:${PROPERTY_INFO.phoneRaw}`}
                  className="font-serif text-xl text-white hover:text-[#C49A45] transition-colors"
                >
                  {PROPERTY_INFO.phone}
                </a>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#78716C] block">
                  TIMINGS
                </span>
                <span className="text-xs text-[#D8CFBF]">
                  Check-in 16:00 · Check-out 11:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

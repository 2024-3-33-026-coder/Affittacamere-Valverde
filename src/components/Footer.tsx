import React from 'react';
import { PROPERTY_INFO } from '../data/valverdeData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#F7F4EE] text-[#1C1917] pt-24 pb-16 border-t border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Masthead Brand */}
        <div className="border-b border-[#E5DFD3] pb-16 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#78716C] font-sans block mb-3">
                GUESTHOUSE / AFFITTACAMERE
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.06em] text-[#1C1917] leading-none">
                AFFITTACAMERE<br />
                VALVERDE
              </h2>
            </div>
            <div className="max-w-xs">
              <p className="font-serif italic text-2xl text-[#535D43]">
                “A quiet stay in Loc. Vessus, Italy.”
              </p>
              <p className="text-xs text-[#78716C] font-sans tracking-wide mt-2">
                A calmer place to arrive. A simpler way to stay.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Column Editorial Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-[#E5DFD3]">
          {/* Col 1: Links */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#78716C] font-sans block mb-4">
              INDEX
            </span>
            <ul className="space-y-3 text-sm font-serif">
              <li>
                <a href="#stay" className="hover:text-[#3D4833] transition-colors">
                  Stay & Accommodation
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#3D4833] transition-colors">
                  Essentials & Amenities
                </a>
              </li>
              <li>
                <a href="#breakfast" className="hover:text-[#3D4833] transition-colors">
                  Complimentary Breakfast
                </a>
              </li>
              <li>
                <a href="#sustainability" className="hover:text-[#3D4833] transition-colors">
                  Environmental Commitments
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#3D4833] transition-colors">
                  Directions & Location
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-[#3D4833] font-medium hover:underline cursor-pointer"
                >
                  Book Your Stay →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Practical */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#78716C] font-sans block mb-4">
              PRACTICAL TIMINGS
            </span>
            <div className="space-y-4 text-xs font-sans text-[#57534E]">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#A8A29E]">CHECK-IN</span>
                <span className="font-serif text-xl text-[#1C1917] tabular-nums">16:00</span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#A8A29E]">CHECK-OUT</span>
                <span className="font-serif text-xl text-[#1C1917] tabular-nums">11:00</span>
              </div>
              <p className="text-[11px] text-[#78716C] pt-2">
                Smoke-Free Property · Child-Friendly · Free Parking
              </p>
            </div>
          </div>

          {/* Col 3: Address */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#78716C] font-sans block mb-4">
              PROPERTY ADDRESS
            </span>
            <address className="not-italic text-xs font-sans text-[#57534E] leading-relaxed">
              svgregione Vessus,<br />
              Str. Vicinale Valverde, 114,<br />
              ingresso B/numero 23,<br />
              07041 Loc. Vessus, SS, Italy
            </address>
          </div>

          {/* Col 4: Contact */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#78716C] font-sans block mb-4">
              CONTACT
            </span>
            <div className="space-y-3 text-xs font-sans">
              <a
                href={`tel:${PROPERTY_INFO.phoneRaw}`}
                className="font-serif text-xl text-[#1C1917] hover:text-[#3D4833] block transition-colors"
              >
                {PROPERTY_INFO.phone}
              </a>
              <p className="text-[#78716C]">
                Available for guest questions and arrival updates.
              </p>
            </div>
          </div>
        </div>

        {/* Final Colophon & Editorial Note */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-[#78716C] font-sans">
          <div className="font-serif italic text-base text-[#1C1917]">
            STAY A LITTLE LONGER.
          </div>
          <div>
            © {new Date().getFullYear()} Affittacamere-Valverde. Loc. Vessus, SS, Italy.
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { EditorialVisual } from './EditorialVisual';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollToStay = () => {
    const el = document.getElementById('welcome');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#1E2619] text-[#F7F4EE]">
      {/* Background Visual Layer with authentic real property photography */}
      <div className="absolute inset-0 z-0">
        <EditorialVisual
          type="hero"
          imgSrc="/assets/images/valverde-hero.jpg"
          aspect="16:9"
          className="w-full h-full !aspect-auto"
          altText="Affittacamere Valverde authentic countryside exterior and landscape in Loc. Vessus, Sardinia"
        />
        {/* Editorial contrast scrims */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#182014] via-transparent to-black/40" />
      </div>

      {/* Top Editorial Annotation */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full pt-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/15 pb-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#E5DFD3] font-sans">
            <span>LOC. VESSUS</span>
            <span aria-hidden="true">·</span>
            <span>ITALY</span>
            <span aria-hidden="true">·</span>
            <span>GUESTHOUSE</span>
          </div>
          <div className="text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#D8CFBF] font-sans font-light">
            SLOW DOWN. STAY WELL.
          </div>
        </div>
      </div>

      {/* Center & Asymmetric Editorial Hero Typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full my-auto py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="block text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#D4AF37] font-sans mb-3 sm:mb-4">
              AFFITTACAMERE VALVERDE
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tight leading-[0.92] text-white max-w-3xl">
              A QUIET <br />
              <span className="italic font-light text-[#E8E2D5]">PLACE TO</span> <br />
              STAY.
            </h1>
          </div>

          {/* Right Column: Editorial premise & Call to Action */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:pl-6 border-l-0 lg:border-l border-white/20">
            <p className="text-sm md:text-base text-[#DDD7CC] font-light leading-relaxed">
              A calm, welcoming stay with breakfast, pool, free Wi-Fi, and free parking in the quiet countryside of Loc. Vessus.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 bg-[#F7F4EE] hover:bg-white text-[#1C1917] text-xs font-medium tracking-[0.18em] uppercase transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
              >
                <span>BOOK YOUR STAY</span>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={scrollToStay}
                className="px-5 py-3.5 border border-white/30 hover:border-white/70 text-[#E8E2D5] hover:text-white text-xs tracking-[0.16em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>DISCOVER THE STAY</span>
                <ArrowDown size={14} />
              </button>
            </div>

            <div className="text-[11px] text-[#BAB2A3] tracking-widest uppercase font-sans">
              Pool · Breakfast Included · Free Parking · Free Wi-Fi
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status / Pacing Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full">
        <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#DDD7CC] tracking-wider font-light gap-2">
          <div className="flex items-center gap-2">
            <span className="font-serif italic text-base">Check-in</span>
            <span className="tabular-nums">16:00</span>
            <span aria-hidden="true" className="opacity-40">/</span>
            <span className="font-serif italic text-base">Check-out</span>
            <span className="tabular-nums">11:00</span>
          </div>
          <div className="text-[#C5BBAA]">
            A quieter place to stay. A simpler way to arrive.
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Waves, Sparkles } from 'lucide-react';
import { EditorialVisual } from './EditorialVisual';

export const PoolSection: React.FC = () => {
  return (
    <section className="relative py-28 md:py-44 bg-[#1E281C] text-[#F7F4EE] overflow-hidden border-b border-[#2C3829]">
      {/* Background Cinematic Visual & Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-40">
        <EditorialVisual
          type="pool"
          imgSrc="/assets/images/valverde-pool.jpg"
          aspect="16:9"
          className="w-full h-full !aspect-auto"
          altText="Outdoor swimming pool at Affittacamere Valverde surrounded by greenery and sunlight"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161E14] via-[#1E281C]/70 to-[#161E14]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Statement Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A3B899] font-sans block">
              OUTSIDE
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-white">
              TAKE <br />
              <span className="italic font-light text-[#D5E0CE]">YOUR TIME.</span>
            </h2>

            <div className="w-16 h-[1px] bg-[#A3B899]/60 my-2" />

            <p className="text-base sm:text-lg md:text-xl text-[#D8CFBF] font-light max-w-xl leading-relaxed">
              A place to pause, cool down, and let the day move at its own pace.
            </p>

            <div className="flex items-center gap-6 pt-4 text-xs tracking-[0.2em] uppercase text-[#A3B899] font-sans">
              <span className="flex items-center gap-2">
                <Waves size={16} />
                <span>SWIMMING POOL</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>MEDITERRANEAN AIR</span>
            </div>
          </div>

          {/* Quiet Pool Visual Frame */}
          <div className="lg:col-span-5">
            <div className="p-3 bg-[#243322]/80 border border-[#3E523A] shadow-2xl backdrop-blur-xs">
              <EditorialVisual
                type="pool"
                imgSrc="/assets/images/valverde-pool.jpg"
                aspect="4:3"
                title="By the Water"
                subtitle="SUNLIGHT & REFLECTIONS"
                altText="Pool water catching Mediterranean sunlight at Affittacamere Valverde"
              />
              <div className="p-4 flex items-center justify-between text-xs text-[#B5C2AE] font-sans">
                <span>OPEN AIR & SUN LOUNGERS</span>
                <span className="italic font-serif text-sm">Loc. Vessus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { EditorialVisual } from './EditorialVisual';

export const WelcomeSection: React.FC = () => {
  return (
    <section id="welcome" className="py-24 md:py-36 bg-[#F7F4EE] text-[#1C1917] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Asymmetrical 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Typography & Prose */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#78716C] font-sans block mb-3">
                WELCOME TO VALVERDE
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight text-[#1C1917] text-balance">
                A place to <br />
                <span className="italic font-light text-[#535D43]">slow down.</span>
              </h2>
            </div>

            <div className="w-12 h-[1px] bg-[#3D4833]" />

            <div className="space-y-6 text-[#44403C] text-base md:text-lg font-light leading-relaxed max-w-xl">
              <p>
                Affittacamere-Valverde is designed around the simple pleasures of a comfortable stay: a welcoming room, an easy morning, time by the pool, and the freedom to move at your own pace.
              </p>
              <p className="text-sm md:text-base text-[#78716C]">
                Surrounded by the calm countryside of Loc. Vessus, our guesthouse offers a quiet retreat where travelers can pause, breathe in fresh Mediterranean air, and experience genuine Sardinian hospitality.
              </p>
            </div>

            {/* Editorial Annotation */}
            <div className="pt-4 border-t border-[#E5DFD3] flex items-center justify-between text-xs tracking-[0.25em] uppercase text-[#78716C] font-sans">
              <span>ARRIVE</span>
              <span aria-hidden="true">·</span>
              <span>BREATHE</span>
              <span aria-hidden="true">·</span>
              <span>STAY</span>
            </div>
          </div>

          {/* Column 2: Layered Editorial Visuals */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 w-full md:w-11/12 ml-auto shadow-sm">
              <EditorialVisual
                type="landscape"
                imgSrc="/assets/images/valverde-garden.jpg"
                aspect="4:3"
                title="Loc. Vessus, Italy"
                subtitle="GARDEN & SURROUNDINGS"
                altText="Garden and countryside surrounding Affittacamere Valverde"
              />
            </div>

            {/* Secondary overlapping vignette */}
            <div className="hidden sm:block absolute -bottom-10 -left-6 z-20 w-1/2 p-2 bg-[#F7F4EE] shadow-md border border-[#E5DFD3]">
              <EditorialVisual
                type="detail"
                imgSrc="/assets/images/valverde-detail.jpg"
                aspect="1:1"
                title="Authentic character"
                subtitle="PROPERTY DETAIL"
                altText="Authentic property detail at Affittacamere Valverde"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

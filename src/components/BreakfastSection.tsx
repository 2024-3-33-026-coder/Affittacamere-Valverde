import React from 'react';
import { Coffee, Sun, Utensils } from 'lucide-react';
import { EditorialVisual } from './EditorialVisual';

export const BreakfastSection: React.FC = () => {
  return (
    <section id="breakfast" className="py-24 md:py-36 bg-[#F3ECE1] text-[#1C1917] border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="shadow-xs border border-[#DFD6C8] bg-white overflow-hidden">
              <EditorialVisual
                type="breakfast"
                imgSrc="/assets/images/valverde-breakfast.jpg"
                aspect="4:3"
                title="Breakfast on the Balcony"
                subtitle="COMPLIMENTARY EVERY MORNING"
                altText="Complimentary breakfast table on the balcony with countryside panorama at Affittacamere Valverde"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-[#78716C] font-sans">
              <span>INCLUDED WITH EVERY STAY</span>
              <span>ORGANIC CAGE-FREE EGGS · VEGETARIAN OPTIONS</span>
            </div>
          </div>

          {/* Editorial Copy Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#A8583B] font-sans block mb-2 font-medium">
                GOOD MORNINGS
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C1917] leading-[1.05]">
                START THE DAY <br />
                <span className="italic font-light text-[#A8583B]">SLOWLY.</span>
              </h2>
            </div>

            <div className="w-12 h-[1px] bg-[#A8583B]" />

            <div className="space-y-6 text-[#57534E] text-base md:text-lg font-light leading-relaxed">
              <p className="text-lg md:text-xl font-serif text-[#1C1917] italic">
                “Complimentary breakfast is part of the stay, giving mornings a simple and welcoming rhythm.”
              </p>
              <p className="text-sm md:text-base">
                Begin your morning at your own pace before heading to the pool or exploring the surrounding landscape of Loc. Vessus. Warm coffee, unhurried seating, and the gentle light of the Italian countryside.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#DFD6C8]">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#78716C] font-sans mb-1">
                  <Coffee size={14} className="text-[#A8583B]" />
                  <span>RITUAL</span>
                </div>
                <p className="text-sm text-[#44403C] font-serif">
                  Fresh Italian coffee & tea
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#78716C] font-sans mb-1">
                  <Utensils size={14} className="text-[#A8583B]" />
                  <span>SOURCING</span>
                </div>
                <p className="text-sm text-[#44403C] font-serif">
                  Locally sourced food & produce
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

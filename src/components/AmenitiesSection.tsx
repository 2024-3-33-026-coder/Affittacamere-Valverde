import React, { useState } from 'react';
import { Check, X, Shield, Sparkles } from 'lucide-react';
import { AMENITIES } from '../data/valverdeData';
import { EditorialVisual } from './EditorialVisual';

export const AmenitiesSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL ESSENTIALS' },
    { id: 'featured', label: 'FEATURED' },
    { id: 'parking', label: 'PARKING & TRANSIT' },
    { id: 'internet', label: 'INTERNET' },
    { id: 'pools', label: 'POOLS & GROUNDS' },
    { id: 'wellness', label: 'WELLNESS' },
    { id: 'policies', label: 'POLICIES & PAYMENT' },
  ];

  const filteredAmenities =
    selectedFilter === 'all'
      ? AMENITIES
      : AMENITIES.filter((a) => a.category === selectedFilter);

  return (
    <section id="amenities" className="py-24 md:py-36 bg-[#F7F4EE] text-[#1C1917] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#78716C] font-sans block mb-2">
            ESSENTIALS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C1917] leading-[1.05]">
            EVERYTHING YOU NEED. <br />
            <span className="italic font-light text-[#535D43]">NOTHING YOU DON’T.</span>
          </h2>
          <p className="mt-6 text-[#57534E] text-base md:text-lg font-light leading-relaxed">
            Honest, transparent Italian hospitality. Clear details about what makes Affittacamere-Valverde comfortable, peaceful, and uncomplicated.
          </p>
        </div>

        {/* Filter Bar (Interactive Buttons adhering to constitution) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E5DFD3]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 text-xs font-medium tracking-[0.14em] uppercase transition-all cursor-pointer whitespace-nowrap ${
                selectedFilter === cat.id
                  ? 'bg-[#3D4833] text-[#F7F4EE]'
                  : 'bg-transparent text-[#78716C] hover:text-[#1C1917] hover:bg-[#EAE4D7]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Real Amenity Photo Triad */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-2 border border-[#E0D8CB] shadow-xs">
            <EditorialVisual
              type="room"
              imgSrc="/assets/images/valverde-room-01.jpg"
              aspect="4:3"
              title="Private Room"
              subtitle="AIR CONDITIONING & FRIDGE"
              altText="Real room with climate control at Affittacamere Valverde"
            />
          </div>
          <div className="bg-white p-2 border border-[#E0D8CB] shadow-xs">
            <EditorialVisual
              type="detail"
              imgSrc="/assets/images/valverde-bathroom.jpg"
              aspect="4:3"
              title="Private Bathroom"
              subtitle="EN-SUITE SHOWER"
              altText="Real bathroom with shower at Affittacamere Valverde"
            />
          </div>
          <div className="bg-white p-2 border border-[#E0D8CB] shadow-xs">
            <EditorialVisual
              type="pool"
              imgSrc="/assets/images/valverde-pool.jpg"
              aspect="4:3"
              title="Outdoor Pool"
              subtitle="SURROUNDED BY NATURE"
              altText="Real swimming pool at Affittacamere Valverde"
            />
          </div>
        </div>

        {/* Amenities Grid with Thin Rules & Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
          {filteredAmenities.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="py-5 border-b border-[#E8E2D5] flex items-start gap-4 transition-colors hover:border-[#3D4833]"
            >
              <div
                className={`w-6 h-6 mt-0.5 flex items-center justify-center shrink-0 ${
                  item.isAvailable
                    ? 'bg-[#3D4833]/10 text-[#3D4833]'
                    : 'bg-stone-200 text-stone-400'
                }`}
              >
                {item.isAvailable ? <Check size={14} /> : <X size={14} />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4
                    className={`font-serif text-lg tracking-wide ${
                      item.isAvailable ? 'text-[#1C1917]' : 'text-[#78716C]'
                    }`}
                  >
                    {item.name}
                  </h4>
                  <span className="text-[10px] uppercase tracking-wider text-[#A8A29E] font-sans">
                    {item.isAvailable ? 'INCLUDED' : 'NOT OFFERED'}
                  </span>
                </div>
                {item.description && (
                  <p className="text-xs text-[#57534E] font-light leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Honest Hospitality Note */}
        <div className="mt-16 p-8 bg-[#ECE6DC] border border-[#DDD5C7] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.2em] text-[#78716C] font-sans font-medium">
              TRANSPARENCY & CLARITY
            </span>
            <p className="font-serif text-xl text-[#1C1917]">
              Quiet atmosphere, smoke-free grounds, and family-friendly hospitality.
            </p>
            <p className="text-xs text-[#57534E]">
              Payment options accepted on arrival: Credit Cards, Debit Cards, and Cash (Euro).
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-sans tracking-widest text-[#3D4833] uppercase">
            <span>SELF PARKING</span>
            <span aria-hidden="true">·</span>
            <span>FREE WI-FI</span>
            <span aria-hidden="true">·</span>
            <span>POOL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

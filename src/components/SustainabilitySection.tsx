import React, { useState } from 'react';
import { SUSTAINABILITY_CATEGORIES } from '../data/valverdeData';
import { Zap, Recycle, Droplets, Leaf, Check } from 'lucide-react';
import { EditorialVisual } from './EditorialVisual';

export const SustainabilitySection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('energy');

  const iconMap: Record<string, React.ReactNode> = {
    energy: <Zap size={18} className="text-[#3D4833]" />,
    waste: <Recycle size={18} className="text-[#3D4833]" />,
    water: <Droplets size={18} className="text-[#3D4833]" />,
    sourcing: <Leaf size={18} className="text-[#3D4833]" />,
  };

  return (
    <section id="sustainability" className="py-24 md:py-36 bg-[#F7F4EE] text-[#1C1917] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-[#3D4833] font-sans block mb-2 font-medium">
              A LIGHTER FOOTPRINT
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C1917] leading-[1.05]">
              STAY WITH <br />
              <span className="italic font-light text-[#535D43]">CARE.</span>
            </h2>
            <p className="mt-6 text-[#57534E] text-base md:text-lg font-light leading-relaxed max-w-xl">
              Affittacamere-Valverde is committed to environmental sustainability through energy efficiency, waste reduction, water conservation, and responsible sourcing.
            </p>
          </div>
          <div className="lg:col-span-5 bg-white p-3 border border-[#E0D8CB] shadow-xs">
            <EditorialVisual
              type="landscape"
              imgSrc="/assets/images/valverde-landscape.jpg"
              aspect="16:9"
              title="Protected Sardinian Countryside"
              subtitle="ENVIRONMENTAL STEWARDSHIP"
              altText="Natural protected countryside environment of Affittacamere Valverde in Sardinia"
            />
          </div>
        </div>

        {/* 4 Pillars Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SUSTAINABILITY_CATEGORIES.map((cat, idx) => {
            const isSelected = selectedTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedTab(cat.id)}
                className={`p-6 text-left border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#3D4833] text-[#F7F4EE] border-[#3D4833] shadow-xs'
                    : 'bg-[#FAF8F5] text-[#1C1917] border-[#E8E2D5] hover:border-[#3D4833]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-serif italic text-lg ${isSelected ? 'text-[#C5BBAA]' : 'text-[#78716C]'}`}>
                    0{idx + 1}
                  </span>
                  <div className={`p-2 ${isSelected ? 'bg-white/10 text-white' : 'bg-[#EAE4D7] text-[#3D4833]'}`}>
                    {iconMap[cat.id]}
                  </div>
                </div>
                <h4 className="font-serif text-lg tracking-wide uppercase mb-2">
                  {cat.title}
                </h4>
                <p className={`text-xs font-sans ${isSelected ? 'text-[#D8CFBF]' : 'text-[#78716C]'}`}>
                  {cat.commitments.length} verified commitments
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Commitments for Active Pillar */}
        {SUSTAINABILITY_CATEGORIES.filter((c) => c.id === selectedTab).map((cat) => (
          <div
            key={cat.id}
            className="p-8 md:p-12 bg-white border border-[#E5DFD3] shadow-xs"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#EAE4D7] mb-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#78716C] font-sans">
                  VERIFIED ENVIRONMENTAL POLICY
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#1C1917] mt-1">
                  {cat.title}
                </h3>
              </div>
              <div className="text-xs text-[#57534E] font-sans tracking-wide">
                AFFITTACAMERE-VALVERDE · LOC. VESSUS
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {cat.commitments.map((commitment, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 py-3 border-b border-[#F2ECE1]"
                >
                  <div className="w-5 h-5 rounded-none bg-[#3D4833]/10 text-[#3D4833] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={2.5} />
                  </div>
                  <span className="font-serif text-base tracking-wide text-[#292524] uppercase">
                    {commitment}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

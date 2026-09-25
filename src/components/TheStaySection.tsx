import React, { useState } from 'react';
import { ShieldCheck, Wind, Snowflake, Bath, Sparkles } from 'lucide-react';
import { EditorialVisual } from './EditorialVisual';

interface TheStaySectionProps {
  onOpenBooking: () => void;
}

export const TheStaySection: React.FC<TheStaySectionProps> = ({ onOpenBooking }) => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [activeRoomPhoto, setActiveRoomPhoto] = useState<number>(0);

  const roomFeatures = [
    {
      title: 'Private Bathrooms & Showers',
      icon: Bath,
      desc: 'Each accommodation includes its own dedicated private bathroom with shower, clean towels, and refillable toiletry containers.',
    },
    {
      title: 'Air Conditioning & Heating',
      icon: Wind,
      desc: 'Independent, energy-efficient temperature regulation allows you to keep your room pleasantly cool on summer days or warm on quiet evenings.',
    },
    {
      title: 'In-Room Refrigerator',
      icon: Snowflake,
      desc: 'Personal refrigeration in your room keeps drinking water, local refreshments, and fruit fresh throughout your stay.',
    },
    {
      title: 'Peaceful Rest & Natural Light',
      icon: Sparkles,
      desc: 'Quiet countryside orientation with crisp bedding and gentle morning light designed for restorative, unhurried sleep.',
    },
  ];

  return (
    <section id="stay" className="py-24 md:py-36 bg-[#FAF8F5] text-[#1C1917] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#78716C] font-sans block mb-2">
              YOUR STAY
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C1917]">
              COMFORT WITHOUT <br />
              <span className="italic font-light text-[#A8583B]">COMPLICATION.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-[#57534E] font-light leading-relaxed">
            Comfortable, practical, and designed for an easy stay, with private bathrooms, air conditioning, and in-room refrigeration.
          </p>
        </div>

        {/* Main Accommodation Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Visual Showcase */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="shadow-xs border border-[#E5DFD3] overflow-hidden bg-white">
              <EditorialVisual
                type="room"
                imgSrc={
                  activeRoomPhoto === 0
                    ? '/assets/images/valverde-room-01.jpg'
                    : activeRoomPhoto === 1
                    ? '/assets/images/valverde-room-02.jpg'
                    : '/assets/images/valverde-bathroom.jpg'
                }
                aspect="4:3"
                title={
                  activeRoomPhoto === 0
                    ? 'Guest Bedroom'
                    : activeRoomPhoto === 1
                    ? 'Comfortable Twin Rest'
                    : 'Private En-Suite Bathroom'
                }
                subtitle={
                  activeRoomPhoto === 0
                    ? 'NATURAL LIGHT & CLEAN LINEN'
                    : activeRoomPhoto === 1
                    ? 'GUEST ACCOMMODATION'
                    : 'DEDICATED SHOWER & AMENITIES'
                }
                altText="Authentic guest room at Affittacamere Valverde"
              />
            </div>
            
            {/* Real photo gallery switcher */}
            <div className="mt-3 flex items-center justify-between text-xs text-[#78716C] font-sans">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveRoomPhoto(0)}
                  className={`px-3 py-1.5 text-[11px] uppercase tracking-wider transition-colors cursor-pointer ${
                    activeRoomPhoto === 0
                      ? 'bg-[#3D4833] text-white'
                      : 'bg-[#EFE9DF] text-[#57534E] hover:bg-[#E5DFD3]'
                  }`}
                >
                  BEDROOM
                </button>
                <button
                  type="button"
                  onClick={() => setActiveRoomPhoto(1)}
                  className={`px-3 py-1.5 text-[11px] uppercase tracking-wider transition-colors cursor-pointer ${
                    activeRoomPhoto === 1
                      ? 'bg-[#3D4833] text-white'
                      : 'bg-[#EFE9DF] text-[#57534E] hover:bg-[#E5DFD3]'
                  }`}
                >
                  ROOM INTERIOR
                </button>
                <button
                  type="button"
                  onClick={() => setActiveRoomPhoto(2)}
                  className={`px-3 py-1.5 text-[11px] uppercase tracking-wider transition-colors cursor-pointer ${
                    activeRoomPhoto === 2
                      ? 'bg-[#3D4833] text-white'
                      : 'bg-[#EFE9DF] text-[#57534E] hover:bg-[#E5DFD3]'
                  }`}
                >
                  PRIVATE BATHROOM
                </button>
              </div>
              <span className="hidden sm:inline-block tabular-nums text-[11px] uppercase tracking-wider">
                SMOKE-FREE PROPERTY
              </span>
            </div>
          </div>

          {/* Interactive Feature Accordion / Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs tracking-[0.2em] uppercase text-[#78716C] font-sans mb-1 block">
                IN-ROOM ESSENTIALS
              </span>
              {roomFeatures.map((feat, index) => {
                const IconComponent = feat.icon;
                const isSelected = activeFeature === index;
                return (
                  <button
                    key={feat.title}
                    onClick={() => setActiveFeature(index)}
                    className={`w-full text-left p-5 transition-all duration-300 border cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#3D4833] shadow-xs'
                        : 'bg-[#F2ECE1]/60 border-[#E8E2D5] hover:bg-white hover:border-[#D5CDC0]'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-8 h-8 flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-[#3D4833] text-white' : 'bg-[#E5DFD3] text-[#57534E]'
                        }`}
                      >
                        <IconComponent size={16} />
                      </div>
                      <h4 className="font-serif text-lg tracking-wide text-[#1C1917]">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="text-xs md:text-sm text-[#57534E] font-light leading-relaxed pl-11">
                      {feat.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Room Booking CTA Card */}
            <div className="p-6 bg-[#3D4833] text-[#F7F4EE] flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5BBAA] block">
                  READY TO ARRIVE?
                </span>
                <p className="font-serif text-xl">Inquire about availability</p>
              </div>
              <button
                onClick={onOpenBooking}
                className="px-5 py-3 bg-[#F7F4EE] hover:bg-white text-[#1C1917] text-xs font-medium tracking-[0.16em] uppercase whitespace-nowrap cursor-pointer transition-colors"
              >
                RESERVE ROOM
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { EDITORIAL_DETAILS } from '../data/valverdeData';
import { DetailItem } from '../types';
import { EditorialVisual } from './EditorialVisual';

interface DetailsSectionProps {
  onSelectDetail: (item: DetailItem) => void;
}

export const DetailsSection: React.FC<DetailsSectionProps> = ({ onSelectDetail }) => {
  return (
    <section className="py-24 md:py-36 bg-[#F3ECE1] text-[#1C1917] border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#78716C] font-sans block mb-2">
              THE DETAILS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C1917] leading-[1.05]">
              TEXTURE, SUNLIGHT <br />
              <span className="italic font-light text-[#535D43]">& STILLNESS.</span>
            </h2>
          </div>
          <p className="max-w-sm text-xs md:text-sm text-[#57534E] font-light leading-relaxed">
            Every corner of Affittacamere-Valverde reflects an unhurried pace. Click any vignette to view the full editorial study.
          </p>
        </div>

        {/* Asymmetrical Masonry Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Item 1: Large Dominant Feature (col 8) */}
          <div
            onClick={() => onSelectDetail(EDITORIAL_DETAILS[0])}
            className="md:col-span-8 group cursor-pointer bg-white p-3 border border-[#E0D8CB] shadow-xs hover:border-[#3D4833] transition-colors"
          >
            <EditorialVisual
              type="room"
              imgSrc={EDITORIAL_DETAILS[0].imgSrc}
              aspect="16:9"
              altText={EDITORIAL_DETAILS[0].title}
            />
            <div className="pt-4 pb-2 px-2 flex items-start justify-between">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#78716C] block font-sans">
                  {EDITORIAL_DETAILS[0].category}
                </span>
                <h4 className="font-serif text-xl text-[#1C1917] mt-0.5">
                  {EDITORIAL_DETAILS[0].title}
                </h4>
              </div>
              <span className="text-xs font-serif italic text-[#78716C]">Fig. 01</span>
            </div>
            <p className="px-2 pb-2 text-xs text-[#57534E] font-light">
              {EDITORIAL_DETAILS[0].caption}
            </p>
          </div>

          {/* Item 2: Vertical Portrait (col 4) */}
          <div
            onClick={() => onSelectDetail(EDITORIAL_DETAILS[1])}
            className="md:col-span-4 group cursor-pointer bg-white p-3 border border-[#E0D8CB] shadow-xs hover:border-[#3D4833] transition-colors"
          >
            <EditorialVisual
              type="landscape"
              imgSrc={EDITORIAL_DETAILS[1].imgSrc}
              aspect="3:4"
              altText={EDITORIAL_DETAILS[1].title}
            />
            <div className="pt-4 pb-2 px-2 flex items-start justify-between">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#78716C] block font-sans">
                  {EDITORIAL_DETAILS[1].category}
                </span>
                <h4 className="font-serif text-xl text-[#1C1917] mt-0.5">
                  {EDITORIAL_DETAILS[1].title}
                </h4>
              </div>
              <span className="text-xs font-serif italic text-[#78716C]">Fig. 02</span>
            </div>
            <p className="px-2 pb-2 text-xs text-[#57534E] font-light">
              {EDITORIAL_DETAILS[1].caption}
            </p>
          </div>

          {/* Item 3: Compact Square (col 4) */}
          <div
            onClick={() => onSelectDetail(EDITORIAL_DETAILS[2])}
            className="md:col-span-4 group cursor-pointer bg-white p-3 border border-[#E0D8CB] shadow-xs hover:border-[#3D4833] transition-colors"
          >
            <EditorialVisual
              type="pool"
              imgSrc={EDITORIAL_DETAILS[2].imgSrc}
              aspect="4:3"
              altText={EDITORIAL_DETAILS[2].title}
            />
            <div className="pt-4 pb-2 px-2 flex items-start justify-between">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#78716C] block font-sans">
                  {EDITORIAL_DETAILS[2].category}
                </span>
                <h4 className="font-serif text-xl text-[#1C1917] mt-0.5">
                  {EDITORIAL_DETAILS[2].title}
                </h4>
              </div>
              <span className="text-xs font-serif italic text-[#78716C]">Fig. 03</span>
            </div>
            <p className="px-2 pb-2 text-xs text-[#57534E] font-light">
              {EDITORIAL_DETAILS[2].caption}
            </p>
          </div>

          {/* Item 4: Wide Feature (col 8) */}
          <div
            onClick={() => onSelectDetail(EDITORIAL_DETAILS[3])}
            className="md:col-span-8 group cursor-pointer bg-white p-3 border border-[#E0D8CB] shadow-xs hover:border-[#3D4833] transition-colors"
          >
            <EditorialVisual
              type="breakfast"
              imgSrc={EDITORIAL_DETAILS[3].imgSrc}
              aspect="16:9"
              altText={EDITORIAL_DETAILS[3].title}
            />
            <div className="pt-4 pb-2 px-2 flex items-start justify-between">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#78716C] block font-sans">
                  {EDITORIAL_DETAILS[3].category}
                </span>
                <h4 className="font-serif text-xl text-[#1C1917] mt-0.5">
                  {EDITORIAL_DETAILS[3].title}
                </h4>
              </div>
              <span className="text-xs font-serif italic text-[#78716C]">Fig. 04</span>
            </div>
            <p className="px-2 pb-2 text-xs text-[#57534E] font-light">
              {EDITORIAL_DETAILS[3].caption}
            </p>
          </div>

          {/* Item 5 & 6: Balanced Pair (col 6 + col 6) */}
          <div
            onClick={() => onSelectDetail(EDITORIAL_DETAILS[4])}
            className="md:col-span-6 group cursor-pointer bg-white p-3 border border-[#E0D8CB] shadow-xs hover:border-[#3D4833] transition-colors"
          >
            <EditorialVisual
              type="detail"
              imgSrc={EDITORIAL_DETAILS[4].imgSrc}
              aspect="4:3"
              altText={EDITORIAL_DETAILS[4].title}
            />
            <div className="pt-4 pb-2 px-2 flex items-start justify-between">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#78716C] block font-sans">
                  {EDITORIAL_DETAILS[4].category}
                </span>
                <h4 className="font-serif text-xl text-[#1C1917] mt-0.5">
                  {EDITORIAL_DETAILS[4].title}
                </h4>
              </div>
              <span className="text-xs font-serif italic text-[#78716C]">Fig. 05</span>
            </div>
            <p className="px-2 pb-2 text-xs text-[#57534E] font-light">
              {EDITORIAL_DETAILS[4].caption}
            </p>
          </div>

          <div
            onClick={() => onSelectDetail(EDITORIAL_DETAILS[5])}
            className="md:col-span-6 group cursor-pointer bg-white p-3 border border-[#E0D8CB] shadow-xs hover:border-[#3D4833] transition-colors"
          >
            <EditorialVisual
              type="room"
              imgSrc={EDITORIAL_DETAILS[5].imgSrc}
              aspect="4:3"
              altText={EDITORIAL_DETAILS[5].title}
            />
            <div className="pt-4 pb-2 px-2 flex items-start justify-between">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#78716C] block font-sans">
                  {EDITORIAL_DETAILS[5].category}
                </span>
                <h4 className="font-serif text-xl text-[#1C1917] mt-0.5">
                  {EDITORIAL_DETAILS[5].title}
                </h4>
              </div>
              <span className="text-xs font-serif italic text-[#78716C]">Fig. 06</span>
            </div>
            <p className="px-2 pb-2 text-xs text-[#57534E] font-light">
              {EDITORIAL_DETAILS[5].caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

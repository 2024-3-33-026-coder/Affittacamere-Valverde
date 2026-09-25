import React, { useState } from 'react';
import { Clock, MapPin, Phone, Copy, Check, ExternalLink } from 'lucide-react';
import { PROPERTY_INFO } from '../data/valverdeData';

export const PracticalInfoSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(PROPERTY_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-24 md:py-36 bg-[#F7F4EE] text-[#1C1917] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#78716C] font-sans block mb-2">
            BEFORE YOU ARRIVE
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C1917] leading-[1.05]">
            EVERYTHING YOU <br />
            <span className="italic font-light text-[#535D43]">NEED TO KNOW.</span>
          </h2>
          <p className="mt-6 text-[#57534E] text-base md:text-lg font-light leading-relaxed">
            Essential operational details for an effortless arrival and departure at Affittacamere-Valverde.
          </p>
        </div>

        {/* Operational Grid with Oversized Numerals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Check-In */}
          <div className="p-8 bg-white border border-[#E5DFD3] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#78716C] font-sans mb-4">
                <Clock size={14} className="text-[#3D4833]" />
                <span>CHECK-IN</span>
              </div>
              <div className="font-serif text-6xl font-light text-[#1C1917] tabular-nums mb-3">
                {PROPERTY_INFO.checkIn}
              </div>
            </div>
            <p className="text-xs text-[#78716C] font-light">
              From 16:00. Self parking is complimentary and readily available on arrival.
            </p>
          </div>

          {/* Check-Out */}
          <div className="p-8 bg-white border border-[#E5DFD3] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#78716C] font-sans mb-4">
                <Clock size={14} className="text-[#3D4833]" />
                <span>CHECK-OUT</span>
              </div>
              <div className="font-serif text-6xl font-light text-[#1C1917] tabular-nums mb-3">
                {PROPERTY_INFO.checkOut}
              </div>
            </div>
            <p className="text-xs text-[#78716C] font-light">
              Until 11:00. Enjoy your complimentary morning breakfast at a relaxed rhythm.
            </p>
          </div>

          {/* Direct Phone */}
          <div className="p-8 bg-white border border-[#E5DFD3] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#78716C] font-sans mb-4">
                <Phone size={14} className="text-[#3D4833]" />
                <span>CONTACT PHONE</span>
              </div>
              <a
                href={`tel:${PROPERTY_INFO.phoneRaw}`}
                className="font-serif text-2xl lg:text-3xl text-[#1C1917] hover:text-[#3D4833] transition-colors block mb-3"
              >
                {PROPERTY_INFO.phone}
              </a>
            </div>
            <p className="text-xs text-[#78716C] font-light">
              Available for arrival coordination and stay inquiries.
            </p>
          </div>

          {/* Connectivity & Grounds */}
          <div className="p-8 bg-white border border-[#E5DFD3] shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#78716C] font-sans block mb-4">
                PROPERTY POLICY
              </span>
              <div className="font-serif text-2xl text-[#1C1917] mb-3">
                Smoke-Free & Child-Friendly
              </div>
            </div>
            <div className="text-xs text-[#78716C] font-sans space-y-1">
              <p>Free Wi-Fi across all spaces</p>
              <p>Payment: Cards & Cash accepted</p>
            </div>
          </div>
        </div>

        {/* Address & Direction Card */}
        <div className="p-8 md:p-10 bg-[#FAF8F5] border border-[#DDD5C7] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#78716C] font-sans mb-2">
              <MapPin size={14} className="text-[#3D4833]" />
              <span>OFFICIAL PROPERTY ADDRESS</span>
            </div>
            <p className="font-serif text-2xl md:text-3xl text-[#1C1917] leading-snug">
              {PROPERTY_INFO.address}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={handleCopyAddress}
              className="px-5 py-3 border border-[#3D4833] text-[#3D4833] hover:bg-[#3D4833] hover:text-white text-xs font-medium tracking-[0.16em] uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'ADDRESS COPIED' : 'COPY ADDRESS'}</span>
            </button>

            <a
              href={PROPERTY_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#3D4833] hover:bg-[#273020] text-[#F7F4EE] text-xs font-medium tracking-[0.16em] uppercase transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>GET DIRECTIONS</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

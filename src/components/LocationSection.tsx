import React from 'react';
import { MapPin, Phone, ArrowUpRight, Compass, Shield } from 'lucide-react';
import { PROPERTY_INFO } from '../data/valverdeData';
import { EditorialVisual } from './EditorialVisual';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 md:py-36 bg-[#F7F4EE] text-[#1C1917] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Location Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#78716C] font-sans block mb-2">
                FIND YOUR WAY HERE
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C1917] leading-[1.05]">
                COME <br />
                <span className="italic font-light text-[#535D43]">FIND US.</span>
              </h2>
            </div>

            <div className="w-12 h-[1px] bg-[#3D4833]" />

            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.2em] text-[#78716C] font-sans font-medium">
                PROPERTY ADDRESS
              </div>
              <p className="font-serif text-2xl md:text-3xl text-[#1C1917] leading-relaxed">
                svgregione Vessus,<br />
                Str. Vicinale Valverde, 114,<br />
                ingresso B/numero 23,<br />
                07041 Loc. Vessus, SS, Italy
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs uppercase tracking-[0.2em] text-[#78716C] font-sans font-medium">
                DIRECT CONTACT
              </div>
              <a
                href={`tel:${PROPERTY_INFO.phoneRaw}`}
                className="font-serif text-2xl text-[#3D4833] hover:underline inline-block"
              >
                {PROPERTY_INFO.phone}
              </a>
              <p className="text-xs text-[#78716C] font-light">
                Call us directly if you require guidance upon entering Str. Vicinale Valverde.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={PROPERTY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-[#3D4833] hover:bg-[#273020] text-[#F7F4EE] text-xs font-medium tracking-[0.18em] uppercase transition-colors"
              >
                <span>GET DIRECTIONS</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Minimalist Map & Terrain Frame + Real Landscape Photo */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="bg-[#EBE5DB] border border-[#DDD5C7] p-4 sm:p-6 shadow-xs">
              <div className="relative aspect-[4/3] bg-[#E3DDCF] border border-[#D5CDC0] overflow-hidden flex flex-col justify-between p-6">
                {/* Top Map Coordinates Header */}
                <div className="relative z-10 flex items-center justify-between text-xs text-[#78716C] font-sans tracking-widest uppercase">
                  <div className="flex items-center gap-1.5">
                    <Compass size={14} className="text-[#3D4833]" />
                    <span>SARDINIA, ITALY</span>
                  </div>
                  <span>LOC. VESSUS · 07041</span>
                </div>

                {/* Stylized topography lines */}
                <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 500 400" fill="none">
                  <path d="M0,80 Q150,60 300,100 T500,80" stroke="#8A8275" strokeWidth="1" strokeDasharray="3 3" />
                  <path d="M0,150 Q180,130 320,170 T500,140" stroke="#8A8275" strokeWidth="1" strokeDasharray="3 3" />
                  <path d="M0,230 Q160,200 340,240 T500,220" stroke="#8A8275" strokeWidth="1" strokeDasharray="3 3" />
                  <path d="M0,320 Q200,290 350,330 T500,310" stroke="#8A8275" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {/* Str. Vicinale Valverde road path */}
                  <path d="M60,380 Q150,280 250,220 T420,80" stroke="#3D4833" strokeWidth="3" strokeLinecap="round" />
                  <path d="M250,220 L310,240" stroke="#3D4833" strokeWidth="2" strokeDasharray="4 4" />
                </svg>

                {/* Pinpoint Anchor for Affittacamere Valverde */}
                <div className="relative z-10 m-auto flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#3D4833] text-white flex items-center justify-center shadow-lg animate-pulse">
                    <MapPin size={22} />
                  </div>
                  <div className="mt-3 px-3 py-1.5 bg-white/95 text-[#1C1917] text-xs font-serif tracking-wider shadow-sm border border-[#D5CDC0] text-center">
                    AFFITTACAMERE-VALVERDE
                    <div className="text-[10px] text-[#78716C] font-sans tracking-normal">
                      Ingresso B / Numero 23
                    </div>
                  </div>
                </div>

                {/* Bottom Map Note */}
                <div className="relative z-10 text-[11px] text-[#78716C] font-sans text-center">
                  Self parking available directly on site · Easy vehicle access
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-[#78716C] font-sans">
                <span>PROVINCIA DI SASSARI (SS)</span>
                <span>CHECK-IN 16:00 · CHECK-OUT 11:00</span>
              </div>
            </div>

            {/* Authentic Arrival Landscape Photo */}
            <div className="bg-white p-3 border border-[#E0D8CB] shadow-xs">
              <EditorialVisual
                type="landscape"
                imgSrc="/assets/images/valverde-landscape.jpg"
                aspect="16:9"
                title="Loc. Vessus Countryside"
                subtitle="ARRIVAL ENVIRONMENT"
                altText="Authentic surrounding landscape and hills of Loc. Vessus, Sardinia"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

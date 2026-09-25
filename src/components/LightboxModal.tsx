import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { DetailItem } from '../types';
import { EditorialVisual } from './EditorialVisual';

interface LightboxModalProps {
  item: DetailItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [item, onClose]);

  if (!item) return null;

  const visualType =
    item.id === 'morning-light' || item.id === 'fresh-linen'
      ? 'room'
      : item.id === 'by-the-water'
      ? 'pool'
      : item.id === 'before-breakfast'
      ? 'breakfast'
      : item.id === 'quiet-afternoon'
      ? 'landscape'
      : 'detail';

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-[#FAF8F5] border border-white/20 shadow-2xl overflow-hidden my-auto"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E2D5] bg-[#F7F4EE]">
          <div className="flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#78716C]">
            <span>{item.category}</span>
            <span aria-hidden="true">·</span>
            <span>AFFITTACAMERE-VALVERDE</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="p-1.5 text-[#1C1917] hover:text-[#3D4833] transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Media Frame */}
        <div className="p-4 sm:p-8 bg-[#181715]">
          <div className="max-w-2xl mx-auto shadow-2xl">
            <EditorialVisual
              type={visualType}
              imgSrc={item.imgSrc}
              aspect={item.aspect as any}
              altText={item.title}
            />
          </div>
        </div>

        {/* Editorial Captions Footer */}
        <div className="p-6 sm:p-8 bg-[#FAF8F5] border-t border-[#E8E2D5] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div className="max-w-xl">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917] mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-[#57534E] font-light leading-relaxed">
              {item.caption}
            </p>
          </div>
          <div className="text-xs text-[#78716C] font-serif italic whitespace-nowrap">
            Loc. Vessus, SS, Italy
          </div>
        </div>
      </div>
    </div>
  );
};

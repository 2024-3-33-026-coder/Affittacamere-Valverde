import React, { useState } from 'react';
import { X, Calendar, Phone, CheckCircle2, User, Mail, MessageSquare } from 'lucide-react';
import { PROPERTY_INFO } from '../data/valverdeData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    guestName: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-2xl p-6 sm:p-10 my-8 text-[#1C1917]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 bg-[#3D4833]/10 text-[#3D4833] mx-auto flex items-center justify-center">
              <CheckCircle2 size={36} />
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#3D4833] font-sans block mb-2">
                INQUIRY RECEIVED
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1917]">
                We look forward to welcoming you.
              </h3>
            </div>

            <p className="text-sm text-[#57534E] font-light max-w-md mx-auto leading-relaxed">
              Thank you, {formData.guestName || 'Guest'}. We have received your reservation inquiry for {formData.checkIn || 'your selected dates'} to {formData.checkOut}. We will confirm availability shortly via {formData.email || 'your email'}.
            </p>

            <div className="p-4 bg-[#F2ECE1] border border-[#E5DFD3] text-xs text-[#78716C] font-sans text-left max-w-md mx-auto space-y-1">
              <div><strong>Property:</strong> Affittacamere-Valverde</div>
              <div><strong>Address:</strong> {PROPERTY_INFO.address}</div>
              <div><strong>Check-In / Out:</strong> 16:00 / 11:00</div>
              <div><strong>Direct Phone:</strong> {PROPERTY_INFO.phone}</div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3.5 bg-[#3D4833] hover:bg-[#273020] text-[#F7F4EE] text-xs font-medium tracking-[0.2em] uppercase transition-colors cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#78716C] font-sans block mb-1">
                RESERVATION INQUIRY
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1917]">
                Book Your Stay
              </h3>
              <p className="text-xs text-[#57534E] font-light mt-1">
                Affittacamere-Valverde · Loc. Vessus, Italy
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#78716C] font-sans mb-1">
                    CHECK-IN DATE (FROM 16:00)
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDC0] text-sm text-[#1C1917] focus:outline-hidden focus:border-[#3D4833]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#78716C] font-sans mb-1">
                    CHECK-OUT DATE (UNTIL 11:00)
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDC0] text-sm text-[#1C1917] focus:outline-hidden focus:border-[#3D4833]"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#78716C] font-sans mb-1">
                    ADULTS
                  </label>
                  <select
                    value={formData.adults}
                    onChange={(e) => setFormData({ ...formData, adults: parseInt(e.target.value) })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDC0] text-sm text-[#1C1917] focus:outline-hidden focus:border-[#3D4833]"
                  >
                    {[1, 2, 3, 4].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Adult' : 'Adults'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#78716C] font-sans mb-1">
                    CHILDREN
                  </label>
                  <select
                    value={formData.children}
                    onChange={(e) => setFormData({ ...formData, children: parseInt(e.target.value) })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDC0] text-sm text-[#1C1917] focus:outline-hidden focus:border-[#3D4833]"
                  >
                    {[0, 1, 2, 3].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Child' : 'Children'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#78716C] font-sans mb-1">
                  FULL NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maria Rossi"
                  value={formData.guestName}
                  onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDC0] text-sm text-[#1C1917] focus:outline-hidden focus:border-[#3D4833]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#78716C] font-sans mb-1">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDC0] text-sm text-[#1C1917] focus:outline-hidden focus:border-[#3D4833]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#78716C] font-sans mb-1">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+39 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDC0] text-sm text-[#1C1917] focus:outline-hidden focus:border-[#3D4833]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#78716C] font-sans mb-1">
                  SPECIAL REQUESTS OR ARRIVAL NOTES (OPTIONAL)
                </label>
                <textarea
                  rows={2}
                  placeholder="Estimated arrival time, dietary considerations..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDC0] text-sm text-[#1C1917] focus:outline-hidden focus:border-[#3D4833]"
                />
              </div>

              {/* Verified property notice */}
              <div className="text-[11px] text-[#78716C] font-sans pt-1">
                Complimentary breakfast, pool, free Wi-Fi, and self-parking included with every stay.
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#3D4833] hover:bg-[#273020] text-[#F7F4EE] text-xs font-medium tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? 'PROCESSING INQUIRY...' : 'CONFIRM RESERVATION INQUIRY'}
                </button>
              </div>

              {/* Direct call alternate */}
              <div className="pt-3 text-center text-xs text-[#78716C]">
                Prefer to reserve by phone?{' '}
                <a
                  href={`tel:${PROPERTY_INFO.phoneRaw}`}
                  className="text-[#3D4833] font-medium underline"
                >
                  {PROPERTY_INFO.phone}
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

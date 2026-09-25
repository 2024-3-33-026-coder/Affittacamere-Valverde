import React, { useState, useEffect } from 'react';

interface NavigationProps {
  onOpenBooking: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press or screen resize >= 768px
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'STAY', href: '#stay' },
    { label: 'AMENITIES', href: '#amenities' },
    { label: 'BREAKFAST', href: '#breakfast' },
    { label: 'SUSTAINABILITY', href: '#sustainability' },
    { label: 'LOCATION', href: '#location' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 w-full max-w-full z-50 transition-all duration-300 ${
          isMobileMenuOpen
            ? 'bg-[#F7F4EE] border-b border-[#E8E2D5] py-3.5 sm:py-4 text-[#1C1917]'
            : isScrolled
            ? 'bg-[#F7F4EE] border-b border-[#E8E2D5] py-3.5 sm:py-4 text-[#1C1917] shadow-xs'
            : 'bg-gradient-to-b from-black/75 via-black/35 to-transparent py-4 sm:py-5 md:py-6 text-white'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between gap-3">
          {/* Brand: scales responsively clamp(10px, 2.8vw, 14px) on mobile, preserving serif appearance without clipping */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (isMobileMenuOpen) setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`font-serif uppercase font-normal transition-colors whitespace-nowrap shrink-0 ${
              isMobileMenuOpen || isScrolled
                ? 'text-[#1C1917] hover:text-[#3D4833]'
                : 'text-white hover:text-[#E8E2D5]'
            }`}
          >
            {/* Mobile-sized brand (< 768px) with clamp(10px, 2.8vw, 14px) */}
            <span
              className="inline-block md:hidden tracking-[0.06em] sm:tracking-[0.1em]"
              style={{ fontSize: 'clamp(10px, 2.8vw, 14px)' }}
            >
              AFFITTACAMERE-VALVERDE
            </span>
            {/* Desktop-sized brand (>= 768px) */}
            <span className="hidden md:inline-block text-[15px] lg:text-[17px] tracking-[0.16em]">
              AFFITTACAMERE-VALVERDE
            </span>
          </a>

          {/* Desktop Navigation Links (>= 768px only; hidden on mobile) */}
          <nav className="desktop-nav-item hidden md:flex items-center gap-6 lg:gap-8 text-xs tracking-[0.2em] font-medium font-sans">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-300 ${
                  isScrolled
                    ? 'text-[#44403C] hover:text-[#1C1917] after:bg-[#1C1917]'
                    : 'text-[#EFECE6] hover:text-white after:bg-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Primary Action (>= 768px only; hidden on mobile) */}
          <div className="desktop-nav-item hidden md:flex items-center">
            <button
              onClick={onOpenBooking}
              className={`px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
                isScrolled
                  ? 'bg-[#3D4833] hover:bg-[#273020] text-[#F7F4EE]'
                  : 'bg-white/90 hover:bg-white text-[#1C1917]'
              }`}
            >
              BOOK YOUR STAY
            </button>
          </div>

          {/* Mobile Right: Dedicated MENU Trigger (< 768px only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            className={`mobile-nav-trigger md:hidden px-2.5 py-1 text-xs font-sans font-medium tracking-[0.2em] uppercase transition-colors shrink-0 cursor-pointer ${
              isMobileMenuOpen || isScrolled
                ? 'text-[#1C1917] hover:text-[#3D4833]'
                : 'text-white hover:text-[#E8E2D5]'
            }`}
          >
            {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Editorial Navigation Overlay (< 768px only) */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="mobile-menu-overlay fixed inset-0 z-40 bg-[#F7F4EE] flex flex-col justify-between pt-20 pb-8 px-6 sm:px-8 md:hidden animate-menu-overlay"
        >
          {/* Top directory indicator & links */}
          <div className="flex flex-col gap-6 my-auto py-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#78716C] font-sans font-medium">
              DIRECTORY
            </span>
            <nav className="flex flex-col gap-4 sm:gap-5">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  style={{
                    animationDelay: `${idx * 40}ms`,
                  }}
                  className="animate-menu-item font-serif text-3xl sm:text-4xl text-[#1C1917] hover:text-[#3D4833] transition-colors leading-tight inline-block"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom Actions & Practical Stay Metadata */}
          <div
            className="pt-6 border-t border-[#E8E2D5] flex flex-col gap-4 animate-menu-item"
            style={{ animationDelay: '220ms' }}
          >
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 bg-[#3D4833] hover:bg-[#273020] text-[#F7F4EE] text-xs font-medium tracking-[0.2em] uppercase text-center cursor-pointer transition-colors"
            >
              BOOK YOUR STAY →
            </button>

            <div className="flex items-center justify-between text-[11px] text-[#78716C] font-sans tracking-wider pt-1">
              <span>Loc. Vessus, SS, Italy</span>
              <a href="tel:+390799736072" className="hover:underline">
                +39 079 973 6072
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Mountain, ChevronRight } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brand';

interface NavbarProps {
  onJoinClick?: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick, onNavigateSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b110e]/95 backdrop-blur-md border-b border-emerald-950/60 shadow-xl py-3'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="flex items-center gap-2.5 text-slate-100 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 group"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400 group-hover:border-amber-500/50 group-hover:text-amber-400 transition-colors">
              <Mountain className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
              {BRAND_CONFIG.name}
            </span>
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button
              onClick={() => handleNavClick('treks')}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
            >
              Upcoming Treks
            </button>
            <button
              onClick={() => handleNavClick('regions')}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
            >
              Destinations
            </button>
            <button
              onClick={() => handleNavClick('community')}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
            >
              Community
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick('safety')}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
            >
              Safety & Ethics
            </button>
            <button
              onClick={() => handleNavClick('enquiry')}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                if (onJoinClick) {
                  onJoinClick();
                } else {
                  handleNavClick('treks');
                }
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 rounded-md transition-all shadow-md hover:shadow-amber-500/20 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5" />
              Join a Trek
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg border border-emerald-900/50 bg-emerald-950/40"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[57px] bg-[#0c130f]/98 backdrop-blur-xl border-b border-emerald-950/80 px-5 py-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => handleNavClick('treks')}
              className="flex items-center justify-between text-left text-base font-medium text-slate-200 hover:text-amber-400 py-2 border-b border-emerald-950/40"
            >
              <span>Upcoming Treks</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => handleNavClick('regions')}
              className="flex items-center justify-between text-left text-base font-medium text-slate-200 hover:text-amber-400 py-2 border-b border-emerald-950/40"
            >
              <span>Destinations & Regions</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => handleNavClick('community')}
              className="flex items-center justify-between text-left text-base font-medium text-slate-200 hover:text-amber-400 py-2 border-b border-emerald-950/40"
            >
              <span>Our Tribe & Stories</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="flex items-center justify-between text-left text-base font-medium text-slate-200 hover:text-amber-400 py-2 border-b border-emerald-950/40"
            >
              <span>Adventure Gallery</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => handleNavClick('safety')}
              className="flex items-center justify-between text-left text-base font-medium text-slate-200 hover:text-amber-400 py-2 border-b border-emerald-950/40"
            >
              <span>Safety & LNT Ethics</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => handleNavClick('enquiry')}
              className="flex items-center justify-between text-left text-base font-medium text-slate-200 hover:text-amber-400 py-2 border-b border-emerald-950/40"
            >
              <span>Booking Enquiry & Contact</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>

            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onJoinClick) {
                    onJoinClick();
                  } else {
                    handleNavClick('treks');
                  }
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 rounded-md transition-colors shadow-md"
              >
                <Compass className="w-4 h-4" />
                Join a Trek Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

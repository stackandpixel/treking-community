import React from 'react';
import { Mountain, MessageSquare, Instagram, Mail, MapPin, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brand';
import { createGeneralEnquiryUrl } from '../../utils/whatsapp';

interface FooterProps {
  onNavigateSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  const handleScroll = (id: string) => {
    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#070b09] border-t border-emerald-950/70 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                <Mountain className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
                {BRAND_CONFIG.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {BRAND_CONFIG.tagline} Connecting adventure enthusiasts, solo travellers, and first-time hikers across
              the majestic Sahyadris and the high Himalayas.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400/90">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Base: {BRAND_CONFIG.baseLocation}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-[family-name:var(--font-mono)]">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleScroll('treks')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Upcoming Treks (12 Circuits)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('regions')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Maharashtra & Sahyadris
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('regions')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Himalayan Expeditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('community')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Tribe Stories & Culture
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('gallery')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Adventure Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('safety')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Leave No Trace (LNT) Safety
                </button>
              </li>
            </ul>
          </div>

          {/* Meeting Points */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-[family-name:var(--font-mono)]">
              Transit Hubs
            </h4>
            <div className="space-y-3 text-xs leading-normal">
              <div>
                <span className="font-semibold text-slate-200 block">Pune Pick-ups:</span>
                <span className="text-slate-400">BMCC College Rd (Deccan) · Shivaji Nagar · Wakad Flyover</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200 block">Mumbai Pick-ups:</span>
                <span className="text-slate-400">Dadar TT Circle · Chembur Diamond Garden · Vashi Toll Plaza</span>
              </div>
              <div className="pt-2 text-slate-500">
                <span>Timings vary by trail type (Night/Early Morning departures).</span>
              </div>
            </div>
          </div>

          {/* Community Connect */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-[family-name:var(--font-mono)]">
              Join The Tribe
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Get weekend trek announcements, packing lists, and community photos via our verified channels.
            </p>
            <div className="space-y-2.5">
              <a
                href={createGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 hover:text-white hover:border-emerald-600 transition-colors text-xs font-medium"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  WhatsApp Direct Enquiry
                </span>
                <ArrowUpRight className="w-3 h-3 text-emerald-400" />
              </a>

              <a
                href={BRAND_CONFIG.socials.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-[#141d17]/60 border border-emerald-950 text-slate-300 hover:text-white hover:border-slate-700 transition-colors text-xs font-medium"
              >
                <span className="flex items-center gap-2">
                  <Instagram className="w-3.5 h-3.5 text-amber-400" />
                  {BRAND_CONFIG.socials.instagramHandle}
                </span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{BRAND_CONFIG.socials.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo / Fictional Content Transparency Box */}
        <div className="p-4 rounded-lg bg-[#0e1712]/90 border border-emerald-950/80 mb-8 flex items-start gap-3 text-xs text-slate-400">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-slate-300">Demonstration Portfolio Notice:</span>
            <p>
              {BRAND_CONFIG.sampleDataNotice} No monetary transactions are processed online. All trek dates, fees, and
              availability are illustrative placeholders designed for community preview.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-emerald-950/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {BRAND_CONFIG.name}. Built with pride for Indian mountain lovers.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Leave No Trace</span>
            <span aria-hidden="true">·</span>
            <span>Pune & Mumbai Expeditions</span>
            <span aria-hidden="true">·</span>
            <span>Safety-First Outdoor Culture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

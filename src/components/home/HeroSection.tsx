import React from 'react';
import { Compass, Users, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brand';
import { createCommunityJoinUrl } from '../../utils/whatsapp';

interface HeroSectionProps {
  onExploreTreks: () => void;
  onOpenEnquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreTreks, onOpenEnquiry }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0a110e]">
      {/* Cinematic Background Layer with Mountain Backdrop */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        {/* Measured Scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070d0a]/95 via-[#0b1410]/85 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a110e] via-transparent to-black/50" />
        {/* Subtle Topographical Elevation Contour Lines Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a2b_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl">
          {/* Subtle Outdoors Kicker (No Pill Badges!) */}
          <div className="flex items-center gap-2.5 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-4 font-[family-name:var(--font-mono)]">
            <span className="w-6 h-[1.5px] bg-amber-400 inline-block" />
            <span>ADVENTURES ACROSS INDIA</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400">PUNE & MUMBAI WEEKENDS</span>
          </div>

          {/* Primary Display Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] font-[family-name:var(--font-display)]">
            Leave the Ordinary <span className="text-amber-400">Behind.</span>
          </h1>

          {/* Supporting Narrative Copy */}
          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed font-normal max-w-2xl">
            Discover hidden trails, climb unforgettable peaks, and meet people who share your love for the outdoors.
            From the misty fortresses of the Sahyadris to high Himalayan snow passes, find your trail and find your tribe.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreTreks}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 rounded-md transition-all shadow-lg hover:shadow-amber-500/25 whitespace-nowrap cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Upcoming Treks</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={createCommunityJoinUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold tracking-wide text-slate-100 hover:text-white bg-[#122319]/80 hover:bg-[#182f22] border border-emerald-700/50 hover:border-emerald-500 rounded-md transition-colors shadow-sm whitespace-nowrap"
            >
              <Users className="w-4 h-4 text-emerald-400" />
              <span>Join the WhatsApp Tribe</span>
            </a>
          </div>

          {/* Trust Marker Kicker */}
          <div className="flex flex-wrap items-center gap-6 mt-10 pt-6 border-t border-emerald-950/80 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Leave No Trace Certified</span>
            </div>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Solo-Traveller Friendly</span>
            </div>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Pune & Mumbai Departures</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Item Tabular Metrics Bar Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-lg bg-[#0d1712]/90 backdrop-blur-md border border-emerald-900/40">
          <div className="border-r border-emerald-950/60 pr-4 last:border-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-[family-name:var(--font-mono)] tabular-nums">
              12+
            </div>
            <div className="text-xs text-slate-400 mt-1">Curated Trek Routes</div>
          </div>

          <div className="border-r border-emerald-950/60 pr-4 last:border-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-[family-name:var(--font-mono)] tabular-nums">
              5,400<span className="text-xs font-normal text-slate-400 ml-1">ft</span>
            </div>
            <div className="text-xs text-slate-400 mt-1">Highest Sahyadri Peak</div>
          </div>

          <div className="border-r border-emerald-950/60 pr-4 last:border-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-[family-name:var(--font-mono)] tabular-nums">
              14,100<span className="text-xs font-normal text-slate-400 ml-1">ft</span>
            </div>
            <div className="text-xs text-slate-400 mt-1">Himalayan Pass Crossover</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-[family-name:var(--font-mono)] tabular-nums">
              100%
            </div>
            <div className="text-xs text-slate-400 mt-1">Leave No Trace Commitment</div>
          </div>
        </div>
      </div>
    </section>
  );
};

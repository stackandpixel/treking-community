import React from 'react';
import { Heart, Compass, Shield, Users, Sparkles, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface CommunityIntroProps {
  onLearnMore?: () => void;
  onExploreCommunityStories?: () => void;
}

export const CommunityIntro: React.FC<CommunityIntroProps> = ({ onLearnMore, onExploreCommunityStories }) => {
  return (
    <section id="community-intro" className="py-20 bg-[#080e0b] border-t border-emerald-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-emerald-900/40 shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
                alt="Trekkers taking a break on a mountain ridge"
                fallbackTitle="Tribe Gathering"
                className="w-full h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#0d1712]/90 backdrop-blur-md border border-emerald-800/40">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block font-[family-name:var(--font-mono)]">
                  Outdoor Ethos
                </span>
                <p className="text-sm text-slate-200 mt-1 italic">
                  “We walk at the pace of the slowest trekker, celebrate summits together, and leave zero trash on the sacred Sahyadri hills.”
                </p>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-[#122319] border border-emerald-700/60 p-4 rounded-lg shadow-xl max-w-[210px]">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Heart className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider">Solo-Traveller Safe</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Over 60% of our participants arrive solo and leave with lifelong mountain buddies.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold tracking-widest text-amber-400 uppercase font-[family-name:var(--font-mono)]">
              COMMUNITY PRINCIPLES
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-[family-name:var(--font-display)]">
              Not Just Treks. <span className="text-amber-400">A Tribe.</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Trail Tribe India was born out of a simple weekend realization in Pune: the mountains are magnificent,
              but exploring them with genuine, mindful people transforms an uphill hike into a lifelong memory.
            </p>

            <p className="text-base text-slate-300 leading-relaxed">
              We bring together students, young professionals, solo explorers, and weekend nature lovers.
              Whether you are nervous about your first monsoon climb or eager to tackle an 80-degree Sahyadri rock face,
              there is always an encouraging voice beside you and a hot cup of ginger chai waiting at the summit.
            </p>

            {/* Editable Community Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-[#0e1712] border border-emerald-950 flex items-start gap-3">
                <Users className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-100">Inclusive Community</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Welcoming first-timers, seasoned trekkers, and everyone in between. Respect and camaraderie above all.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#0e1712] border border-emerald-950 flex items-start gap-3">
                <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-100">Zero-Compromise Safety</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Wilderness first aid, certified leads, safety ropes on steep patches, and strict trail discipline.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#0e1712] border border-emerald-950 flex items-start gap-3">
                <Compass className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-100">Leave No Trace</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Active clean-up drives, zero littering, and strict respect for historical Maratha fort heritage.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#0e1712] border border-emerald-950 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-100">Local Village Roots</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Direct economic support to local base-village families through authentic homecooked meals and homestays.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onExploreCommunityStories}
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group cursor-pointer"
              >
                <span>Read Real Tribe Stories & Summit Logs</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

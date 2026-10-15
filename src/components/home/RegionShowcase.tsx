import React from 'react';
import { ArrowRight, Mountain, Check } from 'lucide-react';
import { REGION_CARDS } from '../../data/community';
import { TrekRegion } from '../../types';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface RegionShowcaseProps {
  onSelectRegion: (region: TrekRegion) => void;
}

export const RegionShowcase: React.FC<RegionShowcaseProps> = ({ onSelectRegion }) => {
  return (
    <section id="regions" className="py-20 bg-[#080d0a] border-t border-emerald-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-widest text-amber-400 uppercase font-[family-name:var(--font-mono)] mb-2">
              DISCOVER BY TERRAIN
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[family-name:var(--font-display)]">
              Explore India’s Great Ranges
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              From the historic basalt ramparts of the Sahyadris to high Himalayan ridges, each terrain holds its own spirit.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {REGION_CARDS.map((region) => (
            <div
              key={region.id}
              className="group flex flex-col justify-between bg-[#0d1611] rounded-2xl border border-emerald-950/90 overflow-hidden hover:border-emerald-700/60 transition-all duration-300 shadow-xl hover:-translate-y-1.5"
            >
              <div>
                {/* Region Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={region.image}
                    alt={region.title}
                    fallbackTitle={region.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1611] via-transparent to-black/30" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-semibold text-amber-400 font-[family-name:var(--font-mono)] uppercase">
                      {region.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-white drop-shadow font-[family-name:var(--font-display)]">
                      {region.title}
                    </h3>
                  </div>
                </div>

                {/* Region Content */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {region.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-emerald-950/60">
                    <span className="text-[10px] uppercase font-semibold text-slate-400 font-[family-name:var(--font-mono)]">
                      Terrain Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {region.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectRegion(region.id)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#14231a] hover:bg-amber-500 text-slate-200 hover:text-black transition-all text-xs font-semibold group/btn cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Mountain className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:text-black" />
                    Browse {region.title.split('&')[0]} Treks
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

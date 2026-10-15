import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { TREK_CATEGORIES } from '../../data/community';
import { TrekCategory } from '../../types';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface CategoryShowcaseProps {
  onSelectCategory: (category: TrekCategory) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-20 bg-[#0a110e] border-t border-emerald-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-widest text-amber-400 uppercase font-[family-name:var(--font-mono)] mb-2">
            CHOOSE YOUR ADVENTURE STYLE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[family-name:var(--font-display)]">
            Explore Trek Categories
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Whether you want a breezy Sunday beginner hike or an icy high-altitude winter expedition, find the trail that fits your mood.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TREK_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className="group relative flex flex-col justify-end h-64 rounded-xl overflow-hidden text-left border border-emerald-950 hover:border-amber-500/60 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              {/* Background Cover Image */}
              <div className="absolute inset-0 z-0">
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  fallbackTitle={category.title}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a110e] via-[#0a110e]/60 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="relative z-10 p-5 space-y-1.5">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-[family-name:var(--font-mono)] block">
                  {category.subtitle}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-[family-name:var(--font-display)]">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {category.description}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-400 group-hover:text-amber-400 transition-colors">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Explore Circuits</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

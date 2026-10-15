import React, { useState } from 'react';
import { Quote, Sparkles, MapPin, Calendar, Info } from 'lucide-react';
import { COMMUNITY_STORIES } from '../../data/community';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const CommunityStories: React.FC = () => {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);
  const currentStory = COMMUNITY_STORIES[selectedStoryIndex];

  return (
    <section id="community" className="py-20 bg-[#0a110e] border-t border-emerald-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-widest text-amber-400 uppercase font-[family-name:var(--font-mono)] mb-2">
              VOICES FROM THE TRAIL
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[family-name:var(--font-display)]">
              Tribe Stories & Summit Moments
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Real reflections on stepping out of comfort zones, tackling rocky passes, and finding outdoor companionship.
            </p>
          </div>

          {/* Sample content notice */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-900/40 text-xs text-amber-400/90 font-[family-name:var(--font-mono)]">
            <Info className="w-3.5 h-3.5" />
            <span>Sample Community Narrative Logs</span>
          </div>
        </div>

        {/* Featured Story Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0d1611] rounded-2xl border border-emerald-950 p-6 sm:p-8 shadow-xl items-center">
          {/* Story Visual */}
          <div className="lg:col-span-5 relative rounded-xl overflow-hidden aspect-[4/3] border border-emerald-950">
            <ImageWithFallback
              src={currentStory.image || ''}
              alt={currentStory.title}
              fallbackTitle={currentStory.trekName}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1611] via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200 bg-black/60 backdrop-blur-sm p-2 rounded-md">
              <span className="font-semibold text-amber-400">{currentStory.badge}</span>
              <span className="block text-[11px] text-slate-400">{currentStory.trekName}</span>
            </div>
          </div>

          {/* Story Text */}
          <div className="lg:col-span-7 space-y-5">
            <Quote className="w-8 h-8 text-emerald-500/40" />

            <h3 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-display)]">
              “{currentStory.quote}”
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {currentStory.fullStory}
            </p>

            <div className="pt-4 border-t border-emerald-950/80 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-sm font-bold text-white block">
                  {currentStory.trekkerName}
                </span>
                <span className="text-xs text-slate-400">
                  {currentStory.trekkerCity}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400 font-[family-name:var(--font-mono)]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  {currentStory.trekName}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-amber-400" />
                  {currentStory.trekDate}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Story Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {COMMUNITY_STORIES.map((story, idx) => {
            const isSelected = selectedStoryIndex === idx;
            return (
              <button
                key={story.id}
                onClick={() => setSelectedStoryIndex(idx)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#14231a] border-amber-500/70 shadow-lg'
                    : 'bg-[#0d1611]/80 border-emerald-950 hover:border-emerald-800 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-amber-400 font-[family-name:var(--font-mono)]">
                    {story.badge}
                  </span>
                  <span className="text-[10px] text-slate-500">{story.trekDate}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-200 line-clamp-1 mb-1 font-[family-name:var(--font-display)]">
                  {story.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {story.quote}
                </p>
                <div className="mt-3 text-xs font-medium text-slate-300">
                  — {story.trekkerName} ({story.trekkerCity.split(',')[1]?.trim() || 'Pune'})
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2, MapPin, Camera, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/community';
import { GalleryItem } from '../../types';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const AdventureGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Sahyadri Forts', 'Monsoon Magic', 'Himalayan Heights', 'Campsite Stars', 'Tribe Moments'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
  }, [activeLightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [activeLightboxIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, handleClose, handleNext, handlePrev]);

  const currentLightboxItem: GalleryItem | null =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-[#080d0a] border-t border-emerald-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-widest text-amber-400 uppercase font-[family-name:var(--font-mono)] mb-2">
              DISPATCHES FROM THE TRAIL
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[family-name:var(--font-display)]">
              Adventure Photo Gallery
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Unfiltered moments of Sahyadri fort climbs, mist-covered mountain valleys, and starry alpine campsites.
            </p>
          </div>

          {/* Category Filter Pills (Functional interactive buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveLightboxIndex(null);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-black font-semibold shadow-sm'
                    : 'bg-[#101b14] text-slate-400 hover:text-white border border-emerald-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className="group relative h-72 sm:h-80 rounded-xl overflow-hidden text-left border border-emerald-950 hover:border-amber-500/60 transition-all duration-300 shadow-md cursor-pointer"
            >
              <ImageWithFallback
                src={item.imageUrl}
                alt={item.title}
                fallbackTitle={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Hover Icon */}
              <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption & Location Info */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[10px] uppercase font-semibold text-amber-400 font-[family-name:var(--font-mono)] block">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-white font-[family-name:var(--font-display)]">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>{item.location}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Close photo viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-amber-500 text-white hover:text-black transition-colors cursor-pointer z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-amber-500 text-white hover:text-black transition-colors cursor-pointer z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content Wrapper */}
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative max-h-[70vh] rounded-lg overflow-hidden shadow-2xl border border-emerald-950">
              <ImageWithFallback
                src={currentLightboxItem.imageUrl}
                alt={currentLightboxItem.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            {/* Lightbox Metadata */}
            <div className="mt-4 text-center max-w-xl space-y-1.5">
              <div className="flex items-center justify-center gap-2 text-xs text-amber-400 font-[family-name:var(--font-mono)]">
                <span>{currentLightboxItem.category}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  {currentLightboxItem.location}
                </span>
              </div>
              <h4 className="text-xl font-bold text-white font-[family-name:var(--font-display)]">
                {currentLightboxItem.title}
              </h4>
              <p className="text-xs text-slate-300 italic">
                “{currentLightboxItem.caption}”
              </p>
              <div className="text-[11px] text-slate-500 pt-1">
                Photo by {currentLightboxItem.photographerCredit} · {activeLightboxIndex! + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

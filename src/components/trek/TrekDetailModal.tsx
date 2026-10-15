import React, { useState, useEffect } from 'react';
import {
  X,
  MapPin,
  Clock,
  Gauge,
  Mountain,
  Calendar,
  CheckCircle2,
  XCircle,
  MessageSquare,
  HelpCircle,
  Footprints,
  ShieldAlert,
  ChevronDown,
  Share2,
  Check,
} from 'lucide-react';
import { Trek } from '../../types';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { createTrekQuickEnquiryUrl } from '../../utils/whatsapp';

interface TrekDetailModalProps {
  trek: Trek | null;
  onClose: () => void;
  onBookEnquiry: (trek: Trek) => void;
}

export const TrekDetailModal: React.FC<TrekDetailModalProps> = ({ trek, onClose, onBookEnquiry }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'inclusions' | 'packing' | 'fitness'>('overview');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [checkedPackItems, setCheckedPackItems] = useState<Record<string, boolean>>({});
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (trek) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [trek, onClose]);

  if (!trek) return null;

  const allImages = trek.galleryImages && trek.galleryImages.length > 0
    ? trek.galleryImages
    : [trek.coverImage];

  const togglePackItem = (itemName: string) => {
    setCheckedPackItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0c1410] border border-emerald-900/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Sticky Header with Title and Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-950/80 bg-[#0c1410]/95 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-[family-name:var(--font-mono)]">
              {trek.difficulty} · {trek.durationLabel}
            </span>
            <span className="text-slate-600" aria-hidden="true">|</span>
            <span className="text-xs text-slate-400 truncate max-w-[200px] sm:max-w-md">
              {trek.destination}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-emerald-950 rounded-lg transition-colors"
              title="Share link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-emerald-950 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-6 space-y-8 scrollbar-thin">
          {/* Gallery Showcase */}
          <div>
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden border border-emerald-950">
              <ImageWithFallback
                src={allImages[activeImageIndex]}
                alt={trek.title}
                fallbackTitle={trek.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-md font-[family-name:var(--font-display)]">
                  {trek.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 mt-1 font-[family-name:var(--font-mono)]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {trek.destination} ({trek.state})
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Base: {trek.baseVillage}</span>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      activeImageIndex === idx ? 'border-amber-400 scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <ImageWithFallback src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Key Trail Specs Grid (Tabular Figures) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#09100c] border border-emerald-950">
            <div className="p-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Mountain className="w-3.5 h-3.5 text-emerald-400" />
                <span>Altitude</span>
              </div>
              <div className="text-base font-bold text-white font-[family-name:var(--font-mono)] tabular-nums">
                {trek.altitudeFt.toLocaleString('en-IN')} ft
              </div>
              <div className="text-[10px] text-slate-500">+{trek.elevationGainM}m elevation</div>
            </div>

            <div className="p-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Gauge className="w-3.5 h-3.5 text-emerald-400" />
                <span>Total Distance</span>
              </div>
              <div className="text-base font-bold text-white font-[family-name:var(--font-mono)] tabular-nums">
                ~{trek.distanceKm} km
              </div>
              <div className="text-[10px] text-slate-500">Round trip trail</div>
            </div>

            <div className="p-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Duration</span>
              </div>
              <div className="text-base font-bold text-white font-[family-name:var(--font-mono)]">
                {trek.durationLabel}
              </div>
              <div className="text-[10px] text-slate-500">{trek.durationCategory}</div>
            </div>

            <div className="p-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Best Season</span>
              </div>
              <div className="text-xs font-semibold text-slate-200 line-clamp-1">
                {trek.bestSeason.split('(')[0]}
              </div>
              <div className="text-[10px] text-slate-500">Peak weather</div>
            </div>
          </div>

          {/* Navigation Tabs (Functional interactive buttons) */}
          <div className="flex items-center gap-1.5 border-b border-emerald-950 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'overview', label: 'Overview & Highlights' },
              { id: 'itinerary', label: 'Day-wise Itinerary' },
              { id: 'inclusions', label: 'Inclusions & Exclusions' },
              { id: 'packing', label: 'Interactive Packing Checklist' },
              { id: 'fitness', label: 'Fitness & Preparation' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 text-xs font-medium rounded-t-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#122218] text-amber-400 border-b-2 border-amber-400 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-emerald-950/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-white mb-2 font-[family-name:var(--font-display)]">
                  About The Expedition
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {trek.overview}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-3 font-[family-name:var(--font-mono)]">
                  Trek Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {trek.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-lg bg-[#09110c] border border-emerald-950">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Transit & Meeting Points */}
              <div className="p-4 rounded-xl bg-[#0a120e] border border-emerald-900/40 space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-[family-name:var(--font-mono)]">
                  Meeting & Pick-up Locations
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {trek.meetingPoints.map((pt, idx) => (
                    <span key={idx} className="text-xs text-slate-300 bg-[#132018] px-3 py-1.5 rounded-md border border-emerald-950">
                      {pt}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Day-wise Itinerary */}
          {activeTab === 'itinerary' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-400">
                Detailed schedule designed for safe group pacing, adequate acclimatization, and quality time at viewpoints.
              </div>

              <div className="space-y-4">
                {trek.itinerary.map((day) => (
                  <div key={day.day} className="p-4 rounded-xl bg-[#09110c] border border-emerald-950 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center text-xs font-bold font-[family-name:var(--font-mono)]">
                          D{day.day}
                        </span>
                        <h4 className="text-sm font-bold text-white">{day.title}</h4>
                      </div>
                      {day.stayType && (
                        <span className="text-[11px] text-emerald-400 font-medium">
                          {day.stayType}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pl-8">
                      {day.description}
                    </p>
                    {day.mealsIncluded && day.mealsIncluded.length > 0 && (
                      <div className="pl-8 pt-1 flex flex-wrap gap-2 text-[11px] text-slate-400">
                        <span className="font-semibold text-slate-300">Meals:</span>
                        <span>{day.mealsIncluded.join(' · ')}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Inclusions & Exclusions */}
          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-[#09120d] border border-emerald-950 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>What’s Included</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {trek.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#0d0a0a] border border-rose-950/40 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                  <XCircle className="w-4 h-4" />
                  <span>What’s Excluded</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {trek.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 4: Interactive Packing Checklist */}
          {activeTab === 'packing' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-400">
                  Interactive trail checklist. Check off items as you pack your rucksack.
                </p>
                <button
                  onClick={() => setCheckedPackItems({})}
                  className="text-[11px] text-amber-400 hover:underline cursor-pointer"
                >
                  Reset checklist
                </button>
              </div>

              <div className="space-y-5">
                {trek.packingChecklist.map((cat, cIdx) => (
                  <div key={cIdx} className="space-y-2.5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-[family-name:var(--font-mono)]">
                      {cat.categoryName}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cat.items.map((item, iIdx) => {
                        const isChecked = !!checkedPackItems[item.name];
                        return (
                          <button
                            key={iIdx}
                            type="button"
                            onClick={() => togglePackItem(item.name)}
                            className={`flex items-start gap-3 p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                              isChecked
                                ? 'bg-emerald-950/30 border-emerald-700/60 text-slate-300'
                                : 'bg-[#09110c] border-emerald-950 text-slate-200 hover:border-emerald-800'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {}}
                              className="mt-0.5 accent-amber-500 rounded cursor-pointer"
                            />
                            <div className="text-xs">
                              <span className={isChecked ? 'line-through text-slate-500' : 'font-medium'}>
                                {item.name}
                              </span>
                              {item.mandatory && (
                                <span className="ml-1 text-[10px] text-amber-400 font-semibold">(Mandatory)</span>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 5: Fitness & Footwear Guidance */}
          {activeTab === 'fitness' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-[#09110c] border border-emerald-950 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 text-sm font-bold">
                  <Footprints className="w-4 h-4" />
                  <span>Required Fitness Level</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {trek.fitnessGuidance.recommendedLevel}
                </p>

                <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-300 pt-2 font-[family-name:var(--font-mono)]">
                  Recommended Pre-Trek Routine:
                </h5>
                <ul className="space-y-1.5 text-xs text-slate-300 pl-4 list-disc">
                  {trek.fitnessGuidance.preTrekRoutine.map((routine, idx) => (
                    <li key={idx}>{routine}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#09110c] border border-emerald-950 space-y-2">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-[family-name:var(--font-mono)]">
                  Footwear Advice
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {trek.fitnessGuidance.footwearAdvice}
                </p>
              </div>

              {/* Safety Notes */}
              <div className="p-4 rounded-xl bg-[#110e0b] border border-amber-950/60 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Safety Protocol On This Circuit</span>
                </div>
                <ul className="space-y-1 pl-4 list-disc text-slate-400">
                  {trek.safetyNotes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* FAQs Accordion */}
          {trek.faqs && trek.faqs.length > 0 && (
            <div className="pt-4 border-t border-emerald-950/80 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span>Frequently Asked Questions</span>
              </h3>
              <div className="space-y-2">
                {trek.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="rounded-lg bg-[#09110c] border border-emerald-950 overflow-hidden">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-3 text-left text-xs font-semibold text-slate-200 hover:text-amber-400 transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-3 pb-3 text-xs text-slate-400 leading-relaxed border-t border-emerald-950/40 pt-2">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Disclaimer Banner */}
          <div className="text-[11px] text-slate-500 bg-[#080d0a] p-3 rounded-lg border border-emerald-950/60">
            * Note: Sample trek details for demonstration. Final departures, transport coordination, and slots are confirmed via official Trail Tribe WhatsApp coordination.
          </div>
        </div>

        {/* Sticky Footer Action Bar */}
        <div className="px-6 py-4 border-t border-emerald-950/80 bg-[#0a120e] flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
          <div>
            <span className="text-[10px] text-slate-500 uppercase block font-[family-name:var(--font-mono)]">
              Sample Participant Fee
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-white font-[family-name:var(--font-mono)] tabular-nums">
                ₹{trek.priceInr.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-slate-400">/ person (All-inclusive)</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={createTrekQuickEnquiryUrl(trek.title, trek.destination, trek.priceInr)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/50 rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Ask on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookEnquiry(trek);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors shadow-md whitespace-nowrap cursor-pointer"
            >
              <span>Submit Enquiry Form</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

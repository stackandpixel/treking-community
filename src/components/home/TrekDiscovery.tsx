import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, MessageSquare, ArrowRight, Calendar, MapPin, Gauge, Clock, X, ChevronDown } from 'lucide-react';
import { SAMPLE_TREKS } from '../../data/treks';
import { Trek, DifficultyLevel, TrekRegion, TrekDurationCategory, TrekCategory } from '../../types';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { createTrekQuickEnquiryUrl } from '../../utils/whatsapp';

interface TrekDiscoveryProps {
  onSelectTrek: (trek: Trek) => void;
  selectedRegionFilter?: TrekRegion | 'All';
  selectedCategoryFilter?: TrekCategory | 'All';
}

export const TrekDiscovery: React.FC<TrekDiscoveryProps> = ({
  onSelectTrek,
  selectedRegionFilter = 'All',
  selectedCategoryFilter = 'All',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState<TrekRegion | 'All'>(selectedRegionFilter);
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyLevel | 'All'>('All');
  const [durationFilter, setDurationFilter] = useState<TrekDurationCategory | 'All'>('All');
  const [maxPrice, setMaxPrice] = useState<number>(15000);
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'altitude-desc'>('recommended');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Sync props when user clicked from RegionShowcase or CategoryShowcase
  React.useEffect(() => {
    if (selectedRegionFilter) {
      setRegionFilter(selectedRegionFilter);
    }
  }, [selectedRegionFilter]);

  // Difficulty badge color mapping
  const getDifficultyColor = (diff: DifficultyLevel) => {
    switch (diff) {
      case 'Easy':
        return 'text-emerald-400';
      case 'Moderate':
        return 'text-amber-400';
      case 'Challenging':
        return 'text-orange-400';
      case 'Difficult':
        return 'text-rose-400';
    }
  };

  // Filter and sort computation
  const filteredTreks = useMemo(() => {
    return SAMPLE_TREKS.filter((trek) => {
      // Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = trek.title.toLowerCase().includes(query);
        const matchesDest = trek.destination.toLowerCase().includes(query);
        const matchesState = trek.state.toLowerCase().includes(query);
        const matchesOverview = trek.overview.toLowerCase().includes(query);
        if (!matchesName && !matchesDest && !matchesState && !matchesOverview) return false;
      }

      // Region
      if (regionFilter !== 'All' && trek.region !== regionFilter) return false;

      // Difficulty
      if (difficultyFilter !== 'All' && trek.difficulty !== difficultyFilter) return false;

      // Duration
      if (durationFilter !== 'All' && trek.durationCategory !== durationFilter) return false;

      // Price
      if (trek.priceInr > maxPrice) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceInr - b.priceInr;
      if (sortBy === 'price-desc') return b.priceInr - a.priceInr;
      if (sortBy === 'altitude-desc') return b.altitudeFt - a.altitudeFt;
      return 0; // Default curated order
    });
  }, [searchQuery, regionFilter, difficultyFilter, durationFilter, maxPrice, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setRegionFilter('All');
    setDifficultyFilter('All');
    setDurationFilter('All');
    setMaxPrice(15000);
    setSortBy('recommended');
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    regionFilter !== 'All' ||
    difficultyFilter !== 'All' ||
    durationFilter !== 'All' ||
    maxPrice < 15000 ||
    sortBy !== 'recommended';

  return (
    <section id="treks" className="py-20 bg-[#0a110e] text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-widest text-amber-400 uppercase font-[family-name:var(--font-mono)] mb-2">
              CURATED EXPEDITIONS & WEEKEND GETAWAYS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[family-name:var(--font-display)]">
              Upcoming Trek Listings
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              From Sahyadri monsoons to snowy Garhwal peaks. Choose your adventure, pack your rucksack, and join our next weekend departure.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-[family-name:var(--font-mono)]">
            Showing <span className="font-bold text-amber-400">{filteredTreks.length}</span> of {SAMPLE_TREKS.length} Sample Treks
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#0e1713] border border-emerald-950 p-4 rounded-xl mb-8 space-y-4 shadow-lg">
          {/* Top row: Search input + Quick Region tabs + Advanced toggle */}
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[240px]">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by fort, peak, village, or region..."
                className="w-full pl-9 pr-8 py-2 text-sm bg-[#080d0a] border border-emerald-950/90 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Region Interactive Segmented Controls */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {(['All', 'Maharashtra & Sahyadris', 'Himalayas'] as const).map((reg) => (
                <button
                  key={reg}
                  onClick={() => setRegionFilter(reg)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    regionFilter === reg
                      ? 'bg-amber-500 text-black font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-white bg-[#132018]/60 hover:bg-[#1a2d22]'
                  }`}
                >
                  {reg === 'All' ? 'All Regions' : reg === 'Maharashtra & Sahyadris' ? 'Sahyadris' : 'Himalayas'}
                </button>
              ))}
            </div>

            {/* Toggle More Filters + Sort */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                  showAdvancedFilters || hasActiveFilters
                    ? 'border-amber-500/60 text-amber-400 bg-amber-500/10'
                    : 'border-emerald-950 text-slate-400 hover:text-white bg-[#080d0a]'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filters</span>
                {hasActiveFilters && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                )}
              </button>

              {/* Sort Selector */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="appearance-none pl-3 pr-8 py-2 text-xs font-medium bg-[#080d0a] border border-emerald-950 rounded-lg text-slate-300 focus:outline-none focus:border-amber-500 cursor-pointer"
                >
                  <option value="recommended">Featured Order</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="altitude-desc">Highest Altitude</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Collapsible Advanced Filters Tray */}
          {showAdvancedFilters && (
            <div className="pt-4 border-t border-emerald-950/80 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Difficulty Filter */}
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-2 font-[family-name:var(--font-mono)]">
                  Difficulty Level
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {(['All', 'Easy', 'Moderate', 'Challenging', 'Difficult'] as const).map((diff) => (
                    <button
                      key={diff}
                      onClick={() => setDifficultyFilter(diff)}
                      className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                        difficultyFilter === diff
                          ? 'bg-amber-500 text-black font-semibold'
                          : 'bg-[#080d0a] text-slate-400 hover:text-white border border-emerald-950'
                      }`}
                    >
                      {diff}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration Filter */}
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-2 font-[family-name:var(--font-mono)]">
                  Trip Duration
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {(['All', '1 Day', 'Weekend (2 Days)', 'Multi-Day Expedition'] as const).map((dur) => (
                    <button
                      key={dur}
                      onClick={() => setDurationFilter(dur)}
                      className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                        durationFilter === dur
                          ? 'bg-amber-500 text-black font-semibold'
                          : 'bg-[#080d0a] text-slate-400 hover:text-white border border-emerald-950'
                      }`}
                    >
                      {dur}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-medium text-slate-300 font-[family-name:var(--font-mono)]">
                    Max Price Budget
                  </label>
                  <span className="text-xs font-semibold text-amber-400 font-[family-name:var(--font-mono)] tabular-nums">
                    Up to ₹{maxPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="1200"
                  max="15000"
                  step="500"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>₹1,200</span>
                  <span>₹15,000</span>
                </div>
              </div>

              {/* Reset Action */}
              {hasActiveFilters && (
                <div className="sm:col-span-3 flex justify-end pt-2 border-t border-emerald-950/40">
                  <button
                    onClick={resetFilters}
                    className="text-xs text-amber-400 hover:text-amber-300 font-medium underline underline-offset-2"
                  >
                    Reset all filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Empty State */}
        {filteredTreks.length === 0 && (
          <div className="text-center py-16 bg-[#0e1713] rounded-xl border border-emerald-950 p-8 max-w-lg mx-auto">
            <Filter className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No Treks Match Your Filters</h3>
            <p className="text-xs text-slate-400 mb-5">
              Try adjusting your difficulty, price range, or clearing the search keyword.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-xs font-medium bg-amber-500 text-black rounded-lg hover:bg-amber-400 transition-colors font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Trek Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreks.map((trek) => (
            <article
              key={trek.id}
              className="group flex flex-col bg-[#0e1712] rounded-xl border border-emerald-950/80 hover:border-emerald-700/60 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              {/* Trek Card Image Area */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <ImageWithFallback
                  src={trek.coverImage}
                  alt={trek.title}
                  fallbackTitle={trek.title}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1712] via-transparent to-black/30" />

                {/* Region & Difficulty Metadata (Zero-Pill Discipline: Unboxed clean text) */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-semibold drop-shadow-md">
                  <span className="text-slate-100 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded">
                    {trek.destination}
                  </span>
                  <span className={`bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded font-bold ${getDifficultyColor(trek.difficulty)}`}>
                    {trek.difficulty}
                  </span>
                </div>

                {/* Slots info if configured */}
                {trek.sampleSlotsAvailable && trek.sampleSlotsAvailable < 10 && (
                  <div className="absolute bottom-2 right-3 text-[11px] font-medium text-amber-300 bg-black/70 px-2 py-0.5 rounded">
                    {trek.sampleSlotsAvailable} slots left
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata row */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-[family-name:var(--font-mono)]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {trek.durationLabel}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Gauge className="w-3 h-3 text-slate-400" />
                      {trek.distanceKm} km
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{trek.altitudeFt.toLocaleString('en-IN')} ft</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1 font-[family-name:var(--font-display)]">
                    {trek.title}
                  </h3>

                  {/* Short overview */}
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {trek.overview}
                  </p>

                  {/* Next Date & Meeting Points */}
                  <div className="mt-4 pt-3 border-t border-emerald-950/60 space-y-1.5 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">Next: {trek.scheduledDates[0] || 'Weekly Departures'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">Pick-ups: Pune & Mumbai Hubs</span>
                    </div>
                  </div>
                </div>

                {/* Pricing & Actions */}
                <div className="mt-5 pt-4 border-t border-emerald-950/80 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-[family-name:var(--font-mono)]">
                      Sample Price
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-extrabold text-white font-[family-name:var(--font-mono)] tabular-nums">
                        ₹{trek.priceInr.toLocaleString('en-IN')}
                      </span>
                      {trek.originalPriceInr && (
                        <span className="text-xs text-slate-500 line-through tabular-nums">
                          ₹{trek.originalPriceInr.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={createTrekQuickEnquiryUrl(trek.title, trek.destination, trek.priceInr)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-300 hover:text-emerald-400 hover:bg-emerald-950/80 rounded-lg border border-emerald-950 transition-colors"
                      title="Enquire on WhatsApp"
                      aria-label={`Enquire on WhatsApp about ${trek.title}`}
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                    </a>

                    <button
                      onClick={() => onSelectTrek(trek)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-black bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

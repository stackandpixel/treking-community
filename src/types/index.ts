export type DifficultyLevel = 'Easy' | 'Moderate' | 'Challenging' | 'Difficult';

export type TrekRegion =
  | 'Maharashtra & Sahyadris'
  | 'Himalayas'
  | 'Western Ghats & South'
  | 'Other Trails';

export type TrekDurationCategory = '1 Day' | 'Weekend (2 Days)' | 'Multi-Day Expedition';

export type TrekCategory =
  | 'Beginner Treks'
  | 'Weekend Treks'
  | 'Monsoon Treks'
  | 'Sunrise Treks'
  | 'Fort Treks'
  | 'Himalayan Expeditions'
  | 'Camping Adventures'
  | 'Photography Hikes';

export interface TrekItineraryDay {
  day: number;
  title: string;
  description: string;
  mealsIncluded?: string[];
  stayType?: string;
  altitudeGain?: string;
}

export interface PackingCategory {
  categoryName: string;
  items: {
    name: string;
    mandatory: boolean;
    note?: string;
  }[];
}

export interface TrekFAQ {
  question: string;
  answer: string;
}

export interface Trek {
  id: string;
  title: string;
  slug: string;
  destination: string;
  region: TrekRegion;
  state: string;
  difficulty: DifficultyLevel;
  durationLabel: string;
  durationCategory: TrekDurationCategory;
  distanceKm: number;
  altitudeFt: number;
  elevationGainM: number;
  priceInr: number;
  originalPriceInr?: number;
  scheduledDates: string[];
  sampleSlotsAvailable?: number;
  baseVillage: string;
  meetingPoints: string[];
  coverImage: string;
  galleryImages: string[];
  overview: string;
  highlights: string[];
  categoryTags: TrekCategory[];
  itinerary: TrekItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  packingChecklist: PackingCategory[];
  fitnessGuidance: {
    recommendedLevel: string;
    preTrekRoutine: string[];
    footwearAdvice: string;
  };
  safetyNotes: string[];
  faqs: TrekFAQ[];
  bestSeason: string;
}

export interface CommunityStory {
  id: string;
  title: string;
  trekkerName: string;
  trekkerCity: string;
  trekName: string;
  trekDate: string;
  quote: string;
  fullStory: string;
  avatarInitials: string;
  badge: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: 'Sahyadri Forts' | 'Monsoon Magic' | 'Himalayan Heights' | 'Campsite Stars' | 'Tribe Moments';
  imageUrl: string;
  photographerCredit: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  caption: string;
}

export interface TrekFilters {
  region: TrekRegion | 'All';
  difficulty: DifficultyLevel | 'All';
  durationCategory: TrekDurationCategory | 'All';
  category: TrekCategory | 'All';
  maxPrice: number;
  searchQuery: string;
  sortBy: 'price-asc' | 'price-desc' | 'duration-asc' | 'altitude-desc' | 'recommended';
}

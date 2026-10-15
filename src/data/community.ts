import { CommunityStory, GalleryItem, TrekCategory, TrekRegion } from '../types';

export interface CategoryCard {
  id: TrekCategory;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  trekCount: number;
}

export const TREK_CATEGORIES: CategoryCard[] = [
  {
    id: 'Beginner Treks',
    title: 'Beginner Treks',
    subtitle: 'Your First Step Into The Wild',
    description: 'Gentle gradients, supported trails, and friendly pacing for first-time hikers and solo explorers.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    trekCount: 4,
  },
  {
    id: 'Fort Treks',
    title: 'Fort Treks',
    subtitle: 'Walk Where Legends Stood',
    description: 'Ancient Maratha bastions, secret rock gates, and historic citadels carved into steep Sahyadri cliffs.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    trekCount: 6,
  },
  {
    id: 'Monsoon Treks',
    title: 'Monsoon Treks',
    subtitle: 'Cascading Waterfalls & Green Mist',
    description: 'The Western Ghats in their most breathtaking avatar with rushing streams, mossy forests, and clouds.',
    image: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80',
    trekCount: 4,
  },
  {
    id: 'Sunrise Treks',
    title: 'Sunrise Treks',
    subtitle: 'Chasing The Golden Dawn',
    description: 'Night hikes with headlamps under starry skies to watch the sunrise break above rolling cloud oceans.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    trekCount: 3,
  },
  {
    id: 'Himalayan Expeditions',
    title: 'Himalayan Expeditions',
    subtitle: 'High Altitude Snow Summits',
    description: 'Multi-day alpine expeditions, snow summits, alpine lakes, and dramatic high mountain passes.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    trekCount: 4,
  },
  {
    id: 'Weekend Treks',
    title: 'Weekend Treks',
    subtitle: 'Friday Night Escape From The City',
    description: 'Convenient 1-day and 2-day escapes designed for busy professionals and students from Pune and Mumbai.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    trekCount: 7,
  },
  {
    id: 'Camping Adventures',
    title: 'Camping Adventures',
    subtitle: 'Nights Under A Million Stars',
    description: 'Pitch tents on windswept ridges, cook together by the campfire, and unplug from digital life.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    trekCount: 6,
  },
  {
    id: 'Photography Hikes',
    title: 'Photography Hikes',
    subtitle: 'Epic Perspectives & Cloud Inversions',
    description: 'Specially paced hikes allowing landscape photographers to capture golden hour light and dramatic cliffs.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    trekCount: 6,
  },
];

export interface RegionCard {
  id: TrekRegion;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  trekCount: number;
}

export const REGION_CARDS: RegionCard[] = [
  {
    id: 'Maharashtra & Sahyadris',
    title: 'Maharashtra & Sahyadris',
    tagline: 'The Rugged Spine of the Deccan',
    description:
      'Home to over 350 hill forts, dramatic basalt escarpments, ancient Buddhist caves, and misty monsoon rainforests. Easily accessible for weekend getaways from Pune and Mumbai.',
    highlights: ['Ancient Maratha Forts', 'Monsoon Jungle Descents', 'Night Sunrise Hikes', 'Dramatic Canyons & Gorges'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    trekCount: 8,
  },
  {
    id: 'Himalayas',
    title: 'The Great Himalayas',
    tagline: 'Snow-Capped Summits & High Passes',
    description:
      'Spanning Uttarakhand and Himachal Pradesh, our Himalayan expeditions take you beyond the tree-line into sub-zero snowfields, pristine glacial tarns, and breathtaking 360-degree panoramas.',
    highlights: ['Snow Summits up to 14,000+ ft', 'Frozen Alpine Lakes', 'Scenic Pass Crossovers', 'Dense Pine & Rhododendron Forests'],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    trekCount: 4,
  },
  {
    id: 'Western Ghats & South',
    title: 'Western Ghats & South India',
    tagline: 'Biodiversity Hotspots & Rolling Sholas',
    description:
      'From the mist-soaked rainforests of Karnataka (Kudremukh, Kumara Parvatha) to the tranquil sholas of Kerala and the Nilgiris, experience lush coffee plantations and emerald mountain slopes.',
    highlights: ['UNESCO Biodiversity Hotspots', 'Emerald Shola Grasslands', 'Cloud-Covered Valleys', 'Serene Coffee Country Trails'],
    image: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80',
    trekCount: 3,
  },
];

export const COMMUNITY_STORIES: CommunityStory[] = [
  {
    id: 'story-1',
    title: 'From Office Desk to Kalsubai: My First Night Trek Solo',
    trekkerName: 'Tanvi Kulkarni',
    trekkerCity: 'Software Engineer, Pune',
    trekName: 'Kalsubai Sunrise Hike',
    trekDate: 'September 2026',
    quote:
      'I was terrified of joining solo. But within ten minutes of boarding the bus at Shivaji Nagar, I was sharing theplas, laughing at mountain stories, and had five new friends.',
    fullStory:
      'Working long hours in Hinjawadi IT Park had drained my energy. I had never done a night trek before. The Trail Tribe leaders made everyone feel welcomed immediately. Climbing those iron ladders at 4 AM under a blanket of stars, and then watching the golden Sahyadri dawn break above the clouds—it reset my entire perspective.',
    avatarInitials: 'TK',
    badge: 'First-time Solo Trekker',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'story-2',
    title: 'Walking on the Edge of the World at Konkan Kada',
    trekkerName: 'Rohan Deshpande',
    trekkerCity: 'Architect & Photographer, Mumbai',
    trekName: 'Harishchandragad Weekend',
    trekDate: 'August 2026',
    quote:
      'Standing at Konkan Kada when the afternoon clouds rise straight up the 1,800 ft vertical drop is pure magic. You realize how vast and raw the Sahyadris truly are.',
    fullStory:
      'As a photographer, I have seen photos of Konkan Kada for years. Seeing it in person with the tribe was something else. We pitched tents on the plateau, ate hot Pithla Bhakri made by the local Pachnai villagers, and spent half the night photographing the Milky Way. Trail Tribe’s Leave No Trace discipline is what impressed me most—not a single plastic wrapper was left behind.',
    avatarInitials: 'RD',
    badge: 'Landscape Photographer',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'story-3',
    title: 'Stepping into Snow for the Very First Time at Kedarkantha',
    trekkerName: 'Amanpreet Singh',
    trekkerCity: 'Product Manager, Bengaluru',
    trekName: 'Kedarkantha Winter Summit',
    trekDate: 'January 2026',
    quote:
      'When you reach that 12,500 ft summit with the sun warming your face and the prayer flags fluttering in the wind, all the steep uphill fatigue disappears.',
    fullStory:
      'Coming from Bengaluru, the cold was my biggest anxiety. The pre-trek packing briefings were so thorough that I had exactly the right layers. The trek leads monitored our oxygen levels every evening, ensured warm drinking water, and motivated us during the 3 AM summit push. I went as an anxious beginner and returned as an outdoor lover.',
    avatarInitials: 'AS',
    badge: 'Winter Expedition Graduate',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Vertical Steps of Harihar',
    location: 'Harihar Fort, Nashik',
    category: 'Sahyadri Forts',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    photographerCredit: 'Trail Tribe Archives',
    aspectRatio: 'landscape',
    caption: 'Trekkers maintaining three points of contact on the ancient 80-degree stone-cut rock steps.',
  },
  {
    id: 'gal-2',
    title: 'Lush Mist on Tamhini Ghat',
    location: 'Andharban, Mulshi',
    category: 'Monsoon Magic',
    imageUrl: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80',
    photographerCredit: 'Sameer G.',
    aspectRatio: 'portrait',
    caption: 'Deep in the heart of the Western Ghats rainforest where perpetual monsoon clouds veil the trail.',
  },
  {
    id: 'gal-3',
    title: 'Dawn Above the Cloud Ocean',
    location: 'Kalsubai Peak, 5,400 ft',
    category: 'Tribe Moments',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    photographerCredit: 'Pooja V.',
    aspectRatio: 'landscape',
    caption: 'Sunrise over Arthur Lake as the first rays of light warm the shivering summit group.',
  },
  {
    id: 'gal-4',
    title: 'Alpine Starlight at Juda Ka Taal',
    location: 'Kedarkantha Trail, Uttarakhand',
    category: 'Campsite Stars',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    photographerCredit: 'Vikram S.',
    aspectRatio: 'landscape',
    caption: 'Winter tents glowing warm against the silent snow-laden pine forest and starry night sky.',
  },
  {
    id: 'gal-5',
    title: 'Looking into Lahaul from Hampta Pass',
    location: 'Hampta Pass, 14,100 ft',
    category: 'Himalayan Heights',
    imageUrl: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80',
    photographerCredit: 'Anirudh M.',
    aspectRatio: 'landscape',
    caption: 'The sudden dramatic shift from lush green Kullu into the arid, mystical desert mountains of Spiti.',
  },
  {
    id: 'gal-6',
    title: 'Campfire Chai & Stories',
    location: 'Rajmachi Plateau, Udhewadi',
    category: 'Tribe Moments',
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    photographerCredit: 'Trail Tribe Members',
    aspectRatio: 'portrait',
    caption: 'Unwinding after an 8-hour ridge walk with hot ginger chai and village folklore.',
  },
];

export const SAFETY_PRINCIPLES = [
  {
    title: 'Leave No Trace (LNT)',
    description:
      'We pack out everything we pack in. No food wrappers, plastic bottles, or fruit peels left on trails. We organize clean-up drives on our return walks.',
  },
  {
    title: 'Certified Outdoor Leaders',
    description:
      'All expeditions are led by leaders trained in mountaineering institutes (NIM, HMI) and certified in Wilderness First Aid (WFA / CPR).',
  },
  {
    title: 'Respect Fort Heritage & Local Culture',
    description:
      'Sahyadri forts are sacred historical sites built by Chhatrapati Shivaji Maharaj. We treat structures with reverence, avoid loud speakers, and support base village homestays.',
  },
  {
    title: 'Strict Substance Policy',
    description:
      'Zero tolerance for alcohol, narcotics, or smoking on trails and transit vehicles. Clear heads make safe mountains.',
  },
  {
    title: 'Safety Equipment & First Aid Protocol',
    description:
      'We carry standardized trauma first-aid kits, pulse oximeters, emergency ropes, and maintain verified emergency contacts with local village sarpanches.',
  },
];

/**
 * Central Brand Configuration for Trail Tribe India
 * All business details, contact points, meeting locations, and social handles
 * are maintained here for single-source consistency.
 */

export interface MeetingPoint {
  city: 'Pune' | 'Mumbai';
  name: string;
  landmark: string;
  approxTime: string;
}

export const BRAND_CONFIG = {
  name: 'Trail Tribe India',
  shortName: 'Trail Tribe',
  tagline: 'Find Your Trail. Find Your Tribe.',
  subTagline: 'Discover hidden trails, climb unforgettable peaks, and meet people who share your love for the outdoors.',
  baseLocation: 'Pune, Maharashtra, India',
  
  // WhatsApp Configuration (Sample fictional number clearly labelled)
  // Official format without symbols: 919823045678
  whatsapp: {
    rawNumber: '+91 98230 45678',
    cleanNumber: '919823045678',
    // Fictional sample community invite link - falls back cleanly to direct WhatsApp chat
    communityInviteUrl: 'https://chat.whatsapp.com/sample-trail-tribe-invite',
    supportAvailability: 'Mon–Sat: 9:00 AM – 8:00 PM IST',
  },

  // Social & Web Links
  socials: {
    instagramHandle: '@trailtribeindia',
    instagramUrl: 'https://instagram.com/trailtribeindia',
    stravaClubUrl: 'https://strava.com/clubs/trailtribeindia',
    youtubeUrl: 'https://youtube.com/@trailtribeindia',
    email: 'hello@trailtribeindia.com',
  },

  // Standard Meeting & Pick-up Points
  meetingPoints: [
    {
      city: 'Pune',
      name: 'BMCC College Road',
      landmark: 'Near BMCC Main Gate, Deccan Gymkhana',
      approxTime: 'Night 10:30 PM / Early Morning 5:00 AM',
    },
    {
      city: 'Pune',
      name: 'Shivaji Nagar',
      landmark: 'Near Bank of Maharashtra, FC Road exit',
      approxTime: 'Night 10:50 PM / Early Morning 5:20 AM',
    },
    {
      city: 'Pune',
      name: 'Wakad Flyover',
      landmark: 'Under Wakad Bridge, Hinjawadi Junction',
      approxTime: 'Night 11:30 PM / Early Morning 6:00 AM',
    },
    {
      city: 'Mumbai',
      name: 'Dadar TT Circle',
      landmark: 'Opposite Swami Narayan Temple / Asiad Bus Stand',
      approxTime: 'Night 10:45 PM / Early Morning 5:00 AM',
    },
    {
      city: 'Mumbai',
      name: 'Chembur Diamond Garden',
      landmark: 'Near Diamond Garden Bus Stop, Sion-Panvel Highway',
      approxTime: 'Night 11:15 PM / Early Morning 5:30 AM',
    },
    {
      city: 'Mumbai',
      name: 'Vashi Old Toll Plaza',
      landmark: 'Below Vashi Flyover Highway Side',
      approxTime: 'Night 11:45 PM / Early Morning 6:00 AM',
    },
  ] as MeetingPoint[],

  // Important Sample Data Transparency Disclaimer
  isSampleDemonstration: true,
  sampleDataNotice:
    'Trail Tribe India is a fictional outdoor community built for demonstration. All dates, guide profiles, prices, and slot counts are sample data. Real departures require verified trail permits and certified trek leaders.',
};

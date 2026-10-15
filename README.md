# Trail Tribe India — Indian Trekker Community Web Platform

A complete, responsive, visually stunning website crafted for **Trail Tribe India**, a fictional outdoor adventure community based in Pune, Maharashtra. Designed to help people discover Sahyadri and Himalayan treks, join weekend group adventures, connect with fellow trekkers, and enquire about upcoming trips.

---

## 1. Brand Identity & Overview

- **Brand Name**: Trail Tribe India
- **Tagline**: *Find Your Trail. Find Your Tribe.*
- **Base Location**: Pune, Maharashtra, India
- **Transit Hubs**: Pune (BMCC Road, Shivaji Nagar, Wakad) & Mumbai (Dadar TT, Chembur, Vashi)
- **Primary Focus**: Sahyadri fort climbs, Western Ghats monsoon descents, and Himalayan alpine expeditions.
- **Atmosphere**: Welcoming to solo travellers and first-time hikers, rooted in Leave No Trace (LNT) wilderness ethics and local village homestay partnerships.

---

## 2. Key Features

1. **Top Bar Contract Navigation**: Strict single-line wordmark, concise links, and working mobile navigation drawer.
2. **Cinematic Hero**: Mountain ridge sunrise visuals, outdoors value proposition, and quick 4-column metric strip with tabular figures.
3. **Community Ethos ("Not Just Treks. A Tribe.")**: Authentic group adventure values and safety commitments.
4. **Interactive Trek Discovery Engine**:
   - **12 Sample Trek Circuits** (Rajmachi, Harishchandragad, Kalsubai Peak, Lohagad, Torna, Andharban, Harihar, Sandhan Valley, Kedarkantha, Brahmatal, Triund, Hampta Pass).
   - Real-time text search (peaks, forts, base villages).
   - Filter by Region (Maharashtra / Sahyadris, Himalayas).
   - Filter by Difficulty (Easy, Moderate, Challenging, Difficult).
   - Filter by Trip Duration (1 Day, Weekend 2 Days, Multi-Day Expedition).
   - Price range budget filter & dynamic sorting (Price, Altitude).
5. **Dedicated Trek Detail Modal**:
   - Multi-image photo gallery with thumbnail switcher.
   - Altitude, elevation gain, distance, and best season metrics.
   - Day-wise detailed itinerary with meal tags and stay types.
   - Inclusions and Exclusions tabs.
   - **Interactive checkable packing checklist** for hikers to tick off gear.
   - Fitness guidance & footwear advice.
   - Safety notes & trek-specific FAQs.
   - WhatsApp quick-enquiry action button.
6. **Terrain & Category Showcases**:
   - Deep-dive into Maharashtra & Sahyadris, the Great Himalayas, and Western Ghats.
   - 8 Category cards (Fort Treks, Monsoon Trails, Sunrise Peaks, Snow Expeditions, etc.) with filter navigation.
   - Why Trek With Us (Leave No Trace, solo traveller warmth, transparent pricing).
7. **Trail Stories & Summit Dispatches**:
   - Authentic narrative logs from solo trekkers and first-timers.
8. **Interactive Adventure Gallery & Lightbox**:
   - Masonry layout with category filtering.
   - Full keyboard-accessible Lightbox modal (`←` Prev, `→` Next, `Esc` Close).
9. **Safety & Leave No Trace Code**:
   - 6 Core mountain safety principles, medical disclosures, and fort conservation ethics.
10. **Trek Booking Enquiry Form**:
    - Complete form with field validation (name, 10-digit mobile, trek selection).
    - Auto-generates official WhatsApp click-to-chat link with formatted details.
    - Transparently clarifies that no payment is taken online.
11. **WhatsApp & Instagram Integrations**:
    - Centralized phone number with automatic sanitization.
    - Floating WhatsApp button with quick-message bubble.
    - Instagram showcase with reel previews and handle link.
12. **Resilient Image Fallback System**:
    - `ImageWithFallback` component enforcing the Zero-Broken-Image Policy with styled CSS/SVG mesh fallbacks.

---

## 3. Technology Stack

- **React 19** + **TypeScript**
- **Vite**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Lucide React** (icons)
- **Zero-Pill Typography**: *Plus Jakarta Sans* (display titles) + *DM Sans* (body prose) + *JetBrains Mono* (tabular numbers & specs)

---

## 4. Central Configuration (`src/config/brand.ts`)

All business information, phone numbers, meeting locations, and social handles are maintained centrally:

```typescript
export const BRAND_CONFIG = {
  name: 'Trail Tribe India',
  tagline: 'Find Your Trail. Find Your Tribe.',
  baseLocation: 'Pune, Maharashtra, India',
  whatsapp: {
    rawNumber: '+91 98230 45678',
    cleanNumber: '919823045678',
    communityInviteUrl: 'https://chat.whatsapp.com/sample-trail-tribe-invite',
  },
  socials: {
    instagramHandle: '@trailtribeindia',
    instagramUrl: 'https://instagram.com/trailtribeindia',
    email: 'hello@trailtribeindia.com',
  },
  meetingPoints: [...],
};
```

---

## 5. Local Setup & Build Instructions

### Installation:
```bash
npm install
```

### Run Development Server:
```bash
npm run dev
# Server starts on port 3000
```

### Compile & Type-Check:
```bash
npm run build
```

---

## 6. Pre-Launch Demo Data Replacement Checklist

Before deploying for a real outdoor organization:

- [ ] **WhatsApp Number**: Replace `+91 98230 45678` in `src/config/brand.ts` with your actual WhatsApp Business number.
- [ ] **WhatsApp Community Link**: Update `communityInviteUrl` with your official WhatsApp Community group link.
- [ ] **Instagram Handle**: Replace `@trailtribeindia` with your active Instagram profile URL.
- [ ] **Departure Dates & Slots**: Synchronize the `scheduledDates` and `sampleSlotsAvailable` in `src/data/treks.ts` with real season schedules.
- [ ] **Meeting Points**: Adjust pick-up landmarks in Pune/Mumbai based on your chartered transport route.
- [ ] **Photography**: Replace stock placeholders with actual high-resolution photos and drone captures of your community batches (see `public/assets-manifest.json`).

---

## 7. Production Services & Extension Path

- **Static-Friendly**: The current frontend is completely static-compatible and can be deployed directly to Vercel, Cloudflare Pages, Netlify, or GitHub Pages.
- **Backend Integrations (When Ready)**:
  - Payment Gateways: Razorpay / Cashfree for automated INR bookings.
  - SMS & WhatsApp API: Twilio or Gupshup for automated WhatsApp confirmation receipts.
  - Database: Firebase Firestore or PostgreSQL for storing registered participant rosters and medical disclosures.

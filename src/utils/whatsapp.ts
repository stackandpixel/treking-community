import { BRAND_CONFIG } from '../config/brand';

/**
 * Normalizes phone numbers to standard international format (digits only, no '+' or spaces)
 */
export function normalizePhoneNumber(phone: string): string {
  return phone.replace(/[^\d]/g, '');
}

export interface TrekEnquiryPayload {
  trekName: string;
  region?: string;
  date?: string;
  userName?: string;
  phone?: string;
  participants?: number | string;
  experience?: string;
  questions?: string;
  preferredCity?: 'Pune' | 'Mumbai' | 'Self';
}

/**
 * Generates the official WhatsApp Click-to-Chat URL
 * Format: https://wa.me/<number>?text=<encoded_text>
 */
export function generateWhatsAppUrl(message: string, customPhone?: string): string {
  const phone = normalizePhoneNumber(customPhone || BRAND_CONFIG.whatsapp.cleanNumber);
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedText}`;
}

/**
 * WhatsApp message for a single trek enquiry card button
 */
export function createTrekQuickEnquiryUrl(trekName: string, region: string, samplePrice: number): string {
  const text = [
    `Namaste Trail Tribe India! 🌄`,
    ``,
    `I would love to know more about the upcoming batch for *${trekName}* (${region}).`,
    `Sample Listed Price: ₹${samplePrice.toLocaleString('en-IN')}`,
    ``,
    `Could you please share:`,
    `• Next available weekend dates`,
    `• Pick-up timings from Pune & Mumbai`,
    `• Detailed itinerary & booking guidelines`,
    ``,
    `Thank you! Looking forward to joining the tribe.`,
  ].join('\n');

  return generateWhatsAppUrl(text);
}

/**
 * WhatsApp message generated from the detailed Trek Booking Enquiry Form
 */
export function createDetailedEnquiryUrl(payload: TrekEnquiryPayload): string {
  const lines = [
    `Namaste Trail Tribe India! 🏔️`,
    ``,
    `*NEW TREK ENQUIRY*`,
    `• *Trek:* ${payload.trekName}`,
    payload.region ? `• *Region:* ${payload.region}` : null,
    payload.userName ? `• *Name:* ${payload.userName}` : null,
    payload.phone ? `• *Contact:* ${payload.phone}` : null,
    payload.preferredCity ? `• *Pick-up City:* ${payload.preferredCity}` : null,
    payload.date ? `• *Preferred Date / Weekend:* ${payload.date}` : null,
    payload.participants ? `• *No. of Trekkers:* ${payload.participants}` : null,
    payload.experience ? `• *Prior Experience:* ${payload.experience}` : null,
    payload.questions ? `\n*Questions / Notes:*\n"${payload.questions}"` : null,
    ``,
    `_Sent via Trail Tribe India web portal (Demonstration enquiry)_`,
  ].filter(Boolean);

  return generateWhatsAppUrl(lines.join('\n'));
}

/**
 * WhatsApp message for joining the community
 */
export function createCommunityJoinUrl(): string {
  const text = [
    `Hey Trail Tribe India! 👋`,
    ``,
    `I'd love to join the Trail Tribe WhatsApp Community to stay updated on upcoming weekend treks from Pune/Mumbai and connect with fellow outdoor enthusiasts!`,
    ``,
    `Please add me to the community announcements group.`,
  ].join('\n');

  return generateWhatsAppUrl(text);
}

/**
 * WhatsApp message for general enquiries
 */
export function createGeneralEnquiryUrl(): string {
  const text = [
    `Hi Trail Tribe India! 🌿`,
    ``,
    `I have a question regarding your group adventures and weekend trekking schedule.`,
    `Could you please guide me on how your upcoming batches work?`,
  ].join('\n');

  return generateWhatsAppUrl(text);
}

import React from 'react';
import { MessageSquare, Instagram, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Heart } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brand';
import { createCommunityJoinUrl } from '../../utils/whatsapp';

export const MembershipSection: React.FC = () => {
  const memberPerks = [
    'Early-bird notifications for limited-slot weekend Sahyadri & Himalayan treks',
    'Solo traveller ice-breakers and friendly tent-sharing coordination',
    'Free access to high-resolution community photo and video drives after every trek',
    'Weekly trail fitness tips, gear recommendations, and packing advice',
    'Volunteer invitations for mountain clean-up and Leave No Trace drives',
  ];

  return (
    <section className="py-20 bg-[#080d0a] border-t border-emerald-950/40 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-900/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0e1a13] to-[#09110c] rounded-3xl border border-emerald-800/40 p-8 sm:p-12 shadow-2xl">
          <div className="max-w-2xl mx-auto text-center space-y-4 mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase font-[family-name:var(--font-mono)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMMUNITY MEMBERSHIP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-[family-name:var(--font-display)]">
              Your Next Adventure <span className="text-amber-400">Starts Here.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              No hidden subscription fees, no spam. Join our active WhatsApp community to get upcoming batch alerts,
              meet fellow mountain enthusiasts in Pune and Mumbai, and find weekend trail buddies.
            </p>
          </div>

          {/* Member Perks Checklist */}
          <div className="max-w-xl mx-auto space-y-2.5 mb-10">
            {memberPerks.map((perk, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{perk}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={createCommunityJoinUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 rounded-lg transition-all shadow-lg hover:shadow-amber-500/20 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>Join Our WhatsApp Community</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={BRAND_CONFIG.socials.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wide text-slate-200 hover:text-white bg-[#14231a] hover:bg-[#1b2f23] border border-emerald-900 rounded-lg transition-colors whitespace-nowrap"
            >
              <Instagram className="w-4 h-4 text-amber-400" />
              <span>Follow {BRAND_CONFIG.socials.instagramHandle}</span>
            </a>
          </div>

          <div className="mt-8 text-center text-[11px] text-slate-500 font-[family-name:var(--font-mono)]">
            * Direct invite link opens WhatsApp chat with community coordinator.
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Users, Compass, ShieldCheck, HeartHandshake, Camera, FileText } from 'lucide-react';

export const WhyTrekWithUs: React.FC = () => {
  const points = [
    {
      icon: Users,
      title: 'Solo Travellers Become Lifelong Friends',
      description:
        'Over 60% of our trekkers join by themselves. Communal transit buses, campfire sharing, and summit high-fives mean you never feel alone.',
    },
    {
      icon: Compass,
      title: 'Lesser-Known Trails & Ancient Routes',
      description:
        'Beyond crowded tourist viewpoints, we explore secret water cisterns, secluded ridge walks, and ancient rock-cut stairs across the Sahyadris.',
    },
    {
      icon: ShieldCheck,
      title: 'Leave No Trace Outdoor Ethics',
      description:
        'We practice strict wilderness ethics. No single-use plastics discarded, zero trail graffiti, and dedicated trail clean-up initiatives on descent.',
    },
    {
      icon: HeartHandshake,
      title: 'Beginner-Friendly Support Systems',
      description:
        'We never leave anyone behind. With sweeps at the rear and pacing leads at the front, everyone hikes at a comfortable, safe cadence.',
    },
    {
      icon: Camera,
      title: 'Shared Photo Drives & Summit Captures',
      description:
        'High-resolution group photos and landscape captures are curated and shared via a dedicated community drive after every expedition.',
    },
    {
      icon: FileText,
      title: 'Crystal Clear Pre-Trek Briefings',
      description:
        'Detailed WhatsApp briefings, verified packing lists, weather advisories, and transit pickup coordination 48 hours before every trip.',
    },
  ];

  return (
    <section className="py-20 bg-[#080d0a] border-t border-emerald-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold tracking-widest text-amber-400 uppercase font-[family-name:var(--font-mono)] mb-2">
            WHY WALK WITH TRAIL TRIBE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[family-name:var(--font-display)]">
            Built on Outdoor Camaraderie
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            We are not a commercial tour bus agency. We are an outdoor community that cares about mountains, safety, and the people beside us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#0d1611] border border-emerald-950/90 hover:border-emerald-700/60 transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-amber-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-[family-name:var(--font-display)]">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ShieldCheck, Trash2, Mountain, AlertTriangle, HeartPulse, Compass, Users } from 'lucide-react';
import { SAFETY_PRINCIPLES } from '../../data/community';

export const SafetySection: React.FC = () => {
  const safetyRules = [
    {
      icon: Trash2,
      title: 'Leave No Trace (LNT) Discipline',
      description:
        'Pack out every scrap of food plastic, wrappers, and wet wipes. We pick up litter on our descent and preserve the pristine ecology of the Western Ghats and Himalayas.',
    },
    {
      icon: HeartPulse,
      title: 'Medical Transparency & Pacing',
      description:
        'Always inform your trek lead about any pre-existing asthma, knee conditions, or allergies before departure. We walk at a group cadence and take regular water hydration breaks.',
    },
    {
      icon: ShieldCheck,
      title: 'Three-Points-of-Contact Climbing',
      description:
        'On vertical rock-cut staircases like Harihar or ladder climbs on Kalsubai, maintain three points of contact. Never film or use selfie sticks while walking on steep exposed ridges.',
    },
    {
      icon: Mountain,
      title: 'Sacred Fort Architecture & Heritage',
      description:
        'Maharashtra hill forts are living memorials to Chhatrapati Shivaji Maharaj. We treat ramparts with utmost reverence—no defacing walls, no loud bluetooth speakers, no alcohol.',
    },
    {
      icon: AlertTriangle,
      title: 'Monsoon Stream & Weather Caution',
      description:
        'Flash floods and slippery moss require strict guide obedience. Never attempt swimming in swollen waterfalls or straying off marked trails during heavy downpours.',
    },
    {
      icon: Users,
      title: 'Support Village Homestays',
      description:
        'We partner directly with village families for authentic food and parking. Respect rural local customs, ask permission before photographing villagers, and tread softly.',
    },
  ];

  return (
    <section id="safety" className="py-20 bg-[#0a110e] border-t border-emerald-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold tracking-widest text-amber-400 uppercase font-[family-name:var(--font-mono)] mb-2">
            SAFETY & OUTDOOR CODE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[family-name:var(--font-display)]">
            Mountains Demand Respect
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Adventure is sublime when safety is non-negotiable. Here are the core principles every Trail Tribe member upholds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyRules.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#0d1611] border border-emerald-950/90 hover:border-emerald-700/60 transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-[family-name:var(--font-display)]">
                  {rule.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {rule.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Safety Disclaimer Callout */}
        <div className="mt-10 p-5 rounded-xl bg-[#111713] border border-emerald-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-300">
          <div className="space-y-1">
            <span className="font-bold text-white">Certified Leadership & Wilderness First Response</span>
            <p className="text-slate-400">
              Our leads hold NIM / HMI certifications and carry standardized trauma medical kits, pulse oximeters, and high-altitude emergency protocols.
            </p>
          </div>
          <div className="text-[11px] text-amber-400 font-[family-name:var(--font-mono)] shrink-0">
            Safety First · Tribe Always
          </div>
        </div>
      </div>
    </section>
  );
};

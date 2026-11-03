import React from 'react';
import { Dumbbell, Flame, Trophy, HeartPulse, UserCheck, Apple, ArrowUpRight, CheckCircle2, HelpCircle } from 'lucide-react';
import { TRAINING_PROGRAMS } from '../data/gymData.ts';

interface TrainingFacilitiesProps {
  onOpenEnquiry: (programName: string) => void;
}

const PROGRAM_ICONS: Record<string, React.ReactNode> = {
  'weight-training': <Dumbbell className="w-6 h-6 text-red-500" />,
  bodybuilding: <Flame className="w-6 h-6 text-red-500" />,
  'strength-training': <Trophy className="w-6 h-6 text-red-500" />,
  'cardio-workouts': <HeartPulse className="w-6 h-6 text-amber-500" />,
  'personal-training': <UserCheck className="w-6 h-6 text-amber-500" />,
  'fitness-diet-guidance': <Apple className="w-6 h-6 text-red-500" />,
};

export const TrainingFacilities: React.FC<TrainingFacilitiesProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="training" className="py-20 sm:py-28 bg-[#0A0A0A] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-red-500 font-bold uppercase text-xs sm:text-sm tracking-widest mb-3">
            Training & Programs
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-heading tracking-tight">
            Iron Disciplines & Guidance
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 mb-6" />
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed [text-wrap:balance]">
            From free weights and bodybuilding splits to nutritional pointers. Core iron facilities are available on-floor, with specialized coaching and cardio slots available upon enquiry.
          </p>

          {/* Verification Transparency Note */}
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            <span className="font-semibold text-neutral-300">Verified Core Gym Facilities</span>
            <span className="mx-2 text-neutral-600">|</span>
            <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
            <span className="font-semibold text-neutral-300">Enquiry Options (Check Availability)</span>
          </div>
        </div>

        {/* 6 Grid Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TRAINING_PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className={`p-6 sm:p-7 rounded-lg transition-all flex flex-col justify-between ${
                prog.isCoreFacility
                  ? 'bg-[#141414] border border-white/10 hover:border-red-600/40 shadow-lg'
                  : 'bg-[#121212] border border-amber-900/30 hover:border-amber-600/50 shadow-md'
              }`}
            >
              <div>
                {/* Header Row: Icon + Facility Status Badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-md bg-neutral-900 border border-white/5">
                    {PROGRAM_ICONS[prog.id]}
                  </div>
                  {prog.isCoreFacility ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-semibold uppercase tracking-wider bg-red-950/60 text-red-400 border border-red-800/40">
                      <CheckCircle2 className="w-3 h-3" />
                      Core Facility
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-semibold uppercase tracking-wider bg-amber-950/60 text-amber-400 border border-amber-800/40">
                      <HelpCircle className="w-3 h-3" />
                      Enquiry Option
                    </span>
                  )}
                </div>

                {/* Program Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold uppercase text-white font-heading tracking-tight mb-1">
                  {prog.title}
                </h3>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-3">
                  {prog.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                  {prog.description}
                </p>

                {/* Focus Areas */}
                <div className="space-y-1.5 pt-3 border-t border-white/5 mb-6">
                  {prog.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenEnquiry(prog.title)}
                className={`w-full py-2.5 px-4 rounded text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  prog.isCoreFacility
                    ? 'bg-neutral-800 hover:bg-red-600 text-white'
                    : 'bg-neutral-900 hover:bg-amber-600 text-amber-200 hover:text-white border border-amber-900/40'
                }`}
              >
                <span>{prog.isCoreFacility ? 'Enquire Training' : 'Check Availability'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Visual Spotlight Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Card 1: Equipment Spotlight */}
          <div className="relative rounded-lg overflow-hidden border border-white/10 group min-h-[260px] flex flex-col justify-end p-6 sm:p-8 bg-neutral-900">
            <img
              src="/src/assets/images/gym_equipment_iron_1793698076863.jpg"
              alt="Dumbbell racks and bodybuilding weights at Kamaraj Gym"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-1 block">
                Equipment Focus
              </span>
              <h4 className="text-2xl font-bold uppercase text-white font-heading mb-2">
                Heavy Dumbbells & Cast Iron
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-md">
                Sturdy steel racks, varied dumbbell pairs, and Olympic bars calibrated for progressive muscle stimulation.
              </p>
            </div>
          </div>

          {/* Card 2: Coaching Guidance */}
          <div className="relative rounded-lg overflow-hidden border border-white/10 group min-h-[260px] flex flex-col justify-end p-6 sm:p-8 bg-neutral-900">
            <img
              src="/src/assets/images/gym_trainer_guidance_1793698077176.jpg"
              alt="Coach guidance and form checks at Kamaraj Gym"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-1 block">
                Coach Support
              </span>
              <h4 className="text-2xl font-bold uppercase text-white font-heading mb-2">
                Approachable Trainer Guidance
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-md">
                Get spotter assistance and routine advice without high-pressure upsells.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

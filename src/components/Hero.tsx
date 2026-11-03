import React from 'react';
import { Phone, ArrowRight, MapPin, ShieldCheck, Flame } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData.ts';

interface HeroProps {
  onOpenEnquiry: (planName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Hero Image with Measured High-Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_bodybuilding_gym_1793698076733.jpg"
          alt="Kamaraj Gym authentic old-school bodybuilding and heavy iron training floor"
          className="w-full h-full object-cover object-center opacity-45 scale-105 transform motion-safe:transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer gradient scrim for 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/50" />
        <div className="absolute inset-0 bg-radial-[at_center_center] from-transparent via-[#0A0A0A]/60 to-[#0A0A0A]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center flex flex-col items-center">
        {/* Subtle Brand & Location Subtitle Indicator */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-700/40 text-red-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
          <MapPin className="w-3.5 h-3.5 text-red-500" />
          <span>Halasuru, Bengaluru · Sivanchetti Gardens</span>
        </div>

        {/* Required Dramatic Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white font-heading tracking-tight leading-[0.95] max-w-4xl [text-wrap:balance] mb-6">
          BUILT BY DISCIPLINE.
          <span className="block text-red-600 mt-1">POWERED BY STRENGTH.</span>
        </h1>

        {/* Short Introduction */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10 [text-wrap:balance]">
          Welcome to <strong className="text-white font-semibold">Kamaraj Gym</strong>. An authentic old-school bodybuilding
          and fitness center in Bengaluru dedicated to honest iron, disciplined sweat, motivating trainers, and visible physical
          progress.
        </p>

        {/* Prominent Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => onOpenEnquiry('Hero Instant Join')}
            className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white text-sm font-bold uppercase tracking-wider rounded-md transition-all shadow-xl shadow-red-950/60 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Join Now</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href={`tel:${GYM_CONTACT.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 bg-neutral-900/90 hover:bg-neutral-800 text-white text-sm font-bold uppercase tracking-wider rounded-md border border-neutral-700 hover:border-neutral-500 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-red-500" />
            <span>Call Now: {GYM_CONTACT.phoneDisplay}</span>
          </a>
        </div>

        {/* Adjacency Trust Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3">
            <div className="text-red-500 font-bold uppercase text-xs tracking-wider mb-1 flex items-center justify-center gap-1.5">
              <Flame className="w-3.5 h-3.5" />
              <span>Old-School Iron</span>
            </div>
            <p className="text-xs text-neutral-400">Barbells, plates & dumbbells</p>
          </div>

          <div className="p-3">
            <div className="text-red-500 font-bold uppercase text-xs tracking-wider mb-1 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Friendly Coaches</span>
            </div>
            <p className="text-xs text-neutral-400">Motivating & approachable</p>
          </div>

          <div className="p-3">
            <div className="text-red-500 font-bold uppercase text-xs tracking-wider mb-1">
              Diet Guidance
            </div>
            <p className="text-xs text-neutral-400">Reportedly included with training</p>
          </div>

          <div className="p-3">
            <div className="text-red-500 font-bold uppercase text-xs tracking-wider mb-1">
              Competitive Fees
            </div>
            <p className="text-xs text-neutral-400">High-value neighborhood fitness</p>
          </div>
        </div>
      </div>
    </section>
  );
};

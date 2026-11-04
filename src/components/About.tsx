import React from 'react';
import { Target, Users, Flame, Dumbbell, ShieldCheck } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData.ts';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0F0F0F] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-red-500 font-bold uppercase text-xs sm:text-sm tracking-widest mb-3">
            Pure Iron Culture in Halasuru
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-heading tracking-tight">
            About Kamaraj Gym
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 mb-6" />
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed [text-wrap:balance]">
            Rooted in the heart of Sivanchetti Gardens, Halasuru, <strong className="text-white">Kamaraj Gym</strong> is built for individuals who believe genuine transformation comes from sweat, discipline, and consistent effort.
          </p>
        </div>

        {/* 2-Column Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Authentic Photography with Frame Accent */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 aspect-4/3">
              <img
                src="/assets/aistudio/Screenshot_2024-11-25_080748_1955f82c.png"
                alt="Kamaraj Gym coach and member"
                className="w-full h-full object-cover object-[center_28%] group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-neutral-300">
                <span className="font-bold text-white uppercase tracking-wider block font-heading text-sm">
                  Personal Guidance & Community
                </span>
                Friendly trainers, personal mentorship, and true iron discipline.
              </div>
            </div>
          </div>

          {/* Right Column: About Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white font-heading tracking-tight">
              A Place for Strength, Bodybuilding & Personal Growth
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Unlike generic luxury fitness clubs with distracting lounge areas and endless sales pitches, Kamaraj Gym preserves the timeless spirit of an authentic bodybuilding gym. Here, every dumbbell, rack, and bench is purpose-driven: to help you build physical power, mental resilience, and lifelong fitness.
            </p>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              We take pride in our community-focused ethos. Whether you are lifting your first empty barbell or training for athletic hypertrophy, the environment is grounded in mutual encouragement, friendly guidance from experienced trainers, and honest hard work.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-md bg-[#161616] border border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-red-950/60 text-red-500">
                    <Dumbbell className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base uppercase font-heading">Strength First</h4>
                </div>
                <p className="text-xs text-neutral-400">
                  Focused on compound lifts, progressive overload, and real physical power.
                </p>
              </div>

              <div className="p-4 rounded-md bg-[#161616] border border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-red-950/60 text-red-500">
                    <Flame className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base uppercase font-heading">Bodybuilding</h4>
                </div>
                <p className="text-xs text-neutral-400">
                  Targeted hypertrophy, muscle isolation, and classic physique symmetry.
                </p>
              </div>

              <div className="p-4 rounded-md bg-[#161616] border border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-red-950/60 text-red-500">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base uppercase font-heading">Personal Development</h4>
                </div>
                <p className="text-xs text-neutral-400">
                  Building the mental grit and discipline that extends far beyond the gym floor.
                </p>
              </div>

              <div className="p-4 rounded-md bg-[#161616] border border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-red-950/60 text-red-500">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base uppercase font-heading">Community Respect</h4>
                </div>
                <p className="text-xs text-neutral-400">
                  Friendly atmosphere where lifters motivate each other and share knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Iron Ethos Banner */}
        <div className="p-6 sm:p-8 rounded-lg bg-neutral-900 border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Old-School Gym Etiquette
            </span>
            <h4 className="text-lg sm:text-xl font-bold uppercase text-white font-heading">
              Leave Your Ego at the Door · Re-rack Your Weights · Respect Every Lifter
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Located at {GYM_CONTACT.address}. Open for morning and evening training batches.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors whitespace-nowrap shrink-0 border border-neutral-700"
          >
            Visit Our Gym
          </a>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Quote, AlertCircle, Info, ThumbsUp, Sparkles, Filter } from 'lucide-react';
import { POSITIVE_REVIEWS, THINGS_TO_CONSIDER } from '../data/gymData.ts';

export const Reviews: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredPositiveReviews =
    selectedFilter === 'all'
      ? POSITIVE_REVIEWS
      : POSITIVE_REVIEWS.filter((r) => r.highlightCategory === selectedFilter);

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#0F0F0F] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-red-500 font-bold uppercase text-xs sm:text-sm tracking-widest mb-3">
            Real Member Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-heading tracking-tight">
            Customer Reviews & Experiences
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 mb-6" />
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed [text-wrap:balance]">
            We value genuine customer voices. Here is honest, customer-submitted feedback highlighting what members appreciate about Kamaraj Gym, alongside transparent points to consider before joining.
          </p>

          {/* Transparent Notice */}
          <div className="mt-4 inline-flex items-start gap-2.5 p-3.5 rounded-md bg-neutral-900/90 border border-white/10 text-xs text-neutral-400 text-left max-w-2xl">
            <Info className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5" />
            <span>
              <strong className="text-neutral-200">Disclaimer:</strong> All testimonials are customer-submitted reviews. Individual experiences and opinions are presented without modification or fabricated ratings to help you make an informed decision.
            </span>
          </div>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
              selectedFilter === 'all'
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/5'
            }`}
          >
            All Member Highlights ({POSITIVE_REVIEWS.length})
          </button>
          <button
            onClick={() => setSelectedFilter('trainers')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
              selectedFilter === 'trainers'
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/5'
            }`}
          >
            Motivating Trainers
          </button>
          <button
            onClick={() => setSelectedFilter('atmosphere')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
              selectedFilter === 'atmosphere'
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/5'
            }`}
          >
            Old-School Atmosphere
          </button>
          <button
            onClick={() => setSelectedFilter('diet')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
              selectedFilter === 'diet'
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/5'
            }`}
          >
            Diet Guidance Included
          </button>
          <button
            onClick={() => setSelectedFilter('pricing')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
              selectedFilter === 'pricing'
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/5'
            }`}
          >
            Competitive Fees
          </button>
          <button
            onClick={() => setSelectedFilter('women-environment')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
              selectedFilter === 'women-environment'
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/5'
            }`}
          >
            Women's Training Experience
          </button>
        </div>

        {/* Positive Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPositiveReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-lg bg-[#141414] border border-white/10 hover:border-red-600/30 transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-500 font-heading">
                    {rev.summary}
                  </span>
                  <Quote className="w-5 h-5 text-neutral-600 group-hover:text-red-500 transition-colors" />
                </div>

                <p className="text-sm text-neutral-200 italic leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                <div>
                  <span className="font-semibold text-white block">{rev.author}</span>
                  <span className="text-neutral-500">{rev.source}</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-neutral-900 border border-white/5 text-[11px] text-neutral-300">
                  {rev.dateTag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent "Things to Consider" Section */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">
              <AlertCircle className="w-4 h-4" />
              <span>Full Transparency</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white font-heading tracking-tight">
              Things to Consider Before Joining
            </h3>
            <p className="text-sm text-neutral-400 mt-2">
              Every gym has its trade-offs. We present these customer-raised points openly so you know exactly what to expect before signing up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {THINGS_TO_CONSIDER.map((item) => (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-lg bg-neutral-900/80 border border-amber-900/30 hover:border-amber-600/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded bg-amber-950/60 text-amber-400 shrink-0 mt-0.5">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white uppercase font-heading tracking-tight">
                        {item.topic}
                      </h4>
                      <p className="text-xs font-semibold text-amber-400/90 mt-0.5">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded bg-black/40 border border-white/5 mb-4 text-xs text-neutral-300 leading-relaxed italic">
                    "{item.reviewDetail}"
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    <strong className="text-neutral-200">Recommendation:</strong> {item.contextNote}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500">
                  <span>Customer Reviewer Comment</span>
                  <a
                    href="#contact"
                    className="text-amber-400 hover:text-amber-300 font-semibold hover:underline"
                  >
                    Schedule a Visit to Inspect Firsthand →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

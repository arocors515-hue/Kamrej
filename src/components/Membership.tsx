import React, { useState } from 'react';
import { Check, Edit3, RotateCcw, ArrowRight, HelpCircle } from 'lucide-react';
import { INITIAL_MEMBERSHIP_PLANS } from '../data/gymData.ts';
import { MembershipPlan } from '../types.ts';

interface MembershipProps {
  onOpenEnquiry: (planName: string) => void;
}

export const Membership: React.FC<MembershipProps> = ({ onOpenEnquiry }) => {
  const [plans, setPlans] = useState<MembershipPlan[]>(INITIAL_MEMBERSHIP_PLANS);
  const [isEditingPrices, setIsEditingPrices] = useState(false);

  const handlePriceChange = (id: string, newPrice: number) => {
    setPlans((prev) =>
      prev.map((plan) => (plan.id === id ? { ...plan, defaultPrice: Math.max(0, newPrice) } : plan))
    );
  };

  const handleResetPrices = () => {
    setPlans(INITIAL_MEMBERSHIP_PLANS);
    setIsEditingPrices(false);
  };

  return (
    <section id="membership" className="py-20 sm:py-28 bg-[#0A0A0A] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-red-500 font-bold uppercase text-xs sm:text-sm tracking-widest mb-3">
            Simple & Transparent Tiers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-heading tracking-tight">
            Membership Plans
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 mb-6" />
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed [text-wrap:balance]">
            Choose a training commitment that aligns with your fitness goals. Prices below feature editable placeholders to test rates or enquire about current batch specials.
          </p>

          {/* Price Customizer Controls & Disclaimer */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsEditingPrices(!isEditingPrices)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-xs font-semibold text-neutral-200 transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5 text-red-500" />
              <span>{isEditingPrices ? 'Done Editing Placeholders' : 'Customise / Edit Price Placeholders'}</span>
            </button>

            {isEditingPrices && (
              <button
                onClick={handleResetPrices}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-300 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>
            )}
          </div>

          <div className="mt-3 text-xs text-neutral-500 flex items-center justify-center gap-1">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Prices are editable placeholders. Call 9986382167 to confirm current walk-in & seasonal fees.</span>
          </div>
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-14">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-lg transition-all flex flex-col justify-between relative ${
                plan.isPopular
                  ? 'bg-[#151515] border-2 border-red-600 shadow-2xl shadow-red-950/40 transform md:-translate-y-2'
                  : 'bg-[#121212] border border-white/10 hover:border-white/20 shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white font-bold text-[11px] uppercase tracking-widest px-4 py-1 rounded-full shadow-md font-heading">
                  Most Popular Commitment
                </div>
              )}

              <div className="p-6 sm:p-8">
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold uppercase text-white font-heading tracking-tight mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    {plan.durationLabel}
                  </p>
                </div>

                {/* Price Display / Editable Input */}
                <div className="mb-6 p-4 rounded-md bg-black/50 border border-white/5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-semibold text-neutral-400">₹</span>
                    {isEditingPrices ? (
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          value={plan.defaultPrice}
                          onChange={(e) => handlePriceChange(plan.id, Number(e.target.value))}
                          className="w-28 bg-neutral-900 border border-red-500 text-white font-bold text-2xl px-2 py-0.5 rounded font-mono tabular-nums focus:outline-none"
                          min="0"
                          step="100"
                        />
                        <span className="text-xs text-neutral-400">placeholder</span>
                      </div>
                    ) : (
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                        {plan.defaultPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                    <span className="text-xs text-neutral-400 ml-1">
                      {plan.id === 'monthly' ? '/ month' : plan.id === 'quarterly' ? '/ 3 months' : '/ year'}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1 italic">
                    {plan.priceNote} (Editable placeholder)
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Feature List */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
                    What's Included:
                  </span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={() => onOpenEnquiry(`${plan.name} (₹${plan.defaultPrice})`)}
                  className={`w-full py-3.5 px-4 rounded text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    plan.isPopular
                      ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-950/50'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700'
                  }`}
                >
                  <span>Enquire This Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Walk-in & Batch Notice */}
        <div className="p-6 rounded-lg bg-neutral-900 border border-neutral-800 text-center max-w-2xl mx-auto">
          <h4 className="text-base font-bold text-white uppercase font-heading mb-1">
            Need a Custom Batch or Student Plan?
          </h4>
          <p className="text-xs text-neutral-400 mb-4">
            Visit Kamaraj Gym in Sivanchetti Gardens, Halasuru to discuss daily passes, flexible time slots, or long-term strength training routines.
          </p>
          <a
            href="tel:9986382167"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500 hover:text-red-400"
          >
            <span>Direct Phone Call: 9986382167</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

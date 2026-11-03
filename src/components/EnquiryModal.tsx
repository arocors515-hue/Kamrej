import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, CheckCircle2, Dumbbell } from 'lucide-react';
import { getWhatsAppEnquiryUrl, GYM_CONTACT } from '../data/gymData.ts';

interface EnquiryModalProps {
  isOpen: boolean;
  initialPlan?: string;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, initialPlan = '', onClose }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [plan, setPlan] = useState(initialPlan || 'General Enquiry');
  const [goal, setGoal] = useState('Muscle Building & Bodybuilding');
  const [timeSlot, setTimeSlot] = useState('Morning Batch');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPlan) {
      setPlan(initialPlan);
    }
  }, [initialPlan]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const message = `Hello Kamaraj Gym,\nI would like to enquire about membership:\nName: ${fullName || 'Interested Trainee'}\nPhone: ${phone || 'N/A'}\nPlan: ${plan}\nFitness Goal: ${goal}\nPreferred Batch: ${timeSlot}`;
    window.open(getWhatsAppEnquiryUrl(message), '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#141414] border border-white/15 rounded-lg shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-md hover:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <Dumbbell className="w-5 h-5 text-red-600" />
          <span className="text-xs font-bold uppercase tracking-widest text-red-500 font-heading">
            Kamaraj Gym · Halasuru
          </span>
        </div>
        <h3 className="text-2xl font-bold uppercase text-white font-heading tracking-tight mb-1">
          Start Your Training
        </h3>
        <p className="text-xs text-neutral-400 mb-6">
          Submit your enquiry or connect immediately on WhatsApp with gym trainers.
        </p>

        {submitted ? (
          <div className="p-6 rounded bg-neutral-900 border border-emerald-600/40 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-950 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold uppercase text-white font-heading">
              Enquiry Submitted!
            </h4>
            <p className="text-xs text-neutral-300">
              Thank you, <strong className="text-white">{fullName}</strong>. We look forward to seeing you at our gym on 1, Rukmani Colony Rd, Halasuru.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleWhatsAppSend}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open in WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="text-xs text-neutral-400 hover:text-white pt-2 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-3.5 py-2.5 rounded bg-black/60 border border-neutral-700 text-white text-sm focus:outline-none focus:border-red-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9986382167"
                className="w-full px-3.5 py-2.5 rounded bg-black/60 border border-neutral-700 text-white text-sm focus:outline-none focus:border-red-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Enquiry Subject / Tier
                </label>
                <select
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-black/60 border border-neutral-700 text-white text-xs focus:outline-none focus:border-red-600"
                >
                  <option value="General Enquiry">General Walk-in Enquiry</option>
                  <option value="Monthly Tier">Monthly Membership</option>
                  <option value="Quarterly Tier">Quarterly Membership</option>
                  <option value="Yearly Tier">Yearly Membership</option>
                  <option value="Personal Training Slot">Personal Training Slot</option>
                  <option value="Diet Guidance">Diet Guidance</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Preferred Batch
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-black/60 border border-neutral-700 text-white text-xs focus:outline-none focus:border-red-600"
                >
                  <option value="Morning Batch">Morning Batch</option>
                  <option value="Evening Batch">Evening Batch</option>
                  <option value="Flexible Timings">Flexible Timings</option>
                </select>
              </div>
            </div>

            <div className="pt-3 flex flex-col gap-2.5">
              <button
                type="submit"
                className="w-full py-3 bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Gym Enquiry</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full py-2.5 bg-neutral-900 hover:bg-emerald-700 text-emerald-400 hover:text-white border border-neutral-700 text-xs font-semibold uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat Instantly on WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

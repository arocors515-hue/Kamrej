import React, { useState } from 'react';
import { Phone, MapPin, MessageSquare, Navigation, Send, CheckCircle2, Clock } from 'lucide-react';
import { GYM_CONTACT, getWhatsAppEnquiryUrl } from '../data/gymData.ts';

export const ContactLocation: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    goal: 'Muscle Building & Hypertrophy',
    preferredTime: 'Morning (6:00 AM - 10:00 AM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setFormError('Please provide your name and phone number.');
      return;
    }
    setFormError('');
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hello Kamaraj Gym,\nMy name is ${formData.fullName || 'a prospective member'}.\nPhone: ${formData.phone || 'N/A'}\nGoal: ${formData.goal}\nPreferred Time: ${formData.preferredTime}\nMessage: ${formData.message || 'I would like to enquire about membership and schedule a visit.'}`;
    window.open(getWhatsAppEnquiryUrl(text), '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-red-500 font-bold uppercase text-xs sm:text-sm tracking-widest mb-3">
            Visit & Connect
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-heading tracking-tight">
            Contact & Location
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 mb-6" />
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed [text-wrap:balance]">
            Ready to start lifting with discipline? Reach out by phone, WhatsApp, or drop by Kamaraj Gym in Sivanchetti Gardens, Halasuru, Bengaluru.
          </p>
        </div>

        {/* 2-Column Split: Info & Map on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Google Map (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Contact Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Card */}
              <div className="p-6 rounded-lg bg-[#141414] border border-white/10 hover:border-red-600/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded bg-red-950/60 text-red-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${GYM_CONTACT.phoneRaw}`}
                      className="text-xl font-bold text-white hover:text-red-500 font-heading tracking-tight"
                    >
                      {GYM_CONTACT.phoneDisplay}
                    </a>
                  </div>
                </div>
                <p className="text-xs text-neutral-400 mt-2">
                  Tap to call directly for walk-in visits and batch enquiries.
                </p>
              </div>

              {/* WhatsApp Card */}
              <div className="p-6 rounded-lg bg-[#141414] border border-white/10 hover:border-emerald-600/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded bg-emerald-950/60 text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                      WhatsApp Enquiry
                    </span>
                    <a
                      href={getWhatsAppEnquiryUrl('Hello Kamaraj Gym, I would like to enquire about gym memberships and training timings.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-emerald-400 hover:text-emerald-300 font-heading tracking-tight"
                    >
                      +91 99863 82167
                    </a>
                  </div>
                </div>
                <p className="text-xs text-neutral-400 mt-2">
                  Instant messaging with gym trainers and management.
                </p>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-lg bg-[#141414] border border-white/10">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded bg-red-950/60 text-red-500 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Gym Location
                  </span>
                  <p className="text-sm font-semibold text-white leading-relaxed">
                    {GYM_CONTACT.address}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <a
                      href={GYM_CONTACT.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions in Google Maps</span>
                    </a>
                    <span className="text-xs text-neutral-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-neutral-500" />
                      <span>Call to confirm current batch timings</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden border border-white/10 shadow-xl bg-neutral-900 aspect-16/10 relative">
              <iframe
                title="Kamaraj Gym Google Maps Location"
                src={GYM_CONTACT.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[1.1]"
              />
              <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-sm px-3 py-1.5 rounded text-[11px] text-neutral-300 border border-white/10 pointer-events-none">
                📍 Sivanchetti Gardens, Halasuru, Bengaluru
              </div>
            </div>
          </div>

          {/* Right Column: Contact / Enquiry Form (5 cols) */}
          <div className="lg:col-span-5 bg-[#141414] border border-white/10 rounded-lg p-6 sm:p-8 shadow-2xl">
            <h3 className="text-2xl font-bold uppercase text-white font-heading tracking-tight mb-2">
              Send an Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
              Fill out your fitness goals below. You can send this directly via WhatsApp or submit it for a trainer callback.
            </p>

            {submitted ? (
              <div className="p-6 rounded-md bg-neutral-900 border border-emerald-600/40 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-950 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold uppercase text-white font-heading">
                  Enquiry Recorded!
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. For the fastest response, you can open this enquiry directly in WhatsApp:
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Message on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        goal: 'Muscle Building & Hypertrophy',
                        preferredTime: 'Morning (6:00 AM - 10:00 AM)',
                        message: '',
                      });
                    }}
                    className="text-xs text-neutral-400 hover:text-white pt-2 cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3 rounded bg-red-950/60 border border-red-800 text-xs text-red-300">
                    {formError}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3.5 py-2.5 rounded bg-black/60 border border-neutral-700 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3.5 py-2.5 rounded bg-black/60 border border-neutral-700 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-black/60 border border-neutral-700 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                  >
                    <option value="Muscle Building & Hypertrophy">Muscle Building & Bodybuilding</option>
                    <option value="Pure Strength & Heavy Iron">Pure Strength & Powerlifting</option>
                    <option value="Fat Loss & Conditioning">Fat Loss & Conditioning</option>
                    <option value="General Health & Discipline">General Fitness & Discipline</option>
                    <option value="Diet & Nutrition Advice">Diet & Nutrition Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Preferred Workout Time
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-black/60 border border-neutral-700 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                  >
                    <option value="Early Morning (6:00 AM - 8:30 AM)">Early Morning (6:00 AM - 8:30 AM)</option>
                    <option value="Late Morning (8:30 AM - 11:00 AM)">Late Morning (8:30 AM - 11:00 AM)</option>
                    <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                    <option value="Night (8:00 PM - 10:00 PM)">Night (8:00 PM - 10:00 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Questions / Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention any specific queries regarding trainers, fees, or gym facilities..."
                    className="w-full px-3.5 py-2 rounded bg-black/60 border border-neutral-700 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <button
                    type="submit"
                    className="w-full py-3 bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Enquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="w-full py-2.5 bg-neutral-900 hover:bg-emerald-700 text-neutral-300 hover:text-white border border-neutral-700 text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Send Directly via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

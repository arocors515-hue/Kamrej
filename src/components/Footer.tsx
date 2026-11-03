import React from 'react';
import { Dumbbell, Phone, MapPin, MessageSquare, Instagram, Facebook, Youtube } from 'lucide-react';
import { GYM_CONTACT, getWhatsAppEnquiryUrl } from '../data/gymData.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-neutral-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Ethos (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-2xl font-bold uppercase text-white font-heading">
              <Dumbbell className="w-6 h-6 text-red-600" />
              <span>Kamaraj Gym</span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-red-500 font-heading">
              BUILT BY DISCIPLINE. POWERED BY STRENGTH.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              An authentic old-school bodybuilding and fitness gym located in Sivanchetti Gardens, Halasuru, Bengaluru. Focused on real iron, friendly trainers, and honest physical progress.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-neutral-900 hover:bg-red-600 text-neutral-300 hover:text-white transition-colors"
                aria-label="Instagram profile placeholder"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-neutral-900 hover:bg-red-600 text-neutral-300 hover:text-white transition-colors"
                aria-label="Facebook page placeholder"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-neutral-900 hover:bg-red-600 text-neutral-300 hover:text-white transition-colors"
                aria-label="YouTube channel placeholder"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-heading mb-4">
              Gym Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Kamaraj Gym
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-white transition-colors">
                  Training & Facilities
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Customer Reviews & Feedback
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-white transition-colors">
                  Membership Plans
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gym Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Notice (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-heading mb-4">
              Location & Enquiries
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {GYM_CONTACT.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a
                  href={`tel:${GYM_CONTACT.phoneRaw}`}
                  className="text-white hover:text-red-400 font-semibold text-sm"
                >
                  {GYM_CONTACT.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href={getWhatsAppEnquiryUrl('Hello Kamaraj Gym, I would like to enquire about visiting and training options.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm"
                >
                  WhatsApp: +91 99863 82167
                </a>
              </div>
            </div>

            <div className="p-3.5 rounded bg-neutral-900 border border-white/5 text-xs text-neutral-400">
              <strong className="text-neutral-200 block mb-1">Visiting Hours Note:</strong>
              Batch timings and instructor schedules vary by season. Call ahead at{' '}
              <a href={`tel:${GYM_CONTACT.phoneRaw}`} className="text-red-400 underline">
                9986382167
              </a>{' '}
              to confirm open workout slots.
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Kamaraj Gym. All rights reserved. Sivanchetti Gardens, Halasuru, Bengaluru.</p>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Customer-Focused Fitness</span>
            <span>·</span>
            <span>Old-School Iron Culture</span>
            <span>·</span>
            <a href="#contact" className="hover:text-white">
              Visit Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

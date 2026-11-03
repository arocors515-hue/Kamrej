import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Dumbbell } from 'lucide-react';
import { GYM_CONTACT, getWhatsAppEnquiryUrl } from '../data/gymData.ts';

interface HeaderProps {
  onOpenEnquiry: (planName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face, no subtitles) */}
        <a
          href="#home"
          className="flex items-center gap-2 text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase font-heading hover:text-red-500 transition-colors whitespace-nowrap shrink-0"
        >
          <Dumbbell className="w-7 h-7 text-red-600" />
          <span>Kamaraj Gym</span>
        </a>

        {/* Zone 2: 4-5 Nav Links (Single line text with subtle hover effect) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a
            href="#about"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-red-600 decoration-2"
          >
            About
          </a>
          <a
            href="#training"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-red-600 decoration-2"
          >
            Training & Facilities
          </a>
          <a
            href="#reviews"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-red-600 decoration-2"
          >
            Reviews
          </a>
          <a
            href="#membership"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-red-600 decoration-2"
          >
            Membership
          </a>
          <a
            href="#gallery"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-red-600 decoration-2"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-red-600 decoration-2"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${GYM_CONTACT.phoneRaw}`}
            className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-500 rounded-md transition-all flex items-center gap-1.5 whitespace-nowrap"
            title="Call Kamaraj Gym directly"
          >
            <Phone className="w-3.5 h-3.5 text-red-500" />
            <span>Call</span>
          </a>
          <button
            onClick={() => onOpenEnquiry('General Enquiry')}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:scale-95 rounded-md transition-all shadow-md shadow-red-950/50 whitespace-nowrap"
          >
            Join Now
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenEnquiry('Mobile Quick Join')}
            className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-md whitespace-nowrap"
          >
            Join
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121212] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col gap-2.5 text-base font-medium text-neutral-300">
            <a
              href="#about"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-neutral-800 hover:text-white transition-colors"
            >
              About Kamaraj Gym
            </a>
            <a
              href="#training"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-neutral-800 hover:text-white transition-colors"
            >
              Training & Facilities
            </a>
            <a
              href="#reviews"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-neutral-800 hover:text-white transition-colors"
            >
              Customer Reviews & Feedback
            </a>
            <a
              href="#membership"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-neutral-800 hover:text-white transition-colors"
            >
              Membership Plans
            </a>
            <a
              href="#gallery"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-neutral-800 hover:text-white transition-colors"
            >
              Gym Gallery
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-neutral-800 hover:text-white transition-colors"
            >
              Location & Contact
            </a>
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={`tel:${GYM_CONTACT.phoneRaw}`}
              className="w-full py-2.5 px-4 bg-neutral-900 border border-neutral-700 text-white font-medium rounded-md flex items-center justify-center gap-2 hover:bg-neutral-800"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call: {GYM_CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={getWhatsAppEnquiryUrl('Hello Kamaraj Gym, I would like to enquire about membership and gym timings.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

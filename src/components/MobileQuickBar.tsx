import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { GYM_CONTACT, getWhatsAppEnquiryUrl } from '../data/gymData.ts';

export const MobileQuickBar: React.FC = () => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/10 p-2 sm:hidden flex items-center justify-between gap-2 shadow-2xl h-[52px]"
    >
      <a
        href={`tel:${GYM_CONTACT.phoneRaw}`}
        className="flex-1 h-full bg-neutral-900 border border-neutral-700 text-white font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-1.5 active:bg-neutral-800"
      >
        <Phone className="w-3.5 h-3.5 text-red-500" />
        <span>Call Gym</span>
      </a>

      <a
        href={getWhatsAppEnquiryUrl('Hello Kamaraj Gym, I would like to enquire about membership plans and visiting.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 h-full bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-1.5"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
};

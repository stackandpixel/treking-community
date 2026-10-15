import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brand';
import { createGeneralEnquiryUrl } from '../../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Tooltip / Mini Chat card */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 rounded-xl bg-[#0e1713] border border-emerald-800/80 p-4 shadow-2xl animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-emerald-950">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-white">Trail Tribe Coordinator</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
              aria-label="Close chat window"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-slate-300 my-3 leading-relaxed">
            Namaste! 🌄 Looking for upcoming weekend treks from Pune or Mumbai? Tap below to chat directly with our trek leads on WhatsApp.
          </p>

          <a
            href={createGeneralEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>

          <div className="text-[10px] text-slate-500 text-center mt-2 font-[family-name:var(--font-mono)]">
            Typically replies within 1–2 hours
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 hover:scale-105 cursor-pointer"
        aria-label="Open WhatsApp chat enquiry"
      >
        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider font-[family-name:var(--font-mono)]">
          Need Help? Chat
        </span>
      </button>
    </div>
  );
};

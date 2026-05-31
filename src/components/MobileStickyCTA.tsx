/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';

interface MobileStickyCTAProps {
  onOpenPurchase: (selectedId: string | null) => void;
}

export default function MobileStickyCTA({ onOpenPurchase }: MobileStickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls past 500px, but hide on large screens using Tailwind hidden lg:block
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
          className="fixed bottom-0 left-0 w-full z-50 lg:hidden px-4 pb-4"
        >
          {/* Main Bubble Bar */}
          <div className="bg-[#FAF7F2]/95 backdrop-blur-md border border-[#E8E2D9] shadow-xl p-3.5 rounded-3xl flex items-center justify-between gap-3 max-w-md mx-auto">
            {/* Left Info Column */}
            <div className="flex items-center space-x-2.5">
              <div className="p-2.5 bg-[#E8D9D0]/60 text-[#8C6B5A] rounded-2xl border border-[#E8E2D9] relative scale-95">
                <Icons.BookOpen className="w-5 h-5 animate-pulse" />
                <span className="absolute top-[-3px] right-[-2px] w-3.5 h-3.5 bg-[#8C6B5A] rounded-full flex items-center justify-center text-[7px] text-white font-extrabold shadow-sm">3</span>
              </div>
              <div className="space-y-0.5">
                <p className="text-[11px] font-bold text-[#5A5A40] leading-none font-serif tracking-wide">Paket Lengkap 3 E-book</p>
                <div className="flex items-baseline space-x-1.5">
                  <span className="text-[10px] text-[#4A433F]/40 line-through">105Rb</span>
                  <span className="text-sm font-semibold text-[#8C6B5A] font-serif">Rp59Rb</span>
                </div>
              </div>
            </div>

            {/* Quick checkout CTA button */}
            <button
              onClick={() => onOpenPurchase('bundle')}
              className="flex-shrink-0 px-4.5 py-3 bg-[#5A5A40] hover:bg-[#4A433F] active:bg-[#4A433F] text-white text-[10px] font-bold rounded-full flex items-center space-x-1.5 transition-colors shadow-sm cursor-pointer uppercase tracking-wider"
            >
              <Icons.ShoppingBag className="w-3.5 h-3.5" />
              <span>Beli</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

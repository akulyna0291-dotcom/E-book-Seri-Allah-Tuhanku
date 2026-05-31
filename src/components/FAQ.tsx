/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { FAQ_DATA } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#E8E2D9]" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="text-xs uppercase tracking-widest text-[#8C6B5A] font-bold">Klarifikasi & Bantuan</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#5A5A40] tracking-wide leading-snug">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="w-12 h-[1px] bg-[#E8E2D9] mx-auto mt-4" />
          <p className="text-[#4A433F] opacity-85 text-sm leading-relaxed max-w-lg mx-auto pt-1 font-sans">
            Ada yang ingin ditanyakan tentang Seri Allah Tuhanku? Temukan jawaban lengkap atas kebingungan Ayah & Ibu di bawah ini.
          </p>
        </div>

        {/* Faq List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-3xl border border-[#E8E2D9] overflow-hidden shadow-xs hover:border-[#8C6B5A]/35 transition-all duration-200"
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-serif text-sm sm:text-base font-normal text-[#5A5A40] pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-[#FAF7F2] text-[#4A433F] transition-all duration-300 ${isOpen ? 'rotate-180 bg-[#E8D9D0] text-[#8C6B5A]' : ''}`}>
                    <Icons.ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {/* Animated Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-[#4A433F]/80 text-xs sm:text-sm leading-relaxed font-sans border-t border-[#FAF7F2]/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Help Link Footer */}
        <div className="mt-12 text-center space-y-2">
          <p className="text-xs text-[#4A433F]/50">Punya pertanyaan lain yang belum terjawab?</p>
          <a
            href="https://wa.me/6282234573229?text=Assalamu%27alaikum%20saya%20tertarik%20dengan%20Seri%20Allah%20Tuhanku"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-bold text-[#8C6B5A] hover:text-[#5A5A40] hover:underline"
          >
            <Icons.PhoneCall className="w-4 h-4" />
            <span>Tanya Kami via WhatsApp (CS Fast Response)</span>
          </a>
        </div>

      </div>
    </section>
  );
}

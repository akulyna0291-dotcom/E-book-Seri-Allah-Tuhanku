/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  
  // Custom helper to generate initials avatar styles matching our palette
  const getAvatarStyle = (index: number) => {
    switch (index) {
      case 0: return 'bg-[#E8D9D0] text-[#8C6B5A] border-[#FAF7F2]';
      case 1: return 'bg-[#D1E0D7] text-[#5A5A40] border-[#FAF7F2]';
      case 2: return 'bg-sky-100 text-sky-800 border-white';
      default: return 'bg-[#FAF7F2] text-[#4A433F] border-[#E8E2D9]';
    }
  };

  return (
    <section className="py-20 bg-white border-b border-[#E8E2D9]" id="testimonials">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8C6B5A] font-bold">Kisah Sukses Orang Tua</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#5A5A40] tracking-wide leading-snug">
            Apa Kata Para Orang Tua?
          </h2>
          <div className="w-12 h-[1px] bg-[#E8E2D9] mx-auto mt-4" />
          <p className="text-[#4A433F] opacity-85 text-sm leading-relaxed max-w-xl mx-auto pt-1 font-sans">
            Lebih dari 1,200+ Ayah & Ibu telah membacakan buku ini untuk si kecil. Berikut testimoni jujur dari kehangatan keluarga mereka.
          </p>
        </div>

        {/* Testimonials List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testi, index) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ y: -4, boxShadow: "20px 20px 40px -10px rgba(0,0,0,0.05)" }}
              className="p-6 md:p-8 bg-[#FAF7F2] rounded-3xl border border-[#E8E2D9] flex flex-col justify-between space-y-6 relative hover:bg-white hover:border-[#8C6B5A]/20 transition-all duration-300"
            >
              {/* Star Rating & Quote Block Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: testi.rating }).map((_, r) => (
                    <Icons.Star key={r} className="w-4 h-4 fill-[#8C6B5A] text-[#8C6B5A] opacity-80" />
                  ))}
                </div>
                <Icons.Quote className="w-8 h-8 text-[#E8E2D9] stroke-[1.5]" />
              </div>

              {/* Quote Content */}
              <p className="text-[#4A433F]/90 italic text-xs sm:text-sm leading-relaxed font-sans flex-grow">
                "{testi.quote}"
              </p>

              {/* Author Footer */}
              <div className="flex items-center space-x-3.5 pt-4 border-t border-[#E8E2D9]">
                {/* Custom circular avatar initials panel */}
                <div className={`w-11 h-11 rounded-full border flex items-center justify-center font-serif text-sm font-bold shadow-xs ${getAvatarStyle(index)}`}>
                  {testi.author.replace('Ibu ', '').substring(0, 1)}
                </div>
                <div>
                  <h4 className="font-serif text-base font-normal text-[#4A433F] leading-tight">
                    {testi.author}
                  </h4>
                  <p className="text-[9px] uppercase tracking-wider text-[#8C6B5A] font-bold">
                    {testi.role}
                  </p>
                  <p className="text-[9px] text-[#4A433F]/50">
                    {testi.city}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic Trust Stat */}
        <div className="mt-14 p-4.5 bg-[#FAF7F2] border border-[#E8E2D9] rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto shadow-xs glass">
          <div className="flex -space-x-2.5">
            <div className="w-7 h-7 rounded-full bg-[#E8D9D0] border border-white flex items-center justify-center text-[8px] font-bold text-[#8C6B5A]">N</div>
            <div className="w-7 h-7 rounded-full bg-[#D1E0D7] border border-white flex items-center justify-center text-[8px] font-bold text-[#5A5A40]">R</div>
            <div className="w-7 h-7 rounded-full bg-sky-150 border border-white flex items-center justify-center text-[8px] font-bold text-sky-800">F</div>
          </div>
          <span className="text-xs font-sans text-[#4A433F]/80 text-center sm:text-left">
            Disukai oleh <strong className="text-[#5A5A40] font-semibold">1,250+ Ibu Pintar</strong> di Nusantara
          </span>
        </div>

      </div>
    </section>
  );
}

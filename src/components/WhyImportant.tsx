/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';
import { BENEFITS_DATA } from '../data';

export default function WhyImportant() {
  // Map icons to custom, natural toned versions matching the book palette
  const getIcon = (name: string) => {
    switch (name) {
      case 'Heart':
        return (
          <div className="p-3.5 bg-[#E8D9D0] text-[#8C6B5A] rounded-2xl border border-[#FAF7F2]">
            <Icons.Heart className="w-6 h-6 fill-current opacity-80" />
          </div>
        );
      case 'Smile':
        return (
          <div className="p-3.5 bg-[#D1E0D7] text-[#5A5A40] rounded-2xl border border-[#FAF7F2]">
            <Icons.Smile className="w-6 h-6 text-[#5A5A40]" />
          </div>
        );
      case 'Compass':
        return (
          <div className="p-3.5 bg-[#A2D2FF]/30 text-[#4A433F] rounded-2xl border border-[#FAF7F2]">
            <Icons.Compass className="w-6 h-6 text-sky-700" />
          </div>
        );
      case 'Users':
        return (
          <div className="p-3.5 bg-[#E6B8A2]/30 text-[#8C6B5A] rounded-2xl border border-[#FAF7F2]">
            <Icons.Users className="w-6 h-6 text-[#8C6B5A]" />
          </div>
        );
      default:
        return (
          <div className="p-3.5 bg-[#FAF7F2] text-[#4A433F] rounded-2xl">
            <Icons.BookOpen className="w-6 h-6" />
          </div>
        );
    }
  };

  return (
    <section className="py-20 bg-white border-b border-[#E8E2D9]" id="why-important">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8C6B5A] font-bold">Pondasi Karakter Anak</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#5A5A40] tracking-wide leading-snug">
            Mengapa Anak Perlu Mengenal Allah Sejak Usia Dini?
          </h2>
          <div className="w-12 h-[1px] bg-[#E8E2D9] mx-auto mt-4" />
          <p className="text-[#4A433F] opacity-80 text-sm leading-relaxed max-w-xl mx-auto pt-1 font-sans">
            Masa keemasan (*golden age*) usia 2-6 tahun adalah fase kritis di mana memori dan emosi si kecil merekam keyakinan terdalam mereka.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BENEFITS_DATA.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, boxShadow: "20px 20px 40px -10px rgba(0,0,0,0.05)" }}
              className="p-6 bg-[#FAF7F2] rounded-3xl border border-[#E8E2D9] flex flex-col items-center text-center space-y-4 hover:border-[#8C6B5A]/30 hover:bg-white transition-all duration-300"
            >
              {getIcon(benefit.iconName)}
              
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-normal text-[#5A5A40] tracking-wide leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-[#4A433F]/80 text-xs sm:text-sm leading-relaxed font-sans">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting Quote Card */}
        <div className="mt-16 bg-[#FAF7F2] border border-[#E8E2D9] p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto glass">
          <div className="p-4 bg-white/60 rounded-2xl shadow-xs text-[#8C6B5A] border border-white/60">
            <Icons.Quote className="w-8 h-8 opacity-80" />
          </div>
          <div className="text-center md:text-left space-y-1.5">
            <p className="text-xs italic text-[#4A433F] leading-relaxed opacity-90">
              "Agama mengajari kita bahwa iman pertama-tama bukanlah konsep abstrak di pikiran, melainkan cinta kasih, kedamaian, dan kehangatan yang dipeluk erat oleh seorang anak melalui dongeng cinta tulus kedua orang tuanya."
            </p>
            <span className="text-[9px] font-bold text-[#8C6B5A] block tracking-widest uppercase">— Parenting Syariah & Fitrah</span>
          </div>
        </div>

      </div>
    </section>
  );
}

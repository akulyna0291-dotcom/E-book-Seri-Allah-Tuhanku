/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { ADVANTAGES_DATA } from '../data';

export default function ProductAdvantages() {
  
  const getIcon = (name: string) => {
    const baseClass = "w-6 h-6";
    switch (name) {
      case 'MessageSquareText':
        return <Icons.MessageSquareText className={`${baseClass} text-[#8C6B5A]`} />;
      case 'Sparkles':
        return <Icons.Sparkles className={`${baseClass} text-[#5A5A40]`} />;
      case 'BookOpen':
        return <Icons.BookOpen className={`${baseClass} text-[#A3B18A]`} />;
      case 'FileDown':
        return <Icons.FileDown className={`${baseClass} text-[#8C6B5A]`} />;
      case 'RotateCcw':
        return <Icons.RotateCcw className={`${baseClass} text-[#5A5A40]`} />;
      case 'Baby':
        return <Icons.Baby className={`${baseClass} text-[#8C6B5A]`} />;
      default:
        return <Icons.CheckSquare className={`${baseClass} text-[#4A433F]`} />;
    }
  };

  const getCardBg = (name: string) => {
    return 'bg-[#FAF7F2] border-[#E8E2D9]';
  };

  return (
    <section className="py-20 bg-white border-b border-[#E8E2D9]" id="advantages">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8C6B5A] font-bold">Standard Kualitas</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#5A5A40] tracking-wide leading-snug">
            Dirancang Khusus untuk Anak Usia 2-6 Tahun
          </h2>
          <div className="w-12 h-[1px] bg-[#E8E2D9] mx-auto mt-4" />
          <p className="text-[#4A433F] opacity-85 text-sm leading-relaxed max-w-xl mx-auto pt-1 font-sans">
            Materi dan struktur e-book ini digodok bersama pendidik anak usia dini agar ramah sensorik, merangsang kognitif, dan memperluas imajinasi si kecil.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ADVANTAGES_DATA.map((adv, index) => (
            <motion.div
              key={adv.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`p-6 rounded-3xl border flex items-start space-x-4 transition-all hover:bg-white hover:shadow-lg hover:shadow-black/5 hover:translate-y-[-2px] ${getCardBg(adv.iconName)}`}
            >
              {/* Icon container */}
              <div className="p-3 bg-white rounded-2xl border border-[#E8E2D9] flex-shrink-0">
                {getIcon(adv.iconName)}
              </div>

              {/* Text content */}
              <div className="space-y-1.5 pt-0.5">
                <h4 className="font-serif text-lg font-normal text-[#5A5A40] tracking-wide">
                  {adv.title}
                </h4>
                <p className="text-[#4A433F]/80 text-xs sm:text-sm leading-relaxed font-sans">
                  {adv.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

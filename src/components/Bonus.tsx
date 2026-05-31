/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { BONUS_DATA } from '../data';

interface BonusSectionProps {
  onOpenPurchase: (selectedId: string | null) => void;
}

export default function BonusSection({ onOpenPurchase }: BonusSectionProps) {
  
  const getIcon = (name: string) => {
    const baseClass = "w-6 h-6";
    switch (name) {
      case 'Palette':
        return <Icons.Palette className={`${baseClass} text-[#8C6B5A]`} />;
      case 'Map':
        return <Icons.Map className={`${baseClass} text-[#5A5A40]`} />;
      case 'CheckSquare':
        return <Icons.CheckSquare className={`${baseClass} text-[#8C6B5A]`} />;
      default:
        return <Icons.Gift className={`${baseClass} text-[#5A5A40]`} />;
    }
  };

  const getBadgeColors = (badge: string) => {
    switch (badge) {
      case 'GRATIS':
        return 'bg-[#8C6B5A] text-white';
      case 'EKSKLUSIF':
        return 'bg-[#5A5A40] text-white';
      case 'PREMIUM':
        return 'bg-[#A3B18A] text-white';
      default:
        return 'bg-[#4A433F] text-white';
    }
  };

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#E8E2D9]" id="bonuses">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8C6B5A] font-bold">Terbatas Hari Ini</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#5A5A40] tracking-wide leading-snug">
            Bonus Spesial untuk Si Kecil
          </h2>
          <div className="w-12 h-[1px] bg-[#E8E2D9] mx-auto mt-4" />
          <p className="text-[#4A433F] opacity-85 text-sm leading-relaxed max-w-xl mx-auto pt-1 font-sans">
            Kami ingin memberikan dukungan menyeluruh bagi tumbuh kembang si kecil. Dapatkan 3 aset media interaktif bernilai tinggi ini secara gratis!
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BONUS_DATA.map((bonus, index) => (
            <motion.div
              key={bonus.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative p-7 bg-white rounded-3xl border border-[#E8E2D9] flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-black/[0.03] transition-all group overflow-hidden"
            >
              {/* Ribbon Badge */}
              <div className="absolute top-0 right-0">
                <span className={`inline-block px-4 py-1 text-[8px] font-bold tracking-widest uppercase rounded-bl-2xl ${getBadgeColors(bonus.badge)}`}>
                  {bonus.badge}
                </span>
              </div>

              <div className="space-y-5">
                {/* Visual Icon Header */}
                <div className="p-3.5 bg-[#FAF7F2] rounded-2xl w-fit group-hover:scale-110 transition-transform border border-[#E8E2D9]">
                  {getIcon(bonus.iconName)}
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-normal text-[#5A5A40] tracking-wide">
                    {bonus.title}
                  </h3>
                  <p className="text-[#4A433F]/80 text-xs sm:text-sm leading-relaxed font-sans">
                    {bonus.description}
                  </p>
                </div>

                {/* Sublist Bullet Items */}
                <div className="pt-3 border-t border-[#E8E2D9] flex flex-col gap-2.5">
                  {bonus.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start space-x-2">
                      <Icons.Heart className="w-3.5 h-3.5 text-[#8C6B5A] fill-[#8C6B5A]/10 mt-1 flex-shrink-0" />
                      <span className="text-[#4A433F]/85 text-xs font-medium leading-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative side accent lines */}
              <div className="absolute bottom-0 right-0 w-24 h-1 bg-[#8C6B5A] opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-full" />
            </motion.div>
          ))}
        </div>

        {/* Bundle Sticky Core Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-[#E8D9D0]/40 border border-[#E8E2D9] flex flex-col lg:flex-row items-center justify-between gap-8 max-w-4xl mx-auto text-center lg:text-left glass">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-1.5 bg-white/70 text-[#8C6B5A] px-3.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border border-[#E8E2D9]">
              <Icons.Sparkles className="w-3 h-3 text-[#8C6B5A]" />
              <span>Satu Pembelian Lebih Hemat</span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl font-normal text-[#5A5A40] tracking-wide leading-snug">
              Semua E-book + Seluruh Bonus diatas hanya <span className="font-medium text-[#8C6B5A] italic">Rp59.000</span>
            </h4>
            <p className="text-[#4A433F]/85 text-xs sm:text-sm leading-relaxed max-w-xl font-sans">
              Jangan lewatkan penawaran spesial ini untuk melengkapi perpustakaan digital pertama buah hati tercinta.
            </p>
          </div>
          <button
            onClick={() => onOpenPurchase('bundle')}
            className="w-full lg:w-auto flex-shrink-0 px-8 py-4 bg-[#5A5A40] hover:bg-[#4A433F] text-white font-semibold text-sm rounded-full shadow-md transition-colors text-center flex items-center justify-center space-x-2 cursor-pointer uppercase tracking-wider"
            id="bonus-cta-bundle"
          >
            <span>Ambil Paket Bundle + Bonus</span>
            <Icons.ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

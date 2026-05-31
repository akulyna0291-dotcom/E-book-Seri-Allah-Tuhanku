/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { BRAND_NAME } from '../data';

interface ClosingCTAProps {
  onOpenPurchase: (selectedId: string | null) => void;
}

export default function ClosingCTA({ onOpenPurchase }: ClosingCTAProps) {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="closing-cta">
      {/* Background circles */}
      <div className="absolute top-[20%] right-[-10%] w-80 h-80 rounded-full bg-[#E8D9D0]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-96 h-96 rounded-full bg-[#D1E0D7]/40 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Rounded Immersive Card Layout */}
        <div className="p-8 md:p-14 bg-gradient-to-b from-[#E8D9D0]/40 to-[#FAF7F2] rounded-[40px] border border-[#E8E2D9] text-center space-y-6 md:space-y-8 max-w-4xl mx-auto glass">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-2xl mx-auto"
          >
            {/* Visual Brand Symbol */}
            <div className="mx-auto p-4 bg-white/80 rounded-2xl w-fit shadow-xs text-[#5A5A40] border border-[#E8E2D9]">
              <Icons.BookOpenText className="w-10 h-10 stroke-[1.5]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#5A5A40] tracking-wide leading-tight">
              Mulai Perjalanan Si Kecil Mengenal Allah SWT Hari Ini
            </h2>
            <p className="text-[#4A433F]/90 text-sm sm:text-base leading-relaxed">
              Hadirkan pengalaman belajar yang hangat, menyenangkan, dan penuh makna bersama <em className="not-italic font-serif font-medium text-[#8C6B5A] italic">{BRAND_NAME}</em>.
            </p>
          </motion.div>

          {/* Bundle Discount Badge Offer */}
          <div className="inline-block p-6 bg-white rounded-3xl max-w-md w-full border border-[#E8E2D9] shadow-xs">
            <span className="text-[9px] bg-[#8C6B5A] text-white font-bold px-3.5 py-1 rounded-full uppercase tracking-widest">
              Promo Bundel Lengkap
            </span>
            <div className="flex items-center justify-center space-x-3 mt-4">
              <span className="text-sm line-through text-[#4A433F]/40 font-medium">Rp 105.000</span>
              <span className="text-3xl font-serif font-normal text-[#5A5A40]">Rp 59.000</span>
            </div>
            <p className="text-[10px] text-[#4A433F]/60 mt-1 font-medium italic">
              *Dapatkan 3 E-book Lengkap + Mewarnai + Poster + Checklist
            </p>
          </div>

          {/* Button CTA */}
          <div className="space-y-4 flex flex-col items-center">
            <button
              onClick={() => onOpenPurchase('bundle')}
              className="w-full sm:w-auto px-10 py-4.5 bg-[#5A5A40] hover:bg-[#4A433F] text-white font-semibold text-base rounded-full shadow-lg transition-all text-center flex items-center justify-center space-x-3 cursor-pointer uppercase tracking-wider"
              id="closing-cta-primary"
            >
              <Icons.ShoppingBag className="w-5 h-5" />
              <span>Saya Ingin Memiliki Ebook Ini</span>
            </button>
            <p className="text-[10px] text-[#4A433F]/50">Pembayaran aman, cepat, dan 100% halal.</p>
          </div>

          {/* Core Trust Badges Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-xl mx-auto pt-4 border-t border-[#E8E2D9] text-left md:text-center text-xs text-[#4A433F]/80 font-semibold">
            <div className="flex items-center md:justify-center space-x-2">
              <Icons.CheckCircle className="w-4 h-4 text-[#5A5A40]" />
              <span>Produk Digital</span>
            </div>
            <div className="flex items-center md:justify-center space-x-2">
              <Icons.Zap className="w-4 h-4 text-[#8C6B5A]" />
              <span>Download Instan</span>
            </div>
            <div className="flex items-center md:justify-center space-x-2">
              <Icons.Smartphone className="w-4 h-4 text-[#5A5A40]" />
              <span>Mudah Digunakan</span>
            </div>
            <div className="flex items-center md:justify-center space-x-2">
              <Icons.Sparkles className="w-4 h-4 text-[#8C6B5A]" />
              <span>Ramah Anak</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

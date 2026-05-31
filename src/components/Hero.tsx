/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { BOOKS_DATA, BRAND_NAME } from '../data';
import BookMockup from './BookMockup';

interface HeroProps {
  onOpenPurchase: (selectedId: string | null) => void;
}

export default function Hero({ onOpenPurchase }: HeroProps) {
  const scrollToShowcase = () => {
    const element = document.getElementById('about-series');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-24 pb-20 md:pt-32 md:pb-28 border-b border-[#E8E2D9]">
      {/* Background Decorative Shapes */}
      <div className="absolute top-[10%] left-[-5%] w-72 h-72 rounded-full bg-[#D1E0D7] opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-5%] w-96 h-96 rounded-full bg-[#E8D9D0] opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute top-[35%] right-[10%] w-60 h-60 rounded-full bg-[#D1E0D7] opacity-35 blur-2xl pointer-events-none" />

      {/* Floating stars and clouds */}
      <motion.div 
        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[12%] right-[18%] text-[#8C6B5A]/30 hidden md:block"
      >
        <Icons.Sparkles className="w-12 h-12" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] left-[8%] text-[#A3B18A]/20 hidden md:block"
      >
        <Icons.Cloud className="w-20 h-12 fill-current" />
      </motion.div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left pr-0 lg:pr-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 py-1.5 bg-[#E8D9D0] text-[#8C6B5A] text-[10px] uppercase tracking-widest font-bold rounded mb-2"
            >
              E-Book Digital Khusus Anak 2-6 Tahun
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#5A5A40] tracking-wide"
            >
              Kenalkan Allah SWT Sejak Dini dengan <span className="italic font-medium text-[#8C6B5A] relative inline-block">
                Cara Menyenangkan
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#4A433F] text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-85 font-sans"
            >
              Membantu si kecil mengenal Allah Maha Kuasa, Maha Melihat, dan Maha Mendengar melalui cerita sederhana dan ilustrasi yang hangat.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={() => onOpenPurchase('bundle')}
                className="w-full sm:w-auto px-8 py-4 bg-[#5A5A40] text-white rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity text-center flex items-center justify-center space-x-2.5 cursor-pointer"
                id="hero-cta-primary"
              >
                <span>Beli Paket Hemat Promo</span>
                <Icons.ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={scrollToShowcase}
                className="w-full sm:w-auto px-8 py-4 bg-white border border-[#E8E2D9] rounded-full font-semibold text-[#4A433F] hover:bg-[#F5F2ED] transition-colors text-center flex items-center justify-center space-x-2 cursor-pointer"
                id="hero-cta-secondary"
              >
                <Icons.BookOpen className="w-4 h-4 text-[#5A5A40]" />
                <span>Lihat Isi Buku</span>
              </button>
            </motion.div>

            {/* Quick trust notes under CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-5 pt-2 text-[10px] uppercase tracking-wider text-[#4A433F]/60 font-semibold"
            >
              <span className="flex items-center gap-1.5">✓ <span>Format PDF Premium</span></span>
              <span className="flex items-center gap-1.5">✓ <span>Tanpa Iklan Gadget</span></span>
              <span className="flex items-center gap-1.5">✓ <span>Akses Selamanya</span></span>
            </motion.div>
          </div>

          {/* Handheld mockup/Illustrations of Books */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative flex items-center justify-center w-full min-h-[360px] sm:min-h-[420px] px-8 py-4">
              
              {/* Backglow ring decoration */}
              <div className="absolute w-72 sm:w-80 h-72 sm:h-80 bg-[#D1E0D7] opacity-40 blur-3xl pointer-events-none" />

              {/* Stacked three covers side by side with responsive offset */}
              <div className="relative flex items-center justify-center space-x-[-35px] sm:space-x-[-45px] hover:space-x-[-15px] sm:hover:space-x-[-20px] transition-all duration-500 ease-out py-6 rotate-[-2deg]">
                
                {/* Book 1 (Left) */}
                <motion.div
                  initial={{ opacity: 0, x: -50, rotate: -12, y: 15 }}
                  animate={{ opacity: 1, x: 0, rotate: -8, y: -10 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
                  className="z-10 focus-within:z-40 floating"
                  style={{ animationDelay: '0s' }}
                  id="hero-book-left"
                >
                  <BookMockup book={BOOKS_DATA[0]} size="md" />
                </motion.div>

                {/* Book 3 (Middle, center-highlighted) */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 }}
                  className="z-30 hover:z-40 transform translate-y-2 floating"
                  style={{ animationDelay: '2s' }}
                  id="hero-book-center"
                >
                  <BookMockup book={BOOKS_DATA[2]} size="md" />
                </motion.div>

                {/* Book 2 (Right) */}
                <motion.div
                  initial={{ opacity: 0, x: 50, rotate: 12, y: 15 }}
                  animate={{ opacity: 1, x: 0, rotate: 8, y: -10 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
                  className="z-20 focus-within:z-40 floating"
                  style={{ animationDelay: '1s' }}
                  id="hero-book-right"
                >
                  <BookMockup book={BOOKS_DATA[1]} size="md" />
                </motion.div>
              </div>

              {/* Floating badges near mockup */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-6 bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-white/60 flex items-center space-x-1 text-[#4A433F] text-[9px] uppercase tracking-wider font-bold"
              >
                <Icons.Star className="w-3 h-3 fill-[#A3B18A] text-[#A3B18A]" />
                <span>3 Seri Terlengkap</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 right-6 bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm border border-white/60 flex items-center space-x-1.5 text-[#4A433F] text-[9px] uppercase tracking-wider font-bold"
              >
                <span className="w-2 h-2 rounded-full bg-[#8C6B5A] animate-ping" />
                <span>Hemat 50% Sekarang</span>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

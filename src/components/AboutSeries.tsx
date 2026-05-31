/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { BOOKS_DATA } from '../data';
import BookMockup from './BookMockup';

interface AboutSeriesProps {
  onOpenPurchase: (selectedId: string | null) => void;
}

export default function AboutSeries({ onOpenPurchase }: AboutSeriesProps) {
  
  const getThemeStyles = (color: 'sage' | 'pink' | 'blue') => {
    switch (color) {
      case 'sage':
        return {
          pill: 'bg-[#FAF7F2] text-[#5A5A40] border-[#E8E2D9]',
          btn: 'bg-[#5A5A40] hover:opacity-95 text-white',
          bulletColor: 'text-[#5A5A40]',
        };
      case 'pink':
        return {
          pill: 'bg-[#E8D9D0] text-[#8C6B5A] border-[#FAF7F2]',
          btn: 'bg-[#8C6B5A] hover:opacity-95 text-white',
          bulletColor: 'text-[#8C6B5A]',
        };
      case 'blue':
        return {
          pill: 'bg-sky-50 text-sky-800 border-sky-100',
          btn: 'bg-[#5A5A40] hover:opacity-95 text-white',
          bulletColor: 'text-sky-700',
        };
    }
  };

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#E8E2D9]" id="about-series">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8C6B5A] font-bold">Kurikulum & Materi</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#5A5A40] tracking-wide leading-snug">
            Apa yang Akan Dipelajari Anak?
          </h2>
          <div className="w-12 h-[1px] bg-[#E8E2D9] mx-auto mt-4" />
          <p className="text-[#4A433F] opacity-85 text-sm leading-relaxed max-w-xl mx-auto pt-1 font-sans">
            Setiap seri buku memuat satu pesan inti ketauhidan dasar, dikemas dengan alur logis yang ramah balita tanpa menimbulkan dogma yang menakutkan.
          </p>
        </div>

        {/* Ebooks List */}
        <div className="space-y-16 md:space-y-24">
          {BOOKS_DATA.map((book, index) => {
            const isEven = index % 2 === 1;
            const theme = getThemeStyles(book.color);

            return (
              <div 
                key={book.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
                id={`book-showcase-${book.id}`}
              >
                
                {/* Book Mockup Frame - Ordered alternating on desktop */}
                <div className={`col-span-1 lg:col-span-5 flex justify-center ${isEven ? 'lg:order-last' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: isEven ? 3 : -3 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: isEven ? 4 : -4 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="relative p-6"
                  >
                    {/* Shadow halo under cover mockup */}
                    <div className="absolute inset-x-12 bottom-6 h-6 bg-black/10 blur-xl rounded-full pointer-events-none" />
                    
                    <BookMockup book={book} size="lg" />
                  </motion.div>
                </div>

                {/* Book Details */}
                <div className="col-span-1 lg:col-span-7 space-y-6 text-center lg:text-left">
                  <div className="space-y-4">
                    <span className={`inline-block px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded border ${theme.pill}`}>
                      {book.tag}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#5A5A40] tracking-wide leading-snug">
                      {book.title}
                    </h3>
                    <p className="text-[#4A433F]/85 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
                      {book.description}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
                    {book.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-2.5">
                        <div className={`mt-1 p-0.5 rounded-full bg-white border border-[#E8E2D9] shadow-xs ${theme.bulletColor}`}>
                          <Icons.Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-[#4A433F]/90 text-xs sm:text-sm leading-tight font-medium">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Box & Fast Checkout CTA */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <div className="text-center sm:text-left">
                      <span className="text-[9px] text-[#4A433F]/60 uppercase tracking-widest block font-bold">E-Book Satuan:</span>
                      <span className="text-xl font-normal text-[#5A5A40] font-serif">Rp 35.000</span>
                    </div>
                    <div className="hidden sm:block w-[1px] h-8 bg-[#E8E2D9]" />
                    <button
                      onClick={() => onOpenPurchase(book.id)}
                      className={`w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-xs transition-opacity duration-200 cursor-pointer uppercase tracking-wider ${theme.btn}`}
                    >
                      Miliki Seri ini Saja
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

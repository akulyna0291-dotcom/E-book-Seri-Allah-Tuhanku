/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { Book } from '../types';

interface BookMockupProps {
  book: Book;
  interactive?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function BookMockup({ book, interactive = true, size = 'md' }: BookMockupProps) {
  // Map icons dynamically
  const IconComponent = () => {
    switch (book.iconName) {
      case 'Sparkles':
        return <Icons.Sparkles className="w-14 h-14 text-teal-600/80" />;
      case 'Eye':
        return <Icons.Eye className="w-14 h-14 text-rose-500/80" />;
      case 'Volume2':
        return <Icons.Volume2 className="w-14 h-14 text-indigo-500/80" />;
      default:
        return <Icons.BookOpen className="w-14 h-14 text-gray-500/85" />;
    }
  };

  // Sizing styles
  const sizeClasses = {
    sm: 'w-[160px] h-[220px] text-xs',
    md: 'w-[230px] h-[310px] text-sm',
    lg: 'w-[280px] h-[380px] text-base',
  };

  const badgeColors = {
    sage: 'bg-emerald-100 text-emerald-800 border-emerald-200/50',
    pink: 'bg-rose-100 text-rose-800 border-rose-200/50',
    blue: 'bg-sky-100 text-sky-800 border-sky-200/50',
  };

  const accentColors = {
    sage: 'text-emerald-700 decoration-emerald-200',
    pink: 'text-rose-600 decoration-rose-200',
    blue: 'text-sky-700 decoration-sky-200',
  };

  const decorativeBackgrounds = () => {
    switch (book.color) {
      case 'sage':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Soft decorative clouds and stars for Allah Maha Kuasa */}
            <div className="absolute top-[25%] left-[10%] w-6 h-4 bg-white/40 rounded-full blur-[1px]" />
            <div className="absolute top-[20%] right-[15%] w-8 h-5 bg-white/50 rounded-full blur-[1px]" />
            <Icons.Star className="absolute top-[12%] right-[30%] w-4 h-4 text-amber-300/60 animate-pulse" />
            <Icons.Star className="absolute top-[35%] left-[25%] w-3 h-3 text-amber-200/50 animate-pulse delay-75" />
            <Icons.Leaf className="absolute bottom-[25%] right-[12%] w-5 h-5 text-emerald-700/10" />
            <Icons.Leaf className="absolute bottom-[30%] left-[10%] w-4 h-4 text-emerald-700/10 rotate-45" />
          </div>
        );
      case 'pink':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Heart and sparkles for Allah Maha Melihat */}
            <Icons.Heart className="absolute top-[15%] left-[18%] w-4 h-4 text-rose-300/40 fill-rose-300/10" />
            <Icons.Heart className="absolute top-[12%] right-[20%] w-5 h-5 text-rose-400/30 fill-rose-400/10" />
            <Icons.Sparkles className="absolute bottom-[28%] right-[18%] w-5 h-5 text-amber-300/50" />
            <Icons.Sparkles className="absolute top-[35%] left-[15%] w-4 h-4 text-pink-300/40" />
            <div className="absolute top-[24%] right-[35%] w-5 h-5 rounded-full bg-rose-200/30 blur-sm" />
          </div>
        );
      case 'blue':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Moon, cloud, and notes for Allah Maha Mendengar */}
            <Icons.Moon className="absolute top-[12%] right-[22%] w-6 h-6 text-amber-300/40 fill-amber-200/10 rotate-12" />
            <Icons.Cloud className="absolute top-[22%] left-[12%] w-7 h-5 bg-white/30 rounded-full opacity-60" />
            <Icons.Music className="absolute bottom-[28%] left-[20%] w-4 h-4 text-sky-400/40" />
            <Icons.Heart className="absolute top-[35%] right-[15%] w-4 h-4 text-sky-300/40 fill-sky-300/10" />
          </div>
        );
    }
  };

  return (
    <div className="relative select-none" style={{ perspective: interactive ? '1200px' : 'none' }}>
      <motion.div
        whileHover={interactive ? {
          rotateY: -14,
          rotateX: 4,
          scale: 1.04,
          z: 30,
          boxShadow: "0 25px 40px -10px rgba(0,0,0,0.12), -10px 15px 30px -15px rgba(0,0,0,0.15)"
        } : undefined}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
        className={`relative ${sizeClasses[size]} bg-gradient-to-br ${book.gradient} rounded-r-xl rounded-l-md shadow-xl border border-white/50 flex flex-col justify-between p-6 overflow-hidden origin-left`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Paper depth texture line on the very right */}
        <div className="absolute top-0 right-0 w-[4px] h-full bg-black/5 rounded-r-xl border-r border-white/20" />

        {/* Book spine overlay on left */}
        <div className="absolute top-0 left-0 w-[14px] h-full bg-gradient-to-r from-black/15 via-white/10 to-transparent rounded-l-md border-r border-black/5" />
        <div className="absolute top-0 left-[14px] w-[2px] h-full bg-white/20" />

        {/* Header - Brand tag */}
        <div className="z-10 text-center flex flex-col items-center mt-2 pl-2">
          <span className="text-[9px] uppercase tracking-widest text-slate-550 font-semibold opacity-75">
            Seri Allah Tuhanku
          </span>
          <div className="w-10 h-[2px] bg-slate-300/60 mt-1.5 rounded-full" />
        </div>

        {/* Whimsical illustrative center card */}
        <div className="z-10 flex-grow flex items-center justify-center pl-2 my-2">
          <motion.div 
            animate={interactive ? {
              y: [0, -4, 0],
            } : {}}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: book.color === 'sage' ? 0 : book.color === 'pink' ? 1.2 : 2.4
            }}
            className="w-32 h-32 rounded-full bg-white/70 backdrop-blur-xs flex items-center justify-center shadow-lg shadow-black/5 border border-white/60 relative"
          >
            {/* Spinner or glowing ring */}
            <div className={`absolute inset-[-6px] rounded-full border border-dashed opacity-25 ${
              book.color === 'sage' ? 'border-emerald-500' : book.color === 'pink' ? 'border-rose-500' : 'border-sky-500'
            }`} />
            <IconComponent />
          </motion.div>
        </div>

        {/* Content detail overlay with backgrounds */}
        {decorativeBackgrounds()}

        {/* Book Title area */}
        <div className="z-10 pl-2 text-center mt-auto flex flex-col items-center">
          <span className={`inline-block px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase rounded-full border mb-2 ${badgeColors[book.color]}`}>
            {book.color === 'sage' ? 'Buku 1' : book.color === 'pink' ? 'Buku 2' : 'Buku 3'}
          </span>
          <h4 className={`font-serif text-lg font-bold leading-tight ${accentColors[book.color]} tracking-normal text-slate-800`}>
            {book.title}
          </h4>
          <span className="text-[9px] text-slate-400 mt-2 italic font-mono">
            E-book Anak Islami
          </span>
        </div>
      </motion.div>
    </div>
  );
}

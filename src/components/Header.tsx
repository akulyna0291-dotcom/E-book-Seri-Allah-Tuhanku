/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_NAME } from '../data';

interface HeaderProps {
  onOpenPurchase: (selectedId: string | null) => void;
}

export default function Header({ onOpenPurchase }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Mengapa Penting', href: '#why-important' },
    { label: 'Seri E-book', href: '#about-series' },
    { label: 'Keunggulan', href: '#advantages' },
    { label: 'Bonus', href: '#bonuses' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md shadow-black/[0.02] border-b border-[#E8E2D9] py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-full bg-[#A3B18A] flex items-center justify-center text-white font-serif font-bold transition-transform group-hover:scale-105">
            S
          </div>
          <span className="font-serif text-lg tracking-wide text-[#4A433F] group-hover:text-[#5A5A40] transition-colors">
            {BRAND_NAME}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-widest font-semibold text-[#4A433F]/75">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="relative py-1 hover:text-[#5A5A40] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#5A5A40] after:transition-all after:duration-250"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="https://wa.me/6282234573229?text=Assalamu%27alaikum%20mau%20bertanya%20tentang%20Seri%20Allah%20Tuhanku"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-[#E8E2D9]/40 rounded-xl transition-colors text-[#4A433F] hover:text-[#5A5A40]"
          >
            <Icons.MessageSquareText className="w-5 h-5" />
          </a>
          <button
            onClick={() => onOpenPurchase('bundle')}
            className="px-6 py-2.5 bg-[#5A5A40] hover:bg-[#4A433F] text-white transition-all text-xs font-semibold rounded-full shadow-sm hover:shadow cursor-pointer uppercase tracking-wider"
          >
            Beli Paket Promo
          </button>
        </div>

        {/* Burger Button for Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#4A433F] hover:text-[#5A5A40] focus:outline-none rounded-xl hover:bg-[#E8E2D9]/40 transition-colors"
        >
          {mobileMenuOpen ? (
            <Icons.X className="w-5 h-5" />
          ) : (
            <Icons.Menu className="w-5 h-5" />
          )}
        </button>

      </div>

      {/* Mobile Nav Overlay Slide */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FAF7F2] border-b border-[#E8E2D9] shadow-lg overflow-hidden absolute top-full left-0 w-full z-50"
          >
            <div className="px-5 py-5 flex flex-col gap-4 uppercase tracking-wider font-semibold text-[#4A433F] text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#5A5A40] py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-[#E8E2D9] my-1" />
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/6282234573229?text=Assalamu%27alaikum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 border border-[#E8E2D9] text-[#4A433F] rounded-full justify-center flex items-center space-x-2 bg-white/50"
                >
                  <Icons.Phone className="w-4 h-4 text-[#5A5A40]" />
                  <span className="text-[10px] uppercase tracking-widest">Hubungi CS WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPurchase('bundle');
                  }}
                  className="px-4 py-3 bg-[#5A5A40] hover:bg-[#4A433F] transition-colors text-white font-semibold rounded-full flex items-center justify-center space-x-2 shadow-sm cursor-pointer"
                >
                  <Icons.ShoppingBag className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest">Beli Paket Promo (Rp59Rb)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { BRAND_NAME } from '../data';

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-[#4A433F] text-[#FAF7F2] py-16 px-4 border-t border-[#8C6B5A]/25" id="footer">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 font-sans">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 bg-[#5A5A40] border border-[#A3B18A]/30 rounded-xl text-white">
                <Icons.BookOpen className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-normal text-white tracking-wide">{BRAND_NAME}</span>
            </div>
            <p className="text-sm text-[#FAF7F2]/80 leading-relaxed max-w-sm">
              Membentuk generasi saleh pencinta Allah SWT sejak dini melalui narasi cerita yang lembut, penuh kasih, dan visual yang asri.
            </p>
            <div className="flex items-center space-x-3.5 pt-2">
              <a 
                href="https://wa.me/6282234573229?text=Assalamu%27alaikum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8C6B5A] hover:text-white flex items-center justify-center transition-colors text-[#FAF7F2]"
              >
                <Icons.MessageSquareCode className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://instagram.com/seriallahtuhanku" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8C6B5A] hover:text-white flex items-center justify-center transition-colors text-[#FAF7F2]"
              >
                <Icons.Instagram className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FAF7F2]/60">Navigasi</h4>
            <div className="flex flex-col gap-2.5 text-sm text-[#FAF7F2]/85">
              <a href="#why-important" className="hover:text-[#A3B18A] transition-colors">Mengapa Penting</a>
              <a href="#about-series" className="hover:text-[#A3B18A] transition-colors">Seri E-book</a>
              <a href="#advantages" className="hover:text-[#A3B18A] transition-colors">Keunggulan</a>
              <a href="#bonuses" className="hover:text-[#A3B18A] transition-colors">Bonus Spesial</a>
            </div>
          </div>

          {/* Contact / Help Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FAF7F2]/60">Kontak Resmi & Bantuan</h4>
            <div className="flex flex-col gap-3 text-sm text-[#FAF7F2]/80">
              <div className="flex items-start space-x-2.5">
                <Icons.Phone className="w-4.5 h-4.5 text-[#A3B18A] flex-shrink-0 mt-0.5" />
                <span>WhatsApp: +62 822-3457-3229</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Icons.Mail className="w-4.5 h-4.5 text-[#A3B18A] flex-shrink-0 mt-0.5" />
                <span>Email: aku.lyna0291@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Icons.MapPin className="w-4.5 h-4.5 text-[#A3B18A] flex-shrink-0 mt-0.5" />
                <span>Jumput Rejo kav no 7 RT 22 RW 07 Sidoarjo, Jawa Timur, Indonesia</span>
              </div>
            </div>
          </div>

        </div>

        {/* Separator / Copyright Row */}
        <div className="mt-14 pt-8 border-t border-[#8C6B5A]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowPrivacy(true)}
              className="hover:text-[#FAF7F2] hover:underline cursor-pointer"
            >
              Kebijakan Privasi
            </button>
            <span>•</span>
            <span className="text-[#FAF7F2]/40 font-mono">v1.1 Premium Edition</span>
          </div>
        </div>

      </div>

      {/* Basic privacy overlay in a quick, elegant popup */}
      {showPrivacy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#4A433F]/80 backdrop-blur-xs font-sans">
          <div className="bg-[#FAF7F2] text-[#4A433F] max-w-md w-full rounded-3xl p-7 border border-[#E8E2D9] relative max-h-[80vh] overflow-y-auto space-y-4 shadow-xl">
            <button 
              onClick={() => setShowPrivacy(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white hover:bg-[#FAF7F2] text-[#4A433F]/70 border border-[#E8E2D9] transition-colors"
            >
              <Icons.X className="w-4 h-4" />
            </button>
            <h4 className="font-serif font-normal text-xl text-[#5A5A40]">Kebijakan Privasi</h4>
            <p className="text-xs leading-relaxed text-[#4A433F]/90">
              Kami di <strong>{BRAND_NAME}</strong> berkomitmen penuh menjaga kerahasiaan & keamanan data pribadi yang Ayah & Ibu berikan (Nama, Email, dan No. WhatsApp).
            </p>
            <div className="space-y-3 pt-1 text-xs text-[#4A433F]/85">
              <div>
                <p className="font-semibold text-[#5A5A40] text-sm">1. Penggunaan Informasi</p>
                <p className="leading-relaxed mt-0.5 text-[#4A433F]/80">Data Anda digunakan murni hanya untuk keperluan pengiriman instan file e-book digital serta update penting terkait produk parenting Islami kami.</p>
              </div>
              
              <div>
                <p className="font-semibold text-[#5A5A40] text-sm">2. Keamanan Data</p>
                <p className="leading-relaxed mt-0.5 text-[#4A433F]/80">Kami menjamin tidak pernah membagikan, meminjamkan, atau menyalahgunakan data kontak Anda ke pihak ketiga mana pun tanpa izin.</p>
              </div>
            </div>
            <button
              onClick={() => setShowPrivacy(false)}
              className="w-full py-3 bg-[#5A5A40] hover:bg-[#4A433F] text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all mt-4 cursor-pointer"
            >
              Saya Mengerti
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

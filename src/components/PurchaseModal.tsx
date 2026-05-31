/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { BOOKS_DATA, BRAND_NAME } from '../data';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelectedBookId?: string | null;
}

type Step = 'configure' | 'personal-info' | 'payment-pending' | 'success';

export default function PurchaseModal({ isOpen, onClose, initialSelectedBookId = null }: PurchaseModalProps) {
  const [step, setStep] = useState<Step>('configure');
  const [selectedBooks, setSelectedBooks] = useState<string[]>([]);
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '' });
  const [error, setError] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'qris' | 'bank_transfer'>('qris');
  const [isLoading, setIsLoading] = useState(false);

  // Sync initial selection
  useEffect(() => {
    if (isOpen) {
      if (initialSelectedBookId === 'bundle') {
        setSelectedBooks(BOOKS_DATA.map(b => b.id));
      } else if (initialSelectedBookId) {
        setSelectedBooks([initialSelectedBookId]);
      } else {
        setSelectedBooks(BOOKS_DATA.map(b => b.id)); // Default to complete bundle
      }
      setStep('configure');
      setError('');
    }
  }, [isOpen, initialSelectedBookId]);

  if (!isOpen) return null;

  // Toggle single book selection
  const handleToggleBook = (id: string) => {
    if (selectedBooks.includes(id)) {
      if (selectedBooks.length > 1) {
        setSelectedBooks(selectedBooks.filter(x => x !== id));
      } else {
        // Prevent empty selection
      }
    } else {
      setSelectedBooks([...selectedBooks, id]);
    }
  };

  const selectBundle = () => {
    setSelectedBooks(BOOKS_DATA.map(b => b.id));
  };

  // Pricing math
  const singlePrice = 35000;
  const bundlePromoPrice = 59000;
  const isBundle = selectedBooks.length === BOOKS_DATA.length;
  const totalPrice = isBundle ? bundlePromoPrice : selectedBooks.length * singlePrice;
  const normalPrice = selectedBooks.length * singlePrice;
  const discount = isBundle ? normalPrice - bundlePromoPrice : 0;

  const handleNextStep = () => {
    if (step === 'configure') {
      if (selectedBooks.length === 0) {
        setError('Pilih minimal 1 e-book untuk melanjutkan.');
        return;
      }
      setError('');
      setStep('personal-info');
    } else if (step === 'personal-info') {
      if (!form.name || !form.email || !form.whatsapp) {
        setError('Harap lengkapi semua kolom biodata.');
        return;
      }
      if (!form.email.includes('@')) {
        setError('Masukkan alamat email yang valid.');
        return;
      }
      if (form.whatsapp.length < 8) {
        setError('Masukkan nomor WhatsApp yang valid.');
        return;
      }
      setError('');
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep('payment-pending');
      }, 1000);
    }
  };

  const handleSimulatePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('success');
    }, 1500);
  };

  // Handle mock download
  const handleDownloadFile = (fileName: string) => {
    // Simulate a PDF download by triggering a small text file containing a celebratory message
    const element = document.createElement("a");
    const file = new Blob([
      `TERIMA KASIH TELAH MEMBELI SERI ALLAH TUHANKU! \n\nIni adalah file digital e-book / bonus dari buku: ${fileName}. \n\nSemoga e-book ini membawa keberkahan, mempererat bonding orang tua, dan memudahkan buah hati mengenal Allah SWT sejak usia dini. Jazakumullahu khairan!`
    ], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${fileName.replace(/\s+/g, "_")}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4A433F]/75 backdrop-blur-md">
        {/* Animated Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-[#FAF7F2] rounded-[32px] shadow-2xl overflow-hidden border border-[#E8E2D9] flex flex-col max-h-[90vh]"
        >
          {/* Close Hook */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-[#4A433F]/50 hover:text-[#4A433F] rounded-full hover:bg-white/55 border border-transparent hover:border-[#E8E2D9] transition-all cursor-pointer"
          >
            <Icons.X className="w-4 h-4" />
          </button>

          {/* Stepper Header (Except on Success) */}
          {step !== 'success' && (
            <div className="px-6 pt-6 pb-2 border-b border-[#E8E2D9] bg-white font-sans">
              <div className="flex items-center space-x-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#E8D9D0] text-[#8C6B5A] text-[9px] font-bold">✓</span>
                <span className="text-xs font-semibold text-[#8C6B5A] tracking-wider uppercase">{BRAND_NAME}</span>
              </div>
              <h3 className="text-xl font-serif font-normal text-[#5A5A40] mt-1.5 tracking-wide">Selesaikan Pembelian Anda</h3>

              {/* Step indicator bubbles */}
              <div className="flex items-center space-x-2 mt-4">
                <div className={`h-1 rounded-full flex-grow transition-all duration-300 ${step === 'configure' ? 'bg-[#5A5A40]' : 'bg-[#E8D9D0]'}`} />
                <div className={`h-1 rounded-full flex-grow transition-all duration-300 ${step === 'personal-info' ? 'bg-[#5A5A40]' : step === 'payment-pending' ? 'bg-[#E8D9D0]' : 'bg-[#E8E2D9]'}`} />
                <div className={`h-1 rounded-full flex-grow transition-all duration-300 ${step === 'payment-pending' ? 'bg-[#5A5A40]' : 'bg-[#E8E2D9]'}`} />
              </div>
            </div>
          )}

          {/* Scrollable Body */}
          <div className="flex-grow overflow-y-auto p-6">
            
            {/* STEP 1: CONFIGURE */}
            {step === 'configure' && (
              <div className="space-y-4">
                <div className="p-4 bg-[#E8D9D0]/50 border border-[#E8E2D9] rounded-2xl flex items-start space-x-3">
                  <div className="p-2 bg-white rounded-xl border border-[#E8E2D9] text-[#8C6B5A] mt-0.5">
                    <Icons.Gift className="w-4 h-4" />
                  </div>
                  <div className="font-sans">
                    <h5 className="text-xs font-semibold text-[#8C6B5A] uppercase tracking-wider">PROMO SPESIAL BUNDLE</h5>
                    <p className="text-xs text-[#4A433F] mt-1 leading-relaxed">Beli sekaligus 3 e-book hanya seharga <strong className="text-[#5A5A40] font-semibold">Rp 59.000</strong> (Hemat Rp 46.000 + Dapat seluruh 3 bonus eksklusif!)</p>
                    <button 
                      onClick={selectBundle}
                      className="text-[11px] font-bold text-[#5A5A40] underline mt-1.5 block hover:text-[#4A433F]"
                    >
                      ✓ Pilih Paket Hemat 3 Buku
                    </button>
                  </div>
                </div>

                <div className="space-y-2.5 font-sans">
                  <label className="text-xs font-bold text-[#8C6B5A] uppercase tracking-widest block">Pilih E-book:</label>
                  {BOOKS_DATA.map((book) => {
                    const isSelected = selectedBooks.includes(book.id);
                    return (
                      <div
                        key={book.id}
                        onClick={() => handleToggleBook(book.id)}
                        className={`p-3.5 rounded-3xl border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected 
                            ? 'border-[#8C6B5A] bg-[#E8D9D0]/30' 
                            : 'border-[#E8E2D9] bg-white hover:border-[#8C6B5A]/35'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-10 rounded shadow-xs flex items-center justify-center bg-gradient-to-br ${book.gradient} border border-[#E8E2D9]`}>
                            {book.color === 'sage' && <Icons.Sparkles className="w-3.5 h-3.5 text-[#5A5A40]" />}
                            {book.color === 'pink' && <Icons.Eye className="w-3.5 h-3.5 text-[#8C6B5A]" />}
                            {book.color === 'blue' && <Icons.Volume2 className="w-3.5 h-3.5 text-[#8C6B5A]" />}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#4A433F]">{book.title}</p>
                            <p className="text-[10px] text-[#4A433F]/50 uppercase tracking-widest font-bold">E-book (PDF)</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-semibold text-[#4A433F]">Rp 35.000</span>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? 'bg-[#8C6B5A] border-[#8C6B5A] text-white' : 'border-[#E8E2D9] bg-white'}`}>
                            {isSelected && <Icons.Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {isBundle && (
                  <div className="p-3 bg-[#D1E0D7]/50 border border-[#A3B18A]/30 rounded-2xl flex items-center space-x-2 text-[#5A5A40] text-xs">
                    <Icons.BadgeAlert className="w-4 h-4 flex-shrink-0 text-[#5A5A40]" />
                    <span>Mendapatkan <strong>3 Bonus Lembar Aktivitas, Poster & Checklist</strong> secara Gratis!</span>
                  </div>
                )}
              </div>
            )}

            {/* STEP 2: PERSONAL INFO */}
            {step === 'personal-info' && (
              <div className="space-y-4 font-sans">
                <p className="text-xs text-[#4A433F]/75 leading-relaxed">Isi biodata Anda dengan benar untuk keperluan pengiriman resi, notifikasi WhatsApp serta link unduhan cadangan.</p>
                
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-[#8C6B5A] uppercase tracking-wider block mb-1">Nama Lengkap</label>
                    <input
                      type="text"
                      placeholder="Contoh: Ibu Rina Amalia"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-full border border-[#E8E2D9] focus:outline-none focus:ring-2 focus:ring-[#8C6B5A]/40 text-sm bg-white text-[#4A433F]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#8C6B5A] uppercase tracking-wider block mb-1">Alamat Email</label>
                    <input
                      type="email"
                      placeholder="Contoh: rina@gmail.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-full border border-[#E8E2D9] focus:outline-none focus:ring-2 focus:ring-[#8C6B5A]/40 text-sm bg-white text-[#4A433F]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#8C6B5A] uppercase tracking-wider block mb-1">Nomor WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="Contoh: 08123456789"
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      className="w-full px-4 py-3 rounded-full border border-[#E8E2D9] focus:outline-none focus:ring-2 focus:ring-[#8C6B5A]/40 text-sm bg-white text-[#4A433F]"
                    />
                    <span className="text-[10px] text-[#4A433F]/50 mt-1 block">Link e-book akan di-generate instan & otomatis meluncur ke nomor ini.</span>
                  </div>
                </div>

                <div className="border-t border-[#E8E2D9] pt-4 space-y-2">
                  <label className="text-xs font-bold text-[#8C6B5A] uppercase tracking-wider block mb-1">Pilih Metode Pembayaran</label>
                  <div className="grid grid-cols-2 gap-2">
                    <div
                      onClick={() => setPaymentMethod('qris')}
                      className={`p-3 rounded-2xl border cursor-pointer flex items-center justify-between text-xs font-bold transition-all ${paymentMethod === 'qris' ? 'border-[#8C6B5A] bg-[#E8D9D0]/30 text-[#4A433F]' : 'border-[#E8E2D9] bg-white hover:border-[#8C6B5A]/30 text-[#4A433F]/70'}`}
                    >
                      <span>QRIS (E-Wallet Instan)</span>
                      <Icons.QrCode className={`w-4 h-4 ${paymentMethod === 'qris' ? 'text-[#8C6B5A]' : 'text-[#4A433F]/40'}`} />
                    </div>
                    <div
                      onClick={() => setPaymentMethod('bank_transfer')}
                      className={`p-3 rounded-2xl border cursor-pointer flex items-center justify-between text-xs font-bold transition-all ${paymentMethod === 'bank_transfer' ? 'border-[#8C6B5A] bg-[#E8D9D0]/30 text-[#4A433F]' : 'border-[#E8E2D9] bg-white hover:border-[#8C6B5A]/30 text-[#4A433F]/70'}`}
                    >
                      <span>Transfer Bank (Manual)</span>
                      <Icons.CreditCard className={`w-4 h-4 ${paymentMethod === 'bank_transfer' ? 'text-[#8C6B5A]' : 'text-[#4A433F]/40'}`} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: PAYMENT PENDING */}
            {step === 'payment-pending' && (
              <div className="space-y-5 text-center font-sans">
                <div className="max-w-[200px] mx-auto p-4 bg-white border border-[#E8E2D9] rounded-3xl shadow-xs">
                  {paymentMethod === 'qris' ? (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between px-1">
                        <span className="text-[9px] text-[#8C6B5A] font-bold">QRIS GPN</span>
                        <span className="text-[9px] text-[#4A433F]/40 font-serif">ALLAH TUHANKU</span>
                      </div>
                      <div className="w-full aspect-square bg-[#FAF7F2] rounded-2xl flex flex-col items-center justify-center p-3 border border-[#E8E2D9]">
                        {/* Mock QR Code Pattern */}
                        <div className="grid grid-cols-4 gap-1.5 w-full h-full opacity-70">
                          {Array.from({ length: 16 }).map((_, i) => (
                            <div key={i} className={`rounded-xs ${i % 3 === 0 || i % 5 === 1 ? 'bg-[#4A433F]' : 'bg-transparent'}`} />
                          ))}
                        </div>
                      </div>
                      <span className="text-[9px] text-[#4A433F]/60 block leading-normal">Pindai menggunakan GoPay, OVO, ShopeePay, atau BCA Mobile</span>
                    </div>
                  ) : (
                    <div className="text-left space-y-3 py-2 pr-1 pl-1">
                      <div>
                        <p className="text-[9px] font-bold text-[#8C6B5A] uppercase tracking-widest">Bank Penerima</p>
                        <p className="text-xs font-bold text-[#4A433F] mt-0.5">Bank Syariah Indonesia (BSI)</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-[#8C6B5A] uppercase tracking-widest">Nomor Rekening</p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-mono font-bold text-[#8C6B5A]">7819-2019-33</p>
                          <span className="text-[9px] font-bold px-1.5 py-0.5 bg-[#E8D9D0] text-[#8C6B5A] rounded">Salin</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-[#8C6B5A] uppercase tracking-widest">Atas Nama</p>
                        <p className="text-xs font-bold text-[#4A433F] mt-0.5">SERI ALLAH TUHANKU</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 bg-[#FAF7F2]/50 border border-[#E8E2D9] rounded-3xl">
                  <p className="text-xs text-[#4A433F]/70">Jumlah yang harus disetor:</p>
                  <p className="text-2xl font-bold text-[#5A5A40] font-serif mt-1">
                    Rp {totalPrice.toLocaleString('id-ID')}
                  </p>
                  <p className="text-[10px] text-[#8C6B5A] mt-1.5 flex items-center justify-center gap-1.5">
                    <Icons.Lock className="w-3.5 h-3.5" /> Transaksi Terenkripsi & Aman
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-[#4A433F]/70 flex items-center justify-center gap-1.5 leading-none">
                    <Icons.Loader className="w-3.5 h-3.5 animate-spin text-[#8C6B5A]" />
                    Menunggu konfirmasi pembayaran otomatis...
                  </p>
                  <button
                    onClick={handleSimulatePayment}
                    className="w-full text-xs font-bold py-3.5 px-4 rounded-full text-white bg-[#5A5A40] hover:bg-[#4A433F] transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    🚀 Simulasi Pembayaran Sukses (Instan)
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: SUCCESS WITH DOWNLOADS */}
            {step === 'success' && (
              <div className="space-y-5 text-center font-sans">
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="w-16 h-16 rounded-full bg-[#D1E0D7] border border-[#A3B18A]/40 text-[#5A5A40] flex items-center justify-center mb-3">
                    <Icons.CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                  </div>
                  <h4 className="text-xl font-serif font-normal text-[#5A5A40]">Alhamdulillah! Pembayaran Berhasil</h4>
                  <p className="text-xs text-[#4A433F]/75 mt-1.5 max-w-[325px] leading-relaxed">Terima kasih, <strong>{form.name}</strong>. E-book dan bonus eksklusif Anda siap untuk diunduh secara instan di bawah ini.</p>
                </div>

                <div className="text-left space-y-3">
                  <p className="text-xs font-bold text-[#8C6B5A] uppercase tracking-widest">File E-Book Anda (Format PDF):</p>
                  <div className="space-y-2">
                    {BOOKS_DATA.filter(b => selectedBooks.includes(b.id)).map(book => (
                      <div key={book.id} className="p-3.5 bg-white border border-[#E8E2D9] rounded-2xl flex items-center justify-between shadow-xs">
                        <div className="flex items-center space-x-2.5">
                          <Icons.FileText className="w-4.5 h-4.5 text-[#8C6B5A]" />
                          <span className="text-xs font-semibold text-[#4A433F]">{book.title} (E-book)</span>
                        </div>
                        <button
                          onClick={() => handleDownloadFile(book.title)}
                          className="flex items-center space-x-1 py-1.5 px-3.5 bg-[#FAF7F2] hover:bg-[#E8D9D0]/50 rounded-full text-[11px] font-semibold text-[#8C6B5A] border border-[#E8E2D9] transition-colors"
                        >
                          <Icons.Download className="w-3.5 h-3.5" />
                          <span>Unduh</span>
                        </button>
                      </div>
                    ))}
                  </div>

                  {isBundle && (
                    <>
                      <p className="text-xs font-bold text-[#8C6B5A] uppercase tracking-widest pt-2">Bonus Spesial Anda:</p>
                      <div className="space-y-2">
                        <div className="p-3.5 bg-white border border-[#E8E2D9] rounded-2xl flex items-center justify-between shadow-xs">
                          <div className="flex items-center space-x-2.5">
                            <Icons.Palette className="w-4.5 h-4.5 text-[#8C6B5A]" />
                            <span className="text-xs font-semibold text-[#4A433F]">Lembar Aktivitas Mewarnaiku</span>
                          </div>
                          <button
                            onClick={() => handleDownloadFile("Bonus Halaman Mewarnai Islami")}
                            className="flex items-center space-x-1 py-1.5 px-3.5 bg-[#FAF7F2] hover:bg-[#E8D9D0]/50 rounded-full text-[11px] font-semibold text-[#8C6B5A] border border-[#E8E2D9] transition-colors"
                          >
                            <Icons.Download className="w-3.5 h-3.5" />
                            <span>Unduh</span>
                          </button>
                        </div>
                        <div className="p-3.5 bg-white border border-[#E8E2D9] rounded-2xl flex items-center justify-between shadow-xs">
                          <div className="flex items-center space-x-2.5">
                            <Icons.Map className="w-4.5 h-4.5 text-[#5A5A40]" />
                            <span className="text-xs font-semibold text-[#4A433F]">Poster Doa Harian Anak</span>
                          </div>
                          <button
                            onClick={() => handleDownloadFile("Bonus Poster Doa Harian")}
                            className="flex items-center space-x-1 py-1.5 px-3.5 bg-[#FAF7F2] hover:bg-[#E8D9D0]/50 rounded-full text-[11px] font-semibold text-[#8C6B5A] border border-[#E8E2D9] transition-colors"
                          >
                            <Icons.Download className="w-3.5 h-3.5" />
                            <span>Unduh</span>
                          </button>
                        </div>
                        <div className="p-3.5 bg-white border border-[#E8E2D9] rounded-2xl flex items-center justify-between shadow-xs">
                          <div className="flex items-center space-x-2.5">
                            <Icons.CheckSquare className="w-4.5 h-4.5 text-[#8C6B5A]" />
                            <span className="text-xs font-semibold text-[#4A433F]">Checklist Kebiasaan Baik Harian</span>
                          </div>
                          <button
                            onClick={() => handleDownloadFile("Bonus Checklist Kebiasaan Baik")}
                            className="flex items-center space-x-1.5 py-1.5 px-3.5 bg-[#FAF7F2] hover:bg-[#E8D9D0]/50 rounded-full text-[11px] font-semibold text-[#8C6B5A] border border-[#E8E2D9] transition-colors"
                          >
                            <Icons.Download className="w-3.5 h-3.5" />
                            <span>Unduh</span>
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-4 bg-[#D1E0D7]/40 border border-[#A3B18A]/20 text-[#5A5A40] rounded-2xl text-center text-xs leading-relaxed">
                  📧 Link download dan invoice telah dikirimkan ke email <strong>{form.email}</strong> & WhatsApp <strong>{form.whatsapp}</strong>.
                </div>

                <button
                  onClick={() => {
                    onClose();
                    setStep('configure');
                  }}
                  className="w-full py-4 bg-[#5A5A40] hover:bg-[#4A433F] rounded-full text-white font-semibold text-sm transition-all cursor-pointer uppercase tracking-wider"
                >
                  Selesai
                </button>
              </div>
            )}

            {error && (
              <div className="mt-4 p-4 bg-rose-50/50 border border-rose-100 text-[#4A433F] text-xs rounded-2xl font-bold flex items-center space-x-2">
                <Icons.AlertCircle className="w-4.5 h-4.5 flex-shrink-0 text-rose-500" />
                <span>{error}</span>
              </div>
            )}
          </div>

          {/* Stepper Footer (Except on Pending & Success Steps) */}
          {step !== 'payment-pending' && step !== 'success' && (
            <div className="p-6 border-t border-[#E8E2D9] bg-white flex items-center justify-between font-sans">
              <div>
                <p className="text-[10px] text-[#4A433F]/60 capitalize">Total Pembayaran ({selectedBooks.length} Buku):</p>
                <div className="flex items-baseline space-x-1.5">
                  <span className="text-xl font-serif font-semibold text-[#5A5A40]">
                    Rp {totalPrice.toLocaleString('id-ID')}
                  </span>
                  {discount > 0 && (
                    <span className="text-xs line-through text-[#4A433F]/40 font-medium">
                      Rp {normalPrice.toLocaleString('id-ID')}
                    </span>
                  )}
                </div>
              </div>
              <button
                disabled={isLoading}
                onClick={handleNextStep}
                className="px-6 py-3.5 rounded-full bg-[#5A5A40] hover:bg-[#4A433F] text-white text-xs font-semibold tracking-wider uppercase transition-colors flex items-center space-x-1.5 disabled:opacity-50 cursor-pointer"
              >
                {isLoading ? (
                  <Icons.Loader className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <span>Lanjutkan</span>
                    <Icons.ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

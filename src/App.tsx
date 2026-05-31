/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyImportant from './components/WhyImportant';
import AboutSeries from './components/AboutSeries';
import ProductAdvantages from './components/ProductAdvantages';
import BonusSection from './components/Bonus';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ClosingCTA from './components/ClosingCTA';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import PurchaseModal from './components/PurchaseModal';

export default function App() {
  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

  const openPurchaseModal = (bookId: string | null) => {
    setSelectedBookId(bookId);
    setIsPurchaseOpen(true);
  };

  const closePurchaseModal = () => {
    setIsPurchaseOpen(false);
    setSelectedBookId(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#4A433F] font-sans selection:bg-[#A3B18A] selection:text-white overflow-x-hidden antialiased">
      {/* Premium Fixed Header */}
      <Header onOpenPurchase={openPurchaseModal} />

      {/* Hero Section */}
      <Hero onOpenPurchase={openPurchaseModal} />

      {/* SECTION 2 - Why It's Critical */}
      <WhyImportant />

      {/* SECTION 3 - About the Book Series */}
      <AboutSeries onOpenPurchase={openPurchaseModal} />

      {/* SECTION 4 - Core Product Advantages */}
      <ProductAdvantages />

      {/* SECTION 5 - Special Premium Bonuses */}
      <BonusSection onOpenPurchase={openPurchaseModal} />

      {/* SECTION 6 - Parents Testimonials */}
      <Testimonials />

      {/* SECTION 7 - FAQ Accordion */}
      <FAQ />

      {/* SECTION 8 - Closing Core CTA */}
      <ClosingCTA onOpenPurchase={openPurchaseModal} />

      {/* Footer Area with Contacts, Privacy Overlay, Copyright */}
      <Footer />

      {/* Mobile Sticky bottom conversion bar */}
      <MobileStickyCTA onOpenPurchase={openPurchaseModal} />

      {/* Interactive Checkout and Downloads Portal */}
      <PurchaseModal 
        isOpen={isPurchaseOpen} 
        onClose={closePurchaseModal} 
        initialSelectedBookId={selectedBookId} 
      />
    </div>
  );
}

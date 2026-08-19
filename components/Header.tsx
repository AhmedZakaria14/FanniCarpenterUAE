'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781715339/%D9%86%D8%AC%D8%A7%D8%B1_%D8%AF%D8%A8%D9%8A_sobbgv.png"
              alt="نجار الامارات fannicarpenteruae"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <span className="text-xl md:text-2xl font-bold tracking-tight text-amber-900">
              نجار الامارات <span className="text-stone-500 text-sm hidden md:inline-block">fannicarpenteruae</span>
            </span>
          </Link>

          <nav className="hidden md:flex flex-row-reverse items-center gap-6 font-semibold text-sm text-stone-800">
            <Link href="/blog" className="hover:text-amber-700 transition-colors">المدونة</Link>
            <Link href="/services/doors" className="hover:text-amber-700 transition-colors">الأبواب</Link>
            <Link href="/services/kitchens" className="hover:text-amber-700 transition-colors">المطابخ</Link>
            <Link href="/services/wardrobes" className="hover:text-amber-700 transition-colors">الخزائن والغرف</Link>
            <Link href="/services/pergolas" className="hover:text-amber-700 transition-colors">المظلات والديكور</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/971505001597?text=مرحباً، أحتاج إلى خدمة نجارة."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-transform hover:scale-105 shadow-md"
            >
              <span>دعم واتساب سريع</span>
              <Phone className="w-4 h-4 rtl:scale-x-[-1]" />
            </a>
          </div>

          <button
            className="md:hidden p-2 text-stone-600 hover:bg-stone-100 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-stone-200 shadow-lg py-4 px-4 flex flex-col gap-4 z-40">
          <nav className="flex flex-col gap-4 font-bold text-stone-800 text-right">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-700 transition-colors border-b border-stone-100 pb-2">الرئيسية</Link>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-700 transition-colors border-b border-stone-100 pb-2">المدونة</Link>
            <Link href="/services/doors" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-700 transition-colors border-b border-stone-100 pb-2">الأبواب</Link>
            <Link href="/services/kitchens" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-700 transition-colors border-b border-stone-100 pb-2">المطابخ</Link>
            <Link href="/services/wardrobes" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-700 transition-colors border-b border-stone-100 pb-2">الخزائن وغرف النوم</Link>
            <Link href="/services/pergolas" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-700 transition-colors border-b border-stone-100 pb-2">المظلات والديكور</Link>
          </nav>

          <div className="flex flex-col gap-3 mt-2">
            <a
              href="https://wa.me/971505001597?text=مرحباً، أحتاج إلى خدمة نجارة."
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl font-bold w-full"
            >
              <span>دعم واتساب سريع</span>
              <Phone className="w-5 h-5 rtl:scale-x-[-1]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

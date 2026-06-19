import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 pt-16 pb-8 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12 border-b border-stone-800 pb-12">
          {/* Brand */}
          <div className="text-center md:text-right">
            <Link href="/" className="inline-flex flex-col items-center gap-2 mb-4">
              <Image
                src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781715339/%D9%86%D8%AC%D8%A7%D8%B1_%D8%AF%D8%A8%D9%8A_sobbgv.png"
                alt="نجار الامارات fannicarpenteruae"
                width={60}
                height={60}
                className="object-contain filter saturate-200 brightness-110"
              />
              <span className="text-xl font-bold text-amber-500">
                نجار الامارات
              </span>
              <span className="text-stone-500 text-xs tracking-widest font-mono">
                 FANNICARPENTERUAE
              </span>
            </Link>
            <p className="text-stone-400 text-sm max-w-sm mt-4">
              الخيار الأول لخدمات النجارة والديكور الخشبي في دبي والشارقة وعجمان. دقة في العمل وسرعة في الإنجاز.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 font-medium">
            <div className="flex flex-col gap-3">
              <span className="text-xs text-stone-400 uppercase tracking-widest mb-1">أهم المقالات</span>
              <ul className="flex flex-col gap-2 text-sm text-stone-300">
                <li><Link href="/carpenter-in-dubai" className="hover:text-amber-500 transition-colors">نجار في دبي</Link></li>
                <li><Link href="/carpenter-in-sharjah" className="hover:text-amber-500 transition-colors">نجار في الشارقة</Link></li>
                <li><Link href="/carpenter-in-ajman" className="hover:text-amber-500 transition-colors">نجار في عجمان</Link></li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-3">
              <span className="text-xs text-stone-400 uppercase tracking-widest mb-1">مناطق التغطية</span>
              <div className="flex gap-2 text-sm font-semibold text-stone-300">
                <span className="bg-stone-800 px-2 py-0.5 rounded">دبي</span>
                <span className="bg-stone-800 px-2 py-0.5 rounded">الشارقة</span>
                <span className="bg-stone-800 px-2 py-0.5 rounded">عجمان</span>
              </div>
            </div>
            <div className="h-full hidden md:block w-px bg-stone-700"></div>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-stone-400 uppercase tracking-widest mb-1">اتصل بنا</span>
              <span className="text-xl font-bold font-mono text-amber-500 dir-ltr">
                +971 50 500 1597
              </span>
              <a href="https://wa.me/971505001597" target="_blank" rel="noopener noreferrer" className="text-green-400 font-bold text-sm hover:underline mt-2">
                متاح الآن أونلاين لمراسلة واتساب
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="text-center text-xs text-stone-400">
            <p>© {new Date().getFullYear()} نجار الامارات fannicarpenteruae. جميع الحقوق محفوظة.</p>
          </div>

          <a 
            href="https://nasharhub.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-stone-800/40 backdrop-blur-sm border border-stone-700/50 rounded-2xl hover:border-amber-500/50 hover:bg-stone-800/80 transition-all duration-500 shadow-xl"
            dir="rtl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            <span className="relative text-xs text-stone-400 group-hover:text-stone-300 transition-colors">تم التصميم والتطوير بواسطة</span>
            <span className="relative text-sm font-black bg-gradient-to-l from-amber-200 to-amber-500 bg-clip-text text-transparent transform group-hover:scale-105 transition-transform dir-ltr">
              NasharHub.com
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

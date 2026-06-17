import Image from 'next/image';
import carpenterHeroUrl from '../src/assets/images/carpenter_hero_uae_1781714463317.jpg';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-900">
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
        <Image
          src={carpenterHeroUrl}
          alt="نجار محترف في العمل"
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
      </div>
      <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-right space-y-6">
          <div className="inline-block px-3 py-1 bg-amber-600/20 border border-amber-500/30 text-amber-400 font-bold rounded-full text-xs">
            أفضل نجار في الإمارات
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight text-white tracking-tight">
            نجارة احترافية <br/>
            <span className="text-amber-500">فالك طيب</span> الحين يوصلك
          </h1>
          <p className="text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            نقدم خدمات تصميم وتصليح الأثاث في دبي والشارقة وعجمان بدقة وإخلاص. شغلنا نظيف وسريع وضمان على كل خدمة.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a 
              href="https://wa.me/971505001597?text=مرحباً، أريد حجز موعد مع النجار."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
            >
              <span>احجز موعدك الحين</span>
            </a>
            
            <a 
              href="#services"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm border border-white/20 transition-all"
            >
              <span>شوف أعمالنا</span>
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 pt-8 text-sm font-semibold text-stone-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>متاحون الآن للرد</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⭐ 4.9/5 تقييم العملاء</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

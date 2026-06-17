import { MessageCircle, PhoneCall } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      {/* Call Button */}
      <a
        href="tel:+971505001597"
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group relative"
        aria-label="اتصل بنا الآن"
      >
        <PhoneCall className="w-7 h-7 rtl:scale-x-[-1]" />
        
        {/* Tooltip */}
        <span className="absolute left-full ml-4 opacity-0 group-hover:opacity-100 bg-white text-gray-900 text-sm font-bold py-2 px-3 rounded-lg shadow-md whitespace-nowrap transition-opacity duration-300 pointer-events-none">
          اتصل بنا الآن
          {/* Little triangle pointer */}
          <span className="absolute top-1/2 -left-1.5 -translate-y-1/2 border-[6px] border-transparent border-r-white"></span>
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/971505001597?text=مرحباً، أود طلب خدمة نجار."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group relative"
        aria-label="تواصل معنا عبر واتساب"
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Tooltip */}
        <span className="absolute left-full ml-4 opacity-0 group-hover:opacity-100 bg-white text-gray-900 text-sm font-bold py-2 px-3 rounded-lg shadow-md whitespace-nowrap transition-opacity duration-300 pointer-events-none">
          تحتاج مساعدة؟ تواصل معنا
          {/* Little triangle pointer */}
          <span className="absolute top-1/2 -left-1.5 -translate-y-1/2 border-[6px] border-transparent border-r-white"></span>
        </span>
      </a>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import heroAjman from "@/src/assets/images/carpenter_ajman_seo_hero_1781717126651.jpg";
import heroDubai from "@/src/assets/images/carpenter_dubai_seo_hero_1781717141850.jpg";
import heroSharjah from "@/src/assets/images/carpenter_sharjah_seo_hero_1781717157117.jpg";

const articles = [
  {
    title: "نجار في دبي 0505001597",
    excerpt: "أفضل نجار في دبي من نجار الامارات لتركيب وإصلاح الأثاث والأبواب والشبابيك باحترافية عالية وأسعار تنافسية وخدمة سريعة في دبي.",
    href: "/carpenter-in-dubai",
    image: heroDubai,
  },
  {
    title: "نجار في الشارقة 24 ساعة",
    excerpt: "نجار محترف في الشارقة من نجار الامارات يقدم خدمات فك وتركيب وتصليح وصيانة الأثاث وغرف النوم والمطابخ والخزائن بجودة عالية.",
    href: "/carpenter-in-sharjah",
    image: heroSharjah,
  },
  {
    title: "نجار في عجمان - خدمات متكاملة",
    excerpt: "نجار في عجمان لجميع اعمال النجارة من تفصيل أثاث، تركيب أبواب وشبابيك خشبية، فك وتركيب غرف نوم، وتصليح أثاث خشبي في عجمان بأسعار منافسة.",
    href: "/carpenter-in-ajman",
    image: heroAjman,
  }
];

export function BlogSection() {
  return (
    <section className="py-20 bg-stone-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-6 drop-shadow-sm">
            أحدث <span className="text-amber-600">المقالات</span> والنصائح
          </h2>
          <div className="w-24 h-1.5 bg-amber-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-medium">
            تعرف على أحدث خدماتنا وأفضل النصائح للحفاظ على الأثاث والديكورات الخشبية في مختلف إمارات الدولة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link 
              key={index} 
              href={article.href}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-stone-600 text-sm mb-6 flex-grow leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between text-amber-600 font-bold text-sm">
                  <span>اقرأ المزيد</span>
                  <span className="transform rtl:rotate-180 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import heroImg from '@/src/assets/images/carpenter_sharjah_seo_hero_1781717157117.jpg';
import { CheckCircle2, PhoneCall } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'نجار في الشارقة 24 ساعة 0505001597 - نجار الامارات',
  description: 'نجار محترف في الشارقة من نجار الامارات يقدم خدمات فك وتركيب وتصليح وصيانة الأثاث وغرف النوم والمطابخ والخزائن بجودة عالية. اتصل الآن 0505001597.',
};

export default function CarpenterInSharjahPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pb-24">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px]">
          <Image
            src={heroImg}
            alt="نجار في الشارقة"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/60"></div>
          <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <span className="text-amber-500 font-bold tracking-wider mb-4 block">شركة نجار الامارات fannicarpenteruae</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                نجار في الشارقة 24 ساعة
              </h1>
              <p className="text-xl text-stone-200 mb-8 max-w-2xl">
                خدمات فنية متكاملة تتضمن فك وتركيب القطع الخشبية، دواليب الملابس، والمطابخ. صيانة دقيقة على مدار الساعة.
              </p>
              <a 
                href="https://wa.me/971505001597?text=مرحباً، أود استشارة نجار في الشارقة."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-lg"
              >
                <PhoneCall className="w-5 h-5 rtl:scale-x-[-1]" />
                <span>حجز سريع في الشارقة 0505001597</span>
              </a>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <article className="prose prose-stone prose-lg max-w-none prose-headings:text-amber-900 prose-a:text-amber-600">
                  <p className="lead text-xl text-stone-600 font-medium mb-8">
                    يعد <strong>نجار في الشارقة</strong> من فريق <strong>نجار الامارات fannicarpenteruae</strong> الخيار الأفضل لإتمام أعمال الديكور الخشبي وإصلاح الأثاث. نحن نقدم أفضل الحلول لجميع الأعمال الخشبية، بدءاً من الأبواب وحتى الديكورات، مع التزام بأعلى المواصفات والجودة الشاملة وأقل التكاليف في الإمارة الباسمة.
                  </p>

                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 mb-12">
                    <h3 className="text-xl font-bold text-stone-900 mb-4 mt-0">جدول المحتويات</h3>
                    <ul className="grid md:grid-cols-2 gap-2 m-0 p-0 list-none font-medium text-stone-700 text-sm">
                      <li><a href="#carpenter-sharjah" className="no-underline hover:text-amber-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> أفضل نجار بالشارقة</a></li>
                      <li><a href="#services-list" className="no-underline hover:text-amber-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> تفصيل المطابخ وغرف النوم</a></li>
                      <li><a href="#doors-locks" className="no-underline hover:text-amber-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> صيانة الأبواب وفتح الأقفال</a></li>
                      <li><a href="#wardrobes" className="no-underline hover:text-amber-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> تفصيل دواليب ذكية</a></li>
                      <li><a href="#areas" className="no-underline hover:text-amber-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> المناطق المغطاة في الشارقة</a></li>
                      <li><a href="#faq" className="no-underline hover:text-amber-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> الأسئلة الشائعة للنجارة</a></li>
                    </ul>
                  </div>

                  <h2 id="carpenter-sharjah">أفضل نجار في الشارقة لمتطلبات النجارة العصرية</h2>
                  <p>
                    اختيار أفضل نجار في الشارقة يأتي دوماً مقترناً بمستوى الاحترافية ودقة العمل، حيث يمتاز فنيونا بقدرتهم على تنفيذ كلاسيكيات الأثاث وحتى التشطيبات المودرن الحديثة بشكل متكامل.
                    نراعي عند التصميم استخدام أفضل الأقشاب والألواح المتينة والمقاومة للكسور لتناسب تباين الرطوبة الشديد. ننجز مهامنا بكفاءة منقطعة النظير ليتم تسليم المشروع بالموعد المحدد سواء في قلب الشارقة، أو في أرجائها الواسعة.
                  </p>

                  <h2 id="services-list">تفصيل غرف النوم والمطابخ الرائعة</h2>
                  <p>
                    يقدم فني نجار في الشارقة خدمة تشمل تصميم غرف النوم والخزائن ومكتبات التلفاز المتميزة. <Link href="/services/kitchens">تفصيل المطابخ</Link> يحظى بنصيب الأسد في تصنيفنا للجودة. 
                    نقوم بتركيب دواليب المطبخ القوية واستغلال الفراغات بأسلوب حديث يوسع المساحات ويعطي مظهراً فخماً وراقياً. 
                    نحن بمثابة <strong>منجرة متكاملة في الشارقة</strong> نلبي طلبات التصنيع، والإصلاح، والتنجيد.
                  </p>

                  <Image src={heroImg} alt="منجرة متكاملة في الشارقة" className="w-full h-[400px] object-cover rounded-2xl my-8" unoptimized />

                  <h2 id="doors-locks">نجار أبواب وفتح أقفال في الشارقة</h2>
                  <p>
                    <Link href="/services/doors">التعامل مع الأبواب والشبابيك</Link> هو اختصاص بالغ الأهمية؛ نتعامل مع إصلاح الأبواب المتعسرة والمقوسة، ونعيد ضبط الميزان في المفصلات لمنع أصوات الصرير المزعجة. كما نوفر خدمة طوارئ لفتح الأقفال المستعصية دون خدش الأبواب الثمينة، أو تغيير قلب الإسطوانة والكوالين للأبواب العادية والمسلحة لتوفير أمناً مطلقاً.
                  </p>

                  <h2 id="wardrobes">تفصيل دواليب ذكية (الخزائن الجدارية)</h2>
                  <p>
                    إذا كنت تعاني من تشتت المساحات ومحدوديتها، فيقوم خبراؤنا <Link href="/services/wardrobes">بتفصيل الخزائن والدواليب المدمجة داخل الحائط</Link> لتوفير حلول ذكية وعصرية تناسب الفلل الحديثة والشقق في الشارقة لتوفير مساحات للملابس مع أرفف مخفية ومناطق تزيين عملية.
                  </p>

                  <h2 id="areas">المجتمعات والمناطق التي نصل إليها بسرعة</h2>
                  <p>
                    خدمات فريقنا الجوال في الشارقة تمتد لتشمل أغلب أحياء المدينة الرئيسية: 
                    منطقة المجاز الأنيقة، الخان والتعاون، مويلح والنهدة، القرائن والزاهية ومسار للحصول على ديكورات داخلية وخارجية (برجولات رائعة في الحدائق).  
                    نحن أينما تواجدتم لنلبي خدمات الفك والتركيب والتغليف أثناء الانتقالات من شقة إلى أخرى.
                  </p>

                  <h2 id="faq">أسئلة وأختتمات عن نجار الشارقة</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-stone-900">هل يمكنني الاستعانة بالفريق في أي وقت؟</h3>
                      <p>مطلقاً، يتواجد متخصصو الطوارئ لدينا على مدار 24 ساعة في الشارقة لمواجهة أعطال الأقفال، وإصلاح الكوائن أو تضرر المطابخ لتأمينك بسلامة.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900">كيف تقاس التكلفة؟ وهل تتضمن ضماناً؟</h3>
                      <p>نعمل بشفافية عالية وتحدد التكلفة بناءً على المجهود والمواد المختارة بعد زيارة تفصيلية. وبكل تأكيد نمنح عملائنا ضمانات تعزز من راحتهم وموثوقيتهم بأعمالنا.</p>
                    </div>
                  </div>

                  <hr className="my-12 border-stone-200" />
                  <p className="text-center font-bold text-xl text-stone-800">
                    تبحث عن أقرب منجرة في الشارقة ومقاول نجارة متميز؟ اتصل بنا فوراً: <br/>
                    <a href="https://wa.me/971505001597" className="text-green-600 text-3xl font-mono mt-2 inline-block dir-ltr">
                      +971 50 500 1597
                    </a>
                  </p>
                </article>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="sticky top-28 space-y-6">
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                    <h3 className="text-lg font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">فروعنا أيضاً</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/carpenter-in-dubai" className="flex items-center justify-between text-stone-600 hover:text-amber-600 font-medium transition-colors bg-white p-3 rounded-xl border border-stone-100 shadow-sm hover:shadow-md">
                          <span>نجار في دبي</span>
                          <span className="text-xs bg-stone-100 text-stone-500 py-1 px-2 rounded-lg">اقرأ المزيد</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/carpenter-in-ajman" className="flex items-center justify-between text-stone-600 hover:text-amber-600 font-medium transition-colors bg-white p-3 rounded-xl border border-stone-100 shadow-sm hover:shadow-md">
                          <span>نجار في عجمان</span>
                          <span className="text-xs bg-stone-100 text-stone-500 py-1 px-2 rounded-lg">اقرأ المزيد</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-stone-900 to-stone-800 p-8 rounded-2xl text-center text-white shadow-xl">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <PhoneCall className="w-8 h-8 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">نجار في إمارة الشارقة</h3>
                    <p className="text-sm text-stone-300 mb-6">نحن الخيار الذكي لك لتغطية سريعة بأسعار مناسبة داخل الشارقة والمناطق المحيطة.</p>
                    <a 
                      href="https://wa.me/971505001597"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold py-3 rounded-xl transition-colors mb-3"
                    >
                      تواصل معنا الآن للأسعار
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "هل يمكنني الاستعانة بالفريق في أي وقت؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "مطلقاً، يتواجد متخصصو الطوارئ لدينا على مدار 24 ساعة في الشارقة لمواجهة أعطال الأقفال، وإصلاح الكوائن أو تضرر المطابخ لتأمينك بسلامة."
                }
              },
              {
                "@type": "Question",
                "name": "كيف تقاس التكلفة؟ وهل تتضمن ضماناً؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "نعمل بشفافية عالية وتحدد التكلفة بناءً على المجهود والمواد المختارة بعد زيارة تفصيلية. وبكل تأكيد نمنح عملائنا ضمانات تعزز من راحتهم وموثوقيتهم بأعمالنا."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import heroImg from '@/src/assets/images/carpenter_ajman_seo_hero_1781717126651.jpg';
import { CheckCircle2, PhoneCall } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'نجار في عجمان - 0505001597 اعمال نجارة نجار الامارات',
  description: 'نجار في عجمان لجميع اعمال النجارة من تفصيل أثاث، تركيب أبواب وشبابيك خشبية، فك وتركيب غرف نوم، تصليح أثاث خشبي عجمان، أسعار تنافسية وخبرة عالية. خدمة 24 ساعة.',
};

export default function CarpenterInAjmanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pb-24">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px]">
          <Image
            src={heroImg}
            alt="نجار في عجمان"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/60"></div>
          <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <span className="text-amber-500 font-bold tracking-wider mb-4 block">نجار الامارات fannicarpenteruae</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                نجار في عجمان - أفضل خدمات النجارة
              </h1>
              <p className="text-xl text-stone-200 mb-8 max-w-2xl">
                نجار في عجمان لجميع اعمال النجارة من تفصيل أثاث، تركيب أبواب وشبابيك خشبية، فك وتركيب غرف نوم، وتصليح أثاث.
              </p>
              <a 
                href="https://wa.me/971505001597?text=مرحباً، أحتاج نجار في عجمان."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-lg"
              >
                <PhoneCall className="w-5 h-5 rtl:scale-x-[-1]" />
                <span>اتصل بنا الآن 0505001597</span>
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
                    هل تبحث عن <strong>نجار في عجمان</strong> يقدم لك خدمة متكاملة بأعلى جودة وأسعار مناسبة؟ <strong>نجار الامارات fannicarpenteruae</strong> متخصص في جميع أعمال النجارة داخل عجمان، ويوفر خدمة 24 ساعة تشمل تصميم وصيانة الأثاث، تركيب الأبواب والنوافذ، وفك وتركيب غرف النوم والمطابخ.
                  </p>

                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 mb-12">
                    <h3 className="text-xl font-bold text-stone-900 mb-4 mt-0">جدول المحتويات</h3>
                    <ul className="grid md:grid-cols-2 gap-2 m-0 p-0 list-none font-medium text-stone-700 text-sm">
                      <li><a href="#carpenter" className="no-underline hover:text-amber-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> نجار في عجمان</a></li>
                      <li><a href="#best-carpenter" className="no-underline hover:text-amber-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> أفضل نجار في عجمان</a></li>
                      <li><a href="#services" className="no-underline hover:text-amber-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> خدمات نجار في عجمان</a></li>
                      <li><a href="#cheap-carpenter" className="no-underline hover:text-amber-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> نجار رخيص في عجمان</a></li>
                      <li><a href="#areas" className="no-underline hover:text-amber-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> مناطق وتغطية الخدمات في عجمان</a></li>
                      <li><a href="#faq" className="no-underline hover:text-amber-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> الأسئلة الشائعة</a></li>
                    </ul>
                  </div>

                  <h2 id="carpenter">نجار في عجمان</h2>
                  <p>
                    إذا كنت تبحث عن <strong>نجار في عجمان</strong> يقدم لك أعمال نجارة متقنة وبأعلى جودة، فإن نجار الامارات هو الخيار الأول لك. نحن نمتلك خبرة طويلة في جميع خدمات النجارة من تفصيل الأثاث، تصليح الأثاث الخشبي، تركيب الأبواب والشبابيك، وحتى تفصيل المطابخ والخزائن. نستخدم أحدث الأدوات والتقنيات لضمان حصولك على نتائج مبهرة تدوم لسنوات.
                  </p>

                  <h2 id="best-carpenter">أفضل نجار في عجمان</h2>
                  <p>
                    اختيار <strong>أفضل نجار في عجمان</strong> يعني أنك تبحث عن الجودة والالتزام. في نجار الامارات نحرص على:
                  </p>
                  <ul>
                    <li>استخدام أدوات حديثة تساعد على دقة التشطيب.</li>
                    <li>تقديم تصاميم عصرية ومبتكرة تناسب جميع الأذواق والمساحات.</li>
                    <li>إعطاء ضمان حقيقي وموثوق على الأعمال المنفذة.</li>
                    <li>الالتزام التام ونسبة 100% في مواعيد التسليم.</li>
                  </ul>

                  <Image src={heroImg} alt="نجار محترف في عجمان" className="w-full h-[400px] object-cover rounded-2xl my-8" unoptimized />

                  <h2 id="services">خدمات نجار في عجمان</h2>
                  <p>
                    نقدم في نجار الامارات fannicarpenteruae جميع خدمات النجارة في عجمان، بداية من تفصيل الأثاث حسب الطلب، مرورًا بتركيب الأبواب والخزائن، ووصولًا إلى صيانة وتصليح الأثاث الخشبي. نحرص دائما على تقديم جودة عالية وتشطيب دقيق بأسعار مناسبة.
                  </p>

                  <h3>تفصيل الأثاث حسب الطلب</h3>
                  <p>نحن نقدم خدمة <strong>تفصيل أثاث في عجمان</strong> بجودة عالية تناسب ذوقك ومساحتك، سواء كانت:</p>
                  <ul>
                    <li>غرف نوم حديثة أو كلاسيكية فخمة.</li>
                    <li><Link href="/services/wardrobes">دواليب وخزائن ملابس ذكية مدمجة</Link>.</li>
                    <li>مكتبات وأرفف ديكورية للتلفزيون.</li>
                    <li>طاولات طعام ومكاتب عمل احترافية.</li>
                  </ul>

                  <h3>تركيب أبواب ونوافذ خشب</h3>
                  <p>
                    خدمة <Link href="/services/doors">تركيب أبواب خشب في عجمان</Link> من أكثر الخدمات المطلوبة. نركب جميع أنواع الأبواب الداخلية والخارجية بأشكال وتصاميم متعددة، ونوفر كذلك صيانة الأبواب القديمة وإعادة دهانها وتغيير الأقفال والكوالين باحترافية.
                  </p>

                  <h3>تصميم مطابخ وخزائن</h3>
                  <p>
                    نقدم خدمة <Link href="/services/kitchens">تفصيل مطابخ خشبية</Link> في عجمان باستخدام أجود أنواع الأخشاب والمواد المقاومة للرطوبة، مع تصميمات عصرية تتناسب مع الطقس في الإمارات واحتياجات التخزين الذكية.
                  </p>

                  <h2 id="cheap-carpenter">نجار رخيص في عجمان بأسعار منافسة</h2>
                  <p>
                    الكثير يظن أن كلمة <strong>نجار رخيص في عجمان</strong> تعني ضعف الجودة، لكننا في نجار الامارات نثبت العكس. نقدم أسعارًا منافسة وشفافة دون المساس بجودة الخامات أو التشطيب، ونوفر استشارات مجانية لتحديد ميزانية العمل ومقدار التكاليف بدقة وتفصيل لتخفيف الأعباء على العملاء.
                  </p>
                  <p>
                    سواء كنت تبحث عن نجار عجمان، تركيب أبواب خشب عجمان، أو حتى تصليح أثاث خشبي في عجمان، فإننا نوفر لك الحل الأمثل. اتصل الآن على <strong>0505001597</strong> لخدمة متكاملة.
                  </p>

                  <h2 id="areas">تغطية خدمات نجار في عجمان – جميع الأحياء والمناطق</h2>
                  <p>نغطي في نجار الامارات جميع أحياء ومناطق عجمان، وتشمل التغطية:</p>
                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full border-collapse border border-stone-200 text-sm">
                      <thead>
                        <tr className="bg-stone-100">
                          <th className="border border-stone-200 px-4 py-2 text-right">الحي / المنطقة</th>
                          <th className="border border-stone-200 px-4 py-2 text-right">الخدمـات المتوفرة المباشرة</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border border-stone-200 px-4 py-2">الروضة</td><td className="border border-stone-200 px-4 py-2">تفصيل أبواب وخزائن مع تركيب احترافي بأسعار مناسبة.</td></tr>
                        <tr><td className="border border-stone-200 px-4 py-2">النعيمية</td><td className="border border-stone-200 px-4 py-2">خدمات صيانة وتصليح أثاث خشبي وتشطيبات حديثة.</td></tr>
                        <tr><td className="border border-stone-200 px-4 py-2">الراشدية</td><td className="border border-stone-200 px-4 py-2">فك وتركيب غرف نوم ومطابخ بخبرة عالية.</td></tr>
                        <tr><td className="border border-stone-200 px-4 py-2">الحميدية</td><td className="border border-stone-200 px-4 py-2">تركيب أبواب وشبابيك خشبية وتشطيب فاخر.</td></tr>
                        <tr><td className="border border-stone-200 px-4 py-2">الجرف</td><td className="border border-stone-200 px-4 py-2">تصميم أثاث وخزائن ملابس ومطابخ بجودة عالية.</td></tr>
                        <tr><td className="border border-stone-200 px-4 py-2">الياسمين</td><td className="border border-stone-200 px-4 py-2">تركيب أبواب وخزائن عصرية وتصاميم خشبية مميزة.</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 id="faq">أسئلة شائعة عن نجار في عجمان</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-stone-900">هل يوجد نجار 24 ساعة في عجمان؟</h3>
                      <p>نعم، تتوفر خدمة نجار طوارئ في عجمان على مدار 24 ساعة عبر فريقنا لتلبية الطلبات العاجلة وإصلاح الأقفال المستعصية بكفاءة عالية وبسرعة.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900">كم تكلفة خدمات النجارة في عجمان؟</h3>
                      <p>تختلف الأسعار حسب نوع الخدمة وحجم العمل (سواء كان تفصيل غرفة نوم كاملة أو صيانة أقفال بسيطة)، مع توفير تسعير شفاف وعروض تنافسية بعد المعاينة المباشرة أو إرسال صور التفاصيل عبر الواتساب.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900">هل يمكن فك وتركيب الأثاث عند الانتقال لمنزل جديد؟</h3>
                      <p>نعم، نوفر خدمة فك وتركيب غرف النوم والأثاث مع التغليف والحماية لإتمام عملية النقل بسلام وبدون إحداث تلفيات، وتركيبها بانتظام وبراعة لتعود كأنها جديدة.</p>
                    </div>
                  </div>

                  <hr className="my-12 border-stone-200" />
                  <p className="text-center font-bold text-xl text-stone-800">
                    لخدمات نجارة احترافية في عجمان، تواصل بنا الآن: <br/>
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
                        <Link href="/carpenter-in-sharjah" className="flex items-center justify-between text-stone-600 hover:text-amber-600 font-medium transition-colors bg-white p-3 rounded-xl border border-stone-100 shadow-sm hover:shadow-md">
                          <span>نجار في الشارقة</span>
                          <span className="text-xs bg-stone-100 text-stone-500 py-1 px-2 rounded-lg">اقرأ المزيد</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-stone-900 to-stone-800 p-8 rounded-2xl text-center text-white shadow-xl">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <PhoneCall className="w-8 h-8 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">نجار في إمارة عجمان</h3>
                    <p className="text-sm text-stone-300 mb-6">جاهزون لتلقي استفساراتكم والرد الفوري للحجز والمعاينة.</p>
                    <a 
                      href="https://wa.me/971505001597"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold py-3 rounded-xl transition-colors mb-3"
                    >
                      تحدث معنا عبر الواتساب
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
                "name": "هل يوجد نجار 24 ساعة في عجمان؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "نعم، تتوفر خدمة نجار طوارئ في عجمان على مدار 24 ساعة عبر فريقنا لتلبية الطلبات العاجلة وإصلاح الأقفال المستعصية بكفاءة عالية وبسرعة."
                }
              },
              {
                "@type": "Question",
                "name": "كم تكلفة خدمات النجارة في عجمان؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "تختلف الأسعار حسب نوع الخدمة وحجم العمل (سواء كان تفصيل غرفة نوم كاملة أو صيانة أقفال بسيطة)، مع توفير تسعير شفاف وعروض تنافسية بعد المعاينة المباشرة أو إرسال صور التفاصيل عبر الواتساب."
                }
              },
              {
                "@type": "Question",
                "name": "هل يمكن فك وتركيب الأثاث عند الانتقال لمنزل جديد؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "نعم، نوفر خدمة فك وتركيب غرف النوم والأثاث مع التغليف والحماية لإتمام عملية النقل بسلام وبدون إحداث تلفيات، وتركيبها بانتظام وبراعة لتعود كأنها جديدة."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}

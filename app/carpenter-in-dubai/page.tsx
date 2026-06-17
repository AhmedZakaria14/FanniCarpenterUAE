import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import heroImg from '@/src/assets/images/carpenter_dubai_seo_hero_1781717141850.jpg';
import { CheckCircle2, PhoneCall } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'نجار في دبي 0505001597 - نجار رخيص واحترافي نجار الامارات',
  description: 'أفضل نجار في دبي من نجار الامارات لتركيب وإصلاح الأثاث والأبواب والشبابيك باحترافية عالية وأسعار تنافسية وخدمة سريعة في دبي. اتصل الآن.',
};

export default function CarpenterInDubaiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pb-24">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px]">
          <Image
            src={heroImg}
            alt="نجار في دبي"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/60"></div>
          <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <span className="text-amber-500 font-bold tracking-wider mb-4 block">نجار الامارات fannicarpenteruae</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                نجار في دبي 0505001597
              </h1>
              <p className="text-xl text-stone-200 mb-8 max-w-2xl">
                أفضل نجار في دبي لتركيب وإصلاح الأثاث والأبواب والمطابخ والشبابيك باحترافية وتصميمات فريدة تدوم لأطول فترة في الأشكال العصرية المميزة.
              </p>
              <a 
                href="https://wa.me/971505001597?text=مرحباً، أود حجز فني نجار في دبي."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-lg"
              >
                <PhoneCall className="w-5 h-5 rtl:scale-x-[-1]" />
                <span>للتواصل والحجز والأسعار</span>
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
                    هل تبحث عن <strong>نجار في دبي</strong> يجمع بين الخبرة والاحترافية؟ فريق <strong>نجار الامارات fannicarpenteruae</strong> هو خيارك الأمثل لصيانة وإصلاح جميع أنواع الأثاث بكفاءة وسرعة، مع خبرة تتجاوز السنوات لضمان تقديم جودة وأمان.
                  </p>

                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 mb-12">
                    <h3 className="text-xl font-bold text-stone-900 mb-4 mt-0">جدول المحتويات</h3>
                    <ul className="grid md:grid-cols-2 gap-2 m-0 p-0 list-none font-medium text-stone-700 text-sm">
                      <li><a href="#carpenter-dubai" className="no-underline hover:text-amber-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> نجار خشب في دبي</a></li>
                      <li><a href="#features" className="no-underline hover:text-amber-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> مميزات نجار في دبي</a></li>
                      <li><a href="#services" className="no-underline hover:text-amber-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> خدمات نجار في دبي</a></li>
                      <li><a href="#kitchens" className="no-underline hover:text-amber-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> تفصيل مطابخ في دبي</a></li>
                      <li><a href="#doors-windows" className="no-underline hover:text-amber-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> أبواب وشبابيك دبي</a></li>
                      <li><a href="#prices" className="no-underline hover:text-amber-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> الأسعار والقياسات بدبي</a></li>
                    </ul>
                  </div>

                  <h2 id="carpenter-dubai">أفضل نجار في دبي لتلبية احتياجاتك</h2>
                  <p>
                    في <strong>نجار الامارات</strong> نوفر خدمات نجارة متكاملة تشمل تصميم الأثاث العصري، تركيب المطابخ الفاخرة التي تلبي تصميمات فلل دبي العصرية وتقسيماتها، بالإضافة للشبابيك، والأبواب. نستخدم خامات عالية الجودة وأحدث المعدات لضمان نتائج رائعة تدوم لسنوات طويلة دون التأثر برطوبة وحرارة مناخ دولة الإمارات.
                  </p>
                  <p>
                    اختيار نجار في دبي لا يقتصر على السعر فقط، بل على الخبرة وجودة التنفيذ وإتقان التفاصيل واللمسات التشطيبية النهائية.
                  </p>

                  <h2 id="features">مميزات نجار في دبي</h2>
                  <ul>
                    <li><strong>خبرة طويلة:</strong> في جميع أنواع أعمال النجارة لضمان نتائج احترافية ومتانة مبهرة.</li>
                    <li><strong>أخشاب معالجة ومتميزة:</strong> استخدام خشب عالي الجودة ومعالج ضد الرطوبة والحرارة مثل أخشاب التيك وخشب البلوط المتميز.</li>
                    <li><strong>الالتزام التام بالمواعيد:</strong> في التسليم والتركيب لتوفير الوقت والجهد على العملاء في إمارة دبي المزدحمة.</li>
                    <li><strong>ضمان شامل:</strong> خدمة ما بعد البيع وضمان على الأعمال لضمان رضاك التام وراحة البال.</li>
                  </ul>

                  <Image src={heroImg} alt="نجار في دبي يقوم بتفصيل خزائن خشبية" className="w-full h-[400px] object-cover rounded-2xl my-8" unoptimized />

                  <h2 id="services">خدمات نجار في دبي للفلل والشقق الفاخرة</h2>
                  <p>
                    يقدم فريق نجار الامارات بدبي حلولاً متكاملة لكل احتياجاتك الخشبية بأسلوب عصري وفعال:
                  </p>
                  <ul>
                    <li>تفصيل غرف نوم حديثة تماشياً مع أحدث الإتجاهات المعمارية.</li>
                    <li><Link href="/services/wardrobes">تفصيل الخزائن المدمجة في الحائط للحفاظ على المساحات</Link>.</li>
                    <li>تلميع وصنفرة الأثاث وتجديد الأخشاب والأرضيات الباركيه من الخدوش والتلف.</li>
                    <li><Link href="/services/pergolas">تجهيز المظلات والبرجولات الخشبية للสวน وحدائق الفلل</Link>.</li>
                  </ul>

                  <h2 id="kitchens">نجار مطابخ في دبي</h2>
                  <p>
                    إذا كنت تخطط لتجديد مطبخك أو تركيب مطبخ جديد في دبي فأنت بلا شك تحتاج إلى نجار يمتلك خبرة في القياس الدقيق واستغلال المساحات، لأن المطبخ أكثر مكان يتعرض للرطوبة ويحتاج حماية مستمرة.
                    في نجار الامارات نفصل دواليب وتصميمات مطابخ مودرن تلبي فخامة التصميم وتقاوم البلى المستمر للمطابخ.
                  </p>
                  <p>نهتم بالتفاصيل العميقة من تركيب أفضل المفاصل الصامتة Soft Close واستخدام إضاءات الـ LED السفلية المدمجة في خشب الـ MDF الجذاب.</p>

                  <h2 id="doors-windows">نجار ابواب وشبابيك في دبي</h2>
                  <p>
                    تتعرض أبواب وشبابيك المنازل مع الوقت في دبي إلى خدوش وتغير في اللون الخارجي نتيجة الحرارة والرطوبة والعوامل المناخية. يبرز دورنا في صيانة شاملة ومتميزة لتغيير <Link href="/services/doors">وتجديد هذه الأبواب</Link>، وتركيب المفصلات الجديدة القوية التي تحسن انسيابية الحركة.
                    كما نقوم بفتح الكوالين في حالة الطوارئ عند ضياع المفاتيح وفنيينا جاهزون على مدار ٢٤ ساعة.
                  </p>

                  <h2 id="prices">اسعار نجار في دبي ومناطق العمل</h2>
                  <p>
                    تختلف أسعار نجار في دبي بناءً على نوع الخامات ومتطلبات العمل ولكننا نضمن لك القيمة المثالية المتميزة التي تناسب الميزانيات التنافسية.
                  </p>
                  <p>
                    <strong>مناطق الخدمة تشمل الكثير من أهم أرجاء دبي:</strong><br/>
                    جميرا، البرشاء، دبي مارينا، تلال دبي (دبي هيلز غولف)، مردف، أبراج بحيرات جميرا (JLT)، أم سقيم، القوز، والقصيص. نصل لك أينما كنت بسيارات كاملة الجاهزية ومجهزة بكامل معداتنا.
                  </p>
                  
                  <h2 id="faq">أسئلة شائعة عن نجار في دبي</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-stone-900">ما الخدمات التي يقدمها نجار في دبي؟</h3>
                      <p>نقدم تفصيل غرف نوم ومطابخ وأبواب وخزائن، وصيانة الأثاث مع تخصيص احترافي وخالي من العيوب لتلبية فخامة منازل وشقق دبي.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900">كم تكلفة خدمات نجار في دبي؟</h3>
                      <p>التكلفة تعتمد على حجم العمل ونوع الخشب والتشطيب. نوفر تسعير مرن بعد المعاينة المباشرة لتقديم أفضل جودة بأفضل سعر ممكن لعملائنا في الإمارة.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900">هل يمكن تفصيل أعمال خاصة للمساحات الصغيرة في شقق دبي؟</h3>
                      <p>نعم، نقوم بتنفيذ تفصيلات مخصصة تستغل المساحات الصغيرة بذكاء مثل خزائن الزوايا وتصاميم السرير مع وحدات تخزين مدمجة.</p>
                    </div>
                  </div>

                  <hr className="my-12 border-stone-200" />
                  <p className="text-center font-bold text-xl text-stone-800">
                    لمعاينة الأبعاد والحصول على أفضل خدمة نجارة بدبي، اتصل: <br/>
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
                        <Link href="/carpenter-in-ajman" className="flex items-center justify-between text-stone-600 hover:text-amber-600 font-medium transition-colors bg-white p-3 rounded-xl border border-stone-100 shadow-sm hover:shadow-md">
                          <span>نجار في عجمان</span>
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
                    <h3 className="text-xl font-bold mb-2">نجار في إمارة دبي</h3>
                    <p className="text-sm text-stone-300 mb-6">نستقبل استفساراتكم والمشاريع الكبيرة والصغيرة في كافة ضواحي دبي.</p>
                    <a 
                      href="https://wa.me/971505001597"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold py-3 rounded-xl transition-colors mb-3"
                    >
                      تواصل معنا سريعاً 
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
                "name": "ما الخدمات التي يقدمها نجار في دبي؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "نقدم تفصيل غرف نوم ومطابخ وأبواب وخزائن، وصيانة الأثاث مع تخصيص احترافي وخالي من العيوب لتلبية فخامة منازل وشقق دبي."
                }
              },
              {
                "@type": "Question",
                "name": "كم تكلفة خدمات نجار في دبي؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "التكلفة تعتمد على حجم العمل ونوع الخشب والتشطيب. نوفر تسعير مرن بعد المعاينة المباشرة لتقديم أفضل جودة بأفضل سعر ممكن لعملائنا في الإمارة."
                }
              },
              {
                "@type": "Question",
                "name": "هل يمكن تفصيل أعمال خاصة للمساحات الصغيرة في شقق دبي؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "نعم، نقوم بتنفيذ تفصيلات مخصصة تستغل المساحات الصغيرة بذكاء مثل خزائن الزوايا وتصاميم السرير مع وحدات تخزين مدمجة."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}

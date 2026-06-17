import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import heroImg from '@/src/assets/images/wooden_wardrobes_page_hero_1781716025909.jpg';
import { CheckCircle2, PhoneCall } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تفصيل الخزائن وغرف النوم في دبي والشارقة | نجار الامارات',
  description: 'تفصيل خزائن الملابس المدمجة وكباتات الطوي وغرف النوم الحديثة حسب الطلب. نجار ممتاز لتصميم وتركيب الخزائن بأرقى التصاميم في دبي الشارقة وعجمان.',
};

export default function WardrobesServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pb-24">
        {/* Service Hero */}
        <section className="relative h-[400px] md:h-[500px]">
          <Image
            src={heroImg}
            alt="تفصيل خزائن غرف نوم في الإمارات"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/60"></div>
          <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <span className="text-amber-500 font-bold tracking-wider mb-4 block">خزائن وديكورات غرف النوم</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                تفصيل خزائن الملابس وغرف النوم
              </h1>
              <p className="text-xl text-stone-200 mb-8 max-w-2xl">
                نستغل كل شبر في غرفتك نصنع لك خزائن ملابس مدمجة بتصاميم ذكية وغرف نوم تمنحك الراحة والفخامة.
              </p>
              <a 
                href="https://wa.me/971505001597?text=مرحباً، أود تفصيل خزائن لغرفة النوم."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-lg"
              >
                <PhoneCall className="w-5 h-5 rtl:scale-x-[-1]" />
                <span>احجز موعد أخذ المقاسات</span>
              </a>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:w-2/3 prose prose-stone prose-lg max-w-none prose-headings:text-amber-900 prose-a:text-amber-600">
                <h2>مساحتك الخاصة، بتصميم يعبر عنك</h2>
                <p>
                  غرفة النوم هي الملاذ الشخصي الذي نلجأ إليه للراحة، لذلك يجب أن تكون منظمة وخالية من الفوضى. في <strong>نجار الامارات fannicarpenteruae</strong>، نحن متخصصون في تفصيل غرف النوم الكاملة والخزائن المدمجة (الكبتات / دريسينج روم) التي توفر مساحات تخزين ذكية تتناسب تماماً مع أبعاد غرفتك.
                </p>

                <h3>نقدم الحلول التالية لتفصيل الخزائن والغرف:</h3>
                <ul className="not-prose grid gap-4 my-8">
                  {[
                    'تفصيل خزائن ملابس مدمجة بالحائط (Built-in Wardrobes) لتوفير المساحة.',
                    'تصميم غرف الملابس (Walk-in Closets) الفاخرة للفلل والمساحات الكبيرة.',
                    'تصنيع أسرّة مصممة خصيصاً (Custom Beds) بمقاسات وأشكال تناسب ذوقك.',
                    'تفصيل الكومودينو، تسريحات (Vanity tables)، ووحدات تخزين تحت السرير.',
                    'خيارات أبواب خزائن متنوعة: أبواب سحابة (Sliding)، مفصلية، مزودة بمرايا، أو أبواب زجاجية شفافة.',
                    'تركيب إضاءة داخلية (LED) للخزائن لسهولة العثور على الملابس وإضافة لمسة فخمة.'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start p-4 bg-stone-50 rounded-xl border border-stone-200">
                      <CheckCircle2 className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-stone-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <h2>جودة الخشب والتشطيب</h2>
                <p>
                  المتانة هي الأساس عندما يتعلق الأمر بالخزائن التي تتحمل أوزاناً وتُستخدم يومياً. نحن نستخدم خشب الميلامين (Melamine) عالي الجودة والـ MDF المدعم للدواخل لضمان قوة الرفوف، مع إمكانيات غير محدودة للتشطيب الخارجي بألوان خشبية طبيعية أو سادة حديثة تتوافق مع تصميم الشقق والفلل في الإمارات.
                </p>
                <p>
                  نستورد ونستخدم أفضل ماركات المجرى والأدراج والسحابات التي تعطي تجربة إغلاق هادئة وسلسة. 
                </p>

                <h2>خدمة تعديل وصيانة الخزائن</h2>
                <p>
                  هل انتقلت لمنزل جديد في دبي أو الشارقة والخزائن الحالية لا تتسع لملابسك؟ يمكننا تعديل تقسيمات الخزائن من الداخل، إضافة أرفف جديدة، أو أدراج إضافية حسب حاجتك. كما نقوم بتصليح الأبواب السحابة التي خرجت عن مسارها.
                </p>

                <hr className="my-12 border-stone-200" />

                <h2>الأسئلة الشائعة حول تفصيل خزائن الملابس</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">هل يمكنكم تفصيل خزائن زاوية (Corner Wardrobes) مساحتها صغيرة؟</h3>
                    <p>بالطبع، نجارونا متخصصون في استغلال المساحات الضيقة، خصوصاً زوايا الغرف. نقوم بتصميم أرفف عميقة وإضافة ميكانيزمات تعليق متحركة تتيح لك تخزين واستخراج الملابس بسهولة حتى في أصعب الزوايا.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">كيف أختار بين الخزائن ذات الأبواب السحابة أو المفصلية؟</h3>
                    <p>الخيار يعتمد بالدرجة الأولى على مساحة غرفتك. إذا كانت غرفتك صغيرة ولا تسمح بفتح أبواب الخزانة بحرية، فإن الأبواب السحابة (Sliding Doors) هي الحل الأمثل. أما الأبواب المفصلية فهي الأفضل لتوفير رؤية شاملة للخزانة من الداخل عند فتحها، وتستخدم بكثرة في الغرف الواسعة.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">هل يمكنكم تصميم غرف ملابس مفتوحة (Walk-in Dressing Rooms)؟</h3>
                    <p>نعم، خدماتنا تشمل تصميم وتنفيذ غرف الملابس (الدريسينج روم) لكافة أحجام الفلل والشقق المزدوجة (الدوبلكس)، وتشمل أرفف مضيئة، مساحات لأدراج المجوهرات والساعات، ورفوف سفلية مائلة لعرض الأحذية بأسلوب المتاجر الراقية.</p>
                  </div>
                </div>

                <hr className="my-12 border-stone-200" />

                <h2>نقدم خدمات تفصيل غرف النوم في المدن التالية:</h2>
                <p>عملنا يمتد ليشمل كافة التجمعات السكنية المعروفة لضمان الوصول لأكبر شريحة ممكنة:</p>
                <ul>
                  <li><strong>نجار خزائن في دبي:</strong> نخدم القاطنين في مردف السكنية، ند الشبا، دبي هيلز ستيت، الينابيع، الروضة (The Greens)، ومناطق القوز، لنمنح غرف نومهم لمسة شخصية منظمة.</li>
                  <li><strong>تفصيل غرف ملابس في الشارقة:</strong> نقدم الحلول التخزينية لكل من الشقق العائلية والفلل في المجاز، الفيحاء، الخزامية، الرحمانية والزاهية، بأسعار تتناسب مع الميزانية وتصاميم تواكب الذائقة.</li>
                  <li><strong>تنجيد وتفصيل أسرّة في عجمان:</strong> سواء كنت مقيماً في النعيمية، مويهات، الياسمين، أو الجرف، نوفر خدمات شاملة تبدأ من قياس الغرفة وحتى تركيب غرف النوم والخزائن الكبيرة بدقة وإتقان.</li>
                </ul>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="sticky top-28 bg-stone-50 p-6 rounded-2xl border border-stone-200">
                  <h3 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-4">جهز غرفتك الآن</h3>
                  <p className="text-stone-600 mb-6 text-sm leading-relaxed">
                    لا تتردد في التواصل معنا للحصول على تصميم مجاني وتسعيرة دقيقة لتفصيل خزانتك.
                  </p>
                  <a 
                    href="https://wa.me/971505001597?text=مرحباً، أود تفصيل غرفة نوم / خزائن."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 rounded-xl font-bold transition-colors mb-4"
                  >
                    <span>طلب معاينة مجانية</span>
                  </a>
                  <div className="text-center font-mono text-amber-600 font-bold text-xl dir-ltr">
                    +971 50 500 1597
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
                "name": "هل يمكنكم تفصيل خزائن زاوية (Corner Wardrobes) مساحتها صغيرة؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "بالطبع، نجارونا متخصصون في استغلال المساحات الضيقة، خصوصاً زوايا الغرف. نقوم بتصميم أرفف عميقة وإضافة ميكانيزمات تعليق متحركة تتيح لك تخزين واستخراج الملابس بسهولة حتى في أصعب الزوايا."
                }
              },
              {
                "@type": "Question",
                "name": "كيف أختار بين الخزائن ذات الأبواب السحابة أو المفصلية؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "الخيار يعتمد بالدرجة الأولى على مساحة غرفتك. إذا كانت غرفتك صغيرة ولا تسمح بفتح أبواب الخزانة بحرية، فإن الأبواب السحابة (Sliding Doors) هي الحل الأمثل. أما الأبواب المفصلية فهي الأفضل لتوفير رؤية شاملة للخزانة من الداخل عند فتحها، وتستخدم بكثرة في الغرف الواسعة."
                }
              },
              {
                "@type": "Question",
                "name": "هل يمكنكم تصميم غرف ملابس مفتوحة (Walk-in Dressing Rooms)؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "نعم، خدماتنا تشمل تصميم وتنفيذ غرف الملابس (الدريسينج روم) لكافة أحجام الفلل والشقق المزدوجة (الدوبلكس)، وتشمل أرفف مضيئة، مساحات لأدراج المجوهرات والساعات، ورفوف سفلية مائلة لعرض الأحذية بأسلوب المتاجر الراقية."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}

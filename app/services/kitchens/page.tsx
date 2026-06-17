import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import heroImg from '@/src/assets/images/wooden_kitchen_page_hero_1781716008781.jpg';
import { CheckCircle2, PhoneCall } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تفصيل وتركيب المطابخ الخشبية المودرن في دبي والشارقة | نجار الامارات',
  description: 'أفضل ورشة نجارة لتفصيل المطابخ الخشبية المودرن والكلاسيك في الإمارات. نجار مطابخ محترف لتصميم وتركيب دواليب المطبخ بأجود أنواع الخشب في دبي والشارقة وعجمان.',
};

export default function KitchensServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pb-24">
        {/* Service Hero */}
        <section className="relative h-[400px] md:h-[500px]">
          <Image
            src={heroImg}
            alt="تفصيل مطابخ خشبية في الإمارات"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/60"></div>
          <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <span className="text-amber-500 font-bold tracking-wider mb-4 block">نجارة المطابخ الحديثة</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                تفصيل وتركيب مطابخ خشبية فاخرة
              </h1>
              <p className="text-xl text-stone-200 mb-8 max-w-2xl">
                نحول مساحة الطبخ الخاصة بك إلى تحفة فنية تجمع بين الأناقة العصرية والاستغلال الذكي للمساحات بأفضل الأخشاب.
              </p>
              <a 
                href="https://wa.me/971505001597?text=مرحباً، أود تفصيل مطبخ جديد."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-lg"
              >
                <PhoneCall className="w-5 h-5 rtl:scale-x-[-1]" />
                <span>اطلب تسعيرة المطبخ</span>
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
                <h2>المطبخ هو قلب المنزل النابض</h2>
                <p>
                  المطبخ ليس مجرد مكان لإعداد الطعام، بل هو قلب المنزل. في <strong>نجار الامارات fannicarpenteruae</strong>، نفهم أهمية الحصول على مطبخ مثالي يعكس ذوقك ويسهل حياتك اليومية. نحن خبراء في تصميم، تفصيل، وتركيب المطابخ الخشبية بمختلف تصاميمها، من المطابخ المودرن البسيطة والعملية إلى المطابخ الكلاسيكية الفخمة.
                </p>

                <h3>مميزات تفصيل المطابخ عبر ورشتنا:</h3>
                <ul className="not-prose grid gap-4 my-8">
                  {[
                    'استغلال ذكي للمساحات (Smart Storage Solutions) للزوايا والأماكن الضيقة.',
                    'استخدام أخشاب مقاومة للرطوبة والحرارة مثل خشب الـ MDF المقاوم (HMR) والـ Plywood لضمان عمر أطول.',
                    'تصاميم ثلاثية الأبعاد (3D) لرؤية المطبخ قبل البدء بالتفصيل.',
                    'توفير ميكانيزمات وأكسسوارات عالية الجودة (مفصلات Soft-close، سحابات قوية).',
                    'صيانة وتغيير واجهات (أبواب) المطابخ القديمة لتجديد المطبخ بأقل تكلفة.',
                    'تركيب أسطح (رخام، جرانيت، أو خشب صلب) بلمسة تشطيب دقيقة.'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start p-4 bg-stone-50 rounded-xl border border-stone-200">
                      <CheckCircle2 className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-stone-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <h2>جودة تصمد أمام الزمن في جو الإمارات</h2>
                <p>
                  نظراً للحرارة العالية والرطوبة في دبي، الشارقة وعجمان، من الضروري اختيار المواد بدقة لضمان عدم تلف دواليب المطبخ. نحن نستخدم طبقات الفورميكا والاكريليك المضادة للخدش والماء لتغليف الخشب، مما يسهل عملية التنظيف ويحافظ على لون المطبخ زاهياً لسنوات. نضمن لك مطبخاً يتحمل الاستخدام اليومي الشاق بأناقة تامة.
                </p>
                <p>
                  سواء كان مسكنك في فيلا واسعة في جميرا، أو شقة أنيقة في مويلح، أو بيت عائلي في النعيمية، فإن فريق التصميم لدينا سيأخذ المقاسات بدقة ويصمم لك مطبخاً يناسب مساحتك وميزانيتك.
                </p>

                <h2>خدمة تغيير واجهات المطابخ (Kitchen Refacing)</h2>
                <p>
                  إذا كان الهيكل الداخلي لمطبخك سليماً ولكنك مللت من لونه القديم، نقدم خدمة تغيير أبواب المطابخ فقط. هذه الخدمة توفر لك مظهر مطبخ جديد كلياً وبجزء بسيط من تكلفة المطبخ الجديد. نوفر تشكيلة واسعة من الألوان المطفية (Matte) واللامعة (Glossy).
                </p>

                <hr className="my-12 border-stone-200" />

                <h2>الأسئلة المتكررة حول نجارة وتفصيل المطابخ</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">كم يستغرق تفصيل وتركيب مطبخ جديد؟</h3>
                    <p>بشكل عام، تستغرق عملية تفصيل المطبخ من أسبوعين إلى 3 أسابيع من تاريخ اعتماد التصميم والموافقة عليه. وتشمل هذه الفترة القص، التغليف، التجميع الأولي في ورشتنا، ثم التركيب النهائي في منزلك والذي يستغرق عادة يوماً واحداً إلى يومين لضمان دقة التنفيذ والنظافة.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">ما هي أفضل أنواع الأخشاب لمطابخ الإمارات؟</h3>
                    <p>بسبب عوامل الرطوبة في مدن مثل دبي والشارقة، ننصح دائماً باستخدام أخشاب البلايوود (Plywood) المقاوم للماء للهيكل الداخلي (الخزائن السفلية بجانب حوض الغسيل)، واستخدام خشب الـ MDF عالي الكثافة والمعالج والمقاوم للرطوبة (HMR) للأبواب، مكسواً بطبقات الأكريليك أو الـ PVC عالي الجودة.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">هل يمكنكم تصميم مطبخ يتناسب مع الأجهزة الكهربائية المدمجة (Built-in)؟</h3>
                    <p>بالطبع، نجارونا متخصصون في تصميم المطابخ الأوروبية الذكية. قبل البدء بالتفصيل، نطلب أبعاد الأجهزة الكهربائية المدمجة مثل الأفران، الميكرويف، الثلاجات، وغسالات الصحون، ليتم تخصيص كبائن خشبية بمقاسات دقيقة تحتضن أجهزتك بشكل مخفي وأنيق.</p>
                  </div>
                </div>

                <hr className="my-12 border-stone-200" />

                <h2>مناطق خدمات المطابخ في الإمارات</h2>
                <p>متخصصون في تصميم وتركيب المطابخ الخشبية في عدة إمارات لتقديم أفضل تجربة منزلية لعملائنا:</p>
                <ul>
                  <li><strong>تفصيل مطابخ في دبي:</strong> خدمات شاملة لتجديد المطابخ في المناطق السكنية الراقية مثل: تلال دبي، نخلة جميرا، السهول، ديسكفري جاردنز، البرشاء، ند الشبا، ومردف. مصممون على دراية واسعة بأحدث الاتجاهات العصرية في التصميم الداخلي السائد في دبي.</li>
                  <li><strong>نجار مطابخ في الشارقة:</strong> نخدم كافة البيوت والفلل في الشارقة مقدّمين تصاميم عائلية توفر أكبر قدر من مساحات التخزين. نغطي مناطق المجاز، الخان، مويلح التجارية، النهدة، ومدينة طيبة.</li>
                  <li><strong>تفصيل مطابخ في عجمان:</strong> أسعارنا المنافسة مع الالتزام التام بالجودة يجعلنا الاختيار الأول في عجمان كـ الجرف، الروضة، النعيمية، والراشدية، لنجعل من مساحتك مهما كبرت أو صغرت مطبخاً الأحلام.</li>
                </ul>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="sticky top-28 bg-stone-50 p-6 rounded-2xl border border-stone-200">
                  <h3 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-4">هل ترغب بتصميم مطبخك؟</h3>
                  <p className="text-stone-600 mb-6 text-sm leading-relaxed">
                    أرسل لنا مقاسات غرفتك المبدئية أو صورة للمطبخ الحالي لنقدم لك استشارة وتكلفة تقريبية.
                  </p>
                  <a 
                    href="https://wa.me/971505001597?text=مرحباً، أود الاستفسار عن تفصيل مطبخ."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 rounded-xl font-bold transition-colors mb-4"
                  >
                    <span>تواصل مع فني المطابخ</span>
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
                "name": "كم يستغرق تفصيل وتركيب مطبخ جديد؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "بشكل عام، تستغرق عملية تفصيل المطبخ من أسبوعين إلى 3 أسابيع من تاريخ اعتماد التصميم والموافقة عليه. وتشمل هذه الفترة القص، التغليف، التجميع الأولي في ورشتنا، ثم التركيب النهائي في منزلك والذي يستغرق عادة يوماً واحداً إلى يومين لضمان دقة التنفيذ والنظافة."
                }
              },
              {
                "@type": "Question",
                "name": "ما هي أفضل أنواع الأخشاب لمطابخ الإمارات؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "بسبب عوامل الرطوبة في مدن مثل دبي والشارقة، ننصح دائماً باستخدام أخشاب البلايوود (Plywood) المقاوم للماء للهيكل الداخلي (الخزائن السفلية بجانب حوض الغسيل)، واستخدام خشب الـ MDF عالي الكثافة والمعالج والمقاوم للرطوبة (HMR) للأبواب، مكسواً بطبقات الأكريليك أو الـ PVC عالي الجودة."
                }
              },
              {
                "@type": "Question",
                "name": "هل يمكنكم تصميم مطبخ يتناسب مع الأجهزة الكهربائية المدمجة (Built-in)؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "بالطبع، نجارونا متخصصون في تصميم المطابخ الأوروبية الذكية. قبل البدء بالتفصيل، نطلب أبعاد الأجهزة الكهربائية المدمجة مثل الأفران، الميكرويف، الثلاجات، وغسالات الصحون، ليتم تخصيص كبائن خشبية بمقاسات دقيقة تحتضن أجهزتك بشكل مخفي وأنيق."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}

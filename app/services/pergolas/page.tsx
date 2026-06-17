import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import heroImg from '@/src/assets/images/wooden_pergolas_page_hero_1781716042874.jpg';
import { CheckCircle2, PhoneCall } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'المظلات الخشبية البرجولات والديكور الخارجي في دبي | نجار الامارات',
  description: 'تركيب مظلات خشبية، برجولات، وجلسات خارجية للحدائق والفلل بأفضل أنواع الخشب المعالج. أرقى ديكورات خشبية بأسعار تنافسية في دبي الشارقة وعجمان.',
};

export default function PergolasServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pb-24">
        {/* Service Hero */}
        <section className="relative h-[400px] md:h-[500px]">
          <Image
            src={heroImg}
            alt="تركيب مظلات خشبية برجولات في دبي"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/60"></div>
          <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <span className="text-amber-500 font-bold tracking-wider mb-4 block">نجارة الجلسات الخارجية والديكور</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                المظلات الخشبية (البرجولات) والديكور
              </h1>
              <p className="text-xl text-stone-200 mb-8 max-w-2xl">
                نحول حديقة فلتك أو سطح منزلك إلى واحة فخمة مع البرجولات والجلسات الخشبية المصممة لتقاوم أجواء الإمارات.
              </p>
              <a 
                href="https://wa.me/971505001597?text=مرحباً، أود تركيب مظلة خشبية (برجولة)."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-lg"
              >
                <PhoneCall className="w-5 h-5 rtl:scale-x-[-1]" />
                <span>احصل على عرض سعر لبرجولة</span>
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
                <h2>استمتع بالهواء الطلق برفاهية تامة</h2>
                <p>
                  يضفي الخشب لمسة من الدفء والفخامة على المساحات الخارجية. نقدم في <strong>نجار الامارات fannicarpenteruae</strong> خدمات تصميم وتركيب المظلات الخشبية (البرجولات) والديكورات الخارجية وتكسية الجدران، لنجعل من حديقتك مساحة مثالية للاسترخاء العائلي أو استقبال الضيوف خلال الطقس الجميل في الإمارات.
                </p>

                <h3>خدمات قسم الديكور الخارجي تشمل:</h3>
                <ul className="not-prose grid gap-4 my-8">
                  {[
                    'تصميم وتركيب المظلات الخشبية للحدائق، الأسطح (الروف)، ومواقف السيارات.',
                    'إنشاء جلسات خارجية خشبية وتفصيل مقاعد مدمجة مع البرجولة.',
                    'تكسية واجهات الفلل والجدران (Wall Cladding) بالخشب الطبيعي أو المعالج (WPC).',
                    'تركيب الأرضيات الخشبية الخارجية (Decking) المقاومة للماء للشرفات وحول المسابح.',
                    'تصميم أسوار خشبية زخرفية وفواصل للحدائق لإضافة الخصوصية.',
                    'ديكورات خشبية للأسقف المعلقة في الجلسات الخارجية.'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start p-4 bg-stone-50 rounded-xl border border-stone-200">
                      <CheckCircle2 className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-stone-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <h2>أخشاب معالجة ومقاومة لظروف المناخ</h2>
                <p>
                  نظراً لأشعة الشمس القوية والرطوبة في دبي والشارقة وعجمان، نختار أنواع أخشاب خاصة ومقاومة للعوامل الجوية لتنفيذ الأعمال الخارجية. نستخدم الخشب المعالج بالضغط (Treated Wood)، خشب التيك (Teak)، أو أخشاب الـ WPC (بديل الخشب) التي لا تحتاج إلى صيانة دورية ومقاومة للحشرات والتعفن. كما نقوم بطلاء الخشب بمواد عازلة ومقاومة لأشعة الـ UV للحفاظ على لونه الأصلي.
                </p>
                <p>
                  سواء كنت تتخيل برجولة بيضاء بتصميم (Modren) مع إضافة إضاءة أو ستائر، أو تفضل البرجولات الكلاسيكية باللون الخشبي الغامق، يمكننا تحويل هذه الأفكار لواقع ملموس وبأسعار منافسة في السوق الإماراتي.
                </p>

                <h2>إضافة لمسات الديكور الخشبي الداخلي</h2>
                <p>
                  بجانب الأعمال الخارجية، ننفذ أيضاً كافة أعمال الديكور الخشبي الداخلي، مثل تكسية جدران التلفاز، تركيب بديل الخشب، فواصل الغرف الخشبية (Partitions)، والأسقف الخشبية المزخرفة التي تضفي التميز على ديكور شقتك أو فلتك.
                </p>

                <hr className="my-12 border-stone-200" />

                <h2>الأسئلة الشائعة حول البرجولات والديكورات الخارجية</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">ما هو أفضل نوع خشب للبرجولات في مناخ الإمارات؟</h3>
                    <p>يعتبر خشب التيك (Teak wood) من أفضل الأخشاب الطبيعية لتحمل حرارة ورطوبة الإمارات بفضل زيوته الطبيعية، إلا أنه مكلف. لذلك، نعتمد بشكل واسع على أخشاب الصنوبر المعالجة (Treated Pine) أو خشب الميرانتي، وندهنها بمواد حماية ضد أشعة الشمس وتغير اللون للحصول على نتيجة ممتازة بسعر معقول. كما ننصح بشدة باستخدام الـ WPC (Wood Plastic Composite) إذا كنت تبحث عن بديل لا يحتاج لصيانة إطلاقاً.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">هل تركبون إضاءات وتوصيلات كهربائية للبرجولات؟</h3>
                    <p>نعم، نضع ذلك في الحسبان أثناء التصميم الأول. يتم تفريغ مسارات مخفية بالخشب لتمرير أسلاك الكهرباء بأمان لتركيب الإنارة المخفية، والثريات الخارجية، وحتى المراوح دون تشويه المنظر الجمالي للبرجولة.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">هل يمكن تغطية سقف البرجولة لحجب الشمس الكلية أو المطر؟</h3>
                    <p>بالتأكيد. يمكن تركيب سقف زجاجي مقوى شفاف (Tempered Glass)، أو ألواح البولي كاربونيت لحماية الجلسة من الأمطار، بالإضافة لأقمشة التظليل (Shade Nets) لترشيح أشعة الشمس حسب رغبتكم.</p>
                  </div>
                </div>

                <hr className="my-12 border-stone-200" />

                <h2>نغطي أفضل أحياء الإمارات بخدمات الديكور الخارجي</h2>
                <p>صُممت خدماتنا للوصول إليكم أينما كنتم وتوفير أرقى الديكورات لفللكم، ونخدم أبرز المجمعات:</p>
                <ul>
                  <li><strong>برجولات وديكور حدائق في دبي:</strong> تغطي خدماتنا مجمعات جميرا بارك، تلال الإمارات (Emirates Hills)، لجان (The Lakes)، المرابع العربية (Arabian Ranches)، والفرجان. نزين المساحات الخارجية لتواكب فخامة الطراز المعماري في دبي.</li>
                  <li><strong>مظلات خشبية في الشارقة:</strong> نقوم بإنشاء المظلات والمجالس الخارجية (الكشكات) للبيوت المستقلة والفلل في الرحمانية، السيوح، شرقان، الحوشي، ومسار.</li>
                  <li><strong>جلسات خارجية في عجمان:</strong> نقوم بتركيب الديكورات الخشبية وأرضيات المسابح في فلل الروضة، الزوراء السكنية، المويهات والياسمين لنزيد من رقي وفخامة المساحات المفتوحة.</li>
                </ul>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="sticky top-28 bg-stone-50 p-6 rounded-2xl border border-stone-200">
                  <h3 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-4">جهز حديقتك للشتاء</h3>
                  <p className="text-stone-600 mb-6 text-sm leading-relaxed">
                    استفد من المساحات الخارجية بأفضل صورة. أرسل لنا صورة لمساحتك وسنقترح عليك أفضل أشكال البرجولات.
                  </p>
                  <a 
                    href="https://wa.me/971505001597?text=مرحباً، أريد تفصيل مظلة خارجية / ديكور خشبي."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 rounded-xl font-bold transition-colors mb-4"
                  >
                    <span>طلب استشارة لديكور خارجي</span>
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
                "name": "ما هو أفضل نوع خشب للبرجولات في مناخ الإمارات؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "يعتبر خشب التيك (Teak wood) من أفضل الأخشاب الطبيعية لتحمل حرارة ورطوبة الإمارات بفضل زيوته الطبيعية، إلا أنه مكلف. لذلك، نعتمد بشكل واسع على أخشاب الصنوبر المعالجة (Treated Pine) أو خشب الميرانتي، وندهنها بمواد حماية ضد أشعة الشمس وتغير اللون للحصول على نتيجة ممتازة بسعر معقول. كما ننصح بشدة باستخدام الـ WPC (Wood Plastic Composite) إذا كنت تبحث عن بديل لا يحتاج لصيانة إطلاقاً."
                }
              },
              {
                "@type": "Question",
                "name": "هل تركبون إضاءات وتوصيلات كهربائية للبرجولات؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "نعم، نضع ذلك في الحسبان أثناء التصميم الأول. يتم تفريغ مسارات مخفية بالخشب لتمرير أسلاك الكهرباء بأمان لتركيب الإنارة المخفية، والثريات الخارجية، وحتى المراوح دون تشويه المنظر الجمالي للبرجولة."
                }
              },
              {
                "@type": "Question",
                "name": "هل يمكن تغطية سقف البرجولة لحجب الشمس الكلية أو المطر؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "بالتأكيد. يمكن تركيب سقف زجاجي مقوى شفاف (Tempered Glass)، أو ألواح البولي كاربونيت لحماية الجلسة من الأمطار، بالإضافة لأقمشة التظليل (Shade Nets) لترشيح أشعة الشمس حسب رغبتكم."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import heroImg from '@/src/assets/images/wooden_door_page_hero_1781715990771.jpg';
import { CheckCircle2, PhoneCall } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تركيب وصيانة الأبواب الخشبية في دبي والشارقة وعجمان | نجار الامارات',
  description: 'خدمات تفصيل وتركيب وصيانة الأبواب الخشبية بأعلى جودة. نجار أبواب ممتاز في دبي، الشارقة، وعجمان. تغيير أقفال، إصلاح أبواب، وتفصيل أبواب حديثة.',
};

export default function DoorsServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pb-24">
        {/* Service Hero */}
        <section className="relative h-[400px] md:h-[500px]">
          <Image
            src={heroImg}
            alt="تركيب وصيانة الأبواب الخشبية"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/60"></div>
          <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <span className="text-amber-500 font-bold tracking-wider mb-4 block">خدمات النجارة الاحترافية</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                تركيب وصيانة الأبواب الخشبية بإتقان
              </h1>
              <p className="text-xl text-stone-200 mb-8 max-w-2xl">
                نقدم خدمات متكاملة لتفصيل، تركيب، وصيانة كافة أنواع الأبواب الخشبية الداخلية والخارجية في دبي، الشارقة، وعجمان.
              </p>
              <a 
                href="https://wa.me/971505001597?text=مرحباً، أود حجز خدمة تركيب أو صيانة أبواب."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-lg"
              >
                <PhoneCall className="w-5 h-5 rtl:scale-x-[-1]" />
                <span>احجز فني أبواب الآن</span>
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
                <h2>أفضل نجار تركيب أبواب في الإمارات</h2>
                <p>
                  تعتبر الأبواب الجزء الأهم في جمالية وأمان أي منزل أو مكتب. نحن في <strong>نجار الامارات fannicarpenteruae</strong> نقدم لك خدمات نجارة أبواب استثنائية تلبي كافة احتياجاتك. سواء كنت تبحث عن تفصيل باب رئيسي فخم لفيلا في دبي، أو تحتاج إلى تركيب أبواب داخلية عصرية لشقة في الشارقة، أو حتى صيانة طارئة لأقفال الأبواب في عجمان، فإن فريقنا من النجارين المهرة مستعد لخدمتك بأعلى معايير الجودة.
                </p>

                <h3>خدماتنا في مجال الأبواب تشمل:</h3>
                <ul className="not-prose grid gap-4 my-8">
                  {[
                    'تفصيل أبواب خشبية جديدة بتصاميم حديثة (مودرن وكلاسيك).',
                    'تركيب أبواب الغرف، الحمامات، والأبواب الرئيسية بدقة متناهية.',
                    'صيانة وتصليح الأبواب التي تعاني من احتكاك أو صعوبة في الإغلاق.',
                    'تغيير وتركيب الأقفال (الكوالين)، المقابض، والمفصلات.',
                    'تركيب وصيانة إطارات الأبواب (الفريمات) والبراويز الخشبية.',
                    'عزل الأبواب لتقليل الصوت ومنع تسرب الهواء.'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start p-4 bg-stone-50 rounded-xl border border-stone-200">
                      <CheckCircle2 className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-stone-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <h2>لماذا تعتمد علينا في أعمال الأبواب؟</h2>
                <p>
                  في مناخ الإمارات الذي يتميز بارتفاع درجات الحرارة والرطوبة، تحتاج الأبواب الخشبية إلى عناية خاصة واختيار نوعيات خشب مناسبة تتحمل هذه الظروف دون أن تتمدد أو تتقلص بشكل كبير. خبرتنا الطويلة في سوق دبي والإمارات الشمالية تجعلنا الخبراء القادرين على تقديم النصح الصحيح واختيار المواد الأفضل، سواء كان خشب السنديان (Oak)، الزان، أو خشب الماهوجني للواجهات الرئيسية.
                </p>
                <p>
                  علاوة على ذلك، نحن نعرف أن مشاكل الأبواب والأقفال قد تكون طارئة، لذلك نوفر خدمة <strong>سريعة وموثوقة</strong> للوصول إليك في أسرع وقت. نجارونا مجهزون بأحدث الأدوات لضمان قص وتركيب نظيف بدون إتلاف الجدران أو الديكورات المحيطة.
                </p>

                <h2>تغطية شاملة: دبي، الشارقة، وعجمان</h2>
                <p>
                  نحن نفخر بتغطيتنا الشاملة للمناطق الرئيسية. سياراتنا المجهزة تجوب مناطق دبي (مثل البرشاء، مارينا، ديرة، زعبيل)، وتمتد خدماتنا لتشمل جميع أحياء الشارقة (التعاون، المجاز، مويلح، النهدة)، وكذلك كافة مناطق عجمان (النعيمية، الروضة، الجرف). أينما كنت، نجار الأبواب المحترف على بعد مكالمة أو رسالة واتساب واحدة.
                </p>

                <hr className="my-12 border-stone-200" />

                <h2>الأسئلة الشائعة حول خدمات الأبواب الخشبية</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">هل تقدمون خدمة تغيير أقفال الأبواب المكسورة في نفس اليوم؟</h3>
                    <p>نعم، ندرك تماماً أهمية الأمان في منازلكم. نوفر خدمة الطوارئ لتغيير الكوالين (الأقفال) وإصلاح الأبواب المكسورة أو التالفة في نفس اليوم في كافة مناطق دبي، الشارقة، وعجمان. نجارونا يحملون معهم أقفالاً من ماركات موثوقة وعالية الجودة لتناسب كافة ميزانياتكم.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">ما هي أنواع الأخشاب المستخدمة في تفصيل الأبواب الجديدة؟</h3>
                    <p>نستخدم مجموعة واسعة من الأخشاب تناسب متطلباتكم وميزانيتكم. لتفصيل الأبواب الرئيسية الفخمة، نفضل استخدام خشب الزان، الماهوجني، أو التيك لقوة تحملهم ومقاومتهم العالية للعوامل الجوية في الإمارات. أما للأبواب الداخلية لغرف النوم والحمامات، فنستخدم خشب الـ MDF المقاوم للرطوبة (HMR) أو الأبواب الكبس (Flush Doors) المغلفة بقشرة السنديان أو الفينير لتعطي شكلاً جمالياً بأوزان أخف وأسعار اقتصادية.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">هل يمكنكم إصلاح باب يحتك بالأرضية أو يصعب إغلاقه؟</h3>
                    <p>بالتأكيد. مشكلة احتكاك الباب بالأرض (Door Dragging) أو صعوبة إغلاقه هي من أكثر المشاكل شيوعاً بسبب تمدد الخشب نتيجة الرطوبة أو هبوط المفصلات. سيقوم الفني المختص لدينا بفحص الباب، وإما إعادة ضبط المفصلات، أو مسح (حف) جزء بسيط من أسفل الباب باستخدام الفأرة الكهربائية ليعود الباب للعمل بسلاسة تامة دون الإضرار بشكله الخارجي.</p>
                  </div>
                </div>

                <hr className="my-12 border-stone-200" />

                <h2>دليل تفصيلي لمناطق عملنا في الإمارات</h2>
                <p>لضمان سرعة الاستجابة، قمنا بتوزيع فرقنا المتنقلة لتغطي نطاقات جغرافية واسعة بفعالية:</p>
                <ul>
                  <li><strong>نجار أبواب في دبي:</strong> نغطي مناطق دبي الجديدة والقديمة بما في ذلك: دبي مارينا، جميرا بيتش ريزيدنس (JBR)، قرية جميرا الدائرية (JVC)، البرشاء، القصيص، ديرة، مردف، الورقاء، ند الحمر، والمرابع العربية. نقدم خدمات تركيب أبواب الفلل الفخمة وصيانة أبواب الشقق الفندقية.</li>
                  <li><strong>نجار أبواب في الشارقة:</strong> نتواجد في كافة مناطق الشارقة المفعمة بالحركة مثل: المجاز، الخان، التعاون، النهدة، مويلح، القرائن، النوف، والصبخة. نعالج مشاكل الرطوبة في أبواب الحمامات ونقدم حلولاً اقتصادية وعملية للعائلات.</li>
                  <li><strong>نجار أبواب في عجمان:</strong> نقدم أسعاراً تنافسية وخدمات سريعة في مناطق: النعيمية، الراشدية، الجرف، الروضة، مشيرف، والكرامة. تشمل خدماتنا تفصيل الأبواب للفلل الجديدة وصيانة الأبواب في البنايات السكنية.</li>
                </ul>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="sticky top-28 bg-stone-50 p-6 rounded-2xl border border-stone-200">
                  <h3 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-4">تحتاج لخدمة سريعة؟</h3>
                  <p className="text-stone-600 mb-6 text-sm leading-relaxed">
                    فريقنا جاهز للرد على استفساراتك وتقديم تسعيرة مجانية لتركيب أو صيانة الأبواب. تواصل معنا الآن.
                  </p>
                  <a 
                    href="https://wa.me/971505001597?text=مرحباً، أحتاج إلى استشارة بخصوص الأبواب."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 rounded-xl font-bold transition-colors mb-4"
                  >
                    <span>استشارة عبر الواتساب</span>
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
                "name": "هل تقدمون خدمة تغيير أقفال الأبواب المكسورة في نفس اليوم؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "نعم، ندرك تماماً أهمية الأمان في منازلكم. نوفر خدمة الطوارئ لتغيير الكوالين (الأقفال) وإصلاح الأبواب المكسورة أو التالفة في نفس اليوم في كافة مناطق دبي، الشارقة، وعجمان. نجارونا يحملون معهم أقفالاً من ماركات موثوقة وعالية الجودة لتناسب كافة ميزانياتكم."
                }
              },
              {
                "@type": "Question",
                "name": "ما هي أنواع الأخشاب المستخدمة في تفصيل الأبواب الجديدة؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "نستخدم مجموعة واسعة من الأخشاب تناسب متطلباتكم وميزانيتكم. لتفصيل الأبواب الرئيسية الفخمة، نفضل استخدام خشب الزان، الماهوجني، أو التيك لقوة تحملهم ومقاومتهم العالية للعوامل الجوية في الإمارات. أما للأبواب الداخلية لغرف النوم والحمامات، فنستخدم خشب الـ MDF المقاوم للرطوبة (HMR) أو الأبواب الكبس (Flush Doors) المغلفة بقشرة السنديان أو الفينير لتعطي شكلاً جمالياً بأوزان أخف وأسعار اقتصادية."
                }
              },
              {
                "@type": "Question",
                "name": "هل يمكنكم إصلاح باب يحتك بالأرضية أو يصعب إغلاقه؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "بالتأكيد. مشكلة احتكاك الباب بالأرض (Door Dragging) أو صعوبة إغلاقه هي من أكثر المشاكل شيوعاً بسبب تمدد الخشب نتيجة الرطوبة أو هبوط المفصلات. سيقوم الفني المختص لدينا بفحص الباب، وإما إعادة ضبط المفصلات، أو مسح (حف) جزء بسيط من أسفل الباب باستخدام الفأرة الكهربائية ليعود الباب للعمل بسلاسة تامة دون الإضرار بشكله الخارجي."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}

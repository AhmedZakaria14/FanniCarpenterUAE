import { Hammer, Clock, ThumbsUp, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Hammer className="w-8 h-8 text-amber-700" />,
    title: 'خبرة طويلة',
    description: 'فريق من النجارين المهرة ذوي الخبرة الطويلة في سوق الإمارات، قادرون على تنفيذ أعقد التصاميم.',
  },
  {
    icon: <Clock className="w-8 h-8 text-amber-700" />,
    title: 'التزام بالمواعيد',
    description: 'نقدر وقتك، لذلك نلتزم بإنهاء العمل وتسليمه في الوقت المتفق عليه دون تأخير.',
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-amber-700" />,
    title: 'جودة لا تضاهى',
    description: 'نستخدم أفضل أنواع الأخشاب والمواد لضمان متانة وجمالية تدوم لسنوات طويلة.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-amber-700" />,
    title: 'ضمان العمل',
    description: 'نقدم ضماناً على جودة أعمالنا التركيبية والتصنيعية لضمان راحة بالك التامة.',
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl font-bold text-stone-900 underline decoration-amber-500 decoration-4 underline-offset-8">
              لماذا تختار نجار الإمارات؟
            </h2>
            <p className="text-stone-600 leading-relaxed mt-4">
              نحن لا نقدم مجرد خدمة نجارة، بل نقدم حلولاً متكاملة تجمع بين الفن والإتقان. نسعى دائماً لتجاوز توقعات عملائنا من خلال الاهتمام بأدق التفاصيل وتقديم تصاميم عصرية تناسب أسلوب الحياة في الإمارات.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">{feature.title}</h4>
                    <p className="text-stone-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-stone-200 aspect-square lg:aspect-auto lg:h-[500px] flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent"></div>
               <div className="text-center p-8 z-10 w-full">
                 <h3 className="text-6xl font-black text-amber-500 mb-2">+15</h3>
                 <p className="text-xl font-bold text-stone-800">عاماً من التميز</p>
                 <div className="mt-8 grid grid-cols-2 gap-4 text-center max-w-sm mx-auto">
                   <div className="bg-stone-50 p-4 rounded-xl shadow-sm border border-stone-200">
                     <p className="text-2xl font-bold text-stone-900 mb-1">500+</p>
                     <p className="text-xs text-stone-500 font-medium">مشروع مكتمل</p>
                   </div>
                   <div className="bg-stone-50 p-4 rounded-xl shadow-sm border border-stone-200">
                     <p className="text-2xl font-bold text-stone-900 mb-1">100%</p>
                     <p className="text-xs text-stone-500 font-medium">رضا العملاء</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

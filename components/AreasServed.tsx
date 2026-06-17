import { MapPin } from 'lucide-react';

const areas = [
  { name: 'دبي', description: 'تغطية شاملة لكافة مناطق دبي، من ديرة وبر دبي إلى دبي مارينا والبرشاء.' },
  { name: 'الشارقة', description: 'خدمات سريعة في قلب الشارقة، المجاز، التعاون، مويلح، وكافة الضواحي.' },
  { name: 'عجمان', description: 'نجار محترف لخدمة سكان عجمان، النعيمية، الروضة، والكرامة بأسرع وقت.' },
];

export function AreasServed() {
  return (
    <section id="areas" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 underline decoration-amber-500 decoration-4 underline-offset-8">
            منطقة التغطية
          </h2>
          <p className="text-stone-400 mt-6">
            لأننا الأقرب إليك، نوفر فرق عمل متنقلة ومجهزة للوصول إليك في أسرع وقت في هذه الإمارات.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div key={index} className="bg-stone-800/80 backdrop-blur-sm border border-stone-700 p-8 rounded-2xl hover:border-amber-500/50 transition-colors">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{area.name}</h3>
              <p className="text-stone-400 leading-relaxed text-sm">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

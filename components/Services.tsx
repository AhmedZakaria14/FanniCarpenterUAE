import Image from 'next/image';
import Link from 'next/link';
import doorImg from '../src/assets/images/modern_wooden_door_1781714479620.jpg';
import kitchenImg from '../src/assets/images/custom_wooden_kitchen_1781714497066.jpg';
import wardrobeImg from '../src/assets/images/custom_wooden_wardrobe_1781714510398.jpg';
import pergolaImg from '../src/assets/images/wooden_pergola_garden_1781714523566.jpg';
import { ChevronLeft } from 'lucide-react';

const servicesList = [
  {
    id: 1,
    title: 'تركيب وصيانة الأبواب',
    description: 'تركيب أبواب خشبية جديدة، صيانة الأقفال، وإصلاح الأبواب التالفة بأعلى جودة وتصميمات عصرية.',
    image: doorImg,
    link: '/services/doors'
  },
  {
    id: 2,
    title: 'تفصيل المطابخ الخشبية',
    description: 'تصميم وتفصيل دواليب المطبخ بأحدث الموديلات التي تجمع بين الأناقة والاستغلال الأمثل للمساحات.',
    image: kitchenImg,
    link: '/services/kitchens'
  },
  {
    id: 3,
    title: 'غرف النوم والخزائن (الطوي)',
    description: 'تفصيل خزائن ملابس مدمجة (Built-in)، سراير، وغرف نوم كاملة حسب الطلب والمقاسات بمواد فاخرة.',
    image: wardrobeImg,
    link: '/services/wardrobes'
  },
  {
    id: 4,
    title: 'الديكورات الخارجية والمظلات',
    description: 'تصميم وتركيب مظلات خشبية (برجولات)، ديكورات الحدائق، والجلسات الخارجية للفلل.',
    image: pergolaImg,
    link: '/services/pergolas'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-stone-900 underline decoration-amber-500 decoration-4 underline-offset-8 mb-4">
              خدماتنا المتميزة
            </h2>
            <p className="text-stone-500 mt-2">
              نلبي كافة احتياجاتك الخشبية بأعلى المعايير
            </p>
          </div>
          <div className="hidden md:flex gap-2 pb-2">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-stone-200"></div>
            <div className="w-3 h-3 rounded-full bg-stone-200"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesList.map((service) => (
            <div key={service.id} className="group bg-stone-50 border border-stone-200 rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
              <div className="relative h-48 md:h-auto md:w-2/5 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:w-3/5 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link 
                  href={service.link}
                  className="inline-flex items-center gap-1 text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors w-fit"
                >
                  <span>اقرأ المزيد</span>
                  <ChevronLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

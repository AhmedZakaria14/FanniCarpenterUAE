import Link from "next/link";
import Image from "next/image";

export const articles = [{"slug": "/carpenter", "title": "نجار محترف لجميع أعمال النجارة بدقة وجودة عالية", "description": "نجار محترف في الإمارات لأعمال التفصيل والتركيب والصيانة وفك وتركيب الأثاث. تعرف على الخدمات والأسعار وكيف تختار فني نجار قريب منك.", "image": "https://cdnmf.picsart.com/cloud-storage/5848b114-206d-450f-a42f-b0675db86518.jpg", "alt": "نجار محترف ينفذ أعمال نجارة وخشب في الإمارات"}, {"slug": "/carpenter-in-dubai", "title": "نجار في دبي لخدمات الخشب التي تحتاج إليها أينما كنت", "description": "نجار في دبي لأعمال الخشب والتفصيل والفك والتركيب في القصيص والقوز والبرشاء ومردف. تعرف على الخدمات وطريقة الحجز والاستعداد للزيارة.", "image": "https://d8j0ntlcm91z4.cloudfront.net/user_3HiTB7HAxPstkap06sBbxVYKHH3/hf_20260819_184355_56c7911e-d305-4fba-8456-35d9d64b5a8c.png", "alt": "نجار في دبي يركب خزانة خشبية داخل منزل حديث"}, {"slug": "/carpenter-in-ajman", "title": "نجار في عجمان لأعمال خشبية تمنح كل مساحة ما تحتاج إليه", "description": "نجار في عجمان لتنفيذ وتعديل وتجديد الأعمال الخشبية في المنازل والمكاتب والمحلات، مع خدمات في النعيمية والراشدية والجرف والروضة.", "image": "https://d8j0ntlcm91z4.cloudfront.net/user_3HiTB7HAxPstkap06sBbxVYKHH3/hf_20260819_184355_bb452d93-4a98-401a-8c03-5b4e617f12ed.png", "alt": "نجار في عجمان ينفذ وحدات تخزين خشبية مخصصة"}, {"slug": "/carpenter-in-sharjah", "title": "أفضل نجار في الشارقة يعتني بتفاصيل الخشب من التصميم حتى التشطيب", "description": "نجار في الشارقة لأعمال التصميم والتفصيل والديكور الخشبي وتشطيب الأثاث، مع تغطية النهدة والتعاون والخان والمجاز ومويلح ومناطق أخرى.", "image": "https://d8j0ntlcm91z4.cloudfront.net/user_3HiTB7HAxPstkap06sBbxVYKHH3/hf_20260819_184355_84145553-bfa1-4570-a9a5-664fe655637f.png", "alt": "نجار في الشارقة ينفذ مكتب دراسة وديكور خشبي"}, {"slug": "/carpenter-installation", "title": "نجار تركيب لتجميع الأثاث وضبطه كما يجب", "description": "نجار تركيب وفك وتركيب الأثاث وغرف النوم والدواليب باحترافية، مع شرح أخطاء التركيب ومشكلات الوصلات ومتى يحتاج الأثاث إلى إصلاح.", "image": "https://d8j0ntlcm91z4.cloudfront.net/user_3HiTB7HAxPstkap06sBbxVYKHH3/hf_20260819_184355_79a30781-d82a-43fe-80fb-7507492e4297.png", "alt": "نجار تركيب يجمع ويضبط أثاث غرفة نوم وخزانة"}];

export function BlogSection() {
  return (
    <section className="bg-stone-100 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-extrabold text-stone-900 md:text-5xl">
            أحدث <span className="text-amber-600">المقالات</span> والنصائح
          </h2>
          <div className="mx-auto mb-6 h-1.5 w-24 rounded-full bg-amber-500" />
          <p className="mx-auto max-w-2xl text-lg font-medium text-stone-600">
            أدلة عملية عن خدمات النجارة وتركيب الأثاث والوصول إلى فني نجار في دبي والشارقة وعجمان.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={article.slug}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-grow flex-col p-6">
                <h3 className="mb-3 text-xl font-bold leading-8 text-stone-900 group-hover:text-amber-700">
                  {article.title}
                </h3>
                <p className="mb-6 line-clamp-3 flex-grow text-sm leading-7 text-stone-600">
                  {article.description}
                </p>
                <div className="mt-auto flex items-center justify-between text-sm font-bold text-amber-700">
                  <span>اقرأ المزيد</span>
                  <span aria-hidden>←</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-700 px-7 py-3.5 font-bold text-white shadow-md transition hover:bg-amber-800 hover:shadow-lg"
          >
            عرض جميع مقالات المدونة
            <span aria-hidden>←</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

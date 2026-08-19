import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { PhoneCall, ArrowUpLeft } from 'lucide-react';

export type SeoArticle = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  image: string;
  alt: string;
  toc: { id: string; label: string }[];
  html: string;
};

const relatedArticles = [{"slug": "/carpenter", "title": "نجار محترف لجميع أعمال النجارة بدقة وجودة عالية"}, {"slug": "/carpenter-in-dubai", "title": "نجار في دبي لخدمات الخشب التي تحتاج إليها أينما كنت"}, {"slug": "/carpenter-in-ajman", "title": "نجار في عجمان لأعمال خشبية تمنح كل مساحة ما تحتاج إليه"}, {"slug": "/carpenter-in-sharjah", "title": "أفضل نجار في الشارقة يعتني بتفاصيل الخشب من التصميم حتى التشطيب"}, {"slug": "/carpenter-installation", "title": "نجار تركيب لتجميع الأثاث وضبطه كما يجب"}];
const phone = '0505001597';

export function SeoArticlePage({ article }: { article: SeoArticle }) {
  const related = relatedArticles.filter((item) => item.slug !== article.slug);
  const canonical = `https://fannicarpenteruae.com${article.slug}`;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow pb-24">
        <section className="relative min-h-[430px] overflow-hidden md:min-h-[520px]">
          <Image src={article.image} alt={article.alt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-stone-950/90 via-stone-950/70 to-stone-900/35" />
          <div className="container relative z-10 mx-auto flex min-h-[430px] items-center px-4 py-16 md:min-h-[520px] md:px-6">
            <div className="max-w-4xl">
              <span className="mb-4 block font-bold text-amber-400">نجار الإمارات | fannicarpenteruae.com</span>
              <h1 className="mb-6 text-3xl font-black leading-[1.35] text-white md:text-5xl">{article.title}</h1>
              <p className="mb-8 max-w-3xl text-lg leading-8 text-stone-200 md:text-xl">{article.description}</p>
              <a href="https://wa.me/971505001597?text=مرحباً، أود الاستفسار عن خدمة نجارة." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-green-700">
                <PhoneCall className="h-5 w-5" /> تواصل الآن {phone}
              </a>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16">
          <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-[minmax(0,1fr)_300px]">
            <article className="min-w-0">
              <div className="mb-10 rounded-2xl border border-amber-100 bg-amber-50/70 p-6 lg:hidden">
                <h2 className="mb-4 text-xl font-extrabold text-stone-900">جدول المحتويات</h2>
                <nav aria-label="جدول المحتويات"><ol className="space-y-2 text-sm leading-6 text-stone-700">{article.toc.map((item,index)=><li key={item.id}><a href={`#${item.id}`} className="hover:text-amber-700">{index+1}. {item.label}</a></li>)}</ol></nav>
              </div>

              <div className="prose prose-lg prose-stone max-w-none prose-headings:scroll-mt-28 prose-headings:font-extrabold prose-headings:text-stone-900 prose-h2:mt-12 prose-h2:border-b prose-h2:border-stone-100 prose-h2:pb-3 prose-h3:text-stone-800 prose-a:font-bold prose-a:text-amber-700 prose-a:no-underline hover:prose-a:underline prose-li:my-1 prose-p:leading-9" dangerouslySetInnerHTML={{ __html: article.html }} />

              <section className="mt-14 rounded-3xl border border-stone-200 bg-stone-50 p-6 md:p-8" aria-labelledby="related-articles">
                <h2 id="related-articles" className="mb-5 text-2xl font-black text-stone-900">مقالات مرتبطة</h2>
                <div className="grid gap-4 md:grid-cols-2">{related.map((item)=><Link key={item.slug} href={item.slug} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-4 rounded-2xl border border-stone-200 bg-white p-5 text-stone-800 shadow-sm transition hover:border-amber-300 hover:shadow-md"><span className="font-bold leading-7 group-hover:text-amber-700">{item.title}</span><ArrowUpLeft className="mt-1 h-5 w-5 shrink-0 text-amber-600" /></Link>)}</div>
              </section>
            </article>

            <aside className="hidden lg:block"><div className="sticky top-24 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"><h2 className="mb-4 text-xl font-extrabold text-stone-900">جدول المحتويات</h2><nav aria-label="جدول المحتويات"><ol className="max-h-[68vh] space-y-2 overflow-auto pl-1 text-sm leading-6 text-stone-700">{article.toc.map((item,index)=><li key={item.id}><a href={`#${item.id}`} className="block rounded-lg px-2 py-1.5 transition hover:bg-amber-50 hover:text-amber-800">{index+1}. {item.label}</a></li>)}</ol></nav></div></aside>
          </div>
        </section>
      </main>
      <Footer /><FloatingWhatsApp />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Article',headline:article.title,description:article.description,image:[article.image],datePublished:'2026-08-19',dateModified:'2026-08-19',inLanguage:'ar-AE',mainEntityOfPage:canonical,author:{'@type':'Organization',name:'نجار الإمارات'},publisher:{'@type':'Organization',name:'نجار الإمارات',url:'https://fannicarpenteruae.com'}})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'الرئيسية',item:'https://fannicarpenteruae.com/'},{'@type':'ListItem',position:2,name:article.title,item:canonical}]})}} />
    </div>
  );
}

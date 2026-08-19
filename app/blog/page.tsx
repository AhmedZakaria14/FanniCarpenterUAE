import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { articles } from '@/components/BlogSection';

export const metadata: Metadata = {
  title: 'مدونة نجار الإمارات | نصائح وأدلة النجارة في الإمارات',
  description:
    'مدونة نجار الإمارات تضم أدلة ونصائح عن أعمال النجارة وتركيب الأثاث وخدمات النجار في دبي والشارقة وعجمان، مع معلومات عملية تساعدك قبل طلب الخدمة.',
  keywords: [
    'مدونة نجار الإمارات',
    'نجار',
    'نجار دبي',
    'نجار الشارقة',
    'نجار عجمان',
    'نجار تركيب',
    'نصائح نجارة',
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_AE',
    url: 'https://fannicarpenteruae.com/blog',
    title: 'مدونة نجار الإمارات | نصائح وأدلة النجارة',
    description:
      'أحدث أدلة ونصائح النجارة وتركيب الأثاث وخدمات النجار في الإمارات.',
    siteName: 'نجار الإمارات fannicarpenteruae',
  },
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      <Header />
      <main className="flex-grow">
        <section className="border-b border-stone-200 bg-gradient-to-b from-amber-50 to-stone-50 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center md:px-6">
            <span className="mb-4 inline-block rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-bold text-amber-800 shadow-sm">
              مدونة نجار الإمارات
            </span>
            <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-black leading-tight text-stone-900 md:text-6xl">
              مقالات ونصائح عن النجارة والأثاث في الإمارات
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-stone-600 md:text-xl">
              أدلة عملية تساعدك على فهم خدمات النجارة، اختيار الفني المناسب، ومعرفة تفاصيل الفك والتركيب والصيانة في دبي والشارقة وعجمان.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-black text-stone-900">جميع المقالات</h2>
                <p className="mt-2 text-stone-600">تصفح أحدث المقالات والأدلة المتخصصة.</p>
              </div>
              <span className="text-sm font-bold text-stone-500">{articles.length} مقالات</span>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Link href={article.slug} className="relative block h-60 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex flex-grow flex-col p-6">
                    <div className="mb-3 text-xs font-bold text-amber-700">نجارة وأثاث</div>
                    <h2 className="mb-3 text-xl font-black leading-8 text-stone-900 transition-colors group-hover:text-amber-700">
                      <Link href={article.slug}>{article.title}</Link>
                    </h2>
                    <p className="mb-6 line-clamp-3 flex-grow text-sm leading-7 text-stone-600">
                      {article.description}
                    </p>
                    <Link
                      href={article.slug}
                      className="mt-auto inline-flex items-center gap-2 font-bold text-amber-700 transition hover:text-amber-900"
                    >
                      اقرأ المقال كاملًا
                      <span aria-hidden>←</span>
                    </Link>
                  </div>
                </article>
              ))}
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
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'مدونة نجار الإمارات',
            url: 'https://fannicarpenteruae.com/blog',
            inLanguage: 'ar-AE',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: articles.map((article, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: article.title,
                url: `https://fannicarpenteruae.com${article.slug}`,
              })),
            },
          }),
        }}
      />
    </div>
  );
}

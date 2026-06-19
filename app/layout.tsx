import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
});

const logoUrl = 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781715339/%D9%86%D8%AC%D8%A7%D8%B1_%D8%AF%D8%A8%D9%8A_sobbgv.png';

export const metadata: Metadata = {
  metadataBase: new URL('https://fannicarpenteruae.com'),
  title: 'نجار الامارات fannicarpenteruae',
  description: 'أفضل خدمات النجارة وتفصيل الأثاث والمطابخ وتركيب الأبواب والديكورات الخشبية في دبي والشارقة وعجمان. جودة عالية وأسعار منافسة.',
  icons: {
    icon: logoUrl,
    shortcut: logoUrl,
    apple: logoUrl,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_AE',
    siteName: 'نجار الامارات fannicarpenteruae',
    title: 'نجار الامارات fannicarpenteruae',
    description: 'أفضل خدمات النجارة وتفصيل الأثاث والمطابخ وتركيب الأبواب والديكورات الخشبية في دبي والشارقة وعجمان.',
    images: [
      {
        url: logoUrl,
        width: 512,
        height: 512,
        alt: 'نجار الامارات fannicarpenteruae',
      },
    ],
    phoneNumbers: ['+971505001597'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نجار الامارات fannicarpenteruae',
    description: 'أفضل خدمات النجارة وتفصيل الأثاث والمطابخ وتركيب الأبواب والديكورات الخشبية في دبي والشارقة وعجمان. جودة عالية وأسعار منافسة.',
    images: [logoUrl],
  },
  keywords: ['نجار', 'نجار الامارات', 'نجار دبي', 'نجار الشارقة', 'نجار عجمان', 'تفصيل اثاث', 'تركيب ابواب', 'صيانة اثاث'],
  other: {
    'contact:phone': '+971 50 500 1597',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable}`}>
      <body className="font-sans antialiased text-stone-800 bg-stone-50" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

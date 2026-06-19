import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { WhyUs } from '@/components/WhyUs';
import { AreasServed } from '@/components/AreasServed';
import { BlogSection } from '@/components/BlogSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyUs />
        <BlogSection />
        <AreasServed />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": "نجار الامارات fannicarpenteruae",
            "image": "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781715339/%D9%86%D8%AC%D8%A7%D8%B1_%D8%AF%D8%A8%D9%8A_sobbgv.png",
            "@id": "https://fannicarpenteruae.com",
            "url": "https://fannicarpenteruae.com",
            "telephone": "+971505001597",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Dubai, Sharjah, Ajman",
              "addressLocality": "Dubai",
              "addressRegion": "Dubai",
              "postalCode": "00000",
              "addressCountry": "AE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 25.2048,
              "longitude": 55.2708
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://fannicarpenteruae.com"
            ]
          })
        }}
      />
    </div>
  );
}

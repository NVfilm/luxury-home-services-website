'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Stats from '@/components/Stats';
import Reviews from '@/components/Reviews';
import HowItWorks from '@/components/HowItWorks';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Brands />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Reviews />
      <HowItWorks />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

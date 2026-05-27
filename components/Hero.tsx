'use client';

import { Phone, MessageCircle } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Background gradient elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <div className="space-y-4">
              <h1 className="luxury-text-heading text-5xl md:text-6xl">
                Premium Home Repair & Technical Services
              </h1>
              <p className="text-xl text-slate-600 font-medium">
                Expert AC, Refrigerator, Plumbing, Electrical & Appliance Repair Services
              </p>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              Fast, reliable and professional technical services for homes and businesses. Our certified technicians are available 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="luxury-button-primary flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Book Service
              </button>
              <button
                onClick={() => window.location.href = 'https://wa.me/971525400103'}
                className="luxury-button-secondary flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp Now
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div>
                <p className="text-3xl font-bold text-blue-600">24/7</p>
                <p className="text-sm text-slate-600">Available Anytime</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">5000+</p>
                <p className="text-sm text-slate-600">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">4.9★</p>
                <p className="text-sm text-slate-600">Google Rating</p>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form & Image */}
          <div className="relative z-10">
            <div className="glass-card p-8 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

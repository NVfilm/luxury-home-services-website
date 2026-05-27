'use client';

import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 md:px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="luxury-text-heading text-4xl md:text-5xl mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Contact us anytime. We&apos;re here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* WhatsApp */}
          <div className="glass-card p-8 text-center glow-border hover:shadow-xl smooth-hover-lift">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full">
                <MessageCircle className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              WhatsApp
            </h3>
            <p className="text-slate-600 mb-4">
              +971 52 540 0103
            </p>
            <button
              onClick={() => window.location.href = 'https://wa.me/971525400103'}
              className="w-full py-2 px-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Chat Now
            </button>
          </div>

          {/* Phone */}
          <div className="glass-card p-8 text-center glow-border hover:shadow-xl smooth-hover-lift">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full">
                <Phone className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Call Us
            </h3>
            <p className="text-slate-600 mb-4">
              +971 52 540 0103
            </p>
            <button
              onClick={() => window.location.href = 'tel:+971525400103'}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call Now
            </button>
          </div>

          {/* Email */}
          <div className="glass-card p-8 text-center glow-border hover:shadow-xl smooth-hover-lift">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full">
                <Mail className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Email
            </h3>
            <p className="text-slate-600 mb-4">
              techsu.711120@gmail.com
            </p>
            <a
              href="mailto:techsu.711120@gmail.com"
              className="w-full inline-block py-2 px-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>

        {/* Full Width Contact Info */}
        <div className="glass-card p-12 glow-border max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={28} />
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Service Coverage
              </h3>
              <p className="text-slate-600">
                We provide premium home technical services throughout Dubai and surrounding areas. Same-day service available for most requests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Zap, Droplets, Wind, Lightbulb, Wrench, Waves } from 'lucide-react';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'AC Repair',
      description: 'Professional air conditioning maintenance and repair',
      icon: Wind,
      image: '/ac-repair.jpg',
    },
    {
      title: 'Fridge Repair',
      description: 'Expert refrigerator repair and maintenance services',
      icon: Waves,
      image: '/fridge-repair.jpg',
    },
    {
      title: 'Plumbing Service',
      description: 'Comprehensive plumbing solutions for your home',
      icon: Droplets,
      image: '/plumbing-service.jpg',
    },
    {
      title: 'Light Fixture Repair',
      description: 'Electrical fixture installation and repair',
      icon: Lightbulb,
      image: '/electrical-repair.jpg',
    },
    {
      title: 'Washing Machine Repair',
      description: 'Professional appliance repair and maintenance',
      icon: Wrench,
      image: '/washing-machine-repair.jpg',
    },
    {
      title: 'Kitchen Appliance Repair',
      description: 'All kitchen appliance repair services',
      icon: Zap,
      image: '/kitchen-appliance-repair.jpg',
    },
  ];

  return (
    <section id="services" className="py-24 px-4 md:px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="luxury-text-heading text-4xl md:text-5xl mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Professional repair solutions for all your home technical needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group glow-border glass-card overflow-hidden hover:shadow-2xl smooth-hover-lift"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 mb-6">
                    {service.description}
                  </p>

                  <button
                    onClick={() => window.location.href = 'https://wa.me/971525400103'}
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

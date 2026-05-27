import { CheckCircle, Wrench, Settings, Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Book Service',
      description: 'Contact us via phone, WhatsApp or our contact form',
      icon: Zap,
    },
    {
      number: '2',
      title: 'Diagnose Problem',
      description: 'Our expert technician assesses your issue',
      icon: Settings,
    },
    {
      number: '3',
      title: 'Repair Process',
      description: 'Professional repair using genuine parts',
      icon: Wrench,
    },
    {
      number: '4',
      title: 'Completed',
      description: 'Service complete with warranty',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 md:px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="luxury-text-heading text-4xl md:text-5xl mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Simple and transparent process for your peace of mind
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 to-transparent"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="glass-card p-8 text-center glow-border hover:shadow-xl smooth-hover-lift min-h-[300px] flex flex-col justify-between">
                  {/* Number Badge */}
                  <div className="inline-flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <Icon className="text-blue-600" size={40} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

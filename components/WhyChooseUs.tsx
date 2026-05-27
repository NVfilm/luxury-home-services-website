import { Clock, CheckCircle, Award, Zap, DollarSign, PhoneCall } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: '24/7 Support',
      description: 'Available anytime you need us',
      icon: Clock,
    },
    {
      title: 'Certified Technicians',
      description: 'Highly trained and certified professionals',
      icon: Award,
    },
    {
      title: 'Same Day Service',
      description: 'Quick response and fast resolution',
      icon: Zap,
    },
    {
      title: 'Genuine Parts',
      description: 'Only authentic replacement parts used',
      icon: CheckCircle,
    },
    {
      title: 'Affordable Pricing',
      description: 'Transparent and competitive rates',
      icon: DollarSign,
    },
    {
      title: 'Fast Response',
      description: 'Quick assistance when you need it',
      icon: PhoneCall,
    },
  ];

  return (
    <section id="why-us" className="py-24 px-4 md:px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="luxury-text-heading text-4xl md:text-5xl mb-4">
            Why Choose SmartCare?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Excellence in service, trusted by thousands
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 text-center hover:shadow-xl smooth-hover-lift glow-border"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full">
                    <Icon className="text-white" size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

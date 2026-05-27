import { Star } from 'lucide-react';
import Image from 'next/image';

export default function Reviews() {
  const reviews = [
    {
      name: 'Ahmed Al-Mansouri',
      role: 'Business Owner',
      rating: 5,
      text: 'Excellent service! The technician was professional and fixed our AC in no time. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    },
    {
      name: 'Fatima Hassan',
      role: 'Homeowner',
      rating: 5,
      text: 'Very fast response and affordable pricing. They fixed our refrigerator perfectly. Thank you!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
      name: 'Mohammed Al-Ketbi',
      role: 'Property Manager',
      rating: 5,
      text: 'Outstanding professionalism! They handle all our maintenance needs efficiently.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    },
  ];

  return (
    <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-white to-cyan-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="luxury-text-heading text-4xl md:text-5xl mb-4">
            Customer Reviews
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Trusted by thousands of satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="glass-card p-8 glow-border hover:shadow-xl smooth-hover-lift"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-blue-500 text-blue-500" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-700 mb-6 italic">
                &quot;{review.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden bg-gradient-to-br from-blue-200 to-cyan-200">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{review.name}</p>
                  <p className="text-sm text-slate-600">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

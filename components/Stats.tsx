'use client';

import { useEffect, useState } from 'react';

export default function Stats() {
  const [counts, setCounts] = useState({
    customers: 0,
    appliances: 0,
    rating: 0,
    experience: 0,
  });

  useEffect(() => {
    const duration = 2000;
    const intervals = {
      customers: setInterval(() => {
        setCounts(prev => ({
          ...prev,
          customers: Math.min(prev.customers + Math.random() * 200, 5000)
        }));
      }, 50),
      appliances: setInterval(() => {
        setCounts(prev => ({
          ...prev,
          appliances: Math.min(prev.appliances + Math.random() * 60, 1200)
        }));
      }, 50),
      rating: setInterval(() => {
        setCounts(prev => ({
          ...prev,
          rating: Math.min(prev.rating + 0.025, 4.9)
        }));
      }, 50),
      experience: setInterval(() => {
        setCounts(prev => ({
          ...prev,
          experience: Math.min(prev.experience + 0.05, 10)
        }));
      }, 50),
    };

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, []);

  const stats = [
    {
      label: 'Happy Customers',
      value: Math.floor(counts.customers),
      suffix: '+',
    },
    {
      label: 'Appliances Repaired',
      value: Math.floor(counts.appliances),
      suffix: '+',
    },
    {
      label: 'Google Rating',
      value: counts.rating.toFixed(1),
      suffix: '★',
    },
    {
      label: 'Years Experience',
      value: Math.floor(counts.experience),
      suffix: '+',
    },
  ];

  return (
    <section className="py-24 px-4 md:px-6 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="mb-4 flex justify-center">
                <div className="p-6 bg-white/20 rounded-full backdrop-blur-md border border-white/30">
                  <p className="text-4xl md:text-5xl font-bold">
                    {stat.value}{stat.suffix}
                  </p>
                </div>
              </div>
              <p className="text-lg font-semibold text-blue-50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

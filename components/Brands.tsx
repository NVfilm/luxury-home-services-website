export default function Brands() {
  const brands = [
    { name: 'LG', logo: '🏢' },
    { name: 'Samsung', logo: '🏢' },
    { name: 'Bosch', logo: '🏢' },
    { name: 'Whirlpool', logo: '🏢' },
    { name: 'Panasonic', logo: '🏢' },
    { name: 'Haier', logo: '🏢' },
    { name: 'IFB', logo: '🏢' },
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-white border-y border-blue-100">
      <div className="container mx-auto">
        <p className="text-center text-slate-600 font-semibold mb-8 uppercase tracking-wide">
          We Service All Major Brands
        </p>

        <div className="grid grid-cols-2 md:grid-cols-7 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="glass-card p-6 flex items-center justify-center text-center hover:shadow-lg smooth-hover-lift"
            >
              <div className="space-y-2">
                <p className="text-3xl">{brand.logo}</p>
                <p className="font-bold text-slate-900 text-sm">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";

export default function GemstonesPage() {
  const gems = [
    {
      id: "yellow-sapphire-pukhraj",
      name: "Yellow Sapphire (Pukhraj)",
      planet: "Jupiter",
      price: "₹15,000+",
      benefits: "Wealth, Education, Wisdom, Prosperity",
      image:
        "https://i.pinimg.com/1200x/07/8c/e5/078ce599f209a812eaba0995d4733712.jpg",
      popular: true,
    },
    {
      id: "blue-sapphire-neelam",
      name: "Blue Sapphire (Neelam)",
      planet: "Saturn",
      price: "₹25,000+",
      benefits: "Career Success, Focus, Fame, Hard Work",
      image:
        "https://i.pinimg.com/1200x/db/08/42/db08428d69781c5c6beebe8ba40ca7b5.jpg",
      popular: true,
    },
    {
      id: "ruby-manik",
      name: "Ruby (Manik)",
      planet: "Sun",
      price: "₹10,000+",
      benefits: "Leadership, Health, Confidence, Authority",
      image:
        "https://i.pinimg.com/736x/ec/9e/09/ec9e094e43d694a347511bd8a8e88e09.jpg",
      popular: false,
    },
    {
      id: "emerald-panna",
      name: "Emerald (Panna)",
      planet: "Mercury",
      price: "₹12,000+",
      benefits: "Communication, Business intellect, Creativity",
      image:
        "https://i.pinimg.com/webp/1200x/4c/ec/a7/4ceca72f5461530ccf0a9f1e475f9d46.webp",
      popular: false,
    },
    {
      id: "red-coral-moonga",
      name: "Red Coral (Moonga)",
      planet: "Mars",
      price: "₹5,000+",
      benefits: "Courage, Energy, Overcoming Obstacles",
      image:
        "https://i.pinimg.com/736x/92/65/2d/92652d6fe99c66ec19bb504ad413e54e.jpg",
      popular: false,
    },
    {
      id: "pearl-moti",
      name: "Pearl (Moti)",
      planet: "Moon",
      price: "₹3,000+",
      benefits: "Emotional balance, Calmness, Mental Peace",
      image:
        "https://i.pinimg.com/1200x/92/f4/14/92f41484ab08c0e5c1caa88ab4fb3e1e.jpg",
      popular: false,
    },
  ];

  return (
    <main className="w-full min-h-screen bg-(--bg-body) text-(--text-primary) font-sans pb-24">
      {/* Hero Header */}
      <section className="relative w-full py-20 px-6 md:px-16 flex flex-col items-center justify-center text-center border-b border-zinc-800/60 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <span className="text-(--accent) text-sm font-semibold tracking-widest uppercase mb-4 relative z-10">
          Authentic & Certified
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 relative z-10">
          Premium Gemstones
        </h1>
        <p className="text-lg md:text-xl text-(--text-light) max-w-2xl relative z-10">
          Unlock your true potential. 100% genuine, lab-certified astrological
          gemstones carefully prescribed balancing your planetary energies.
        </p>
      </section>

      {/* Main Grid Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gems.map((gem) => (
            <div
              key={gem.id}
              className="group relative flex flex-col bg-(--bg-surface) border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-zinc-700 hover:shadow-xl hover:shadow-(--accent)/5 transition-all duration-500"
            >
              {gem.popular && (
                <div className="absolute top-4 right-4 z-10 bg-linear-to-r from-amber-500 to-(--accent) text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Image Container */}
              <div className="w-full h-64 sm:h-72 relative overflow-hidden shrink-0 bg-white">
                <img
                  src={gem.image}
                  alt={gem.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-(--bg-surface) to-transparent pointer-events-none z-10"></div>
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8 flex flex-col grow border-t border-zinc-800/50">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-(--accent) transition-colors duration-300">
                    {gem.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm text-zinc-400">Ruling Planet:</span>
                  <span className="text-sm font-semibold text-white px-2 py-0.5 bg-zinc-800 rounded-md">
                    {gem.planet}
                  </span>
                </div>

                <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-2">
                  Primary Benefits
                </h4>
                <p className="text-(--text-light) text-sm mb-8 grow">
                  {gem.benefits}
                </p>

                <div className="flex items-center justify-between border-t border-zinc-800/60 pt-6 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-500">Starting from</span>
                    <span className="text-xl font-bold text-white tracking-wide">
                      {gem.price}
                    </span>
                  </div>
                  <Link href={`/products/${gem.id}`}>
                    <button className="py-2.5 px-6 bg-zinc-800 text-white text-sm font-semibold rounded-xl hover:bg-(--accent) hover:text-black transition-all duration-300 shadow-sm border border-zinc-700 hover:border-transparent">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-(--accent)/10 blur-3xl rounded-full group-hover:bg-(--accent)/20 transition-colors duration-700"></div>

          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Not sure which gemstone to wear?
            </h2>
            <p className="text-zinc-400 text-lg">
              Wearing the wrong gemstone can have negative effects. Consult
              Astrologer Atul Tripathi for a detailed birth chart analysis to
              find your perfect lucky stone.
            </p>
          </div>

          <button className="relative z-10 py-4 px-8 bg-(--accent) text-black font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap">
            Book a Consultation
          </button>
        </div>
      </section>
    </main>
  );
}

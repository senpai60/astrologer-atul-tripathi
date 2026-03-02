"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ui/ProductCard";

const AllProductsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: "pair-love",
      title: "COUPLE LOVE READING",
      category: "customized reading",
      originalPrice: 5100.0,
      discountedPrice: 4100.0,
      imageUrl:
        "https://i.pinimg.com/webp/1200x/58/b8/ac/58b8aca6cd89fdf94b5d33ac35fbb849.webp",
      isSale: true,
      desc: "Find harmony and understand the karmic connection with your partner through our deep synastry charts.",
    },
    {
      id: "deep-horoscope",
      title: "DEEP HOROSCOPE READING",
      category: "advanced analysis",
      originalPrice: 26000.0,
      discountedPrice: 21000.0,
      imageUrl:
        "https://i.pinimg.com/736x/c3/7a/60/c37a60d52c109d3b60ac3b86e13fa750.jpg",
      isSale: true,
      desc: "A comprehensive look at your life's journey, exploring all 12 houses to uncover hidden potentials and remedies.",
    },
    {
      id: "family-package",
      title: "Family package",
      category: "group service",
      originalPrice: 44000.0,
      discountedPrice: 21000.0,
      imageUrl:
        "https://i.pinimg.com/webp/736x/a7/1e/9c/a71e9ca8334de7b9e2040abf173dc8a1.webp",
      isSale: true,
      desc: "Complete astrological guidance for your entire family, ensuring collective peace, prosperity, and joy.",
    },
    {
      id: "gift-anything",
      title: "GIFT FEEL FREE TO GIFT",
      category: "special offerings",
      imageUrl:
        "https://i.pinimg.com/736x/5b/c9/ed/5bc9ed9b4eaf7baea6111f185387c934.jpg",
      isSale: true,
      desc: "Gift a cosmic reading to a loved one. Offer guidance when they need it most with our open-ended gift offerings.",
    },
    {
      id: "kundali-milan",
      title: "KUNDALI MILAN",
      category: "marriage matching",
      discountedPrice: 3100.0,
      imageUrl:
        "https://i.pinimg.com/736x/1a/f7/78/1af7788edba831cd0e107567ae2cdef2.jpg",
      isSale: true,
      desc: "Classic Vedic match-making to determine the Ashtakoot Guna balance for a successful marriage.",
    },
  ];

  const topThree = products.slice(0, 3);

  const filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % topThree.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [topThree.length]);

  return (
    <main className="w-full min-h-screen bg-[#050505] text-white pt-24 font-sans overflow-hidden">
      {/* 1. HERO CAROUSEL SECTION */}
      <section className="relative w-full max-w-[1400px] mx-auto min-h-[500px] lg:min-h-[600px] px-6 md:px-16 flex items-center mb-16">
        {/* Decorative background blur */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#EAB308] rounded-full mix-blend-screen filter blur-3xl opacity-10 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
          {/* Left: Text Content */}
          <div className="flex flex-col items-start gap-6 transition-opacity duration-500">
            <span className="text-[#EAB308] tracking-[0.2em] uppercase text-xs font-bold font-serif opacity-80">
              {topThree[currentSlide].category}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight uppercase drop-shadow-lg">
              {topThree[currentSlide].title}
            </h1>
            <p className="text-zinc-400 text-lg max-w-md font-light leading-relaxed h-[80px]">
              {topThree[currentSlide].desc}
            </p>
            <div className="flex items-center gap-6 mt-4">
              <button className="px-8 py-4 bg-[#EAB308] text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                Book Now
              </button>
              <div className="text-2xl font-serif text-white">
                ₹
                {topThree[currentSlide].discountedPrice?.toLocaleString(
                  "en-IN",
                )}
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="flex gap-3 mt-8">
              {topThree.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-[#EAB308] w-8" : "bg-zinc-600 hover:bg-zinc-400"}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Featured Img Circular */}
          <div className="relative flex justify-center items-center h-[300px] md:h-[450px]">
            {topThree.map((product, idx) => (
              <img
                key={product.id}
                src={product.imageUrl}
                alt={product.title}
                className={`absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] object-cover rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-4 border-[#1c180b] transition-all duration-1000 ease-in-out ${
                  idx === currentSlide
                    ? "opacity-100 scale-100 translate-x-0 rotate-0"
                    : "opacity-0 scale-75 translate-x-24 rotate-12 pointer-events-none"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. SEARCH BAR SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-16 mb-16 relative z-20">
        <div className="max-w-2xl mx-auto relative group">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for cosmic readings and services..."
            className="w-full py-4 pl-14 pr-6 rounded-full bg-[#111] border border-[#222] text-white focus:outline-none focus:border-[#EAB308] focus:bg-[#151515] transition-all shadow-xl font-light placeholder:text-zinc-600"
          />
          <svg
            className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-[#EAB308] transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </section>

      {/* 3. ALL PRODUCTS GRID */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-16 mb-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-serif text-white uppercase tracking-widest">
            Available Readings
          </h2>
          <span className="text-zinc-500 text-sm">
            {filteredProducts.length} Results
          </span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                category={product.category}
                originalPrice={product.originalPrice}
                discountedPrice={product.discountedPrice}
                imageUrl={product.imageUrl}
                isSale={product.isSale}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#111] rounded-2xl border border-zinc-800">
            <p className="text-zinc-400 text-lg">
              No cosmic services found for "{searchQuery}".
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-[#EAB308] hover:underline"
            >
              Clear Search
            </button>
          </div>
        )}
      </section>

      {/* 4. RARE PRODUCTS BANNER (Like bottom of Image reference) */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-16 pb-24">
        <div className="relative bg-linear-to-r from-[#1c180b] to-[#0A0A0A] border border-[#3a3528] rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-visible">
          <div className="max-w-lg relative z-10 mb-10 md:mb-0 mt-8 md:mt-0">
            <span className="text-xs tracking-widest text-[#EAB308] uppercase mb-4 block">
              Exclusive Artifacts
            </span>
            <h3 className="text-4xl font-serif text-white mb-4 leading-snug">
              Rare & Authentic <br />
              Yantras
            </h3>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
              Procure highly energized spiritual items sourced through authentic
              Vedic procedures to attract immense positivity and guard against
              malefic energies.
            </p>
            <button className="px-8 py-3 rounded-full border border-[#EAB308] text-[#EAB308] hover:bg-[#EAB308] hover:text-black font-semibold text-sm transition-colors flex items-center gap-2">
              View Collection
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Floating Rare Card - referencing the 'Snail Ten' popout in image */}
          <div className="md:absolute right-8 top-[-30px] md:right-16 md:-top-12 bg-[#171717] border border-zinc-800 p-4 rounded-2xl w-full md:w-80 shadow-2xl flex items-center gap-5 hover:-translate-y-2 hover:border-[#EAB308]/50 transition-all z-20 cursor-pointer">
            <img
              src="/images/web1.png"
              alt="Rare Yantra"
              className="w-24 h-24 rounded-xl object-contain bg-black p-2 border border-zinc-700 invert sepia opacity-80"
              style={{
                filter:
                  "invert(72%) sepia(100%) saturate(2719%) hue-rotate(344deg) brightness(97%) contrast(92%)",
              }}
            />
            <div className="flex-1">
              <h4 className="text-white font-bold text-lg leading-tight mb-1">
                Shree Yantra (Copper)
              </h4>
              <div className="text-xs text-zinc-500 mb-2 line-clamp-2">
                Energized for wealth and prosperity. Highly rare.
              </div>
              <div className="text-[#4ade80] font-bold">₹11,000.00</div>
            </div>
          </div>

          {/* Decoration */}
          <div className="absolute top-0 right-0 w-64 h-full bg-[radial-gradient(circle_at_right,rgba(234,179,8,0.1)_0%,transparent_100%)] pointer-events-none rounded-r-3xl"></div>
        </div>
      </section>
    </main>
  );
};

export default AllProductsPage;

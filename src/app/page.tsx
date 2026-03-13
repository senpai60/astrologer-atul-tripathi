"use client";

import Card from "@/components/ui/Card";
import React from "react";
import { useRouter } from "next/navigation";
import AboutSection from "@/components/layout/homepage/AboutSection";

const dummyArticles = [
  {
    id: 1,
    title: "27 फरवरी 2026 का लव राशिफल: क्या चमकेगा आपकी मोहब्बत का सितारा?",
    description:
      "सिंगल से लेकर एक्स्ट्रा मैरिटल तक… आपके हर रिश्ते की सच्ची और बेबाक भविष्यवाणी! मेष राशि (Aries) Singles: आज किसी पुराने दोस्त के प्रति आकर्षण बढ़ सकता है। जल्दबाजी से बचें।",
    category: "Daily Love Reading",
    date: "26 Feb 2026",
    imageUrl:
      "https://i.pinimg.com/1200x/74/a8/f1/74a8f1367036bcfb42d7ea7704456119.jpg",
  },
  {
    id: 2,
    title: "Vedic Astrology: Understanding the 12 Houses of the Zodiac",
    description:
      "Learn how the 12 astrological houses dictate everything from your core personality traits to career choices, relationships, and hidden subconscious patterns.",
    category: "Vedic Astrology",
    date: "24 Feb 2026",
    imageUrl:
      "https://i.pinimg.com/736x/aa/43/b8/aa43b81e7ea6384730c5ebc18595df0d.jpg",
  },
  {
    id: 3,
    title: "Mercury Retrograde in Pisces: What You Need to Know",
    description:
      "Communication breakdown? Technological glitches? This retrograde cycle focuses deeply on emotional boundaries and spiritual awakenings. Prepare yourself.",
    category: "Planetary Transits",
    date: "21 Feb 2026",
    imageUrl:
      "https://i.pinimg.com/736x/03/c9/ef/03c9eff76285797120af250273ba9f66.jpg",
  },
  {
    id: 4,
    title: "How to Choose the Right Gemstone for Your Zodiac Sign",
    description:
      "Wearing the correct gemstone can bring prosperity and peace, while the wrong one can induce stress. Discover your ideal gemstone based on your birth chart.",
    category: "Gemstones",
    date: "18 Feb 2026",
    imageUrl:
      "https://i.pinimg.com/1200x/30/bd/4e/30bd4e2353f03af45c1564a581521272.jpg",
  },
  {
    id: 5,
    title: "The Ultimate Guide to Tarot Card Reading for Beginners",
    description:
      "Unlock the mysteries of the major and minor arcana. A definitive guide to understanding imagery, intuition, and standard spreads for daily guidance.",
    category: "Tarot Reading",
    date: "15 Feb 2026",
    imageUrl:
      "https://i.pinimg.com/1200x/72/ef/ca/72efca2f1be102c76058fef8cd9eba03.jpg",
  },
  {
    id: 6,
    title: "Astro-Vastu Tips To Attract Wealth In Your Home",
    description:
      "Simple tweaks in your living space can completely transform your financial stability. Combine astrology and Vastu to clear blocked energies.",
    category: "Vastu Shastra",
    date: "10 Feb 2026",
    imageUrl:
      "https://i.pinimg.com/736x/b5/07/6c/b5076c5f011c07332a37c3f0c8804901.jpg",
  },
  {
    id: 7,
    title: "Mars Transit in Scorpio: Fueling Passion and Intimacy",
    description:
      "Mars entering its own sign of Scorpio promises a surge of intensity. Find out how this transit affects career ambitions, hidden desires, and romantic life.",
    category: "Planetary Transits",
    date: "05 Feb 2026",
    imageUrl:
      "https://i.pinimg.com/1200x/47/64/5c/47645cdc5d75a0f3e9052f1588bb3548.jpg",
  },
  {
    id: 8,
    title: "Numerology 2026: Calculate Your Personal Year Number",
    description:
      "Your birth date holds the key to the recurring themes of your year. Learn how to calculate your personal year number and what it reveals about the next 12 months.",
    category: "Numerology",
    date: "01 Feb 2026",
    imageUrl:
      "https://i.pinimg.com/1200x/5f/a3/32/5fa3322dbd9f386bd033f47b6fb5afc8.jpg",
  },
  {
    id: 9,
    title: "Healing with Crystals: Top 5 Stones for Anxiety Reduction",
    description:
      "Feeling overwhelmed? Amethyst and Rose Quartz might just be what you need. Discover the top five crystals that can help calm the mind and soothe the soul.",
    category: "Healing",
    date: "28 Jan 2026",
    imageUrl:
      "https://i.pinimg.com/736x/c4/c4/23/c4c423856a816085f4d9ec751d3c8f09.jpg",
  },
  {
    id: 10,
    title:
      "Career Astrology: Finding Your True Vocation Through the 10th House",
    description:
      "Stuck in the wrong job? The 10th house in astrology reveals your true calling and public standing. Demystify your career potential with your birth chart.",
    category: "Career Reading",
    date: "21 Jan 2026",
    imageUrl:
      "https://i.pinimg.com/736x/11/51/ed/1151ed24b183c179fa98aa369d206ee5.jpg",
  },
];

const Home = () => {
  const router = useRouter();
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-(--bg-body)">
      {/* HERO SECTION */}
      <section className="relative w-full h-auto lg:min-h-[90vh] flex flex-col justify-start lg:justify-center overflow-hidden pt-8 pb-12 lg:py-0">
        {/* Background Cosmos Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1569681509200-b7734657fd29?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cosmic Starry Background"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay to blend into the body background */}
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-(--bg-body)"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-16 lg:px-32 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-8 lg:h-full">
          {/* Left: Text Content & Mobile Image */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:max-w-xl justify-center my-auto lg:my-0 pb-2 lg:pb-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-(--accent)/30 bg-(--accent)/10 backdrop-blur-md shadow-[0_0_15px_rgba(234,179,8,0.15)] mb-4 lg:mb-6">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-(--accent) animate-pulse shadow-[0_0_5px_rgba(234,179,8,0.8)]"></span>
              <span className="text-[10px] md:text-xs font-bold text-(--accent-light) tracking-[0.2em] uppercase">
                Vedic Astrology Expert
              </span>
            </div>

            <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter mb-5 lg:mb-6">
              समस्या है तो <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-(--accent) to-[#fde047]">
                समाधान भी होगा
              </span>
            </h1>

            {/* Mobile Immersive Image Element */}
            <div className="flex w-full relative justify-center items-center lg:hidden my-2">
              <div className="absolute w-[160px] h-[160px] bg-(--accent)/30 blur-[60px] rounded-full mix-blend-screen pointer-events-none"></div>

              <div className="relative w-full max-w-[200px] sm:max-w-[250px] aspect-square rounded-4xl p-2 flex items-center justify-center">
                {/* Spinning geometric border */}
                <div className="absolute inset-0 border-[1.5px] border-dashed border-(--accent)/40 rounded-4xl animate-[spin_40s_linear_infinite]"></div>
                {/* Outer soft solid ring */}
                <div className="absolute inset-1.5 border border-(--accent-light)/20 rounded-[1.8rem] backdrop-blur-md bg-white/5"></div>

                {/* Actual Image container */}
                <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden bg-zinc-900 shadow-xl border border-zinc-700/50 group">
                  <img
                    src="https://astrologeratultripathi.com/wp-content/uploads/2026/02/WhatsApp_Image_2025-02-25_at_1.41.07_PM-removebg-preview.webp"
                    alt="Astrologer Atul Tripathi"
                    className="w-full h-full object-cover z-10 scale-110 object-[center_top] transform transition-transform duration-[2s] group-hover:scale-125 ease-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            <p className="text-[13px] sm:text-base md:text-lg text-zinc-300 leading-relaxed font-light mt-2 lg:mt-2 max-w-lg mb-6 lg:mb-8 px-2 sm:px-0">
              Discover the profound wisdom of the stars. Get deep insights into
              your life, love, and career with Astrologer Atul Tripathi. Find
              clarity and align yourself with cosmic energy today.
            </p>

            <div className="flex flex-row items-center justify-center lg:justify-start gap-3 w-full max-w-[360px] sm:max-w-none mx-auto lg:mx-0 px-2 lg:px-0">
              <button className="flex-1 px-3 py-3 sm:px-6 sm:py-4 text-[13px] sm:text-base bg-(--accent) text-black font-extrabold rounded-full hover:scale-105 hover:bg-(--accent-light) shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all duration-300 leading-tight">
                Book Consult
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("insights")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex-1 px-3 py-3 sm:px-6 sm:py-4 text-[13px] sm:text-base bg-white/5 backdrop-blur-sm border border-zinc-700 text-white font-semibold rounded-full hover:bg-white/10 hover:border-zinc-500 transition-all duration-300 flex items-center justify-center gap-1.5 group leading-tight"
              >
                Horoscope
                <svg
                  className="w-3.5 h-3.5 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Right: Immersive Image Element - Desktop Only */}
          <div className="hidden lg:flex flex-1 w-full relative justify-center items-center mt-10 lg:mt-0">
            {/* Massive Glow effect behind the entire image section */}
            <div className="absolute w-[400px] h-[400px] bg-(--accent)/30 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

            {/* Zodiac/Mandala decoration border */}
            <div className="relative w-full max-w-[420px] aspect-square rounded-[3rem] p-4 flex items-center justify-center">
              {/* Spinning geometric border */}
              <div className="absolute inset-0 border-2 border-dashed border-(--accent)/40 rounded-[3rem] animate-[spin_40s_linear_infinite]"></div>
              {/* Outer soft solid ring */}
              <div className="absolute inset-2 border border-(--accent-light)/20 rounded-[2.8rem] backdrop-blur-md bg-white/5"></div>

              {/* Actual Image container */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-zinc-900 shadow-2xl border border-zinc-700/50 group">
                <img
                  src="https://astrologeratultripathi.com/wp-content/uploads/2026/02/WhatsApp_Image_2025-02-25_at_1.41.07_PM-removebg-preview.webp"
                  alt="Astrologer Atul Tripathi"
                  className="w-full h-full object-cover z-10 scale-110 object-[center_top] transform transition-transform duration-[2s] group-hover:scale-125 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <AboutSection />
      {/* Grid wrapper for the cards */}
      <section
        id="insights"
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-16 lg:px-32 py-12 lg:py-24 relative z-10"
      >
        <div className="flex flex-col mb-10 lg:mb-16 items-center text-center">
          <h2 className="text-[2rem] leading-tight sm:text-4xl lg:text-5xl font-bold text-white mb-3 lg:mb-4 tracking-tight px-2">
            Latest Astrological Insights
          </h2>
          <div className="w-16 lg:w-24 h-1 md:h-1.5 bg-(--accent) rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
          <p className="mt-4 lg:mt-6 text-zinc-400 max-w-2xl text-[14px] sm:text-base lg:text-lg px-2">
            Daily horoscopes, planetary transits, and profound vedic knowledge
            exactly when you need it.
          </p>
        </div>

        {/* Horizontal Slider Content */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 lg:gap-8 pb-8 snap-x snap-mandatory w-full [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-2 lg:px-0"
        >
          {dummyArticles.map((article) => (
            <div
              key={article.id}
              className="w-[85vw] max-w-[320px] sm:max-w-none sm:w-[350px] md:w-[400px] snap-center sm:snap-start shrink-0"
            >
              <Card
                id={article.id.toString()}
                title={article.title}
                description={article.description}
                category={article.category}
                date={article.date}
                imageUrl={article.imageUrl}
                handleClick={() => router.push(`/article/${article.id}`)}
              />
            </div>
          ))}
        </div>

        {/* Universal Navigation Arrows at Bottom */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={scrollLeft}
            className="p-4 rounded-full border border-zinc-700 bg-zinc-900 text-white hover:bg-(--accent) hover:text-black hover:border-(--accent) transition-all shadow-md group"
          >
            <svg
              className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="p-4 rounded-full border border-zinc-700 bg-zinc-900 text-white hover:bg-(--accent) hover:text-black hover:border-(--accent) transition-all shadow-md group"
          >
            <svg
              className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

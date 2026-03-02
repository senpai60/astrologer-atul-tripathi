"use client";

import Card from "@/components/ui/Card";
import React from "react";
import { useRouter } from "next/navigation";

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
      "https://i.pinimg.com/1200x/29/7a/ff/297aff703875be44a864724c9c10f81d.jpg",
  },
  {
    id: 6,
    title: "Astro-Vastu Tips To Attract Wealth In Your Home",
    description:
      "Simple tweaks in your living space can completely transform your financial stability. Combine astrology and Vastu to clear blocked energies.",
    category: "Vastu Shastra",
    date: "10 Feb 2026",
    imageUrl:
      "https://i.pinimg.com/1200x/ab/ab/7b/abab7bff6cd3f976a405fd7c569f4705.jpg",
  },
  {
    id: 7,
    title: "Mars Transit in Scorpio: Fueling Passion and Intimacy",
    description:
      "Mars entering its own sign of Scorpio promises a surge of intensity. Find out how this transit affects career ambitions, hidden desires, and romantic life.",
    category: "Planetary Transits",
    date: "05 Feb 2026",
    imageUrl:
      "https://i.pinimg.com/1200x/d6/3b/bc/d63bbcfbc2ec7210e71ce9402e973d45.jpg",
  },
  {
    id: 8,
    title: "Numerology 2026: Calculate Your Personal Year Number",
    description:
      "Your birth date holds the key to the recurring themes of your year. Learn how to calculate your personal year number and what it reveals about the next 12 months.",
    category: "Numerology",
    date: "01 Feb 2026",
    imageUrl:
      "https://i.pinimg.com/1200x/2a/3b/b7/2a3bb7db552835dbb721e06fa66f43e5.jpg",
  },
  {
    id: 9,
    title: "Healing with Crystals: Top 5 Stones for Anxiety Reduction",
    description:
      "Feeling overwhelmed? Amethyst and Rose Quartz might just be what you need. Discover the top five crystals that can help calm the mind and soothe the soul.",
    category: "Healing",
    date: "28 Jan 2026",
    imageUrl:
      "https://i.pinimg.com/736x/f6/8d/f9/f68df9f2e3be75e929bdf3de36eb4ab3.jpg",
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
      "https://i.pinimg.com/1200x/99/bd/27/99bd27ee85cc223e71dfbc216b345da5.jpg",
  },
];

const Home = () => {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen bg-(--bg-body)">
      {/* PROFESSIONAL HERO SECTION */}
      <section className="relative w-full h-auto min-h-[90vh] flex items-center justify-center overflow-hidden py-20 lg:py-0">
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
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:max-w-xl">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-(--accent)/30 bg-(--accent)/10 backdrop-blur-md shadow-[0_0_15px_rgba(234,179,8,0.15)]">
              <span className="w-2 h-2 rounded-full bg-(--accent) animate-pulse shadow-[0_0_5px_rgba(234,179,8,0.8)]"></span>
              <span className="text-xs font-bold text-(--accent-light) tracking-[0.2em] uppercase">
                Vedic Astrology Expert
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tighter">
              समस्या है तो <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-(--accent) to-[#fde047]">
                समाधान भी होगा
              </span>
            </h1>

            <p className="text-lg text-zinc-300 leading-relaxed font-light mt-2 max-w-lg">
              Discover the profound wisdom of the stars. Get deep insights into
              your life, love, and career with Astrologer Atul Tripathi. Find
              clarity and align yourself with cosmic energy today.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <button className="w-full sm:w-auto px-8 py-4 bg-(--accent) text-black font-extrabold rounded-full hover:scale-105 hover:bg-(--accent-light) shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] transition-all duration-300">
                Book Consultation
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("insights")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-zinc-700 text-white font-semibold rounded-full hover:bg-white/10 hover:border-zinc-500 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Read Horoscope
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
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

          {/* Right: Immersive Image Element */}
          <div className="flex-1 w-full relative flex justify-center items-center mt-10 lg:mt-0">
            {/* Massive Glow effect behind the entire image section */}
            <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-(--accent)/30 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

            {/* Zodiac/Mandala decoration border */}
            <div className="relative w-full max-w-[320px] md:max-w-[420px] aspect-square rounded-[3rem] p-4 flex items-center justify-center">
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

      {/* Grid wrapper for the cards */}
      <section
        id="insights"
        className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-32 py-24 relative z-10"
      >
        <div className="flex flex-col mb-16 items-center text-center md:items-start md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Latest Astrological Insights
          </h2>
          <div className="w-24 h-1.5 bg-(--accent) rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
          <p className="mt-6 text-zinc-400 max-w-2xl text-lg">
            Daily horoscopes, planetary transits, and profound vedic knowledge
            exactly when you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dummyArticles.map((article) => (
            <Card
              id={article.id.toString()}
              key={article.id}
              title={article.title}
              description={article.description}
              category={article.category}
              date={article.date}
              imageUrl={article.imageUrl}
              handleClick={() => router.push(`/article/${article.id}`)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

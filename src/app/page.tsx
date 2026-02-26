import Card from "@/components/ui/Card";
import React from "react";

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
      "https://i.pinimg.com/1200x/9d/23/e6/9d23e61ff36056f7e4afeb5347209ac7.jpg",
  },
  {
    id: 3,
    title: "Mercury Retrograde in Pisces: What You Need to Know",
    description:
      "Communication breakdown? Technological glitches? This retrograde cycle focuses deeply on emotional boundaries and spiritual awakenings. Prepare yourself.",
    category: "Planetary Transits",
    date: "21 Feb 2026",
    imageUrl:
      "https://i.pinimg.com/1200x/99/bd/27/99bd27ee85cc223e71dfbc216b345da5.jpg",
  },
  {
    id: 4,
    title: "How to Choose the Right Gemstone for Your Zodiac Sign",
    description:
      "Wearing the correct gemstone can bring prosperity and peace, while the wrong one can induce stress. Discover your ideal gemstone based on your birth chart.",
    category: "Gemstones",
    date: "18 Feb 2026",
    imageUrl:
      "https://i.pinimg.com/1200x/09/cc/62/09cc62ac4e21a8d0b28416caab94a974.jpg",
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
  return (
    <div className="w-full min-h-screen px-32 py-16 ">
      <h1
        className="text-(--accent-light) text-8xl w-2/3 tracking-tighter leading-tight font-semibold
      border-b border-zinc-200 pb-10
      "
      >
        समस्या है तो समाधान भी होगा
      </h1>

      {/* Grid wrapper for the cards */}
      <div className="card-section mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {dummyArticles.map((article) => (
          <Card
            key={article.id}
            title={article.title}
            description={article.description}
            category={article.category}
            date={article.date}
            imageUrl={article.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

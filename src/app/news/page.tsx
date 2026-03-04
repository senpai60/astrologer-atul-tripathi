import React from "react";
import Link from "next/link";

export default function NewsPage() {
  const newsItems = [
    {
      id: "rare-planetary-alignment-2026",
      title: "Rare Planetary Alignment in March 2026: Worldwide Impact",
      summary:
        "Astrologers warn of a massive shift in global energies as five planets align in Pisces. Here's what this means for political and economic stability over the next year.",
      image:
        "https://i.pinimg.com/1200x/c7/2b/e4/c72be4bc2cf0a12e3a6c4217117e33dc.jpg",
      date: "March 1, 2026",
      source: "AstroNews Daily",
    },
    {
      id: "atul-tripathi-award-2026",
      title:
        "Astrologer Atul Tripathi Honored with 'Jyotish Ratna' Excellence Award",
      summary:
        "In a grand ceremony held in New Delhi, eminent astrologer Atul Tripathi was awarded for his outstanding contributions to the field of predictive Vedic astrology and spiritual counseling over the last decade.",
      image:
        "https://i.pinimg.com/1200x/29/7a/ff/297aff703875be44a864724c9c10f81d.jpg",
      date: "Feb 20, 2026",
      source: "Press Release",
    },
    {
      id: "eclipse-season-begins",
      title: "Eclipse Season Begins: How to Prepare Your Mind and Home",
      summary:
        "The upcoming solar eclipse is set to bring sudden changes and emotional breakthroughs. Experts share protective mantras and remedies to maintain harmony during this chaotic transit.",
      image:
        "https://i.pinimg.com/1200x/e0/f1/a2/e0f1a20ddc94488b0ebba2dbbda2e783.jpg",
      date: "Jan 15, 2026",
      source: "Cosmic Weekly",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-(--bg-body) text-(--text-primary) font-sans pb-24">
      {/* Hero Header */}
      <section className="relative w-full py-20 px-6 md:px-16 flex flex-col items-center justify-center text-center border-b border-zinc-800/60 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-(--accent)/10 blur-[100px] rounded-full pointer-events-none"></div>

        <span className="text-(--accent) text-sm font-semibold tracking-widest uppercase mb-4 relative z-10">
          Latest Updates
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 relative z-10">
          News & Announcements
        </h1>
        <p className="text-lg md:text-xl text-(--text-light) max-w-2xl relative z-10">
          Stay up to date with the latest celestial events, media features, and
          official announcements from Astrologer Atul Tripathi.
        </p>
      </section>

      {/* Main Content List */}
      <section className="w-full max-w-5xl mx-auto px-6 md:px-10 pt-16">
        <div className="flex flex-col gap-10">
          {newsItems.map((news) => (
            <article
              key={news.id}
              className="group flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-8 bg-(--bg-surface) border border-zinc-800/50 rounded-2xl hover:border-zinc-700 hover:shadow-xl hover:shadow-(--accent)/5 transition-all duration-500"
            >
              {/* Image Section */}
              <div className="w-full md:w-1/3 aspect-video md:aspect-square lg:aspect-video rounded-xl overflow-hidden shrink-0 bg-zinc-900 border border-zinc-800/80">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-center w-full md:w-2/3">
                <div className="flex items-center gap-3 text-xs md:text-sm text-zinc-400 mb-3 md:mb-4">
                  <span className="bg-(--accent)/10 text-(--accent) px-3 py-1 rounded-full font-semibold border border-(--accent)/20">
                    {news.source}
                  </span>
                  <span>{news.date}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4 group-hover:text-(--accent) transition-colors duration-300">
                  {news.title}
                </h2>

                <p className="text-(--text-light) text-base md:text-lg leading-relaxed mb-6">
                  {news.summary}
                </p>

                <Link
                  href={`/article/${news.id}`}
                  className="inline-flex items-center text-(--text-primary) hover:text-(--accent) font-semibold transition-colors duration-300 group/link w-fit"
                >
                  <span className="border-b-2 border-transparent group-hover/link:border-(--accent) pb-0.5 transition-colors">
                    Read Full Story
                  </span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

import React from "react";
import Link from "next/link";

export default function DailyHoroscopePage() {
  const articles = [
    {
      id: "love-horoscope-feb-27",
      title: "27 फरवरी 2026 का लव राशिफल: क्या चमकेगा आपकी मोहब्बत का सितारा?",
      excerpt:
        "सिंगल से लेकर एक्स्ट्रा मैरिटल तक… आपके हर रिश्ते की सच्ची और बेबाक भविष्यवाणी! जानिए आज का दिन आपके और आपके साथी के लिए क्या नए मोड़ लेकर आ रहा है।",
      image:
        "https://i.pinimg.com/1200x/74/a8/f1/74a8f1367036bcfb42d7ea7704456119.jpg",
      category: "Love Reading",
      date: "26 Feb 2026",
    },
    {
      id: "career-finance-feb-27",
      title: "Career & Finance Horoscope: New Opportunities Ahead",
      excerpt:
        "Discover what the stars hold for your professional life. Will you get that promotion or is it time for a career change? Read our expert financial predictions.",
      image:
        "https://i.pinimg.com/736x/42/a0/0e/42a00ecadeeab1569df30c56bc4bcdee.jpg",
      category: "Career",
      date: "26 Feb 2026",
    },
    {
      id: "health-wellness-feb-27",
      title: "Health & Wellness: Planetary Shifts and Your Vitality",
      excerpt:
        "With the changing planetary positions, find out how your energy levels and overall well-being might be affected today.",
      image:
        "https://i.pinimg.com/1200x/9b/63/a8/9b63a8014548ea9d7e3f006c96b70213.jpg",
      category: "Health",
      date: "26 Feb 2026",
    },
    {
      id: "family-relationships-feb-27",
      title: "Family & Relationships: Navigating Emotional Tides",
      excerpt:
        "Family dynamics can be complex. See how today's cosmic alignments influence your interactions with loved ones and relatives.",
      image:
        "https://i.pinimg.com/1200x/3d/ef/55/3def558579612a517065a7c48310e918.jpg",
      category: "Family",
      date: "25 Feb 2026",
    },
    {
      id: "spiritual-growth-feb-26",
      title: "Spiritual Growth: Connecting with Your Higher Self",
      excerpt:
        "A day meant for deep introspection. Discover which meditation practices align best with today's astrological forecast.",
      image:
        "https://i.pinimg.com/webp/1200x/ed/a7/07/eda7077e79a03f215b3e31b0f8adddf8.webp",
      category: "Spirituality",
      date: "25 Feb 2026",
    },
    {
      id: "weekly-overview-feb",
      title: "Weekly Overview: What to Expect Before the Month Ends",
      excerpt:
        "A quick summary of the week's major astrological events. Be prepared for Mercury's transit and what it means for communication.",
      image:
        "https://i.pinimg.com/1200x/74/a8/f1/74a8f1367036bcfb42d7ea7704456119.jpg",
      category: "Weekly",
      date: "24 Feb 2026",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-(--bg-body) text-(--text-primary) font-sans pb-24">
      {/* Hero Header */}
      <section className="relative w-full py-20 px-6 md:px-16 flex flex-col items-center justify-center text-center border-b border-zinc-800/60 overflow-hidden">
        {/* Background glow for aesthetic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-(--accent)/10 blur-[100px] rounded-full pointer-events-none"></div>

        <span className="text-(--accent) text-sm font-semibold tracking-widest uppercase mb-4 relative z-10">
          Astrology Insights
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 relative z-10">
          Daily Horoscope
        </h1>
        <p className="text-lg md:text-xl text-(--text-light) max-w-2xl relative z-10">
          Navigate your day with confidence. Read the latest astrological
          predictions and insights drafted by expert astrologer Atul Tripathi.
        </p>
      </section>

      {/* Main Grid Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              href={`/article/${article.id}`}
              key={article.id}
              className="group flex flex-col bg-(--bg-surface) border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-zinc-700 hover:shadow-xl hover:shadow-(--accent)/5 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="w-full h-56 md:h-64 relative overflow-hidden bg-zinc-900 shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-(--accent) text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-(--accent)/20">
                  {article.category}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8 flex flex-col grow">
                <div className="flex items-center gap-2 text-xs text-zinc-400 mb-4">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                  <span>5 min read</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4 group-hover:text-(--accent) transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-(--text-light) text-sm md:text-base leading-relaxed line-clamp-3 mb-6 grow">
                  {article.excerpt}
                </p>

                <div className="flex items-center text-(--accent) text-sm font-semibold tracking-wide uppercase mt-auto">
                  <span>Read More</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
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
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="w-full flex justify-center mt-16 pb-8">
          <button className="py-3 px-8 border border-zinc-700 text-(--text-primary) font-semibold rounded-full hover:bg-(--accent) hover:text-black hover:border-(--accent) transition-all duration-300 transform hover:-translate-y-1">
            Load More Articles
          </button>
        </div>
      </section>
    </main>
  );
}

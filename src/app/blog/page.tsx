import React from "react";
import Link from "next/link";

export default function BlogPage() {
  const blogs = [
    {
      id: "kundali-matching-importance",
      title: "The Importance of Kundali Matching Before Marriage",
      excerpt:
        "Why is Kundali Milan considered essential in Vedic Astrology? Discover how the alignment of stars can impact your married life.",
      image:
        "https://i.pinimg.com/1200x/c1/f5/63/c1f563ab2ad9f42ab8be421b8ff1e51b.jpg",
      category: "Marriage",
      date: "24 Feb 2026",
    },
    {
      id: "saturn-return-meaning",
      title: "Surviving Your Saturn Return: A Complete Guide",
      excerpt:
        "Saturn return can bring major life changes. Learn how to navigate this challenging period and emerge stronger and wiser.",
      image:
        "https://i.pinimg.com/1200x/fa/e0/f1/fae0f1d19889ee7d53ec164b3df3d52c.jpg",
      category: "Astrology Guide",
      date: "22 Feb 2026",
    },
    {
      id: "manifestation-moon-phases",
      title: "Using Moon Phases for Manifestation",
      excerpt:
        "Did you know different phases of the moon carry different energies? Learn how to sync your goals with the lunar cycle for optimal results.",
      image:
        "https://i.pinimg.com/1200x/c3/c7/2b/c3c72b78112afad10cb8cf8dc68fb980.jpg",
      category: "Spiritual",
      date: "20 Feb 2026",
    },
    {
      id: "understanding-your-ascendant",
      title: "Why Your Ascendant Sign Matters More Than You Think",
      excerpt:
        "Your rising sign dictates your outward personality and how others see you. Dive deeper into the true meaning of your ascendant.",
      image:
        "https://i.pinimg.com/1200x/1e/ab/94/1eab94ef0bc5b01ba0bdac0decfcfcf2.jpg",
      category: "Astrology 101",
      date: "18 Feb 2026",
    },
    {
      id: "career-astrology",
      title: "Finding the Right Career Path Through Astrology",
      excerpt:
        "Feeling lost in your professional life? See which career paths align best with your planetary placements according to Vedic principles.",
      image:
        "https://i.pinimg.com/1200x/9d/23/e6/9d23e61ff36056f7e4afeb5347209ac7.jpg",
      category: "Career",
      date: "15 Feb 2026",
    },
    {
      id: "remedies-for-peace",
      title: "Simple Astrological Remedies for Mental Peace",
      excerpt:
        "Stressed and anxious? Try these simple and effective astrological remedies to calm your mind and invite positive energy into your home.",
      image:
        "https://i.pinimg.com/1200x/29/7a/ff/297aff703875be44a864724c9c10f81d.jpg",
      category: "Remedies",
      date: "12 Feb 2026",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-(--bg-body) text-(--text-primary) font-sans pb-24">
      {/* Hero Header */}
      <section className="relative w-full py-20 px-6 md:px-16 flex flex-col items-center justify-center text-center border-b border-zinc-800/60 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-(--accent)/10 blur-[100px] rounded-full pointer-events-none"></div>

        <span className="text-(--accent) text-sm font-semibold tracking-widest uppercase mb-4 relative z-10">
          Expand Your Knowledge
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 relative z-10">
          Astrology Blog
        </h1>
        <p className="text-lg md:text-xl text-(--text-light) max-w-2xl relative z-10">
          Deep dives into Vedic astrology, planetary transits, and spiritual
          guidance to help you understand the cosmic rhythms of life.
        </p>
      </section>

      {/* Main Grid Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              href={`/article/${blog.id}`}
              key={blog.id}
              className="group flex flex-col bg-(--bg-surface) border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-zinc-700 hover:shadow-xl hover:shadow-(--accent)/5 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="w-full h-56 relative overflow-hidden bg-zinc-900 shrink-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-(--accent) text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-(--accent)/20">
                  {blog.category}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8 flex flex-col grow">
                <div className="flex items-center gap-2 text-xs text-zinc-400 mb-4">
                  <span>{blog.date}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                  <span>7 min read</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4 group-hover:text-(--accent) transition-colors duration-300 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-(--text-light) text-sm md:text-base leading-relaxed line-clamp-3 mb-6 grow">
                  {blog.excerpt}
                </p>

                <div className="flex items-center text-(--accent) text-sm font-semibold tracking-wide uppercase mt-auto">
                  <span>Read Article</span>
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
            Browse More Articles
          </button>
        </div>
      </section>
    </main>
  );
}

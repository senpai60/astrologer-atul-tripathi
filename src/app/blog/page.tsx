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
        "https://i.pinimg.com/1200x/ba/6d/09/ba6d0987fa9c3135774e642c12bc5b28.jpg",
      category: "Marriage",
      date: "24 Feb 2026",
    },
    {
      id: "saturn-return-meaning",
      title: "Surviving Your Saturn Return: A Complete Guide",
      excerpt:
        "Saturn return can bring major life changes. Learn how to navigate this challenging period and emerge stronger and wiser.",
      image:
        "https://i.pinimg.com/736x/55/41/42/55414249c35117f6097d12a6efe2a6f6.jpg",
      category: "Astrology Guide",
      date: "22 Feb 2026",
    },
    {
      id: "manifestation-moon-phases",
      title: "Using Moon Phases for Manifestation",
      excerpt:
        "Did you know different phases of the moon carry different energies? Learn how to sync your goals with the lunar cycle for optimal results.",
      image:
        "https://i.pinimg.com/736x/ec/55/e2/ec55e292f47a21ade4d7f4de585222a9.jpg",
      category: "Spiritual",
      date: "20 Feb 2026",
    },
    {
      id: "understanding-your-ascendant",
      title: "Why Your Ascendant Sign Matters More Than You Think",
      excerpt:
        "Your rising sign dictates your outward personality and how others see you. Dive deeper into the true meaning of your ascendant.",
      image:
        "https://i.pinimg.com/736x/25/dd/68/25dd6817d376edf76915a64968e17603.jpg",
      category: "Astrology 101",
      date: "18 Feb 2026",
    },
    {
      id: "career-astrology",
      title: "Finding the Right Career Path Through Astrology",
      excerpt:
        "Feeling lost in your professional life? See which career paths align best with your planetary placements according to Vedic principles.",
      image:
        "https://i.pinimg.com/736x/fa/6a/c1/fa6ac152e031ddbd0e720e2c7c710ce7.jpg",
      category: "Career",
      date: "15 Feb 2026",
    },
    {
      id: "remedies-for-peace",
      title: "Simple Astrological Remedies for Mental Peace",
      excerpt:
        "Stressed and anxious? Try these simple and effective astrological remedies to calm your mind and invite positive energy into your home.",
      image:
        "https://i.pinimg.com/736x/41/dd/c4/41ddc446ee70d6a36538b672e2cef1a0.jpg",
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

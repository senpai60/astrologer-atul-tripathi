import React from "react";

export default function ArticlePage() {
  // Dummy content based on the original structure but modernized UI
  const zodiacSigns = [
    {
      name: "मेष राशि (Aries)",
      info: "आज किसी पुराने दोस्त के प्रति आकर्षण बढ़ सकता है। जल्दबाजी से बचें। करियर में नए मौके मिल सकते हैं, अपनी ऊर्जा को सही दिशा में लगाएं।",
    },
    {
      name: "वृषभ राशि (Taurus)",
      info: "प्यार के मामलों में आज का दिन बेहद खास है। कोई सरप्राइज मिल सकता है। आर्थिक स्थिति में सुधार होगा, निवेश के लिए अच्छा समय है।",
    },
    {
      name: "मिथुन राशि (Gemini)",
      info: "अपनी भावनाओं को व्यक्त करने का सही समय है। पार्टनर के साथ अच्छा समय बिताएंगे। स्वास्थ्य पर ध्यान दें और तनाव से दूर रहें।",
    },
    {
      name: "कर्क राशि (Cancer)",
      info: "आज आपके रिश्ते में और गहराई आएगी। पुरानी गलतफहमियां दूर होंगी। परिवार के साथ सुखद समय बीतेगा, मानसिक शांति मिलेगी।",
    },
    {
      name: "सिंह राशि (Leo)",
      info: "किसी खास इंसान से मुलाकात हो सकती है। जो सिंगल हैं उनके लिए अच्छे रिश्ते आ सकते हैं। कार्यस्थल पर आपकी प्रशंसा होगी।",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-(--bg-body) pb-24 font-sans">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-12 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Article Content */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Breadcrumb & Category */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium mb-6">
              <span className="text-(--text-light) hover:text-(--accent) cursor-pointer transition-colors duration-200">
                Home
              </span>
              <span className="text-zinc-600">/</span>
              <span className="text-(--text-light) hover:text-(--accent) cursor-pointer transition-colors duration-200">
                Daily Horoscope
              </span>
              <span className="text-zinc-600">/</span>
              <span className="text-(--accent) px-2 py-0.5 bg-(--accent)/10 rounded-full font-semibold uppercase tracking-wide">
                Love Reading
              </span>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-(--text-primary) leading-[1.2] tracking-tight mb-6">
              27 फरवरी 2026 का लव राशिफल: <br className="hidden lg:block" />
              क्या चमकेगा आपकी मोहब्बत का सितारा?
            </h1>

            {/* Author & Meta */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-(--text-light) border-y border-zinc-800/60 py-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E36A6A] overflow-hidden border border-zinc-700/50 shadow-sm">
                  <img
                    src="https://i.pinimg.com/1200x/29/7a/ff/297aff703875be44a864724c9c10f81d.jpg"
                    alt="Author"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-(--text-primary)">
                    Atul Tripathi
                  </p>
                  <p className="text-xs">Expert Astrologer</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-zinc-800/80"></div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>Published on 26 Feb 2026</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-zinc-800/80"></div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>5 min read</span>
              </div>
            </div>

            {/* Featured Image - Scaled Down in context of grid */}
            <figure className="w-full h-[250px] sm:h-[300px] lg:h-[350px] rounded-2xl overflow-hidden shadow-md relative mb-8 group bg-zinc-900 border border-zinc-800/50">
              <img
                src="https://i.pinimg.com/1200x/74/a8/f1/74a8f1367036bcfb42d7ea7704456119.jpg"
                alt="Love Horoscope Cover"
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
            </figure>

            {/* Intro text */}
            <p className="text-lg md:text-xl font-normal text-(--text-primary) leading-relaxed mb-8">
              सिंगल से लेकर एक्स्ट्रा मैरिटल तक… आपके हर रिश्ते की सच्ची और
              बेबाक भविष्यवाणी! जानिए आज का दिन आपके और आपके साथी के लिए क्या नए
              मोड़ लेकर आ रहा है।
            </p>

            <div className="w-16 h-1 bg-(--accent) rounded-full opacity-60 mb-8"></div>

            {/* Zodiac List */}
            <div className="flex flex-col gap-6">
              {zodiacSigns.map((zodiac, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col sm:flex-row gap-5 p-5 md:p-6 rounded-2xl bg-(--bg-surface) border border-zinc-800/50 hover:shadow-lg hover:shadow-(--accent)/5 hover:border-zinc-700/60 transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-(--accent)/10 text-(--accent) font-bold text-lg group-hover:bg-(--accent) group-hover:text-black transition-colors duration-300">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-(--text-primary) mb-2 group-hover:text-(--accent) transition-colors duration-300">
                      {zodiac.name}
                    </h3>
                    <p className="text-(--text-light) leading-relaxed text-base">
                      {zodiac.info}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tags section bottom */}
            <div className="pt-8 mt-10 border-t border-zinc-800/60 flex flex-wrap items-center gap-3">
              <span className="font-semibold text-(--text-primary) text-sm uppercase tracking-wider">
                Tags:
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full bg-zinc-800/50 text-xs text-(--text-light) hover:bg-(--accent)/10 hover:text-(--accent) transition-colors cursor-pointer border border-zinc-700/50">
                  #LoveAstrology
                </span>
                <span className="px-3 py-1.5 rounded-full bg-zinc-800/50 text-xs text-(--text-light) hover:bg-(--accent)/10 hover:text-(--accent) transition-colors cursor-pointer border border-zinc-700/50">
                  #ZodiacSigns
                </span>
              </div>
            </div>

            {/* Comment Section - Minimal */}
            <div className="pt-10 mt-10 border-t border-zinc-800/60">
              <h3 className="text-2xl font-bold text-(--text-primary) mb-6">
                Leave a Reply
              </h3>
              <form className="flex flex-col gap-5">
                <textarea
                  rows={5}
                  placeholder="Your comment here..."
                  className="w-full bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-4 text-white placeholder-zinc-500 focus:outline-none focus:border-(--accent)/60 focus:ring-1 focus:ring-(--accent)/60 transition-all resize-y text-sm"
                ></textarea>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <input
                    type="text"
                    placeholder="Name (required)"
                    className="w-full bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-(--accent)/60 focus:ring-1 focus:ring-(--accent)/60 transition-all text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email (required)"
                    className="w-full bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-(--accent)/60 focus:ring-1 focus:ring-(--accent)/60 transition-all text-sm"
                  />
                  <input
                    type="url"
                    placeholder="Website"
                    className="w-full bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-(--accent)/60 focus:ring-1 focus:ring-(--accent)/60 transition-all text-sm"
                  />
                </div>

                <div className="flex items-start gap-3 mt-2">
                  <input
                    type="checkbox"
                    id="save-info"
                    className="mt-1 w-4 h-4 rounded border-zinc-700 bg-zinc-900/50 accent-(--accent) cursor-pointer"
                  />
                  <label
                    htmlFor="save-info"
                    className="text-sm text-zinc-400 hover:text-zinc-300 cursor-pointer select-none transition-colors"
                  >
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="py-3 px-8 bg-(--accent) text-black text-sm font-semibold rounded-xl hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Post Comment
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 relative">
            <div className="sticky top-8 flex flex-col gap-8">
              {/* Promotion / Contact Widget */}
              <div className="w-full bg-zinc-900 border border-zinc-800/80 rounded-2xl p-6 shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-(--accent)/10 blur-2xl rounded-full group-hover:bg-(--accent)/20 transition-colors duration-500"></div>
                <h3 className="text-xl font-bold mb-3 relative z-10 text-white tracking-tight">
                  Need a Personal Reading?
                </h3>
                <p className="text-zinc-400 text-sm mb-5 leading-relaxed relative z-10">
                  Connect with Astrologer Atul Tripathi for deep insights into
                  your life, love, and career.
                </p>
                <button className="relative z-10 w-full py-2.5 px-6 bg-(--accent) text-black text-sm font-semibold rounded-lg hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all duration-300">
                  Book Consultation
                </button>
              </div>

              {/* Popular Articles Widget */}
              <div className="w-full rounded-2xl bg-(--bg-surface) border border-zinc-800/50 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-(--text-primary) mb-5 relative inline-block tracking-tight">
                  Trending Articles
                  <span className="absolute -bottom-1.5 left-0 w-1/2 h-0.5 bg-(--accent) rounded-full"></span>
                </h3>

                <div className="flex flex-col gap-4">
                  {[
                    {
                      title:
                        "Vedic Astrology: Understanding the 12 Houses of the Zodiac",
                      image:
                        "https://i.pinimg.com/736x/bf/b3/53/bfb353e651f92e0cede834ca2155e4c4.jpg",
                    },
                    {
                      title:
                        "How to Choose the Right Gemstone for Your Zodiac Sign",
                      image:
                        "https://i.pinimg.com/1200x/2f/3a/c5/2f3ac5591a3f0b0074397e54cfb62f14.jpg",
                    },
                    {
                      title:
                        "Mercury Retrograde in Pisces: What You Need to Know",
                      image:
                        "https://i.pinimg.com/736x/ba/ac/8f/baac8f414382c797e4951953827e5aba.jpg",
                    },
                  ].map((article, i) => (
                    <article
                      key={i}
                      className="flex gap-4 group cursor-pointer border-b border-zinc-800/40 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-zinc-800">
                        <img
                          src={article.image}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-[10px] text-(--accent) font-semibold mb-1 uppercase tracking-wider">
                          Astrology
                        </span>
                        <h4 className="text-sm font-semibold text-(--text-primary) leading-[1.3] group-hover:text-(--accent) transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

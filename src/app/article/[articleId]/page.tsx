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
    <main className="w-full min-h-screen bg-(--bg-body) pb-24">
      {/* 1. Hero Section & Header */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-32 pt-16 pb-12">
        {/* Breadcrumb & Category */}
        <div className="flex items-center gap-3 text-sm font-medium mb-8">
          <span className="text-(--text-light) hover:text-(--accent) cursor-pointer transition-colors duration-200">
            Home
          </span>
          <span className="text-zinc-600">/</span>
          <span className="text-(--text-light) hover:text-(--accent) cursor-pointer transition-colors duration-200">
            Daily Horoscope
          </span>
          <span className="text-zinc-600">/</span>
          <span className="text-(--accent) px-3 py-1 bg-(--accent)/10 rounded-full text-xs font-bold uppercase tracking-widest">
            Love Reading
          </span>
        </div>

        {/* Article Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-(--text-primary) leading-tight md:leading-[1.1] mb-6">
          27 फरवरी 2026 का लव राशिफल: <br className="hidden lg:block" />
          क्या चमकेगा आपकी मोहब्बत का सितारा?
        </h1>

        {/* Author & Meta */}
        <div className="flex flex-wrap items-center gap-6 text-(--text-light) border-y border-zinc-800/60 py-5 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E36A6A] overflow-hidden border-2 border-zinc-800 shadow-sm">
              <img
                src="https://i.pinimg.com/1200x/29/7a/ff/297aff703875be44a864724c9c10f81d.jpg"
                alt="Author"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-(--text-primary)">
                Atul Tripathi
              </p>
              <p className="text-xs">Expert Astrologer</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-zinc-800/80"></div>
          <div className="flex items-center gap-2 text-sm">
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
          <div className="flex items-center gap-2 text-sm">
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

        {/* Huge Immersive Featured Image */}
        <div className="w-full aspect-video md:aspect-21/9 rounded-3xl overflow-hidden shadow-2xl relative mb-16 group">
          <img
            src="https://i.pinimg.com/1200x/74/a8/f1/74a8f1367036bcfb42d7ea7704456119.jpg"
            alt="Love Horoscope Cover"
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
        </div>

        {/* 2. Grid Layout: Main Content (Left) + Sidebar (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Article Content */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Intro text */}
            <p className="text-xl md:text-2xl font-light text-(--text-primary) leading-relaxed">
              सिंगल से लेकर एक्स्ट्रा मैरिटल तक… आपके हर रिश्ते की सच्ची और
              बेबाक भविष्यवाणी! जानिए आज का दिन आपके और आपके साथी के लिए क्या नए
              मोड़ लेकर आ रहा है।
            </p>

            <div className="w-20 h-1 bg-(--accent) rounded-full opacity-50"></div>

            {/* Zodiac List */}
            <div className="flex flex-col gap-8 mt-4">
              {zodiacSigns.map((zodiac, idx) => (
                <div
                  key={idx}
                  className="group flex gap-6 p-6 rounded-2xl bg-(--bg-surface) border border-zinc-800/50 hover:shadow-xl hover:shadow-(--accent)/5 hover:border-zinc-700/50 transition-all duration-300"
                >
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-(--accent)/10 text-(--accent) font-bold text-xl group-hover:bg-(--accent) group-hover:text-black transition-colors duration-300">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-(--text-primary) mb-3 group-hover:text-(--accent) transition-colors duration-300">
                      {zodiac.name}
                    </h3>
                    <p className="text-(--text-light) leading-relax text-base md:text-lg">
                      {zodiac.info}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tags section bottom */}
            <div className="pt-8 mt-8 border-t border-zinc-800/60 flex items-center gap-4">
              <span className="font-bold text-(--text-primary)">Tags:</span>
              <div className="flex gap-2">
                <span className="px-4 py-1.5 rounded-full bg-zinc-800/80 text-sm hover:bg-(--accent)/10 hover:text-(--accent) transition-colors cursor-pointer border border-zinc-700">
                  #LoveAstrology
                </span>
                <span className="px-4 py-1.5 rounded-full bg-zinc-800/80 text-sm hover:bg-(--accent)/10 hover:text-(--accent) transition-colors cursor-pointer border border-zinc-700">
                  #ZodiacSigns
                </span>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-10 flex flex-col gap-10">
              {/* Promotion / Contact Widget */}
              <div className="w-full bg-linear-to-br from-zinc-900 to-black text-white rounded-3xl p-8 shadow-xl border border-(--accent)/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-(--accent)/10 blur-[50px] rounded-full group-hover:bg-(--accent)/30 transition-colors duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10 text-white">
                  Need a Personal Reading?
                </h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed relative z-10">
                  Connect with Astrologer Atul Tripathi for deep insights into
                  your life, love, and career.
                </p>
                <button className="relative z-10 w-full py-3 px-6 bg-(--accent) text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all duration-300">
                  Book Consultation
                </button>
              </div>

              {/* Popular Articles Widget */}
              <div className="w-full rounded-3xl bg-(--bg-surface) border border-zinc-800/50 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-(--text-primary) mb-6 relative inline-block">
                  Trending Articles
                  <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-(--accent) rounded-full"></span>
                </h3>

                <div className="flex flex-col gap-5">
                  {[
                    "Vedic Astrology: Understanding the 12 Houses of the Zodiac",
                    "How to Choose the Right Gemstone for Your Zodiac Sign",
                    "Mercury Retrograde in Pisces: What You Need to Know",
                  ].map((title, i) => (
                    <div
                      key={i}
                      className="flex gap-4 group cursor-pointer border-b border-zinc-800/50 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden">
                        <img
                          src={`https://i.pinimg.com/1200x/${["9d/23/e6/9d23e61ff36056f7e4afeb5347209ac7", "09/cc/62/09cc62ac4e21a8d0b28416caab94a974", "99/bd/27/99bd27ee85cc223e71dfbc216b345da5"][i]}.jpg`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-xs text-(--accent) font-semibold mb-1 uppercase">
                          Astrology
                        </span>
                        <h4 className="text-sm font-bold text-(--text-primary) leading-snug group-hover:text-(--accent) transition-colors line-clamp-2">
                          {title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

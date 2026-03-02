import React from "react";
import Image from "next/image";
import Link from "next/link";

const BioPage = () => {
  const expertiseKeys = [
    {
      title: "Vedic Astrology",
      subtitle: "Ancient wisdom",
      desc: "Deep insights using traditional Indian astrological systems and birth charts.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
    },
    {
      title: "Kundli Matching",
      subtitle: "Marriage compatibility",
      desc: "Detailed analysis of Gunas and doshas for a prosperous and harmonious married life.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Numerology",
      subtitle: "Power of numbers",
      desc: "Unlock the hidden meanings behind your name and birth date to find your true path.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
    },
    {
      title: "Vastu Shastra",
      subtitle: "Spatial harmony",
      desc: "Align your home and workspace with cosmic energies to attract wealth and health.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      title: "Tarot Reading",
      subtitle: "Divine guidance",
      desc: "Intuitive card readings to answer your deepest questions and clear your doubts.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#050505] text-(--text-primary) overflow-hidden font-sans pb-32">
      {/* Background radial gradient representing cosmos */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,#1a1608_0%,#050505_70%)] pointer-events-none z-0"></div>

      {/* HERO SECTION */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-32 pt-28 pb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative">
          {/* Left: Circular Image Frame */}
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] shrink-0 group">
            <div className="absolute inset-0 rounded-full border-[3px] border-[#EAB308] p-2 bg-[#1c180b]">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src="/images/bio.webp"
                  alt="Astrologer Atul Tripathi"
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
                />
                {/* Dark vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]"></div>
              </div>
            </div>
            {/* Decorative orbit glow */}
            <div className="absolute -inset-6 rounded-full border border-[#EAB308]/20 animate-[spin_20s_linear_infinite] pointer-events-none"></div>
          </div>

          {/* Middle: Content */}
          <div className="flex flex-col items-center lg:items-center text-center max-w-xl shrink-0 z-20">
            {/* Small Top Badge */}
            <div className="px-4 py-1.5 rounded-full border border-[#EAB308]/30 bg-[#EAB308]/10 text-[#EAB308] text-[10px] font-bold tracking-widest uppercase mb-6 backdrop-blur-md inline-block">
              Know about me
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-2 tracking-tight drop-shadow-xl">
              ABOUT ME
            </h1>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#EAB308] mb-8 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              समाधान भी होगा
            </h2>

            <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed mb-10 px-4 md:px-0">
              Discover the profound wisdom of the stars. With over two decades
              of experience in Vedic Astrology, Atul Tripathi has guided
              thousands towards clarity, peace, and prosperity. Let the cosmic
              energies align your path to success.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <button className="px-8 py-3.5 bg-[#EAB308] text-black font-bold text-sm tracking-wide rounded-full hover:bg-[#FEF08A] hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-300 w-full sm:w-auto">
                Book Consultation
              </button>
              <button className="px-8 py-3.5 bg-transparent border border-[#EAB308]/50 text-white font-semibold text-sm tracking-wide rounded-full hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto">
                Read My passage
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
          </div>

          {/* Right: Graphic Mandala Element */}
          <div className="hidden lg:flex w-[300px] h-[300px] relative items-center justify-center">
            {/* Colorful organic shapes behind */}
            <div className="absolute w-[200px] h-[200px] bg-[#fbbf24] rounded-full mix-blend-screen filter blur-2xl opacity-30 animate-pulse"></div>
            <div className="absolute w-[180px] h-[180px] bg-[#34d399] rounded-full mix-blend-screen filter blur-2xl opacity-20 -translate-x-10 translate-y-10"></div>
            <div className="absolute w-[180px] h-[180px] bg-[#f43f5e] rounded-full mix-blend-screen filter blur-2xl opacity-20 translate-x-10 -translate-y-10"></div>

            {/* Actual graphic */}
            <div className="relative z-10 w-full h-full rounded-full border border-[#EAB308]/30 flex items-center justify-center bg-black/40 backdrop-blur-xl group cursor-pointer hover:border-[#EAB308]/80 transition-colors duration-500 shadow-[0_0_50px_rgba(234,179,8,0.1)]">
              <img
                src="/images/yantra.png"
                alt="Mandala"
                className="w-3/4 h-3/4 object-contain opacity-80 group-hover:rotate-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-[2s] ease-in-out"
                style={{
                  filter:
                    "invert(72%) sepia(61%) saturate(2719%) hue-rotate(344deg) brightness(97%) contrast(92%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl text-[#EAB308] font-serif font-bold drop-shadow-2xl opacity-90">
                  A
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-32 pt-16">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-serif text-white uppercase tracking-widest drop-shadow-md">
            MY EXPERTISE
          </h3>
          <div className="mt-4 w-24 h-px bg-linear-to-r from-transparent via-[#EAB308]/50 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {expertiseKeys.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-[#0F0F0F] border border-[#2A2A2A] hover:border-[#EAB308]/60 transition-all duration-500 cursor-pointer overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)]"
            >
              {/* Subtle hover glow inside card */}
              <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#EAB308]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="mb-6 relative z-10 text-[#EAB308] opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300">
                {item.icon}
              </div>

              <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#EAB308] transition-colors">
                {item.title}
              </h4>
              <p className="text-[10px] text-[#EAB308] uppercase tracking-widest mb-4 font-semibold">
                {item.subtitle}
              </p>

              <p className="text-xs text-zinc-500 font-light leading-relaxed group-hover:text-zinc-300 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BioPage;

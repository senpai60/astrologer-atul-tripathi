"use client";
import { useRouter } from "next/navigation";
const AboutSection = () => {
  const router = useRouter();
  return (
    <section className="relative w-full h-[120vh] min-h-[900px] bg-[#0A0A0A] overflow-hidden flex items-center justify-center py-20 lg:py-32">
      {/* Background radial gradient for subtle depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.03)_0%,transparent_70%)] pointer-events-none"></div>

      {/* Center Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-6 pointer-events-none">
        <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-serif tracking-tight text-[#E8DCC4] leading-[0.9] drop-shadow-2xl">
          <span className="block mb-2 font-normal">KNOW YOUR</span>
          <span className="block italic text-[#fde047] font-light">
            ASTROLOGER
          </span>
        </h2>

        <p className="mt-12 text-[#A09D94] max-w-xl text-base md:text-lg font-light tracking-wide leading-relaxed border-l border-[#EAB308]/30 pl-6 text-left ml-auto mr-auto md:mr-0 md:ml-24 backdrop-blur-sm bg-black/20 rounded-r-2xl py-2">
          Astrologer Atul Tripathi has dedicated over two decades to the
          profound science of Vedic Astrology. With thousands of accurate
          predictions and transformed lives, he merges ancient wisdom with
          modern understanding to help you navigate life's toughest challenges.
        </p>

        <div className="mt-10 pointer-events-auto">
          <button
            onClick={() => router.push("/bio")}
            className="px-8 py-3 rounded-full border border-[#EAB308]/50 text-[#EAB308] text-sm uppercase tracking-widest hover:bg-[#EAB308] hover:text-black transition-all duration-500 backdrop-blur-md"
          >
            Read Full Biography
          </button>
        </div>
      </div>

      {/* Floating Images Container (Absolute positioning for the 'gallery' feel) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Top Image */}
        <div className="absolute top-[5%] left-[45%] lg:left-[50%] -translate-x-1/2 w-[220px] md:w-[280px] aspect-3/4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-4 border-[#3a3528] rounded-sm transform -rotate-3 hover:rotate-0 transition-transform duration-700 pointer-events-auto cursor-pointer group">
          <div className="absolute inset-0 bg-[#EAB308]/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
          <img
            src="https://i.pinimg.com/736x/12/bf/09/12bf091a93c2096643854053bb700a9b.jpg"
            alt="Vedic chart"
            className="w-full h-full object-cover grayscale-30 contrast-125"
          />
        </div>

        {/* Right Large Portrait */}
        <div className="absolute top-[30%] right-[5%] md:right-[10%] lg:right-[15%] w-[260px] md:w-[340px] aspect-4/5 shadow-[0_30px_60px_rgba(0,0,0,0.9)] border-8 border-[#2A261E] rounded-md transform rotate-2 hover:rotate-0 transition-transform duration-700 pointer-events-auto cursor-pointer group z-30">
          <div className="absolute inset-0 border border-[#EAB308]/20 z-20"></div>
          <img
            src="https://astrologeratultripathi.com/wp-content/uploads/2026/02/WhatsApp_Image_2025-02-25_at_1.41.07_PM-removebg-preview.webp"
            alt="Astrologer Atul Tripathi Portrait"
            className="w-full h-full object-cover object-top scale-105"
          />
        </div>

        {/* Left Small Image */}
        <div className="absolute top-[20%] left-[5%] md:left-[10%] lg:left-[12%] w-[160px] md:w-[200px] aspect-square shadow-[0_15px_40px_rgba(0,0,0,0.7)] border-4 border-[#413b2c] rounded-sm transform -rotate-6 hover:-rotate-2 transition-transform duration-700 pointer-events-auto cursor-pointer">
          <img
            src="https://i.pinimg.com/1200x/78/a4/3a/78a43a04e53830e67f44d4e541f39bae.jpg"
            alt="Astrology Tools"
            className="w-full h-full object-cover sepia-[0.3]"
          />
        </div>

        {/* Bottom Left Medium Image */}
        <div className="absolute bottom-[25%] left-[10%] md:left-[20%] lg:left-[25%] w-[180px] md:w-[240px] aspect-video shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-[6px] border-[#1f1c16] rounded-sm transform rotate-3 hover:rotate-1 transition-transform duration-700 pointer-events-auto cursor-pointer z-20">
          <img
            src="https://i.pinimg.com/1200x/7a/a7/fb/7aa7fb8ce334932727fbc3c795a003c6.jpg"
            alt="Ancient manuscripts"
            className="w-full h-full object-cover brightness-75 hover:brightness-100 transition-all duration-500"
          />
        </div>

        {/* Bottom Center/Right Wide Image */}
        <div className="absolute bottom-[5%] right-[20%] md:right-[35%] lg:right-[40%] w-[280px] md:w-[380px] aspect-21/9 shadow-[0_25px_60px_rgba(0,0,0,0.9)] border-[5px] border-[#312c22] rounded-sm transform -rotate-2 hover:rotate-0 transition-transform duration-700 pointer-events-auto cursor-pointer">
          <img
            src="https://i.pinimg.com/1200x/8d/02/0f/8d020ff3caa6f3b386017b4c77f5f51b.jpg"
            alt="Temple elements"
            className="w-full h-full object-cover brightness-90 saturate-50 hover:saturate-100 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

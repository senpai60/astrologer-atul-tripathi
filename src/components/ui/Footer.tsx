import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "SERVICES",
      links: [
        "Vedic Astrology",
        "Kundali Milan",
        "Tarot Reading",
        "Numerology",
      ],
    },
    {
      title: "READINGS",
      links: [
        "Daily Love Reading",
        "Deep Horoscope",
        "Couple Love Reading",
        "Family Package",
      ],
    },
    {
      title: "RESOURCES",
      links: ["Blog", "Dharmik News", "Featured", "My Take"],
    },
    {
      title: "QUICK LINKS",
      links: ["Shop", "Cart", "Checkout", "My Account"],
    },
  ];

  const companyColumn = ["About", "Contact", "Disclaimer", "Refund Policy"];

  return (
    <footer className="relative z-10 w-full bg-[#111111] text-white pt-20 pb-8 mt-16 border-t border-zinc-900 font-sans">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between w-full">
          {/* LEFT SIDE: 4 Columns + Massive Logo at Bottom */}
          <div className="w-full lg:w-[75%] flex flex-col justify-between">
            {/* 4 Link Columns Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
              {footerLinks.map((col, idx) => (
                <div key={idx} className="flex flex-col">
                  <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">
                    {col.title}
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {col.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href="#"
                          className="text-[15px] md:text-base text-zinc-300 hover:text-white transition-colors duration-200 font-medium"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Giant Logo/Text Area (Hidden on mobile for better flow, or just scaled down) */}
            <div className="mt-20 md:mt-32 hidden md:flex items-center gap-4">
              {/* Optional: Simple geometric logo to mimic the "Retool" zig-zag logo or just glowing circle */}
              <div className="w-20 h-20 md:w-32 md:h-32 shrink-0 border-[8px] border-[#EAB308] rounded-tl-3xl rounded-br-3xl hidden md:block opacity-90"></div>
              <h1 className="text-7xl md:text-[6rem] lg:text-[9rem] font-bold tracking-tighter text-white leading-none">
                Atul Tripathi
              </h1>
            </div>
          </div>

          {/* RIGHT SIDE: 5th Column (Company), Buttons, Legal, Copyright */}
          <div className="w-full lg:w-[22%] flex flex-col mt-16 lg:mt-0 xl:pl-10">
            <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">
              COMPANY
            </h4>
            <ul className="flex flex-col gap-4 mb-10">
              {companyColumn.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="text-[15px] md:text-base text-zinc-300 hover:text-white transition-colors duration-200 font-medium"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 mb-12">
              <button className="w-full py-3 px-6 bg-[#E8DCC4] text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all duration-300">
                Book Consultation
              </button>
              <button className="w-full py-3 px-6 bg-transparent border border-zinc-600 text-zinc-300 text-xs font-bold uppercase tracking-widest rounded-full hover:border-[#E8DCC4] hover:text-[#E8DCC4] transition-all duration-300">
                Read Horoscope
              </button>
            </div>

            {/* Downward flow of tiny legal links */}
            <div className="flex flex-col gap-3 mt-auto">
              <Link
                href="#"
                className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest hover:text-zinc-300 transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="#"
                className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest hover:text-zinc-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest hover:text-zinc-300 transition-colors mb-8"
              >
                Security
              </Link>

              <div className="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                © ATUL TRIPATHI 2026
              </div>
            </div>
          </div>

          {/* Mobile Giant Logo (Show stacked) */}
          <div className="md:hidden mt-16 -mb-6">
            <h1 className="text-6xl font-bold tracking-tighter text-white leading-none">
              Atul Tripathi
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Daily Horoscope", href: "/#horoscope" },
    { name: "Blog", href: "/#blog" },
    { name: "News", href: "/#news" },
    { name: "Gemstones", href: "/#gemstones" },
  ];

  return (
    <nav className="w-full h-20 bg-(--bg-body)/90 sticky top-0 z-50 backdrop-blur-md border-b border-zinc-800/60 shadow-sm transition-all duration-300">
      <div className="w-full h-full flex items-center justify-between px-6 md:px-16 lg:px-32">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4 group outline-none">
          <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full overflow-hidden bg-(--bg-surface) shadow-sm border border-zinc-800/50 group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
            <img
              src="https://astrologeratultripathi.com/wp-content/uploads/2026/02/WhatsApp_Image_2025-02-25_at_1.41.07_PM-removebg-preview.webp"
              alt="Astrologer Atul Tripathi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-lg md:text-xl text-(--text-primary) tracking-tight group-hover:text-(--accent) transition-colors duration-300">
              Atul Tripathi
            </span>
            <span className="text-[10px] md:text-xs text-(--text-light) uppercase tracking-widest font-medium">
              Vedic Astrologer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-(--text-light) hover:text-(--accent) transition-colors duration-300 relative group py-2"
                >
                  {link.name}
                  {/* Interactive Underline Indicator */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-(--accent) rounded-full transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button className="text-(--text-primary) hover:text-(--accent) transition-colors p-2 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

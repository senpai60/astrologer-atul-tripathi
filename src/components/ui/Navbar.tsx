"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/bio" },
    { name: "Services", href: "/products" },
    { name: "Daily Horoscope", href: "/horoscope" },
    { name: "Blog", href: "/blog" },
    { name: "News", href: "/news" },
    { name: "Gemstones", href: "/gemstones" },
  ];

  return (
    <>
      <nav className="w-full h-20 bg-(--bg-body)/90 sticky top-0 z-50 backdrop-blur-md border-b border-zinc-800/60 shadow-sm transition-all duration-300">
        <div className="w-full h-full flex items-center justify-between px-6 md:px-16 lg:px-32">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-4 group outline-none z-50"
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full overflow-hidden bg-(--bg-surface) shadow-sm border border-zinc-800/50 group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
              <img
                src="https://astrologeratultripathi.com/wp-content/uploads/2026/02/WhatsApp_Image_2025-02-25_at_1.41.07_PM-removebg-preview.webp"
                alt="Astrologer Atul Tripathi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl text-(--text-primary) tracking-tight group-hover:text-(--accent) transition-colors duration-300">
                Atul Tripathi
              </span>
              <span className="text-[10px] md:text-xs text-(--text-light) uppercase tracking-widest font-medium">
                Vedic Astrologer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`text-sm font-semibold transition-colors duration-300 relative group py-2 ${
                        isActive
                          ? "text-(--accent)"
                          : "text-(--text-light) hover:text-(--accent)"
                      }`}
                    >
                      {link.name}
                      {/* Interactive Underline Indicator */}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-(--accent) rounded-full transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile Menu Toggle (Hamburger / Close) */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-(--text-primary) hover:text-(--accent) transition-colors p-2 focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <div className="w-6 flex flex-col items-end justify-center gap-1.5 cursor-pointer">
                <span
                  className={`block h-[2px] bg-current transition-all duration-300 ease-out ${isMobileMenuOpen ? "w-6 rotate-45 translate-y-[8px]" : "w-6"}`}
                ></span>
                <span
                  className={`block h-[2px] bg-current transition-all duration-300 ease-out ${isMobileMenuOpen ? "opacity-0" : "w-5"}`}
                ></span>
                <span
                  className={`block h-[2px] bg-current transition-all duration-300 ease-out ${isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-[8px]" : "w-4"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-(--bg-body)/95 backdrop-blur-xl transition-all duration-500 lg:hidden flex flex-col justify-center items-center ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-(--accent)/10 blur-[120px] rounded-full pointer-events-none"></div>

        <ul className="flex flex-col items-center gap-8 relative z-10 w-full px-6">
          {navLinks.map((link, index) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <li
                key={link.name}
                className={`w-full text-center transition-all duration-500 delay-[${index * 50}ms] ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Link
                  href={link.href}
                  className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
                    isActive
                      ? "text-(--accent)"
                      : "text-(--text-primary) hover:text-(--accent)"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {isActive && (
                  <div className="w-12 h-1 bg-(--accent) rounded-full mx-auto mt-3"></div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Contact Button */}
        <div
          className={`mt-12 transition-all duration-500 delay-[${navLinks.length * 50}ms] ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: `${navLinks.length * 50}ms` }}
        >
          <button className="py-3 px-8 border border-(--accent) text-(--accent) font-semibold rounded-full hover:bg-(--accent) hover:text-black transition-all duration-300">
            Book Consultation
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

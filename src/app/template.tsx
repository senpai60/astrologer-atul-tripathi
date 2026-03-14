"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Check if initial preloader has run
    const hasLoaded = sessionStorage.getItem("hasLoadedPreloader");

    if (hasLoaded === "true") {
      // Sweeping out animation for route transition
      const tl = gsap.timeline();

      // Reset overlay to cover screen, starting from bottom with a slight curve
      gsap.set(overlayRef.current, { 
        yPercent: 0, 
        display: "flex", 
        borderBottomLeftRadius: "50%", 
        borderBottomRightRadius: "50%" 
      });

      // Smooth, long sweep up
      tl.to(overlayRef.current, {
        yPercent: -100,
        borderBottomLeftRadius: "0%",
        borderBottomRightRadius: "0%",
        duration: 1.8,
        ease: "expo.inOut",
      });

      // Content fades in gently, moves up, and scales slightly
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 1.8, ease: "power4.out", delay: 0.8 }
      );
    } else {
      // Initial load: Preloader handles everything. Hide this overlay.
      gsap.set(overlayRef.current, { display: "none" });
      gsap.fromTo(
        contentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.inOut", delay: 1 } 
      );
    }
  }, [pathname]);

  return (
    <>
      {/* Route Transition Curtain */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-[#0a0a0a] pointer-events-none flex flex-col items-center justify-center transform origin-top border-b border-[#EAB308]/20 hidden"
      >
         <div className="w-10 h-10 border-t-2 border-[#EAB308] rounded-full animate-spin"></div>
      </div>

      {/* Main Content Wrapper */}
      <div ref={contentRef} className="w-full h-full">
        {children}
      </div>
    </>
  );
}

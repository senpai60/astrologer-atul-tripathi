"use client";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



const InitialPreloader = () => {
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on initial load
    const hasLoaded = sessionStorage.getItem("hasLoadedPreloader");
    if (hasLoaded) {
      setIsReady(true);
      return;
    }
    
    // Disable scrolling
    document.body.style.overflow = "hidden";
    
    // Basic counter animation setup
    let counterValue = { val: 0 };
    
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("hasLoadedPreloader", "true");
        document.body.style.overflow = "unset";
        setIsReady(true);
      }
    });

    // 1. Text fades in
    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    // 2. Counter goes 0 to 100
    .to(counterValue, {
      val: 100,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = Math.round(counterValue.val) + "%";
        }
      }
    }, "-=0.5")
    // 3. Stagger elements moving out
    .to([textRef.current, counterRef.current], {
      y: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.in"
    })
    // 4. Container slides completely up
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut",
      borderBottomLeftRadius: "50%",
      borderBottomRightRadius: "50%",
    }, "-=0.2");

  }, []);

  if (isReady) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#050505] origin-top"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="flex flex-col items-center justify-center gap-6 z-10">
        <div 
          ref={textRef}
          className="opacity-0 translate-y-10 flex flex-col items-center gap-2"
        >
          <div className="w-16 h-16 border border-[#EAB308]/30 rounded-full flex items-center justify-center mb-4">
             <div className="w-10 h-10 border-t border-[#EAB308] rounded-full animate-spin"></div>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-white tracking-widest font-bold">
            ATUL<span className="text-[#EAB308]">TRIPATHI</span>
          </h1>
          <p className="text-xs uppercase tracking-[0.3em] text-[#EAB308]/70">
            Aligning Destinies
          </p>
        </div>

        <div 
          ref={counterRef}
          className="text-6xl md:text-8xl font-light text-zinc-800 absolute bottom-10 right-10 md:bottom-20 md:right-20 pointer-events-none"
        >
          0%
        </div>
      </div>
    </div>
  );
};

export default InitialPreloader;

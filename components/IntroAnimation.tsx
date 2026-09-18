"use client";

import { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [showIntro, setShowIntro] = useState(true);
  const [phase, setPhase] = useState(0); 
  // 0: Initial/Hidden, 1: Letters sliding in, 2: Name fading in, 3: Fading out

  useEffect(() => {
    // Check session storage to see if we've already played the intro
    const hasPlayed = sessionStorage.getItem("introPlayed");
    // Temporarily commenting out the abort so you can test it repeatedly
    // if (hasPlayed) {
    //  setShowIntro(false);
    //  return;
    // }
    
    // Start animation sequence
    setShowIntro(true);
    
    // Phase 1: Letters slide in (triggers via CSS immediately because phase=0 -> 1)
    setTimeout(() => {
      setPhase(1);
    }, 100);

    // Phase 2: "FREDA EFOD" fades in
    setTimeout(() => {
      setPhase(2);
    }, 800);

    // Phase 3: Everything fades out
    setTimeout(() => {
      setPhase(3);
    }, 1800);

    // Phase 4: Remove from DOM
    setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem("introPlayed", "true");
    }, 2300);
  }, []);

  if (!showIntro) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-bg transition-opacity duration-500 ${
        phase === 3 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Monogram FE */}
        <div className="relative flex items-center justify-center w-24 h-24 mb-4 font-serif text-[4.5rem] leading-none text-[#eaeaea]">
          <span
            className={`absolute top-0 transition-all duration-700 ease-out ${
              phase >= 1
                ? "translate-x-[-12px] opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            F
          </span>
          <span
            className={`absolute top-[1.2rem] transition-all duration-700 ease-out ${
              phase >= 1
                ? "translate-x-[12px] opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            E
          </span>
        </div>

        {/* Name */}
        <div
          className={`text-lg md:text-xl font-medium tracking-[0.3em] uppercase text-[#eaeaea] transition-all duration-700 ease-out ${
            phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Freda Efod
        </div>
      </div>
    </div>
  );
}

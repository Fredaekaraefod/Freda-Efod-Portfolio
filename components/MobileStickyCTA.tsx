"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const contact = document.getElementById("contact");
      if (!hero || !contact) return;

      const heroRect = hero.getBoundingClientRect();
      const contactRect = contact.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Show after scrolling past hero, hide once contact section is reached
      const pastHero = heroRect.bottom < windowHeight * 0.4;
      const reachedContact = contactRect.top < windowHeight * 0.8;

      setVisible(pastHero && !reachedContact);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-5 left-5 right-5 z-50 md:hidden flex justify-center animate-fade-in">
      <a
        href="#contact"
        className="w-full max-w-sm bg-btn text-btn-text py-3.5 px-6 rounded-full font-semibold text-sm shadow-xl flex items-center justify-center gap-2 transition-transform active:scale-95"
      >
        <span>Get in touch</span>
        <ArrowRight className="w-4 h-4" />
      </a>
    </aside>
  );
}

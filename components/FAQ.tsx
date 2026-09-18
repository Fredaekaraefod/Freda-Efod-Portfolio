"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What kind of editing do you do?",
    answer:
      "Primarily short-form reels, TikToks, and Instagram videos, along with brand promos, product spotlights, and narrative mini-documentaries. I handle rough assembly, sound design, color balancing, and motion graphics.",
  },
  {
    question: "What is your typical turnaround time?",
    answer:
      "For short-form edits (under 60 seconds), standard turnaround is 48 to 72 hours for the first cut. Larger projects and brand campaigns depend on footage volume, but timelines are agreed upon before kicking off.",
  },
  {
    question: "Are you open for freelance/collab work right now?",
    answer:
      "Yes, I am currently accepting select freelance projects, retainer editing for creators, and creative collaborations. Check the status badge at the top or drop me a line below.",
  },
  {
    question: "What software and tools do you use?",
    answer:
      "My primary NLE is Adobe Premiere Pro paired with DaVinci Resolve for color grading. I use After Effects for kinetic typography and motion accents, plus Adobe Audition for clean audio sweetening.",
  },
  {
    question: "How do we start working together?",
    answer:
      "Send me a message via the form below or email me directly. Include a brief overview of your footage, target delivery date, and any reference styles or links. I'll get back to you with availability and a proposal.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 border-t border-border">
      <span className="text-xs font-semibold uppercase tracking-widest text-subtle block mb-8">
        FAQ
      </span>

      <div className="flex flex-col border-b border-border">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="border-t border-border">
              <button
                onClick={() => toggle(idx)}
                className="w-full py-5 flex justify-between items-center text-left text-base md:text-lg font-semibold text-main hover:opacity-80 transition-opacity"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <Plus
                  className={`w-4 h-4 text-muted flex-shrink-0 ml-4 transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="pb-6 text-sm md:text-base text-muted leading-relaxed max-w-xl">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

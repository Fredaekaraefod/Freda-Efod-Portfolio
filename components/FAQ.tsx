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
      "I specialize in Short-Form edits (Reels, TikToks), Talking Head & Vlog edits, Long-Form YouTube edits, and authentic UGC Video Creation for brands and creators.",
  },
  {
    question: "What is your typical turnaround time?",
    answer:
      "Turnaround depends on the scope of the project and footage volume. I focus on sharp pacing and efficient delivery, and exact timelines are always agreed upon before kicking off.",
  },
  {
    question: "Are you open for freelance/collab work right now?",
    answer:
      "Yes, I am currently accepting select freelance projects, retainer editing for creators, and creative collaborations. Drop me an email to discuss your project.",
  },
  {
    question: "What software and tools do you use?",
    answer:
      "My core editing tools are Premiere Pro and CapCut, paired with AI tools like HeyGen, ElevenLabs, ChatGPT, Claude, and Gemini to elevate workflows, all organized through Google Workspace.",
  },
  {
    question: "How do we start working together?",
    answer:
      "Send me an email directly. Include a brief overview of your footage, target delivery date, and any reference styles or links. I reply within a day with next steps.",
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

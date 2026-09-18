import React from "react";

export default function Services() {
  return (
    <section id="services" className="py-16 border-t border-border">
      <div className="flex flex-col gap-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-main uppercase">
          What I bring
        </h2>
        
        {/* Simple Text Stats */}
        <div className="flex flex-col gap-2 text-muted text-base md:text-lg">
          <p>
            <strong className="text-main font-semibold">5K+</strong> followers across platforms
          </p>
          <p>
            <strong className="text-main font-semibold">7M+</strong> views across YouTube, TikTok, Instagram, and LinkedIn
          </p>
        </div>

        {/* Text-First List of Services */}
        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-main font-semibold text-lg tracking-tight">Short-Form Edits</h3>
            <p className="text-muted leading-relaxed">
              Reels, TikToks, and other short-form content edited for pacing and platform fit.
            </p>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <h3 className="text-main font-semibold text-lg tracking-tight">Talking Head / Vlog Edits</h3>
            <p className="text-muted leading-relaxed">
              Edits for talking-head content and vlogs, cleaned up and paced for watch-through.
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <h3 className="text-main font-semibold text-lg tracking-tight">Long-Form Edits</h3>
            <p className="text-muted leading-relaxed">
              Full-length video edits, for YouTube and other long-form platforms.
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <h3 className="text-main font-semibold text-lg tracking-tight">UGC Video Creation</h3>
            <p className="text-muted leading-relaxed">
              I create UGC-style videos for brands — content that looks and feels native to the platform (not like a traditional ad), for use in brand pages, paid ads, or creator campaigns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

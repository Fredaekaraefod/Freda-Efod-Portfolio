import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { allProjects, STATS } from "@/lib/work-data";

export default function Hero() {
  const totalProjects = Math.max(STATS.baseProjects, allProjects.length);
  const totalViews = STATS.baseViews + allProjects.reduce((sum, p) => sum + (p.views || 0), 0);
  
  const formatViews = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M+';
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K+';
    return num.toString() + '+';
  };

  return (
    <section id="hero" className="pb-16 pt-2">
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 md:gap-16">
        <div className="flex flex-col items-start max-w-2xl">
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tighter text-main mb-2 leading-none uppercase">
            Freda
          </h1>

          <p className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-muted mb-8 uppercase">
            Efod
          </p>

          <p className="text-lg md:text-xl text-muted mb-10 leading-relaxed max-w-xl">
            Short-form reels, commercial campaigns, and creator content.
          </p>

          {/* CTA & Stats Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-8 md:gap-12 w-full">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-btn text-btn-text hover:bg-btn-hover text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all group shadow-md hover:shadow-lg whitespace-nowrap"
            >
              <span>watch my work</span>
              <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
            </a>

            {/* Stats distinct from reference design (vertical stacked subtle styling) */}
            <div className="flex items-center gap-6 border-l-2 border-border pl-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-main leading-tight">{STATS.yearsEditing}+</span>
                <span className="text-[0.65rem] uppercase tracking-widest text-subtle font-semibold">Years</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-main leading-tight">{totalProjects}+</span>
                <span className="text-[0.65rem] uppercase tracking-widest text-subtle font-semibold">Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-main leading-tight">{formatViews(totalViews)}</span>
                <span className="text-[0.65rem] uppercase tracking-widest text-subtle font-semibold">Views</span>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Rounded Portrait */}
        <div className="w-64 h-80 md:w-[24rem] md:h-[30rem] lg:w-[28rem] lg:h-[36rem] flex-shrink-0 mt-16 md:mt-0 relative rounded-3xl overflow-hidden shadow-2xl border border-border">
          <img
            src="/assets/hero-photo.jpg"
            alt="Portrait photo of Freda, video editor"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

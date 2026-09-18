import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border flex flex-col gap-4">
      <div className="mb-10 flex items-center gap-4">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-main uppercase">
          About
        </h2>
        <div className="h-px bg-border flex-1 opacity-50" />
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start md:items-center">
        {/* Left Photo Column */}
        <div className="w-full md:w-[24rem] lg:w-[28rem] flex-shrink-0 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-border group bg-bg-card">
          <Image
            src="/assets/about-photo.jpg"
            alt="Freda holding a camera"
            fill
            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 28rem"
          />
        </div>

        {/* Right Text Column */}
        <div className="flex-1 flex flex-col gap-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
          <p>
            I'm <strong className="text-main font-semibold">Freda</strong>. I'm in love with the art of creating, genuinely obsessed with it. That's what I enjoy doing, and it shows in the work.
          </p>
        </div>
      </div>
    </section>
  );
}

import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import Services from "@/components/Services";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto">
        <About />
        <WorkGrid />
        <Services />
        <FAQ />
        <Contact />
      </div>
    </>
  );
}

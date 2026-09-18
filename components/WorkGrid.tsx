import Link from "next/link";
import { ArrowRight } from "lucide-react";
import VideoEmbed from "./VideoEmbed";
import { allProjects, CATEGORY_ORDER } from "@/lib/work-data";

export default function WorkGrid() {
  // Filter only featured projects for the homepage highlight reel
  const featuredProjects = allProjects.filter((p) => p.featured);

  // Group the featured projects by category
  const grouped = featuredProjects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof allProjects>);

  // Sort categories according to the CATEGORY_ORDER array (ensuring Skits is last)
  const sortedCategories = Object.keys(grouped).sort((a, b) => {
    const indexA = CATEGORY_ORDER.indexOf(a);
    const indexB = CATEGORY_ORDER.indexOf(b);
    // If a category isn't in the order array, put it at the end (but before Skits if Skits is explicitly last)
    const posA = indexA === -1 ? 999 : indexA;
    const posB = indexB === -1 ? 999 : indexB;
    return posA - posB;
  });

  return (
    <section id="work" className="py-24 border-t border-border flex flex-col gap-20">
      {sortedCategories.map((categoryTitle) => (
        <div key={categoryTitle} className="flex flex-col">
          <div className="mb-10 flex items-center gap-4">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-main uppercase">
              {categoryTitle}
            </h2>
            <div className="h-px bg-border flex-1 opacity-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {grouped[categoryTitle].map((project) => (
              <article key={project.id} className="flex flex-col bg-bg-card border border-border p-4 rounded-[2rem] shadow-sm group">
                <div className="w-full rounded-2xl overflow-hidden bg-bg-subtle relative border border-border/50">
                  <VideoEmbed
                    permalink={project.permalink}
                    tag={project.tag}
                    ratio={project.ratio}
                    captionFallback={project.title}
                    thumbnailUrl={project.thumbnailUrl}
                  />
                </div>
                <div className="mt-5 flex flex-col gap-1.5 px-2 mb-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg text-main font-bold tracking-tight">{project.title}</h3>
                    <a href={project.permalink} target="_blank" rel="noopener noreferrer" className="text-[#8a131b] dark:text-red-500 text-sm font-medium hover:underline inline-flex">
                      Watch here
                    </a>
                  </div>
                  {project.client && (
                    <Link 
                      href={`/work?filter=${encodeURIComponent(project.client)}`}
                      className="text-xs text-muted hover:text-main transition-colors mt-2 uppercase tracking-widest inline-flex items-center gap-1 group/link"
                    >
                      See more {project.client} <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}

      {/* Link to Full Archive */}
      <div className="flex justify-center mt-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-8 py-4 bg-bg-card border border-border rounded-full text-base font-semibold text-main shadow-sm hover:border-main transition-colors group"
        >
          <span>View full archive</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

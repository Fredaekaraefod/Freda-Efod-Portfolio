"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import VideoEmbed from "./VideoEmbed";
import { allProjects, ARCHIVE_FILTERS } from "@/lib/work-data";

const ITEMS_PER_PAGE = 6;

export default function WorkArchive() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const initialFilter = searchParams.get("filter") || "All";
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Sync state if URL changes directly
  useEffect(() => {
    const filterInUrl = searchParams.get("filter");
    if (filterInUrl && ARCHIVE_FILTERS.includes(filterInUrl)) {
      setActiveFilter(filterInUrl);
    } else if (!filterInUrl) {
      setActiveFilter("All");
    }
  }, [searchParams]);

  // Filter the projects based on the active tab (matching either category or client)
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return allProjects;
    }
    return allProjects.filter(
      (p) => p.category === activeFilter || p.client === activeFilter
    );
  }, [activeFilter]);

  // Slice for pagination
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setVisibleCount(ITEMS_PER_PAGE); // Reset pagination on filter change
    router.replace(`/work?filter=${encodeURIComponent(filter)}`, { scroll: false });
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <div className="flex flex-col gap-12 pt-8 pb-24">
      {/* Header & Filter Tabs */}
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-main uppercase">
          Archive
        </h1>
        
        {/* Scrollable filter tabs */}
        <div className="flex overflow-x-auto pb-4 pt-40 -mt-40 gap-2 -mx-8 px-8 md:mx-0 md:px-0 relative" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ARCHIVE_FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            
            // Get stats for this filter
            const matchingProjects = allProjects.filter(p => filter === "All" || p.category === filter || p.client === filter);
            const count = matchingProjects.length;
            const previewProjects = matchingProjects.slice(0, 3);

            return (
              <div key={filter} className="relative group/tab flex-shrink-0">
                <button
                  onClick={() => handleFilterChange(filter)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-colors border ${
                    isActive
                      ? "bg-main text-bg border-main"
                      : "bg-bg-card text-subtle border-border hover:border-main hover:text-main"
                  }`}
                >
                  {filter}
                </button>

                {/* Hover Stack Popup */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 pointer-events-none opacity-0 translate-y-2 group-hover/tab:opacity-100 group-hover/tab:translate-y-0 transition-all duration-300 z-50 flex flex-col items-center">
                  <span className="bg-main text-bg text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-3 shadow-md whitespace-nowrap">
                    {count} VIDEO{count !== 1 ? 'S' : ''}
                  </span>
                  
                  {previewProjects.length > 0 && (
                    <div className="relative w-20 h-28 flex items-end justify-center">
                      {previewProjects.map((p, i) => {
                        const thumb = p.thumbnailUrl || `/api/thumbnail?url=${encodeURIComponent(p.permalink.split("?")[0])}`;
                        
                        let transformClass = "rotate-0 z-20";
                        if (previewProjects.length === 2) {
                          if (i === 0) transformClass = "-rotate-6 -translate-x-2 z-10 origin-bottom-left";
                          if (i === 1) transformClass = "rotate-6 translate-x-2 z-20 origin-bottom-right";
                        } else if (previewProjects.length === 3) {
                          if (i === 0) transformClass = "-rotate-12 -translate-x-4 translate-y-1 z-10 origin-bottom-left";
                          if (i === 1) transformClass = "rotate-0 z-30 scale-105 origin-bottom";
                          if (i === 2) transformClass = "rotate-12 translate-x-4 translate-y-1 z-20 origin-bottom-right";
                        }

                        return (
                          <div 
                            key={p.id} 
                            className={`absolute w-16 h-24 rounded-lg overflow-hidden border-[3px] border-bg shadow-xl transition-transform duration-300 ${transformClass}`}
                          >
                            <img src={thumb} alt="" loading="lazy" className="w-full h-full object-cover bg-zinc-800" />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid of Projects */}
      {visibleProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleProjects.map((project) => (
            <article key={project.id} className="flex flex-col bg-bg-card border border-border p-4 rounded-[2rem] shadow-sm group transition-opacity duration-500">
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
                  <span className="text-xs text-muted uppercase tracking-widest mt-2 border-t border-border pt-2">
                    Client: {project.client}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center text-subtle">
          No projects found for this filter.
        </div>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-8 py-4 bg-bg-subtle border border-border rounded-full text-sm font-semibold text-main hover:bg-bg-card transition-colors"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
}

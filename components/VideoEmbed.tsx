import { Play } from "lucide-react";

interface VideoEmbedProps {
  permalink: string;
  tag: string;
  ratio: "4/5" | "16/9" | "1/1";
  captionFallback: string; // Used as alt text now
  thumbnailUrl?: string;
}

export default function VideoEmbed({
  permalink,
  tag,
  ratio = "4/5",
  captionFallback,
  thumbnailUrl,
}: VideoEmbedProps) {
  let aspectClass = "aspect-[4/5]";
  if (ratio === "16/9") aspectClass = "aspect-video";
  if (ratio === "1/1") aspectClass = "aspect-square";

  const autoThumbnailUrl = thumbnailUrl || `/api/thumbnail?url=${encodeURIComponent(permalink.split("?")[0])}`;

  return (
    <a
      href={permalink}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative w-full overflow-hidden block group bg-bg-subtle ${aspectClass}`}
    >
      {/* Thumbnail Background */}
      <img
        src={autoThumbnailUrl}
        alt={captionFallback}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 bg-zinc-800"
      />

      {/* Custom Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
        <div className="w-16 h-16 rounded-full bg-[#8a131b]/90 backdrop-blur-sm text-white flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#8a131b]">
          <Play className="w-7 h-7 fill-current ml-1" />
        </div>
      </div>
    </a>
  );
}

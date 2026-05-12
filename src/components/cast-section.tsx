import useCredits from "@/features/hooks/use-credits";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

type CastSectionProps = {
  type: "movie" | "tv";
  id: number;
};

export const CastSection = ({ type, id }: CastSectionProps) => {
  const { data: credits } = useCredits(type, id);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Cast</h2>
        <div className="flex gap-1.5">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="p-1.5 rounded-lg border border-border bg-card hover:bg-accent disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-150"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="p-1.5 rounded-lg border border-border bg-card hover:bg-accent disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-150"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
          }}
        >
          {credits?.map((actor) => (
            <div
              key={actor.id}
              className="flex-shrink-0 bg-card border border-border rounded-xl p-3 w-36 text-center hover:bg-accent hover:border-border/80 transition-all duration-200 hover:-translate-y-0.5"
            >
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "/placeholder.png"
                }
                alt={actor.name}
                className="h-36 w-full rounded-lg object-cover mb-3"
              />
              <p className="font-semibold text-sm line-clamp-2 leading-tight">
                {actor.name}
              </p>
              <p className="text-muted-foreground text-xs line-clamp-2 mt-1 leading-tight">
                {actor.character}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CastSection;

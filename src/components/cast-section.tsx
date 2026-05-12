import useCredits from "@/features/hooks/use-credits";

type CastSectionProps = {
  type: "movie" | "tv";
  id: number;
};

export const CastSection = ({ type, id }: CastSectionProps) => {
  const { data: credits } = useCredits(type, id);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Cast</h2>
      <div
        className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
          scrollBehavior: "smooth",
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
  );
};

export default CastSection;

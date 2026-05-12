import useCredits from "@/features/hooks/use-credits";

type CastSectionProps = {
  type: "movie" | "tv";
  id: number;
};

export const CastSection = ({ type, id }: CastSectionProps) => {
  const { data: credits } = useCredits(type, id);

  return (
    <div className="px-10 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Cast</h2>
      <div
        className="flex gap-4 overflow-x-auto pb-4"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      >
        {credits?.map((actor) => (
          <div
            key={actor.id}
            className="flex-shrink-0 bg-slate-800 rounded-lg p-4 w-40 text-center"
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              className="h-40 w-full rounded-md object-cover mb-3"
            />
            <p className="text-white font-semibold text-sm line-clamp-2">
              {actor.name}
            </p>
            <p className="text-gray-400 text-xs line-clamp-2">
              {actor.character}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastSection;

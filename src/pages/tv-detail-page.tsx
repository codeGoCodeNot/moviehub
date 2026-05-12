import CastSection from "@/components/cast-section";
import { Badge } from "@/components/ui/badge";
import useTv from "@/features/tvs/hooks/queries/use-tv";
import formatRuntime from "@/features/utils/format-time-runner";
import { Calendar, Clock, Star } from "lucide-react";
import { useParams } from "react-router-dom";

const TvDetailPage = () => {
  const { id } = useParams();
  const { data: tv } = useTv(+id!);

  const backdropUrl = `https://image.tmdb.org/t/p/w1280${tv?.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w500${tv?.poster_path}`;

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden"
        style={{ minHeight: "clamp(480px, 75vh, 800px)" }}
      >
        {/* Backdrop image */}
        <div
          className="absolute inset-0 scale-[1.03] transition-transform duration-[2s] ease-out"
          style={{
            backgroundImage: `url(${backdropUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
          }}
        />

        {/* Left gradient — text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        {/* Top gradient — darken behind navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        {/* Bottom gradient — always dark so white text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Content anchored to bottom */}
        <div
          className="relative z-10 flex items-end"
          style={{ minHeight: "clamp(480px, 75vh, 800px)" }}
        >
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 pb-10 sm:pb-14 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start sm:items-end">
            {/* Poster — visible on sm and up */}
            <div className="hidden sm:block flex-shrink-0">
              <img
                src={posterUrl}
                alt={tv?.name}
                className="w-32 md:w-44 lg:w-48 rounded-xl object-cover shadow-2xl ring-1 ring-white/10 hover:scale-[1.03] hover:ring-white/30 transition-all duration-500"
                style={{ aspectRatio: "2/3" }}
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2.5 sm:gap-3 pb-1 animate-fade-from-top w-full">
              {/* Mobile poster row */}
              <div className="flex sm:hidden items-end gap-4 mb-1">
                <img
                  src={posterUrl}
                  alt={tv?.name}
                  className="w-20 rounded-lg object-cover shadow-xl ring-1 ring-white/10 flex-shrink-0"
                  style={{ aspectRatio: "2/3" }}
                />
                {/* Genres on mobile sit next to mini poster */}
                <div className="flex flex-wrap gap-1 pb-1">
                  {tv?.genres?.slice(0, 3).map((genre) => (
                    <Badge
                      key={genre.id}
                      variant="secondary"
                      className="bg-white/15 text-white border-white/15 text-xs"
                    >
                      {genre.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Genres — desktop only */}
              <div className="hidden sm:flex flex-wrap gap-1.5">
                {tv?.genres?.map((genre) => (
                  <Badge
                    key={genre.id}
                    variant="secondary"
                    className="bg-white/15 text-white border-white/15 hover:bg-white/25 text-xs backdrop-blur-sm"
                  >
                    {genre.name}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                {tv?.name}
                {tv?.first_air_date && (
                  <span className="ml-2 sm:ml-3 text-xl sm:text-3xl font-normal text-white/65">
                    ({tv.first_air_date.slice(0, 4)})
                  </span>
                )}
              </h1>

              {/* Tagline */}
              {tv?.tagline && (
                <p className="text-white/75 italic text-xs sm:text-sm tracking-wide line-clamp-1">
                  "{tv.tagline}"
                </p>
              )}

              {/* Stats row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-white/85">
                <span className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                  <span className="text-white font-semibold">
                    {tv?.vote_average.toFixed(1)}
                  </span>
                  <span className="text-white/60 text-xs hidden sm:inline">
                    / 10 · {tv?.vote_count?.toLocaleString()} votes
                  </span>
                  <span className="text-white/60 text-xs sm:hidden">/ 10</span>
                </span>

                {formatRuntime(tv?.episode_run_time?.[0]) && (
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-50 flex-shrink-0" />
                    {formatRuntime(tv?.episode_run_time?.[0])}
                  </span>
                )}

                {tv?.first_air_date && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-50 flex-shrink-0" />
                    {tv.first_air_date}
                  </span>
                )}

                {tv?.status && (
                  <Badge
                    variant="outline"
                    className="border-white/30 text-white/80 text-xs"
                  >
                    {tv.status}
                  </Badge>
                )}
              </div>

              {/* Overview */}
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed max-w-2xl line-clamp-3 sm:line-clamp-4">
                {tv?.overview}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Cast ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 py-8 sm:py-10">
        <CastSection type="tv" id={+id!} />
      </div>
    </div>
  );
};

export default TvDetailPage;

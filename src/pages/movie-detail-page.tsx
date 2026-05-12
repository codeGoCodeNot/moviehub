import useMovie from "@/features/movies/hooks/queries/use-movie";
import { useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  const { id } = useParams();

  const { data: movie } = useMovie(+id!);
  const [showTrailer, setShowTrailer] = useState(false);

  const imageUrl = `https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`;

  return (
    <div className="py-15 min-h-screen">
      <div
        className="relative h-196 rounded-sm overflow-hidden"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/60"></div>

        {/* Poster on top */}
        <div className="relative z-10 p-10 w-full max-w-6xl mx-auto">
          <div className="flex items-center gap-x-4">
            <img
              src={`https://image.tmdb.org/t/p/w400${movie?.poster_path}`}
              alt={movie?.title}
              className="rounded-lg"
            />
            <div>
              <div className="flex flex-col gap-y-4">
                <div>
                  <h1 className="text-3xl font-bold text-white ">
                    {movie?.title}{" "}
                    <span className="opacity-80">
                      ({movie?.release_date?.slice(0, 4)})
                    </span>
                  </h1>
                  <h2 className="text-white">
                    {movie?.genres?.map((genre) => genre.name).join(", ")}
                  </h2>
                </div>
                <div>
                  <p className="text-gray-300">Rating</p>
                  <p className="text-2xl font-bold text-white">
                    ⭐ {movie?.vote_average.toFixed(1)}/10
                  </p>
                </div>
                <h2 className="text-lg text-white opacity-70">
                  {movie?.tagline}
                </h2>
                <div>
                  <h1 className="text-white font-semibold text-xl">Overview</h1>
                  <p className="text-white opacity-80">{movie?.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;

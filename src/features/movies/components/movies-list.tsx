import EndpointSelector from "@/components/endpoint-selector";
import Placeholder from "@/components/placeholder";
import { LucideLoader } from "lucide-react";
import { useState } from "react";
import { titles } from "../constanst";
import type { MovieEndpoint } from "../hooks/queries/use-movies";
import useMovies from "../hooks/queries/use-movies";
import MovieCard from "./movie-card";

const MoviesList = () => {
  const [movieEndpoint, setMovieEndpoint] = useState<MovieEndpoint>("popular");
  const { data: movies, isLoading, error } = useMovies(movieEndpoint);

  if (error) return <Placeholder title="Failed to load movies." />;

  if (isLoading)
    return (
      <Placeholder
        title={<LucideLoader className="animate-spin text-gray-500" />}
      />
    );

  return (
    <div className="py-20 px-10">
      <div className="flex gap-x-2">
        <div>
          <h1 className="text-3xl font-bold mb-8">Popular Movies</h1>
        </div>
        <EndpointSelector
          value={movieEndpoint}
          onValueChange={setMovieEndpoint}
          titles={titles}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;

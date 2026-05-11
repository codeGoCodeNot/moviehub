import EndpointSelector from "@/components/endpoint-selector";
import Placeholder from "@/components/placeholder";
import useEndpoint from "@/state-management/hooks/useEndpoint";
import { LucideLoader } from "lucide-react";
import { titles } from "../constants";
import useMovies from "../hooks/queries/use-movies";
import MovieCard from "./movie-card";
import { useEffect } from "react";

const MoviesList = () => {
  const {
    movieEndpoint,
    setMovieEndpoint,
    selectedGenreId,
    setSelectedGenreId,
    setCurrentContentType,
  } = useEndpoint();

  useEffect(() => {
    setCurrentContentType("movie");
    setSelectedGenreId(null);
  }, [setCurrentContentType, setSelectedGenreId]);
  const {
    data: movies,
    isLoading,
    error,
  } = useMovies(movieEndpoint, selectedGenreId);

  if (error) return <Placeholder title="Failed to load movies." />;

  if (isLoading)
    return (
      <Placeholder
        title={<LucideLoader className="animate-spin text-gray-500" />}
      />
    );

  return (
    <div className="py-15 px-10">
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
      <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
        {movies?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;

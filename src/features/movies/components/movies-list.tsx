import EndpointSelector from "@/components/endpoint-selector";
import Placeholder from "@/components/placeholder";
import useEndpointStore from "@/state-management/stores/useEndPointStore";
import { titles } from "../constants";
import useMovies from "../hooks/queries/use-movies";
import MovieCard from "./movie-card";
import MovieCardSkeleton from "./movie-card-skeleton";
import { useEffect } from "react";

const MoviesList = () => {
  const movieEndpoint = useEndpointStore((s) => s.movieEndpoint);
  const setMovieEndpoint = useEndpointStore((s) => s.setMovieEndpoint);
  const selectedGenreId = useEndpointStore((s) => s.selectedGenreId);
  const setSelectedGenreId = useEndpointStore((s) => s.setSelectedGenreId);
  const setCurrentContentType = useEndpointStore(
    (s) => s.setCurrentContentType,
  );

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
      <div className="py-15 px-10">
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <MovieCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );

  return (
    <div className="py-15 px-10">
      <div className="flex gap-x-2">
        <div>
          <h1 className="text-3xl font-bold mb-8">{titles[movieEndpoint]}</h1>
        </div>
        <EndpointSelector
          value={movieEndpoint}
          onValueChange={setMovieEndpoint}
          titles={titles}
        />
      </div>
      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
      >
        {movies?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;

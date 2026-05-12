import { useEffect, useState } from "react";
import MovieCard from "@/features/movies/components/movie-card";
import MovieCardSkeleton from "@/features/movies/components/movie-card-skeleton";
import { useSearchMovies } from "@/features/search/hooks/use-search-movies";
import useEndpointStore from "@/state-management/stores/useEndPointStore";
import { useSearchTv } from "../hooks/use-search-tv";
import TvCard from "@/features/tvs/components/tv-card";
import { useSearchPerson } from "../hooks/use-search-person";
import PersonCard from "@/features/people/components/person-card";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

const SearchResult = () => {
  const searchQuery = useEndpointStore((s) => s.searchQuery);
  const [displayedPages, setDisplayedPages] = useState(1);

  useEffect(() => {
    setDisplayedPages(1);
  }, [searchQuery]);

  const {
    data: movieData,
    isLoading: moviesLoading,
    fetchNextPage: fetchMovies,
    hasNextPage: moviesHasNext,
    isFetchingNextPage: moviesFetching,
  } = useSearchMovies(searchQuery);

  const {
    data: tvData,
    isLoading: tvsLoading,
    fetchNextPage: fetchTv,
    hasNextPage: tvHasNext,
    isFetchingNextPage: tvsFetching,
  } = useSearchTv(searchQuery);

  const {
    data: personData,
    isLoading: personsLoading,
    fetchNextPage: fetchPeople,
    hasNextPage: peopleHasNext,
    isFetchingNextPage: peopleFetching,
  } = useSearchPerson(searchQuery);

  const movieResults =
    movieData?.pages.slice(0, displayedPages).flatMap((p) => p.results) ?? [];
  const tvResults =
    tvData?.pages.slice(0, displayedPages).flatMap((p) => p.results) ?? [];
  const personResults =
    personData?.pages.slice(0, displayedPages).flatMap((p) => p.results) ?? [];

  const isFetching = moviesFetching || tvsFetching || peopleFetching;
  const allAtEnd = !moviesHasNext && !tvHasNext && !peopleHasNext;

  const { ref } = useInView({
    onChange: (inView) => {
      if (!inView || allAtEnd || isFetching) return;
      if (moviesHasNext) fetchMovies();
      if (tvHasNext) fetchTv();
      if (peopleHasNext) fetchPeople();
      setDisplayedPages((p) => p + 1);
    },
  });

  const isLoading = moviesLoading || tvsLoading || personsLoading;

  if (isLoading)
    return (
      <div className="py-15 px-10">
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <MovieCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );

  return (
    <div className="py-15 px-10">
      <h2 className="text-2xl font-bold mb-8">Results for "{searchQuery}"</h2>
      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
      >
        {movieResults.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {tvResults.map((tv) => (
          <TvCard key={tv.id} tv={tv} />
        ))}
        {personResults.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
      <div ref={ref} className="py-10 text-center">
        {isFetching ? (
          <Button variant="link" className="text-muted-foreground text-xs">
            Loading more...
          </Button>
        ) : allAtEnd && displayedPages > 1 ? (
          <Button
            variant="link"
            className="text-muted-foreground text-xs"
            onClick={() => setDisplayedPages(1)}
          >
            Show Less
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default SearchResult;

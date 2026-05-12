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

  const isFetching = moviesFetching || tvsFetching || peopleFetching;
  const hasNext = moviesHasNext || tvHasNext || peopleHasNext;

  const { ref } = useInView({
    onChange: (inView) => {
      if (!inView || isFetching) return;
      if (moviesHasNext) fetchMovies();
      if (tvHasNext) fetchTv();
      if (peopleHasNext) fetchPeople();
    },
  });

  if (moviesLoading || tvsLoading || personsLoading)
    return (
      <div className="py-15 px-10">
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
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
        {movieData?.pages.flatMap((p) =>
          p.results.map((movie) => <MovieCard key={movie.id} movie={movie} />),
        )}
        {tvData?.pages.flatMap((p) =>
          p.results.map((tv) => <TvCard key={tv.id} tv={tv} />),
        )}
        {personData?.pages.flatMap((p) =>
          p.results.map((person) => <PersonCard key={person.id} person={person} />),
        )}
      </div>
      <div ref={ref} className="py-10 text-center">
        {isFetching && (
          <Button variant="link" className="text-muted-foreground text-xs">
            Loading more...
          </Button>
        )}
        {!hasNext && !isFetching && (
          <p className="text-muted-foreground text-xs">No more results</p>
        )}
      </div>
    </div>
  );
};

export default SearchResult;

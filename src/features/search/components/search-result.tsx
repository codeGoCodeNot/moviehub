import MovieCard from "@/features/movies/components/movie-card";
import { useSearchMovies } from "@/features/search/hooks/use-search-movies";
import useEndpointStore from "@/state-management/stores/useEndPointStore";
import { useSearchTv } from "../hooks/use-search-tv";
import TvCard from "@/features/tvs/components/tv-card";
import { useSearchPerson } from "../hooks/use-search-person";
import PersonCard from "@/features/people/components/person-card";

const SearchResult = () => {
  const searchQuery = useEndpointStore((s) => s.searchQuery);
  const { data: movieData } = useSearchMovies(searchQuery);
  const { data: tvData } = useSearchTv(searchQuery);
  const { data: personData } = useSearchPerson(searchQuery);

  return (
    <div className="py-15 px-10">
      <h2 className="text-2xl font-bold mb-8">Results for "{searchQuery}"</h2>
      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
      >
        {movieData?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {tvData?.map((tv) => (
          <TvCard key={tv.id} tv={tv} />
        ))}
        {personData?.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;

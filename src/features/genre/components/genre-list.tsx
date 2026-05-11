import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useGenres from "../hooks/queries/use-genres";
import useEndpointStore from "@/state-management/stores/useEndPointStore";
import GenreListSkeleton from "./genre-list-skeleton";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres("movie");
  const selectedGenreId = useEndpointStore((s) => s.selectedGenreId);
  const setSelectedGenreId = useEndpointStore((s) => s.setSelectedGenreId);

  return (
    <div className="w-[320px] shrink-0 px-5 hidden md:block">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle className="text-lg">Genres</CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <p className="text-sm text-red-500">Failed to load genres.</p>
          )}
          {isLoading && <GenreListSkeleton />}
          {!isLoading && !error && (
            <div className="flex flex-wrap gap-2">
              {genres?.map((genre) => (
                <Button
                  key={genre.id}
                  className="rounded-full"
                  variant={selectedGenreId === genre.id ? "default" : "outline"}
                  onClick={() =>
                    setSelectedGenreId(
                      selectedGenreId === genre.id ? null : genre.id,
                    )
                  }
                >
                  {genre.name}
                </Button>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default GenreList;

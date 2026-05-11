import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideLoader } from "lucide-react";
import useGenres from "../hooks/queries/use-genres";
import useEndpointStore from "@/state-management/stores/useEndPointStore";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres("movie");
  const { setSelectedGenreId, selectedGenreId } = useEndpointStore();

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
          {isLoading && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LucideLoader className="animate-spin size-4 shrink-0" />
              <span>Fetching genres…</span>
            </div>
          )}
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

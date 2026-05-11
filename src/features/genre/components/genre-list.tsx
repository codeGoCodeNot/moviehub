import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideLoader } from "lucide-react";
import useGenres from "../hooks/queries/use-genres";
import Placeholder from "@/components/placeholder";
import useEndpointStore from "@/state-management/stores/useEndPointStore";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres("movie");
  const { setSelectedGenreId, selectedGenreId } = useEndpointStore();

  if (error) return <Placeholder title="Failed to load genres." />;

  if (isLoading)
    return (
      <Placeholder
        title={<LucideLoader className="animate-spin text-gray-500" />}
      />
    );

  return (
    <div className="w-1/5 py-63 px-5  hidden lg:block">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle className="text-lg">Genres</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {genres?.map((genre) => (
              <Button
                key={genre.id}
                className="rounded-full"
                variant={selectedGenreId === genre.id ? "default" : "outline"}
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GenreList;

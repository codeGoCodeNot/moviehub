import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useMovies from "../hooks/queries/use-movies";
import { LucideLoader } from "lucide-react";
import Placeholder from "@/components/placeholder";

const MoviesList = () => {
  const { data: movies, isLoading, error } = useMovies();

  if (error) return <Placeholder title="Failed to load movies." />;

  if (isLoading)
    return (
      <Placeholder
        title={<LucideLoader className="animate-spin text-gray-500" />}
      />
    );

  return (
    <div className="py-20 px-10">
      <h1 className="text-3xl font-bold mb-8">Popular Movies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies?.map((movie) => (
          <Card key={movie.id} className="pt-0">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle>
                <span className="text-xl font-semibold tracking-tighter">
                  {movie.title}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;

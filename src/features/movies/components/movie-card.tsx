import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Movie } from "../hooks/queries/use-movies";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <Card className="pt-0 min-w-[300px]">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-4">
            <span className="text-xl font-semibold tracking-tighter">
              {movie.title}
            </span>

            <Badge>{movie.vote_average.toFixed(1)}</Badge>
          </div>
          <div className="text-sm text-muted-foreground">
            released: {movie.release_date}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          {expandedId === movie.id
            ? movie.overview
            : `${movie.overview.substring(0, 100)}...`}
        </p>
        <Button
          variant="link"
          onClick={() =>
            setExpandedId(expandedId === movie.id ? null : movie.id)
          }
          className="px-0 text-muted-foreground text-xs"
        >
          {expandedId === movie.id ? "Show Less" : "Read More"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;

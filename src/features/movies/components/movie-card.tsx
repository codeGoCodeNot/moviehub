import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Movie } from "../hooks/queries/use-movies";
import { useState } from "react";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
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

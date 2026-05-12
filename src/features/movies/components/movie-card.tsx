import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Movie } from "../entities/type";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <Card className="pt-0 min-w-[300px]">
      <div>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
              : "/placeholder.png"
          }
          alt={movie.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-4">
            <Link
              to={`/movies/${movie.id}`}
              className="group relative inline-block"
            >
              <span className="text-xl font-semibold tracking-tighter transition-all duration-300 group-hover:text-blue-500 group-hover:scale-105">
                {movie.title}
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </Link>

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

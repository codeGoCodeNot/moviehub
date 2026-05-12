import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "../entities/type";

type MovieCardProps = { movie: Movie };

const MovieCard = ({ movie }: MovieCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="pt-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-foreground/20">
      <div className="group overflow-hidden aspect-[2/3]">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/placeholder.png"
          }
          alt={movie.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-3 flex-wrap gap-y-1">
            <Link to={`/movies/${movie.id}`} className="group relative inline-block">
              <span className="text-xl font-semibold tracking-tighter transition-colors duration-200 group-hover:text-blue-500">
                {movie.title}
              </span>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Badge className="shrink-0">{movie.vote_average.toFixed(1)}</Badge>
          </div>
          <div className="text-sm text-muted-foreground">{movie.release_date}</div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`text-muted-foreground text-sm leading-relaxed${!expanded ? " line-clamp-3" : ""}`}>
          {movie.overview}
        </p>
        {movie.overview?.length > 150 && (
          <Button
            variant="link"
            onClick={() => setExpanded((v) => !v)}
            className="px-0 text-muted-foreground text-xs h-auto py-1"
          >
            {expanded ? "Show Less" : "Read More"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default MovieCard;

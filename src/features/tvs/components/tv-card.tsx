import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TV } from "../entities/type";

type TvCardProps = { tv: TV };

const TvCard = ({ tv }: TvCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="pt-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-foreground/20">
      <div className="group overflow-hidden aspect-[2/3]">
        <img
          src={
            tv.poster_path
              ? `https://image.tmdb.org/t/p/w500${tv.poster_path}`
              : "/placeholder.png"
          }
          alt={tv.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-3 flex-wrap gap-y-1">
            <Link to={`/tv/${tv.id}`} className="group relative inline-block">
              <span className="text-xl font-semibold tracking-tighter transition-colors duration-200 group-hover:text-blue-500">
                {tv.name}
              </span>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Badge className="shrink-0">{tv.vote_average.toFixed(1)}</Badge>
          </div>
          <div className="text-sm text-muted-foreground">{tv.first_air_date}</div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`text-muted-foreground text-sm leading-relaxed${!expanded ? " line-clamp-3" : ""}`}>
          {tv.overview}
        </p>
        {tv.overview?.length > 150 && (
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

export default TvCard;

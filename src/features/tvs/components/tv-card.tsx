import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { TV } from "../entities/type";
import { Link } from "react-router-dom";

type TvCardProps = {
  tv: TV;
};

const TvCard = ({ tv }: TvCardProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  return (
    <Card className="pt-0">
      <div>
        <img
          src={
            tv.poster_path
              ? `https://image.tmdb.org/t/p/original${tv.poster_path}`
              : "/placeholder.png"
          }
          alt={tv.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-4">
            <Link to={`/tv/${tv.id}`} className="group relative inline-block">
              <span className="text-xl font-semibold tracking-tighter">
                {tv.name}
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </Link>

            <Badge>{tv.vote_average.toFixed(1)}</Badge>
          </div>
          <div className="text-sm text-muted-foreground">
            first air date: {tv.first_air_date}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          {expandedId === tv.id
            ? tv.overview
            : `${tv.overview.substring(0, 100)}...`}
        </p>
        <Button
          variant="link"
          onClick={() => setExpandedId(expandedId === tv.id ? null : tv.id)}
          className="px-0 text-muted-foreground text-xs"
        >
          {expandedId === tv.id ? "Show Less" : "Read More"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default TvCard;

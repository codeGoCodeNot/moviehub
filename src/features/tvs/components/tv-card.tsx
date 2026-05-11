import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { TV } from "../hooks/queries/use-tvs";

type TvCardProps = {
  tv: TV;
};

const TvCard = ({ tv }: TvCardProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  return (
    <Card key={tv.id} className="pt-0">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
          alt={tv.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle>
          <span className="text-xl font-semibold tracking-tighter">
            {tv.name}
          </span>
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

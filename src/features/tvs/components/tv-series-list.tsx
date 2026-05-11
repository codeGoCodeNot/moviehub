import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import useTvs from "../hooks/use-tvs";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const TvSeriesList = () => {
  const { data: tvs } = useTvs();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="py-20 px-10">
      <h1 className="text-3xl font-bold mb-8">Popular TV Series</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tvs?.map((tv) => (
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
                onClick={() =>
                  setExpandedId(expandedId === tv.id ? null : tv.id)
                }
                className="px-0 text-muted-foreground text-xs"
              >
                {expandedId === tv.id ? "Show Less" : "Read More"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TvSeriesList;

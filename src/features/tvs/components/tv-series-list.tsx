import Placeholder from "@/components/placeholder";
import { LucideLoader } from "lucide-react";
import useTvs from "../hooks/queries/use-tvs";
import TvCard from "./tv-card";
import EndpointSelector from "@/components/endpoint-selector";
import { titles } from "../constants";
import useEndpoint from "@/state-management/hooks/useEndpoint";
import { useEffect } from "react";

const TvSeriesList = () => {
  const {
    tvEndpoint,
    setTvEndpoint,
    selectedGenreId,
    setSelectedGenreId,
    setCurrentContentType,
  } = useEndpoint();

  useEffect(() => {
    setCurrentContentType("tv");
    setSelectedGenreId(null);
  }, [setCurrentContentType, setSelectedGenreId]);
  const { data: tvs, error, isLoading } = useTvs(tvEndpoint, selectedGenreId);

  if (error) return <Placeholder title="Failed to load tv series." />;

  if (isLoading)
    return (
      <Placeholder
        title={<LucideLoader className="animate-spin text-gray-500" />}
      />
    );

  return (
    <div className="py-15 px-10">
      <div className="flex gap-x-2">
        <div>
          <h1 className="text-3xl font-bold mb-8">Popular TV Series</h1>
        </div>
        <EndpointSelector
          onValueChange={setTvEndpoint}
          value={tvEndpoint}
          titles={titles}
        />
      </div>
      <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
        {tvs?.map((tv) => (
          <TvCard tv={tv} key={tv.id} />
        ))}
      </div>
    </div>
  );
};

export default TvSeriesList;

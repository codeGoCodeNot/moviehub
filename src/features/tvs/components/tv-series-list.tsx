import Placeholder from "@/components/placeholder";
import useTvs from "../hooks/queries/use-tvs";
import TvCard from "./tv-card";
import TvCardSkeleton from "./tv-card-skeleton";
import EndpointSelector from "@/components/endpoint-selector";
import { titles } from "../constants";
import useEndpointStore from "@/state-management/stores/useEndPointStore";
import { useEffect } from "react";

const TvSeriesList = () => {
  const tvEndpoint = useEndpointStore((s) => s.tvEndpoint);
  const setTvEndpoint = useEndpointStore((s) => s.setTvEndpoint);
  const selectedGenreId = useEndpointStore((s) => s.selectedGenreId);
  const setSelectedGenreId = useEndpointStore((s) => s.setSelectedGenreId);
  const setCurrentContentType = useEndpointStore((s) => s.setCurrentContentType);

  useEffect(() => {
    setCurrentContentType("tv");
    setSelectedGenreId(null);
  }, [setCurrentContentType, setSelectedGenreId]);
  const { data: tvs, error, isLoading } = useTvs(tvEndpoint, selectedGenreId);

  if (error) return <Placeholder title="Failed to load tv series." />;

  if (isLoading)
    return (
      <div className="py-15 px-10">
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <TvCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );

  return (
    <div className="py-15 px-10">
      <div className="flex gap-x-2">
        <div>
          <h1 className="text-3xl font-bold mb-8">{titles[tvEndpoint]}</h1>
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

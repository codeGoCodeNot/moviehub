import Placeholder from "@/components/placeholder";
import { LucideLoader } from "lucide-react";
import useTvs from "../hooks/queries/use-tvs";
import TvCard from "./tv-card";
import EndpointSelector from "@/components/endpoint-selector";
import { titles } from "../constants";
import useEndpoint from "@/state-management/hooks/useEndpoint";

const TvSeriesList = () => {
  const { tvEndpoint, setTvEndpoint } = useEndpoint();
  const { data: tvs, error, isLoading } = useTvs(tvEndpoint);

  if (error) return <Placeholder title="Failed to load movies." />;

  if (isLoading)
    return (
      <Placeholder
        title={<LucideLoader className="animate-spin text-gray-500" />}
      />
    );

  return (
    <div className="py-20 px-10">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tvs?.map((tv) => (
          <TvCard tv={tv} />
        ))}
      </div>
    </div>
  );
};

export default TvSeriesList;

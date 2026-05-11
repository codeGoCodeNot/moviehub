import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

type TV = {
  id: number;
  name: string;
  overview: string;
  first_air_date: string;
  poster_path: string;
  genre_ids: number[];
  vote_average: number;
  original_name: string;
  origin_country: string[];
};

const useTvs = () =>
  useQuery<TV[]>({
    queryKey: ["tvs"],
    queryFn: () => apiClient.get("/tv/popular").then((res) => res.data.results),
  });

export default useTvs;

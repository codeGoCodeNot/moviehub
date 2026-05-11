import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export type TV = {
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

export type TVEndpoint =
  | "airing_today"
  | "on_the_air"
  | "popular"
  | "top_rated";

const useTvs = (endpoint: TVEndpoint = "popular", genreId?: number | null) =>
  useQuery<TV[]>({
    queryKey: ["tvs", endpoint, genreId],
    queryFn: () => {
      if (genreId) {
        return apiClient
          .get("/discover/tv", {
            params: { with_genres: genreId, sort_by: "popularity.desc" },
          })
          .then((res) => res.data.results);
      }
      return apiClient
        .get(`/tv/${endpoint}`)
        .then((res) => res.data.results);
    },
    // staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default useTvs;

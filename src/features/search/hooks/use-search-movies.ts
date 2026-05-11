import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Movie } from "../../movies/hooks/queries/use-movies";

export const useSearchMovies = (query: string) => {
  return useQuery<Movie[]>({
    queryKey: ["search", "movie", query],
    queryFn: async () => {
      const { data } = await apiClient.get(`/search/movie`, {
        params: { query, page: 1 },
      });
      return data.results;
    },
    enabled: query.trim().length > 0,
    staleTime: 1000 * 60 * 60 * 24,
  });
};

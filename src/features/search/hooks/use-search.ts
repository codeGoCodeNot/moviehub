import { Movie } from "@/features/movies/hooks/queries/use-movies";
import { Person } from "@/features/people/hooks/queries/use-people";
import { TV } from "@/features/tvs/hooks/queries/use-tvs";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export type SearchType = "movie" | "tv" | "person";

export const useSearch = (query: string, type: SearchType) => {
  return useQuery<Movie[] | TV[] | Person[]>({
    queryKey: ["search", type, query],
    queryFn: async () => {
      const { data } = await apiClient.get(`/search/${type}`, {
        params: { query, page: 1 },
      });
      return data.results;
    },
    enabled: query.trim().length > 0,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};

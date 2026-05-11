import { TV } from "@/features/tvs/hooks/queries/use-tvs";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export const useSearchTv = (query: string) => {
  return useQuery<TV[]>({
    queryKey: ["search", "tv", query],
    queryFn: async () => {
      const { data } = await apiClient.get(`/search/tv`, {
        params: { query, page: 1 },
      });
      return data.results;
    },
    enabled: query.trim().length > 0,
    staleTime: 1000 * 60 * 60 * 24,
  });
};

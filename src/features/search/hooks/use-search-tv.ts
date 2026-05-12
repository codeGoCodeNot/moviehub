import apiClient from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { SearchPage } from "./use-search-movies";
import { TV } from "@/features/tvs/entities/type";

export const useSearchTv = (query: string) => {
  return useInfiniteQuery<SearchPage<TV>>({
    queryKey: ["search", "tv", query],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await apiClient.get(`/search/tv`, {
        params: { query, page: pageParam },
      });
      return {
        results: data.results.slice(0, 10),
        totalPages: data.total_pages,
      };
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      allPages.length < lastPage.totalPages ? allPages.length + 1 : undefined,
    enabled: query.trim().length > 0,
    staleTime: 1000 * 60 * 60 * 24,
  });
};

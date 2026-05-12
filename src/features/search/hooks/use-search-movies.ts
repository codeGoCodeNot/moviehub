import { Movie } from "@/features/movies/entities/type";
import apiClient from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";

export type SearchPage<T> = { results: T[]; totalPages: number };

export const useSearchMovies = (query: string) => {
  return useInfiniteQuery<SearchPage<Movie>>({
    queryKey: ["search", "movie", query],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await apiClient.get(`/search/movie`, {
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

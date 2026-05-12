import { Person } from "@/features/people/hooks/queries/use-people";
import apiClient from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { SearchPage } from "./use-search-movies";

export const useSearchPerson = (query: string) => {
  return useInfiniteQuery<SearchPage<Person>>({
    queryKey: ["search", "person", query],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await apiClient.get(`/search/person`, {
        params: { query, page: pageParam },
      });
      return { results: data.results.slice(0, 10), totalPages: data.total_pages };
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      allPages.length < lastPage.totalPages ? allPages.length + 1 : undefined,
    enabled: query.trim().length > 0,
    staleTime: 1000 * 60 * 60 * 24,
  });
};

import apiClient from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { TVEndpoint, TV } from "../../entities/type";

const useTvs = (endpoint: TVEndpoint = "popular", genreId?: number | null) =>
  useInfiniteQuery<{ results: TV[]; totalPages: number }>({
    queryKey: ["tvs", endpoint, genreId],
    queryFn: async ({ pageParam }) => {
      if (genreId) {
        const { data } = await apiClient.get("/discover/tv", {
          params: {
            with_genres: genreId,
            sort_by: "popularity.desc",
            page: pageParam,
          },
        });
        return { results: data.results, totalPages: data.total_pages };
      }
      const { data } = await apiClient.get(`/tv/${endpoint}`, {
        params: { page: pageParam },
      });
      return { results: data.results, totalPages: data.total_pages };
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      allPages.length < lastPage.totalPages ? allPages.length + 1 : undefined,
    staleTime: 1000 * 60 * 60 * 24,
  });

export default useTvs;

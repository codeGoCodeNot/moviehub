import apiClient from "@/services/api-client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

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
  useInfiniteQuery<{ results: TV[]; totalPages: number }>({
    queryKey: ["tvs", endpoint, genreId],
    queryFn: async ({ pageParam = 1 }) => {
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

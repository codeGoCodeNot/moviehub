import apiClient from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";

export type Movie = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  genre_ids: number[];
  vote_average: number;
};

export type MovieEndpoint =
  | "popular"
  | "top_rated"
  | "upcoming"
  | "now_playing";

const useMovies = (
  endpoint: MovieEndpoint = "popular",
  genreId?: number | null,
) =>
  useInfiniteQuery<{ results: Movie[]; totalPages: number }>({
    queryKey: ["movies", endpoint, genreId],
    queryFn: async ({ pageParam }) => {
      if (genreId) {
        const { data } = await apiClient.get("/discover/movie", {
          params: {
            with_genres: genreId,
            sort_by: "popularity.desc",
            page: pageParam,
          },
        });
        return { results: data.results, totalPages: data.total_pages };
      }
      const { data } = await apiClient.get(`/movie/${endpoint}`, {
        params: { page: pageParam },
      });
      return { results: data.results, totalPages: data.total_pages };
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      allPages.length < lastPage.totalPages ? allPages.length + 1 : undefined,
    staleTime: 1000 * 60 * 60 * 24,
  });

export default useMovies;

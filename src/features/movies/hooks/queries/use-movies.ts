import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

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
  useQuery<Movie[]>({
    queryKey: ["movies", endpoint, genreId],
    queryFn: () => {
      if (genreId) {
        return apiClient
          .get("/discover/movie", {
            params: { with_genres: genreId, sort_by: "popularity.desc" },
          })
          .then((res) => res.data.results);
      }
      return apiClient
        .get(`/movie/${endpoint}`)
        .then((res) => res.data.results);
    },
    // staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default useMovies;

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

const useMovies = (endpoint: MovieEndpoint = "popular") =>
  useQuery<Movie[]>({
    queryKey: ["movies", endpoint],
    queryFn: () =>
      apiClient.get(`/movie/${endpoint}`).then((res) => res.data.results),
  });

export default useMovies;

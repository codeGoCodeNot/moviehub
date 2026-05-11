import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

type Movie = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  genre_ids: number[];
  vote_average: number;
};

const useMovies = () =>
  useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: () =>
      apiClient.get("/movie/popular").then((res) => res.data.results),
  });

export default useMovies;

import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

type Movies = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
};

const useMovies = () =>
  useQuery<Movies[]>({
    queryKey: ["movies"],
    queryFn: () =>
      apiClient.get("/movie/populars").then((res) => res.data.results),
  });

export default useMovies;

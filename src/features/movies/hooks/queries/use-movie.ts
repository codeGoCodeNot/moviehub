import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import { Movie } from "../../entities/type";

const useMovie = (id: number) => {
  return useQuery<Movie>({
    queryKey: ["movie", id],
    queryFn: () => apiClient.get(`/movie/${id}`).then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24,
  });
};

export default useMovie;

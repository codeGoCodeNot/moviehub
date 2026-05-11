import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export type Genre = {
  id: number;
  name: string;
};

const useGenres = (type: "movie" | "tv" = "movie") =>
  useQuery<Genre[]>({
    queryKey: ["genres", type],
    queryFn: () =>
      apiClient.get(`/genre/${type}/list`).then((res) => res.data.genres),
    staleTime: 1000 * 60 * 60 * 24,
  });

export default useGenres;

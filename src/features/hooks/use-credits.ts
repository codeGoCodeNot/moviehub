import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/api-client";

export type Cast = {
  id: number;
  name: string;
  character: string;
  profile_path: string;
};

const useCredits = (type: "movie" | "tv", id: number) =>
  useQuery<Cast[]>({
    queryKey: ["credits", type, id],
    queryFn: async () => {
      const { data } = await apiClient.get(`/${type}/${id}/credits`);
      return data.cast;
    },
    staleTime: 1000 * 60 * 60 * 24,
    enabled: !!id,
  });

export default useCredits;

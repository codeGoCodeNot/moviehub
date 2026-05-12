import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import { TV } from "../../entities/type";

const useTv = (id: number) => {
  return useQuery<TV>({
    queryKey: ["tv", id],
    queryFn: () => apiClient.get(`/tv/${id}`).then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24,
  });
};

export default useTv;

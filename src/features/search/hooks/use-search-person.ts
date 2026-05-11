import { Person } from "@/features/people/hooks/queries/use-people";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export const useSearchPerson = (query: string) => {
  return useQuery<Person[]>({
    queryKey: ["search", "person", query],
    queryFn: async () => {
      const { data } = await apiClient.get(`/search/person`, {
        params: { query, page: 1 },
      });
      return data.results;
    },
    enabled: query.trim().length > 0,
    staleTime: 1000 * 60 * 60 * 24,
  });
};

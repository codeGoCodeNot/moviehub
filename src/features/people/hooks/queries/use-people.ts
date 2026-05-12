import apiClient from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";

export type Person = {
  id: number;
  name: string;
  profile_path: string; // actor's photo
  known_for: KnownFor[];
  known_for_department: string; // "Acting", "Directing"
  popularity: number;
};

export type KnownFor = {
  id: number;
  media_type: "movie" | "tv";
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  // Movie-specific
  title?: string;
  release_date?: string;
  // TV-specific
  name?: string;
  first_air_date?: string;
};

export type PeopleEndpoint = "popular";

const usePeople = (endpoint: PeopleEndpoint = "popular") =>
  useInfiniteQuery<{ results: Person[]; totalPages: number }>({
    queryKey: ["people", endpoint],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.get(`/person/${endpoint}?page=${pageParam}`).then((res) => ({
        results: res.data.results,
        totalPages: res.data.total_pages,
      })),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      allPages.length < lastPage.totalPages ? allPages.length + 1 : undefined,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default usePeople;

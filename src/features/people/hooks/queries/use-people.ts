import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

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
  useQuery<Person[]>({
    queryKey: ["people", endpoint],
    queryFn: () =>
      apiClient.get(`/person/${endpoint}`).then((res) => res.data.results),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default usePeople;

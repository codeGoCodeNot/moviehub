import { MovieEndpoint } from "@/features/movies/hooks/queries/use-movies";
import { PeopleEndpoint } from "@/features/people/hooks/queries/use-people";
import { TVEndpoint } from "@/features/tvs/hooks/queries/use-tvs";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type EndpointStore = {
  movieEndpoint: MovieEndpoint;
  tvEndpoint: TVEndpoint;
  peopleEndpoint: PeopleEndpoint;
  selectedGenreId: number | null;
  setMovieEndpoint: (endpoint: MovieEndpoint) => void;
  setTvEndpoint: (endpoint: TVEndpoint) => void;
  setPeopleEndpoint: (endpoint: PeopleEndpoint) => void;
  setSelectedGenreId: (genreId: number | null) => void;
};

const useEndpointStore = create<EndpointStore>()(
  devtools((set) => ({
    movieEndpoint: "popular",
    tvEndpoint: "popular",
    peopleEndpoint: "popular",
    selectedGenreId: null,
    setMovieEndpoint: (endpoint) => set({ movieEndpoint: endpoint }),
    setTvEndpoint: (endpoint) => set({ tvEndpoint: endpoint }),
    setPeopleEndpoint: (endpoint) => set({ peopleEndpoint: endpoint }),
    setSelectedGenreId: (genreId) => set({ selectedGenreId: genreId }),
  })),
);

export default useEndpointStore;

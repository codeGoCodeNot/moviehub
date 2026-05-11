import { MovieEndpoint } from "@/features/movies/hooks/queries/use-movies";
import { PeopleEndpoint } from "@/features/people/hooks/queries/use-people";
import { TVEndpoint } from "@/features/tvs/hooks/queries/use-tvs";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type EndpointStore = {
  movieEndpoint: MovieEndpoint;
  tvEndpoint: TVEndpoint;
  peopleEndpoint: PeopleEndpoint;
  setMovieEndpoint: (endpoint: MovieEndpoint) => void;
  setTvEndpoint: (endpoint: TVEndpoint) => void;
  setPeopleEndpoint: (endpoint: PeopleEndpoint) => void;
};

const useEndpointStore = create<EndpointStore>()(
  devtools((set) => ({
    movieEndpoint: "popular",
    tvEndpoint: "popular",
    peopleEndpoint: "popular",
    setMovieEndpoint: (endpoint) => set({ movieEndpoint: endpoint }),
    setTvEndpoint: (endpoint) => set({ tvEndpoint: endpoint }),
    setPeopleEndpoint: (endpoint) => set({ peopleEndpoint: endpoint }),
  })),
);

export default useEndpointStore;

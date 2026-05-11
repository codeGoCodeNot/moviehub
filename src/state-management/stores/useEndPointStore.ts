import { MovieEndpoint } from "@/features/movies/hooks/queries/use-movies";
import { TVEndpoint } from "@/features/tvs/hooks/queries/use-tvs";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type EndpointStore = {
  movieEndpoint: MovieEndpoint;
  tvEndpoint: TVEndpoint;
  setMovieEndpoint: (endpoint: MovieEndpoint) => void;
  setTvEndpoint: (endpoint: TVEndpoint) => void;
};

const useEndpointStore = create<EndpointStore>()(
  devtools((set) => ({
    movieEndpoint: "popular",
    tvEndpoint: "popular",
    setMovieEndpoint: (endpoint) => set({ movieEndpoint: endpoint }),
    setTvEndpoint: (endpoint) => set({ tvEndpoint: endpoint }),
  })),
);

export default useEndpointStore;

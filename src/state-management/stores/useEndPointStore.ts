import { MovieEndpoint } from "@/features/movies/entities/type";
import { PeopleEndpoint } from "@/features/people/hooks/queries/use-people";
import { TVEndpoint } from "@/features/tvs/entities/type";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type EndpointStore = {
  movieEndpoint: MovieEndpoint;
  tvEndpoint: TVEndpoint;
  peopleEndpoint: PeopleEndpoint;
  selectedGenreId: number | null;
  searchQuery: string;
  activeTab: string | null;
  setMovieEndpoint: (endpoint: MovieEndpoint) => void;
  setTvEndpoint: (endpoint: TVEndpoint) => void;
  setPeopleEndpoint: (endpoint: PeopleEndpoint) => void;
  setSelectedGenreId: (genreId: number | null) => void;
  setSearchQuery: (query: string) => void;
  setActiveTab: (tab: string | null) => void;
};

const useEndpointStore = create<EndpointStore>()(
  devtools((set) => ({
    movieEndpoint: "popular",
    tvEndpoint: "popular",
    peopleEndpoint: "popular",
    selectedGenreId: null,
    searchQuery: "",
    activeTab: null,
    setMovieEndpoint: (endpoint) => set({ movieEndpoint: endpoint }),
    setTvEndpoint: (endpoint) => set({ tvEndpoint: endpoint }),
    setPeopleEndpoint: (endpoint) => set({ peopleEndpoint: endpoint }),
    setSelectedGenreId: (genreId) => set({ selectedGenreId: genreId }),
    setSearchQuery: (query) => set({ searchQuery: query }),
    setActiveTab: (tab) => set({ activeTab: tab }),
  })),
);

export default useEndpointStore;

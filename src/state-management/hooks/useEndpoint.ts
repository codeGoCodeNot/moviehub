import useEndpointStore from "../stores/useEndPointStore";

const useEndpoint = () => {
  const movieEndpoint = useEndpointStore((state) => state.movieEndpoint);
  const tvEndpoint = useEndpointStore((state) => state.tvEndpoint);
  const peopleEndpoint = useEndpointStore((state) => state.peopleEndpoint);
  const selectedGenreId = useEndpointStore((state) => state.selectedGenreId);
  const setMovieEndpoint = useEndpointStore((state) => state.setMovieEndpoint);
  const setTvEndpoint = useEndpointStore((state) => state.setTvEndpoint);
  const setPeopleEndpoint = useEndpointStore(
    (state) => state.setPeopleEndpoint,
  );
  const setSelectedGenreId = useEndpointStore(
    (state) => state.setSelectedGenreId,
  );

  return {
    movieEndpoint,
    tvEndpoint,
    peopleEndpoint,
    selectedGenreId,
    setMovieEndpoint,
    setTvEndpoint,
    setPeopleEndpoint,
    setSelectedGenreId,
  };
};

export default useEndpoint;

import useEndpointStore from "../stores/useEndPointStore";

const useEndpoint = () => {
  const movieEndpoint = useEndpointStore((state) => state.movieEndpoint);
  const tvEndpoint = useEndpointStore((state) => state.tvEndpoint);
  const peopleEndpoint = useEndpointStore((state) => state.peopleEndpoint);
  const setMovieEndpoint = useEndpointStore((state) => state.setMovieEndpoint);
  const setTvEndpoint = useEndpointStore((state) => state.setTvEndpoint);
  const setPeopleEndpoint = useEndpointStore(
    (state) => state.setPeopleEndpoint,
  );

  return {
    movieEndpoint,
    tvEndpoint,
    peopleEndpoint,
    setMovieEndpoint,
    setTvEndpoint,
    setPeopleEndpoint,
  };
};

export default useEndpoint;

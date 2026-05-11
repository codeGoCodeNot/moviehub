import useEndpointStore from "../stores/useEndPointStore";

const useEndpoint = () => {
  const movieEndpoint = useEndpointStore((state) => state.movieEndpoint);
  const tvEndpoint = useEndpointStore((state) => state.tvEndpoint);
  const setMovieEndpoint = useEndpointStore((state) => state.setMovieEndpoint);
  const setTvEndpoint = useEndpointStore((state) => state.setTvEndpoint);

  return { movieEndpoint, tvEndpoint, setMovieEndpoint, setTvEndpoint };
};

export default useEndpoint;

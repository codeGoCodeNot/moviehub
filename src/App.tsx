import Navbar from "./components/layout/navbar";
import MoviesList from "./features/movies/components/movies-list";
import PeopleList from "./features/people/components/people-list";
import TvSeriesList from "./features/tvs/components/tv-series-list";

const App = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <Navbar />
      <MoviesList />
      <TvSeriesList />
      <PeopleList />
    </div>
  );
};

export default App;

import Heading from "./components/layout/heading";
import Navbar from "./components/layout/navbar";
import GenreList from "./features/genre/components/genre-list";

const App = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <Navbar />

      <div className="flex justify-center">
        <div>
          <GenreList />
        </div>

        <div>
          <Heading />
        </div>
      </div>
    </div>
  );
};

export default App;

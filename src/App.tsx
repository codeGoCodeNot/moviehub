import ContentBrowser from "./components/layout/content-browser";
import Navbar from "./components/layout/navbar";
import GenreList from "./features/genre/components/genre-list";

const App = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <Navbar />

      <div className="flex">
        <div className="mt-63">
          <GenreList />
        </div>
        <div className="flex-1 min-w-0">
          <ContentBrowser />
        </div>
      </div>
    </div>
  );
};

export default App;

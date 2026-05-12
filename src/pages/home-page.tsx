import ContentBrowser from "@/components/layout/content-browser";
import GenreList from "@/features/genre/components/genre-list";

const HomePage = () => {
  return (
    <div className="flex">
      <GenreList />
      <ContentBrowser />
    </div>
  );
};

export default HomePage;

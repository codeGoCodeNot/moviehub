import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MoviesList from "@/features/movies/components/movies-list";
import PeopleList from "@/features/people/components/people-list";
import TvSeriesList from "@/features/tvs/components/tv-series-list";
import GenreStrip from "@/features/genre/components/genre-strip";

const Heading = () => {
  return (
    <div className="mt-20 ">
      <Tabs defaultValue="movies">
        <TabsList className="ml-10">
          <TabsTrigger value="movies">Movies</TabsTrigger>
          <TabsTrigger value="tv">TV Shows</TabsTrigger>
          <TabsTrigger value="people">People</TabsTrigger>
        </TabsList>
        <GenreStrip />
        <TabsContent value="movies">
          <MoviesList />
        </TabsContent>
        <TabsContent value="tv">
          <TvSeriesList />
        </TabsContent>
        <TabsContent value="people">
          <PeopleList />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Heading;

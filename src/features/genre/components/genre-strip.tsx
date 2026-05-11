import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useGenres from "../hooks/queries/use-genres";
import useEndpointStore from "@/state-management/stores/useEndPointStore";

const GenreStrip = () => {
  const { data: genres, isLoading, error } = useGenres("movie");
  const selectedGenreId = useEndpointStore((s) => s.selectedGenreId);
  const setSelectedGenreId = useEndpointStore((s) => s.setSelectedGenreId);

  if (error || isLoading) return null;

  return (
    <div className="md:hidden px-10 pb-2">
      <Select
        value={selectedGenreId?.toString() ?? "all"}
        onValueChange={(val) =>
          setSelectedGenreId(val === "all" ? null : Number(val))
        }
      >
        <SelectTrigger className="w-[120]">
          <SelectValue placeholder="Select genre" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Genres</SelectItem>
          {genres?.map((genre) => (
            <SelectItem key={genre.id} value={genre.id.toString()}>
              {genre.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default GenreStrip;

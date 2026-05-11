import { Input } from "@/components/ui/input";
import { LucideSearch, LucideX } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";
import useEndpointStore from "@/state-management/stores/useEndPointStore";
import { useState } from "react";

const SearchInput = () => {
  const searchQuery = useEndpointStore((s) => s.searchQuery);
  const setSearchQuery = useEndpointStore((s) => s.setSearchQuery);
  const [localValue, setLocalValue] = useState(searchQuery);

  const debounced = useDebouncedCallback((value: string) => {
    setSearchQuery(value);
  }, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalValue(value);
    debounced(value);
  };

  const handleClear = () => {
    setLocalValue("");
    setSearchQuery("");
  };

  return (
    <div className="w-2/3 relative mr-10">
      <LucideSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 pointer-events-none" />
      <Input
        placeholder="Search movies, shows, people..."
        className="pl-9 pr-9 rounded-full"
        onChange={handleChange}
        value={localValue}
      />
      {localValue && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          <LucideX className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default SearchInput;

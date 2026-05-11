import MoviesList from "@/features/movies/components/movies-list";
import PeopleList from "@/features/people/components/people-list";
import TvSeriesList from "@/features/tvs/components/tv-series-list";
import GenreStrip from "@/features/genre/components/genre-strip";
import useEndpointStore from "@/state-management/stores/useEndPointStore";
import { cn } from "@/lib/utils";
import { useState } from "react";

const TABS = [
  { value: "movies", label: "Movies" },
  { value: "tv", label: "TV Shows" },
  { value: "people", label: "People" },
];

const ContentBrowser = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const setSelectedGenreId = useEndpointStore((s) => s.setSelectedGenreId);

  const handleTabClick = (value: string) => {
    if (value === activeTab) {
      setActiveTab(null);
      setSelectedGenreId(null);
    } else {
      setActiveTab(value);
    }
  };

  return (
    <div className="mt-20 ">
      <div className="ml-10 inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabClick(tab.value)}
            className={cn(
              "relative inline-flex h-[calc(100%-1px)] items-center justify-center rounded-md border border-transparent px-3 py-1 text-sm font-medium whitespace-nowrap transition-all hover:text-foreground",
              activeTab === tab.value
                ? "bg-background text-foreground shadow-sm"
                : "text-foreground/60",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <GenreStrip />
      {(activeTab === null || activeTab === "movies") && <MoviesList />}
      {(activeTab === null || activeTab === "tv") && <TvSeriesList />}
      {(activeTab === null || activeTab === "people") && <PeopleList />}
    </div>
  );
};

export default ContentBrowser;

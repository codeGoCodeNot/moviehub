import Placeholder from "@/components/placeholder";
import usePeople from "../hooks/queries/use-people";
import useEndpointStore from "@/state-management/stores/useEndPointStore";
import PersonCard from "./person-card";
import PersonCardSkeleton from "./person-card-skeleton";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

const PeopleList = () => {
  const setSelectedGenreId = useEndpointStore((s) => s.setSelectedGenreId);
  const [displayedPages, setDisplayedPages] = useState(1);

  useEffect(() => {
    setSelectedGenreId(null);
    setDisplayedPages(1);
  }, [setSelectedGenreId]);
  const {
    data: people,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePeople();

  const { ref } = useInView({
    onChange: (inView) => {
      if (!inView || !hasNextPage || isFetchingNextPage) return;
      if (hasNextPage) fetchNextPage();
      setDisplayedPages((prev) => prev + 1);
    },
  });

  if (error) return <Placeholder title="Failed to load people." />;

  if (isLoading)
    return (
      <div className="py-15 px-10">
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <PersonCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );

  return (
    <div className="py-15 px-10">
      <div className="flex gap-x-2">
        <h1 className="text-3xl font-bold mb-8">Popular People</h1>
      </div>
      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
      >
        {people?.pages
          .slice(0, displayedPages)
          .flatMap((page) =>
            page.results.map((person) => (
              <PersonCard person={person} key={person.id} />
            )),
          )}
      </div>
      <div ref={ref} className="py-10 text-center">
        {isFetchingNextPage ? (
          <Button variant="link" className="text-muted-foreground text-xs">
            Loading more...
          </Button>
        ) : !hasNextPage && displayedPages > 1 ? (
          <Button
            variant="link"
            className="text-muted-foreground text-xs"
            onClick={() => setDisplayedPages(1)}
          >
            Show Less
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default PeopleList;

import Placeholder from "@/components/placeholder";
import usePeople from "../hooks/queries/use-people";
import useEndpointStore from "@/state-management/stores/useEndPointStore";
import PersonCard from "./person-card";
import PersonCardSkeleton from "./person-card-skeleton";
import { useEffect } from "react";

const PeopleList = () => {
  const setSelectedGenreId = useEndpointStore((s) => s.setSelectedGenreId);

  useEffect(() => {
    setSelectedGenreId(null);
  }, [setSelectedGenreId]);
  const { data: people, isLoading, error } = usePeople();

  if (error) return <Placeholder title="Failed to load people." />;

  if (isLoading)
    return (
      <div className="py-15 px-10">
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
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
      <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
        {people?.map((person) => (
          <PersonCard person={person} key={person.id} />
        ))}
      </div>
    </div>
  );
};

export default PeopleList;

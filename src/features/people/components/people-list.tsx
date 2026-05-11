import Placeholder from "@/components/placeholder";
import { LucideLoader } from "lucide-react";
import usePeople from "../hooks/queries/use-people";
import EndpointSelector from "@/components/endpoint-selector";
import useEndpoint from "@/state-management/hooks/useEndpoint";
import { titles } from "../constants";
import PersonCard from "./person-card";

const PeopleList = () => {
  const { peopleEndpoint, setPeopleEndpoint } = useEndpoint();
  const { data: people, isLoading, error } = usePeople();

  if (error) return <Placeholder title="Failed to load people." />;

  if (isLoading)
    return (
      <Placeholder
        title={<LucideLoader className="animate-spin text-gray-500" />}
      />
    );

  return (
    <div className="py-15 px-10">
      <div className="flex gap-x-2">
        <div>
          <h1 className="text-3xl font-bold mb-8">Popular People</h1>
        </div>
        <EndpointSelector
          value={peopleEndpoint}
          onValueChange={setPeopleEndpoint}
          titles={titles}
        />
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

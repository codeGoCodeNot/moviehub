import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Person } from "../hooks/queries/use-people";

type PersonCardProps = {
  person: Person;
};

const PersonCard = ({ person }: PersonCardProps) => {
  return (
    <Card className="pt-0">
      <div>
        <img
          src={
            person.profile_path
              ? `https://image.tmdb.org/t/p/original${person.profile_path}`
              : `/placeholder.png`
          }
          alt={person.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-4">
            <span className="text-xl font-semibold tracking-tighter">
              {person.name}
            </span>
            <Badge>{person.known_for_department}</Badge>
          </div>
          <div className="flex gap-x-1 items-center">
            {Array.from(
              new Set(person.known_for.map((work) => work.media_type)),
            ).map((mediaType) => (
              <div>
                <Badge key={mediaType} variant="outline">
                  {mediaType}
                </Badge>
              </div>
            ))}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          {person.known_for.map((work) => work.title || work.name).join(", ")}
        </p>
      </CardContent>
    </Card>
  );
};

export default PersonCard;

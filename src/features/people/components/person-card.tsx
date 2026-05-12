import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Person } from "../hooks/queries/use-people";

type PersonCardProps = { person: Person };

const PersonCard = ({ person }: PersonCardProps) => {
  const mediaTypes = Array.from(
    new Set(person.known_for.map((w) => w.media_type)),
  );

  return (
    <Card className="pt-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-foreground/20">
      <div className="group overflow-hidden aspect-[2/3]">
        <img
          src={
            person.profile_path
              ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
              : "/placeholder.png"
          }
          alt={person.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-3 flex-wrap gap-y-1">
            <span className="text-xl font-semibold tracking-tighter">
              {person.name}
            </span>
            <Badge className="shrink-0">{person.known_for_department}</Badge>
          </div>
          <div className="flex gap-1">
            {mediaTypes.map((type) => (
              <Badge key={type} variant="outline">
                {type}
              </Badge>
            ))}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {person.known_for.map((w) => w.title || w.name).join(", ")}
        </p>
      </CardContent>
    </Card>
  );
};

export default PersonCard;

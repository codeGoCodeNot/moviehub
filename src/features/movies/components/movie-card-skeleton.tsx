import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const MovieCardSkeleton = () => (
  <Card className="pt-0 min-w-[300px]">
    <Skeleton className="w-full aspect-[2/3] rounded-none" />
    <CardHeader>
      <CardTitle className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-4">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-5 w-10 rounded-full" />
        </div>
        <Skeleton className="h-4 w-1/3" />
      </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/6" />
      <Skeleton className="h-3 w-16 mt-1" />
    </CardContent>
  </Card>
);

export default MovieCardSkeleton;

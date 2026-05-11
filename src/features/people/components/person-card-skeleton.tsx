import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const PersonCardSkeleton = () => (
  <Card className="pt-0">
    <Skeleton className="w-full aspect-[2/3] rounded-none" />
    <CardHeader>
      <CardTitle className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-4">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
        <div className="flex gap-x-1 items-center">
          <Skeleton className="h-5 w-12 rounded-full" />
          <Skeleton className="h-5 w-12 rounded-full" />
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </CardContent>
  </Card>
);

export default PersonCardSkeleton;

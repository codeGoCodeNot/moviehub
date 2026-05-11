import { Skeleton } from "@/components/ui/skeleton";

const WIDTHS = ["w-16", "w-20", "w-14", "w-24", "w-16", "w-28", "w-20", "w-14", "w-24", "w-16", "w-20", "w-28"];

const GenreListSkeleton = () => (
  <div className="flex flex-wrap gap-2">
    {WIDTHS.map((w, i) => (
      <Skeleton key={i} className={`h-9 rounded-full ${w}`} />
    ))}
  </div>
);

export default GenreListSkeleton;

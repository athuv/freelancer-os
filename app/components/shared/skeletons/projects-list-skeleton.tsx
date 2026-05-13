import { Skeleton } from '@/app/components/shadcn/skeleton';

type Props = {
  count?: number;
};

export default function ProjectsListSkeleton({ count = 3 }: Props) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-between rounded-xl border px-4 py-3"
        >
          {/* LEFT SIDE */}
          <div className="space-y-2">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-52" />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* company (hidden on mobile in real UI) */}
            <Skeleton className="hidden h-4 w-24 sm:block" />

            {/* edit button */}
            <Skeleton className="h-7 w-11 rounded-md" />

            {/* delete button */}
            <Skeleton className="h-8 w-8 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
}

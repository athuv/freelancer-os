import { Skeleton } from '@/app/components/shadcn/skeleton';

export default function ProjectFormSkeleton() {
  return (
    <div className="space-y-6">
      {/* Project Name */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-28" />

        <Skeleton className="h-10 w-full rounded-md" />
      </div>

      {/* Client */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />

        <Skeleton className="h-10 w-full rounded-md" />
      </div>

      {/* Status */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />

        <Skeleton className="h-10 w-full rounded-md" />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />

        <Skeleton className="h-28 w-full rounded-md" />
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-32 rounded-md" />

        <Skeleton className="h-10 w-24 rounded-md" />
      </div>
    </div>
  );
}

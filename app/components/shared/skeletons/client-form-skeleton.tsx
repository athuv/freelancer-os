import { Skeleton } from '@/app/components/shadcn/skeleton';

export default function ClientFormSkeleton() {
  return (
    <div className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-10" />
        <Skeleton className="h-9 w-full" />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-10" />
        <Skeleton className="h-9 w-full" />
      </div>

      {/* Company */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-9 w-full" />
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <Skeleton className="h-9 w-28" />
        <Skeleton className="h-9 w-20" />
      </div>
    </div>
  );
}

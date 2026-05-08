import { Skeleton } from '@/app/components/shadcn/skeleton';
import PageContainer from '@/app/components/layout/page-container';

export default function Loading() {
  return (
    <PageContainer>
      {/* Header */}
      <div className="space-y-2">
        <Skeleton className="h-7 w-48" />
        <Skeleton className="h-4 w-32" />
      </div>

      {/* Info card */}
      <div className="space-y-3 rounded-2xl border p-4">
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-1/4" />
      </div>

      {/* Projects section title */}
      <div className="space-y-3">
        <Skeleton className="h-5 w-32" />

        {/* Project rows */}
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl border p-4"
            >
              <div className="space-y-2">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-3 w-28" />
              </div>

              <Skeleton className="h-5 w-20" />
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

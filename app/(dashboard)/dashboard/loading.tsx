import StatsCardsSkeleton from '@/app/components/shared/skeletons/stats-cards-skeleton';

export default function Loading() {
  return (
    <div className="space-y-6">
      <StatsCardsSkeleton />
    </div>
  );
}

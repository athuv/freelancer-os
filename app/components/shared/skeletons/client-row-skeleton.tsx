import { Card, CardContent } from '@/app/components/shadcn/card';
import { Skeleton } from '@/app/components/shadcn/skeleton';

type Props = {
  count?: number;
};

export default function ClientRowSkeleton({ count = 5 }: Props) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index}>
          <CardContent className="flex items-center justify-between p-6">
            <div className="space-y-3">
              <Skeleton className="h-5 w-40" />

              <Skeleton className="h-4 w-52" />
            </div>

            <div className="flex items-center gap-2">
              <Skeleton className="h-9 w-9 rounded-md" />

              <Skeleton className="h-9 w-9 rounded-md" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

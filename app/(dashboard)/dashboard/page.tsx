'use client';

import PageContainer from '@/app/components/layout/page-container';
import RecentProjectsWidget from '@/app/components/dashboard/recent-projects-widget';
import StatsCards from '@/app/components/dashboard/stats-cards';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

export default function DashboardPage() {
  const stats = useQuery(api.dashboard.getDashboardStats);
  if (!stats) {
    return <div>Loading...</div>;
  }

  return (
    <PageContainer>
      <div className="space-y-6">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Overview</h2>
          <StatsCards stats={stats} />
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Recent Projects</h2>
          <RecentProjectsWidget />
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Insights</h2>

          <div className="text-muted-foreground text-sm">
            Completion rate is shown in stats above.
          </div>
        </section>
      </div>
    </PageContainer>
  );
}

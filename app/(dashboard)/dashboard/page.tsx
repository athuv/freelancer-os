import PageContainer from '@/app/components/layout/page-container';
import RecentProjectsWidget from '@/app/components/dashboard/recent-projects-widget';

import StatsCards from '@/app/components/dashboard/stats-cards';

export default function DashboardPage() {
  return (
    <PageContainer>
      <div className="space-y-6">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Overview</h2>
          <StatsCards />
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Recent Projects</h2>
          <RecentProjectsWidget />
        </section>
      </div>
    </PageContainer>
  );
}

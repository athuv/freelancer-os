import RecentProjectsWidget from '@/app/components/recent-projects-widget';

import StatsCards from '@/app/components/stats-cards';

export default function DashboardPage() {
  return (
    <>
      <StatsCards />
      <RecentProjectsWidget />
    </>
  );
}

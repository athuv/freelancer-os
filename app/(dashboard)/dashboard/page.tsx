import RecentProjectsWidget from '@/app/components/recent-projects-widget';
import Sidebar from '@/app/components/sidebar';
import StatsCards from '@/app/components/stats-cards';
import Topbar from '@/app/components/topbar';

export default function DashboardPage() {
  return (
    <>
      <StatsCards />
      <RecentProjectsWidget />
    </>
  );
}

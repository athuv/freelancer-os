import RecentProjectsWidget from '@/app/components/RecentProjectsWidget';
import Sidebar from '@/app/components/Sidebar';
import StatsCards from '@/app/components/StatsCards';
import Topbar from '@/app/components/Topbar';

export default function DashboardPage() {
  return (
    <>
      <StatsCards />
      <RecentProjectsWidget />
    </>
  );
}

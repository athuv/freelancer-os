import RecentProjectsWidget from '@/app/components/RecentProjectsWidget';
import Sidebar from '@/app/components/Sidebar';
import StatsCards from '@/app/components/StatsCards';
import Topbar from '@/app/components/Topbar';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex flex-1 flex-col">
        <Topbar />

        <div className="flex-1 p-6">
          <div className="mx-auto w-full max-w-7xl space-y-6">
            <StatsCards />
            <RecentProjectsWidget />
          </div>
        </div>
        <footer className="text-muted-foreground border-t p-4 text-center text-sm">
          Footer
        </footer>
      </main>
    </div>
  );
}

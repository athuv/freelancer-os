import RecentProjectsWidget from '@/app/components/RecentProjectsWidget';
import Sidebar from '@/app/components/Sidebar';
import StatsCards from '@/app/components/StatsCards';
import Topbar from '@/app/components/Topbar';

const page = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex flex-1 flex-col">
        <Topbar />

        <div className="flex flex-1 flex-col">
          <div className="flex-1 space-y-6 p-6">
            <StatsCards />
            <RecentProjectsWidget />
          </div>

          <footer className="text-muted-foreground border-t p-4 text-center text-sm">
            Footer
          </footer>
        </div>
      </main>
    </div>
  );
};

export default page;

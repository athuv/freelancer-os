import Sidebar from '@/app/components/sidebar/sidebar';
import Topbar from '@/app/components/topbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-6">
          <div className="mx-auto w-full max-w-7xl space-y-6">{children}</div>
        </main>

        <footer className="text-muted-foreground border-t p-4 text-center text-sm">
          © 2026 FreelancerOS
        </footer>
      </div>
    </div>
  );
}

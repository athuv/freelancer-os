import Sidebar from '@/app/components/Sidebar';
import Topbar from '@/app/components/Topbar';

const page = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <main className="flex h-screen flex-1 flex-col">
        <Topbar />
        <div className="flex-1">main</div>
        <footer className="border-t text-center">Footer </footer>
      </main>
    </div>
  );
};

export default page;

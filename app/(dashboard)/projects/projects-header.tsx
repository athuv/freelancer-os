import { Button } from '@/app/components/shadcn/button';

export default function ProjectsHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>

      <Button>New Project</Button>
    </div>
  );
}

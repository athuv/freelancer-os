import { Badge } from '@/app/components/shadcn/badge';

type Project = {
  id: string;
  name: string;
  client: string;
  status: string;
};

function getStatusVariant(status: string) {
  switch (status) {
    case 'Completed':
      return 'default';
    case 'In Progress':
      return 'secondary';
    default:
      return 'outline';
  }
}

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <div className="hover:bg-muted/50 flex items-center justify-between rounded-lg border-b px-2 py-2 pb-3 transition last:border-none">
      <div>
        <p className="font-medium">{project.name}</p>
        <p className="text-muted-foreground text-sm">{project.client}</p>
      </div>

      <Badge variant={getStatusVariant(project.status)}>{project.status}</Badge>
    </div>
  );
}

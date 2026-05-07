import { Badge } from '@/app/components/shadcn/badge';
import type { Project } from '@/types/project';

function getStatusVariant(status: Project['status']) {
  switch (status) {
    case 'Completed':
      return 'default';
    case 'In Progress':
      return 'secondary';
    default:
      return 'outline';
  }
}

export default function ProjectHeader({ project }: { project: Project }) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-2xl font-semibold">{project.name}</h1>
        <p className="text-muted-foreground text-sm">{project.client}</p>
      </div>

      <Badge variant={getStatusVariant(project.status)}>{project.status}</Badge>
    </div>
  );
}

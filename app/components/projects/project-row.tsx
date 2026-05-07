import { Badge } from '@/app/components/shadcn/badge';
import { getStatusVariant } from '@/lib/utils/project-status';
import { Project, ProjectStatus } from '@/types/project';

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <div className="hover:bg-muted/50 flex items-center justify-between rounded-lg px-2 py-3 transition">
      <div>
        <p className="font-medium">{project.name}</p>
        <p className="text-muted-foreground text-sm">{project.client}</p>
      </div>

      <Badge variant={getStatusVariant(project.status)}>{project.status}</Badge>
    </div>
  );
}

import DeleteProjectButton from '@/app/components/projects/delete-project-button';
import { Badge } from '@/app/components/shadcn/badge';
import { getStatusVariant } from '@/lib/utils/project-status';
import type { Project } from '@/types/project';

export default function ProjectHeader({ project }: { project: Project }) {
  return (
    <div className="space-y-3">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{project.name}</h1>

          <p className="text-muted-foreground text-sm">
            {project.client?.name}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant={getStatusVariant(project.status)}>
            {project.status}
          </Badge>

          <DeleteProjectButton redirectTo="/projects" projectId={project._id} />
        </div>
      </div>
    </div>
  );
}

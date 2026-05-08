import { Badge } from '@/app/components/shadcn/badge';
import { getStatusVariant } from '@/lib/utils/project-status';
import { Project } from '@/types/project';
import Link from 'next/link';

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="hover:bg-muted/50 flex flex-col gap-3 rounded-lg px-2 py-3 transition sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium">{project.name}</p>
          <p className="text-muted-foreground text-sm">{project.client}</p>
        </div>

        <Badge variant={getStatusVariant(project.status)}>
          {project.status}
        </Badge>
      </div>
    </Link>
  );
}

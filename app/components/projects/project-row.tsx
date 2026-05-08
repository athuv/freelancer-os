import { Badge } from '@/app/components/shadcn/badge';
import { rowStyles } from '@/lib/ui/row-styles';
import { getStatusVariant } from '@/lib/utils/project-status';
import { Project } from '@/types/project';
import Link from 'next/link';

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className={rowStyles}>
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

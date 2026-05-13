import Link from 'next/link';
import { Badge } from '@/app/components/shadcn/badge';
import { getStatusVariant } from '@/lib/utils/project-status';
import type { Project } from '@/types/project';

type Props = {
  projects: Project[];
};

export default function RecentProjectsWidget({ projects }: Props) {
  return (
    <div className="space-y-3">
      {projects.map((project) => (
        <Link
          key={project._id}
          href={`/projects/${project._id}`}
          className="hover:bg-muted/50 flex items-center justify-between rounded-xl border px-3 py-3 transition"
        >
          <div>
            <p className="font-medium">{project.name}</p>
            <p className="text-muted-foreground text-sm">{project.client}</p>
          </div>

          <Badge variant={getStatusVariant(project.status)}>
            {project.status}
          </Badge>
        </Link>
      ))}

      <div className="pt-2">
        <Link
          href="/projects"
          className="text-muted-foreground hover:text-foreground text-sm transition"
        >
          View all projects →
        </Link>
      </div>
    </div>
  );
}

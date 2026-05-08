import Link from 'next/link';
import { Badge } from '@/app/components/shadcn/badge';
import { projects } from '@/data/mock-projects';
import { getStatusVariant } from '@/lib/utils/project-status';

export default function RecentProjectsWidget() {
  return (
    <div className="space-y-3">
      {projects.slice(0, 3).map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
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

import Link from 'next/link';
import { getProjects } from '@/lib/data/projects';
import { Badge } from '@/app/components/shadcn/badge';
import { getStatusVariant } from '@/lib/utils/project-status';

export default async function ProjectsList() {
  const projects = await getProjects();

  if (projects.length === 0) {
    return <p className="text-muted-foreground text-sm">No projects found.</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="hover:bg-muted/50 flex items-center justify-between rounded-xl border px-4 py-3 transition"
        >
          <div className="space-y-1">
            <p className="font-medium">{project.name}</p>

            <p className="text-muted-foreground text-sm">{project.client}</p>
          </div>

          <Badge variant={getStatusVariant(project.status)}>
            {project.status}
          </Badge>
        </Link>
      ))}
    </div>
  );
}

'use client';

import Link from 'next/link';
import { Badge } from '@/app/components/shadcn/badge';
import { getStatusVariant } from '@/lib/utils/project-status';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

export default function ProjectsList() {
  const projects = useQuery(api.projects.getProjects);

  if (projects === undefined) {
    return <p className="text-muted-foreground text-sm">Loading...</p>;
  }

  if (projects.length === 0) {
    return <p className="text-muted-foreground text-sm">No projects found.</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {projects.map((project) => (
        <Link
          key={project._id}
          href={`/projects/${project._id}`}
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

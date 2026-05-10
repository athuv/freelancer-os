'use client';

import Link from 'next/link';
import { Badge } from '@/app/components/shadcn/badge';
import { getStatusVariant } from '@/lib/utils/project-status';
import { useQuery, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import DeleteProjectButton from '@/app/components/projects/delete-project-button';

export default function ProjectsList() {
  const projects = useQuery(api.projects.getProjects);
  const deleteProject = useMutation(api.projects.deleteProject);

  if (projects === undefined) {
    return <p className="text-muted-foreground text-sm">Loading...</p>;
  }

  if (projects.length === 0) {
    return <p className="text-muted-foreground text-sm">No projects found.</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {projects.map((project) => (
        <div
          key={project._id}
          className="hover:bg-muted/50 flex items-center justify-between rounded-xl border px-4 py-3 transition"
        >
          <Link
            href={`/projects/${project._id}`}
            className="flex flex-1 items-center justify-between"
          >
            <div className="flex flex-col justify-center space-y-1">
              <p className="font-medium">{project.name}</p>

              <p className="text-muted-foreground text-sm">{project.client}</p>
            </div>

            <div className="flex items-center">
              <Badge variant={getStatusVariant(project.status)}>
                {project.status}
              </Badge>
            </div>
          </Link>

          <div className="ml-4 flex items-center">
            <DeleteProjectButton projectId={project._id} />
          </div>
        </div>
      ))}
    </div>
  );
}

'use client';

import ProjectRow from '@/app/components/projects/project-row';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/shadcn/card';
import EmptyState from '@/app/components/shared/empty-state';
import ProjectsListSkeleton from '@/app/components/shared/skeletons/projects-list-skeleton';
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { FolderOpen } from 'lucide-react';

export default function ProjectsList() {
  const projects = useQuery(api.projects.getProjects);

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>All Projects</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        {projects === undefined ? (
          <div className="space-y-3">
            <ProjectsListSkeleton />
          </div>
        ) : projects.length === 0 ? (
          <EmptyState
            icon={<FolderOpen className="size-10" />}
            title="No projects yet"
            description="Create your first project to start tracking your work."
          />
        ) : (
          projects.map((project) => (
            <ProjectRow key={project._id} project={project} />
          ))
        )}
      </CardContent>
    </Card>
  );
}

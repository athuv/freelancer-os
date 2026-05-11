'use client';

import { useQuery } from 'convex/react';

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';

import PageContainer from '@/app/components/layout/page-container';
import ProjectHeader from '@/app/components/projects/project-header';
import ProjectTasks from '@/app/components/projects/project-tasks';

type Props = {
  projectId: Id<'projects'>;
};

export default function ProjectDetailView({ projectId }: Props) {
  const project = useQuery(api.projects.getProjectById, {
    id: projectId,
  });

  if (project === undefined) {
    return (
      <PageContainer>
        <p className="text-muted-foreground text-sm">Loading project...</p>
      </PageContainer>
    );
  }

  if (project === null) {
    return (
      <PageContainer>
        <p className="text-muted-foreground text-sm">Project not found.</p>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="space-y-6">
        <ProjectHeader project={project} />

        <ProjectTasks projectId={project._id} />
      </div>
    </PageContainer>
  );
}

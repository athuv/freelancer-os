'use client';

import PageContainer from '@/app/components/layout/page-container';
import PageHeader from '@/app/components/layout/page-header';
import ProjectForm from '@/app/components/projects/project-form';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

import { Id } from '@/convex/_generated/dataModel';
import { assertExists } from '@/lib/utils/handle-not-found';
import { useParams } from 'next/navigation';
import ProjectFormSkeleton from '@/app/components/shared/skeletons/project-form-skeleton';

export default function EditProjectPage() {
  const params = useParams();
  const id = params.id as Id<'projects'>;
  const project = useQuery(api.projects.getProjectById, { id });

  if (project === undefined) {
    return <ProjectFormSkeleton />;
  }

  assertExists(project);

  return (
    <PageContainer>
      <div className="space-y-6">
        <PageHeader
          title="Edit Project"
          description="Update project details."
        />
        {project === undefined ? (
          <ProjectFormSkeleton />
        ) : (
          <ProjectForm mode="edit" project={project} />
        )}
      </div>
    </PageContainer>
  );
}

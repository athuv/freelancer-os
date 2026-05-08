import PageContainer from '@/app/components/layout/page-container';
import ProjectHeader from '@/app/components/projects/project-header';
import ProjectTasks from '@/app/components/projects/project-tasks';
import { getProjectById } from '@/lib/data/projects';
import { assertExists } from '@/lib/utils/handle-not-found';
import { notFound } from 'next/navigation';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = await getProjectById(id);

  assertExists(project);

  return (
    <PageContainer>
      <ProjectHeader project={project} />
      <ProjectTasks tasks={project.tasks} />
    </PageContainer>
  );
}

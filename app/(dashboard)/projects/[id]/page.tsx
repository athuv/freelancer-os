import PageContainer from '@/app/components/layout/page-container';
import ProjectHeader from '@/app/components/projects/project-header';
import ProjectTasks from '@/app/components/projects/project-tasks';
import { getProjectById } from '@/lib/data/projects';
import { notFound } from 'next/navigation';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = getProjectById(id);

  if (!project) return notFound();

  return (
    <PageContainer>
      <ProjectHeader project={project} />
      <ProjectTasks tasks={project.tasks} />
    </PageContainer>
  );
}

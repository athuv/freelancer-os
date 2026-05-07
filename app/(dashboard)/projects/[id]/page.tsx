import ProjectHeader from '@/app/components/projects/project-header';
import { projects } from '@/data/mock-projects';
import { notFound } from 'next/navigation';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <div className="space-y-6">
      <ProjectHeader project={project} />
    </div>
  );
}

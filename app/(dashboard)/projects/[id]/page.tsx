import { Id } from '@/convex/_generated/dataModel';

import ProjectDetailView from '@/app/components/projects/project-detail-view';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ProjectDetailView projectId={id as Id<'projects'>} />;
}

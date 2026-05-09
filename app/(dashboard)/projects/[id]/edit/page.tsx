import PageContainer from '@/app/components/layout/page-container';
import PageHeader from '@/app/components/layout/page-header';
import ProjectForm from '@/app/components/projects/project-form';
import { getProjectById } from '@/lib/data/projects';
import { assertExists } from '@/lib/utils/handle-not-found';

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = await getProjectById(id);

  assertExists(project);

  return (
    <PageContainer>
      <div className="space-y-6">
        <PageHeader
          title="Edit Project"
          description="Update project details."
        />

        <ProjectForm mode="edit" project={project} />
      </div>
    </PageContainer>
  );
}

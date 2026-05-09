import PageContainer from '@/app/components/layout/page-container';
import PageHeader from '@/app/components/layout/page-header';
import ProjectForm from '@/app/components/projects/project-form';

export default function NewProjectPage() {
  return (
    <PageContainer>
      <div className="space-y-6">
        <PageHeader
          title="Create Project"
          description="Add a new project to start tracking work and tasks."
        />

        <ProjectForm />
      </div>
    </PageContainer>
  );
}

import PageContainer from '@/app/components/layout/page-container';
import PageHeader from '@/app/components/layout/page-header';

export default function NewProjectPage() {
  return (
    <PageContainer>
      <div className="space-y-6">
        <PageHeader
          title="Create Project"
          description="Add a new project to start tracking work and tasks."
        />

        <div className="rounded-2xl border p-6">Project form goes here</div>
      </div>
    </PageContainer>
  );
}

import PageContainer from '@/app/components/layout/page-container';
import PageHeader from '@/app/components/layout/page-header';
import ProjectsList from '@/app/components/projects/projects-list';

export default function ProjectsPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Projects"
        description="Manage and track your freelance projects."
      />
      <ProjectsList />
    </PageContainer>
  );
}

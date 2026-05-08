import PageContainer from '@/app/components/layout/page-container';
import ProjectsHeader from '@/app/components/projects/projects-header';
import ProjectsList from '@/app/components/projects/projects-list';

export default function ProjectsPage() {
  return (
    <PageContainer>
      <ProjectsHeader />
      <ProjectsList />
    </PageContainer>
  );
}

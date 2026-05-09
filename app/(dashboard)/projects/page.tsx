import PageContainer from '@/app/components/layout/page-container';
import PageHeader from '@/app/components/layout/page-header';
import ProjectsList from '@/app/components/projects/projects-list';
import { Button } from '@/app/components/shadcn/button';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <PageContainer>
      <div className="space-y-6">
        <PageHeader
          title="Projects"
          description="Manage and track your freelance projects."
          action={
            <Button asChild>
              <Link href="/projects/new">New Project</Link>
            </Button>
          }
        />

        <ProjectsList />
      </div>
    </PageContainer>
  );
}

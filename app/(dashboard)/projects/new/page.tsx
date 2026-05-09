import PageContainer from '@/app/components/layout/page-container';
import PageHeader from '@/app/components/layout/page-header';
import ProjectForm from '@/app/components/projects/project-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/shadcn/card';

export default function NewProjectPage() {
  return (
    <PageContainer>
      <div className="space-y-6">
        <PageHeader
          title="Create Project"
          description="Add a new project to start tracking work and tasks."
        />

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Project Details</CardTitle>

            <CardDescription>
              Fill in the information below to create a new project.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <ProjectForm />
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}

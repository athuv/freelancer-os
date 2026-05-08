import ProjectRow from '@/app/components/projects/project-row';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/shadcn/card';
import EmptyState from '@/app/components/shared/empty-state';
import { getProjects } from '@/lib/data/projects';
import { FolderOpen } from 'lucide-react';

export default async function ProjectsList() {
  const projects = await getProjects();
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>All Projects</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        {projects.length === 0 ? (
          <EmptyState
            icon={<FolderOpen className="size-10" />}
            title="No projects yet"
            description="Create your first project to start tracking your work."
          />
        ) : (
          projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))
        )}
      </CardContent>
    </Card>
  );
}

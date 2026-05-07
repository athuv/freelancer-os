import ProjectRow from '@/app/components/projects/project-row';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/shadcn/card';
import EmptyState from '@/app/components/shared/empty-state';
import { projects } from '@/data/mock-projects';
import { FolderOpen } from 'lucide-react';

export default function ProjectsList() {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>All Projects</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
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

import ProjectRow from '@/app/(dashboard)/projects/project-row';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/shadcn/card';

const projects = [
  {
    id: '1',
    name: 'Portfolio Website',
    client: 'John Doe',
    status: 'In Progress',
  },
  {
    id: '2',
    name: 'E-commerce App',
    client: 'Acme Inc',
    status: 'Completed',
  },
];

export default function ProjectsList() {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>All Projects</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </CardContent>
    </Card>
  );
}

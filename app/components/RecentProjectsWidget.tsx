import ProjectItem from '@/app/components/ProjectItemCard';
import { Button } from '@/app/components/shadcn/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/shadcn/card';

const projects = [
  {
    name: 'Portfolio Website',
    client: 'John Doe',
    status: 'In Progress',
  },
  {
    name: 'E-commerce App',
    client: 'Acme Inc',
    status: 'Completed',
  },
];

const RecentProjectsWidget = () => {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Projects</CardTitle>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <ProjectItem key={i} {...project} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentProjectsWidget;

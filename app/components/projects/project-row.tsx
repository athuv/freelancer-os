import Link from 'next/link';
import DeleteClientButton from '@/app/components/clients/delete-client-button';
import { Button } from '@/app/components/shadcn/button';
import { Project } from '@/types/project';
import { Badge } from '@/app/components/shadcn/badge';
import { getStatusVariant } from '@/lib/utils/project-status';
import DeleteProjectButton from '@/app/components/projects/delete-project-button';

type Props = {
  project: Project;
};

export default function ProjectRow({ project }: Props) {
  return (
    <div className="hover:bg-muted/50 flex items-center justify-between rounded-xl border px-4 py-3 transition">
      <div className="space-y-0.5">
        <Link
          href={`/clients/${project._id}`}
          className="font-medium hover:underline"
        >
          {project.name}
        </Link>

        <p className="text-muted-foreground text-sm">{project.client}</p>
      </div>

      <div className="flex items-center gap-3">
        <Badge variant={getStatusVariant(project.status)}>
          {project.status}
        </Badge>

        <Button variant="outline" size="sm" asChild>
          <Link href={`/projects/${project._id}/edit`}>Edit</Link>
        </Button>

        <DeleteProjectButton projectId={project._id} />
      </div>
    </div>
  );
}

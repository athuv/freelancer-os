import { Badge } from '@/app/components/shadcn/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/shadcn/card';

type ProjectItemProps = {
  name: string;
  client: string;
  status: string;
};

function getStatusVariant(status: string) {
  switch (status) {
    case 'Completed':
      return 'default';
    case 'In Progress':
      return 'secondary';
    default:
      return 'outline';
  }
}

const ProjectItemCard = ({ name, client, status }: ProjectItemProps) => {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="hover:bg-muted/50 flex items-center justify-between rounded-lg border-b px-2 py-2 pb-3 transition last:border-none">
          <div>
            <p className="text-muted-foreground text-sm">{client}</p>
          </div>

          <Badge variant={getStatusVariant(status)}>{status}</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectItemCard;

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

const ProjectItemCard = ({ name, client, status }: ProjectItemProps) => {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between border-b pb-3 last:border-none">
          <div>
            <p className="text-muted-foreground text-sm">{client}</p>
          </div>

          <Badge variant="secondary">{status}</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectItemCard;

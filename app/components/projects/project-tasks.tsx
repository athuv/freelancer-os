import TaskItem from '@/app/components/projects/task-item';
import EmptyState from '@/app/components/shared/empty-state';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/shadcn/card';
import { CheckCircle2 } from 'lucide-react';
import { Task } from '@/types/project';

export default function ProjectTasks({ tasks }: { tasks: Task[] }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {tasks.length === 0 ? (
          <EmptyState
            icon={<CheckCircle2 className="size-10" />}
            title="No tasks yet"
            description="Tasks for this project will appear here."
          />
        ) : (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </CardContent>
    </Card>
  );
}

import TaskItem from '@/app/components/projects/task-item';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/shadcn/card';

import { Task } from '@/types/project';

export default function ProjectTasks({ tasks }: { tasks: Task[] }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {tasks.length === 0 ? (
          <div className="text-muted-foreground flex h-24 items-center justify-center text-sm">
            No tasks yet
          </div>
        ) : (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </CardContent>
    </Card>
  );
}

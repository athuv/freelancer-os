'use client';

import { Trash2 } from 'lucide-react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/shadcn/card';

import { Button } from '@/app/components/shadcn/button';
import { Checkbox } from '@/app/components/shadcn/checkbox';
import { Progress } from '@/app/components/shadcn/progress';

import AddTaskForm from '@/app/components/projects/add-task-form';

import { useQuery, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';

type Props = {
  projectId: Id<'projects'>;
};

export default function ProjectTasks({ projectId }: Props) {
  const tasks = useQuery(api.tasks.getTasksByProject, {
    projectId,
  });

  const toggleTask = useMutation(api.tasks.toggleTask);
  const deleteTask = useMutation(api.tasks.deleteTask);

  if (!tasks) {
    return (
      <Card className="rounded-2xl">
        <CardContent className="py-6">
          <p className="text-muted-foreground text-sm">Loading tasks...</p>
        </CardContent>
      </Card>
    );
  }

  const completedTasks = tasks.filter((task) => task.done).length;

  const progress =
    tasks.length === 0 ? 0 : Math.round((completedTasks / tasks.length) * 100);

  async function handleToggle(taskId: Id<'tasks'>) {
    await toggleTask({ id: taskId });
  }

  async function handleDelete(taskId: Id<'tasks'>) {
    await deleteTask({ id: taskId });
  }

  return (
    <Card className="rounded-2xl">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <CardTitle>Tasks</CardTitle>

          <span className="text-muted-foreground text-sm">
            {completedTasks}/{tasks.length} completed
          </span>
        </div>

        <div className="space-y-2">
          <Progress value={progress} />

          <p className="text-muted-foreground text-sm">{progress}% completed</p>
        </div>

        <AddTaskForm projectId={projectId} />
      </CardHeader>

      <CardContent>
        {tasks.length === 0 ? (
          <div className="text-muted-foreground text-sm">
            No tasks yet. Add your first task above.
          </div>
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="flex items-center justify-between rounded-xl border p-3"
              >
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={task.done}
                    onCheckedChange={() => handleToggle(task._id)}
                  />

                  <p
                    className={
                      task.done ? 'text-muted-foreground line-through' : ''
                    }
                  >
                    {task.title}
                  </p>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-destructive hover:text-destructive"
                  onClick={() => handleDelete(task._id)}
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

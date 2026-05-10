'use client';

import { useRouter } from 'next/navigation';
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

import { deleteTask, toggleTask } from '@/lib/data/projects';

import type { Task } from '@/types/project';
import AddTaskForm from '@/app/components/projects/add-task-form';

type Props = {
  projectId: string;
  tasks: Task[];
};

export default function ProjectTasks({ projectId, tasks }: Props) {
  const router = useRouter();

  const completedTasks = tasks.filter((task) => task.done).length;

  const progress =
    tasks.length === 0 ? 0 : Math.round((completedTasks / tasks.length) * 100);

  async function handleToggle(taskId: string) {
    await toggleTask(projectId, taskId);

    router.refresh();
  }

  async function handleDelete(taskId: string) {
    await deleteTask(projectId, taskId);

    router.refresh();
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
                key={task.id}
                className="flex items-center justify-between rounded-xl border p-3"
              >
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={task.done}
                    onCheckedChange={() => handleToggle(task.id)}
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
                  onClick={() => handleDelete(task.id)}
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

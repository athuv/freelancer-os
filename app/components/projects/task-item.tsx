import { Checkbox } from '@/app/components/shadcn/checkbox';
import { Task } from '@/types/project';
import { cn } from '@/lib/utils';

export default function TaskItem({ task }: { task: Task }) {
  return (
    <div className="hover:bg-muted/50 flex items-center gap-3 rounded-xl border px-3 py-3 transition">
      <Checkbox checked={task.done} />

      <p
        className={cn(
          'text-sm font-medium',
          task.done && 'text-muted-foreground line-through',
        )}
      >
        {task.title}
      </p>
    </div>
  );
}

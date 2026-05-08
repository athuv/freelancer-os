import { CheckCircle2, Circle } from 'lucide-react';
import { Task } from '@/types/project';

export default function TaskItem({ task }: { task: Task }) {
  return (
    <div className="hover:bg-muted/50 flex items-center gap-3 rounded-lg px-2 py-2 transition">
      <button className="text-muted-foreground">
        {task.done ? (
          <CheckCircle2 className="size-5 text-green-500" />
        ) : (
          <Circle className="size-5" />
        )}
      </button>

      <p
        className={`text-sm ${
          task.done ? 'text-muted-foreground line-through' : 'text-foreground'
        }`}
      >
        {task.title}
      </p>
    </div>
  );
}

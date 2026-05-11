'use client';

import { useState } from 'react';

import { useMutation } from 'convex/react';

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';

import { Button } from '@/app/components/shadcn/button';
import { Input } from '@/app/components/shadcn/input';

type Props = {
  projectId: Id<'projects'>;
};

export default function AddTaskForm({ projectId }: Props) {
  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createTask = useMutation(api.tasks.createTask);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await createTask({
        title,
        projectId,
      });

      setTitle('');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <Input
        placeholder="Add a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Adding...' : 'Add'}
      </Button>
    </form>
  );
}

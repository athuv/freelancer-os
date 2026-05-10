'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/app/components/shadcn/button';
import { Input } from '@/app/components/shadcn/input';

import { addTask } from '@/lib/data/projects';

type Props = {
  projectId: string;
};

export default function AddTaskForm({ projectId }: Props) {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await addTask(projectId, title);

      setTitle('');

      router.refresh();
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
        Add
      </Button>
    </form>
  );
}

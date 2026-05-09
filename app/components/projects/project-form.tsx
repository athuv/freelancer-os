'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Button } from '@/app/components/shadcn/button';
import { Input } from '@/app/components/shadcn/input';
import { Label } from '@/app/components/shadcn/label';
import { Textarea } from '@/app/components/shadcn/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/shadcn/select';
import { projectSchema } from '@/lib/validation/project-schema';
import { createProject } from '@/lib/data/projects';
import type { ProjectStatus } from '@/types/project';
import { PROJECT_STATUS_VALUES } from '@/lib/constants/project-status';
import { useRouter } from 'next/navigation';

export default function ProjectForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [client, setClient] = useState('');
  const [status, setStatus] = useState<ProjectStatus>('planned');
  const [description, setDescription] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSubmitting(true);

    const result = projectSchema.safeParse({
      name,
      client,
      status,
      description,
    });

    if (!result.success) {
      setIsSubmitting(false);
      return;
    }

    try {
      await createProject(result.data);
      router.push('/projects');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="name">Project Name</Label>

        <Input
          id="name"
          placeholder="Enter project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="client">Client</Label>

        <Select value={client} onValueChange={setClient}>
          <SelectTrigger>
            <SelectValue placeholder="Select a client" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="john-doe">John Doe</SelectItem>

            <SelectItem value="acme-inc">Acme Inc</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Status</Label>

        <Select
          value={status}
          onValueChange={(value) => setStatus(value as ProjectStatus)}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="planned">Planned</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>

        <Textarea
          id="description"
          placeholder="Describe the project..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Save Project'}
        </Button>

        <Button type="button" variant="outline" asChild>
          <Link href="/projects">Cancel</Link>
        </Button>
      </div>
    </form>
  );
}

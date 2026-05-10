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
import type { ProjectStatus } from '@/types/project';
import { useRouter } from 'next/navigation';
import { ProjectFormProps } from '@/types/project-form';

import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

export default function ProjectForm({
  mode = 'create',
  project,
}: ProjectFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState(project?.name ?? '');
  const [client, setClient] = useState(project?.client ?? '');
  const [status, setStatus] = useState<ProjectStatus>(
    project?.status ?? 'planned',
  );
  const [description, setDescription] = useState(project?.description ?? '');

  const createProject = useMutation(api.projects.createProject);
  const updateProject = useMutation(api.projects.updateProject);

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
      if (mode === 'edit' && project) {
        await updateProject({
          id: project._id,
          ...result.data,
        });

        router.push(`/projects/${project._id}`);
      } else {
        await createProject({
          name: result.data.name,
          client: result.data.client,
          status: result.data.status,
          description: result.data.description,
        });

        router.push('/projects');
      }
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
          {isSubmitting
            ? 'Saving...'
            : mode === 'edit'
              ? 'Update Project'
              : 'Save Project'}
        </Button>

        <Button type="button" variant="outline" asChild>
          <Link href="/projects">Cancel</Link>
        </Button>
      </div>
    </form>
  );
}

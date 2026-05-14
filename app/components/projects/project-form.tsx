'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
import type { ProjectFormProps } from '@/types/project-form';

import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';

export default function ProjectForm({
  mode = 'create',
  project,
}: ProjectFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState(project?.name ?? '');
  const [clientId, setClientId] = useState(project?.clientId ?? '');
  const [status, setStatus] = useState<ProjectStatus>(
    project?.status ?? 'planned',
  );
  const [description, setDescription] = useState(project?.description ?? '');

  const clients = useQuery(api.clients.getClients);
  const createProject = useMutation(api.projects.createProject);
  const updateProject = useMutation(api.projects.updateProject);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const result = projectSchema.safeParse({
      name,
      clientId,
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
          name: result.data.name,
          clientId: result.data.clientId as Id<'clients'>,
          status: result.data.status,
          description: result.data.description,
        });

        router.push(`/projects/${project._id}`);
      } else {
        await createProject({
          name: result.data.name,
          clientId: result.data.clientId as Id<'clients'>,
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
      {/* NAME */}
      <div className="space-y-2">
        <Label htmlFor="name">Project Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* CLIENT */}
      <div className="space-y-2">
        <Label htmlFor="client">Client</Label>

        <Select
          value={clientId}
          onValueChange={(value) => setClientId(value as Id<'clients'>)}
          disabled={!clients}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a client" />
          </SelectTrigger>

          <SelectContent>
            {clients?.map((client) => (
              <SelectItem key={client._id} value={client._id}>
                {client.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* STATUS */}
      <div className="space-y-2">
        <Label>Status</Label>

        <Select
          value={status}
          onValueChange={(v) => setStatus(v as ProjectStatus)}
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

      {/* DESCRIPTION */}
      <div className="space-y-2">
        <Label>Description</Label>

        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? 'Saving...'
            : mode === 'edit'
              ? 'Update Project'
              : 'Create Project'}
        </Button>

        <Button type="button" variant="outline" asChild>
          <Link href="/projects">Cancel</Link>
        </Button>
      </div>
    </form>
  );
}

import { Infer } from 'convex/values';
import { Id } from '@/convex/_generated/dataModel';
import { ProjectStatus as ProjectStatusValidator } from '@/convex/schemaHelpers';
import { Client } from '@/types/client';

export type ProjectStatus = Infer<typeof ProjectStatusValidator>;

export type Task = {
  id: string;
  title: string;
  done: boolean;
};

export type Project = {
  _id: Id<'projects'>;
  name: string;
  clientId: Id<'clients'>;
  client: Client | null;
  status: ProjectStatus;
  description?: string;
};

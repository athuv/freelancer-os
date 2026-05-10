import { Infer } from 'convex/values';
import { Id } from '@/convex/_generated/dataModel';
import { ProjectStatus as ProjectStatusValidator } from '@/convex/schemaHelpers';

export type ProjectStatus = Infer<typeof ProjectStatusValidator>;

export type Task = {
  id: string;
  title: string;
  done: boolean;
};

export type Project = {
  _id: Id<'projects'>;
  name: string;
  client: string;
  status: ProjectStatus;
  description?: string;
  tasks: Task[];
};

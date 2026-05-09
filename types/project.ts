export type ProjectStatus = 'planned' | 'in-progress' | 'completed';

export type Task = {
  id: string;
  title: string;
  done: boolean;
};

export type Project = {
  id: string;
  name: string;
  client: string;
  status: ProjectStatus;
  description?: string;
  tasks: Task[];
};

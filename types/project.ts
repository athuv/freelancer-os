export type ProjectStatus = 'Completed' | 'In Progress' | 'Planned';

export type Project = {
  id: string;
  name: string;
  client: string;
  status: ProjectStatus;
  tasks: Task[];
};

export type Task = {
  id: string;
  title: string;
  done: boolean;
};

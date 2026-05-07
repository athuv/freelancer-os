export type ProjectStatus = 'Completed' | 'In Progress' | 'Planned';

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
  tasks: Task[];
};

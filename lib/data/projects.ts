import { projects } from '@/data/mock-projects';
import { Project, ProjectStatus } from '@/types/project';

export async function getProjects() {
  return projects;
}

export async function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}

export async function createProject(data: {
  name: string;
  client: string;
  status: ProjectStatus;
  description?: string;
}) {
  await new Promise((res) => setTimeout(res, 500));

  const newProject: Project = {
    id: crypto.randomUUID(),
    name: data.name,
    client: data.client,
    status: data.status,
    tasks: [],
  };

  projects.unshift(newProject);

  return newProject;
}

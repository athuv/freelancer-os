import { projects } from '@/data/mock-projects';

export async function getProjects() {
  return projects;
}

export async function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}

import { projects } from '@/data/mock-projects';

export function getProjects() {
  return projects;
}

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}

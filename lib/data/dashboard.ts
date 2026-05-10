import { projects } from '@/data/mock-projects';
import { clients } from '@/data/mock-clients';

export async function getDashboardStats() {
  const totalProjects = projects.length;

  const completedProjects = projects.filter(
    (p) => p.status === 'completed',
  ).length;

  const inProgressProjects = projects.filter(
    (p) => p.status === 'in-progress',
  ).length;

  const totalClients = clients.length;

  const completionRate =
    totalProjects === 0
      ? 0
      : Math.round((completedProjects / totalProjects) * 100);

  return {
    totalProjects,
    completedProjects,
    inProgressProjects,
    totalClients,
    completionRate,
  };
}

export async function getRecentProjects(limit = 3) {
  return projects.slice(0, limit);
}

type Props = {
  stats: {
    totalProjects: number;
    activeProjects: number;
    completedProjects: number;
    totalClients: number;
    totalTasks: number;
    completedTasks: number;
    completionRate: number;
  };
};

import StatCard from './stat-card';

export default function StatsCards({ stats }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Projects"
        value={String(stats.totalProjects)}
        icon={null}
      />

      <StatCard
        title="In Progress"
        value={String(stats.activeProjects)}
        icon={null}
      />

      <StatCard
        title="Completed Projects"
        value={String(stats.completedProjects)}
        icon={null}
      />

      <StatCard
        title="Clients"
        value={String(stats.totalClients)}
        icon={null}
      />

      <StatCard
        title="Total Tasks"
        value={String(stats.totalTasks)}
        icon={null}
      />

      <StatCard
        title="Completed Tasks"
        value={String(stats.completedTasks)}
        icon={null}
      />

      <StatCard
        title="Completion Rate"
        value={`${stats.completionRate.toFixed(2)}%`}
        icon={null}
      />
    </div>
  );
}

import { query } from '@/convex/_generated/server';

export const getDashboardStats = query({
  args: {},
  handler: async (ctx) => {
    const projects = await ctx.db.query('projects').collect();
    const clients = await ctx.db.query('clients').collect();
    const tasks = await ctx.db.query('tasks').collect();

    const completedTasks = tasks.filter((t) => t.done).length;

    return {
      totalProjects: projects.length,
      activeProjects: projects.filter((p) => p.status === 'in-progress').length,
      completedProjects: projects.filter((p) => p.status === 'completed')
        .length,
      totalClients: clients.length,
      totalTasks: tasks.length,
      completedTasks,
      completionRate:
        tasks.length === 0
          ? 0
          : Math.round((completedTasks / tasks.length) * 100),
    };
  },
});

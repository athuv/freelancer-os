import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

export const getTasksByProject = query({
  args: {
    projectId: v.id('projects'),
  },

  handler: async (ctx, args) => {
    return await ctx.db
      .query('tasks')
      .filter((q) => q.eq(q.field('projectId'), args.projectId))
      .collect();
  },
});

export const createTask = mutation({
  args: {
    title: v.string(),
    projectId: v.id('projects'),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert('tasks', {
      title: args.title,
      done: false,
      projectId: args.projectId,
    });
  },
});

export const toggleTask = mutation({
  args: {
    id: v.id('tasks'),
  },

  handler: async (ctx, args) => {
    const task = await ctx.db.get(args.id);

    if (!task) return;

    await ctx.db.patch(args.id, {
      done: !task.done,
    });
  },
});

export const deleteTask = mutation({
  args: {
    id: v.id('tasks'),
  },

  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

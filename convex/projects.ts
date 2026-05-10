import { query, mutation } from './_generated/server';
import { v } from 'convex/values';
import { ProjectStatus } from './schemaHelpers';

// GET all projects
export const getProjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('projects').collect();
  },
});

// CREATE project
export const createProject = mutation({
  args: {
    name: v.string(),
    client: v.string(),
    status: ProjectStatus,
    description: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert('projects', args);
  },
});

// UPDATE project
export const updateProject = mutation({
  args: {
    id: v.id('projects'),
    name: v.string(),
    client: v.string(),
    status: ProjectStatus,
    description: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    const { id, ...rest } = args;

    await ctx.db.patch(id, rest);
  },
});

// DELETE project
export const deleteProject = mutation({
  args: {
    id: v.id('projects'),
  },

  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

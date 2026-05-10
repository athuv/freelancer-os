import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

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
    status: v.string(),
    description: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert('projects', args);
  },
});

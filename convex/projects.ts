import { query, mutation } from './_generated/server';
import { v } from 'convex/values';
import { ProjectStatus } from './schemaHelpers';

// GET all projects
export const getProjects = query({
  args: {},
  handler: async (ctx) => {
    const projects = await ctx.db.query('projects').collect();

    return await Promise.all(
      projects.map(async (project) => {
        const client = await ctx.db.get(project.clientId);
        return {
          ...project,
          client,
        };
      }),
    );
  },
});

// GET By ID projects
export const getProjectById = query({
  args: {
    id: v.id('projects'),
  },

  handler: async (ctx, args) => {
    const project = await ctx.db.get(args.id);
    if (!project) return null;

    const client = await ctx.db.get(project.clientId);
    return { ...project, client };
  },
});

// CREATE project
export const createProject = mutation({
  args: {
    name: v.string(),
    clientId: v.id('clients'),
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
    clientId: v.id('clients'),
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

export const getRecentProjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('projects').order('desc').take(5);
  },
});

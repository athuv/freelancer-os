import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

export const getClients = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('clients').collect();
  },
});

export const getClientById = query({
  args: {
    id: v.id('clients'),
  },

  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const createClient = mutation({
  args: {
    name: v.string(),
    email: v.optional(v.string()),
    company: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert('clients', args);
  },
});

export const updateClient = mutation({
  args: {
    id: v.id('clients'),
    name: v.string(),
    email: v.optional(v.string()),
    company: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    const { id, ...rest } = args;

    await ctx.db.patch(id, rest);
  },
});

export const deleteClient = mutation({
  args: {
    id: v.id('clients'),
  },

  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

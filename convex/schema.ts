import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  projects: defineTable({
    name: v.string(),
    client: v.string(),
    status: v.union(
      v.literal('planned'),
      v.literal('in-progress'),
      v.literal('completed'),
    ),
    description: v.optional(v.string()),
  }),

  tasks: defineTable({
    title: v.string(),
    done: v.boolean(),
    projectId: v.id('projects'),
  }),

  clients: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
  }),
});

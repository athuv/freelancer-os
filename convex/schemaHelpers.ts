import { v } from 'convex/values';

export const ProjectStatus = v.union(
  v.literal('planned'),
  v.literal('in-progress'),
  v.literal('completed'),
);

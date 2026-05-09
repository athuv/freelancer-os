import { z } from 'zod';

export const projectSchema = z.object({
  name: z.string().min(1, 'Project name is required'),
  client: z.string().min(1, 'Client is required'),
  status: z.string().min(1),
  description: z.string().optional(),
});
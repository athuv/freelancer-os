import { z } from 'zod';

export const projectSchema = z.object({
  name: z.string().min(1, 'Project name is required'),
  client: z.string().min(1, 'Client is required'),

  status: z.enum(['planned', 'in-progress', 'completed'] as const),

  description: z.string().optional(),
});

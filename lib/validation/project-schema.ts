import { z } from 'zod';
import { PROJECT_STATUS_VALUES } from '@/lib/constants/project-status';

export const projectSchema = z.object({
  name: z.string().min(1, 'Project name is required'),
  clientId: z.string(),
  status: z.enum(PROJECT_STATUS_VALUES),
  description: z.string().optional(),
});

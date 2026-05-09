import { z } from 'zod';

export const clientSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  company: z.string().optional(),
});

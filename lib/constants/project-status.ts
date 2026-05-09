import type { ProjectStatus } from '@/types/project';

export const PROJECT_STATUS_VALUES = [
  'planned',
  'in-progress',
  'completed',
] as const satisfies readonly ProjectStatus[];

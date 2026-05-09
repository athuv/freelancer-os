import type { ProjectStatus } from '@/types/project';

export function getStatusVariant(status: ProjectStatus) {
  switch (status) {
    case 'planned':
      return 'secondary';

    case 'in-progress':
      return 'default';

    case 'completed':
      return 'outline';

    default:
      return 'secondary';
  }
}

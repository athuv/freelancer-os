import { ProjectStatus } from '@/types/project';

export function getStatusVariant(status: ProjectStatus) {
  switch (status) {
    case 'Completed':
      return 'default';

    case 'In Progress':
      return 'secondary';

    default:
      return 'outline';
  }
}

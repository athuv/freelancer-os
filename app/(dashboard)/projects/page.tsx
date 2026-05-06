import ProjectsHeader from '@/app/(dashboard)/projects/projects-header';
import ProjectsList from '@/app/(dashboard)/projects/projects-list';

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <ProjectsHeader />
      <ProjectsList />
    </div>
  );
}

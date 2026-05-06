import ProjectsHeader from '@/app/components/projects/projects-header';
import ProjectsList from '@/app/components/projects/projects-list';

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <ProjectsHeader />
      <ProjectsList />
    </div>
  );
}

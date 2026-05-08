import { notFound } from 'next/navigation';

import { clients } from '@/data/mock-clients';
import { projects } from '@/data/mock-projects';
import PageContainer from '@/app/components/layout/page-container';

export default async function ClientDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const client = clients.find((c) => c.id === id);

  if (!client) return notFound();

  const clientProjects = projects.filter((p) => p.client === client.name);

  return (
    <PageContainer>
      <div>
        <h1 className="text-2xl font-semibold">{client.name}</h1>

        <p className="text-muted-foreground text-sm">{client.company}</p>
      </div>

      <div className="rounded-2xl border p-4">
        <p className="text-sm">
          <span className="text-muted-foreground">Email:</span>
          {client.email ?? 'Not provided'}
        </p>

        <p className="mt-2 text-sm">
          <span className="text-muted-foreground">Projects:</span>
          {client.projectsCount}
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Projects</h2>

        {clientProjects.length === 0 ? (
          <p className="text-muted-foreground text-sm">
            No projects for this client.
          </p>
        ) : (
          clientProjects.map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between rounded-xl border px-4 py-3"
            >
              <div>
                <p className="font-medium">{project.name}</p>

                <p className="text-muted-foreground text-sm">
                  {project.status}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </PageContainer>
  );
}
